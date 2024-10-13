import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechsTablesComponent } from './techs-tables.component';

describe('TechsTablesComponent', () => {
  let component: TechsTablesComponent;
  let fixture: ComponentFixture<TechsTablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechsTablesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechsTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
