import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent implements OnInit {
  progressPercent = 0;

  ngOnInit() {
    this.updateCourseProgress();
    // Update every hour
    setInterval(() => this.updateCourseProgress(), 1000 * 60 * 60);
  }

  updateCourseProgress() {
    const date = new Date();
    const month = date.getMonth() + 1; // 1..12
    const totalMonths = 12;
    this.progressPercent = Math.round((month / totalMonths) * 100);
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
