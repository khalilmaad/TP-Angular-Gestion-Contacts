import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulaire-contact',
  imports: [FormsModule, CommonModule],
  templateUrl: './formulaire-contact.html',
  styleUrl: './formulaire-contact.css',
})
export class FormulaireContact {
  titre: string = 'Formulaire de contact';
  version: string = 'Angular 20';
}
