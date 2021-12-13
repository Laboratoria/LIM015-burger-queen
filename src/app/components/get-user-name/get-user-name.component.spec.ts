import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetUserNameComponent } from './get-user-name.component';

describe('GetUserNameComponent', () => {
  let component: GetUserNameComponent;
  let fixture: ComponentFixture<GetUserNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetUserNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetUserNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
