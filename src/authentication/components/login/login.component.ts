import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/authentication/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthenticationService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      Username: ['', [Validators.required, Validators.email]],
      Password: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  login(): void {
    if (this.loginForm.valid) {
      const credentials = this.loginForm.value;
      this.authService.login(credentials).subscribe({
        next: response => {
          if (response.Login.AccessToken && response.Login.RefreshToken) {
            this.authService.setTokens({
              accessToken: response.Login.AccessToken,
              refreshToken: response.Login.RefreshToken
            });
            this.router.navigate(['/main']);
            console.log('Login successful');
          }
        },
        error: error => {
          console.log('Login failed', error);
        }
      });
    }
  }
}
