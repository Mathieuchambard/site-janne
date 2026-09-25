import { Routes } from '@angular/router';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { PreparationClassiqueComponent } from './pages/prepa-naissance/preparation-classique/preparation-classique.component';
import { SuiviDeGrossesseComponent } from './pages/grossesse/suivi-de-grossesse/suivi-de-grossesse.component';
import { SuiviApresNaissanceComponent } from './pages/apres-accouchement/suivi-apres-naissance/suivi-apres-naissance.component';
import { ConsultationPostnataleComponent } from './pages/apres-accouchement/consultation-postnatale/consultation-postnatale.component';
import { ReeducationPerineeComponent } from './pages/apres-accouchement/reeducation-perinee/reeducation-perinee.component';
import { ConsultationAllaitementComponent } from './pages/consultation-allaitement/consultation-allaitement.component';
import { GynecologieComponent } from './pages/pour-toutes/gynecologie/gynecologie.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'prepa-naissance/preparation-classique', component: PreparationClassiqueComponent },
  { path: 'grossesse/suivi-de-grossesse', component: SuiviDeGrossesseComponent },
  { path: 'apres-accouchement/suivi-apres-naissance', component: SuiviApresNaissanceComponent },
  { path: 'apres-accouchement/consultation-postnatale', component: ConsultationPostnataleComponent },
  { path: 'apres-accouchement/reeducation-perinee', component: ReeducationPerineeComponent },
  { path: 'consultation-allaitement', component: ConsultationAllaitementComponent },
  { path: 'pour-toutes/gynecologie', component: GynecologieComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' },
];