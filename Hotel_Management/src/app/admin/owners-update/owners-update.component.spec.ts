import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnersUpdateComponent } from './owners-update.component';

describe('OwnersUpdateComponent', () => {
  let component: OwnersUpdateComponent;
  let fixture: ComponentFixture<OwnersUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OwnersUpdateComponent]
    });
    fixture = TestBed.createComponent(OwnersUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
