import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSortieComponent } from './update-sortie.component';

describe('UpdateSortieComponent', () => {
  let component: UpdateSortieComponent;
  let fixture: ComponentFixture<UpdateSortieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateSortieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSortieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
