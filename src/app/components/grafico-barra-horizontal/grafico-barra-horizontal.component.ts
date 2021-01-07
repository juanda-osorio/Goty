import { Component, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-grafico-barra-horizontal',
  templateUrl: './grafico-barra-horizontal.component.html',
  styleUrls: ['./grafico-barra-horizontal.component.css']
})
export class GraficoBarraHorizontalComponent implements OnDestroy {

  @Input() results: any[] = [];

  // results: any[] = [
  //   {
  //     "name": "Juego 1",
  //     "value": 20
  //   },
  //   {
  //     "name": "Juego 2",
  //     "value": 50
  //   },
  //   {
  //     "name": "Juego 3",
  //     "value": 60
  //   },
  //   {
  //     "name": "Juego 4",
  //     "value": 15
  //   }
  // ];
  

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Votos';
  showYAxisLabel = true;
  yAxisLabel = 'Juegos';

  colorScheme = 'nightLights';

  // intervalo;

  constructor() {
    
    // this.intervalo = setInterval( () =>{
    //   console.log("tick");
      
    //   const newResults = [...this.results];

    //   for(let i in newResults){
    //     newResults[i].value = Math.round( Math.random()*500 );
    //   }
    //   this.results = [...newResults];
    // }, 1500);

  }

  onSelect(evento:any) {
    console.log(evento);
  }

  /* Está puesto para terminar el 'interval' y eviar fugas de memoria */
  ngOnDestroy(){
    // clearInterval( this.intervalo );
  }

}
