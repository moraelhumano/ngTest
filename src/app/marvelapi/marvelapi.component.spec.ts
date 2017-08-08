import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarvelapiComponent } from './marvelapi.component';

describe('MarvelapiComponent', () => {
  let component: MarvelapiComponent;
  let fixture: ComponentFixture<MarvelapiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarvelapiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarvelapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
