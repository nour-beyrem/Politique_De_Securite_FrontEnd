import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationlistComponent } from './confirmationlist.component';

describe('ConfirmationlistComponent', () => {
  let component: ConfirmationlistComponent;
  let fixture: ComponentFixture<ConfirmationlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmationlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmationlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
