import { Component, signal } from '@angular/core';
import { FormulaireContact } from './formulaire-contact/formulaire-contact';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormulaireContact],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'gestion-contacts';
}
