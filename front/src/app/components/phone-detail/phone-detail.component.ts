import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-phone-detail',
  templateUrl: './phone-detail.component.html',
  styleUrls: ['./phone-detail.component.css']
})
export class PhoneDetailComponent implements OnInit {

  @Input() phone: Object;

  constructor() { }

  ngOnInit() {
  }

}
