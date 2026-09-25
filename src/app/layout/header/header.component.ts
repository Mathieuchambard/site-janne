import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive, NavigationEnd } from '@angular/router';
import { Subscription, filter } from 'rxjs';

interface SubMenuItem {
  label: string;
  link: string;
}

interface MenuItem {
  label: string;
  link?: string;
  children?: SubMenuItem[];
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit, OnDestroy {
  doctolibUrl = 'https://www.doctolib.fr/sage-femme/lyon/janne-da-costa-lyon/booking/motive-categories?telehealth=false&specialityId=34&placeId=practice-737112&pid=practice-737112&speciality_ids%5B%5D=34&source=deep_link';
  currentUrl = '';
  isScrolled = false;
  openMenuIndex: number | null = null;
  isMobileMenuOpen = false;
  mobileOpenSubmenu: number | null = null;
  private closeTimeout: any = null;
  private routerSub!: Subscription;

    menuItems: MenuItem[] = [
    { label: 'Accueil', link: '/' },
    {
      label: 'Pendant la grossesse',
      children: [
        { label: 'Suivi de grossesse', link: '/grossesse/suivi-de-grossesse' },
        { label: 'Préparation à la naissance et à la parentalité', link: '/prepa-naissance/preparation-classique' },
  
      ],
    },
    {
      label: 'Après l\'accouchement',
      children: [
        { label: 'Surveillance à domicile', link: '/apres-accouchement/suivi-apres-naissance' },
        { label: 'Allaitement', link: '/consultation-allaitement' },
        { label: 'Séance post-natale', link: '/apres-accouchement/consultation-postnatale' },
        { label: 'Rééducation du périnée', link: '/apres-accouchement/reeducation-perinee' },
      ],
    },
    { label: 'Consultation allaitement', link: '/consultation-allaitement' },
    {
      label: 'Pour toutes les femmes',
      children: [
        { label: 'Rééducation du périnée', link: '/apres-accouchement/reeducation-perinee' },
        { label: 'Gynécologie', link: '/pour-toutes/gynecologie' },
      ],
    },
    { label: 'Contact & Accès', link: '/contact' },
  ];

  constructor(private router: Router) {}

  ngOnInit() {
    this.currentUrl = this.router.url;
    this.routerSub = this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event) => {
        this.currentUrl = event.urlAfterRedirects;
        this.closeMobileMenu(); // ferme le menu mobile après navigation
      });
  }

  ngOnDestroy() {
    this.routerSub?.unsubscribe();
    if (this.closeTimeout) clearTimeout(this.closeTimeout);
  }

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled = window.scrollY > 20;
  }

  isParentActive(item: MenuItem): boolean {
    if (!item.children) return false;
    return item.children.some(child => this.currentUrl === child.link);
  }

  // --- Menu desktop (survol) ---
  onMenuEnter(index: number) {
    if (this.closeTimeout) {
      clearTimeout(this.closeTimeout);
      this.closeTimeout = null;
    }
    this.openMenuIndex = index;
  }

  onMenuLeave() {
    this.closeTimeout = setTimeout(() => {
      this.openMenuIndex = null;
    }, 300);
  }

  // --- Menu mobile ---
  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    if (!this.isMobileMenuOpen) {
      this.mobileOpenSubmenu = null;
    }
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
    this.mobileOpenSubmenu = null;
  }

  toggleMobileSubmenu(index: number) {
    this.mobileOpenSubmenu = this.mobileOpenSubmenu === index ? null : index;
  }
}