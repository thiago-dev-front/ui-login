import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiPageHeaderComponent } from './ui-header.component';

describe('UiPageHeaderComponent', () => {
  let component: UiPageHeaderComponent;
  let fixture: ComponentFixture<UiPageHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiPageHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiPageHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
