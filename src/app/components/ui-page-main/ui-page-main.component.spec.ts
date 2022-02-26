import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiPageMainComponent } from './ui-page-main.component';

describe('UiPageMainComponent', () => {
  let component: UiPageMainComponent;
  let fixture: ComponentFixture<UiPageMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiPageMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiPageMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
