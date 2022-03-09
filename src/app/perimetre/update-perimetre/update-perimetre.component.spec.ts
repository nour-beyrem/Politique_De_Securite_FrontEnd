import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePerimetreComponent } from './update-perimetre.component';

describe('UpdatePerimetreComponent', () => {
  let component: UpdatePerimetreComponent;
  let fixture: ComponentFixture<UpdatePerimetreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePerimetreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePerimetreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
