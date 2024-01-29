import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RobosComponent } from './robos.component';

describe('RobosComponent', () => {
  let component: RobosComponent;
  let fixture: ComponentFixture<RobosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RobosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RobosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
