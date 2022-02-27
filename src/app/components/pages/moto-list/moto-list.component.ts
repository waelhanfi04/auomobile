import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarService } from 'src/app/services/car/car.service';

@Component({
  selector: 'app-moto-list',
  templateUrl: './moto-list.component.html',
  styleUrls: ['./moto-list.component.css']
})
export class MotoListComponent implements OnInit {
  constructor(private router: Router) { }
  nameCategory:any;
  // logo=["Access.png", "Adler.png", "Adly.png", "Aeon.png", "AERMACCHI.png", "AJP.png", "AJS.png", "ALTA MOTORS.png", Applestone.png, APRILIA.png, Arctic Cat.png, Argo.png, ARIEL.png, Armada.png, ATK.png, Avantis.png, BAJAJ.png, Baltmotors.png, BASHAN.png, BENELLI.png, BETA.png, Big-Bear-Choppers.png, Big Dog.png, BIMOTA.png, Blata.png, BMW.png, BMW Alpina.png, BORILE.png, BOSS HOSS.png, BROUGH SUPERIOR.png, brp.png, BSA.png, BUELL.png, CAGIVA.png, CAN-AM_BRP.png, CANNONDALE.png, CCM.png, CECTEK.png, CFMOTO.png, Christini.png, City Jet.png, City Jet_2.png, comanche.png, CONFEDERATE.png, Cronus.png, Cub Cadet.png, DAELIM.png, Dafra Motos.png, Dazon.png, Defiant.png, DERBI.png, desktop.ini, Di Blasi.png, Dinli.png, DNEPR.png, DUCATI.png, EBR Motorcycles.png, ENERGICA.png, E-ton.png, EXCELSIOR.png, FISCHER.png, Fun&Tec.png, Garelli.png, GAS GAS.png, Geely.png, Giantco.png, Gibbs.png, Godzilla.png, GX moto.png, hara.png, HARLEY DAVIDSON.png, HERCULES.png, HERO.png, HESKETH.png, HiSUN.png, HODAKA.png, HONDA.png, Honling.png, HOREX.png, Hors.png, HUSABERG.png, HUSQVARNA.png, HYOSUNG.png, INDIAN.png, IRBIS.png, ITALJET.png, IZH.png, jawa.png, Jialing.png, Jianshe-Yamaha.png, John Deere.png, Jonway.png, Jordan Motor.png, JUNAK.png, KANUNI.png, KASINSKI.png, KAWASAKI.png, Kaxa Motos.png, KAYO.png, Kazuma.png, "Keeway.png", "Khalex.png", "Kreidler.png", "KTM.png", "Kubota.png", "KYMCO.png", "Lambretta.png", "LAVERDA.png", "Leike.png", "LIFAN.png", "LINHAI.png", "Linhai-Yamaha.png", "Lintex.png", "LML.png", "Loncin.png", "MAICO.png", "MALAGUTI.png", "Masai.png", "MASH.png", "Matador.png", "MATCHLESS.png", "MBK.png", "Megaactive.png", "MEGELLI.png", "MGB.png", "Mike-motors.png", "Minsk.png", "MODENAS.png", "MONDIAL.png", "MOTO GUZZI.png", "Motoland.png", "Motolife.png", "MOTO MORINI.png", "MOTORHISPANIA.png", "Motowell.png", "MOTUS.png", "MOTUS_2.png", "Mudd-Ox.png", "MV AGUSTA.png", "MZ.png", "Nexus.png", "Nipponia.png", "Nissamaran.png", "Nitro.png", "NORTON.png", "Orange County Choppers.png", "OSSA.png", "Parolin.png", "PEUGEOT.png", "PGO.png", "Piaggio.png", "Pioneer.png", "Polaris.png", "PUCH.png", "QingQi.png", "Quadro.png", "Racer.png", "Regal Raptor.png", "RIEJU MOTORS.png", "ROYAL ENFIELD.png", "SACHS.png", "Sachs Bikes.png", "Sagitta.png", "San Yang.png", "SCORPA.png", "SHERCO.png", "Shineray.png", "SIMSON.png", "Skymoto.png", "Stels.png", "Stingear.png", "Stingray.png", "SUZUKI.png", "SWM.png", "SYM.png", "TGB.png", "Tinger.png", "Tomcar.png", "Tomos.png", "Triton All.png", "TRIUMPH.png", "TVS.png", "um.png", "URAL.png", "VELOCETTE.png", "VENTO.png", "Vespa.png", "VICTORY.png", "VINCENT HRD.png", "viper.png", "Volvo.png", "VOXAN.png", "Wels.png", "Yacota.png", "YAMAHA.png", "yamasaki.png", "Yiben.png", "ZERO.png", "Zongshen.png", "ZUNDAPP.png", "АвтоВАЗтранс.png", "Авторос.png", "агромашресурс.png", "Бронто.png", "Буран.png", "ВПМЗ.png", "ГАЗ.png", "ГазСтройМашина.png", "ЗиД.png", "ИЖ.png", "Итлан.png", "ЛТЗ.png", "Пелец.png", "Русская Механика.png", "ТМЗ.png", "Трэкол.png", "Туламашзавод.png", "ЧЕТРА.png"]
  logo="Access.png, Adler.png, Adly.png, Aeon.png, AERMACCHI.png, AJP.png, AJS.png, ALTA MOTORS.png, Applestone.png, APRILIA.png, Arctic Cat.png, Argo.png, ARIEL.png, Armada.png, ATK.png, Avantis.png, BAJAJ.png, Baltmotors.png, BASHAN.png, BENELLI.png, BETA.png, Big-Bear-Choppers.png, Big Dog.png, BIMOTA.png, Blata.png, BMW.png, BMW Alpina.png, BORILE.png, BOSS HOSS.png, BROUGH SUPERIOR.png, brp.png, BSA.png, BUELL.png, CAGIVA.png, CAN-AM_BRP.png, CANNONDALE.png, CCM.png, CECTEK.png, CFMOTO.png, Christini.png, City Jet.png, City Jet_2.png, comanche.png, CONFEDERATE.png, Cronus.png, Cub Cadet.png, DAELIM.png, Dafra Motos.png, Dazon.png, Defiant.png, DERBI.png, Di Blasi.png, Dinli.png, DNEPR.png, DUCATI.png, EBR Motorcycles.png, ENERGICA.png, E-ton.png, EXCELSIOR.png, FISCHER.png, Fun&Tec.png, Garelli.png, GAS GAS.png, Geely.png, Giantco.png, Gibbs.png, Godzilla.png, GX moto.png, hara.png, HARLEY DAVIDSON.png, HERCULES.png, HERO.png, HESKETH.png, HiSUN.png, HODAKA.png, HONDA.png, Honling.png, HOREX.png, Hors.png, HUSABERG.png, HUSQVARNA.png, HYOSUNG.png, INDIAN.png, IRBIS.png, ITALJET.png, IZH.png, jawa.png, Jialing.png, Jianshe-Yamaha.png, John Deere.png, Jonway.png, Jordan Motor.png, JUNAK.png, KANUNI.png, KASINSKI.png, KAWASAKI.png, Kaxa Motos.png, KAYO.png, Kazuma.png, Keeway.png, Khalex.png, Kreidler.png, KTM.png, Kubota.png, KYMCO.png, Lambretta.png, LAVERDA.png, Leike.png, LIFAN.png, LINHAI.png, Linhai-Yamaha.png, Lintex.png, LML.png, Loncin.png, MAICO.png, MALAGUTI.png, Masai.png, MASH.png, Matador.png, MATCHLESS.png, MBK.png, Megaactive.png, MEGELLI.png, MGB.png, Mike-motors.png, Minsk.png, MODENAS.png, MONDIAL.png, MOTO GUZZI.png, Motoland.png, Motolife.png, MOTO MORINI.png, MOTORHISPANIA.png, Motowell.png, MOTUS.png, MOTUS_2.png, Mudd-Ox.png, MV AGUSTA.png, MZ.png, Nexus.png, Nipponia.png, Nissamaran.png, Nitro.png, NORTON.png, Orange County Choppers.png, OSSA.png, Parolin.png, PEUGEOT.png, PGO.png, Piaggio.png, Pioneer.png, Polaris.png, PUCH.png, QingQi.png, Quadro.png, Racer.png, Regal Raptor.png, RIEJU MOTORS.png, ROYAL ENFIELD.png, SACHS.png, Sachs Bikes.png, Sagitta.png, San Yang.png, SCORPA.png, SHERCO.png, Shineray.png, SIMSON.png, Skymoto.png, Stels.png, Stingear.png, Stingray.png, SUZUKI.png, SWM.png, SYM.png, TGB.png, Thumbs.db, Tinger.png, Tomcar.png, Tomos.png, Triton All.png, TRIUMPH.png, TVS.png, um.png, URAL.png, VELOCETTE.png, VENTO.png, Vespa.png, VICTORY.png, VINCENT HRD.png, viper.png, Volvo.png, VOXAN.png, Wels.png, Yacota.png, YAMAHA.png, yamasaki.png, Yiben.png, ZERO.png, Zongshen.png, ZUNDAPP.png, АвтоВАЗтранс.png, Авторос.png, агромашресурс.png, Бронто.png, Буран.png, ВПМЗ.png, ГАЗ.png, ГазСтройМашина.png, ЗиД.png, ИЖ.png, Итлан.png, ЛТЗ.png, Пелец.png, Русская Механика.png, ТМЗ.png, Трэкол.png, Туламашзавод.png, ЧЕТРА.png";
  logos:any;
  ngOnInit(): void {
this.logos=this.logo.split(', ');
console.log(this.logos)
  }
  getMotoByBrand(logo:any){
    let position=logo.indexOf('.');
    let brand=logo.substring(0,position);
    this.router.navigate(['/brand',brand])
  }
}
