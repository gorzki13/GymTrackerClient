import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnerepmaxcalculatorComponent } from './onerepmaxcalculator.component';

describe('OnerepmaxcalculatorComponent', () => {
  let component: OnerepmaxcalculatorComponent;
  let fixture: ComponentFixture<OnerepmaxcalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnerepmaxcalculatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnerepmaxcalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
