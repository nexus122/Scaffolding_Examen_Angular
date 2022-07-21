import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ObtainDataService } from 'src/app/service/obtain-data.service';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss']
})
export class DetailPageComponent implements OnInit {
  id:any;
  film: any;

  constructor(private activatedRoute:ActivatedRoute, private obtainDataService:ObtainDataService ) { 
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    this.film = this.obtainDataService.getFilmForId(this.id);
  }


  ngOnInit(): void {
  }

}
