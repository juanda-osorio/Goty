import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Game } from 'src/app/Interfaces/interfaces';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  juegos: any[] = [];

  constructor(private db: AngularFirestore) { }

  ngOnInit(): void {
    //Obtener referencia a la bbdd firebase
    this.db.collection('goty').valueChanges()
      .pipe(
        /* Desestructuración: cojo 'name' y 'votos' y los asigno a 'name' y 'value'
        *  que son los datos que la gráfica espera recibir.
        *  'resp.map' devuelve un Array */
        map( 
          (resp:any[]) => resp.map( ({name, votos}) => ({name: name, value: votos}) ) 
        )
      )
      .subscribe( juegos =>{
        //console.log(juegos);
        // this.juegos.push(juegos);
        this.juegos = juegos;
      })
  }

}
