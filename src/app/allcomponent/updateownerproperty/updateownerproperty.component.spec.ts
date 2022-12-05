import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateownerpropertyComponent } from './updateownerproperty.component';

describe('UpdateownerpropertyComponent', () => {
  let component: UpdateownerpropertyComponent;
  let fixture: ComponentFixture<UpdateownerpropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateownerpropertyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateownerpropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
