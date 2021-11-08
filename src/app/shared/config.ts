import { HttpClient, HttpHeaders } from "@angular/common/http";
const serverUrl = "http://102.219.178.102:3032/";
const arrayCategories = [{ category: 'VEHICLES' }, { category: 'IMMOBILIER' },
{ category: 'MULTIMEDIA' }, { category: 'MAISON' }, { category: 'LOISIRS' },
{ category: 'SERVICES' }, { category: 'MATERIEL PROFESSIONNEL' }, { category: 'EMPLOI' }
  , { category: 'VACANCES' }, { category: 'MODE' }];
const arraysecurityEquipment = [{ equipement: 'Airbags frontaux' },
{ equipement: 'Airbags latéraux ' },
{ equipement: 'Airbags rideaux' },
{ equipement: 'Alarme anti-intrusion' },
{ equipement: 'Anti-patinage' },
{ equipement: 'Fixations ISOFIX' },
{ equipement: 'Pneumatiques runflat' },
{ equipement: 'Radiateur tropicalisé' },
{ equipement: 'Anti-démarrage électronique' },
{ equipement: 'Contrôle de pression des pneus' },];

const arrayOutsideEquipment = [{ equipement: 'Antibrouillards' },
{ equipement: 'Détecteur de luminosité' },
{ equipement: 'Détecteur de pluie' },
{ equipement: 'Fermeture centralisée' },
{ equipement: 'Feux à LED' },
{ equipement: 'Jantes en alliage' },
{ equipement: 'Lave Phares' },
{ equipement: 'Peinture métallisée' },
{ equipement: 'Phares au xénon' },
{ equipement: 'Radar de recul' },
{ equipement: 'Toit ouvrant' },
{ equipement: 'Toit panoramique' },
{ equipement: 'Vitres teintées' },
{ equipement: 'Rétroviseurs électriques' },
{ equipement: 'Rétroviseurs rabattables' },]

const arrayInsideEquipment = [{ equipement: 'Accoudoir avant' },
{ equipement: 'Accoudoir arrière' },
{ equipement: 'Autoradio' },
{ equipement: 'Autoradio CD' },
{ equipement: 'Autoradio CD/Mp3' },
{ equipement: 'Bluetooth' },
{ equipement: 'Boîte à gants réfrigérée' },
{ equipement: 'Bouton Start / Stop' },
{ equipement: 'Caméra de recul' },
{ equipement: 'Chargeur CD' },
{ equipement: 'Climatisation' },
{ equipement: 'Climatronic' },
{ equipement: 'Direction assistée' },
{ equipement: 'GPS' },
{ equipement: 'Ordinateur de bord' },
{ equipement: 'Palettes au volant' },
{ equipement: 'Régulateur de vitesse' },
{ equipement: 'Sellerie en cuir' },
{ equipement: 'Sièges électriques' },
{ equipement: 'Sièges chauffants' },
{ equipement: 'Vitres électriques' },
{ equipement: 'Vitres teintées' },
{ equipement: 'Volant multi-fonctions' },
{ equipement: 'appuis têtes arrières' },
{ equipement: 'Sièges réglables en hauteur' },
{ equipement: 'Volant/levier de vitesse en cuir' },
{ equipement: 'Connectivité Aux, usb, iPod' },
{ equipement: 'Volant réglable hauteur/profondeur' }]

const arrayCategoryCar=[{category:'Luxury'},{category:'Sports'},
{category:'Vintage'},{category:'Excutive'},{category:'Economy'},]

const headers = new HttpHeaders({
  "Content-Type": "application/json",
  Authorization: "Bearer " + localStorage.getItem("access_token"),
});
export { serverUrl, headers, arrayCategories,arrayInsideEquipment,arrayOutsideEquipment,arraysecurityEquipment,arrayCategoryCar }