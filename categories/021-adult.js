const adult = [  
  '3movs.com',
  '4porn.com',
  '4tube.com',
  '8muses.com',
  'adult-empire.com',
  'adultfriendfinder.com',
  'ah-me.com',
  'alphaporno.com',
  'animeshow.tv',
  'anysex.com',
  'asstr.org',
  'avmo.pw',
  'bangbros.com',
  'bdupload.info',
  'bestfreetube.xxx',
  'bioskop168.online',
  'blinkx.com',
  'blogosfera.uol.com.br',
  'boafoda.com',
  'booloo.com',
  'cam4.es',
  'camgasm.com',
  'cams.com',
  'caribbeancom.com',
  'chaturbate.com',
  'collectionofbestporn.com',
  'colliderporn.com',
  'cumlouder.com',
  'digitalplayground.com',
  'dildoxxxtube.com',
  'dmm.co.jp',
  'duga.jp',
  'efukt.com',
  'empflix.com',
  'eporner.com',
  'euphoriaporn.com',
  'extremetube.com',
  'fantasti.cc',
  'filecrypt.cc',
  'freepornx.org',
  'fucktonite.com',
  'gamebase.com.tw',
  'gotporn.com',
  'h2porn.com',
  'happy-porn.com',
  'hclips.com',
  'hentai-foundry.com',
  'herflesh.com',
  'hot-sex-tube.com',
  'hotfucktube.com',
  'hotmovies.com',
  'hotshame.com',
  'hqporner.com',
  'hqtube.xxx',
  'iafd.com',
  'iceporn.com',
  'imlive.com',
  'indianpornvideos.com',
  'javbus.com',
  'javhd.com',
  'javhihi.com',
  'javhub.net',
  'javlibrary.com',
  'jezebel.com',
  'keezmovies.com',
  'konbini.com',
  'literotica.com',
  'livejasmin.com',
  'lookforporn.com',
  'loverslab.com',
  'luxuretv.com',
  'manhunt.net',
  'manyvids.com',
  'menhdv.com',
  'mic.com',
  'mobtada.com',
  'mofosex.com',
  'mydirtyhobby.com',
  'myfavsexcams.xxx',
  'mylust.com',
  'naughtyblog.org',
  'nesaporn.com',
  'noticias.uol.com.br',
  'nudevista.tv',
  'nudography.com',
  'nurxxx.net',
  'nutaku.net',
  'pichunter.com',
  'pornalized.com',
  'pornburst.xxx',
  'porndig.com',
  'porndreamer.com',
  'pornerbros.com',
  'pornhublive.com',
  'pornoid.com',
  'pornpics.com',
  'pornsharing.com',
  'porntube.com',
  'pornzeus.com',
  'prostoporno.tv',
  'proxyof.com',
  'pussyspace.com',
  'r18.com',
  'runporn.com',
  'see.xxx',
  'serviporno.com',
  'sextvx.com',
  'sexu.com',
  'shameless.com',
  'sheknows.com',
  'shooshtime.com',
  'showup.tv',
  'slutload.com',
  'slutroulette.com',
  'spankbang.com',
  'teatroporno.com',
  'thefappening.so',
  'thegay.com',
  'theporndude.com',
  'theync.com',
  'thisvid.com',
  'thumbzilla.com',
  'tnaflix.com',
  'trafficholder.com',
  'tube8.com',
  'tubxporn.com',
  'tukif.com',
  'txxx.com',
  'updatetube.com',
  'uploadboy.com',
  'upornia.com',
  'vielerporno.com',
  'viptube.com',
  'vjav.com',
  'vporn.com',
  'wankoz.com',
  'webteb.com',
  'wetplace.com',
  'xhamster.com',
  'xhamsterlive.com',
  'xnxx.com',
  'xonline.vip',
  'xxxpornotuber.com',
  'yespornplease.com',
  'yourlust.com']

module.exports = {
  retrieve: function (cb) {
    cb(null, adult)
  },

  build: function (cb) {
    const transformedList = adult.map((item) => { return `'${item}'` }).join(', ')
    const rule = {
      condition: `(new Set([ ${transformedList} ])).has(SLD)`,
      consequent: null,
      description: 'exclude adult sites'
    }
    cb(null, rule)
  }
}
