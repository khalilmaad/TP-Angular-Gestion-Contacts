import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Contact } from '../contact.interface';

@Component({
  selector: 'app-formulaire-contact',
  imports: [FormsModule, CommonModule],
  templateUrl: './formulaire-contact.html',
  styleUrl: './formulaire-contact.css',
})
export class FormulaireContact {
 /* titre: string = 'Formulaire de contact';
  version: string = 'Angular 20';
  // Propriétés pour l'interpolation
  prenom: string = 'Ahmed';
  note: number = 17;
  notes: number[] = [14, 16, 18, 12, 17];
  dateAujourdhui: string = new Date().toLocaleDateString('fr-FR');

  imageUrl: string = 'https://picsum.photos/200/100';
  boutonActif: boolean = false;
  tailleTexte: number = 18;
  classeCSS: string = 'alerte-info';


  compteur: number = 0;
  couleurBouton: string = 'gris';
  texteInput: string = '';
  incrementer(): void {
    this.compteur++;
  }
  decrementer(): void {
    if (this.compteur > 0) this.compteur--;
  }


  reinitialiser(): void {
    this.compteur = 0;
  }
  changerCouleur(c: string): void {
    this.couleurBouton = c;
  }
  onFrappe(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.texteInput = input.value;
  }


  // Propriétés liées au formulaire
  age: number = 0;*/
  nom: string = '';
  email: string = '';
  telephone: string = '';

  // Déclarer l'événement à émettre
  @Output() contactSauvegarde = new EventEmitter<Contact>();
  sauvegarder(): void {
    // Vérifier que les champs obligatoires sont remplis

    
    if (this.nom.trim() && this.email.trim()) {
      // Émettre le contact vers le parent
      this.contactSauvegarde.emit({
        nom: this.nom,
        email: this.email,
        telephone: this.telephone

      });
      // Réinitialiser le formulaire
      this.nom = this.email = this.telephone = '';
    } else {
      alert('Veuillez remplir le nom et l\'email.');
    }
  }
}


