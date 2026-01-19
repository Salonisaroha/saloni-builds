import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { certifications, Certification } from '../../data/certifications';
import { fadeInUp } from '../../animations';

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certifications.component.html',
  styleUrl: './certifications.component.scss',
  animations: [fadeInUp]
})
export class CertificationsComponent {
  certifications = certifications;

  openCertificate(cert: Certification) {
    if (cert.imageUrl) {
      window.open(cert.imageUrl, '_blank', 'noopener,noreferrer');
    }
  }

  onImageError(event: Event) {
    const img = event.target as HTMLImageElement;
    if (img) {
      img.src = 'assets/certificates/placeholder.png';
    }
  }
}

