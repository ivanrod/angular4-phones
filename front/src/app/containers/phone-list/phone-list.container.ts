import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-phone-list',
  templateUrl: './phone-list.container.html',
  styleUrls: ['./phone-list.container.css']
})
export class PhoneListContainer implements OnInit {

  phones: Array<Object> = [{name: 'eip'}, {name: 'yep'}];

  constructor() { }

  ngOnInit() {
  }

}
