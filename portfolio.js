(() => {
  'use strict';
  const root = document.documentElement;
  const languageButton = document.querySelector('#language-toggle');
  const themeButton = document.querySelector('#theme-toggle');
  const nodes = [...document.querySelectorAll('[data-i18n]')];
  const english = Object.fromEntries(nodes.map(node => [node.dataset.i18n, node.innerHTML]));
  const turkish = {
    photoLabel:"Nostalgia Camera · Yeni deney",photoTitle:"Aynı fotoğraf. Üç zaman.",photoDescription:"Üç sahne, üç kamera görünümü. Saklamak istediğin fotoğrafları seç, dönemleri aç ve orijinallerle karşılaştır.",photoCta:"Bir dakikalık deneyi aç ↗",
    skip:'İçeriğe geç',navWork:'projeler',navExperiments:'deneyler',navAbout:'hakkımda',
    heroEyebrow:'Bağımsız yazılımlar ve merakla başlayan deneyler',physicist:'Fizikçi.',developer:'Yazılım geliştirici.',
    heroIntro:'Gündelik hayat için küçük araçlar yapıyor, dünyayı fizik ve kodla keşfediyorum.',exploreWork:'Projeleri keşfet',
    toolsMeta:'Native Swift. Açık kaynak. macOS 14+.',toolsTitle:'Olabildiğince sade.',
    toolsIntro:'Dört küçük uygulama, ortak bir yaklaşım: net tipografi, sakin arayüzler ve ihtiyacın olan şeyler.',
    dotoDescription:'Görevler, günlük alışkanlıklar ve bir not defteri. Sıradaki iş için menü çubuğunda küçük bir yer.',
    pomoDescription:'Odaklan, dinlen, tekrarla. Günün odak seanslarını gösteren sakin bir menü çubuğu zamanlayıcısı.',
    writoDescription:'Yazmak için biraz alan. Düz Markdown dosyaları, hızlı arama ve odaklı daktilo modu.',
    clippoDescription:'Kopyaladıkların elinin altında. Pano geçmişinde ara, ihtiyacın olanı yeniden kullan.',
    download:'İndir',source:'Kaynak kod',experimentLabel:'Bir deney',flyQuestion:'Bir sinek. Bir klavye.<br>Ya Shakespeare?',
    flyDescription:'Sonsuz maymun teoremine hesaplamalı bir yaklaşım. Simüle edilen meyve sinekleri hareket ediyor, klavyeye konuyor ve geride tuş vuruşları bırakıyor. Sinir devreleri, fizik ve rastlantı üzerine süren bir deney.',
    flyCta:'Deneyi izle',flyCaption:'Bir düşünce deneyine konacak bir yer.',labLabel:'Fizik ve kod',allRepositories:'Tüm public depolar',
    labTitle:'İçini açıp bakabileceğin fikirler.',labIntro:'Küçük modeller, görsel deneyler ve açık kod. Bir sorunun peşinden gitmenin birkaç yolu.',
    pendulumTitle:'Çift sarkaç',pendulumDescription:'Python ve Pygame ile klasik mekanik ve kaotik hareket üzerine bir simülasyon.',simulation:'Simülasyon',
    softBodyTitle:'Yumuşak cisim fiziği',softBodyDescription:'Parçacıklar ve yaylarla tarayıcıda çalışan bir fizik deneyi.',
    opticsTitle:'Kuantum optiği',opticsDescription:'SPDC’de foton çifti spektrumları ve kristal uzunluğu üzerine sayısal bir çalışma.',
    statisticsTitle:'İstatistiksel araştırmalar',statisticsDescription:'Bir fizik dersi projesinde fiyat serileri, korelasyonlar ve sayısal analiz.',
    lifeDescription:'Basit yerel kurallardan doğan örüntüler. Tarayıcıda çalışan bir hücresel otomat.',
    asciiDescription:'Animasyonlu ASCII sahneleri tasarla, kendi web sitende kullan.',openInBrowser:'Tarayıcıda aç',
    appGuides:'Uygulamalar ve rehberler',iphoneTitle:'Gündelik hayat için.',iphoneIntro:'App Store’da bulabileceğin diğer uygulamalarım.',
    tileDescription:'Küçük alışkanlıklar, günlük işaretlemeler ve ilerlemenin görsel kaydı.',
    nostalgiaDescription:'Gündelik anlar, başka bir kamera döneminin renkleri ve grenleriyle.',
    cartickDescription:'İkinci el araç görüşmeleri için notlar, fotoğraflar ve yönlendirmeli kontroller. Bağımsız ekspertize hazırlık.',exploreApp:'Uygulamayı keşfet',
    aboutLabel:'Biraz kendimden',aboutTitle:'Fizik, düşünme<br>biçimimin bir parçası.',
    aboutFirst:'Ben Ahmet, fizikçi ve yazılım geliştiriciyim. Hesaplamalı deneyler ve her gün kullanabileceğin araçlar üretiyorum.',
    aboutSecond:'Fizikte bir modelin nasıl davrandığını, yazılımda bir arayüzün nasıl hissettirdiğini önemsiyorum. İkisi de ayrıntılara dikkat etmekle başlıyor.',
    aboutThird:'Anlaşılacak kadar küçük, kullanılacak kadar faydalı ve öğrenilecek kadar açık şeyler yapmayı seviyorum.',readWriting:'Yazılarımı oku'
  };
  const stored = key => { try { return localStorage.getItem(key); } catch { return null; } };
  const remember = (key,value) => { try { localStorage.setItem(key,value); } catch { /* Preferences are optional. */ } };
  let language = stored('portfolio-language') === 'tr' ? 'tr' : 'en';
  let theme = stored('portfolio-theme') === 'light' ? 'light' : 'dark';
  function updateTheme() {
    root.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]').content = theme === 'dark' ? '#000000' : '#ffffff';
    themeButton.setAttribute('aria-label',language === 'tr' ? (theme === 'dark' ? 'Açık temaya geç' : 'Koyu temaya geç') : (theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'));
  }
  function updateLanguage() {
    root.lang = language;
    const dictionary = language === 'tr' ? turkish : english;
    nodes.forEach(node => { if (dictionary[node.dataset.i18n]) node.innerHTML = dictionary[node.dataset.i18n]; });
    languageButton.textContent = language === 'en' ? 'TR' : 'EN';
    languageButton.setAttribute('aria-label',language === 'en' ? 'Türkçe görüntüle' : 'View in English');
    document.querySelector('[data-nav]').setAttribute('aria-label',language === 'tr' ? 'Ana gezinme' : 'Main navigation');
    document.title = language === 'tr' ? 'Ahmet Kamer Çivi — Fizikçi ve Yazılım Geliştirici' : 'Ahmet Kamer Çivi — Physicist & Software Developer';
    updateTheme();
  }
  languageButton.addEventListener('click',() => { language = language === 'en' ? 'tr' : 'en';remember('portfolio-language',language);updateLanguage(); });
  themeButton.addEventListener('click',() => { theme = theme === 'dark' ? 'light' : 'dark';remember('portfolio-theme',theme);updateTheme(); });
  updateLanguage();
  document.querySelector('.preferences').hidden = false;
})();
