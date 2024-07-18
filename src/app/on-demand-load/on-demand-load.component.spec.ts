import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnDemandLoadComponent } from './on-demand-load.component';

describe('OnDemandLoadComponent', () => {
  let component: OnDemandLoadComponent;
  let fixture: ComponentFixture<OnDemandLoadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnDemandLoadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnDemandLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
