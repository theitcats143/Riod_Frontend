import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-telefonnummer-bestaetigen',
  templateUrl: './telefonnummer-bestaetigen.page.html',
  styleUrls: ['./telefonnummer-bestaetigen.page.scss'],
})
export class TelefonnummerBestaetigenPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToStart(){
    this.router.navigate(["start-screen"]);
  }

}
