import { Component } from '@angular/core';
import { HttpModule } from '@angular/http';
import { NgModel } from '@angular/forms';
import { MarvelService} from './marvelapi/marvelapi.service';
import { Hero } from './heros';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[MarvelService],
})
export class AppComponent {
    title = 'Myapp';
    username = 'Salvador'
    listaHeroes: any;


    constructor(private servicio:MarvelService){
    }

    cargarDatosMarvel(){
        this.listaHeroes = this.servicio.getHeroes();
        console.log(this.listaHeroes)
    }



    ngOnInit(): void {
        console.log('hello');
    };

    alertMsg(): void {
        console.log('morro');
    };

}
