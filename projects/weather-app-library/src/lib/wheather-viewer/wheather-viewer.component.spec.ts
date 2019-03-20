import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WheatherViewerComponent } from './wheather-viewer.component';

describe('WheatherViewerComponent', () => {
  let component: WheatherViewerComponent;
  let fixture: ComponentFixture<WheatherViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WheatherViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WheatherViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
