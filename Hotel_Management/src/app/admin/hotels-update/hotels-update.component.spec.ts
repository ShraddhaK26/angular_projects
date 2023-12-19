import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelsUpdateComponent } from './hotels-update.component';

describe('HotelsUpdateComponent', () => {
  let component: HotelsUpdateComponent;
  let fixture: ComponentFixture<HotelsUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HotelsUpdateComponent]
    });
    fixture = TestBed.createComponent(HotelsUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
