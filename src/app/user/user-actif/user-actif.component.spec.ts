import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserActifComponent } from './user-actif.component';

describe('UserActifComponent', () => {
  let component: UserActifComponent;
  let fixture: ComponentFixture<UserActifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserActifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserActifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
