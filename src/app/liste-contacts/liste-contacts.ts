// liste-contacts.ts
import { Component, Input, OnInit, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Contact } from '../contact.interface';
@Component({
  selector: 'app-liste-contacts',
  standalone: true,
  imports: [CommonModule], // Nécessaire pour *ngIf et *ngFor
  templateUrl: './liste-contacts.html',
})
export class ListeContacts implements OnInit, OnChanges, OnDestroy {
  // Reçoit le tableau de contacts depuis le parent
  @Input() contacts: Contact[] = [];
  dateChargement: string = '';
  // constructor : UNIQUEMENT pour l'injection de services
  constructor() {
    console.log('[1] constructor() appelé');
    // NE PAS accéder aux @Input() ici - ils ne sont pas encore remplis !
  }
  // ngOnInit : tout le reste de l'initialisation
  ngOnInit(): void {
    console.log('[2] ngOnInit() appelé');
    console.log(` Contacts reçus : ${this.contacts.length}`);
    // Enregistrer l'heure de chargement
    this.dateChargement = new Date().toLocaleTimeString('fr-FR');
  }

  // ngOnDestroy : libérer les ressources
  ngOnDestroy(): void {
    console.log('[3] ngOnDestroy() appelé — nettoyage');
  }

  nombreAjouts: number = 0;
  // Appelé à CHAQUE fois que contacts[] change
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['contacts']) {
      const avant = changes['contacts'].previousValue;
      const apres = changes['contacts'].currentValue;
      const premier = changes['contacts'].firstChange;
      console.log('ngOnChanges() appelé');
      console.log(' Premier appel ?', premier);
      console.log(' Avant :', avant?.length ?? 0, 'contact(s)');
      console.log(' Après :', apres?.length ?? 0, 'contact(s)');
      if (!premier) this.nombreAjouts++;
    }
  }
}