const domains = [
  '10010.com',
  '104.com.tw',
  '10adspay.com',
  '126.com',
  '1541.ws',
  '16mb.com',
  '176.com',
  '18183.com',
  '18touch.com',
  '192.com',
  '1and1.co.uk',
  '1and1.com',
  '1and1.es',
  '1fichier.com',
  '1und1.de',
  '23andme.com',
  '2captcha.com',
  '2conv.com',
  '3ders.org',
  '4055.ws',
  '4imprint.com',
  '5068.com',
  '51.la',
  '51240.com',
  '51cto.com',
  '51yes.com',
  '56568.com',
  '591.com.tw',
  '6781.com',
  '9384.com',
  '9xlinks.net',
  'aastocks.com',
  'ac-nice.fr',
  'accenture.com',
  'acer.edu.au',
  'aces.gov.in',
  'acesse.com',
  'adcb.com',
  'addthis.com',
  'adf.ly',
  'adorama.com',
  'adp.com',
  'adult.xyz',
  'adultwork.com',
  'advertserve.com',
  'aeries.net',
  'aeromexico.com',
  'aessuccess.org',
  'agenciatributaria.gob.es',
  'aib.ie',
  'aircel.com',
  'airtel.com',
  'akamai.com',
  'alahli.com',
  'alaska.gov',
  'alberta.ca',
  'alc.co.jp',
  'aliorbank.pl',
  'alipay.com',
  'aliyun.com',
  'all.biz',
  'ally.com',
  'alwadifa-maroc.com',
  'amazonservices.com',
  'americanexpress.com',
  'americanlisted.com',
  'ams.org',
  'amtrak.com',
  'android.com',
  'android.gs',
  'anpost.ie',
  'antigate.com',
  'antonioli.eu',
  'anz.co.nz',
  'apitrx.com',
  'aponline.gov.in',
  'apple.com',
  'appsgeyser.com',
  'apspsc.gov.in',
  'aquiporno.com',
  'aramex.com',
  'arcor.de',
  'asic.gov.au',
  'ask.com',
  'asklaila.com',
  'asurion.com',
  'atelieronweb.com',
  'ato.gov.au',
  'atomtech.in',
  'atos.net',
  'att.com',
  'att.com.mx',
  'atwiki.jp',
  'aucegypt.edu',
  'audible.com',
  'avast.com',
  'avenues.info',
  'avg.com',
  'axisbank.com',
  'ay.gy',
  'azet.sk',
  'azureedge.net',
  'baby-walz.de',
  'backblaze.com',
  'banamex.com',
  'banamex.com.mx',
  'bancochile.cl',
  'bancoestado.cl',
  'bancopopular.es',
  'bancsabadell.com',
  'banesconline.com',
  'bangkokbank.com',
  'bankcardservices.co.uk',
  'bankhapoalim.co.il',
  'bankofamerica.com',
  'battle.net',
  'bbandt.com',
  'bbsconstruction.ca',
  'bbt.com',
  'bbva.com',
  'bbvacompass.com',
  'bbvafrances.com.ar',
  'bci.cl',
  'bcu.ac.uk',
  'bdupload.info',
  'beeline.ru',
  'behance.net',
  'belgium.be',
  'bell.ca',
  'best-muzon.me',
  'bestblackhatforum.com',
  'bestchange.com',
  'bestsecret.com',
  'bestvpn.com',
  'bet365.com',
  'bet365.es',
  'bet365.gr',
  'bet365.it',
  'betradar.com',
  'bharatmatrimony.com',
  'biblia.com',
  'biccamera.com',
  'bigpond.com',
  'bigrock.in',
  'bigtheme.ir',
  'billdesk.com',
  'bio-rad.com',
  'bitgo.com',
  'bitly.com',
  'bitrix24.net',
  'blablacar.ru',
  'blackberry.com',
  'blackboard.com',
  'bladehq.com',
  'blankrefer.com',
  'blog.ir',
  'bluehost.com',
  'bluehost.in',
  'bluemix.net',
  'bmo.com',
  'bnl.it',
  'bnpparibas.net',
  'boards.net',
  'bol.uol.com.br',
  'booking.com',
  'bose.com',
  'boulanger.com',
  'box.com',
  'bradesco.com.br',
  'brandwatch.com',
  'bravenet.com',
  'bris.ac.uk',
  'brocku.ca',
  'bsnl.co.in',
  'budsgunshop.com',
  'build.com',
  'bunnings.com.au',
  'buyma.com',
  'buzzplayz.com',
  'cableone.net',
  'caixabank.es',
  'calendly.com',
  'campaign-archive2.com',
  'canada.ca',
  'capgemini.com',
  'capitalone.com',
  'capitalonecardservice.com',
  'card-data.com',
  'carfax.com',
  'carrefour.fr',
  'cars.com',
  'cas.org',
  'cashu.com',
  'cat.com',
  'catho.com.br',
  'cbq.qa',
  'ccavenue.com',
  'cda.pl',
  'cellphones.com.vn',
  'cengage.com',
  'centrelink.gov.au',
  'centrify.com',
  'centurylink.com',
  'centurylink.net',
  'cg.nic.in',
  'cgsociety.org',
  'ch.com',
  'chartboost.com',
  'charter.net',
  'chase.com',
  'chatzy.com',
  'checkfreeweb.com',
  'chinahr.com',
  'chinamobile.com',
  'chinaso.com',
  'christ.de',
  'christianmingle.com',
  'chronopost.fr',
  'cigna.com',
  'cimbclicks.com.my',
  'cinemark.com',
  'citibank.com.au',
  'citibank.com.my',
  'citibank.com.sg',
  'citibank.ru',
  'citizensinformation.ie',
  'civilserviceindia.com',
  'classmethod.jp',
  'clemson.edu',
  'cleverbridge.com',
  'cli.im',
  'clicknupload.link',
  'clicksor.net',
  'cliquesteria.net',
  'cloudgate.jp',
  'cloudlogin.co',
  'cmb.fr',
  'cmbchina.com',
  'cms.gov',
  'cnzz.com',
  'coccoc.com',
  'cocoleech.com',
  'cognizant.com',
  'comcast.com',
  'companycheck.co.uk',
  'computershare.com',
  'connectingsingles.com',
  'consoglobe.com',
  'consorsbank.de',
  'cookpad.com',
  'corpbank.com',
  'correoargentino.com.ar',
  'correosdemexico.gob.mx',
  'cpic.com.cn',
  'cra-arc.gc.ca',
  'craigslist.ca',
  'craigslist.co.in',
  'craigslist.co.uk',
  'craigslist.com.au',
  'craigslist.com.mx',
  'craigslist.jp',
  'craigslist.org',
  'credit-agricole.fr',
  'credit-du-nord.fr',
  'creditmutuel.fr',
  'cricketwireless.com',
  'crmls.org',
  'csair.com',
  'csc.gov.in',
  'ctfile.com',
  'ctrip.com',
  'cu.edu',
  'd-h.st',
  'dailyleaks.com',
  'dailysun.co.za',
  'dainikshiksha.com',
  'daserste.de',
  'dastelefonbuch.de',
  'datafilehost.com',
  'daum.net',
  'db.com',
  'dba-oracle.com',
  'dealsource.tech',
  'decathlon.it',
  'deere.com',
  'defencenews.in',
  'delaware.gov',
  'delhi.gov.in',
  'delhigovt.nic.in',
  'deloitte.com',
  'deluxe.com',
  'dereferer.com',
  'desjardins.com',
  'desk.com',
  'deskgram.com',
  'deutsche-bank.de',
  'deutschepost.de',
  'dfas.mil',
  'dhl.com.mx',
  'dhl.fr',
  'dickblick.com',
  'digitalocean.com',
  'digitel.com.ve',
  'direct.gov.uk',
  'discoveryeducation.com',
  'dishtv.in',
  'dm.de',
  'docusign.net',
  'doda.jp',
  'dogannet.tv',
  'dominos.co.in',
  'domru.ru',
  'dopefile.pk',
  'dopr.net',
  'dosomething.org',
  'dothome.co.kr',
  'downdetector.com',
  'dpd.co.uk',
  'dreamhost.com',
  'dreamland.be',
  'dropbox.com',
  'dtac.co.th',
  'dtdc.com',
  'dtdc.in',
  'duba.com',
  'duckduckgo.com',
  'duke-energy.com',
  'e-cartebleue.com',
  'e-paycapita.com',
  'e-zpassny.com',
  'earthlink.net',
  'ebs.in',
  'ebscohost.com',
  'edaboard.com',
  'educarecuador.gob.ec',
  'eftps.gov',
  'eharmony.com',
  'eir.ie',
  'elcat.kg',
  'electronica-pt.com',
  'elo7.com.br',
  'elsevier.com',
  'elyomnews.com',
  'emeraldinsight.com',
  'emergencyemail.org',
  'emory.edu',
  'endclothing.com',
  'engie.fr',
  'entelo.com',
  'epam.com',
  'epsonconnect.com',
  'eserve.com.sa',
  'eslpod.com',
  'essex.ac.uk',
  'estream.to',
  'etecsa.cu',
  'ethermine.org',
  'etnet.com.hk',
  'etudiant.gouv.fr',
  'everquote.com',
  'everyone.net',
  'excite.com',
  'exportersindia.com',
  'expressvpn.com',
  'fanfiber.com',
  'farnell.com',
  'fastmail.com',
  'fastpic.ru',
  'fastweb.com',
  'fc2.com',
  'fdecs.com',
  'fedex.com',
  'feedblitz.com',
  'femina.hu',
  'femmesplus.fr',
  'feng.com',
  'filejoker.net',
  'filmweb.pl',
  'findeen.com',
  'finecobank.com',
  'finmin.nic.in',
  'fio.cz',
  'firefoxchina.cn',
  'firstdata.com',
  'firstdirect.com',
  'firstmeritib.com',
  'firstnational.com',
  'fishersci.com',
  'fitbit.com',
  'fiverr.com',
  'fixya.com',
  'flashresultats.fr',
  'flashx.tv',
  'flattr.net',
  'flhsmv.gov',
  'flightstats.com',
  'fluke.com',
  'flyertea.com',
  'forexpeacearmy.com',
  'forocoches.com',
  'forrent.com',
  'fotka.com',
  'france3.fr',
  'freakshare.com',
  'free.fr',
  'freeconferencecall.com',
  'freedompop.com',
  'freeforums.net',
  'freeimgup.com',
  'freeproxy.io',
  'freetranslation.com',
  'freshmenu.com',
  'freshseries.net',
  'fromtexttospeech.com',
  'fronter.com',
  'frontier.com',
  'fs.fed.us',
  'fssprus.ru',
  'fubo.tv',
  'fujitsu.com',
  'gadgetreview.com',
  'gamefly.com',
  'gamewith.jp',
  'ganeshaspeaks.com',
  'gcsip.com',
  'geeker.com',
  'gemius.pl',
  'gentoo.org',
  'geocities.co.jp',
  'georgetown.edu',
  'georgia.gov',
  'getaround.com',
  'getfinal.com',
  'getuploader.com',
  'gigafile.nu',
  'gitlab.com',
  'glassdoor.fr',
  'globalsign.com',
  'gmx.at',
  'gmx.ch',
  'gmx.net',
  'go-sport.com',
  'godaddy.com',
  'goedekers.com',
  'gogoinflight.com',
  'gold-price-today.com',
  'goldenfrog.com',
  'goldmansachs.com',
  'golfdigest.co.jp',
  'googlecode.com',
  'gosuslugi.ru',
  'gotprint.com',
  'gouv.qc.ca',
  'gov.ie',
  'gpo.gov',
  'gradesaver.com',
  'gradeup.co',
  'grameenphone.com',
  'gramota.ru',
  'graphic.jp',
  'gratka.pl',
  'groovehq.com',
  'gs.com',
  'guiamais.com.br',
  'gwu.edu',
  'handelsbanken.se',
  'hangseng.com',
  'hankookilbo.com',
  'haosou.com',
  'harman.com',
  'hatena.ne.jp',
  'hathway.com',
  'hcl.com',
  'hcltech.com',
  'hcsc.net',
  'hdfc.com',
  'hdfcbank.com',
  'headhonchos.com',
  'health.com.kh',
  'healthcaremagic.com',
  'healthplan.com',
  'heinemann.com',
  'helpscout.net',
  'hermesworld.com',
  'heroku.com',
  'hesab.az',
  'hh.ru',
  'hhs.gov',
  'hidemyass.com',
  'hinative.com',
  'hkbea.com',
  'hlb.com.my',
  'hmhco.com',
  'hmrc.gov.uk',
  'homeadvisor.com',
  'homeplus.co.kr',
  'hondafinancialservices.com',
  'hornbach.de',
  'hostinger.co.uk',
  'hostwinds.com',
  'hotelscombined.com',
  'hotforex.com',
  'hrblock.com',
  'hrdc-drhc.gc.ca',
  'hsbc.co.in',
  'hsbc.com.mx',
  'hsbc.fr',
  'htmlpublish.com',
  'hugedomains.com',
  'huntington.com',
  'huomao.com',
  'hvaerminip.no',
  'hydroquebec.com',
  'hypestat.com',
  'iau.ir',
  'ic-trade.com',
  'iciba.com',
  'icicibank.co.in',
  'icicibank.com',
  'icloud.com',
  'icoconvert.com',
  'icscards.nl',
  'idc.com',
  'ideacellular.com',
  'idope.se',
  'ifttt.com',
  'iinet.net.au',
  'ilmatieteenlaitos.fi',
  'ilovepdf.com',
  'ilovetranslation.com',
  'imagetwist.com',
  'imgking.co',
  'in.gov',
  'inbox.com',
  'india.gov.in',
  'indianoil.co.in',
  'indiarailinfo.com',
  'indusind.com',
  'infosys.com',
  'instacart.com',
  'instagress.com',
  'instructure.com',
  'interac.ca',
  'interlinkexpress.com',
  'interswitchng.com',
  'intesasanpaolo.com',
  'iocl.com',
  'ipchicken.com',
  'ipko.pl',
  'ipv6-test.com',
  'iqiyi.com',
  'ird.govt.nz',
  'irecommend.ru',
  'iscorp.com',
  'ispunblock.com',
  'j.gs',
  'jasso.go.jp',
  'jcb.co.jp',
  'jccm.es',
  'jd.com',
  'jetblue.com',
  'jetstar.com',
  'jigzone.com',
  'jiushang.cn',
  'jobkorea.co.kr',
  'jobsite.co.uk',
  'jokerquiz.com',
  'journaldesfemmes.com',
  'joyme.com',
  'jpsc.gov.in',
  'jr-odekake.net',
  'junglee.com',
  'juniper.net',
  'justdial.com',
  'kakaku.com',
  'kaspi.kz',
  'kenyan-post.com',
  'keralapsc.gov.in',
  'kerboodle.com',
  'keybase.io',
  'khamsat.com',
  'kijiji.ca',
  'kijiji.it',
  'kku.edu.sa',
  'klingel.de',
  'kn3.net',
  'knetpay.com.kw',
  'kongzhong.com',
  'konicaminolta.com',
  'krak.dk',
  'kupujemprodajem.com',
  'kuwo.cn',
  'kvb.co.in',
  'labcorp.com',
  'lacaixa.es',
  'ladesk.com',
  'lakeside.com',
  'laposte.fr',
  'larsentoubro.com',
  'lassuranceretraite.fr',
  'lcsd.gov.hk',
  'le.com',
  'leagueoflegendsreplay.com',
  'leboncoin.fr',
  'leclercdrive.fr',
  'legifrance.gouv.fr',
  'lemall.com',
  'leroymerlin.es',
  'leumi-card.co.il',
  'lexis.com',
  'lgd.gov.bd',
  'librato.com',
  'libsyn.com',
  'liepin.com',
  'lifelock.com',
  'line.me',
  'link.tl',
  'linkshrink.net',
  'linoit.com',
  'list-manage.com',
  'listen2myradio.com',
  'listentoyoutube.com',
  'live.com',
  'liveinternet.ru',
  'livescores.com',
  'livestream.com',
  'lix.in',
  'lloydsbank.com',
  'local.com',
  'locaweb.com.br',
  'logopond.com',
  'lolesports.com',
  'longfiles.com',
  'loveme.com',
  'lowes.ca',
  'loxgraph.com',
  'lse.ac.uk',
  'luc.edu',
  'luxmed.pl',
  'mabanque.bnpparibas',
  'maccabi4u.co.il',
  'mag2.com',
  'mail.ru',
  'mail2web.com',
  'mailchimp.com',
  'mailerlite.com',
  'mailjet.com',
  'maine.edu',
  'malaysiaairlines.com',
  'manheim.com',
  'marketgid.com',
  'marktplaats.nl',
  'mathforum.org',
  'maxtv.cn',
  'mbed.org',
  'mbna.co.uk',
  'mcarthurglen.com',
  'mcdelivery.co.in',
  'mcdelivery.co.kr',
  'mci.ir',
  'mcplayz.com',
  'mediamarkt.ru',
  'medicalxpress.com',
  'medicare.gov',
  'meetic.fr',
  'meezanbank.com',
  'meiqia.com',
  'meituan.com',
  'mercantilbanco.com',
  'merchantshares.com',
  'mercy.net',
  'messenger.com',
  'met.ie',
  'meteoinfo.ru',
  'microcenter.com',
  'microsoft.com',
  'microsoftonline.com',
  'microsoftstore.com.cn',
  'milanuncios.com',
  'mingle2.com',
  'mixi.jp',
  'mizuho-sc.com',
  'mizuhobank.co.jp',
  'mlab.com',
  'mo.gov',
  'mobile.ir',
  'mofa.gov.sa',
  'mohawkcollege.ca',
  'moneyadviceservice.org.uk',
  'morganstanley.com',
  'morganstanleyclientserv.com',
  'mos.ru',
  'moshahda.net',
  'motorolasolutions.com',
  'mouthshut.com',
  'movistar.com.ar',
  'movistar.com.mx',
  'mpic.ws',
  'mpsc.gov.in',
  'mr-world.com',
  'mrctv.org',
  'mrvoonik.com',
  'mtb.com',
  'mtsindia.in',
  'muabannhanh.com',
  'multisafepay.com',
  'musicplayon.com',
  'mxttrf.com',
  'myaccountaccess.com',
  'mybluemix.net',
  'myfedloan.org',
  'myfilestore.com',
  'myschoolbucks.com',
  'mystore411.com',
  'mysynchrony.com',
  'mytatasky.com',
  'myvirtualbranch.com',
  'nalog.ru',
  'namejet.com',
  'nanopool.org',
  'nationalrail.co.uk',
  'natunsomoy.com',
  'naver.com',
  'naver.jp',
  'ncix.com',
  'nelog.jp',
  'nenkin.go.jp',
  'neobux.com',
  'nesinc.com',
  'netapp.com',
  'netbk.co.jp',
  'netcombo.com.br',
  'netease.com',
  'netfirms.com',
  'netflix.com',
  'netzero.net',
  'newegg.ca',
  'newrelic.com',
  'newsblur.com',
  'newspicks.com',
  'nhs.net',
  'nicehash.com',
  'nicovideo.jp',
  'nielit.in',
  'nike.com.br',
  'nintendo.net',
  'nissan.co.jp',
  'nomura.co.jp',
  'novafile.com',
  'novaposhta.ua',
  'novelasdk.com',
  'nsw.edu.au',
  'nsw.gov.au',
  'ntt-east.co.jp',
  'ntt.com',
  'nttdata.com',
  'nttdocomo.co.jp',
  'nvsp.in',
  'nwmls.com',
  'nwolb.com',
  'ny.gov',
  'nyc.gov',
  'nysc.org.ng',
  'o2online.de',
  'oanda.com',
  'obligao.com',
  'oboom.com',
  'office.com',
  'oiinternet.com.br',
  'oilandgasjobsearch.com',
  'ok.ru',
  'olacabs.com',
  'olleh.com',
  'olx.co.za',
  'olx.com.pk',
  'olx.pl',
  'olx.ua',
  'olx.uz',
  'on24.com',
  'ondemand.com',
  'oneclickroot.com',
  'oneopinion.com',
  'online2pdf.com',
  'onlinemeetingnow.com',
  'onlinesbh.com',
  'onlinesbi.com',
  'onlinesbm.com',
  'onlinesbp.com',
  'openbank.es',
  'opendns.com',
  'openload.co',
  'openrice.com',
  'opensuse.org',
  'opizo.com',
  'optusnet.com.au',
  'orange.fr',
  'oregon.gov',
  'oreilly.com',
  'orico.co.jp',
  'osdn.jp',
  'osdn.net',
  'otodom.pl',
  'otoy.com',
  'otto.de',
  'ouigo.com',
  'ouo.io',
  'outlook.com',
  'overclockers.co.uk',
  'overstock.com',
  'ovid.com',
  'ozipcompression.com',
  'pace.edu',
  'pagerduty.com',
  'paginasamarillas.com.co',
  'pairs.lv',
  'pandora.com',
  'parfumdreams.de',
  'parimatch.com',
  'passportindia.gov.in',
  'paychex.com',
  'payco.com',
  'paydollar.com',
  'paypal.com',
  'paytm.com',
  'pccomponentes.com',
  'pcfinancial.ca',
  'pcmastercard.ca',
  'pdfonline.com',
  'pdftoimage.com',
  'pearson.com',
  'pearsonhighered.com',
  'peeplink.in',
  'peixeurbano.com.br',
  'percona.com',
  'persiantools.com',
  'personare.com.br',
  'petsmart.com',
  'peugeot.com',
  'pge.com',
  'phschool.com',
  'picclick.ca',
  'picclick.co.uk',
  'picclick.de',
  'pigav.com',
  'pingan.com',
  'pioneer.co.in',
  'plala.or.jp',
  'planetromeo.com',
  'playcast.ru',
  'playster.com',
  'pnbindia.in',
  'pof.com',
  'pof.fr',
  'politis.com.cy',
  'pololu.com',
  'porch.com',
  'portail.free.fr',
  'portoseguro.com.br',
  'posb.com.sg',
  'postfinance.ch',
  'postnl.post',
  'powvideo.net',
  'pr.gov',
  'pr.gov.br',
  'prenhall.com',
  'presents.social',
  'preservearticles.com',
  'prestige-av.com',
  'price.com.hk',
  'princeton.edu',
  'privat24.ua',
  'privateinternetaccess.com',
  'probiller.com',
  'proboards.com',
  'productreview.com.au',
  'prometheus.io',
  'protonmail.com',
  'proximus.be',
  'proz.com',
  'prudential.com',
  'pscwb.org.in',
  'pscwbonline.gov.in',
  'psprint.com',
  'ptc.com',
  'public.gr',
  'pulscen.ru',
  'punjab.gov.in',
  'purevpn.com',
  'pwc.com',
  'qantas.com',
  'qantas.com.au',
  'qatarairways.com',
  'qatarliving.com',
  'qcloud.com',
  'qiniu.com',
  'qiwi.com',
  'qld.gov.au',
  'qvc.com',
  'qvcuk.com',
  'rabobank.nl',
  'rackspace.com',
  'radiko.jp',
  'rambler.ru',
  'rbc.com',
  'rbcroyalbank.com',
  'rblbank.com',
  'rcn.com',
  'readytalk.com',
  'real.de',
  'redbunker.net',
  'redhat.com',
  'regions.com',
  'register.com',
  'register.it',
  'reimageplus.com',
  'renault.fr',
  'republicwireless.com',
  'rev.com',
  'reviewmyaccount.com',
  'revolvermaps.com',
  'rewardingpanel.com',
  'rgpv.ac.in',
  'rightel.ir',
  'riteaid.com',
  'robokassa.ru',
  'rockfile.eu',
  'rogers.com',
  'roomserviceparty.com',
  'royalbank.com',
  'royalmail.com',
  'rozblog.com',
  'rrbkolkata.gov.in',
  'rsl.ru',
  'rt.ru',
  'ryver.com',
  'sa.gov.au',
  'sabarimalaq.com',
  'sabq.org',
  'saisoncard.co.jp',
  'sakura.ad.jp',
  'salefiles.com',
  'salliemae.com',
  'samsony.net',
  'sanmar.com',
  'santander.cl',
  'santanderrio.com.ar',
  'saraiva.com.br',
  'saturn.de',
  'savefrom.net',
  'sb24.com',
  'sbbjonline.com',
  'sberbank.ru',
  'sbtonline.in',
  'sc.com',
  'schwab.com',
  'scoresinlive.com',
  'scottishpower.co.uk',
  'scrap.tf',
  'scribd.com',
  'sedecatastro.gob.es',
  'sedo.com',
  'seeedstudio.com',
  'sejda.com',
  'service-now.com',
  'servicenow.com',
  'servimg.com',
  'servis24.cz',
  'sevenbank.co.jp',
  'sf-express.com',
  'sgizmo.com',
  'share-links.biz',
  'sharefile.com',
  'sharekhan.com',
  'sharemods.com',
  'shaw.ca',
  'sheypoor.com',
  'shindanmaker.com',
  'shink.in',
  'shinseibank.com',
  'shop-pro.jp',
  'shrm.org',
  'sibnet.ru',
  'sicredi.com.br',
  'signup.free.fr',
  'siilu.com',
  'silktide.com',
  'similarweb.com',
  'simplenote.com',
  'singtel.com',
  'site5.com',
  'siteget.net',
  'sitejabber.com',
  'sitenable.info',
  'skelbiu.lt',
  'sky.com',
  'sl.se',
  'slacker.com',
  'slc.co.uk',
  'slideshare.net',
  'slideteam.net',
  'sling.com',
  'slsp.sk',
  'smackjeeves.com',
  'smbc-card.com',
  'smbcnikko.co.jp',
  'smu.edu',
  'snag.gy',
  'snapfish.com',
  'sncf.com',
  'so-net.ne.jp',
  'so.com',
  'sociaplus.com',
  'sofi.com',
  'softbank.jp',
  'softlay.net',
  'sogou.com',
  'sohu.com',
  'solanolabs.com',
  'sony.co.jp',
  'sony.net',
  'soratemplates.com',
  'soso.com',
  'sourcenext.com',
  'sparkasse-hannover.de',
  'spaste.com',
  'spectrum.com',
  'speedpay.com',
  'speedtest.net',
  'speedvideo.net',
  'spotify.com',
  'sre.gob.mx',
  'ss.lv',
  'stacksocial.com',
  'stan.com.au',
  'standardchartered.co.in',
  'standardchartered.com',
  'starfall.com',
  'starhub.com',
  'statcounter.com',
  'state.md.us',
  'state.tx.us',
  'stc.com.sa',
  'steampowered.com',
  'steepto.com',
  'stitchfix.com',
  'storytel.no',
  'streamin.to',
  'studylifestyle.com',
  'subpals.com',
  'sulekha.com',
  'sundirect.in',
  'suning.com',
  'sunlife.com',
  'suntrust.com',
  'suomi.fi',
  'suomi24.fi',
  'superhuman.com',
  'surveygizmo.com',
  'swedbank.se',
  'swiggy.com',
  'swisscom.ch',
  'swissluxury.com',
  'syf.com',
  'symbaloo.com',
  'symbianize.com',
  'systranet.com',
  'takewari.com',
  'taobao.com',
  'tatasky.com',
  'tdbank.com',
  'tdcanadatrust.com',
  'tdsecurities.com',
  'techmahindra.com',
  'telcel.com',
  'telegram.org',
  'telenor.in',
  'teletalk.com.bd',
  'telmex.com',
  'telus.com',
  'tenkofx.com',
  'tenor.co',
  'terra.com',
  'test-ipv6.com',
  'texas.gov',
  'thaiairways.com',
  'theadsteam.com',
  'thecse.com',
  'thefuncoolstuff.com',
  'thegioididong.com',
  'theladders.com',
  'thelazy.net',
  'thermofisher.com',
  'thesmartsearch.net',
  'tianyancha.com',
  'tikona.in',
  'timewarnercable.com',
  'tinypic.com',
  'tinyprints.com',
  'tiu.ru',
  'tnpsc.gov.in',
  'tnt.it',
  'topescortbabes.com',
  'toptal.com',
  'toptenreviews.com',
  'toronto.ca',
  'torrentkitty.tv',
  'toster.ru',
  'toutiao.com',
  'toyota.jp',
  'track-chinapost.com',
  'track-trace.com',
  'tradepub.com',
  'tradestation.com',
  'trakt.tv',
  'translate.ru',
  'travelchinaguide.com',
  'trimble.com',
  'trovit.fr',
  'trycaviar.com',
  'tuniu.com',
  'tunnelbear.com',
  'turkcell.com.tr',
  'turkiye.gov.tr',
  'turnitin.com',
  'tver.jp',
  'twomovies.net',
  'uaemex.mx',
  'ubs.com',
  'uefa.com',
  'ukessays.com',
  'ull.es',
  'ultimatix.net',
  'umb.edu',
  'unblockvideos.com',
  'unibytes.com',
  'unicredit.it',
  'unionbankofindia.co.in',
  'unitedhealthgroup.com',
  'universia.es',
  'uolhost.uol.com.br',
  'up-4ever.com',
  'upload.af',
  'uplod.ir',
  'ups-mi.net',
  'ups.com',
  'uptostream.com',
  'upwork.com',
  'urldelivery.com',
  'usaa.com',
  'uscis.gov',
  'usefixie.com',
  'usm.my',
  'usps.com',
  'usps.gov',
  'usvisa-info.com',
  'utiitsl.com',
  'uwm.edu',
  'va.gov',
  'vajehyab.com',
  'vajiramandravi.com',
  'verizon.com',
  'vic.gov.au',
  'videocond2h.com',
  'videotron.com',
  'vidtodo.com',
  'virginamerica.com',
  'virginaustralia.com',
  'virginia.edu',
  'virginmedia.com',
  'virustotal.com',
  'visahq.com',
  'vodacom.co.za',
  'vodafone.com.eg',
  'vodafone.in',
  'vogella.com',
  'voicenote.in',
  'voip-info.org',
  'volaris.com',
  'volkswagen.de',
  'vonage.com',
  'vpnbook.com',
  'vr.fi',
  'vub.sk',
  'walgreens.com',
  'wapa.tv',
  'warmane.com',
  'waseet.net',
  'waveapps.com',
  'wayport.net',
  'wbsedcl.in',
  'web.de',
  'webcrow.jp',
  'webmaster-gratuit.com',
  'webpagefx.com',
  'webroot.com',
  'webrootanywhere.com',
  'website-start.de',
  'websupport.sk',
  'webtoolhub.com',
  'webtoons.com',
  'wellsfargo.com',
  'wes.org',
  'westbengalssc.com',
  'westernunion.com',
  'westlaw.com',
  'wetransfer.com',
  'wework.com',
  'whatclinic.com',
  'whentowork.com',
  'which.co.uk',
  'wien.gv.at',
  'wifi.id',
  'wikibuy.com',
  'wiley.com',
  'wipro.com',
  'wirecard.com',
  'worksheetworks.com',
  'worldpay.com',
  'wpengine.com',
  'wtoip.com',
  'xe.com',
  'xfinity.com',
  'xiami.com',
  'xilinx.com',
  'xywy.com',
  'yandex.ru',
  'ybonline.co.uk',
  'yell.com',
  'yellowpages.ca',
  'yelp.ca',
  'yelp.com',
  'yes24.com',
  'yesbank.co.in',
  'yesbank.in',
  'yhouse.com',
  'yidio.com',
  'yindou.com',
  'yinyuetai.com',
  'yodel.co.uk',
  'youtube2mp3.cc',
  'youzik.com',
  'yr.no',
  'yungching.com.tw',
  'yves-rocher.fr',
  'zaba.hr',
  'zanox.com',
  'zapmeta.co.za',
  'zapto.org',
  'zendesk.com',
  'zenithbank.com',
  'zerodha.com',
  'zhaopin.com',
  'zi-m.com',
  'zipcar.com',
  'zippyshare.com',
  'zo.ee',
  'zoon.ru',
  'zoophilist.net',
  'zscalertwo.net',
  'ztedevice.com',
  'zzounds.com'
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
      description: 'exclude services'
    }
    cb(null, rule)
  }
}
