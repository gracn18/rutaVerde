import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEspecimenesComponent } from './list-especimenes.component';

describe('ListEspecimenesComponent', () => {
  let component: ListEspecimenesComponent;
  let fixture: ComponentFixture<ListEspecimenesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListEspecimenesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEspecimenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
