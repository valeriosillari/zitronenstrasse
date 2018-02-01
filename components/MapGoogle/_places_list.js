const placesList = [
  {
    title: 'Geschwister Nothaft Café',
    address: 'Schwarzastraße 9, 12055',
    website: 'http://nothaftcafes.com/',
    fbPage: 'https://www.facebook.com/geschwisternothaft/',
    position: {
      lat: 52.472729,
      lng: 13.454635
    }
  },
  {
    title: 'B-Lage',
    address: 'Mareschstraße 1, 12055',
    website: 'http://www.b-lage.de/',
    fbPage: 'https://www.facebook.com/BLageNeukoelln/',
    position: {
      lat: 52.473724,
      lng: 13.451103
    }
  },
  {
    title: 'Herr Lindemann',
    address: 'Richardpl. 16, 12055',
    fbPage: 'https://www.facebook.com/pg/BarHerrLindemann',
    position: {
      lat: 52.47371,
      lng: 13.44499
    }
  },
  {
    title: 'Hallmann und Klee',
    address: 'Böhmische Str. 13, 12055',
    website: 'https://www.hallmann-klee.de/',
    fbPage: 'https://www.facebook.com/HallmannKlee/',
    position: {
      lat: 52.47383629999999,
      lng: 13.4497396
    }
  },
  {
    title: 'Mal so Mal so',
    address: 'Böhmische Str. 14, 12055',
    website: 'http://www.malso-malso.de/',
    position: {
      lat: 52.4742567,
      lng: 13.449592
    }
  },
  {
    title: 'Körner Park',
    address: 'Körner Park, Schierker Str. 8, 12051',
    website: 'http://www.körnerpark.de/',
    position: {
      lat: 52.47136099999999,
      lng: 13.437907
    }
  },
  {
    title: 'DAS KAPiTAL',
    address: 'Karl-Marx-Platz 18, 12043',
    website: 'http://www.kapital.menu/',
    fbPage: 'https://www.facebook.com/kapital.menu/',
    position: {
      lat: 52.47388549999999,
      lng: 13.4426487
    }
  },
  {
    title: 'balera Weinhandlung',
    address: 'Karl-Marx-Platz 6, 12043',
    website: 'http://baleraweine.com/',
    fbPage: 'https://www.facebook.com/baleraweine/',
    position: {
      lat: 52.473589,
      lng: 13.4417472
    }
  },
  {
    title: 'Vux',
    address: 'Wipperstraße 14, 12055 Berlin',
    website: 'http://www.vux-berlin.com/',
    fbPage: 'https://www.facebook.com/Caf%C3%A9-Vux-140098601300/',
    position: {
      lat: 52.47208,
      lng: 13.4425101
    }
  },
  {
    title: 'Comenius-Garten',
    address: 'Richardstraße 35, 12043',
    website: 'http://comenius-garten.de/',
    fbPage: 'https://www.facebook.com/pages/Comenius-Garten/153276991378798',
    position: {
      lat: 52.4751335,
      lng: 13.4432263
    }
  },

  // ====================== 11 - 20 ======================
  {
    title: 'Böhmisches Dorf',
    address: 'Kirchgasse, 12043 Berlin',
    website: 'http://www.boehmisches-dorf.de/',
    position: {
      lat: 52.4766317,
      lng: 13.4432199
    }
  },
  {
    title: 'CocoLiebe',
    address: 'Richardstraße 107, 12043',
    website: 'http://cocoliebe.com/',
    fbPage: 'https://www.facebook.com/CocoLiebe-552868534832866/',
    position: {
      lat: 52.47813,
      lng: 13.43966
    }
  },
  {
    title: 'Paulinski Palme',
    address: 'Richardstraße 76, 12043',
    website: 'http://www.paulinskipalme.de/',
    fbPage: 'https://www.facebook.com/Paulinskipalme/',
    position: {
      lat: 52.47483,
      lng: 13.44494
    }
  },
  {
    title: 'Berliner Berg Brauerei',
    address: 'Kopfstraße 59, 12053',
    website: 'http://berlinerberg.com/',
    fbPage: 'https://www.facebook.com/berlinerberg',
    position: {
      lat: 52.4758709,
      lng: 13.4328072
    }
  },
  {
    title: 'Sameheads',
    address: 'Richardstraße 10, 12043',
    website: 'http://www.sameheads.com/home',
    fbPage: 'https://www.facebook.com/sameheadsberlin/',
    position: {
      lat: 52.4778094,
      lng: 13.4393049
    }
  },
  {
    title: 'Klunkerkranich',
    address: 'Karl-Marx-Straße 66, 12043',
    website: 'http://klunkerkranich.de/',
    fbPage: 'https://www.facebook.com/kulturdachgartenklunkerkranich/',
    position: {
      lat: 52.4821731,
      lng: 13.4318764
    }
  },
  {
    title: 'K-Fetisch',
    address: 'Wildenbruchstraße 86, 12045',
    website: 'http://kfetisch.blogsport.de/',
    fbPage: 'https://www.facebook.com/kfetisch/',
    position: {
      lat: 52.4830722,
      lng: 13.4417665
    }
  },
  {
    title: 'Ä',
    address: 'Weserstraße 40, 12045',
    website: 'http://www.ae-neukoelln.de/',
    position: {
      lat: 52.4850275,
      lng: 13.4371403
    }
  },
  {
    title: 'Vin Aqua Vin',
    address: 'Weserstraße 204, 12047',
    website: 'https://www.vinaquavin.de/',
    fbPage: 'https://www.facebook.com/Vin-Aqua-Vin-138683709477176/',
    position: {
      lat: 52.48804209999999,
      lng: 13.4307912
    }
  },
  {
    title: 'Damensalon',
    address: 'Reuterstraße 39, 12047',
    website: 'https://damensalon-bar.com/',
    fbPage: 'https://www.facebook.com/damensalonbarberlin',
    position: {
      lat: 52.491,
      lng: 13.42944
    }
  },

  // ====================== 21 - 30 ======================
  {
    title: 'TiEr',
    address: 'Weserstraße 42, 12045',
    website: 'http://www.tier.bar/',
    fbPage: 'https://www.facebook.com/TiERBAR',
    position: {
      lat: 52.4848514,
      lng: 13.4375875
    }
  },
  {
    title: 'Fuk;s Bar',
    address: 'Hobrechtstraße 64, 12047',
    fbPage: 'https://www.facebook.com/FUKS-266431236749703/',
    position: {
      lat: 52.4896975,
      lng: 13.4262947
    }
  },
  {
    title: 'Myxa Café Berlin',
    address: 'Lenaustraße 22, 12047',
    website: 'http://aplacecalledmyxa.tumblr.com/about',
    fbPage: 'https://www.facebook.com/myxaberlin/',
    position: {
      lat: 52.49027299999999,
      lng: 13.426709
    }
  },
  {
    title: 'Roamers',
    address: 'Pannierstraße 64, 12043',
    website: 'http://www.roamers.cc/',
    fbPage: 'https://www.facebook.com/RoamersBerlin',
    position: {
      lat: 52.48553,
      lng: 13.429323
    }
  },
  {
    title: 'Geist im Glas',
    address: 'Lenaustraße 27, 12047',
    fbPage: 'https://www.facebook.com/geistimglas/',
    position: {
      lat: 52.490117,
      lng: 13.424802
    }
  },
  {
    title: 'Cafe Jacques',
    address: 'Maybachufer 14, 12047',
    website: 'http://cafejacques.de/',
    fbPage: 'https://www.facebook.com/pages/Cafe-Jacques-am-Maybachufer/106295842766499',
    position: {
      lat: 52.4942363,
      lng: 13.4254769
    }
  },
  {
    title: 'Fuchsbau',
    address: 'Planufer 96, 10967',
    fbPage: 'https://www.facebook.com/derfuchsbau/',
    position: {
      lat: 52.4956697,
      lng: 13.41943
    }
  },
  {
    title: 'Molecule Men',
    address: 'An den Treptowers 1, 12435',
    // NO websites
    position: {
      lat: 52.496976,
      lng: 13.4590888
    }
  },
  {
    title: 'Insel der Jugend',
    address: 'Alt-Treptow 6, 12435',
    // NO websites
    position: {
      lat: 52.4868198,
      lng: 13.4809252
    }
  },
  {
    title: 'Friedhof Alt-Stralau',
    address: 'Tunnelstraße 5-11, 10245',
    // NO websites
    position: {
      lat: 52.4910906,
      lng: 13.4788836
    }
  },

  // ====================== 31 - 40 ======================
  {
    title: 'Arena Berlin',
    address: 'Eichenstraße 4, 12435',
    website: 'http://www.arena.berlin/',
    fbPage: 'https://www.facebook.com/ARENABERLIN',
    position: {
      lat: 52.4966473,
      lng: 13.4530078
    }
  },
  {
    title: 'Pony Saloon Berlin',
    address: 'Dieffenbachstraße 36, 10967',
    fbPage: 'https://www.facebook.com/Pony-Saloon-Berlin-252462801476185/',
    position: {
      lat: 52.491695,
      lng: 13.4195261
    }
  },
  {
    title: 'La Pecora Nera',
    address: 'Herrfurthpl. 6, 12049',
    website: 'http://www.pecoraberlin.de/',
    fbPage: 'https://www.facebook.com/lapecoraneraberlin/',
    position: {
      lat: 52.4771757,
      lng: 13.4211344
    }
  },
  {
    title: 'Sala da Mangiare',
    address: 'Mainzer Str. 23, 12053',
    website: 'http://saladamangiare.de/',
    fbPage: 'https://www.facebook.com/saladamangiare',
    position: {
      lat: 52.4807266,
      lng: 13.427628
    }
  },
  {
    title: 'LIMONADIER',
    address: 'Nostitzstraße 12, 10961',
    website: 'http://www.limonadier.de/',
    fbPage: 'https://www.facebook.com/LimonadierBar',
    position: {
      lat: 52.4918274,
      lng: 13.3904505
    }
  },
  {
    title: 'Landwehrkanalufer',
    address: 'Kreuzberg, 10967',
    // NO websites
    position: {
      lat: 52.4952365,
      lng: 13.4097972
    }
  },
  {
    title: 'Tante Lisbeth',
    address: 'Muskauer Str. 49, 10997',
    website: 'http://www.pyonen.de/tantelisbeth/',
    fbPage: 'https://www.facebook.com/Tante-Lisbeth-167076453314044/',
    position: {
      lat: 52.5012121,
      lng: 13.4317021
    }
  },
  {
    title: 'Kirk Bar',
    address: 'Skalitzer Str. 75, 10997',
    website: 'http://www.kirkbar-berlin.de/',
    fbPage: 'https://www.facebook.com/pages/Kirk-Bar/132427720140135',
    position: {
      lat: 52.5009317,
      lng: 13.4404779
    }
  },
  {
    title: 'Cuore Di Vetro',
    address: 'Max-Beer-Straße 33, 10119',
    website: 'http://www.cuoredivetro.berlin/',
    fbPage: 'https://www.facebook.com/CuoreDiVetroBerlin/',
    position: {
      lat: 52.52656899999999,
      lng: 13.4085013
    }
  },
  {
    title: 'Kosmetiksalon Babette',
    address: 'Karl-Marx-Allee 36, 10178',
    website: 'http://www.barbabette.com/',
    fbPage: 'https://www.facebook.com/pages/Bar-Babette/136696746381818',
    position: {
      lat: 52.5194805,
      lng: 13.423457
    }
  },

  // ====================== 41 - ... ======================
  {
    title: 'Sheriff Teddy Bar',
    address: 'Weserstraße 25, 10247',
    website: 'http://www.sheriff-teddy.de/wordpress/',
    fbPage: 'https://www.facebook.com/pages/Sheriff-Teddy-Bar/175296822498538',
    position: {
      lat: 52.51144559999999,
      lng: 13.463458
    }
  },
  {
    title: 'PLACE CLICHY',
    address: 'Simon-Dach-Straße 22, 10245',
    website: 'http://placeclichyberlin.blogspot.de/',
    fbPage: 'https://www.facebook.com/pages/Place-Clichy/163492683667285',
    position: {
      lat: 52.50847,
      lng: 13.45523
    }
  },
  {
    title: 'WohnZimmer',
    address: 'Lettestraße 6, 10437',
    website: 'http://www.wohnzimmer-bar.de/',
    fbPage: 'https://www.facebook.com/wohnzimmerbarberlin/',
    position: {
      lat: 52.5434934,
      lng: 13.4191829
    }
  },
  {
    title: 'Park am Wasserturm',
    address: 'Diedenhofer Str. 9, 10405',
    // NO websites
    position: {
      lat: 52.53336849999999,
      lng: 13.4176316
    }
  },
  {
    title: 'Bitte und Danke',
    address: 'Silvio-Meier-Straße 8, 10247',
    website: 'http://www.partyquartier.de/',
    fbPage: 'https://www.facebook.com/BitteDanke8',
    position: {
      lat: 52.51617049999999,
      lng: 13.4635443
    }
  },
  {
    title: 'Atopia Kaffeehaus',
    address: 'Prenzlauer Allee 187, 10405',
    fbPage: 'https://www.facebook.com/AtopiaKaffeehaus/',
    position: {
      lat: 52.5415791,
      lng: 13.4249168
    }
  },
  {
    title: 'Absinthdepot Berlin',
    address: 'Weinmeisterstraße 4, 10178',
    website: 'https://absinthdepot.de/',
    fbPage: 'https://www.facebook.com/absinthdepot.berlin/',
    position: {
      lat: 52.5253564,
      lng: 13.4050257
    }
  },
  {
    title: 'LOLA was here',
    address: 'Seelower Str. 8, 10439',
    website: 'http://www.lolawashere.de/',
    fbPage: 'https://www.facebook.com/lolawashere.cafe',
    position: {
      lat: 52.5518699,
      lng: 13.410824
    }
  },
  {
    title: 'Dujardin',
    address: 'Uferstraße 12, 13357',
    website: 'http://www.cafedujardin.de/',
    fbPage: 'https://www.facebook.com/Caf%C3%A9-Dujardin-482078158551600/',
    position: {
      lat: 52.550876,
      lng: 13.3735181
    }
  }
]

export default placesList
