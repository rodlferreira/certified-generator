import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertifiedForm } from './certified-form';

describe('CertifiedForm', () => {
  let component: CertifiedForm;
  let fixture: ComponentFixture<CertifiedForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CertifiedForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CertifiedForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
