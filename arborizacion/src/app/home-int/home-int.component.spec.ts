import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeIntComponent } from './home-int.component';

describe('HomeIntComponent', () => {
  let component: HomeIntComponent;
  let fixture: ComponentFixture<HomeIntComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeIntComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeIntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
