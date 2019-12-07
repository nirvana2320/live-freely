import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarMainContentComponent } from './side-bar-main-content.component';

describe('SideBarMainContentComponent', () => {
  let component: SideBarMainContentComponent;
  let fixture: ComponentFixture<SideBarMainContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideBarMainContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideBarMainContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
