import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReunionCComponent } from './reunion-c.component';

describe('ReunionCComponent', () => {
  let component: ReunionCComponent;
  let fixture: ComponentFixture<ReunionCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReunionCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReunionCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
