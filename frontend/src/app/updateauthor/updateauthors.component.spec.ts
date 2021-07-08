import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateauthorsComponent } from './updateauthors.component';

describe('UpdateauthorsComponent', () => {
  let component: UpdateauthorsComponent;
  let fixture: ComponentFixture<UpdateauthorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateauthorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateauthorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
