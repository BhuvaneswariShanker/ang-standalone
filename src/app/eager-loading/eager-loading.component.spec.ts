import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EagerLoadingComponent } from './eager-loading.component';

describe('EagerLoadingComponent', () => {
  let component: EagerLoadingComponent;
  let fixture: ComponentFixture<EagerLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EagerLoadingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EagerLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
