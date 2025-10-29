import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class AboutComponent {
  email = 'arthurpiresdacosta14@gmail.com';

  copyEmail() {
    navigator.clipboard.writeText(this.email)
      .then(() => {
        alert('E-mail copiado para a área de transferência!');
      })
      .catch(err => {
        console.error('Erro ao copiar e-mail: ', err);
      });
  }
}
