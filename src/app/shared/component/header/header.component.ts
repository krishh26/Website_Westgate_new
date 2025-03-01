import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
declare var bootstrap: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isNavbarCollapsed = true;
  private navbarCollapse: any;
  activeRoute: string = '';


  ngAfterViewInit(): void {
    this.navbarCollapse = new bootstrap.Collapse('#navbarNav', { toggle: false });
  }

  closeNavbar() {
    if (this.navbarCollapse) {
      this.navbarCollapse.hide(); // Properly close the Bootstrap navbar
    }
  }
  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isNavbarCollapsed = true; // Close navbar on route change
        window.scrollTo(0, 0); // Ensure the page starts at the top
      }
    });
  }

  isActive(route: string): boolean {
    return this.activeRoute === route;
  }

}
