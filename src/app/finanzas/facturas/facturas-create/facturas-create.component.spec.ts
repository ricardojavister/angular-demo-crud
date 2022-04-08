import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturasCreateComponent } from './facturas-create.component';

describe('FacturasCreateComponent', () => {
  let component: FacturasCreateComponent;
  let fixture: ComponentFixture<FacturasCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacturasCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturasCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
