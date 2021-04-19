import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecimenesComponent } from './especimenes.component';

describe('EspecimenesComponent', () => {
  let component: EspecimenesComponent;
  let fixture: ComponentFixture<EspecimenesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspecimenesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EspecimenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
