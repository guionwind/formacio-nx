import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { getAllGames } from '../fake-api';
import { MatCardModule } from '@angular/material/card';
import { HeaderComponent } from '@bg-hoard/store/ui-shared';
@Component({
  standalone: true,
  selector: 'bg-hoard-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [MatCardModule, CommonModule, HeaderComponent],
})
export class AppComponent {
  title = 'Board Game Hoard';
  games = getAllGames();
}
