import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-sign-in-screen',
  templateUrl: './sign-in-screen.page.html',
  styleUrls: ['./sign-in-screen.page.scss'],
})
export class SignInScreenPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  goToSignInTelefonnummer(){
    this.router.navigate(['sign-in-telefonnummer']);
  }

}
