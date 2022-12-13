import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserdataEditableComponent } from './userdata-editable.component';

describe('UserdataEditableComponent', () => {
  let component: UserdataEditableComponent;
  let fixture: ComponentFixture<UserdataEditableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserdataEditableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserdataEditableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
