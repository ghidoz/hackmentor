import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

export function configIcons(matIconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
  matIconRegistry.addSvgIcon('goals', sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/icn-goals.svg'));
  matIconRegistry.addSvgIcon('mentors', sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/icn-mentors.svg'));
  matIconRegistry.addSvgIcon('requests', sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/icn-requests.svg'));
  matIconRegistry.addSvgIcon('reviews', sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/icn-reviews.svg'));
}
