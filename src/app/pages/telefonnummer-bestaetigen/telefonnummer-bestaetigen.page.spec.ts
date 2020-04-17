import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TelefonnummerBestaetigenPage } from './telefonnummer-bestaetigen.page';

describe('TelefonnummerBestaetigenPage', () => {
  let component: TelefonnummerBestaetigenPage;
  let fixture: ComponentFixture<TelefonnummerBestaetigenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelefonnummerBestaetigenPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TelefonnummerBestaetigenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
