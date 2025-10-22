import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nav.html',
  styleUrl: './nav.css'
})
export class NavComponent {
  menuOpen = false;

  /**
   * Toggles hamburger menu open/closed
   */
  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }
}
