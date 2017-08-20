import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-phone-list',
  templateUrl: './phone-list.container.html',
  styleUrls: ['./phone-list.container.css']
})
export class PhoneListContainer implements OnInit {

  phones$: Observable<any>;

  constructor(private store: Store<any>) {
      this.phones$ = store.select('ids');
  }

  ngOnInit() {
  }

}
