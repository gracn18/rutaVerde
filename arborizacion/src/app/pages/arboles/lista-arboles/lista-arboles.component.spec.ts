import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaArbolesComponent } from './lista-arboles.component';

describe('ListaArbolesComponent', () => {
  let component: ListaArbolesComponent;
  let fixture: ComponentFixture<ListaArbolesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaArbolesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaArbolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
