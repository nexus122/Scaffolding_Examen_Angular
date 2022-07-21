import { Component, OnInit } from '@angular/core';
import { ObtainDataService } from 'src/app/service/obtain-data.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  constructor(private obtainDataService:ObtainDataService) {}

  peliculas = this.obtainDataService.getAllFilms();

  marvelMovies = this.obtainDataService.getFilmMarvel();
  DCMovies = this.obtainDataService.getFilmDC();
  
  ngOnInit(): void {
    
  }

}
