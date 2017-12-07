import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockchainsComponent } from './blockchains.component';

describe('BlockchainsComponent', () => {
  let component: BlockchainsComponent;
  let fixture: ComponentFixture<BlockchainsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockchainsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockchainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
