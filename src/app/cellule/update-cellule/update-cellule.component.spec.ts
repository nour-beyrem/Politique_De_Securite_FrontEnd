import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCelluleComponent } from './update-cellule.component';

describe('UpdateCelluleComponent', () => {
  let component: UpdateCelluleComponent;
  let fixture: ComponentFixture<UpdateCelluleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCelluleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCelluleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
