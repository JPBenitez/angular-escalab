import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../service/character.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  constructor(
    private characterServices: CharacterService
  ) { }

  ngOnInit(): void {
    this.characterServices.getCharacter();
  }

}
