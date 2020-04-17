import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SignInTelefonnummerPage } from './sign-in-telefonnummer.page';

describe('SignInTelefonnummerPage', () => {
  let component: SignInTelefonnummerPage;
  let fixture: ComponentFixture<SignInTelefonnummerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignInTelefonnummerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SignInTelefonnummerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
