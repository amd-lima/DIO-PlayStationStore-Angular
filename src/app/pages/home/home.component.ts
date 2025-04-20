import { Component, Output } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { mock } from '../../data/mockGamesData';
import { IGameData } from '../../components/model/IGameData';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
 @Output() collection:IGameData[] = mock;
}
