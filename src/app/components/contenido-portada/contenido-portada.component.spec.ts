import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoPortadaComponent } from './contenido-portada.component';

describe('ContenidoPortadaComponent', () => {
  let component: ContenidoPortadaComponent;
  let fixture: ComponentFixture<ContenidoPortadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContenidoPortadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenidoPortadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
