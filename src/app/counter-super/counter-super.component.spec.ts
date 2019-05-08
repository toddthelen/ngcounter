import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterSuperComponent } from './counter-super.component';

describe('CounterSuperComponent', () => {
  let component: CounterSuperComponent;
  let fixture: ComponentFixture<CounterSuperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterSuperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterSuperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
