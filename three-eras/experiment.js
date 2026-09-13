(() => {
  'use strict';
  const $ = id => document.getElementById(id);
  const canonical = 'https://lowgame.github.io/three-eras/';
  const text = {
  "en": {
    "skip": "Skip to the photos",
    "eyebrow": "Nostalgia Camera · 1895 / 1972 / 2004",
    "title": "Same friends.<br><em>Another time.</em>",
    "intro": "A shared laugh. A slow afternoon. The nights you wish lasted longer. Keep the people, and see the moment through another era.",
    "small": "Three moments together. About a minute. No sign-up.",
    "byline": "Made by Ahmet, physicist & app developer ↘",
    "original": "See original",
    "looks": "Back to the looks",
    "hint": "Tap a photo to choose. On a small screen, swipe to compare all three.",
    "originalHint": "One original photograph, before the era effects. Return to compare 1895, 1972 and 2004.",
    "question": "How would you remember this day?",
    "choose": "Choose this look ↗",
    "selected": "Your pick ✓",
    "yourPick": "Your pick",
    "next": "Next scene →",
    "finish": "See my three choices →",
    "free": "This era and color profile are included for free.",
    "pro": "This era requires Nostalgia Camera Pro.",
    "resultEyebrow": "Your three choices",
    "favorite": "You kept coming back to ",
    "tie": "Three scenes. Three different moods.",
    "resultDescription": "Your favorite in this small set — a preference, not a personality test.",
    "tieDescription": "You chose a different era in each scene. The light and subject can change what feels right.",
    "store": "Try these looks in your own camera ↗",
    "download": "Save my photo card ↓",
    "share": "Share the experiment ↗",
    "price": "Nostalgia Camera for iPhone & iPad. The 1895 and 2004 looks shown here are free; 1972 requires Pro. Optional in-app purchases.",
    "restart": "Start again ↺",
    "methodEyebrow": "A note from the maker",
    "methodTitle": "The people stay.<br>The years change.",
    "maker": "I'm Ahmet, a physicist and the developer of Nostalgia Camera. I built this little experiment around moments worth keeping: laughing with a friend, a picnic, an evening that passes too quickly.",
    "method": "Each scene starts from one licensed photograph, with the same crop for all three versions. I processed it with the app's photo engine. These are software looks inspired by camera eras, not photographs taken in those years or on those cameras.",
    "limits": "These are prepared examples, not in-app camera captures. Your phone, light and each shot's variation will affect the result. 1895 uses Sepia Plate, 1972 uses Instant Warm, and 2004 uses Digital Cyan. All three use the same square crop.",
    "sources": "Photo credits & originals",
    "sourceNote": "Licensed photographs from Pexels, cropped and processed for this experiment. The people pictured are not app testimonials; no endorsement is implied.",
    "provenance": "Image sources and processing record ↗",
    "privacy": "Your choices stay in this page and disappear when you reload it. No account, photo upload or advertising tracker. GitHub Pages serves this site and may keep standard request logs.",
    "aboutApp": "About Nostalgia Camera ↗",
    "feedback": "Feedback & support ↗",
    "credit": "Source photo",
    "processing": "Processed with Nostalgia Camera",
    "ready": "Your photo card is ready to save.",
    "downloadError": "The card could not be created. Please try again after the photos load.",
    "copied": "Experiment link copied.",
    "manual": "You can copy the experiment link below.",
    "shareText": "Good days, through another era. 1895, 1972 or 2004 — which would you keep?",
    "saving": "Preparing your photo card…",
    "years": {
      "1895": "1895 · Glass plate",
      "1972": "1972 · Instant film",
      "2004": "2004 · Digicam"
    },
    "scenes": [
      "A SHARED LAUGH",
      "A SLOW AFTERNOON",
      "STAY A LITTLE LONGER"
    ],
    "notes": [
      "The 1895 look turns a shared laugh into a sepia keepsake. Compare it with the warm 1972 tones and the more pronounced 2004 contrast.",
      "A picnic becomes a keepsake. Notice how the skin tones, bright clothes and warm light change across the three looks.",
      "An evening with friends, held for a little longer. Compare the glow, the darker background and the texture in the faces."
    ]
  },
  "tr": {
    "skip": "Fotoğraflara geç",
    "eyebrow": "Nostalgia Camera · 1895 / 1972 / 2004",
    "title": "Aynı dostlar.<br><em>Başka bir zaman.</em>",
    "intro": "Birlikte gülmek. Uzayan bir öğleden sonra. Bitmesini istemediğin akşamlar. İnsanlar aynı kalsın; anı başka bir dönemden gör.",
    "small": "Birlikte geçen üç an. Yaklaşık bir dakika. Üyelik yok.",
    "byline": "Ahmet’ten: fizikçi ve uygulama geliştiricisi ↘",
    "original": "Orijinali gör",
    "looks": "Görünümlere dön",
    "hint": "Seçmek için fotoğrafa dokun. Küçük ekranda üçünü karşılaştırmak için yana kaydır.",
    "originalHint": "Dönem efektlerinden önce, tek bir orijinal fotoğraf. 1895, 1972 ve 2004’ü karşılaştırmak için geri dön.",
    "question": "Bu günü nasıl hatırlamak isterdin?",
    "choose": "Bunu seç ↗",
    "selected": "Seçimin ✓",
    "yourPick": "Seçimin",
    "next": "Sonraki sahne →",
    "finish": "Üç seçimimi gör →",
    "free": "Bu dönem ve renk profili ücretsiz.",
    "pro": "Bu dönem için Nostalgia Camera Pro gerekiyor.",
    "resultEyebrow": "Üç fotoğraf, senin seçimin",
    "favorite": "En çok seçtiğin dönem: ",
    "tie": "Üç sahne. Üç ayrı his.",
    "resultDescription": "Bu küçük sette en çok beğendiğin görünüm. Bir tercih; kişilik testi değil.",
    "tieDescription": "Her sahnede başka bir dönem seçtin. Işık ve konu değiştikçe sevdiğin görünüm de değişebilir.",
    "store": "Bu görünümleri kendi kameranda dene ↗",
    "download": "Fotoğraf kartımı kaydet ↓",
    "share": "Deneyi paylaş ↗",
    "price": "iPhone ve iPad için Nostalgia Camera. Buradaki 1895 ve 2004 görünümleri ücretsiz; 1972 için Pro gerekiyor. İsteğe bağlı uygulama içi satın alımlar.",
    "restart": "Yeniden dene ↺",
    "methodEyebrow": "Geliştiricisinden bir not",
    "methodTitle": "İnsanlar aynı.<br>Yıllar başka.",
    "maker": "Ben Ahmet. Fizikçiyim ve Nostalgia Camera’yı geliştiriyorum. Bu küçük deneyi saklamaya değer anlar etrafında kurdum: bir arkadaşla gülmek, bir piknik, çabuk geçen bir akşam.",
    "method": "Her sahne, kullanım izni olan tek bir fotoğrafla başlıyor. Üç sürümde de kadraj aynı. Görselleri uygulamanın fotoğraf motoruyla işledim. Bunlar kamera dönemlerinden esinlenen yazılım görünümleri; o yıllarda veya o kameralarla çekilmiş fotoğraflar değil.",
    "limits": "Bunlar önceden hazırlanmış örnekler; uygulama içinde yapılmış çekimler değil. Telefonun, ışık ve her çekimdeki değişimler sonucu etkiler. 1895’te Sepia Plate, 1972’de Instant Warm, 2004’te Digital Cyan kullanıldı. Üçü de aynı kare kadrajda.",
    "sources": "Fotoğraf kaynakları ve orijinaller",
    "sourceNote": "Pexels’ten lisanslı fotoğraflar, bu deney için kırpıldı ve işlendi. Görsellerdeki kişiler uygulama hakkında görüş bildirmiyor; bir işbirliği veya onay ima edilmiyor.",
    "provenance": "Görsel kaynakları ve işleme kaydı ↗",
    "privacy": "Seçimlerin bu sayfada kalır; sayfa yenilenince silinir. Hesap, fotoğraf yükleme veya reklam takibi yok. Siteyi sunan GitHub Pages standart erişim kayıtları tutabilir.",
    "aboutApp": "Nostalgia Camera hakkında ↗",
    "feedback": "Geri bildirim ve destek ↗",
    "credit": "Kaynak fotoğraf",
    "processing": "Nostalgia Camera ile işlendi",
    "ready": "Fotoğraf kartın kaydetmeye hazır.",
    "downloadError": "Kart oluşturulamadı. Fotoğraflar yüklendikten sonra tekrar dene.",
    "copied": "Deney bağlantısı kopyalandı.",
    "manual": "Aşağıdaki deney bağlantısını kopyalayabilirsin.",
    "shareText": "Güzel günler, başka bir devirden. 1895, 1972, 2004 — sen hangisini saklardın?",
    "saving": "Fotoğraf kartın hazırlanıyor…",
    "years": {
      "1895": "1895 · Cam plaka",
      "1972": "1972 · Anında film",
      "2004": "2004 · Dijital kompakt"
    },
    "scenes": [
      "BİRLİKTE GÜLMEK",
      "UZAYAN BİR ÖĞLEDEN SONRA",
      "BİRAZ DAHA KAL"
    ],
    "notes": [
      "1895 görünümü, birlikte gülmeyi sepya bir hatıraya dönüştürüyor. 1972’nin sıcak tonları ve 2004’ün belirgin kontrastıyla karşılaştır.",
      "Bir piknik, saklamak isteyeceğin bir hatıraya dönüşüyor. Üç görünümde ten tonlarına, açık renkli kıyafetlere ve sıcak ışığa bak.",
      "Arkadaşlarla geçen bir akşamı biraz daha tutmak. Işıkların parıltısını, karanlık arka planı ve yüzlerdeki dokuyu karşılaştır."
    ]
  }
};
  const scenes=[{"id":"laughter","author":"Gary Barnes","source":"https://www.pexels.com/photo/laughing-friends-spending-time-together-in-nature-6231770/"},{"id":"picnic","author":"Polina Tankilevitch","source":"https://www.pexels.com/photo/friends-doing-picnic-near-the-lake-7711676/"},{"id":"evening","author":"cottonbro studio","source":"https://www.pexels.com/photo/a-group-of-friends-sitting-on-a-picnic-blanket-while-having-conversation-10071281/"}];
  const years=[1895,1972,2004];
  const requestedLang=new URLSearchParams(location.search).get('lang');
  let lang=['en','tr'].includes(requestedLang)?requestedLang:(navigator.language?.startsWith('tr')?'tr':'en');
  let round=0,choices=[],original=false,complete=false,started=false;
  // Events are an integration boundary only. No collector, network request,
  // user identifier or aggregate count is installed in this pilot.
  function event(name){document.dispatchEvent(new CustomEvent('nostalgia:experiment',{detail:{name,experiment:'three-eras-v2'}}));}
  function order(){return years.map((_,i)=>years[(i+round)%3]);}
  function src(scene,year){return `photos-v2/${scene}-${year}.jpg`;}
  function render(){
    const t=text[lang];document.documentElement.lang=lang;
    document.querySelectorAll('[data-t]').forEach(el=>{const val=t[el.dataset.t];if(['title','methodTitle'].includes(el.dataset.t))el.innerHTML=val;else el.textContent=val;});
    $('language').textContent=lang==='en'?'TR':'EN';$('language').setAttribute('aria-label',lang==='en'?'Türkçe':'English');
    $('experiment').hidden=complete;$('result').hidden=!complete;
    if(complete){renderResult();return;}
    $('progress').textContent=`0${round+1} / 03 · ${t.scenes[round]}`;$('question').textContent=t.question;
    $('original').textContent=original?t.looks:t.original;$('original').setAttribute('aria-pressed',String(original));$('hint').textContent=original?t.originalHint:t.hint;
    const selected=choices[round];
    $('photos').hidden=original;$('original-preview').hidden=!original;
    $('original-photo').src=src(scenes[round].id,'original');$('original-photo').alt=t.original+' · '+t.scenes[round];
    $('original-caption').textContent=t.original+' · '+scenes[round].author;
    [...$('photos').children].forEach((button,i)=>{
      const year=order()[i];const chosen=selected===year;const label=t.years[year];
      button.disabled=original;button.setAttribute('aria-pressed',String(chosen));button.setAttribute('aria-label',`${label}: ${chosen?t.selected:t.choose}`);
      const image=button.querySelector('img');image.src=src(scenes[round].id,original?'original':year);image.alt=`${t.scenes[round]} · ${original?t.original:label}`;
      button.querySelector('b').textContent=original?t.original:label;button.querySelector('.caption span').textContent=original?'':chosen?t.selected:t.choose;
    });
    $('reveal').hidden=!selected;
    if(selected){$('chosen').textContent=t.years[selected];$('observation').textContent=t.notes[round];$('access').textContent=selected===1972?t.pro:t.free;$('next').textContent=round===2?t.finish:t.next;}
    $('scene-credit').replaceChildren(document.createTextNode(`${t.credit}: `));const a=document.createElement('a');a.href=scenes[round].source;a.textContent=scenes[round].author;$('scene-credit').append(a,document.createTextNode(' · Pexels'));
  }
  function renderResult(){
    const t=text[lang];const counts=years.map(y=>choices.filter(c=>c===y).length);const max=Math.max(...counts);const winners=years.filter((_,i)=>counts[i]===max);
    $('result-title').textContent=winners.length===1?t.favorite+winners[0]:t.tie;
    $('result-description').textContent=winners.length===1?t.resultDescription:t.tieDescription;
    $('result-photos').replaceChildren();
    choices.forEach((year,i)=>{const figure=document.createElement('figure');const image=document.createElement('img');image.src=src(scenes[i].id,year);image.width=1000;image.height=1000;image.alt=`${t.scenes[i]} · ${t.years[year]}`;const caption=document.createElement('figcaption');caption.textContent=t.years[year];figure.append(image,caption);$('result-photos').append(figure);});
  }
  [...$('photos').children].forEach((b,i)=>b.addEventListener('click',()=>{if(original||complete)return;if(!started){started=true;event('experiment_start');}choices[round]=order()[i];render();}));
  $('original').addEventListener('click',()=>{original=!original;render();});
  $('next').addEventListener('click',()=>{if(!choices[round])return;if(round===2){complete=true;event('experiment_complete');render();$('result-title').focus({preventScroll:true});$('result').scrollIntoView({block:'start'});}else{round++;original=false;render();$('photos').scrollLeft=0;$('question').focus({preventScroll:true});$('experiment').scrollIntoView({block:'start'});}});
  $('restart').addEventListener('click',()=>{round=0;choices=[];original=false;complete=false;started=false;$('status').textContent='';render();$('photos').scrollLeft=0;$('experiment').scrollIntoView({block:'start'});$('question').focus({preventScroll:true});});
  $('language').addEventListener('click',()=>{lang=lang==='en'?'tr':'en';$('status').textContent='';render();});
  document.querySelectorAll('.store').forEach(a=>a.addEventListener('click',()=>event('store_click')));
  $('share').addEventListener('click',async()=>{
    const t=text[lang];$('share-fallback').hidden=true;
    if(navigator.share){try{await navigator.share({title:'Same photo, three eras',text:t.shareText,url:canonical});return;}catch(e){if(e.name==='AbortError')return;}}
    try{await navigator.clipboard.writeText(canonical);$('status').textContent=t.copied;}catch{$('status').textContent=t.manual;$('share-fallback').hidden=false;}
  });
  $('download').addEventListener('click',async()=>{
    const t=text[lang];$('download').disabled=true;$('status').textContent=t.saving;
    try{
      const images=await Promise.all(choices.map((year,i)=>new Promise((resolve,reject)=>{const im=new Image();im.onload=()=>resolve(im);im.onerror=reject;im.src=src(scenes[i].id,year);})));
      const canvas=document.createElement('canvas');canvas.width=1200;canvas.height=900;const ctx=canvas.getContext('2d');ctx.fillStyle='#f5f3ec';ctx.fillRect(0,0,1200,1000);ctx.fillStyle='#20211e';ctx.font='20px -apple-system, sans-serif';ctx.fillText('NOSTALGIA CAMERA / A VISUAL EXPERIMENT',54,62);ctx.font='54px -apple-system, sans-serif';ctx.fillText(lang==='tr'?'Üç sahne. Benim seçimlerim.':'Three scenes. My choices.',54,145);
      images.forEach((im,i)=>{ctx.drawImage(im,54+i*372,205,348,348);ctx.font='bold 26px -apple-system, sans-serif';ctx.fillText(String(choices[i]),54+i*372,600);});
      ctx.font='22px -apple-system, sans-serif';ctx.fillText(t.processing,54,680);ctx.fillText('lowgame.github.io/three-eras',54,720);ctx.font='17px -apple-system, sans-serif';ctx.fillStyle='#64655d';ctx.fillText('Photos: Gary Barnes / Polina Tankilevitch / cottonbro studio · Pexels',54,790);ctx.fillText(lang==='tr'?'Kaynak fotoğraflar işlenmiştir; tarihî çekim değildir.':'Processed source photos; not historical camera captures.',54,825);
      const blob=await new Promise(resolve=>canvas.toBlob(resolve,'image/png'));if(!blob)throw new Error('no image');const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download='nostalgia-my-three-eras.png';document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),60000);event('result_export');$('status').textContent=t.ready;
    }catch{$('status').textContent=t.downloadError;}finally{$('download').disabled=false;}
  });
  render();
})();
