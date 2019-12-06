import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnpageEditorComponent } from './onpage-editor.component';

describe('OnpageEditorComponent', () => {
  let component: OnpageEditorComponent;
  let fixture: ComponentFixture<OnpageEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnpageEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnpageEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
