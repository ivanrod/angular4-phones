import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneListContainer } from './phone-list.container';

describe('PhoneListComponent', () => {
  let component: PhoneListContainer;
  let fixture: ComponentFixture<PhoneListContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhoneListContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneListContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
