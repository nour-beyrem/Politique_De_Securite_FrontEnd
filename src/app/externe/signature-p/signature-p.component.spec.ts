import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignaturePComponent } from './signature-p.component';

describe('SignaturePComponent', () => {
  let component: SignaturePComponent;
  let fixture: ComponentFixture<SignaturePComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignaturePComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignaturePComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
