import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkcardsComponent } from './workcards.component';

describe('WorkcardsComponent', () => {
  let component: WorkcardsComponent;
  let fixture: ComponentFixture<WorkcardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkcardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WorkcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
