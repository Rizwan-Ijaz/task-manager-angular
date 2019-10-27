import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  signingIn = false;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  onClickSubmit() {
    this.signingIn = true;
  }

  onClickNavigateToSignUp() {
    this.router.navigate(['/registration']);
  }
}
