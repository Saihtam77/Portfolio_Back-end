import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuToogleBtnComponent } from './menu-toogle-btn.component';

describe('MenuToogleBtnComponent', () => {
  let component: MenuToogleBtnComponent;
  let fixture: ComponentFixture<MenuToogleBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuToogleBtnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuToogleBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
