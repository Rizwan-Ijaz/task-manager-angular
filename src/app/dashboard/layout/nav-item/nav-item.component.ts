import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {NavigationModel} from '../../../../models/navigation.model';
import {animate, group, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss'],
  animations: [
    trigger('indicatorRotate', [
      state('collapsed', style({transform: 'rotate(0deg)'})),
      state('expanded', style({transform: 'rotate(180deg)'})),
      transition('expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4,0.0,0.2,1)')
      ),
    ]),
    trigger('openClose', [
      state('open', style({
        height: '*',
        opacity: 1,
      })),
      state('closed', style({
        height: '0',
        opacity: 0
      })),
      transition('open => closed', [
        animate('0.35s')
      ]),
      transition('closed => open', [
        animate('0.35s')
      ]),
    ]),
  ]
})
export class NavItemComponent implements OnInit {

  expanded: boolean;
  @Input() navItem: NavigationModel;
  @HostBinding('attr.aria-expanded') ariaExpanded = this.expanded;

  constructor() {
  }

  ngOnInit() {
  }

  onClickNavigate() {
    if (this.navItem.children && this.navItem.children.length) {
      this.expanded = !this.expanded;
    }
  }
}
