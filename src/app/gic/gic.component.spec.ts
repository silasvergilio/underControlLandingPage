import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GicComponent } from './gic.component';

describe('GicComponent', () => {
  let component: GicComponent;
  let fixture: ComponentFixture<GicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
