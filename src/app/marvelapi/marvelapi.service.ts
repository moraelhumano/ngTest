import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map'


@Injectable()
export class MarvelService {
    constructor(private http:Http){}
    getHeroes(){
            let url = 'http://gateway.marvel.com:80/v1/public/characters?ts=1&apikey=4339f97c8d2f4e6b58223609ccd215b8&hash=a00641a5c54db3011f573060d17696d3';
            return this.http.get(url)
                .map(response => response.json().data.results);


}

}
