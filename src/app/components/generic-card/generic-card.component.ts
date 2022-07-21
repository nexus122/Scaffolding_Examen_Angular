import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-generic-card',
  templateUrl: './generic-card.component.html',
  styleUrls: ['./generic-card.component.scss']
})
export class GenericCardComponent implements OnInit {

  @Input() pelicula:any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
