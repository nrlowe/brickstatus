import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  @Input() inputValue: string = ''; // Initialize inputValue

  isStarFilled = false;

  toggleStar() {
    this.isStarFilled = !this.isStarFilled;
  }

  searchForItem(inputValue : any) : void  {

  }
}
