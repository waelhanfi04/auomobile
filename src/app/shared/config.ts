import { HttpClient, HttpHeaders } from "@angular/common/http";
//const serverUrl = "http://102.219.178.102:3031/";
const serverUrl = "http://sayara.tn:3032/";
const arrayCategories = [{ category: 'VEHICLES' }, { category: 'IMMOBILIER' },
{ category: 'MULTIMEDIA' }, { category: 'MAISON' }, { category: 'LOISIRS' },
{ category: 'SERVICES' }, { category: 'MATERIEL PROFESSIONNEL' }, { category: 'EMPLOI' }
  , { category: 'VACANCES' }, { category: 'MODE' }];
const arraysecurityEquipment = [{ equipement: 'Airbags frontaux', checked: false },
{ equipement: 'Airbags latéraux ', checked: false },
{ equipement: 'Airbags rideaux', checked: false },
{ equipement: 'Alarme anti-intrusion', checked: false },
{ equipement: 'Anti-patinage', checked: false },
{ equipement: 'Fixations ISOFIX', checked: false },
{ equipement: 'Pneumatiques runflat', checked: false },
{ equipement: 'Radiateur tropicalisé', checked: false },
{ equipement: 'Anti-démarrage électronique', checked: false },
{ equipement: 'Contrôle de pression des pneus', checked: false },];

const arrayOutsideEquipment = [{ equipement: 'Antibrouillards', checked: false },
{ equipement: 'Détecteur de luminosité', checked: false },
{ equipement: 'Détecteur de pluie', checked: false },
{ equipement: 'Fermeture centralisée', checked: false },
{ equipement: 'Feux à LED', checked: false },
{ equipement: 'Jantes en alliage', checked: false },
{ equipement: 'Lave Phares', checked: false },
{ equipement: 'Peinture métallisée', checked: false },
{ equipement: 'Phares au xénon', checked: false },
{ equipement: 'Radar de recul', checked: false },
{ equipement: 'Toit ouvrant', checked: false },
{ equipement: 'Toit panoramique', checked: false },
{ equipement: 'Vitres teintées', checked: false },
{ equipement: 'Rétroviseurs électriques', checked: false },
{ equipement: 'Rétroviseurs rabattables', checked: false },]

const arrayInsideEquipment = [{ equipement: 'Accoudoir avant', checked: false },
{ equipement: 'Accoudoir arrière', checked: false },
{ equipement: 'Autoradio', checked: false },
{ equipement: 'Autoradio CD', checked: false },
{ equipement: 'Autoradio CD/Mp3', checked: false },
{ equipement: 'Bluetooth', checked: false },
{ equipement: 'Boîte à gants réfrigérée', checked: false },
{ equipement: 'Bouton Start / Stop', checked: false },
{ equipement: 'Caméra de recul', checked: false },
{ equipement: 'Chargeur CD', checked: false },
{ equipement: 'Climatisation', checked: false },
{ equipement: 'Climatronic', checked: false },
{ equipement: 'Direction assistée', checked: false },
{ equipement: 'GPS', checked: false },
{ equipement: 'Ordinateur de bord', checked: false },
{ equipement: 'Palettes au volant', checked: false },
{ equipement: 'Régulateur de vitesse', checked: false },
{ equipement: 'Sellerie en cuir', checked: false },
{ equipement: 'Sièges électriques', checked: false },
{ equipement: 'Sièges chauffants', checked: false },
{ equipement: 'Vitres électriques', checked: false },
{ equipement: 'Vitres teintées', checked: false },
{ equipement: 'Volant multi-fonctions', checked: false },
{ equipement: 'appuis têtes arrières', checked: false },
{ equipement: 'Sièges réglables en hauteur', checked: false },
{ equipement: 'Volant/levier de vitesse en cuir', checked: false },
{ equipement: 'Connectivité Aux, usb, iPod', checked: false },
{ equipement: 'Volant réglable hauteur/profondeur', checked: false }]

const arrayCategoryCar = [{ category: 'Luxury' }, { category: 'Sports' },
{ category: 'Vintage' }, { category: 'Excutive' }, { category: 'Economy' },]

const arrayBrand = [
  { brand: "Acura", model: ['MDX', 'NSX', 'RL', 'RSX', 'TL', 'TSX'] },
  { brand: "Aixam", model: ['City', 'crossline', 'Roadline', 'Scouty R'] },
  {
    brand: "Alfa Romeo", model: ['145', '146', '147', '149', '155', '156', '159', '164', '166', '33', '75', '8C', '90', 'Alfasud', 'Alfetta', 'Autre', 'Brera', 'Crosswagon',
      'Giulia', 'Giulietta', 'GT', 'GTV', 'Junior', 'Mito', 'RZ/SZ', 'Spider', 'Sprint', 'Stelvio']
  },
  { brand: "Alpina", model: [] },
  { brand: "Aston Martin", model: [] },
  { brand: "Audi", model: [] },
  { brand: "BAIC YX", model: [] },
  { brand: "Bentley", model: [] },
  { brand: "BMW", model: [] },
  { brand: "Bugatti", model: [] },
  { brand: "Buick", model: [] },
  { brand: "BYD", model: [] },
  { brand: "Cadillac", model: [] },
  { brand: "Changan", model: [] },
  { brand: "Chery", model: [] },
  { brand: "Chevrolet", model: [] },
  { brand: "Chrysler", model: [] },
  { brand: "Citroën", model: [] },
  { brand: "Dacia", model: [] },
  { brand: "Daewoo", model: [] },
  { brand: "Daihatsu", model: [] },
  { brand: "DFSK", model: [] },
  { brand: "Dodge", model: [] },
  { brand: "Dongfeng", model: [] },
  { brand: "DS", model: [] },
  { brand: "Faw", model: [] },
  { brand: "Ferrari", model: [] },
  { brand: "Fiat", model: [] },
  { brand: "Foday", model: [] },
  { brand: "Ford", model: [] },
  { brand: "Foton", model: [] },
  { brand: "Geely", model: [] },
  { brand: "Genesis", model: [] },
  { brand: "GMC", model: [] },
  { brand: "Great Wall", model: [] },
  { brand: "Haval", model: [] },
  { brand: "Honda", model: [] },
  { brand: "Huanghai", model: [] },
  { brand: "Hummer", model: [] },
  { brand: "Hyundai", model: [] },
  { brand: "Infiniti", model: [] },
  { brand: "Isuzu", model: [] },
  { brand: "Iveco", model: [] },
  { brand: "Jaguar", model: [] },
  { brand: "Jeep", model: [] },
  { brand: "Kawazaki", model: [] },
  { brand: "KIA", model: [] },
  { brand: "Lada", model: [] },
  { brand: "Lamborghini", model: [] },
  { brand: "Lancia", model: [] },
  { brand: "Land Rover", model: [] },
  { brand: "Lexus", model: [] },
  { brand: "Lincoln", model: [] },
  { brand: "Lotus", model: [] },
  { brand: "Mahindra", model: [] },
  { brand: "Maserati", model: [] },
  { brand: "Maybach", model: [] },
  { brand: "Mazda", model: [] },
  { brand: "Mercedes-Benz", model: [] },
  { brand: "MG", model: [] },
  { brand: "Mini", model: [] },
  { brand: "Mitsubishi", model: [] },
  { brand: "Morgan", model: [] },
  { brand: "Nissan", model: [] },
  { brand: "Oldsmobile", model: [] },
  { brand: "Opel", model: [] },
  { brand: "Peugeot", model: [] },
  { brand: "Piaggio", model: [] },
  { brand: "Pontiac", model: [] },
  { brand: "Porsche", model: [] },
  { brand: "Renault", model: [] },
  { brand: "Rolls Royce", model: [] },
  { brand: "Rover", model: [] },
  { brand: "Saab", model: [] },
  { brand: "Seat", model: [] },
  { brand: "Simca", model: [] },
  { brand: "Skoda", model: [] },
  { brand: "Smart", model: [] },
  { brand: "Soueast", model: [] },
  { brand: "Ssangyong", model: [] },
  { brand: "Subaru", model: [] },
  { brand: "Suzuki", model: [] },
  { brand: "Talbot", model: [] },
  { brand: "Tata", model: [] },
  { brand: "Toyota", model: [] },
  { brand: "Trabant", model: [] },
  { brand: "Triumph", model: [] },
  { brand: "TVR", model: [] },
  { brand: "Volkswagen", model: [] },
  { brand: "Volvo", model: [] },
  { brand: "Wallyscar", model: [] },
]
const arrayNautismeMarque = [{ brand: "Petites embarcations", model: ['Canoé', 'Kayak', 'Pedalo', 'Autres embarcations'] },
{ brand: "Bateaux à moteurs", model: ['Vedette', 'Pneumatique', 'Semi-rigide', 'Offshire/Speedboat', 'Catamaran / Multicoques', 'Yacht(+15)', 'Bateau ancien', 'Bateau de pêche', 'Bateau éléctrique', 'Jetski', 'Hydroglisseurs', 'Autre à moteurs'] },
{ brand: "Voiliers", model: ['Voilier habitale', 'Catamaran / Multicoques', 'Voilier Classique', 'Voilier Yacht (+15m)', 'Vieux Gréement', 'Monotype-Course', 'Dériveur Léger', 'Planche à voile', 'Autres Voiliers'] },
{ brand: "Petites embarcations", model: ['Canoé', 'Kayak', 'Pedalo', 'Autres embarcations'] },
{ brand: "Moteurs et pièces", model: ['Moteurs In-Bord', 'Moteurs Hors-Bord', 'Moteurs Z-Drive', 'Autre à moteurs'] },
{ brand: "Services", model: ['Anneaux de port', 'Location bateaux', 'Mécanique bateaux'] },
{ brand: "Accessoirs", model: ['Remoques', 'Fournitures marines', 'Autres accessoires'] }
];
const arrayPiecesMarque = [{ brand: "Pièces Détachées", model: ['Balais et bras d\'essuie-glace',
'Ampoules et Diodes',
'Bougies',
'Carrosserie et Rétroviseurs',
'Direction et Transmission',
'Electricité et Electronique',
'Echappement',
'Filtres',
'Freinage',
'Moteur, Boîte de Vitesse',
'Optiques et Phares',
'Refroidissement',
'Suspension',
'Voitures pour Pièces',
'Autres Pièces Auto',] },
{
  brand: "Accessoires et entretien", model: ['Convertisseurs, Compresseurs',
    'Alarmes, Antivol, Radars',
    'Chaînes et Equipement Neige',
    'Coffres et Barres de Toit', 'Convertisseurs, Compresseurs',
    'Habitacle et Confort',
    'Liquides, Produits Entretien',
    'Porte-Vélos et Porte-Skis',
    'Sécurité et Signalisation',
    'Kits mains libres',
    'Accessoires pour 4 X 4',
    'Accessoires pour Camion',
    'Accessoires pour Camping Car',
    'Accessoires pour Caravane',
    'Autres Accessoires Auto']
},
{
  brand: "Pneus et Jantes", model: ['Bouchons de Valve',
    'Roues Complètes',
    'Ecrous',
    'Enjoliveurs',
    'Jantes',
    'Pneus']
},
{
  brand: "Autoradios / Hifi / GPS", model: ['Amplificateurs, Condensateurs',
    'Autoradios',
    'Câbles et Accessoires',
    'Caissons, Subwoofers',
    'GPS et Navigation',
    'Haut-Parleurs',
    'Multimédia Embarqué',
    'Packs Complets',
    'Radio CB',
    'Transmetteurs FM',
    'Autres']
},
{
  brand: "Tuning et styling", model: ['Carrosserie et Extérieur',
    'Adhésifs et Films',
    'Echappement',
    'Eclairage',
    'Habitacle',
    'Jantes Tuning',
    'Autres']
},
{
  brand: "Pièces de voiture ancienne", model: ['Automobilia, Décoration',
    'Autos Françaises : Pièces',
    'Autos Allemandes : Pièces',
    'Autos Américaines : Pièces',
    'Autos Anglaises : Pièces',
    'Autos Italiennes : Pièces',
    'Multi-Marques : Pièces',
    'Autres Marques : Pièces']
},
{
  brand: "Remorques", model: ['Remorques Porte-Animaux',
    'Remorques à Bagages',
    'Remorques Porte-Bateau',
    'Remorques Porte-Moto',
    'Remorques Porte-Voiture',
    'Remorques Magasin-Snack',
    'Remorques Multi-Usage',
    'Autres Remorques',
    'Pièces et Accessoires']
},
{
  brand: "Outillage et dépannage", model: ['Matériel Mécanicien Auto',
    'Dépannage',
    'Diagnostique',
    'Levage, Manutention',
    'Matériel Carrossier',
    'Autres']
},
{
  brand: "Manuels et catalogues", model: ['Autres Publications',
    'Revues Techniques',
    'Catalogues',
    'Publicités']
},
{
  brand: "Services et réparation", model: ['Réparation Pneumatique',
    'Réparation Mécanique',
    'Réparation Electrique',
    'Réparation Hydrolique',
    'Réparation Tôle',
    'Réparation Glace',
    'Service',
    'Autre']
}
];
const arrayTypeVelo = [
  { type: 'Enfant' },
  { type: 'VTT ' },
  { type: 'VTC ' },
  { type: 'BMX' },
  { type: 'Vélo de course ' },
  { type: 'Vélo électrique ' },
  { type: 'Vélo pliant ' },
  { type: 'Vélo de ville ' },
  { type: 'Pignon fixe' },
  { type: 'Vélo d\'appartement' }, { type: 'Tandem Pièces & Accessoires Équipement Autres' }]
const arrayEtatVelo = [{ etat: 'État neuf ' },
{ etat: 'Très bon état ' },
{ etat: 'Bon état ' },
{ etat: 'État satisfaisant' }]
const arrayRoueVelo = [{ taille: '26' },
{ taille: '27.5' },
{ taille: '29' },
{ taille: '700c' },
{ taille: 'Autre' }]
const arrayTailleRoueVelo = [{ taille: 'XS' },
{ taille: 'S' },
{ taille: 'M' },
{ taille: 'L' },
{ taille: 'XL' }]


const concessionnaires = [
  { id:0,
    nom: 'NIMR',
  address:"5 Rue de l'Artisanat, Charguia II",
  tel:"31 31 38 38",fax:"31 31 38 39",
  image:"https://catalogue.automobile.tn/marques/1640.png"
 },
  { id:1,
    nom: 'OIS MOTORS',
    address:"Rue 8612 impasse n° 5, ZI Charguia 1",
    tel:"31 34 20 20",
    fax:"31 34 20 28",
    image:"https://catalogue.automobile.tn/marques/904.png"
   },
  { id:2,
    nom: 'ATLAS AUTO',
    address:"Zone industrielle Megrine, 2013, Ben Arous",
    tel:"31 31 66 66",
    image:"https://catalogue.automobile.tn/marques/1549.png"
  },
  { 
    id:3,
    nom: 'WALLYS SERVICES',
    address:"39, Av. Kheïreddine Pacha - Tunis , Montplaisir",
    tel:"71 188 700",
    image:"https://catalogue.automobile.tn/marques/727.png"
  }]
/*

Type de vélo : Enfant,VTT ,VTC ,BMX, Vélo de course ,Vélo électrique ,Vélo pliant ,Vélo de ville ,Pignon fixe, Vélo d'appartement , Tandem Pièces & Accessoires Équipement Autres
Etat de vélo :État neuf ; Très bon état ; Bon état ; État satisfaisant ;Pour pièces
Taille de roue de vélo :26 " 27.5 " 29 " 700c Autre
Taille de vélo : XS S M L XL
*/
const headers = new HttpHeaders({
  "Content-Type": "application/json",
  Authorization: "Bearer " + localStorage.getItem("accessToken"),
});
const idNautisme = 2;
const idPiece = 3;
const idVelo = 4;
export {
  serverUrl, headers, arrayCategories, arrayInsideEquipment, arrayOutsideEquipment,
  concessionnaires,
  arraysecurityEquipment, arrayCategoryCar, arrayBrand, arrayPiecesMarque, arrayNautismeMarque, arrayEtatVelo, arrayTypeVelo, idPiece, idNautisme, idVelo
}

/* Poids lourds
'remorque de voiture',
'Camion ',
'Tracteur agricole', 
'Semi-remorque', 
'Bus', 
'Ambulance', 
'Tracto pelles', 
'télescopique', 
'Grues', 
'Benn',e
*/

