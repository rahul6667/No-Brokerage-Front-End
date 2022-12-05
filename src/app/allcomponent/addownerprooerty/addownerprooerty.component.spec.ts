import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddownerprooertyComponent } from './addownerprooerty.component';

describe('AddownerprooertyComponent', () => {
  let component: AddownerprooertyComponent;
  let fixture: ComponentFixture<AddownerprooertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddownerprooertyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddownerprooertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
