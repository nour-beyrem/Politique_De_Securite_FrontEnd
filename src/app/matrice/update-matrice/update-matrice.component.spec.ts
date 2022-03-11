import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMatriceComponent } from './update-matrice.component';

describe('UpdateMatriceComponent', () => {
  let component: UpdateMatriceComponent;
  let fixture: ComponentFixture<UpdateMatriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateMatriceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateMatriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
