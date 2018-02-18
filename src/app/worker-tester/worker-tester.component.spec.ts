import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerTesterComponent } from './worker-tester.component';

describe('WorkerTesterComponent', () => {
  let component: WorkerTesterComponent;
  let fixture: ComponentFixture<WorkerTesterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkerTesterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkerTesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
