import { Injectable } from '@angular/core';
import { CanActivate,
         ActivatedRouteSnapshot,
         RouterStateSnapshot,
         Router} from '@angular/router';

import { SendbirdDashboardService } from './sendbird-dashboard.service';

@Injectable()
export class CanActivateRouteGuard implements CanActivate {

  constructor(private sendbirdDashboardService: SendbirdDashboardService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
       if (this.sendbirdDashboardService.getUserData()) {
           return true;
       }
       this.router.navigateByUrl('');
       return false;
  }
}
