import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendbirdDashboardComponent } from './sendbird-dashboard.component';

describe('SendbirdDashboardComponent', () => {
  let component: SendbirdDashboardComponent;
  let fixture: ComponentFixture<SendbirdDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendbirdDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendbirdDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
