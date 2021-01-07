import { GameService } from './../../services/game.service';
import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/Interfaces/interfaces';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-goty',
  templateUrl: './goty.component.html',
  styleUrls: ['./goty.component.css']
})
export class GotyComponent implements OnInit {

  juegos: Game[] = [];

  constructor(private _gameService: GameService) { }

  ngOnInit(): void {
    this._gameService.getNominados()
      .subscribe( juegos =>{
        console.log(juegos);
        this.juegos = juegos;
      })
  }

  votar(juego: Game){
    this._gameService.votarJuego(juego.id)
      .subscribe((resp:{ok: boolean, mensaje: string}) =>{

        if(resp.ok){
          Swal.fire({
            icon: 'success',
            title: 'Hecho!',
            text: resp.mensaje,
            showCloseButton: true
          })
        }else{
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: resp.mensaje,
            showCloseButton: true
          })
        }
        

        console.log(resp);
      });
  }

}
