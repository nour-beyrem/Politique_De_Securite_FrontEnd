import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAutorisationComponent } from './update-autorisation.component';

describe('UpdateAutorisationComponent', () => {
  let component: UpdateAutorisationComponent;
  let fixture: ComponentFixture<UpdateAutorisationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAutorisationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAutorisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
