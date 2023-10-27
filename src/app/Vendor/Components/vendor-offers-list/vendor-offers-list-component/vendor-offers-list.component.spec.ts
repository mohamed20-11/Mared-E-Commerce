/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VendorOffersListComponentComponent } from './vendor-offers-list.component';

describe('VendorOffersListComponentComponent', () => {
  let component: VendorOffersListComponentComponent;
  let fixture: ComponentFixture<VendorOffersListComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorOffersListComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorOffersListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
