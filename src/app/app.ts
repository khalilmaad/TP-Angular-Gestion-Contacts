import { Component } from '@angular/core';
import { FormulaireContact } from './formulaire-contact/formulaire-contact';
import { ListeContacts } from './liste-contacts/liste-contacts';
import { Contact } from './contact.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormulaireContact, ListeContacts],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'gestion-contacts';
  mesContacts: Contact[] = [];

  ajouterContact(contact: Contact): void {
    this.mesContacts.push(contact);
    console.log('Contact ajouté :', contact);
  }
}
