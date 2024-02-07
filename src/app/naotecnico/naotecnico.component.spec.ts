import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaotecnicoComponent } from './naotecnico.component';

describe('NaotecnicoComponent', () => {
  let component: NaotecnicoComponent;
  let fixture: ComponentFixture<NaotecnicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NaotecnicoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NaotecnicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
