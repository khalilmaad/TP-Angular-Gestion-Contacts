// liste-contacts.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Contact } from '../contact.interface';
@Component({
  selector: 'app-liste-contacts',
  standalone: true,
  imports: [CommonModule], // Nécessaire pour *ngIf et *ngFor
  templateUrl: './liste-contacts.html',
})
export class ListeContacts {
  // Reçoit le tableau de contacts depuis le parent
  @Input() contacts: Contact[] = [];
}