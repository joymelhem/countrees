import { CanActivateFn, Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { inject } from '@angular/core';

export function authenticationGuard(): CanActivateFn {
  return () => {
    const authService: AuthenticationService = inject(AuthenticationService);
    const router: Router = inject(Router);
    if (authService.hasAccess() ) {
      return true;
    }
    router.navigate(['/login']);
    return false;
  };
}
