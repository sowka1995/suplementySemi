import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSupplementComponent } from './add-supplement.component';

describe('AddSupplementComponent', () => {
  let component: AddSupplementComponent;
  let fixture: ComponentFixture<AddSupplementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSupplementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSupplementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
