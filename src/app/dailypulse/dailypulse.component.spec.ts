import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailypulseComponent } from './dailypulse.component';

describe('DailypulseComponent', () => {
  let component: DailypulseComponent;
  let fixture: ComponentFixture<DailypulseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DailypulseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailypulseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
