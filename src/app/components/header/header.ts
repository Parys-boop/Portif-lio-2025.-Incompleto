import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class HeaderComponent {
  isHidden = false;
  lastScroll = 0;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScroll = window.scrollY;
    
    if (currentScroll > this.lastScroll && currentScroll > 50) {
      this.isHidden = true;
    } else {
      this.isHidden = false;
    }
    
    this.lastScroll = currentScroll;
  }
}
