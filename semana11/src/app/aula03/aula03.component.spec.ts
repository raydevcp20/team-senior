import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aula03Component } from './aula03.component';

describe('Aula03Component', () => {
  let component: Aula03Component;
  let fixture: ComponentFixture<Aula03Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Aula03Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Aula03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
