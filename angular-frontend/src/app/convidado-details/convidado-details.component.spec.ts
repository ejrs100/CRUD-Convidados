import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvidadoDetailsComponent } from './convidado-details.component';

describe('ConvidadoDetailsComponent', () => {
  let component: ConvidadoDetailsComponent;
  let fixture: ComponentFixture<ConvidadoDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConvidadoDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvidadoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
