/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CountrySliderComponent } from './country-slider.component';

describe('CountrySliderComponent', () => {
  let component: CountrySliderComponent;
  let fixture: ComponentFixture<CountrySliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountrySliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountrySliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
