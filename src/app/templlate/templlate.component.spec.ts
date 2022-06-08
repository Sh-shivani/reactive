import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempllateComponent } from './templlate.component';

describe('TempllateComponent', () => {
  let component: TempllateComponent;
  let fixture: ComponentFixture<TempllateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempllateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TempllateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
