import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTitlesComponent } from './page-titles.component';

describe('PageTitlesComponent', () => {
  let component: PageTitlesComponent;
  let fixture: ComponentFixture<PageTitlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageTitlesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageTitlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
