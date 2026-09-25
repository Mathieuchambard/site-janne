import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-preparation-classique',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './preparation-classique.component.html',
  styleUrl: './preparation-classique.component.scss'
})
export class PreparationClassiqueComponent {
  openSessions: boolean[] = [false, false, false, false, false, false, false];

  toggleSession(index: number) {
    this.openSessions[index] = !this.openSessions[index];
  }
}