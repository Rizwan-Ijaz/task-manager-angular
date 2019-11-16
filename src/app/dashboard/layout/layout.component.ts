import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {NavigationModel} from '../../../models/navigation.model';
import {NavigationService} from '../../../services/navigation/navigation.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, OnDestroy {

  mobileQuery: MediaQueryList;

  fillerNav: NavigationModel[] = [];

  private mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private navService: NavigationService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    // this.mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener('change', this.mobileQueryListener);
  }

  ngOnInit(): void {
    this.fillerNav = this.navService.getNavItems();
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeEventListener('change', this.mobileQueryListener);
  }

}
