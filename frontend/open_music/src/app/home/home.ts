import { Component } from '@angular/core';
import { MusicPlayer } from '../music-player/music-player';

@Component({
  selector: 'app-home',
  imports: [MusicPlayer],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
