import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllcomponentComponent } from './allcomponent.component';

describe('AllcomponentComponent', () => {
  let component: AllcomponentComponent;
  let fixture: ComponentFixture<AllcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllcomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
