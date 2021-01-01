import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuArticleMostCommentComponent } from './menu-article-most-comment.component';

describe('MenuArticleMostCommentComponent', () => {
  let component: MenuArticleMostCommentComponent;
  let fixture: ComponentFixture<MenuArticleMostCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuArticleMostCommentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuArticleMostCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
