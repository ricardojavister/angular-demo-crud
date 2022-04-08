import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesCreateComponent } from './clientes-create.component';

describe('ClientesCreateComponent', () => {
  let component: ClientesCreateComponent;
  let fixture: ComponentFixture<ClientesCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientesCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientesCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
