import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercicioDezComponent } from './exercicio-dez.component';

describe('ExercicioDezComponent', () => {
  let component: ExercicioDezComponent;
  let fixture: ComponentFixture<ExercicioDezComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExercicioDezComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExercicioDezComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
