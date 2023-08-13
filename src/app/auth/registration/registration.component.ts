import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthenticationService,
    private router: Router
  ) {
    this.registrationForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      isAdmin: [false],
      agreeToTerms: [false, Validators.requiredTrue]
    });
  }

  ngOnInit(): void {}

  register(): void {
    if (this.registrationForm.valid) {
      const userData = {
        Firstname: this.registrationForm.value.firstName,
        Lastname: this.registrationForm.value.lastName,
        Email: this.registrationForm.value.email,
        Password: this.registrationForm.value.password,
        RoleName: this.registrationForm.value.isAdmin ? 'Admin' : 'User'
      };
      
      this.authService.register(userData).subscribe(
        response => {
          console.log('Registration success:', response);
          this.router.navigate(['/login']);
        },
        error => {
          console.log('Registration error:', error);
        }
      );
    }
  }
}
