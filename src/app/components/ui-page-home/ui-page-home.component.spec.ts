import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiPageHomeComponent } from './ui-page-home.component';

describe('UiPageHomeComponent', () => {
  let component: UiPageHomeComponent;
  let fixture: ComponentFixture<UiPageHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiPageHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiPageHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
