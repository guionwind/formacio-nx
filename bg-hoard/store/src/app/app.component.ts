import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { getAllGames } from '../fake-api';
import { MatCardModule } from '@angular/material/card';
@Component({
  standalone: true,
  selector: 'bg-hoard-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [MatCardModule, CommonModule],
})
export class AppComponent {
  title = 'Board Game Hoard';
  games = getAllGames();
}
