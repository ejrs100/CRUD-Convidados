import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvidadoListComponent } from './convidado-list.component';

describe('ConvidadoListComponent', () => {
  let component: ConvidadoListComponent;
  let fixture: ComponentFixture<ConvidadoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConvidadoListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvidadoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
