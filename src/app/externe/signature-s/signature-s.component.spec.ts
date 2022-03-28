import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignatureSComponent } from './signature-s.component';

describe('SignatureSComponent', () => {
  let component: SignatureSComponent;
  let fixture: ComponentFixture<SignatureSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignatureSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignatureSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
