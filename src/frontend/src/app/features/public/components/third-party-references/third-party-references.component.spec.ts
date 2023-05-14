import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdPartyReferencesComponent } from './third-party-references.component';

describe('ThirdPartyReferencesComponent', () => {
  let component: ThirdPartyReferencesComponent;
  let fixture: ComponentFixture<ThirdPartyReferencesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThirdPartyReferencesComponent]
    });
    fixture = TestBed.createComponent(ThirdPartyReferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
