import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCondidatureComponent } from './add-condidature.component';

describe('AddCondidatureComponent', () => {
  let component: AddCondidatureComponent;
  let fixture: ComponentFixture<AddCondidatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCondidatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCondidatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
