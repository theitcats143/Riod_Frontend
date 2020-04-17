import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-sign-in-telefonnummer',
  templateUrl: './sign-in-telefonnummer.page.html',
  styleUrls: ['./sign-in-telefonnummer.page.scss'],
})
export class SignInTelefonnummerPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  handyVerifizieren() {
     this.router.navigate(["telefonnummer-bestaetigen"]);
 }

}
