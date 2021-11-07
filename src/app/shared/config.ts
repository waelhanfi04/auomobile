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
{ equipement: 'Anti-démarrage électronique' },
{ equipement: 'Anti-patinage' },
{ equipement: 'Contrôle de pression des pneus' },
{ equipement: 'Fixations ISOFIX' },
{ equipement: 'Pneumatiques runflat' },
{ equipement: 'Radiateur tropicalisé' }];

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
{ equipement: 'Rétroviseurs électriques' },
{ equipement: 'Rétroviseurs rabattables' },
{ equipement: 'Toit ouvrant' },
{ equipement: 'Toit panoramique' },
{ equipement: 'Vitres teintées' },]

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
{ equipement: 'Connectivité Aux, usb, iPod' },
{ equipement: 'Direction assistée' },
{ equipement: 'GPS' },
{ equipement: 'Ordinateur de bord' },
{ equipement: 'Palettes au volant' },
{ equipement: 'Régulateur de vitesse' },
{ equipement: 'Sellerie en cuir' },
{ equipement: 'Sièges réglables en hauteur' },
{ equipement: 'Sièges électriques' },
{ equipement: 'Sièges chauffants' },
{ equipement: 'Vitres électriques' },
{ equipement: 'Vitres teintées' },
{ equipement: 'Volant/levier de vitesse en cuir' },
{ equipement: 'Volant multi-fonctions' },
{ equipement: 'appuis têtes arrières' },
{ equipement: 'Volant réglable hauteur/profondeur' }]

const arrayCategoryCar=[{category:'Luxury Car'},{category:'Sports Car'},
{category:'Vintage Car'},{category:'Excutive Car'},{category:'Economy Car'},]

const headers = new HttpHeaders({
  "Content-Type": "application/json",
  Authorization: "Bearer " + localStorage.getItem("access_token"),
});
export { serverUrl, headers, arrayCategories,arrayInsideEquipment,arrayOutsideEquipment,arraysecurityEquipment,arrayCategoryCar }