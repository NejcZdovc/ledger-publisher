const domains = [
  '003.ru',
  '100sp.ru',
  '11street.my',
  '17life.com',
  '1mg.com',
  '220-volt.ru',
  '360buy.com',
  '511tactical.com',
  '55haitao.com',
  '598.net',
  '5giay.vn',
  '6m.com',
  '91mobiles.com',
  '99bitcoins.com',
  '99designs.com',
  'a-q-f.com',
  'abebooks.com',
  'abof.com',
  'abritel.fr',
  'abt.com',
  'academy.com',
  'acehardware.com',
  'acshoes.com',
  'adafruit.com',
  'adayroi.com',
  'adidas.ca',
  'adidas.co.in',
  'adidas.co.uk',
  'adidas.com',
  'adidas.com.au',
  'adidas.com.cn',
  'adoreme.com',
  'adsupplyads.com',
  'adverts.ie',
  'ae.com',
  'aeon.jp',
  'aeropostale.com',
  'afternic.com',
  'aftership.com',
  'airasiago.com',
  'airasiago.com.my',
  'ajmadison.com',
  'albiononline.com',
  'aldi.us',
  'alfacart.com',
  'alibaba.com',
  'alibaba.ir',
  'aliexpress.com',
  'all.biz',
  'allbeauty.com',
  'allegro.pl',
  'allmodern.com',
  'allposters.com',
  'allsaints.com',
  'alternate.de',
  'aluguetemporada.com.br',
  'alza.cz',
  'alza.sk',
  'amazon.es',
  'amazon.fr',
  'amazon.in',
  'amazon.it',
  'amazonaws.com',
  'americanapparel.net',
  'americanmuscle.com',
  'amiami.com',
  'amizone.net',
  'amulyam.in',
  'amway.in',
  'andychef.ru',
  'animate-onlineshop.jp',
  'anntaylor.com',
  'apartmenttherapy.com',
  'apmex.com',
  'apple.com',
  'ar15.com',
  'arabam.com',
  'archiexpo.com',
  'argos.ie',
  'artfinder.com',
  'arukereso.hu',
  'asda.com',
  'asos.com',
  'atgstores.com',
  'atu.de',
  'au.ru',
  'auction.com',
  'audiojungle.net',
  'aukro.cz',
  'auto24.ee',
  'autopiter.ru',
  'autoscout24.com',
  'autotrader.ca',
  'autotrader.co.uk',
  'avforums.com',
  'avon.com',
  'awok.com',
  'babiesrus.com',
  'babytree.com',
  'bahn.de',
  'bama.ir',
  'bamilo.com',
  'bancomer.com',
  'barnesandnoble.com',
  'basspro.com',
  'bathandbodyworks.com',
  'baur.de',
  'bazos.cz',
  'bazos.sk',
  'beatsbydre.com',
  'beatstars.com',
  'beautybay.com',
  'bebee.com',
  'bedbathandbeyond.com',
  'belk.com',
  'belpost.by',
  'bestbuy.ca',
  'bestbuy.com',
  'bestbuy.com.mx',
  'bestreviews.com',
  'betradar.com',
  'beyondtherack.com',
  'bhldn.com',
  'bhphotovideo.com',
  'bidorbuy.co.za',
  'big5sportinggoods.com',
  'bigbasket.com',
  'bigl.ua',
  'biglion.ru',
  'bike-components.de',
  'bioon.com',
  'birchbox.com',
  'bizrate.com',
  'bkstr.com',
  'blackfriday.fm',
  'blair.com',
  'blanja.com',
  'blibli.com',
  'blink.com.kw',
  'blocket.se',
  'blogofest.com',
  'blogspot.co.ke',
  'bloomingdales.com',
  'blue-tomato.com',
  'bluefly.com',
  'boekwinkeltjes.nl',
  'bogleheads.org',
  'bol.com',
  'bonanza.com',
  'boohoo.com',
  'booklooker.de',
  'bookmyshow.com',
  'boots.com',
  'bootstrapbay.com',
  'borderlinx.com',
  'boredomtherapy.com',
  'bose.com',
  'boundhub.com',
  'bradfordexchange.com',
  'bricklink.com',
  'bronto.com',
  'buckaroo.nl',
  'bueni.es',
  'buildabear.com',
  'bukalapak.com',
  'bullionvault.com',
  'burberry.com',
  'buscape.com.br',
  'buxp.org',
  'buyee.jp',
  'buyhatke.com',
  'buyincoins.com',
  'buysub.com',
  'cafe24.com',
  'caliroots.com',
  'camsurf.com',
  'carandbike.com',
  'caratlane.com',
  'cardekho.com',
  'cardinalcommerce.com',
  'carousell.com',
  'carrefour.com.br',
  'carrefour.es',
  'carrefour.fr',
  'carsguide.com.au',
  'carters.com',
  'carwale.com',
  'casadellibro.com',
  'cashkaro.com',
  'cashstar.com',
  'catawiki.com',
  'cdbaby.com',
  'cdiscount.com',
  'cduniverse.com',
  'cengagebrain.com',
  'cex.io',
  'cgtrader.com',
  'chaoshi.tmall.com',
  'charlotterusse.com',
  'cheaperthandirt.com',
  'cheaptickets.com',
  'chegg.com',
  'chemistwarehouse.com.au',
  'chemnet.com',
  'childrensplace.com',
  'chip1stop.com',
  'ciberpeliculashd.net',
  'cilory.com',
  'cinematicket.org',
  'cinesa.es',
  'cinesunidos.com',
  'citruspay.com',
  'click.in',
  'clickbus.com.br',
  'clinique.com',
  'clubmonaco.com',
  'cndirect.com',
  'coach.com',
  'codecanyon.net',
  'coinbase.com',
  'colatour.com.tw',
  'coles.com.au',
  'columbia.com',
  'com-travel.website',
  'compari.ro',
  'computershopper.com',
  'computeruniverse.ru',
  'contentdef.com',
  'converse.com',
  'coppel.com',
  'costco.ca',
  'costco.co.kr',
  'costco.co.uk',
  'costco.com.tw',
  'cottonon.com',
  'coupondunia.in',
  'crateandbarrel.com',
  'cratejoy.com',
  'crazysales.com.au',
  'creativemarket.com',
  'crocs.com',
  'csgolive.com',
  'custojusto.pt',
  'cvs.com',
  'cybermonday.com',
  'cyberport.de',
  'dafiti.com.br',
  'dafiti.com.co',
  'damai.cn',
  'danmurphys.com.au',
  'daraz.com.bd',
  'daraz.pk',
  'dawanda.com',
  'deal.by',
  'dealdey.com',
  'dealmoon.com',
  'debenhams.com',
  'decathlon.es',
  'decathlon.in',
  'decathlon.ru',
  'decolar.com',
  'delhivery.com',
  'dell.com',
  'dena-ec.com',
  'deporvillage.com',
  'dermstore.com',
  'desidime.com',
  'designmodo.com',
  'designsponge.com',
  'detail.tmall.com',
  'diapers.com',
  'dickssportinggoods.com',
  'digikala.com',
  'digistore24.com',
  'digistyle.com',
  'digitalriver.com',
  'dillards.com',
  'directindustry.com',
  'discogs.com',
  'discountmugs.com',
  'discoverhongkong.com',
  'disney.co.uk',
  'disney.com',
  'disney.go.com',
  'disneystore.co.uk',
  'disneystore.com',
  'divar.ir',
  'diy.com',
  'dlroozane.com',
  'dm.de',
  'doduae.com',
  'dollskill.com',
  'dominos.com',
  'dorothyperkins.com',
  'dospara.co.jp',
  'douglas.de',
  'dresslily.com',
  'drivethrurpg.com',
  'dsw.com',
  'du.ac.in',
  'dubli.com',
  'duedil.com',
  'dunelm.com',
  'dx.com',
  'e-leclerc.com',
  'e96.ru',
  'eachbuyer.com',
  'ebates.cn',
  'ebates.com',
  'ebay-kleinanzeigen.de',
  'ebay.at',
  'ebay.be',
  'ebay.ca',
  'ebay.co.uk',
  'ebay.com',
  'ebay.com.au',
  'ebay.com.hk',
  'ebay.de',
  'ebay.es',
  'ebay.fr',
  'ebay.ie',
  'ebay.in',
  'ebay.it',
  'ebay.nl',
  'ebay.tv',
  'ebroadcast.com.au',
  'ecobee.com',
  'ecplaza.net',
  'ecrater.com',
  'ecwid.com',
  'eddiebauer.com',
  'edigital.hu',
  'eelly.com',
  'efritin.com',
  'electrocosto.com',
  'elevenia.co.id',
  'emag.hu',
  'emarket.do',
  'endicia.com',
  'enjoei.com.br',
  'entropay.com',
  'envato.com',
  'epicnpc.com',
  'eq28.cn',
  'esam.ir',
  'essef.nl',
  'estafeta.com',
  'etix.com',
  'etsy.com',
  'evga.com',
  'evo.com',
  'expedia.co.in',
  'expedia.co.jp',
  'expedia.co.kr',
  'expedia.com',
  'expedia.com.au',
  'expedia.com.hk',
  'expedia.com.my',
  'express.com',
  'eyeem.com',
  'ezbuy.co.th',
  'ezbuy.my',
  'ezbuy.sg',
  'ezprice.com.tw',
  'fab.com',
  'fabfurnish.com',
  'fabletics.com',
  'fabric.com',
  'factorio.com',
  'fairyseason.com',
  'fakku.net',
  'falabella.com',
  'falabella.com.ar',
  'famousfootwear.com',
  'fancy.com',
  'fandango.com',
  'fansedge.com',
  'fastspring.com',
  'fcbarcelona.com',
  'filippoloreti.com',
  'fineartamerica.com',
  'fingerhut.com',
  'finn.no',
  'firstcry.com',
  'fivebelow.com',
  'flickeringmyth.com',
  'flightclub.com',
  'flightglobal.com',
  'flip.kz',
  'flipkart.com',
  'flippa.com',
  'flybuys.com.au',
  'fnac.com',
  'fnac.es',
  'fnac.pt',
  'focus.cn',
  'fonts.com',
  'footballstreamings.com',
  'footprint360.com',
  'forever21.com',
  'foromtb.com',
  'forsalebyowner.com',
  'fravega.com',
  'freelancer.com',
  'freelancer.in',
  'freshdirect.com',
  'fril.jp',
  'g2a.com',
  'ga-dev-tools.appspot.com',
  'galeria-kaufhof.de',
  'game.es',
  'gameflip.com',
  'games.gr',
  'gamiss.com',
  'gandhi.com.mx',
  'gear4music.com',
  'gearbest.com',
  'geekbuying.com',
  'gemius.com',
  'geopostcodes.com',
  'getapp.com',
  'gittigidiyor.com',
  'glassesusa.com',
  'globalsources.com',
  'gmarket.co.kr',
  'go.com',
  'gobizkorea.com',
  'gohappy.com.tw',
  'gomaji.com',
  'goodsearch.com',
  'goodyear.com',
  'google.co.ma',
  'grabon.in',
  'grainger.com',
  'graphicriver.net',
  'graphicstock.com',
  'grosbill.com',
  'groupon.be',
  'groupon.cl',
  'groupon.co.il',
  'groupon.co.uk',
  'groupon.com',
  'groupon.com.ar',
  'groupon.com.au',
  'groupon.com.br',
  'groupon.com.co',
  'groupon.de',
  'groupon.fr',
  'groupon.pl',
  'gucci.com',
  'guitarcenter.com',
  'guitarplayer.ru',
  'gumtree.co.za',
  'gumtree.com',
  'gumtree.com.au',
  'gunbroker.com',
  'gymboree.com',
  'gymshark.com',
  'halfords.com',
  'halv.com',
  'hammacher.com',
  'harrys.com',
  'harveynorman.com.au',
  'hayneedle.com',
  'hbx.com',
  'heb.com',
  'hellotravel.com',
  'henribendel.com',
  'hermes.com',
  'heureka.cz',
  'heureka.sk',
  'hhgregg.com',
  'hmv.co.jp',
  'hollisterco.com',
  'homedepot.ca',
  'homedepot.com',
  'homedepot.com.mx',
  'homeshop18.com',
  'homeshopping.pk',
  'homeworkmarket.com',
  'hood.de',
  'horizonhobby.com',
  'hostmonster.com',
  'houseoffraser.co.uk',
  'hoyts.com.au',
  'hp.com',
  'hpshopping.in',
  'hsn.com',
  'hubic.com',
  'hybris.com',
  'hypebeast.com',
  'ibs.it',
  'iceland.co.uk',
  'idealo.es',
  'idnfbs.com',
  'ikea.com',
  'ikman.lk',
  'immonet.de',
  'indiafreestuff.in',
  'indiaproperty.com',
  'infogreffe.fr',
  'infusionsoft.com',
  'interkassa.com',
  'ioffer.com',
  'irctc.co.in',
  'italist.com',
  'izobility.com',
  'jadopado.com',
  'jako-o.de',
  'jamesedition.com',
  'jamieoliver.com',
  'jarir.com',
  'jcrew.com',
  'jd.com',
  'jet.com',
  'jlist.com',
  'joann.com',
  'johnlewis.com',
  'jollychic.com',
  'joshinweb.jp',
  'joueclub.fr',
  'jpc.de',
  'jualo.com',
  'jumia.ci',
  'jumia.cm',
  'jumia.co.ke',
  'jumia.com.eg',
  'jumia.com.gh',
  'jumia.com.ng',
  'jumia.ma',
  'junglescout.com',
  'justhost.com',
  'kabum.com.br',
  'kaidee.com',
  'kaola.com',
  'kaymu.com.bd',
  'kaymu.pk',
  'keepa.com',
  'keepcalm-o-matic.co.uk',
  'kelkoo.fr',
  'kendrascott.com',
  'khmer24.com',
  'kiabi.es',
  'kickz.com',
  'kidsnet.cn',
  'kidstaff.com.ua',
  'kikki-k.com',
  'kilimall.co.ke',
  'kingarthurflour.com',
  'kixify.com',
  'klarna.com',
  'kmart.com',
  'kmart.com.au',
  'kogan.com',
  'kohls.com',
  'komplett.no',
  'konga.com',
  'koovs.com',
  'kotte-zeller.de',
  'koudaitong.com',
  'kulula.com',
  'kupivip.ru',
  'kvk.nl',
  'labirint.ru',
  'lacoste.com',
  'lamborghini.com',
  'lamoda.by',
  'lampsplus.com',
  'lancome-usa.com',
  'landmarkshops.in',
  'landofnod.com',
  'lanebryant.com',
  'laredoute.ru',
  'lazada.co.id',
  'lazada.co.th',
  'lazada.com',
  'lazada.com.my',
  'lazada.com.ph',
  'lazada.sg',
  'lazada.vn',
  'leadsleap.com',
  'lefrecce.it',
  'lego.com',
  'lelong.com.my',
  'lemall.com',
  'lendingclub.com',
  'letgo.com',
  'levi.com',
  'lidl.de',
  'lightinthebox.com',
  'limeroad.com',
  'linio.cl',
  'linio.com.mx',
  'linio.com.pe',
  'linkis.com',
  'linksys.com',
  'linustechtips.com',
  'listia.com',
  'littlewoods.com',
  'llbean.com',
  'localbitcoins.com',
  'loft.com',
  'lojasrenner.com.br',
  'lordandtaylor.com',
  'luluwebstore.com',
  'lyst.com',
  'maclife.de',
  'macys.com',
  'made-in-china.com',
  'madewell.com',
  'mafengwo.cn',
  'magazinevoce.com.br',
  'magento.com',
  'mailchimp.com',
  'makaan.com',
  'makeshop.jp',
  'makeupgeek.com',
  'maltapark.com',
  'mandmdirect.com',
  'mansionglobal.com',
  'maplin.co.uk',
  'markafoni.com',
  'marksandspencer.com',
  'markt.de',
  'massdrop.com',
  'mataharimall.com',
  'materiel.net',
  'maxmara.com',
  'mazdausa.com',
  'mc-market.org',
  'mediaworld.it',
  'melaleuca.com',
  'mercadolibre.cl',
  'mercadolibre.co.cr',
  'mercadolibre.com',
  'mercadolibre.com.ec',
  'mercadolibre.com.pe',
  'mercadolibre.com.uy',
  'mercadolibre.com.ve',
  'mercadolivre.com',
  'mercadopago.com',
  'mercadopago.com.ar',
  'mercadopago.com.br',
  'mercadopago.com.mx',
  'mercari.com',
  'merrell.com',
  'merrybet.com',
  'meshok.net',
  'metrodeal.com',
  'michaelkors.com',
  'michaels.com',
  'micromaxinfo.com',
  'microsoft.com',
  'microsoftonline.com',
  'microsoftstore.com',
  'microspot.ch',
  'mihanstore.net',
  'mihanwebhost.com',
  'minecraft.net',
  'minted.com',
  'missguided.co.uk',
  'missingtricks.net',
  'mmoga.de',
  'modaoperandi.com',
  'modcloth.com',
  'modhoster.de',
  'modiseh.com',
  'mojomarketplace.com',
  'monclick.it',
  'moneysavingexpert.com',
  'moonpig.com',
  'morele.net',
  'motorola.com',
  'mountainwarehouse.com',
  'movies7.in',
  'mpsh.ru',
  'mrp.com',
  'mrporter.com',
  'msn.com',
  'mtb-news.de',
  'mu.edu.sa',
  'mudah.my',
  'multiurok.ru',
  'muztorg.ru',
  'mvideo.ru',
  'mwave.com.au',
  'my-shop.ru',
  'myip.ms',
  'myntra.com',
  'myoffer.com',
  'mypornmotion.com',
  'mysimon.com',
  'mysupermarket.co.uk',
  'mysynchrony.com',
  'myus.com',
  'n11.com',
  'naaptol.com',
  'name.com',
  'namshi.com',
  'narkive.com',
  'narvar.com',
  'nascar.com',
  'nastygal.com',
  'national-lottery.co.uk',
  'natureetdecouvertes.com',
  'ndr.de',
  'neimanmarcus.com',
  'net-a-porter.com',
  'netbarg.com',
  'netshoes.com.br',
  'newlook.com',
  'next.co.uk',
  'nextag.com',
  'nflshop.com',
  'nhadatso.com',
  'nielsen.com',
  'nike.com',
  'nikonusa.com',
  'nordstrom.com',
  'nordstromrack.com',
  'nordvpn.com',
  'notebooksbilliger.de',
  'nullrefer.com',
  'nuuvem.com',
  'nykaa.com',
  'nyxcosmetics.com',
  'nzco.us',
  'obcindia.co.in',
  'obdesign.com.tw',
  'ocnk.net',
  'ofertia.com.mx',
  'offerupnow.com',
  'officeworks.com.au',
  'ofweek.com',
  'ogone.com',
  'okazii.ro',
  'oki-ni.com',
  'okpay.com',
  'oldi.ru',
  'oldnavy.com',
  'olx.bg',
  'olx.co.ao',
  'olx.co.ke',
  'olx.co.za',
  'olx.com.ar',
  'olx.com.br',
  'olx.com.co',
  'olx.com.ec',
  'olx.com.ng',
  'olx.com.sv',
  'olx.com.ve',
  'omahasteaks.com',
  'omni7.jp',
  'onekingslane.com',
  'onlinejobs.ph',
  'onlineshoes.com',
  'onlinetrade.ru',
  'opad.com.cn',
  'opencart.com',
  'opensooq.com',
  'opskins.com',
  'opticsplanet.com',
  'optus.com.au',
  'orange.eg',
  'orbitz.com',
  'oreilly.com',
  'originalteentube.com',
  'oshopping.com.ph',
  'otakumode.com',
  'overcart.com',
  'ozsale.com.au',
  'p30rank.ir',
  'pacsun.com',
  'pamperedchef.com',
  'panasonic.com',
  'pandasecurity.com',
  'paris.cl',
  'parisinfo.com',
  'partsgeek.com',
  'passfeed.com',
  'payback.de',
  'payback.in',
  'payless.com',
  'paypal.co.uk',
  'payu.com',
  'payza.com',
  'pazar3.mk',
  'pazaruvaj.com',
  'pb.com',
  'pcel.com',
  'pcgarage.ro',
  'peapod.com',
  'pearl.de',
  'penguinmagic.com',
  'pepperfry.com',
  'performance-zone.com',
  'petco.com',
  'philibertnet.com',
  'photodune.net',
  'picclick.com',
  'picclick.com.au',
  'picclick.fr',
  'picodi.com',
  'pier1.com',
  'pinkoi.com',
  'pisos.com',
  'play-asia.com',
  'playbill.com',
  'playerauctions.com',
  'playsport.cc',
  'playstation.com',
  'pleer.ru',
  'polyvore.com',
  'ponparemall.com',
  'popcash.net',
  'popsugar.com',
  'poshmark.com',
  'potterybarnkids.com',
  'premiumoutlets.com',
  'prestashop.com',
  'prezzybox.com',
  'priceminister.com',
  'pricena.com',
  'pricespider.com',
  'primevideo.com',
  'princessauto.com',
  'printland.in',
  'printvenue.com',
  'privatesportshop.fr',
  'prom.ua',
  'promocodeclub.com',
  'prosper.com',
  'purplle.com',
  'pvrcinemas.com',
  'qoo10.jp',
  'qoo10.my',
  'qoo10.sg',
  'quidco.com',
  'qvc.de',
  'racerglovesusa.com',
  'raise.com',
  'rakuten.co.jp',
  'rakuten.com',
  'rakuten.com.tw',
  'rakuten.de',
  'rakuten.ne.jp',
  'ralphlauren.com',
  'rbt.ru',
  'real.de',
  'redbubble.com',
  'redbubble.net',
  'regmovies.com',
  'rei.com',
  'renderosity.com',
  'renttherunway.com',
  'retailmenot.ca',
  'reverb.com',
  'ria.com',
  'ricardo.ch',
  'richersounds.com',
  'ripley.cl',
  'riverisland.com',
  'romwe.com',
  'roomstogo.com',
  'rosegal.com',
  'rue21.com',
  'ruelala.com',
  'rumahdijual.com',
  'runningwarehouse.com',
  'saatchiart.com',
  'safeway.com',
  'sainsburys.co.uk',
  'saksfifthavenue.com',
  'samsclub.com',
  'samsung.com',
  'sanborns.com.mx',
  'sasa.com',
  'satu.kz',
  'sbazar.cz',
  'sbicard.com',
  'sbilife.co.in',
  'sbrf.ru',
  'scb.co.th',
  'scentsy.us',
  'scotch-soda.com',
  'scottevest.com',
  'searchtds.ru',
  'sears.ca',
  'sears.com',
  'sears.com.mx',
  'seatguru.com',
  'seetickets.com',
  'segundamano.mx',
  'seoclerk.com',
  'seoclerks.com',
  'sheetmusicplus.com',
  'shein.com',
  'shenyun.com',
  'shenzhenparty.com',
  'shipito.com',
  'shipstation.com',
  'shoes.com',
  'shoop.de',
  'shop-apotheke.com',
  'shop-list.com',
  'shop.com',
  'shopcade.com',
  'shophive.com',
  'shopjustice.com',
  'shopmyexchange.com',
  'shoppersdrugmart.ca',
  'shopping.com',
  'shopstyle.co.uk',
  'shopstyle.com',
  'shopyourway.com',
  'shpock.com',
  'shufoo.net',
  'sima-land.ru',
  'simon.com',
  'simons.ca',
  'sixthjune.com',
  'skechers.com',
  'skrill.com',
  'slrlounge.com',
  'smartprix.com',
  'smarturl.it',
  'smythstoys.com',
  'smzdm.com',
  'snapdeal.com',
  'sodimac.cl',
  'sofort.com',
  'solostocks.com',
  'songkick.com',
  'sonicelectronix.com',
  'sonymobile.com',
  'sothebys.com',
  'souq.com',
  'spoonflower.com',
  'sportchek.ca',
  'sportsdirect.com',
  'sportsmansoutdoorsuperstore.com',
  'sportsshoes.com',
  'sprint.com',
  'squareup.com',
  'ssense.com',
  'stalkbuylove.com',
  'stamps.com',
  'steampay.com',
  'stellamccartney.com',
  'stereoboard.com',
  'stockisti.com',
  'stolplit.ru',
  'straighttalk.com',
  'streetstylestore.com',
  'stripe.com',
  'strtpoint.com',
  'stubhub.com',
  'stylebistro.com',
  'stylecaster.com',
  'stylewe.com',
  'subway.com',
  'suitableshop.nl',
  'sumofus.org',
  'sunglasshut.com',
  'sunlight.net',
  'superdry.com',
  'swagbucks.com',
  'swansonvitamins.com',
  'swappa.com',
  'swarovski.com',
  'swisscom.ch',
  'symbios.pk',
  't-mobile.nl',
  'tactics.com',
  'takealot.com',
  'takhfifan.com',
  'takko.com',
  'taobao.com',
  'tatacliq.com',
  'tatadocomo.com',
  'tayara.tn',
  'tbdress.com',
  'tchibo.de',
  'tcs.com',
  'teacherspayteachers.com',
  'technodom.kz',
  'tenso.com',
  'terapeak.com',
  'tesco.com',
  'thebay.com',
  'thebodyshop-usa.com',
  'thebodyshop.com',
  'thegrommet.com',
  'thelotter.com',
  'themeforest.net',
  'theoutnet.com',
  'thepanelstation.com',
  'theprintful.com',
  'thetrainline.com',
  'thinkgeek.com',
  'thomann.de',
  'thredup.com',
  'three.co.uk',
  'three.ie',
  'thrillist.com',
  'thrivemarket.com',
  'ticbeat.com',
  'ticketexchangebyticketmaster.com',
  'ticketfly.com',
  'ticketmaster.ca',
  'ticketmaster.es',
  'ticketmonster.co.kr',
  'ticketsnow.com',
  'tictail.com',
  'tiendeo.com',
  'tiffany.com',
  'timberland.com',
  'tinydeal.com',
  'tizianafausti.com',
  'tmall.com',
  'tmall.hk',
  'tmart.com',
  'tn.com.ar',
  'tobi.com',
  'todocoleccion.net',
  'togofogo.com',
  'tokopedia.com',
  'tomford.com',
  'tommiecopper.com',
  'tomshardware.co.uk',
  'tomshardware.fr',
  'top-shop.ru',
  'topcashback.co.uk',
  'topman.com',
  'topshop.com',
  'toryburch.com',
  'totalexpress.com.br',
  'totalrewards.com',
  'toysrus.ca',
  'tracfone.com',
  'tractorsupply.com',
  'tradebit.com',
  'tradecarview.com',
  'tradeindia.com',
  'tradekorea.com',
  'trademe.co.nz',
  'tradesparq.com',
  'tradesy.com',
  'traidnt.net',
  'trainman.in',
  'transrush.com',
  'travelboutiqueonline.com',
  'travelclub.es',
  'trekkinn.com',
  'trendyol.com',
  'trenitalia.com',
  'tripadvisor.co.nz',
  'tsa-algerie.com',
  'tucarro.com.ve',
  'tunisvista.com',
  'twenga.es',
  'twenga.fr',
  'twinkledeals.com',
  'udemy.com',
  'underarmour.com',
  'uniqlo.com',
  'universal.at',
  'unocoin.com',
  'upcitemdb.com',
  'upload.mobi',
  'urbanladder.com',
  'uship.com',
  'vans.com',
  'vapordna.com',
  'varagesale.com',
  'vatera.hu',
  'vatgia.com',
  'vente-exclusive.com',
  'venus.com',
  'very.co.uk',
  'viabox.com',
  'viagogo.co.uk',
  'videohive.net',
  'vip.com',
  'vipvoice.com',
  'vivareal.com.br',
  'vividseats.com',
  'vodafone.com.au',
  'voeazul.com.br',
  'wadi.com',
  'wallapop.com',
  'walmart.ca',
  'walmart.com',
  'walmart.com.mx',
  'warbyparker.com',
  'warframe.market',
  'warpedspeed.com',
  'watchshop.com',
  'wayfair.com',
  'weatherknow.com',
  'web-work.in',
  'webmotors.com.br',
  'wegmans.com',
  'well.ca',
  'westfalia.de',
  'westwing.de',
  'whoishostingthis.com',
  'whowhatwear.com',
  'whsmith.co.uk',
  'wildberries.by',
  'wisecleaner.com',
  'wish.com',
  'wordsinasentence.com',
  'workingatbooking.com',
  'worldmarket.com',
  'worldofwatches.com',
  'worldsoccershop.com',
  'wowza.com',
  'wrapbootstrap.com',
  'wrestlingreviews.net',
  'wunderlist.com',
  'wyndhamhotels.com',
  'xapo.com',
  'xboxachievements.com',
  'xcite.com',
  'xcite.com.sa',
  'xehoiviet.com',
  'xiaomi-mi.com',
  'xiaomidevice.com',
  'xiu.com',
  'xtra-pc.com',
  'xueqiu.com',
  'xunlei.com',
  'yaencontre.com',
  'yamibuy.com',
  'yaoota.com',
  'yelp.ca',
  'yelp.com.au',
  'yelp.de',
  'yepme.com',
  'yesstyle.com',
  'yoigo.com',
  'yudala.com',
  'z.com',
  'zaka-zaka.com',
  'zalando.be',
  'zalando.ch',
  'zalando.co.uk',
  'zalando.es',
  'zalando.it',
  'zalando.nl',
  'zalora.com.hk',
  'zalora.com.my',
  'zalora.sg',
  'zameen.com',
  'zando.co.za',
  'zap.co.il',
  'zapimoveis.com.br',
  'zauba.com',
  'zazzle.co.uk',
  'zazzle.com',
  'ziddu.com',
  'zigwheels.com',
  'zmart.cl',
  'zol.com',
  'zol.com.cn',
  'zumiez.com'
]

module.exports = {
  retrieve: function (cb) {
    cb(null, domains)
  },

  build: function (cb) {
    const transformedList = domains.map((item) => { return `'${item}'` }).join(', ')
    const rule = {
      condition: `(new Set([ ${transformedList} ])).has(SLD)`,
      consequent: null,
      description: 'exclude commerce sites'
    }
    cb(null, rule)
  }
}
