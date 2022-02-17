import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicDivisionComponent } from './dynamic-division.component';

describe('DynamicDivisionComponent', () => {
  let component: DynamicDivisionComponent;
  let fixture: ComponentFixture<DynamicDivisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicDivisionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicDivisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
