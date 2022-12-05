import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageownerpropertyComponent } from './manageownerproperty.component';

describe('ManageownerpropertyComponent', () => {
  let component: ManageownerpropertyComponent;
  let fixture: ComponentFixture<ManageownerpropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageownerpropertyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageownerpropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
