import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateActifComponent } from './update-actif.component';

describe('UpdateActifComponent', () => {
  let component: UpdateActifComponent;
  let fixture: ComponentFixture<UpdateActifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateActifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateActifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
