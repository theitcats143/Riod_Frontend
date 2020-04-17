import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SignInScreenPage } from './sign-in-screen.page';

describe('SignInScreenPage', () => {
  let component: SignInScreenPage;
  let fixture: ComponentFixture<SignInScreenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignInScreenPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SignInScreenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
