import { Component, EventEmitter, Output } from '@angular/core';
import { logger } from './logger';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'muthu-demo-angular';
  henry = false;
  twoway=true;
  id!:any;
  // evit :EventEmitter<string> = new EventEmitter<string>();
  constructor(private loggr:logger,private router:ActivatedRoute){
    
  }
  onSubmit(f:NgForm){
    console.log(f);
  }

  ngOnInit(){
    this.router.params.subscribe(params => {
      this.id = params['id'];
      console.log("id",this.id);
    });
    this.loggr.evit.subscribe((event) => {
      console.log("event" +event);
    });
  }


  onupdate1(event:Event){
    this.loggr.evit.emit((<HTMLInputElement>event.target).value);
  console.log((<HTMLInputElement>event.target).value);

  }
  // constructor() {
  //   console.log(this.twoway);
  // }                     

  cap(event:string){
    console.log(event);
  }
}
