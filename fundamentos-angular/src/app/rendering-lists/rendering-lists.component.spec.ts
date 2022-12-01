import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderingListsComponent } from './rendering-lists.component';

describe('RenderingListsComponent', () => {
  let component: RenderingListsComponent;
  let fixture: ComponentFixture<RenderingListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenderingListsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RenderingListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
