import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/auth/services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
 
  isOpen = false;
  user: firebase.User;
  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.auth.getUserState()
      .subscribe( user => {
        this.user = user;
      })
  }

  toggleNavbar() {
    this.isOpen = !this.isOpen;
  }
  
  logout() {
   return this.auth.logout();
  }

}
