import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiabetesViewComponent } from './diabetes-view.component';

describe('DiabetesViewComponent', () => {
  let component: DiabetesViewComponent;
  let fixture: ComponentFixture<DiabetesViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiabetesViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiabetesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
