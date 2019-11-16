import {Injectable} from '@angular/core';
import {NavigationModel} from '../../models/navigation.model';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor() {
  }

  getNavItems(): NavigationModel[] {
    return NAV_ITEMS;
  }
}


const NAV_ITEMS: NavigationModel[] = [
  {
    name: 'Dashbaord',
    icon: 'dashboard',
    route: 'dashboard',
    children: [
      {name: 'dasboard 1'}
    ]
  }, {
    name: 'Dashbaord',
    icon: 'dashboard',
    route: 'dashboard',
    children: [
      {name: 'dasboard 1'}
    ]
  }
];
