import { Injectable } from '@angular/core';

enum filmType {
  Marvel,
  DC
}

const peliculas: Array<any> = [
  {id: 1, tipo: filmType.Marvel, name: 'Capitán América: El primer vengador', year: 2011, img: './assets/portadas/capitan-america-poster.jpg'},
  {id: 2, tipo: filmType.Marvel, name: 'Capitana Marvel', year: 2019, img: './assets/portadas/capitana-marvel-poster.jpg'},
  {id: 3, tipo: filmType.Marvel, name: 'Iron Man', year: 2008, img: './assets/portadas/iron-man-poster.jpg'},
  {id: 4, tipo: filmType.Marvel, name: 'Iron Man2', year: 2010, img: './assets/portadas/iron-man-2-poster.jpg'},
  {id: 5, tipo: filmType.DC, name: 'El Escuadrón Suicida', year: 2021, img: './assets/portadas/escuadron-suicida.jpg'},
  {id: 6, tipo: filmType.DC, name: 'Batman v Superman: Dawn of Justice', year: 2016, img: './assets/portadas/batman-vs-superman.jpg'},
]

@Injectable({
  providedIn: 'root'
})

export class ObtainDataService {

  constructor() { }

  getFilmForId(id:number){
    return peliculas.find((pelicula)=> pelicula.id == id);
  }

  getFilmsForYears(year:number){
    return peliculas.filter((pelicula)=> pelicula.year == year)
  }

  getFilmMarvel(){
    return peliculas.filter((pelicula)=> pelicula.tipo == filmType.Marvel)
  }

  getFilmDC(){
    return peliculas.filter((pelicula)=> pelicula.tipo == filmType.DC)
  }

  getAllFilms(){
    return peliculas;
  }

}
