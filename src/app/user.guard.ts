import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate{
  
  async canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Promise<boolean>{
    return false;
  }
}
