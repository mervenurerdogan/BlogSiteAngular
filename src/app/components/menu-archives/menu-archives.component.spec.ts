import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuArchivesComponent } from './menu-archives.component';

describe('MenuArchivesComponent', () => {
  let component: MenuArchivesComponent;
  let fixture: ComponentFixture<MenuArchivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuArchivesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuArchivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
