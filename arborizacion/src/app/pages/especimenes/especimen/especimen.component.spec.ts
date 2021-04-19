import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecimenComponent } from './especimen.component';

describe('EspecimenComponent', () => {
  let component: EspecimenComponent;
  let fixture: ComponentFixture<EspecimenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspecimenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EspecimenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
