import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Game } from '../Interfaces/interfaces';
import { of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class GameService {

  /* Estoy almacenando temporalmente los juegos aqui
  *  para que al moverse entre pestañas no se hagan tantas 
  *  peticiones get al servicio; si no, que devuelva los juegos
  *  guardados en este array. */
  private juegos: Game[] = [];

  constructor(private http: HttpClient) { }

  getNominados(){
    if (this.juegos.length > 0) {
      console.log("desde caché");
      return of(this.juegos)
    }else{
      console.log("desde internet");

      return this.http.get<Game[]>(`${ environment.url }/api/goty`)
        .pipe(
          tap(
            juegos => this.juegos = juegos
          )
        );
  
    }
  }
  
  votarJuego( id: string ){
    /* En las peticinoes POST normalmente se envian mas datos en el body
    *  pero en este caso no hace falta, asi que enviamos un body vacío */
    
    return this.http.post(`${ environment.url }/api/goty/${ id }`,{})
      .pipe(
        catchError( err =>{
          //Esto devuelve un observable
          return of(err.error);
        })
      )
  }


}
