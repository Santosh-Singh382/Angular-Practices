import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuralDiv } from './structural-div';

describe('StructuralDiv', () => {
  let component: StructuralDiv;
  let fixture: ComponentFixture<StructuralDiv>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StructuralDiv]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StructuralDiv);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
