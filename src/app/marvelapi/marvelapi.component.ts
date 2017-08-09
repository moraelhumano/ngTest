import { Component, OnInit } from '@angular/core';
import { HttpModule } from '@angular/http';
import { NgModel } from '@angular/forms';
import { MarvelService} from './marvelapi.service';



@Component({
  selector: 'app-marvelapi',
  templateUrl: './marvelapi.component.html',
  styleUrls: ['./marvelapi.component.css']
})
export class MarvelapiComponent implements OnInit {



      title = 'Myapp';
      username = 'Salvador';
      listaHeroes: any;


      constructor(private servicio:MarvelService){
      }


  cargarDatosMarvel(){
      this.servicio.getHeroes().subscribe(listaHeroes => this.listaHeroes = listaHeroes);

  }


  ngOnInit() {
      this.cargarDatosMarvel();
  }

}
