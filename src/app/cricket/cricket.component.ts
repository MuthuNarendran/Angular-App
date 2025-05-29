import { Component, EventEmitter, Input, Output } from '@angular/core';
import { logger } from '../logger';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cricket',
  standalone: false,
  templateUrl: './cricket.component.html',
  styleUrl: './cricket.component.css'
})
export class CricketComponent {
  // @Input() title:string | undefined;
  title="pipes"
  @Output() game = new EventEmitter<string>();
  // loggr:logger | undefined;
  
  ngOnInit() {
    this.logger.evit.subscribe((event) => {
      console.log("event" +event);
    });
  }
  constructor(private logger:logger){
  }


  gameMe(e:any){
    this.logger.log("YES");
    this.game.emit(e);
  }

}
