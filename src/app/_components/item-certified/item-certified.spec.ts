import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCertified } from './item-certified';

describe('ItemCertified', () => {
  let component: ItemCertified;
  let fixture: ComponentFixture<ItemCertified>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemCertified]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemCertified);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
