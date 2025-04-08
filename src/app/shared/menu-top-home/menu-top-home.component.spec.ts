import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuTopHomeComponent } from './menu-top-home.component';

describe('MenuTopHomeComponent', () => {
  let component: MenuTopHomeComponent;
  let fixture: ComponentFixture<MenuTopHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuTopHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuTopHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
