import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateExterneComponent } from './update-externe.component';

describe('UpdateExterneComponent', () => {
  let component: UpdateExterneComponent;
  let fixture: ComponentFixture<UpdateExterneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateExterneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateExterneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
