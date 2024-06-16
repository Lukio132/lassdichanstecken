import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfcardsComponent } from './selfcards.component';

describe('SelfcardsComponent', () => {
  let component: SelfcardsComponent;
  let fixture: ComponentFixture<SelfcardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelfcardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelfcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
