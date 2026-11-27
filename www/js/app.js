/* ---------- i18n: English and Swedish ---------- */
const T = {
 en:{dirShow:'Directions ({n})',left:'left',right:'right',dirFirst:'Head towards {lm}.',dirFromStairs:'From the stairs, head towards {lm}.',dirFromStairsPlain:'Leave the stairs and follow the line.',dirTurnAt:'After about {m} m, turn {s} at {lm}.',dirTurn:'After about {m} m, turn {s}.',dirEndSide:'After about {m} m, {r} is on your {s}.',dirEndAhead:'After about {m} m, {r} is straight ahead.',dirEnd:'After about {m} m you are at the orange pin.',dirStair:'After about {m} m you reach the stairs.',noteMgmt:'Division of Management Support takes two floors of T Block (floors 2 and 3). On floor 3: take the stairs in front of the library up; at the landing the sign points right to Ledningsstöd.',noteMgmt2:'Division of Management Support takes floors 2 and 3 of T Block. On floor 2 it is behind the glass door by Zeta, then a card-only door for staff.',office:'Office',noteStaffCard:'Entrance by Zeta: through the glass door into the small corridor (T2-050, Zeta), then a card-only door for staff at the end.',noteT1022:'On floor 1 in the corridor in front of the library, towards the stairs (position approximate).',appTitle:'MDU Navigator',appSub:'Västerås · Eskilstuna',tNext:'Schedule',tSearch:'Search',tMap:'Map',tPlaces:'Places',tBus:'Bus',
  vas:'Västerås',esk:'Eskilstuna',
  next:'Next session',now:'Happening now',later:'Coming up',updAgo:'Updated {t}',agoNow:'just now',agoMin:'{n} min ago',agoH:'{n} h ago',agoD:'{n} days ago',offline:'No internet. Showing your saved schedule from {t}.',syncFail:'KronoX didn’t answer. Your saved schedule is still here.',tryAgain:'Try again',noDay:'No classes this day 🎉',weekN:'Week {n}',pullRefresh:'Pull to update',releaseRefresh:'Release to update',refreshing:'Updating…',lastClass:'your last class',walkFrom:'{m} min walk from {r} · {g} min break',tight:'Tight',share:'Share',shareText:'Meet me at {r}',copied:'Link copied',recent:'Recent searches',courseRooms:'Rooms for {c}',didMean:'Did you mean',vib:'Vibrate on taps',onbHi:'Welcome to MDU Navigator',onbCampus:'Which campus do you study on?',both:'Both',onbNext:'Next',skip:'Skip',onbLater:'Later',onbSched:'Add your schedule',onbHome:'Keep it on your home screen',onbHomeD:'It opens like an app and works without internet.',done:'Done',gotIt:'Got it',onbLaterHint:'You can do this later from the Student tab.',onbLang:'Language',srRoute:'Route to {r}: {n} steps, about {m} min',floorN:'Floor {n}',prevWeek:'Previous week',nextWeek:'Next week',roomTba:'Room TBA',roomTbaLong:'No room booked yet in KronoX',progress:'How much of the session has passed',progDone:'{p}% done',laterSame:'Later the same day',goTo:'Take me to',online:'Online',deadline:'Deadline',nextDeadline:'Next deadline',
  notMapped:'This room isn’t on the map yet',example:'Example',yours:'Your schedule',
  myCourses:'My courses',addCourse:'Add a course',addHint:'Add each course you take. You can add as many as you like.',
  linkPh:'Paste a KronoX schedule link',addLink:'Add link',orFile:'or',uploadB:'Upload .ics files from KronoX',
  how1:'Open the course schedule in KronoX on the MDU website',how2:'Choose iCal and copy the link, or download the file',how3:'Add it here. Your schedules stay on this device only',
  remove:'Remove',sure:'Sure? Tap again',refreshAll:'Update all',fromLink:'Link',fromFile:'File',sessions:'{n} sessions',
  noMore:'No upcoming sessions in your schedules',exampleNote:'These are sample sessions so you can see how the app works. Add your own courses below.',
  today:'Today',tomorrow:'Tomorrow',inX:'in',min:'min',hr:'h',day:'d',endsIn:'ends in',
  qph:'Search: R2-142, A2-003, Omega, WC…',floor:'Floor',darkMode:'Dark mode',lightMode:'Light mode',showSteps:'Show the steps ({n})',showStepsA:'Show the steps',hideStepsA:'Hide the steps',route:'Route',mapOnly:'Map only',
  bR:'R Block',bU:'T/U Block',bE:'Main building',bX:'Exam hall',bRs:'R',bUs:'T/U',bEs:'A·B·C',bXs:'Exam hall',
  from:'From',change:'Change',tapHint:'Tap any room on the map, or find it in Search.',
  startAt:'Start at',takeUp:'go up',takeDown:'go down',toFloor:'to floor',walkTo:'Walk to',redMark:'marked with the orange pin on the map.',
  linkStep:'Take the connecting corridor to {b}, floor {f}',
  minsWalk:'About {n} min walk (estimate)',noRoute:'No route to this place yet. It is marked on the map: {p}.',otherCampus:'This room is in {c}. Check the Bus tab for the MDU bus.',
  pickStart:'Where are you now?',entrances:'Entrances',nearRoom:'I’m next to room…',tapMap:'Pick my spot on the map',tapMapHint:'Tap the room closest to you',
  setStart:'Set as my starting point',setStartHint:'New routes will start from this room instead of the entrance.',startSet:'Routes now start from {r}',indoorOnly:'Stay indoors',
  outStep:'Walk outside from “{from}” to “{to}” (about 1 min)',cancel:'Cancel',close:'Close',sameSpot:'You’re already there.',
  wc:'Toilets',food:'Food & café',quiet:'Quiet spaces',help:'Help & service',aed:'Defibrillators',halls:'Named halls',lib:'Library',entr:'Entrances',
  stairsBy:'the stairs by {r}',stSpiral:'the spiral stairs in the middle',stUA:'the north-west stairs',stUB:'the west stairs (middle)',stUC:'the south-west stairs',stUE:'the east stairs',stUT:'the stairs in front of the library (by U2-273)',stUL:'the stairs inside the University Library',stUTB:'the stairs inside T Block (north-west corner)',
  stEW:'the Västra länken stairwell',stEE:'the Östra länken stairwell',stEC:'the lifts by Studenttorget',stES:'the lift by the C building',
  ent_rw:'R Block main entrance (floor 1)',ent_rn:'R Block entrance by R1-121',ent_re:'R Block entrance by R1-452',ent_rs:'R Block entrance by R1-152',
  ent_uw:'U Block entrance (floor 1)',ent_un:'Entrance between T and U (north side)',ent_us:'Entrance between T and U (south side)',
  ent_em:'Main entrance, Hamngatan 15',ent_ew:'Entrance on Bruksgatan',ent_ee:'Entrance on Drottninggatan',
  loaded:'Added {n} sessions',updatedAll:'Schedules updated',badFile:'That file isn’t iCal. Download the schedule from KronoX as iCal (.ics) and try again.',
  dataNote:'Maps come from MDU’s public premises guides (Västerås Aug 2026, Eskilstuna Apr 2026). Routes are approximate, so follow the signs too.',
  none:'No results. Try a room code like R2-142 or A2-003.',exampleCourse:'Example course',
  linkFail:'Couldn’t load that link. Check the link and your internet connection.',
  a2hsTitle:'Add MDU Navigator to your Home Screen',a2hsIos:'Tap %SHARE% then “Add to Home Screen”. It opens like an app and works offline.',a2hsTip:'Add your courses from the Home Screen app. Courses added here in the browser don’t carry over.',a2hsAndroid:'Install it on your phone. It opens like an app and works offline.',a2hsInstall:'Install',a2hsMenu:'Open the browser menu ⋮ and choose “Add to Home screen” or “Install app”.',a2hsClose:'Not now',
  linkCanvas:'That’s a Canvas page. Open the schedule in KronoX (webbschema.mdu.se) and paste that link instead.',
  linkWeb:'The web version can’t load KronoX links directly. Download the .ics file instead, or use the app.',
  updated:'Updated {t}',otherLang:'Svenska',
  /* opening hours */
  hoursT:'Opening hours',openNow:'Open for students now',closedNow:'Closed for students now',openUntil:'until {t}',opensAt:'opens {d} {t}',
  hStudents:'Students (MDU card + PIN)',hWeekdays:'Mon–Fri',hWeekend:'Weekends & holidays',hComputer:'Computer rooms',hEveryDay:'every day',hPublic:'Public',hMonThu:'Mon–Thu',hFri:'Fri',
  /* bus */
  busT:'MDU bus',busImgAlt:'The blue MDU double-decker bus at Campus Eskilstuna',busFrom:'From {c}',busNext:'Next bus',busArr:'arrives {t}',busNone:'No more buses today',busNoService:'No bus today',busNextDay:'Next: {d} {t}',
  busToday:'Today’s departures',busStop:'Bus stop',openMap:'Open in Maps',
  busStopVas:'Vasagatan, just after the Solbergagatan junction, level with Arosvallen',busStopEsk:'Rademachergatan 26',
  busRules:'Free for MDU students, Monday–Friday during the academic year. Show your MDU card with your photo to the driver. No buses on public holidays. Wi‑Fi on board. Folding bikes are fine, e-bikes and e-scooters are not allowed.',
  busFor:'Coming from {from}? The last MDU bus that gets you to {c} in time leaves at {dep}.',
  busForNone:'Coming from {from}? No MDU bus that day gets you to {c} in time.',
  termOff:'Outside the semester',holiday:'Public holiday',weekend:'Weekend'
 },
 sv:{dirShow:'Vägbeskrivning ({n})',left:'vänster',right:'höger',dirFirst:'Gå mot {lm}.',dirFromStairs:'Från trappan, gå mot {lm}.',dirFromStairsPlain:'Gå från trappan och följ linjen.',dirTurnAt:'Efter cirka {m} m, sväng {s} vid {lm}.',dirTurn:'Efter cirka {m} m, sväng {s}.',dirEndSide:'Efter cirka {m} m ligger {r} på din {s} sida.',dirEndAhead:'Efter cirka {m} m ligger {r} rakt fram.',dirEnd:'Efter cirka {m} m är du vid den orange nålen.',dirStair:'Efter cirka {m} m kommer du till trappan.',noteMgmt:'Ledningsstöd har två plan i Hus T (plan 2 och 3). Plan 3: ta trappan framför biblioteket upp; vid trapplanet pekar skylten åt höger till Ledningsstöd.',noteMgmt2:'Ledningsstöd har plan 2 och 3 i Hus T. På plan 2 ligger det bakom glasdörren vid Zeta, sedan en kortdörr för personal.',office:'Kontor',noteStaffCard:'Ingång vid Zeta: genom glasdörren in i den lilla korridoren (T2-050, Zeta), sedan en kortdörr för personal längst in.',noteT1022:'På plan 1 i korridoren framför biblioteket, mot trappan (ungefärlig position).',appTitle:'MDU Navigator',appSub:'Västerås · Eskilstuna',tNext:'Schema',tSearch:'Sök',tMap:'Karta',tPlaces:'Platser',tBus:'Buss',
  vas:'Västerås',esk:'Eskilstuna',
  next:'Nästa pass',now:'Pågår nu',later:'Kommande',updAgo:'Uppdaterat {t}',agoNow:'nyss',agoMin:'för {n} min sedan',agoH:'för {n} h sedan',agoD:'för {n} dagar sedan',offline:'Inget internet. Visar ditt sparade schema från {t}.',syncFail:'KronoX svarade inte. Ditt sparade schema finns kvar.',tryAgain:'Försök igen',noDay:'Inga pass den här dagen 🎉',weekN:'Vecka {n}',pullRefresh:'Dra för att uppdatera',releaseRefresh:'Släpp för att uppdatera',refreshing:'Uppdaterar…',lastClass:'ditt förra pass',walkFrom:'{m} min promenad från {r} · {g} min rast',tight:'Tajt',share:'Dela',shareText:'Vi ses vid {r}',copied:'Länken kopierad',recent:'Senaste sökningar',courseRooms:'Salar för {c}',didMean:'Menade du',vib:'Vibrera vid tryck',onbHi:'Välkommen till MDU Navigator',onbCampus:'Vilket campus studerar du på?',both:'Båda',onbNext:'Nästa',skip:'Hoppa över',onbLater:'Senare',onbSched:'Lägg till ditt schema',onbHome:'Ha den på hemskärmen',onbHomeD:'Den öppnas som en app och fungerar utan internet.',done:'Klar',gotIt:'Uppfattat',onbLaterHint:'Du kan göra det senare under fliken Student.',onbLang:'Språk',srRoute:'Väg till {r}: {n} steg, cirka {m} min',floorN:'Plan {n}',prevWeek:'Förra veckan',nextWeek:'Nästa vecka',roomTba:'Sal ej klar',roomTbaLong:'Ingen sal bokad i KronoX än',progress:'Hur mycket av passet som har gått',progDone:'{p} % klart',laterSame:'Senare samma dag',goTo:'Visa vägen till',online:'Online',deadline:'Inlämning',nextDeadline:'Nästa inlämning',
  notMapped:'Salen finns inte på kartan än',example:'Exempel',yours:'Ditt schema',
  myCourses:'Mina kurser',addCourse:'Lägg till en kurs',addHint:'Lägg till varje kurs du läser. Du kan lägga till hur många du vill.',
  linkPh:'Klistra in en schemalänk från KronoX',addLink:'Lägg till länk',orFile:'eller',uploadB:'Ladda upp .ics-filer från KronoX',
  how1:'Öppna kursens schema i KronoX på MDU:s webbplats',how2:'Välj iCal och kopiera länken, eller ladda ner filen',how3:'Lägg till den här. Dina scheman sparas bara på den här enheten',
  remove:'Ta bort',sure:'Säker? Tryck igen',refreshAll:'Uppdatera alla',fromLink:'Länk',fromFile:'Fil',sessions:'{n} pass',
  noMore:'Inga kommande pass i dina scheman',exampleNote:'Det här är exempelpass så att du ser hur appen fungerar. Lägg till dina egna kurser nedan.',
  today:'Idag',tomorrow:'Imorgon',inX:'om',min:'min',hr:'tim',day:'d',endsIn:'slutar om',
  qph:'Sök: R2-142, A2-003, Omega, WC…',floor:'Plan',darkMode:'Mörkt läge',lightMode:'Ljust läge',showSteps:'Visa stegen ({n})',showStepsA:'Visa stegen',hideStepsA:'Dölj stegen',route:'Väg',mapOnly:'Bara karta',
  bR:'Hus R',bU:'Hus T/U',bE:'Huvudbyggnaden',bX:'Tentamenslokal',bRs:'R',bUs:'T/U',bEs:'A·B·C',bXs:'Tenta',
  from:'Från',change:'Ändra',tapHint:'Tryck på en sal på kartan, eller sök efter den under Sök.',
  startAt:'Börja vid',takeUp:'gå upp',takeDown:'gå ner',toFloor:'till plan',walkTo:'Gå till',redMark:'markerad med den orange nålen på kartan.',
  linkStep:'Ta förbindelsegången till {b}, plan {f}',
  minsWalk:'Cirka {n} min promenad (uppskattning)',noRoute:'Ingen vägbeskrivning hit än. Platsen är markerad på kartan: {p}.',otherCampus:'Salen ligger i {c}. Se fliken Buss för MDU-bussen.',
  pickStart:'Var är du nu?',entrances:'Entréer',nearRoom:'Jag står vid sal…',tapMap:'Välj min plats på kartan',tapMapHint:'Tryck på salen närmast dig',
  setStart:'Använd som startpunkt',setStartHint:'Nya vägar börjar från den här salen i stället för entrén.',startSet:'Vägarna börjar nu från {r}',indoorOnly:'Gå inomhus',
  outStep:'Gå utomhus från ”{from}” till ”{to}” (cirka 1 min)',cancel:'Avbryt',close:'Stäng',sameSpot:'Du är redan där.',
  wc:'Toaletter',food:'Mat och café',quiet:'Lugna platser',help:'Hjälp och service',aed:'Hjärtstartare',halls:'Salar med namn',lib:'Bibliotek',entr:'Entréer',
  stairsBy:'trappan vid {r}',stSpiral:'spiraltrappan i mitten',stUA:'trappan i nordväst',stUB:'västra trappan (mitten)',stUC:'trappan i sydväst',stUE:'östra trappan',stUT:'trappan framför biblioteket (vid U2-273)',stUL:'trappan inne i Universitetsbiblioteket',stUTB:'trappan inne i hus T (nordvästra hörnet)',
  stEW:'trapphuset Västra länken',stEE:'trapphuset Östra länken',stEC:'hissarna vid Studenttorget',stES:'hissen vid C-huset',
  ent_rw:'Hus R huvudentré (plan 1)',ent_rn:'Hus R entré vid R1-121',ent_re:'Hus R entré vid R1-452',ent_rs:'Hus R entré vid R1-152',
  ent_uw:'Hus U entré (plan 1)',ent_un:'Entrén mellan T och U (norra sidan)',ent_us:'Entrén mellan T och U (södra sidan)',
  ent_em:'Huvudentrén, Hamngatan 15',ent_ew:'Entrén på Bruksgatan',ent_ee:'Entrén på Drottninggatan',
  loaded:'{n} pass lades till',updatedAll:'Scheman uppdaterade',badFile:'Filen är inte en iCal-fil. Ladda ner schemat från KronoX som iCal (.ics) och försök igen.',
  dataNote:'Kartorna kommer från MDU:s offentliga lokalguider (Västerås aug 2026, Eskilstuna apr 2026). Vägarna är ungefärliga, så följ skyltarna också.',
  none:'Inga träffar. Prova en salskod som R2-142 eller A2-003.',exampleCourse:'Exempelkurs',
  linkFail:'Kunde inte hämta länken. Kontrollera länken och din internetanslutning.',
  a2hsTitle:'Lägg till MDU Navigator på hemskärmen',a2hsIos:'Tryck på %SHARE% och sedan ”Lägg till på hemskärmen”. Den öppnas som en app och fungerar offline.',a2hsTip:'Lägg till dina kurser i appen på hemskärmen. Kurser som lagts till här i webbläsaren följer inte med.',a2hsAndroid:'Installera den på telefonen. Den öppnas som en app och fungerar offline.',a2hsInstall:'Installera',a2hsMenu:'Öppna webbläsarens meny ⋮ och välj ”Lägg till på startskärmen” eller ”Installera app”.',a2hsClose:'Inte nu',
  linkCanvas:'Det är en Canvas-sida. Öppna schemat i KronoX (webbschema.mdu.se) och klistra in den länken i stället.',
  linkWeb:'Webbversionen kan inte hämta KronoX-länkar direkt. Ladda ner .ics-filen i stället, eller använd appen.',
  updated:'Uppdaterat {t}',otherLang:'English',
  hoursT:'Öppettider',openNow:'Öppet för studenter nu',closedNow:'Stängt för studenter nu',openUntil:'till {t}',opensAt:'öppnar {d} {t}',
  hStudents:'Studenter (MDU-kort + PIN)',hWeekdays:'Mån–fre',hWeekend:'Helger',hComputer:'Datorsalar',hEveryDay:'alla dagar',hPublic:'Allmänheten',hMonThu:'Mån–tor',hFri:'Fre',
  busT:'MDU-bussen',busImgAlt:'Den blå MDU-bussen, en dubbeldäckare, vid campus Eskilstuna',busFrom:'Från {c}',busNext:'Nästa buss',busArr:'framme {t}',busNone:'Inga fler bussar idag',busNoService:'Ingen buss idag',busNextDay:'Nästa: {d} {t}',
  busToday:'Dagens avgångar',busStop:'Hållplats',openMap:'Öppna i Kartor',
  busStopVas:'Vasagatan, strax efter korsningen med Solbergagatan, i höjd med Arosvallen',busStopEsk:'Rademachergatan 26',
  busRules:'Gratis för MDU-studenter måndag–fredag under läsåret. Visa ditt MDU-kort med foto för chauffören. Ingen trafik på helgdagar. Wi‑Fi ombord. Hopfällbara cyklar går bra, elcyklar och elsparkcyklar är inte tillåtna.',
  busFor:'Kommer du från {from}? Sista MDU-bussen som hinner fram till {c} går kl. {dep}.',
  busForNone:'Kommer du från {from}? Ingen MDU-buss den dagen hinner fram till {c}.',
  termOff:'Utanför terminen',holiday:'Helgdag',weekend:'Helg'
 }
};
/* names of non-room places */
const FACN={'Main entrance':['Main entrance','Huvudentré'],'Restaurang':['Restaurant','Restaurang'],'Student pantry':['Student pantry','Studentpentry'],
 'Defibrillator':['Defibrillator','Hjärtstartare'],'University Library':['University Library','Universitetsbiblioteket'],'Silent reading room':['Silent reading room','Tyst läsesal'],
 'Stilla rum':['Quiet room','Stilla rum'],'Calm room':['Calm room','Stilla rum'],'Student Health':['Student Health','Studenthälsan'],'Student Health Service':['Student Health Service','Studenthälsan'],
 'Rest room':['Rest room','Vilrum'],'Student Centre':['Student Centre','Studenttorget'],'Lunch area':['Lunch area','Lunchplats'],'Reading area':['Reading area','Läsplatser'],
 'Mälartorget':['Mälartorget','Mälartorget'],'Idélab':['Idélab','Idélab'],'Division of Education Support':['Division of Education Support','Utbildningsstöd'],'Communication Unit':['Communication Unit','Kommunikationsenheten'],'Division of Management Support':['Division of Management Support','Ledningsstöd'],'Board room':['Board room','Styrelserum']};
const dn=r=>r.kind==='wc'?'WC':(FACN[r.id]?FACN[r.id][lang==='sv'?1:0]:r.id);

let lang='en';
const t=(k,v={})=>(T[lang][k]??T.en[k]??k).replace(/\{(\w+)\}/g,(_,x)=>v[x]??'');
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const store={get(k){try{return JSON.parse(localStorage.getItem(k))}catch(e){return null}},set(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}};
const DATA=window.MDU_DATA;

/* ---------- campuses & buildings ---------- */
const CAMPUS={vas:{blds:['R','U']},esk:{blds:['E','X']}};
const BUILD={R:{floors:['R1','R2','R3'],campus:'vas'},U:{floors:['U1','U2','U3'],campus:'vas'},E:{floors:['E1','E2','E3','E4'],campus:'esk'},X:{floors:['X1','X2'],campus:'esk'}};
const bLabel=b=>t('b'+b), bShort=b=>t('b'+b+'s');

/* ---------- rooms index ---------- */
const ROOMS=[];
for(const fk of Object.keys(DATA)){
  for(const r of DATA[fk].rooms){
    const b=fk[0];
    ROOMS.push({...r,fk,b,campus:BUILD[b].campus,floor:+fk.slice(1),key:r.id+'@'+fk+'@'+r.x});
  }
}
const norm=s=>String(s).toUpperCase().replace(/\s+/g,'');
const BYCODE=new Map(), BYKEY=new Map(ROOMS.map(r=>[r.key,r]));
for(const r of ROOMS){ if(!r.kind && !BYCODE.has(norm(r.id))) BYCODE.set(norm(r.id),r); }
function bName(r){
  if(r.b==='E') return /^[ABC]\d-/.test(r.id)?r.id[0]:bShort('E');
  if(r.b==='U') return /^T\d-/.test(r.id)||r.hus==='T'?'T':'U';
  return bShort(r.b);
}
const placeLabel=r=>`${t(r.campus)} · ${r.b==='X'?bLabel('X'):bName(r)} · ${t('floor')} ${r.floor}`;

/* ---------- routing graph ---------- */
const POS=new Map(), ADJ=new Map(), EDGES={}, TRANS=new Map();
const dist=(a,b)=>Math.hypot(a.x-b.x,a.y-b.y);
function addNode(id,fk,x,y){POS.set(id,{fk,x,y});if(!ADJ.has(id))ADJ.set(id,[]);}
function addEdge(a,b,w){w=w??dist(POS.get(a),POS.get(b));ADJ.get(a).push([b,w]);ADJ.get(b).push([a,w]);}
for(const fk of Object.keys(DATA)){
  const g=DATA[fk].graph; if(!g) continue; EDGES[fk]=[];
  for(const [k,[x,y]] of Object.entries(g.nodes)) addNode(fk+':'+k,fk,x,y);
  for(const [a,b] of g.edges){addEdge(fk+':'+a,fk+':'+b);EDGES[fk].push([fk+':'+a,fk+':'+b]);}
}
const ROUTABLE=new Set(Object.keys(EDGES).map(k=>k[0]));
function vlink(floors,ids,w=32){for(const id of ids)for(let i=0;i+1<floors.length;i++){const a=floors[i]+':'+id,b=floors[i+1]+':'+id;if(POS.has(a)&&POS.has(b))addEdge(a,b,w);}}
vlink(['R1','R2','R3'],['stN','stC','stS']);
vlink(['U1','U2','U3'],['stA','stB','stC','stE']);
vlink(['U1','U2','U3'],['stT']); // stairs by U2-273 in front of the library: floors 1-2 (U/T) and up to T3 (landing by the lift) (comes out by the Zeta corridor)
vlink(['U1','U2','U3'],['stTB']); // T Block's own stairwell (north-west corner) — the only way to T Block floor 3
vlink(['E1','E2','E3','E4'],['stW','stE','stC','stS']);
addEdge('U2:linkR','R3:ent_u',45); TRANS.set('U2:linkR|R3:ent_u','link');TRANS.set('R3:ent_u|U2:linkR','link');
/* outdoor shortcut on the ground floor: R Block entrance by R1-121 <-> entrance between T and U (south side) */
addEdge('R1:ent_n','U1:entS',110); TRANS.set('R1:ent_n|U1:entS','out');TRANS.set('U1:entS|R1:ent_n','out');
const ENT_LABEL={'R1:ent_n':'ent_rn','U1:entS':'ent_us'};
let AVOID_OUT=!!store.get('mdu.indoor');

function project(p,a,b){const dx=b.x-a.x,dy=b.y-a.y,L=dx*dx+dy*dy;let u=L?((p.x-a.x)*dx+(p.y-a.y)*dy)/L:0;u=Math.max(0,Math.min(1,u));return{x:a.x+u*dx,y:a.y+u*dy};}
const ATT=new Map();
function canRoute(r){return r&&!r.unknown&&!r.noroute&&!!EDGES[r.fk];}
function attach(r){
  if(!canRoute(r)) return null;
  if(ATT.has(r.key)) return ATT.get(r.key);
  // dp = the room's door opening (pre-computed from the floor plan): the route walks the corridor and turns in
  // through the door, instead of cutting through a wall straight to the room label
  // dpath = walking path from the corridor through the room's door to the label (pre-computed from the plan)
  const DP=r.dpath&&r.dpath.length>1?r.dpath:null;
  const P=DP?{x:DP[0][0],y:DP[0][1]}:r.dp?{x:r.dp[0],y:r.dp[1]}:r;
  const id='room:'+r.key; addNode(id,r.fk,DP?r.x:P.x,DP?r.y:P.y);
  if(r.door){addEdge(id,r.fk+':'+r.door);}
  else{
    let best=null;
    const isSt=k=>/^st/.test(k.split(':')[1]);
    let cand=EDGES[r.fk].filter(([a,b])=>!isSt(a)&&!isSt(b)); if(!cand.length) cand=EDGES[r.fk];
    for(const [a,b] of cand){const q=project(P,POS.get(a),POS.get(b));const d=dist(q,P);if(!best||d<best.d)best={d,q,a,b};}
    const pid='proj:'+r.key; addNode(pid,r.fk,best.q.x,best.q.y);
    addEdge(pid,best.a);addEdge(pid,best.b);
    let prev=pid;
    if(DP){for(let i=1;i<DP.length-1;i++){const nid='dp:'+r.key+':'+i;addNode(nid,r.fk,DP[i][0],DP[i][1]);addEdge(prev,nid);prev=nid;}}
    addEdge(id,prev);
  }
  ATT.set(r.key,id);return id;
}
function dijkstra(src,dst){
  const D=new Map([[src,0]]),P=new Map(),done=new Set();
  while(true){
    let u=null,du=Infinity;
    for(const [k,v] of D) if(!done.has(k)&&v<du){u=k;du=v;}
    if(u===null) return null;
    if(u===dst) break;
    done.add(u);
    for(const [v,w] of ADJ.get(u)){if(AVOID_OUT&&TRANS.get(u+'|'+v)==='out')continue;const nd=du+w;if(nd<(D.get(v)??Infinity)){D.set(v,nd);P.set(v,u);}}
  }
  const path=[dst];while(path[0]!==src)path.unshift(P.get(path[0]));
  return path;
}
const STAIR_REF={R1:{stN:'R1-302',stS:'R1-502'},R2:{stN:'R2-302',stS:'R2-502'},R3:{stN:'R3-122',stS:'R3-143'},
  U1:{stA:'U1-046',stB:'Gamma',stC:'Alfa',stE:'U1-124'},U2:{stA:'U2-032',stB:'Ypsilon',stC:'U2-012',stE:'U2-074'},U3:{stA:'U3-083',stC:'U3-024'}};
function stairName(fk,id){
  const ref=(STAIR_REF[fk]||{})[id]; if(ref) return t('stairsBy',{r:`<span class="code">${esc(ref)}</span>`});
  if(fk[0]==='R'&&id==='stC') return t('stSpiral');
  if(fk[0]==='U') return t({stA:'stUA',stB:'stUB',stC:'stUC',stE:'stUE',stT:'stUT',stL:'stUL',stTB:'stUTB'}[id]||'stUB');
  if(fk[0]==='E') return t({stW:'stEW',stE:'stEE',stC:'stEC',stS:'stES'}[id]||'stEC');
  return id;
}
const ENTR={vas:[['R1:ent_w','ent_rw'],['R1:ent_n','ent_rn'],['R1:ent_e','ent_re'],['R1:ent_s','ent_rs'],['U1:entW','ent_uw'],['U1:entN','ent_un'],['U1:entS','ent_us']],
            esk:[['E1:entMain','ent_em'],['E1:entW','ent_ew'],['E1:entE','ent_ee']]};
const DEFAULT_START={R:{type:'node',id:'R1:ent_w',label:'ent_rw'},U:{type:'node',id:'U1:entW',label:'ent_uw'},E:{type:'node',id:'E1:entMain',label:'ent_em'}};

/* ---------- iCal ---------- */
function unfold(txt){return txt.replace(/\r\n/g,'\n').replace(/\n[ \t]/g,'');}
function tzOffsetMin(date,tz){
  const f=new Intl.DateTimeFormat('en-US',{timeZone:tz,hourCycle:'h23',year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit'});
  const p=Object.fromEntries(f.formatToParts(date).map(x=>[x.type,x.value]));
  return (Date.UTC(+p.year,p.month-1,+p.day,+p.hour,+p.minute,+p.second)-date.getTime())/60000;
}
function parseDT(val,params){
  const m=val.match(/^(\d{4})(\d{2})(\d{2})(?:T(\d{2})(\d{2})(\d{2})?(Z)?)?$/);if(!m)return null;
  const [_,Y,Mo,Dd,h='0',mi='0',s='0',Z]=m;
  const utc=Date.UTC(+Y,Mo-1,+Dd,+h,+mi,+s);
  if(Z) return new Date(utc);
  const tz=(params.match(/TZID=([^;:]+)/)||[])[1]||'Europe/Stockholm';
  let d=new Date(utc);d=new Date(utc-tzOffsetMin(d,tz)*60000);return d;
}
const ENT={'&amp;':'&','&lt;':'<','&gt;':'>','&quot;':'"','&#39;':"'",'&apos;':"'"};
const decode=s=>s.replace(/&(amp|lt|gt|quot|apos|#39);/g,m=>ENT[m]);
function parseICS(txt){
  if(!/BEGIN:VCALENDAR/.test(txt)) return null;
  const ev=[];let cur=null;
  for(const line of unfold(txt).split('\n')){
    const L=line.replace(/\r$/,'');
    if(L==='BEGIN:VEVENT'){cur={};continue;}
    if(L==='END:VEVENT'){if(cur&&cur.start)ev.push(cur);cur=null;continue;}
    if(!cur) continue;
    const i=L.indexOf(':');if(i<0)continue;
    const head=L.slice(0,i),val=decode(L.slice(i+1).replace(/\\,/g,',').replace(/\\n/gi,' ').replace(/\\;/g,';'));
    const name=head.split(';')[0];
    if(name==='DTSTART') cur.start=parseDT(val,head);
    else if(name==='DTEND') cur.end=parseDT(val,head);
    else if(name==='SUMMARY') cur.summary=val;
    else if(name==='LOCATION') cur.location=val;
    else if(name==='UID') cur.uid=val;
  }
  return ev.filter(e=>e.start).map(e=>{
    const start=e.start.getTime(),end=(e.end||e.start).getTime();
    return {uid:e.uid||'',start,end,location:e.location||'',deadline:end-start<=2*60000,...splitSummary(e.summary||'')};
  });
}
/* KronoX writes the summary in Swedish (Kurs.grp / Moment / Aktivitetstyp) or English (Coursegrp / Description / Activity type) */
function splitSummary(s){
  const KEYS='Kurs\\.grp:|Coursegrp:|Sign:|Moment:|Description:|Aktivitetstyp:|Activity type:';
  const grab=k=>{const m=s.match(new RegExp('(?:'+k+')\\s*(.*?)(?=\\s+(?:'+KEYS+')|$)'));return m?m[1].trim():'';};
  let course=grab('Kurs\\.grp:|Coursegrp:'), moment=grab('Moment:|Description:');
  let campus=null; const cm=course.match(/\s+(Västerås|Eskilstuna)$/i);
  if(cm){campus=/eskil/i.test(cm[1])?'esk':'vas';course=course.slice(0,cm.index).trim();}
  return {course:course||s.trim(),moment,campus};
}
function parseLoc(loc){
  if(!loc||!loc.trim()) return {type:'none',rooms:[]};
  if(/canvas|zoom|teams|online|distans/i.test(loc)) return {type:'online',label:loc.trim(),rooms:[]};
  // KronoX writes "Saknas - bevakas …" when no room has been booked yet
  if(/^\s*saknas/i.test(loc)) return {type:'tba',rooms:[]};
  const rooms=[];
  for(const tok of loc.split(/[,;\/]/).map(s=>s.trim()).filter(Boolean)){
    const m=tok.match(/\b([ABCRTU]\d-\d{3})\b/i);
    const key=m?norm(m[1]):norm(tok);
    rooms.push(BYCODE.get(key)||{id:m?m[1].toUpperCase():tok,unknown:true});
  }
  return {type:'rooms',rooms};
}
function eventCampus(e){const L=parseLoc(e.location);const r=L.rooms.find(x=>!x.unknown);return r?r.campus:e.campus;}
function demoEvents(){
  const base=new Date();const day=(n,h,m)=>{const d=new Date(base);d.setDate(d.getDate()+n);d.setHours(h,m,0,0);return d.getTime();};
  const mk=(n,h,m,dur,loc,mom,c)=>({uid:'demo'+n+h,start:day(n,h,m),end:day(n,h,m)+dur*60000,location:loc,course:t('exampleCourse'),moment:mom,campus:c,sid:'demo',color:0,deadline:dur<=1});
  return [mk(0,Math.min(base.getHours()+1,21),15,105,'R2-142','Lecture','vas'),mk(1,13,15,165,'U2-016','Seminar 1','vas'),mk(2,23,58,1,'Canvas','Assignment 1','vas'),mk(3,9,15,165,'A2-003','Guest lecture','esk'),mk(4,13,15,105,'Omega','Lecture','vas'),mk(6,10,15,120,'C1-007','Workshop','esk')];
}

/* ---------- schedules (several courses) ---------- */
const COLORS=['#ff4900','#2563c9','#1f8a5b','#8a3fd1','#c2185b','#00838f','#a86b00','#5d4037'];
let SCHEDS=store.get('mdu.scheds');
if(!Array.isArray(SCHEDS)){ // migrate the single schedule from v0.1
  const old=store.get('mdu.sched');SCHEDS=[];
  if(old&&old.events) SCHEDS.push({id:'s'+Date.now(),name:mainCourse(old.events),color:0,source:old.source==='link'?'link':'file',url:store.get('mdu.icsurl')||'',events:old.events,fetched:old.fetched||Date.now()});
  store.set('mdu.scheds',SCHEDS);
}
const saveScheds=()=>store.set('mdu.scheds',SCHEDS);
function mainCourse(evs){const c={};for(const e of evs){if(e.course)c[e.course]=(c[e.course]||0)+1;}return Object.entries(c).sort((a,b)=>b[1]-a[1])[0]?.[0]||'KronoX';}
function nextColor(){const used=new Set(SCHEDS.map(s=>s.color));for(let i=0;i<COLORS.length;i++)if(!used.has(i))return i;return SCHEDS.length%COLORS.length;}
function addSchedule(events,source,url){
  const name=mainCourse(events);
  let s=SCHEDS.find(x=>(url&&x.url===url)||(!url&&x.source==='file'&&x.name===name));
  if(s){s.events=events;s.fetched=Date.now();s.name=name;}
  else{s={id:'s'+Date.now()+Math.random().toString(36).slice(2,6),name,color:nextColor(),source,url:url||'',events,fetched:Date.now()};SCHEDS.push(s);}
  saveScheds();return s;
}
function allEvents(){
  if(!SCHEDS.length) return demoEvents();
  const seen=new Set(),out=[];
  for(const s of SCHEDS) for(const e of s.events){
    const k=e.uid||(e.start+'|'+e.location+'|'+e.moment);
    if(seen.has(k))continue;seen.add(k);out.push({...e,sid:s.id,color:s.color});
  }
  return out.sort((a,b)=>a.start-b.start);
}
const IS_NATIVE=!!(window.Capacitor&&window.Capacitor.isNativePlatform&&window.Capacitor.isNativePlatform());
const httpsify=u=>u.trim().replace(/^webcal:\/\//i,'https://').replace(/^http:\/\//i,'https://');
/* Accept the normal KronoX schedule page link too: Schema.jsp (web view) -> SchemaICAL.ics (same courses, calendar format). */
function kronoxICS(u){
  u=httpsify(u);
  if(/(^|\/\/)(canvas|lms)\.mdu\.se/i.test(u)){const e=new Error('canvas');e.canvas=true;throw e;}
  return u.replace(/\/setup\/jsp\/Schema(HTML|XML)?\.jsp/i,'/setup/jsp/SchemaICAL.ics');
}
/* Web only: browsers block reading KronoX directly, so the web version goes through our small Cloudflare relay. */
const ICS_PROXY='https://mdu-kronox.maimoha-hess94.workers.dev/';
async function fetchICS(url){const u=kronoxICS(url);
  const viaProxy=!IS_NATIVE&&ICS_PROXY.startsWith('https://')&&/^https:\/\/webbschema\.mdu\.se\//i.test(u);
  const r=await fetch(viaProxy?ICS_PROXY.replace(/\/$/,'')+'/?url='+encodeURIComponent(u):u,{cache:'no-store'});const ev=r.ok?parseICS(await r.text()):null;if(!ev)throw new Error('bad');return ev;}
async function addLink(url,quiet){
  try{const ev=await fetchICS(url);addSchedule(ev,'link',kronoxICS(url));if(!quiet)toast(t('loaded',{n:ev.length}));renderNext();return true;}
  catch(e){if(!quiet)toast(e.canvas?t('linkCanvas'):IS_NATIVE?t('linkFail'):t('linkWeb'));return false;}
}
var SYNC_FAIL=false;
async function refreshAll(quiet){
  const links=SCHEDS.filter(s=>s.source==='link'&&s.url);if(!links.length)return;
  let ok=0;for(const s of links){try{s.events=await fetchICS(s.url);s.fetched=Date.now();ok++;}catch(e){}}
  SYNC_FAIL=!ok;saveScheds();renderNext();if(!quiet)toast(ok?t('updatedAll'):(IS_NATIVE?t('linkFail'):t('linkWeb')));
}

/* ---------- time helpers (Europe/Stockholm) ---------- */
const TZ='Europe/Stockholm';
const loc=()=>lang==='sv'?'sv-SE':'en-GB';
const dayKey=d=>new Intl.DateTimeFormat('en-CA',{timeZone:TZ}).format(d);
function sthParts(d){const p=Object.fromEntries(new Intl.DateTimeFormat('en-GB',{timeZone:TZ,hourCycle:'h23',year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',weekday:'short'}).formatToParts(d).map(x=>[x.type,x.value]));
  return {y:+p.year,m:+p.month,d:+p.day,h:+p.hour,min:+p.minute,wd:['Mon','Tue','Wed','Thu','Fri','Sat','Sun'].indexOf(p.weekday)};}
function sthDate(y,m,d,h=0,min=0){const u=Date.UTC(y,m-1,d,h,min);return new Date(u-tzOffsetMin(new Date(u),TZ)*60000);}
function fmtDay(ms){
  const d=new Date(ms),now=new Date(),tm=new Date(Date.now()+864e5);
  if(dayKey(d)===dayKey(now))return t('today');
  if(dayKey(d)===dayKey(tm))return t('tomorrow');
  return new Intl.DateTimeFormat(loc(),{timeZone:TZ,weekday:'long',day:'numeric',month:'short'}).format(d);
}
const fmtTime=ms=>new Intl.DateTimeFormat(loc(),{timeZone:TZ,hour:'2-digit',minute:'2-digit',hourCycle:'h23'}).format(new Date(ms));
function agoText(ms){const m=Math.round((Date.now()-ms)/60000);if(m<1)return t('agoNow');if(m<60)return t('agoMin',{n:m});const h=Math.round(m/60);if(h<48)return t('agoH',{n:h});return t('agoD',{n:Math.round(h/24)});}
function isoWeek(d){const x=new Date(Date.UTC(d.getFullYear(),d.getMonth(),d.getDate()));const n=x.getUTCDay()||7;x.setUTCDate(x.getUTCDate()+4-n);const y=new Date(Date.UTC(x.getUTCFullYear(),0,1));return Math.ceil(((x-y)/864e5+1)/7);}
function fmtRel(ms){
  let m=Math.round((ms-Date.now())/60000);
  if(m<60) return `${Math.max(m,0)} ${t('min')}`;
  const h=Math.round(m/60);if(h<48) return `${h} ${t('hr')}`;
  return `${Math.round(h/24)} ${t('day')}`;
}
/* Swedish public holidays (plus Midsummer Eve, Christmas Eve and New Year's Eve, when campus traffic stops too) */
function easter(y){const a=y%19,b=Math.floor(y/100),c=y%100,d=Math.floor(b/4),e=b%4,f=Math.floor((b+8)/25),g=Math.floor((b-f+1)/3),h=(19*a+b-d-g+15)%30,i=Math.floor(c/4),k=c%4,l=(32+2*e+2*i-h-k)%7,m=Math.floor((a+11*h+22*l)/451),mo=Math.floor((h+l-7*m+114)/31),da=((h+l-7*m+114)%31)+1;return [mo,da];}
function holidays(y){
  const H=new Set(),add=(m,d)=>H.add(`${m}-${d}`);
  add(1,1);add(1,6);add(5,1);add(6,6);add(12,24);add(12,25);add(12,26);add(12,31);
  const [em,ed]=easter(y);const E=Date.UTC(y,em-1,ed);
  for(const off of [-2,1,39]){const d=new Date(E+off*864e5);add(d.getUTCMonth()+1,d.getUTCDate());}
  for(let d=19;d<=25;d++){if(new Date(Date.UTC(y,5,d)).getUTCDay()===5)add(6,d);}
  return H;
}
const isHoliday=p=>holidays(p.y).has(`${p.m}-${p.d}`);
const TERMS=[['2026-08-31','2027-01-17'],['2027-01-18','2027-06-06'],['2027-08-30','2028-01-16'],['2028-01-17','2028-06-04']];
const inTerm=p=>{const k=`${p.y}-${String(p.m).padStart(2,'0')}-${String(p.d).padStart(2,'0')}`;return TERMS.some(([a,b])=>k>=a&&k<=b);};

/* ---------- MDU bus ---------- */
const BUS={vas:['06:00','06:50','08:00','09:15','10:15','11:15','12:15','13:15','14:15','15:15','16:15','17:15','18:15'],
           esk:['06:50','08:00','09:15','10:15','11:15','12:15','13:15','14:15','15:15','16:15','17:15','18:15']};
const BUS_MIN=40;
const STOP={vas:{q:'Vasagatan Solbergagatan Västerås'},esk:{q:'Rademachergatan 26 Eskilstuna'}};
function busDay(p){if(p.wd>=5)return 'weekend';if(isHoliday(p))return 'holiday';if(!inTerm(p))return 'term';return null;}
function departures(from,dateMs){const p=sthParts(new Date(dateMs));if(busDay(p))return [];
  return BUS[from].map(s=>{const [h,m]=s.split(':').map(Number);const dep=sthDate(p.y,p.m,p.d,h,m).getTime();return {dep,arr:dep+BUS_MIN*60000};});}
function nextBus(from){
  for(let i=0;i<21;i++){const day=Date.now()+i*864e5;const list=departures(from,day).filter(x=>x.dep>Date.now());if(list.length)return list[0];}
  return null;
}

/* ---------- opening hours ---------- */
function studentHours(p){return p.wd>=5||isHoliday(p)?[6*60+30,22*60]:[5*60+30,22*60];}
function openState(){
  const now=new Date(),p=sthParts(now),[o,c]=studentHours(p),cur=p.h*60+p.min;
  if(cur>=o&&cur<c)return {open:true,until:`${String(c/60|0).padStart(2,'0')}:00`};
  let q=p,dMs=now.getTime();if(cur>=c){dMs+=864e5;q=sthParts(new Date(dMs));}
  const [o2]=studentHours(q);return {open:false,day:cur>=c?t('tomorrow').toLowerCase():t('today').toLowerCase(),at:`${String(o2/60|0).padStart(2,'0')}:${String(o2%60).padStart(2,'0')}`};
}

/* ---------- Student tab: links, help, safety, campus info (from mdu.se, November 2026) ---------- */
Object.assign(T.en,{tInfo:'Student',
  emT:'Emergency',em112:'Call 112',emCrisis:'MDU crisis line',emNote:'For life-threatening incidents, threats, accidents or burglaries, always call SOS Alarm 112 first. Then call MDU’s crisis line.',
  violT:'Violent incident: run, hide, call 112',viol:['Run if you can, and get to safety. Don’t wait for people who won’t come, and leave your things.','If you can’t run, hide: lock and barricade the door, cover windows, stay away from doors and windows, put your phone on silent and stay quiet.','Call 112 when it is safe: say where you are, what happened, where the attacker is and what weapons they have.'],
  fireT:'Fire',fire:['Rescue anyone in immediate danger and press the fire alarm button if the alarm hasn’t gone off.','Call 112, even if the alarm has gone off, then MDU’s crisis line, and say where the fire is.','When the alarm sounds, leave by the nearest escape route and go to an assembly point. Follow the evacuation leaders in high-vis vests marked Utrymningsledare.'],
  bleedT:'Heavy bleeding',bleed:['Make sure you and the injured person are safe, and call 112 or ask someone else to.','Find the bleeding and press hard on the wound with straight arms, using a T-shirt or scarf. Lean in with your body weight.','Keep pressing until the paramedics tell you to stop. Ask someone to press on top of your hands if you get tired.'],
  aedT:'Defibrillators',aedNote:'Anyone may use a defibrillator. It talks you through every step and only gives a shock when needed.',
  aedVas:['Main entrance of the U building (the Link)','U building floor 2, main corridor between rooms 013 and 016','Main entrance of the R building','Finnslätten premises (student and staff area)'],
  aedEsk:['Floor 1 at Studenttorget (Student Centre)','Floor 4, opposite the lifts in the C building'],
  toolsT:'Study tools',tLadok:'Ladok',tLadokD:'Register for courses and exams, see your results',tKronox:'KronoX',tKronoxD:'Schedules and group room booking',tCanvas:'Canvas',tCanvasD:'Courses, assignments and messages',tPortal:'Student Portal, email and other IT tools',tPortalD:'MDU’s page with direct links to all study tools',
  tCanvasApp:'Canvas Student app',tCanvasAppD:'Google Play',tLib:'University Library',tLibD:'Search, borrow and renew',tStudent:'Student pages on mdu.se',tStudentD:'Everything about your studies',
  helpT:'Help and reporting',tHelpdesk:'IT Helpdesk',tStudCentre:'Studenttorget (Student Centre)',tStudCentreD:'Mon–Thu 08–16, Fri 08–15',
  faultT:'Report a fault in the premises',faultNote:'Email local service first. For urgent problems, call the caretaker on weekdays 08–16. Evenings, nights and weekends: call the property emergency line.',
  caretaker:'Caretaker',guard:'Security guard',propEm:'Property emergency (after hours)',castle:'Västerås Castle, urgent problems',
  ajoj:'Report an injury, accident or improvement idea (Aj, Oj, Halloj)',
  campusT:'Good to know on campus',
  groupT:'Group rooms',group:['Book in KronoX up to 7 days ahead, at most 2 sessions (4 hours) a day and 8 sessions (16 hours) in total.','If nobody uses a booked room 15 minutes into the time, anyone may use it (not for rooms booked for teaching).','Cancel if you won’t use the room, and leave it clean.'],
  kitchT:'Student kitchens',kitchVas:'On the entrance floor of the U building and of the R building.',kitchEsk:'On floors 1 and 3.',
  quietT:'Quiet room',quietVas:'R building, floor 2. Open to everyone at all times; it can’t be booked.',quietEsk:'Room B3-007, floor 3. Open to everyone at all times; it can’t be booked.',
  restT:'Rest room',restVas:'T1-063, floor 1. Borrow the key or card at Studenttorget for up to 2 hours; bring ID.',restEsk:'A4-062, floor 4. Borrow the key or card at Studenttorget for up to 2 hours; bring ID.',
  lockT:'Lockers',lockVas:'Borrow for up to 12 hours, by U2-039 and by R1-302. Lock them only with your MDU card.',lockEsk:'Borrow for up to 12 hours, on floor 3 by A3-009. Lock them only with your MDU card.',
  libT:'Library hours',libHours:'Students: every day 07–22 with MDU card and PIN. Public: Mon–Thu 08–19, Fri 08–16.',
  foodT:'Restaurants and cafés',parkT:'Parking',parkVas:'Pay with Mobill, E-park or Aimo Park depending on the car park. Students get a reduced rate with a parking permit from Studenttorget.',parkEsk:'No parking just for MDU students. See the municipality’s map of car parks and fees.',
  tAdm:'University Admissions',tAdmD:'Apply for courses and programmes at MDU and other Swedish universities',
  cardT:'Lost your MDU card?',card:['Report the loss at Studenttorget. They block the old card so you can order a new one.','Blocking costs SEK 100, paid on site at Studenttorget, and you must show valid ID. It is free if you bring a police report about the loss.','60 minutes after the card is blocked, order a new card yourself (link below). Use a colour photo taken from the front, with both eyes visible and a light background.','Collect the new card at the campus you chose. Bring valid ID; digital ID is not accepted.'],cardOrder:'Order a new MDU card',cardInfo:'The MDU card on mdu.se',
  showMap:'Show on map',call:'Call',email:'Email',web:'Open'});
Object.assign(T.sv,{tInfo:'Student',
  emT:'Nödläge',em112:'Ring 112',emCrisis:'MDU:s krisnummer',emNote:'Vid livshotande händelser, hot, olyckor eller inbrott ringer du alltid SOS Alarm 112 först. Ring sedan MDU:s krisnummer.',
  violT:'Våldsamt angrepp: fly, sök skydd, larma 112',viol:['Fly om du kan och ta dig i säkerhet. Vänta inte på dem som inte vill följa med, och lämna dina saker.','Om du inte kan fly, göm dig: lås och barrikadera dörren, täck fönster, håll dig borta från dörrar och fönster, stäng av ljudet på telefonen och var tyst.','Ring 112 när det är säkert: säg var du är, vad som hänt, var gärningspersonen är och vilka vapen hen har.'],
  fireT:'Brand',fire:['Rädda den som är i omedelbar fara och tryck på brandlarmsknappen om larmet inte gått.','Ring 112, även om larmet har gått, och sedan MDU:s krisnummer, och berätta var det brinner.','När larmet går: lämna lokalen via närmaste utrymningsväg och gå till en återsamlingsplats. Följ utrymningsledarna i västar märkta Utrymningsledare.'],
  bleedT:'Kraftig blödning',bleed:['Se till att du och den skadade är i säkerhet, och ring 112 eller be någon annan ringa.','Leta upp blödningen och tryck hårt på såret med raka armar, gärna med en t-shirt eller halsduk. Luta dig in med kroppsvikten.','Fortsätt trycka tills ambulanspersonalen säger att du kan släppa. Be någon trycka ovanpå dina händer om du blir trött.'],
  aedT:'Hjärtstartare',aedNote:'Alla får använda en hjärtstartare. Den talar om vad du ska göra och ger bara en stöt när det behövs.',
  aedVas:['Huvudentrén i U-huset (Länken)','U-huset plan 2, huvudkorridoren mellan sal 013 och 016','Huvudentrén i R-huset','Lokalerna på Finnslätten (student- och medarbetarytan)'],
  aedEsk:['Plan 1 vid Studenttorget','Plan 4, mittemot hissarna i C-huset'],
  toolsT:'Studieverktyg',tLadok:'Ladok',tLadokD:'Registrera dig på kurser och tentor, se dina resultat',tKronox:'KronoX',tKronoxD:'Scheman och bokning av grupprum',tCanvas:'Canvas',tCanvasD:'Kurser, inlämningar och meddelanden',tPortal:'Studentportalen, mejl och andra IT-verktyg',tPortalD:'MDU:s sida med direktlänkar till alla studieverktyg',
  tCanvasApp:'Appen Canvas Student',tCanvasAppD:'Google Play',tLib:'Universitetsbiblioteket',tLibD:'Sök, låna och låna om',tStudent:'Studentsidorna på mdu.se',tStudentD:'Allt om dina studier',
  helpT:'Hjälp och felanmälan',tHelpdesk:'IT-helpdesk',tStudCentre:'Studenttorget',tStudCentreD:'Mån–tor 08–16, fre 08–15',
  faultT:'Felanmäl lokaler',faultNote:'Mejla lokalservice i första hand. Vid akuta problem: ring vaktmästaren vardagar 08–16. Kvällar, nätter och helger: ring fastighetsjouren.',
  caretaker:'Vaktmästare',guard:'Väktare',propEm:'Fastighetsjour (utanför kontorstid)',castle:'Västerås slott, akuta problem',
  ajoj:'Anmäl skada, olycka eller förbättringsförslag (Aj, Oj, Halloj)',
  campusT:'Bra att veta på campus',
  groupT:'Grupprum',group:['Boka i KronoX upp till 7 dagar framåt, max 2 pass (4 timmar) per dag och totalt 8 pass (16 timmar).','Används rummet inte 15 minuter in på den bokade tiden får andra använda det (gäller inte rum bokade för undervisning).','Avboka om du inte ska använda rummet, och lämna det rent och snyggt.'],
  kitchT:'Studentpentryn',kitchVas:'På entréplan i U-huset och i R-huset.',kitchEsk:'På plan 1 och 3.',
  quietT:'Stilla rummet',quietVas:'Hus R, plan 2. Öppet för alla hela dagen; kan inte bokas.',quietEsk:'Sal B3-007, plan 3. Öppet för alla hela dagen; kan inte bokas.',
  restT:'Vilrum',restVas:'T1-063, plan 1. Låna nyckel eller passerkort på Studenttorget i upp till 2 timmar; ta med legitimation.',restEsk:'A4-062, plan 4. Låna nyckel eller passerkort på Studenttorget i upp till 2 timmar; ta med legitimation.',
  lockT:'Låsbara skåp',lockVas:'Lånas i upp till 12 timmar, vid U2-039 och vid R1-302. Lås bara med ditt MDU-kort.',lockEsk:'Lånas i upp till 12 timmar, på plan 3 vid A3-009. Lås bara med ditt MDU-kort.',
  libT:'Bibliotekets öppettider',libHours:'Studenter: alla dagar 07–22 med MDU-kort och PIN. Allmänheten: mån–tor 08–19, fre 08–16.',
  foodT:'Restauranger och kaféer',parkT:'Parkering',parkVas:'Betala med Mobill, E-park eller Aimo Park beroende på parkering. Studenter betalar reducerat pris med parkeringstillstånd från Studenttorget.',parkEsk:'Det finns ingen parkering just för MDU-studenter. Se kommunens karta över parkeringar och avgifter.',
  tAdm:'Antagning.se',tAdmD:'Sök kurser och program på MDU och andra svenska lärosäten',
  cardT:'Tappat ditt MDU-kort?',card:['Anmäl förlusten på Studenttorget. De spärrar det gamla kortet så att du kan beställa ett nytt.','Spärren kostar 100 kronor, som betalas på plats på Studenttorget, och du måste visa giltig legitimation. Den är gratis om du har en polisanmälan om förlusten.','60 minuter efter att kortet spärrats beställer du själv ett nytt kort (länk nedan). Använd ett färgfoto taget rakt framifrån, med båda ögonen synliga och ljus bakgrund.','Hämta det nya kortet på det campus du valt. Ta med giltig legitimation; digitalt ID godkänns inte.'],cardOrder:'Beställ ett nytt MDU-kort',cardInfo:'MDU-kortet på mdu.se',
  showMap:'Visa på kartan',call:'Ring',email:'Mejla',web:'Öppna'});

const LINKS={canvas:'https://lms.mdu.se/',adm:{en:'https://www.universityadmissions.se/',sv:'https://www.antagning.se/'},cardOrder:'https://portal.mdu.se/kortbestallning/',cardInfo:{en:'https://www.mdu.se/en/malardalen-university/student/during-your-studies/campus-and-premises/the-mdu-card',sv:'https://www.mdu.se/student/under-studietiden/campus-och-lokaler/mdu-kortet'},ladok:'https://www.student.ladok.se/',kronox:'https://webbschema.mdu.se/',
  it:'https://www.mdu.se/en/malardalen-university/student/practical-things-about-studying/it-for-you-as-a-student',
  canvasApp:'https://play.google.com/store/apps/details?id=com.instructure.candroid',
  lib:'https://www.mdu.se/en/malardalen-university/the-university-library',student:'https://www.mdu.se/en/malardalen-university/student',
  ajoj:'https://www.mdu.se/student/under-studietiden/campus-och-lokaler/anmal-olyckor-eller-ge-forbattringsforslag-pa-studiemiljon',
  rosenhill:'https://www.hors.se/vasteras/17/2/restaurang-rosenhill/',prego:'https://www.hors.se/vasteras/17/3/prego-origo/',verket:'https://www.hors.se/eskilstuna/17/2/verket/',
  parkEsk:'https://www.eskilstuna.se/trafik-och-gator/parkering'};
const PHONES={vas:{caretaker:'021-10 15 05',guard:'021-10 70 40'},esk:{caretaker:'016-15 37 70',guard:'016-15 32 40'},prop:'0771-90 80 00',castle:'018-56 48 28',crisis:'073-960 88 22',helpdesk:'016-15 51 50',studc:'021-10 13 10'};
const tel=n=>'tel:'+n.replace(/[^\d+]/g,'');
/* Link rows: a small tile in each site's colour (letter or icon) instead of an arrow; the whole row opens the link.
   Web links show a small "opens outside the app" icon at the end. */
const SVGI={
  phone:'<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/>',
  mail:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
  book:'<path d="M2 5h6a4 4 0 0 1 4 4v11a3 3 0 0 0-3-3H2z"/><path d="M22 5h-6a4 4 0 0 0-4 4v11a3 3 0 0 1 3-3h7z"/>',
  card:'<rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="8.5" cy="11" r="2"/><path d="M6 16c.6-1.4 1.6-2 2.5-2s1.9.6 2.5 2M14 10h4M14 13h3"/>',
  link:'<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/>',
  food:'<path d="M7 3v8M5 3v5a2 2 0 0 0 4 0V3M7 11v10M17 3c-2 0-3 3-3 6s1 4 3 4v8"/>',
  laptop:'<rect x="4" y="5" width="16" height="10" rx="1.5"/><path d="M2 19h20"/>',
  ext:'<path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/>',
  door:'<path d="M5 21V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v17M3 21h18"/><circle cx="15" cy="12" r="1"/>',
  info:'<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/>',
  moon:'<path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z"/>',
  heart:'<path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.5-7 10-7 10z"/><path d="M12.5 8.5 10.5 12h3l-2 3.5"/>',
  board:'<rect x="3" y="4" width="18" height="12" rx="1.5"/><path d="M8 20l4-4 4 4"/>',
  clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  wc:'<circle cx="8" cy="5" r="1.6"/><circle cx="16" cy="5" r="1.6"/><path d="M8 8v12M6 9h4v6H6zM16 8l-2.5 7h5zM16 15v5"/>'};
const svgi=(k,s=20)=>`<svg viewBox="0 0 24 24" width="${s}" height="${s}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${SVGI[k]}</svg>`;
const TILE={
  adm:{bg:'#ffffff',fg:'#111111',ch:'A',line:true},
  ladok:{bg:'#1b5e20',fg:'#fff',ch:'L'},
  kronox:{bg:'#0d3b78',fg:'#fff',ch:'K'},
  canvas:{bg:'#e4202d',fg:'#fff',ch:'C'},
  canvasApp:{bg:'#e4202d',fg:'#fff',ic:'laptop'},
  mdu:{bg:'#ff4900',fg:'#fff',ch:'M'},
  it:{bg:'#ff4900',fg:'#fff',ic:'laptop'},
  lib:{bg:'#ff4900',fg:'#fff',ic:'book'},
  card:{bg:'#ff4900',fg:'#fff',ic:'card'},
  phone:{bg:'#1f8a5b',fg:'#fff',ic:'phone'},
  mail:{bg:'#2563eb',fg:'#fff',ic:'mail'},
  food:{bg:'#8d6e63',fg:'#fff',ic:'food'},
  link:{bg:"var(--bg)",fg:"var(--ink)",ic:"link",line:true},
  entr:{bg:'#1f8a5b',fg:'#fff',ic:'door'},help:{bg:'#2563eb',fg:'#fff',ic:'info'},quiet:{bg:'#6d4bc4',fg:'#fff',ic:'moon'},
  wc:{bg:'#0e7490',fg:'#fff',ic:'wc'},aed:{bg:'#c62828',fg:'#fff',ic:'heart'},halls:{bg:'#0d3b78',fg:'#fff',ic:'board'},clock:{bg:'#ff4900',fg:'#fff',ic:'clock'}};
const PLACE_TILE={entr:'entr',help:'help',food:'food',lib:'lib',quiet:'quiet',wc:'wc',aed:'aed',halls:'halls'};
const tileHtml=k=>{const s=TILE[k]||TILE.link;return `<span class="ltile${s.line?' line':''}" style="background:${s.bg};color:${s.fg}" aria-hidden="true">${s.ic?svgi(s.ic):s.ch}</span>`;};
const ext=(href,title,desc,tile='link')=>{const web=/^https?:/.test(href);return `<a class="item link" href="${href}" ${web?'target="_blank" rel="noopener"':''}>${tileHtml(tile)}<span><span class="t">${esc(title)}</span>${desc?`<br><span class="s">${esc(desc)}</span>`:''}</span>${web?`<span class="lext" title="${esc(t('web'))}">${svgi('ext',18)}</span>`:`<span class="lact ${tile}">${svgi(tile,15)}${esc(tile==='phone'?t('call'):t('email'))}</span>`}</a>`;};
const phoneRow=(label,n)=>ext(tel(n),label,n,'phone');
const mailRow=(label,m)=>ext('mailto:'+m,label,m,'mail');
function mapBtn(code){const r=BYCODE.get(norm(code));return r?`<button class="ghost small" type="button" data-room="${esc(r.key)}">${t('showMap')}: <span class="code">${esc(code)}</span></button>`:'';}
const det=(title,body,open)=>`<details class="card fold"${open?' open':''}><summary>${esc(title)}</summary><div class="foldbody">${body}</div></details>`;
const ul=arr=>`<ul class="tight">${arr.map(x=>`<li>${esc(x)}</li>`).join('')}</ul>`;

function renderInfo(){
  const el=document.getElementById('v-info'),c=campus,V=c==='vas';
  el.innerHTML=`<div class="seg big" role="group">${['vas','esk'].map(k=>`<button type="button" data-c="${k}" aria-pressed="${k===c}">${t(k)}</button>`).join('')}</div>
  <div class="card emergency"><div class="eyebrow">${t('emT')}</div>
    <div class="embtns"><a class="emb e112" href="tel:112">${svgi('phone',22)}<span><b>112</b><small>${t('em112')}</small></span></a><a class="emb ecrisis" href="${tel(PHONES.crisis)}">${svgi('phone',20)}<span><b>${t('emCrisis')}</b><small class="code">${PHONES.crisis}</small></span></a></div>
    <p class="small muted" style="margin:10px 0 0">${t('emNote')}</p></div>
  ${det(t('violT'),ul(T[lang].viol))}
  ${det(t('fireT'),ul(T[lang].fire))}
  ${det(t('bleedT'),ul(T[lang].bleed))}
  ${det(t('aedT'),ul(V?T[lang].aedVas:T[lang].aedEsk)+`<p class="small muted">${t('aedNote')}</p>`)}
  <div class="card"><div class="eyebrow">${t('toolsT')}</div><div class="list">
    ${ext(LINKS.adm[lang],t('tAdm'),t('tAdmD'),'adm')}${ext(LINKS.ladok,t('tLadok'),t('tLadokD'),'ladok')}${ext(LINKS.kronox,t('tKronox'),t('tKronoxD'),'kronox')}${ext(LINKS.canvas,t('tCanvas'),t('tCanvasD'),'canvas')}${ext(LINKS.it,t('tPortal'),t('tPortalD'),'it')}
    ${ext(LINKS.canvasApp,t('tCanvasApp'),t('tCanvasAppD'),'canvasApp')}${ext(LINKS.lib,t('tLib'),t('tLibD'),'lib')}${ext(LINKS.student,t('tStudent'),t('tStudentD'),'mdu')}</div></div>
  ${det(t('cardT'),ul(T[lang].card)+`<div class="list">${ext(LINKS.cardOrder,t('cardOrder'),'portal.mdu.se','card')}${ext(LINKS.cardInfo[lang],t('cardInfo'),'','mdu')}${phoneRow(t('tStudCentre'),PHONES.studc)}${mailRow(t('tStudCentre'),'studenttorget@mdu.se')}</div>`)}
  <div class="card"><div class="eyebrow">${t('helpT')}</div><div class="list">
    ${phoneRow(t('tHelpdesk'),PHONES.helpdesk)}${mailRow(t('tHelpdesk'),'helpdesk@mdu.se')}
    ${phoneRow(t('tStudCentre')+' · '+t('tStudCentreD'),PHONES.studc)}${mailRow(t('tStudCentre'),'studenttorget@mdu.se')}
    ${ext(LINKS.ajoj,t('ajoj'),'')}</div></div>
  <div class="card"><div class="eyebrow">${t('faultT')}</div><p class="small muted" style="margin:6px 0 4px">${t('faultNote')}</p><div class="list">
    ${mailRow('Lokalservice','lokalservice@mdu.se')}${phoneRow(t('caretaker'),PHONES[c].caretaker)}${phoneRow(t('guard'),PHONES[c].guard)}${phoneRow(t('propEm'),PHONES.prop)}${V?phoneRow(t('castle'),PHONES.castle):''}</div></div>
  <div class="eyebrow">${t('campusT')}</div>
  ${det(t('groupT'),ul(T[lang].group)+`<a class="btn sec" href="${LINKS.kronox}" target="_blank" rel="noopener">KronoX ↗</a>`)}
  ${det(t('libT'),`<p class="small">${esc(t('libHours'))}</p>`)}
  ${det(t('kitchT'),`<p class="small">${esc(V?t('kitchVas'):t('kitchEsk'))}</p>`)}
  ${det(t('quietT'),`<p class="small">${esc(V?t('quietVas'):t('quietEsk'))}</p>${V?'':mapBtn('B3-007')}`)}
  ${det(t('restT'),`<p class="small">${esc(V?t('restVas'):t('restEsk'))}</p>`)}
  ${det(t('lockT'),`<p class="small">${esc(V?t('lockVas'):t('lockEsk'))}</p><div class="row wrap">${V?mapBtn('U2-039')+mapBtn('R1-302'):mapBtn('A3-009')}</div>`)}
  ${det(t('foodT'),`<div class="list">${V?ext(LINKS.rosenhill,'Restaurang Rosenhill','','food')+ext(LINKS.prego,'Prego Origo','','food'):ext(LINKS.verket,'Verket mat & kaffe','','food')}</div>`)}
  ${det(t('parkT'),`<p class="small">${esc(V?t('parkVas'):t('parkEsk'))}</p>${V?'':`<a class="btn sec" href="${LINKS.parkEsk}" target="_blank" rel="noopener">eskilstuna.se ↗</a>`}`)}
  ${(typeof a2hsAvailable==='function'&&a2hsAvailable())?`<button class="btn sec" type="button" id="a2hsOpen" style="width:100%;margin-top:12px">📲 ${esc(t('a2hsTitle'))}</button>`:''}
  ${IS_NATIVE?`<label class="chk" style="margin:4px 2px"><input type="checkbox" id="vibChk" ${store.get('mdu.vib')!==false?'checked':''}> ${t('vib')}</label>`:''}
  <p class="note">mdu.se · 2026</p>`;
  el.querySelectorAll('[data-c]').forEach(b=>b.onclick=()=>{setCampus(b.dataset.c);renderInfo();});
  const vc=el.querySelector('#vibChk');vc&&(vc.onchange=()=>{store.set('mdu.vib',vc.checked);if(vc.checked)buzz();});
  el.querySelectorAll('[data-room]').forEach(b=>b.onclick=()=>goRoom(BYKEY.get(b.dataset.room)));
  const ao=el.querySelector('#a2hsOpen');if(ao)ao.onclick=()=>showA2HS();
}

/* ---------- state ---------- */
let view=(location.hash||'').replace('#','')||'next';
if(!['next','search','map','places','bus','info'].includes(view))view='next';
let campus=store.get('mdu.campus')||'vas', bld=CAMPUS[campus].blds[0], floor=BUILD[bld].floors[0];
let target=null, start=store.get('mdu.start2')||null;
let route=null, tapMode=null, curStep=-1, busFrom=store.get('mdu.busfrom')||'vas';
/* light vibration on important taps (Android app only; can be turned off in the Student tab) */
function buzz(){try{if(IS_NATIVE&&store.get('mdu.vib')!==false&&navigator.vibrate)navigator.vibrate(12);}catch(e){}}
/* screen readers: read out short status changes (route found, day changed …) */
function say(m){const s=document.getElementById('sr');if(s){s.textContent='';setTimeout(()=>s.textContent=m,60);}}
const PUBLIC_URL='https://mohkhalifa90.github.io/mdu-navigator-v0.2/';
let selDay=null; // day picked in the week strip (YYYY-MM-DD); null = today
const roomCode=r=>`<span class="code">${esc(r.id)}</span>`;
const dot=c=>`<span class="cdot" style="background:${COLORS[c%COLORS.length]}"></span>`;

/* ---------- views ---------- */
function setView(v){
  view=v; try{history.replaceState(null,'','#'+v);}catch(e){}
  for(const s of document.querySelectorAll('.view')) s.classList.toggle('on',s.id==='v-'+v);
  for(const b of document.querySelectorAll('nav button')) b.setAttribute('aria-selected',b.dataset.v===v);
  if(v==='map'){renderMap();renderSheet();requestAnimationFrame(()=>{sizeMap();if(!vbInit)fitAll();})}
  if(v==='search') renderSearch();
  if(v==='bus') renderBus();
  if(v==='places') renderPlaces();
  if(v==='info') renderInfo();
}
document.querySelectorAll('nav button').forEach(b=>b.onclick=()=>setView(b.dataset.v));

/* ---------- Schedule ---------- */
function locBlock(e){
  const L=parseLoc(e.location);
  if(L.type==='online') return `<div class="roomchip"><span aria-hidden="true">💻</span><span>${t('online')} · ${esc(L.label)}</span></div>`;
  if(L.type==='none') return '';
  if(L.type==='tba') return `<div class="roomchip"><span aria-hidden="true">⏳</span><span>${t('roomTbaLong')}</span></div>`;
  return L.rooms.map(r=>r.unknown?`<div class="roomchip">${roomCode(r)}<span class="muted small">${t('notMapped')}</span></div>`:
    `<div class="row wrap"><div class="roomchip">${roomCode(r)}<span class="muted small">${placeLabel(r)}</span></div><button class="btn" type="button" data-go="${esc(r.key)}" style="flex:1;min-width:150px">${t('goTo')} <span class="code">${esc(r.id)}</span></button></div>`).join('');
}
function evRow(e,i){
  const L=parseLoc(e.location),r=L.rooms[0];
  const tag=e.deadline?`<span class="tag dl">${t('deadline')}</span>`:L.type==='online'?`<span class="tag">💻 ${esc(L.label)}</span>`:L.type==='tba'?`<span class="tag">⏳ ${t('roomTba')}</span>`:r?(r.unknown?`<span class="tag">${roomCode(r)}</span>`:`<span class="tag go cc">${roomCode(r)}</span><span class="gopill">${t('goTo')} ›</span>`):'';
  return `<button class="item ev" type="button" data-ev="${i}" style="--cc:${COLORS[e.color%COLORS.length]}"><span class="evtime"><b>${fmtTime(e.start)}</b>${e.deadline?'':`<span>${fmtTime(e.end)}</span>`}</span><span class="evbody"><span class="t">${esc(e.moment||e.course)}</span>${e.moment?`<span class="s">${esc(e.course)}</span>`:''}${tag?`<span class="evtag">${tag}</span>`:''}</span></button>`;
}
/* minutes to walk between two rooms (uses the normal route search, without touching what is on screen) */
function walkMins(a,b){
  if(!a||!b||a.campus!==b.campus||!canRoute(a)||!canRoute(b))return null;
  const sv=[target,start,route,curStep,AUTO_OK];
  target=b;start={type:'room',key:a.key};AUTO_OK=false;let m=null;
  try{computeRoute();m=route&&!route.same?route.mins:(route?0:null);}catch(x){}
  [target,start,route,curStep,AUTO_OK]=sv;return m;
}
const knownRoom=e=>{const L=parseLoc(e.location);return L.rooms.find(x=>!x.unknown)||null;};
function heroCard(e,i,now,prevSess){
  const live=e.start<=now,c=eventCampus(e);
  const label=live?t('now'):(i===0||prevSess&&prevSess.start<=now?t('next'):t('laterSame'));
  let walk='';
  if(!live&&prevSess){const a=knownRoom(prevSess),b=knownRoom(e);
    if(a&&b&&a.key!==b.key){const m=walkMins(a,b),g=Math.round((e.start-prevSess.end)/60000);
      if(m!=null&&g>=0&&g<=90)walk=`<div class="walkline ${m+3>g?'tight':''}">🚶 ${m+3>g?`<b>${t('tight')}!</b> `:''}${t('walkFrom',{m,r:esc(a.id),g})}</div>`;}}
  const pct=Math.round(100*(now-e.start)/(e.end-e.start));
  return `<article class="card next" style="border-top:4px solid ${COLORS[e.color%COLORS.length]}"><div class="row"><span class="eyebrow" style="flex:1">${label}</span>${live?`<span class="pill live">${t('endsIn')} ${fmtRel(e.end)}</span>`:`<span class="rel">${t('inX')} ${fmtRel(e.start)}</span>`}</div>
      <h2>${dot(e.color)}${esc(e.moment||e.course)}</h2><div class="muted small">${esc(e.moment?e.course:'')}${c?` · ${t(c)}`:''}</div>
      <div class="when" style="margin-top:8px">${fmtDay(e.start)} · <span class="code" style="font-weight:500">${fmtTime(e.start)}–${fmtTime(e.end)}</span></div>
      ${live?`<div class="prog" role="progressbar" aria-label="${t('progress')}" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${pct}"><span style="width:${Math.min(100,Math.max(2,pct))}%;background:${COLORS[e.color%COLORS.length]}"></span></div><div class="progl"><span>${fmtTime(e.start)}</span><span>${t('progDone',{p:pct})}</span><span>${fmtTime(e.end)}</span></div>`:''}
      ${walk}
      <div style="margin-top:12px;display:flex;flex-direction:column;gap:10px">${locBlock(e)}</div>
      ${i===0?busHint(e):''}</article>`;
}
function weekStrip(evs,today,sel){
  const d=new Date(sel+'T12:00:00'),wd=(d.getDay()+6)%7,mon=new Date(d);mon.setDate(d.getDate()-wd);
  const cols=new Map();for(const e of evs){if(e.deadline)continue;const k=dayKey(e.start);if(!cols.has(k))cols.set(k,[]);const L=cols.get(k);if(!L.includes(e.color))L.push(e.color);}
  let h=`<div class="week" role="group" aria-label="${t('weekN',{n:isoWeek(d)})}"><div class="wkhead"><button class="ghost wnav" type="button" data-wk="-7" aria-label="${t('prevWeek')}">‹</button><span>${t('weekN',{n:isoWeek(d)})}</span><button class="ghost wnav" type="button" data-wk="7" aria-label="${t('nextWeek')}">›</button></div><div class="wkdays">`;
  for(let k=0;k<7;k++){const x=new Date(mon);x.setDate(mon.getDate()+k);const key=dayKey(x.getTime());
    const n=evs.filter(e=>!e.deadline&&dayKey(e.start)===key).length;
    const lab=new Intl.DateTimeFormat(loc(),{weekday:'short'}).format(x).replace('.','');
    h+=`<button type="button" class="wd ${key===sel?'on':''} ${key===today?'today':''}" data-day="${key}" aria-pressed="${key===sel}" aria-label="${esc(fmtDay(x.getTime()))}, ${t('sessions',{n})}"><span>${esc(lab)}</span><b>${x.getDate()}</b><span class="wdots">${(cols.get(key)||[]).slice(0,3).map(c=>`<i style="background:${COLORS[c%COLORS.length]}"></i>`).join('')}</span></button>`;}
  return h+`</div></div>`;
}
var EVL=[];
function renderNext(){
  const el=document.getElementById('v-next');
  const now=Date.now(), all=allEvents(), evs=all.filter(e=>e.end>now);
  const today=dayKey(now); if(!selDay)selDay=today; const sel=selDay;
  const sessions=evs.filter(e=>!e.deadline), nextDl=evs.find(e=>e.deadline);
  const last=SCHEDS.length?Math.max(...SCHEDS.map(s=>s.fetched||0)):0;
  EVL=[];
  let h=`<div id="ptr" class="ptr" aria-hidden="true"><span>↓</span> <em>${t('pullRefresh')}</em></div>`;
  h+=`<div class="row"><span class="schedhead"><span class="pill ${SCHEDS.length?'':'warn'}">${t(SCHEDS.length?'yours':'example')}</span>${last?`<small class="upd">${t('updAgo',{t:agoText(last)})}</small>`:''}</span><span style="flex:1"></span>${SCHEDS.some(s=>s.source==='link')?`<button class="ghost" id="refAll" type="button">${t('refreshAll')}</button>`:''}</div>`;
  if(!navigator.onLine&&last) h+=`<div class="banner warn">📶 ${t('offline',{t:fmtTime(last)})}</div>`;
  else if(SYNC_FAIL) h+=`<div class="banner warn">⚠️ ${t('syncFail')} <button class="ghost" type="button" id="retry">${t('tryAgain')}</button></div>`;
  h+=weekStrip(all,today,sel);
  h+=`<div class="daybox" id="daybox">`;
  var featured=[];
  if(sel===today){
    if(!sessions.length){h+=`<div class="card muted">${t('noMore')}</div>`;}
    else{
      /* Every remaining session on the same day as the next one gets its own card, in its course colour */
      const d0=dayKey(sessions[0].start);
      featured=sessions.filter(x=>dayKey(x.start)===d0||x.start<=now);
      featured.forEach((e,i)=>{const prev=[...all].filter(x=>!x.deadline&&x.end<=e.start&&dayKey(x.start)===dayKey(e.start)).pop();h+=heroCard(e,i,now,prev);});
    }
    if(nextDl) h+=`<div class="card deadline row" style="border-left-color:${COLORS[nextDl.color%COLORS.length]}">${dot(nextDl.color)}<span style="flex:1"><span class="eyebrow">${t('nextDeadline')}</span><br><b>${esc(nextDl.moment||nextDl.course)}</b><br><span class="muted small">${esc(nextDl.course)}</span></span><span class="small" style="text-align:end"><b>${fmtDay(nextDl.start)}</b><br><span class="code">${fmtTime(nextDl.start)}</span></span></div>`;
  }else{
    const dl=all.filter(e=>dayKey(e.start)===sel);
    h+=`<div class="eyebrow">${fmtDay(new Date(sel+'T12:00:00').getTime())}</div>`;
    if(!dl.length)h+=`<div class="card empty">${t('noDay')}${SCHEDS.length?'':`<br><a href="#" id="toAdd">${t('addCourse')}</a>`}</div>`;
    else h+=`<div class="card list evlist">${dl.map(e=>{EVL.push(e);return evRow(e,EVL.length-1);}).join('')}</div>`;
  }
  h+=`</div>`;
  const feat=new Set(featured);
  const rest=evs.filter(e=>!feat.has(e)&&e!==nextDl).slice(0,10);
  if(rest.length){
    h+=`<div class="eyebrow">${t('later')}</div><div class="card list evlist">`;
    let lastDay='';
    rest.forEach(e=>{const dk=dayKey(e.start);if(dk!==lastDay){lastDay=dk;h+=`<div class="evday">${fmtDay(e.start)}</div>`;}EVL.push(e);h+=evRow(e,EVL.length-1);});
    h+=`</div>`;
  }
  // my courses
  h+=`<div class="card" id="myc"><div class="eyebrow">${t('myCourses')}</div>`;
  if(!SCHEDS.length) h+=`<p class="small muted" style="margin:6px 0 0">${t('exampleNote')}</p>`;
  else h+=`<div class="list" style="margin-top:4px">${SCHEDS.map(s=>`<div class="item course">${dot(s.color)}<span><span class="t">${esc(s.name)}</span><br><span class="s">${s.source==='link'?t('fromLink'):t('fromFile')} · ${t('sessions',{n:s.events.length})} · ${esc(t('updated',{t:fmtDay(s.fetched)+' '+fmtTime(s.fetched)}))}</span></span><button class="ghost" type="button" data-rm="${s.id}">${t('remove')}</button></div>`).join('')}</div>`;
  h+=`</div>
   <div class="card" id="addc"><div class="eyebrow">${t('addCourse')}</div><p class="small muted" style="margin:4px 0 0">${t('addHint')}</p>
    <label class="search" for="icsUrl" style="margin-top:10px"><input id="icsUrl" type="url" inputmode="url" autocomplete="off" placeholder="${t('linkPh')}" aria-label="${t('linkPh')}"></label>
    <button class="btn" type="button" id="icsAdd" style="width:100%;margin-top:8px">${t('addLink')}</button>
    <div class="muted small" style="text-align:center;margin:8px 0 2px">${t('orFile')}</div>
    <label class="btn sec file" style="width:100%">${t('uploadB')}<input type="file" id="icsFile" accept=".ics,text/calendar" multiple></label>
    <ol class="steps-how"><li>${t('how1')}</li><li>${t('how2')}</li><li>${t('how3')}</li></ol></div>
    <p class="note">${t('dataNote')}</p>`;
  el.innerHTML=h;
  el.querySelectorAll('[data-go]').forEach(b=>b.onclick=()=>{buzz();goRoom(BYKEY.get(b.dataset.go));});
  el.querySelectorAll('[data-ev]').forEach(b=>b.onclick=()=>{const r=knownRoom(EVL[+b.dataset.ev]);if(r){buzz();goRoom(r);}});
  el.querySelectorAll('[data-rm]').forEach(b=>b.onclick=()=>{if(!b.dataset.sure){b.dataset.sure=1;b.textContent=t('sure');return;}SCHEDS=SCHEDS.filter(s=>s.id!==b.dataset.rm);saveScheds();renderNext();});
  el.querySelectorAll('[data-day]').forEach(b=>b.onclick=()=>{selDay=b.dataset.day;renderNext();say(b.getAttribute('aria-label'));});
  el.querySelectorAll('[data-wk]').forEach(b=>b.onclick=()=>shiftDay(+b.dataset.wk));
  const f=el.querySelector('#icsFile');f.onchange=async()=>{let n=0,bad=0;for(const file of f.files){const ev=parseICS(await file.text());if(ev){addSchedule(ev,'file');n+=ev.length;}else bad++;}
    toast(bad&&!n?t('badFile'):t('loaded',{n}));if(n)buzz();renderNext();};
  el.querySelector('#icsAdd').onclick=async()=>{const u=el.querySelector('#icsUrl').value.trim();if(u&&await addLink(u,false))buzz();};
  const ra=el.querySelector('#refAll');ra&&(ra.onclick=()=>refreshAll(false));
  const rt=el.querySelector('#retry');rt&&(rt.onclick=()=>refreshAll(false));
  const ta=el.querySelector('#toAdd');ta&&(ta.onclick=ev=>{ev.preventDefault();el.querySelector('#addc').scrollIntoView({behavior:'smooth'});});
  // swipe left / right on the day to change day
  const db=el.querySelector('#daybox');let sx=null,sy=null;
  db.addEventListener('touchstart',ev=>{sx=ev.touches[0].clientX;sy=ev.touches[0].clientY;},{passive:true});
  db.addEventListener('touchend',ev=>{if(sx==null)return;const dx=ev.changedTouches[0].clientX-sx,dy=ev.changedTouches[0].clientY-sy;sx=null;if(Math.abs(dx)>70&&Math.abs(dx)>Math.abs(dy)*1.5)shiftDay(dx<0?1:-1);},{passive:true});
}
function shiftDay(n){const d=new Date((selDay||dayKey(Date.now()))+'T12:00:00');d.setDate(d.getDate()+n);selDay=dayKey(d.getTime());renderNext();say(fmtDay(d.getTime()));}
/* pull down at the top of the schedule to update from KronoX */
(()=>{const v=document.getElementById('v-next');let y0=null,pull=0;
  v.addEventListener('touchstart',e=>{y0=v.scrollTop<=0&&SCHEDS.some(s=>s.source==='link')?e.touches[0].clientY:null;pull=0;},{passive:true});
  v.addEventListener('touchmove',e=>{if(y0==null)return;pull=Math.max(0,e.touches[0].clientY-y0);const p=document.getElementById('ptr');if(!p)return;
    p.style.height=Math.min(60,pull/2)+'px';p.classList.toggle('ready',pull>110);p.querySelector('em').textContent=pull>110?t('releaseRefresh'):t('pullRefresh');},{passive:true});
  v.addEventListener('touchend',async()=>{if(y0==null)return;y0=null;const p=document.getElementById('ptr');
    if(pull>110&&p){p.querySelector('em').textContent=t('refreshing');p.classList.add('busy');buzz();await refreshAll(false);}
    else if(p){p.style.height='0px';}});
})();
function busHint(e){
  // only for sessions in a real room on campus (not Zoom, Canvas or a room that isn't booked yet)
  if(!knownRoom(e)) return '';
  const c=eventCampus(e); if(!c||e.start<=Date.now()) return '';
  const from=c==='vas'?'esk':'vas', deps=departures(from,e.start).filter(x=>x.arr<=e.start-10*60000);
  const v={s:esc(e.moment||e.course),t:fmtTime(e.start),c:t(c),from:t(from)};
  return `<p class="small muted" style="margin:12px 0 0">🚌 ${deps.length?t('busFor',{...v,dep:`<b>${fmtTime(deps[deps.length-1].dep)}</b>`}):t('busForNone',v)}</p>`;
}

/* ---------- Search ---------- */
const KINDS={wc:'wc',cafe:'food',food:'food',quiet:'quiet',help:'help',aed:'aed',lib:'lib',entr:'entr',office:'office'};
const kindName=r=>r.kind?t(KINDS[r.kind]||r.kind):'';
function itemRow(r){
  return `<button class="item" type="button" data-k="${esc(r.key)}"><span class="${r.kind||!/\d/.test(r.id)?'':'code'}" style="min-width:70px">${esc(dn(r))}</span><span class="s">${placeLabel(r)}</span><span class="tag ${canRoute(r)?'go':''}">${canRoute(r)?t('route'):t('mapOnly')}</span></button>`;
}
const bigr=s=>{s=norm(s);const o=new Set();for(let i=0;i<s.length-1;i++)o.add(s.slice(i,i+2));return o;};
const simil=(a,b)=>{const A=bigr(a),B=bigr(b);if(!A.size||!B.size)return 0;let n=0;for(const x of A)if(B.has(x))n++;return 2*n/(A.size+B.size);};
function courseRooms(){const m=new Map();for(const e of allEvents()){if(!SCHEDS.length)break;const r=knownRoom(e);if(!r)continue;if(!m.has(e.course))m.set(e.course,new Map());m.get(e.course).set(r.key,r);}return m;}
function renderSearch(){
  const q=document.getElementById('q');q.placeholder=t('qph');
  const raw=q.value.trim(),s=norm(raw);
  const res=document.getElementById('results');
  if(!s){
    const rec=(store.get('mdu.recent')||[]).map(k=>BYKEY.get(k)).filter(Boolean);
    let h='';
    if(rec.length)h+=`<div class="eyebrow" style="margin:4px 2px">${t('recent')}</div><div class="chips">${rec.map(r=>`<button class="chip" type="button" data-k="${esc(r.key)}">${esc(dn(r))}</button>`).join('')}</div>`;
    const list=ROOMS.filter(r=>r.campus===campus).sort((a,b)=>a.b.localeCompare(b.b)||a.floor-b.floor||a.id.localeCompare(b.id));
    res.innerHTML=h+list.slice(0,60).map(itemRow).join('');
  }else{
    let list=ROOMS.filter(r=>norm(r.id).includes(s)||norm(r.id).replace('-','').includes(s)||(r.kind&&(norm(kindName(r)).includes(s)||norm(dn(r)).includes(s)))||(FACN[r.id]&&FACN[r.id].some(n=>norm(n).includes(s))));
    list.sort((a,b)=>(a.campus===campus?0:1)-(b.campus===campus?0:1)||a.b.localeCompare(b.b)||a.floor-b.floor||a.id.localeCompare(b.id));
    let h='';
    // rooms used by a course you have added
    const cr=courseRooms();let best=null,bs=0;
    for(const [c,rooms] of cr){const sc=norm(c).includes(s)?1:simil(raw,c.slice(0,Math.max(raw.length+4,8)));if(sc>bs){bs=sc;best=[c,rooms];}}
    if(best&&bs>=0.45&&s.length>=3){const [c,rooms]=best;
      if(!norm(c).includes(s))h+=`<p class="small muted" style="margin:4px 2px">${t('didMean')} <b>${esc(c)}</b>?</p>`;
      h+=`<div class="eyebrow" style="margin:4px 2px">${t('courseRooms',{c:esc(c)})}</div>${[...rooms.values()].map(itemRow).join('')}`;}
    if(!list.length&&!h){
      const near=ROOMS.map(r=>[r,simil(raw,r.kind?dn(r):r.id)]).filter(x=>x[1]>=0.5).sort((a,b)=>b[1]-a[1]).slice(0,5).map(x=>x[0]);
      h+=near.length?`<p class="small muted" style="margin:4px 2px">${t('didMean')}</p>${near.map(itemRow).join('')}`:`<p class="muted small" style="margin:6px">${t('none')}</p>`;
    }
    res.innerHTML=h+list.slice(0,100).map(itemRow).join('');
  }
  res.querySelectorAll('[data-k]').forEach(b=>b.onclick=()=>{const k=b.dataset.k;const L=(store.get('mdu.recent')||[]).filter(x=>x!==k);L.unshift(k);store.set('mdu.recent',L.slice(0,6));buzz();goRoom(BYKEY.get(k));});
}
document.getElementById('q').addEventListener('input',renderSearch);

/* ---------- Places (+ opening hours) ---------- */
function renderPlaces(){
  const el=document.getElementById('v-places');
  const o=openState();
  let h=`<div class="seg big" role="group">${['vas','esk'].map(c=>`<button type="button" data-c="${c}" aria-pressed="${c===campus}">${t(c)}</button>`).join('')}</div>
   <div class="card"><div class="row">${tileHtml('clock')}<span class="eyebrow" style="flex:1">${t('hoursT')}</span><span class="pill ${o.open?'ok':'off'}">${o.open?t('openNow'):t('closedNow')}</span></div>
   <p class="small" style="margin:8px 0 0">${o.open?t('openUntil',{t:o.until}):t('opensAt',{d:o.day,t:o.at})}</p>
   <table class="hours"><tr><th colspan="2">${t('hStudents')}</th></tr><tr><td>${t('hWeekdays')}</td><td class="code">05:30–22:00</td></tr><tr><td>${t('hWeekend')}</td><td class="code">06:30–22:00</td></tr>
   <tr><th colspan="2">${t('hComputer')}</th></tr><tr><td>${t('hEveryDay')}</td><td class="code">07:00–22:00</td></tr>
   <tr><th colspan="2">${t('hPublic')}</th></tr><tr><td>${t('hMonThu')}</td><td class="code">08:00–19:00</td></tr><tr><td>${t('hFri')}</td><td class="code">08:00–16:00</td></tr></table></div>`;
  const groups=[['entr',r=>r.kind==='entr'],['help',r=>r.kind==='help'||r.kind==='office'],['food',r=>r.kind==='cafe'||r.kind==='food'],['lib',r=>r.kind==='lib'],['quiet',r=>r.kind==='quiet'],['wc',r=>r.kind==='wc'],['aed',r=>r.kind==='aed'],
    ['halls',r=>!r.kind&&/^[A-Z][a-zé]/.test(r.id)]];
  h+=groups.map(([k,f])=>{const L=ROOMS.filter(r=>r.campus===campus&&f(r));if(!L.length)return'';
    return `<div class="card cat"><h3 class="cath">${tileHtml(PLACE_TILE[k])}<span style="flex:1">${t(k)}</span><span class="cnt">${L.length}</span></h3><div class="list">${L.map(itemRow).join('')}</div></div>`}).join('')+`<p class="note">${t('dataNote')}</p>`;
  el.innerHTML=h;
  el.querySelectorAll('[data-c]').forEach(b=>b.onclick=()=>{setCampus(b.dataset.c);renderPlaces();});
  el.querySelectorAll('[data-k]').forEach(b=>b.onclick=()=>goRoom(BYKEY.get(b.dataset.k)));
}
function setCampus(c){if(c===campus)return;campus=c;store.set('mdu.campus',c);bld=CAMPUS[c].blds[0];floor=BUILD[bld].floors[0];vbInit=false;}

/* ---------- Bus ---------- */
function renderBus(){
  const el=document.getElementById('v-bus');const to=busFrom==='vas'?'esk':'vas';
  const p=sthParts(new Date()),off=busDay(p),today=departures(busFrom,Date.now()),nb=nextBus(busFrom);
  const upcoming=today.filter(x=>x.dep>Date.now());
  let big;
  if(nb&&dayKey(new Date(nb.dep))===dayKey(new Date())) big=`<div class="busbig"><span class="code">${fmtTime(nb.dep)}</span><span class="muted">→ ${t(to)} · ${t('busArr',{t:fmtTime(nb.arr)})}</span></div><div class="pill">${t('inX')} ${fmtRel(nb.dep)}</div>`;
  else big=`<div class="busbig"><span class="small">${off?`${t('busNoService')} · ${t({weekend:'weekend',holiday:'holiday',term:'termOff'}[off])}`:t('busNone')}</span></div>${nb?`<div class="pill">${t('busNextDay',{d:fmtDay(nb.dep),t:fmtTime(nb.dep)})}</div>`:''}`;
  const stopTxt=t(busFrom==='vas'?'busStopVas':'busStopEsk');
  el.innerHTML=`<figure class="bushero"><img src="img/mdu-bus.jpg" alt="${esc(t('busImgAlt'))}" loading="lazy"><figcaption><b>${t('busT')}</b><span>Västerås ⇄ Eskilstuna</span></figcaption></figure>
   <div class="seg big" role="group">${['vas','esk'].map(c=>`<button type="button" data-f="${c}" aria-pressed="${c===busFrom}">${t('busFrom',{c:t(c)})}</button>`).join('')}</div>
   <div class="card"><div class="eyebrow">${t('busNext')}</div>${big}</div>
   <div class="card"><div class="eyebrow">${t('busStop')}</div><p style="margin:6px 0 10px">${esc(stopTxt)}</p>
     <a class="btn sec" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(STOP[busFrom].q)}" target="_blank" rel="noopener">${t('openMap')}</a></div>
   ${today.length?`<div class="eyebrow">${t('busToday')}</div><div class="card"><div class="deps">${today.map(x=>`<span class="dep ${x.dep<=Date.now()?'past':''} ${upcoming[0]===x?'nx':''}"><b class="code">${fmtTime(x.dep)}</b><span class="code small">${fmtTime(x.arr)}</span></span>`).join('')}</div></div>`:''}
   <p class="note">${t('busRules')}</p>`;
  el.querySelectorAll('[data-f]').forEach(b=>b.onclick=()=>{busFrom=b.dataset.f;store.set('mdu.busfrom',busFrom);renderBus();});
}

/* ---------- map ---------- */
const svg=document.getElementById('map');const NS='http://www.w3.org/2000/svg';
let vb={x:0,y:0,w:420,h:640},vbInit=false;
function sizeMap(){const W=svg.clientWidth,H=svg.clientHeight;if(!W||!H)return;const cy=vb.y+vb.h/2;vb.h=vb.w*H/W;vb.y=cy-vb.h/2;applyVB();}
function applyVB(){svg.setAttribute('viewBox',`${vb.x} ${vb.y} ${vb.w} ${vb.h}`);}
function mapTop(){return document.querySelector('.mapbar').offsetHeight+16;}
function fitBox(x0,y0,x1,y1,pad=20){
  const W=svg.clientWidth||1,H=svg.clientHeight||1,sheetH=document.getElementById('sheet').offsetHeight,top=mapTop();
  const availH=Math.max(120,H-sheetH-top);
  const bw=x1-x0+pad*2,bh=y1-y0+pad*2;
  const k=Math.max(bw/W,bh/availH);
  vb.w=W*k;vb.h=H*k;vb.x=(x0+x1)/2-vb.w/2;vb.y=(y0+y1)/2-(top+availH/2)*k;
  vbInit=true;applyVB();
}
function fitAll(){const f=DATA[floor];fitBox(0,0,f.w,f.h,4);}
function el(n,a={},p){const e=document.createElementNS(NS,n);for(const k in a)e.setAttribute(k,a[k]);p&&p.appendChild(e);return e;}
/* Each floor on the route gets a colour; the floor tab and the step numbers use the same colour,
   so it is clear which floor tab belongs to which steps. Start floor = green, destination floor = orange. */
const MID_COLS=['#2563eb','#7c3aed','#0891b2'];
function routeFloors(){return route&&!route.same?[...new Set(route.segs.map(s=>s.fk))]:[];}
function floorColor(fk){const L=routeFloors(),i=L.indexOf(fk);if(i<0)return null;if(i===0)return '#1f8a5b';if(i===L.length-1)return '#ff4900';return MID_COLS[(i-1)%MID_COLS.length];}
function renderMapBar(){
  const cs=document.getElementById('campSeg'),bs=document.getElementById('bldSeg'),fs=document.getElementById('floorSeg');
  cs.innerHTML=['vas','esk'].map(c=>`<button type="button" data-c="${c}" aria-pressed="${c===campus}">${t(c)}</button>`).join('');
  const rfl=routeFloors();
  bs.innerHTML=CAMPUS[campus].blds.map(k=>{const f=rfl.find(fk=>BUILD[k].floors.includes(fk));return `<button type="button" data-b="${k}" aria-pressed="${k===bld}" ${f?`class="has-route" style="--fc:${floorColor(f)}"`:''}>${bShort(k)}</button>`;}).join('');
  fs.innerHTML=`<span class="seglbl">${t('floor')}</span>`+BUILD[bld].floors.map(fk=>{const c=floorColor(fk);return `<button type="button" data-f="${fk}" aria-label="${t('floorN',{n:fk.slice(1)})}" aria-pressed="${fk===floor}" ${c?`class="has-route" style="--fc:${c}"`:''}>${fk.slice(1)}</button>`;}).join('');
  cs.querySelectorAll('button').forEach(b=>b.onclick=()=>{setCampus(b.dataset.c);renderMap();renderSheet();fitAll();});
  bs.querySelectorAll('button').forEach(b=>b.onclick=()=>{bld=b.dataset.b;floor=BUILD[bld].floors[target&&target.b===bld?target.floor-1:0];renderMap();fitAll();});
  fs.querySelectorAll('button').forEach(b=>b.onclick=()=>{floor=b.dataset.f;renderMap();renderSheet();});
  document.querySelector('.mapwrap').style.setProperty('--bar-h',document.querySelector('.mapbar').offsetHeight+'px');
}
function renderMap(){
  renderMapBar();
  const f=DATA[floor];svg.innerHTML='';
  el('rect',{x:-3000,y:-3000,width:7000,height:7000,fill:'#ffffff'},svg);
  el('image',{href:f.img,x:0,y:0,width:f.w,height:f.h,preserveAspectRatio:'none'},svg);
  if(route){
    for(const s of route.segs.filter(s=>s.fk===floor)){
      const pts=s.pts.map(p=>p.x+','+p.y).join(' ');
      el('polyline',{points:pts,fill:'none',stroke:'#ffffff',"stroke-width":4.5,"stroke-linecap":"round","stroke-linejoin":"round",opacity:.75},svg);
      // see-through route: a blue line blended with the map (multiply), so room numbers under it stay readable
      el('polyline',{points:pts,fill:'none',stroke:'#2fe04f',"stroke-width":3,opacity:.6,"stroke-linecap":"round","stroke-linejoin":"round",class:'routebase'},svg);
      el('polyline',{points:pts,fill:'none',stroke:'#0a5c1f',"stroke-width":1.3,opacity:.9,"stroke-dasharray":"4 6","stroke-linecap":"round",class:'routeline routebase'},svg);
    }
    for(const s of route.marks.filter(s=>s.fk===floor)){
      el('circle',{cx:s.x,cy:s.y,r:8,fill:'var(--stair)',stroke:'#fff',"stroke-width":2},svg);
      const tx=el('text',{x:s.x,y:s.y+3.6,"text-anchor":"middle","font-size":10,"font-weight":700,fill:'#fff'},svg);tx.textContent=s.sym;
    }
  }
  const sp=startPoint();
  if(target&&sp&&sp.fk===floor){
    // start point: a soft green pulse around the dot so it is easy to spot
    el('circle',{cx:sp.x,cy:sp.y,r:5.5,fill:'var(--start)',opacity:.35,class:'spulse'},svg);
    el('circle',{cx:sp.x,cy:sp.y,r:5,fill:'var(--start)',stroke:'#fff',"stroke-width":2},svg);
  }
  if(target&&target.fk===floor){
    // destination: the room number is redrawn in a clear label on top of the map (so nothing hides it),
    // with an orange pin standing just above the label
    const code=String(target.id||target.name||""), fs=7, w=code.length*fs*0.62+8, hgt=fs+5;
    const g=el('g',{transform:`translate(${target.x} ${target.y})`},svg);
    // the label blinks (shows, fades away, comes back) so whatever is drawn under it on the map can be seen too
    const lb=el('g',{class:'tlabel'},g);
    el('rect',{x:-w/2,y:-hgt/2,width:w,height:hgt,rx:hgt/2,fill:'#fff',stroke:'var(--target)',"stroke-width":1.4},lb);
    const tx=el('text',{x:0,y:0.5,"text-anchor":'middle',"dominant-baseline":'middle',"font-size":fs,"font-weight":800,fill:'#141414',"font-family":'ui-monospace,Menlo,Consolas,monospace'},lb);tx.textContent=code;
    // small pin standing just above the spot, with a soft pulse at its tip
    const pg=el('g',{transform:`translate(0 ${-hgt/2-1})`},g);
    el('circle',{cx:0,cy:0,r:3,fill:'var(--target)',opacity:.5,class:'tpulse'},pg);
    const pin=el('g',{transform:'scale(.6)',opacity:.9},pg);
    el('path',{d:'M0 0C-3.5-7-11-12.5-11-21A11 11 0 1 1 11-21C11-12.5 3.5-7 0 0Z',fill:'var(--target)',stroke:'#fff',"stroke-width":2.5,"stroke-linejoin":'round'},pin);
    el('circle',{cx:0,cy:-21,r:4.5,fill:'#fff'},pin);
  }
  applyVB();
}
/* Smart start: if your previous class (same campus) has just ended or is ending, the route starts from that room —
   unless you picked a start yourself in the last 30 minutes */
var AUTO_OK=true;
function autoStart(){
  if(!target||!AUTO_OK)return null;
  if(Date.now()-(+store.get('mdu.startAt')||0)<30*60000)return null;
  const now=Date.now();let best=null;
  for(const e of allEvents()){if(!SCHEDS.length||e.deadline)continue;if(e.end<now-45*60000||e.end>now+20*60000||e.start>now)continue;
    const r=knownRoom(e);if(r&&r.campus===target.campus&&r.key!==target.key&&canRoute(r)&&(!best||e.end>best.e.end))best={e,r};}
  return best?{type:'room',key:best.r.key,auto:true}:null;
}
function effectiveStart(){
  if(!target) return start;
  const a=autoStart();if(a)return a;
  const ok=s=>{if(!s)return false;if(s.type==='node'){const p=POS.get(s.id);return p&&BUILD[p.fk[0]].campus===target.campus;}const r=BYKEY.get(s.key);return r&&r.campus===target.campus&&canRoute(r);};
  if(ok(start)) return start;
  return DEFAULT_START[target.b]||DEFAULT_START[CAMPUS[target.campus].blds[0]];
}
function startPoint(){
  const s=effectiveStart();if(!s)return null;
  if(s.type==='node'){const p=POS.get(s.id);return p&&{...p};}
  const r=BYKEY.get(s.key);return r&&{fk:r.fk,x:r.x,y:r.y};
}
function startLabel(){
  const s=effectiveStart();if(!s)return'';
  if(s.type==='node')return t(s.label);
  const r=BYKEY.get(s.key);return r?`<span class="code">${esc(r.id)}</span>`:'';
}

/* pan / zoom */
const ptrs=new Map();let gesture=null;
function toSvg(cx,cy){const r=svg.getBoundingClientRect();return{x:vb.x+(cx-r.left)/r.width*vb.w,y:vb.y+(cy-r.top)/r.height*vb.h};}
function zoomAt(k,cx,cy){const p=toSvg(cx,cy);vb.w*=k;vb.h*=k;const r=svg.getBoundingClientRect();vb.x=p.x-(cx-r.left)/r.width*vb.w;vb.y=p.y-(cy-r.top)/r.height*vb.h;applyVB();}
svg.addEventListener('pointerdown',e=>{svg.setPointerCapture(e.pointerId);ptrs.set(e.pointerId,{x:e.clientX,y:e.clientY});
  if(ptrs.size===1)gesture={type:'pan',sx:e.clientX,sy:e.clientY,vx:vb.x,vy:vb.y,t:Date.now(),moved:false};
  else if(ptrs.size===2){const [a,b]=[...ptrs.values()];gesture={type:'pinch',d:Math.hypot(a.x-b.x,a.y-b.y),w:vb.w,moved:true};}});
svg.addEventListener('pointermove',e=>{if(!ptrs.has(e.pointerId))return;ptrs.set(e.pointerId,{x:e.clientX,y:e.clientY});
  if(!gesture)return;const r=svg.getBoundingClientRect();
  if(gesture.type==='pan'&&ptrs.size===1){const dx=e.clientX-gesture.sx,dy=e.clientY-gesture.sy;if(Math.hypot(dx,dy)>6)gesture.moved=true;
    vb.x=gesture.vx-dx/r.width*vb.w;vb.y=gesture.vy-dy/r.height*vb.h;applyVB();}
  else if(gesture.type==='pinch'&&ptrs.size===2){const [a,b]=[...ptrs.values()];const d=Math.hypot(a.x-b.x,a.y-b.y);const k=(gesture.w*gesture.d/d)/vb.w;zoomAt(k,(a.x+b.x)/2,(a.y+b.y)/2);}});
function endPtr(e){const g=gesture;ptrs.delete(e.pointerId);
  if(g&&g.type==='pan'&&!g.moved&&Date.now()-g.t<500&&ptrs.size===0)onTap(toSvg(e.clientX,e.clientY));
  if(ptrs.size===0)gesture=null;else if(ptrs.size===1){const p=[...ptrs.values()][0];gesture={type:'pan',sx:p.x,sy:p.y,vx:vb.x,vy:vb.y,t:0,moved:true};}}
svg.addEventListener('pointerup',endPtr);svg.addEventListener('pointercancel',endPtr);
svg.addEventListener('wheel',e=>{e.preventDefault();zoomAt(Math.exp(e.deltaY*0.0015),e.clientX,e.clientY);},{passive:false});
const ctr=()=>{const r=svg.getBoundingClientRect();return[r.left+r.width/2,r.top+r.height/2]};
document.getElementById('zin').onclick=()=>zoomAt(0.7,...ctr());
document.getElementById('zout').onclick=()=>zoomAt(1/0.7,...ctr());
document.getElementById('zfit').onclick=()=>route&&!route.same?fitRoute():fitAll();
window.addEventListener('resize',()=>{if(view==='map')sizeMap();});

function onTap(p){
  let best=null;for(const r of ROOMS){if(r.fk!==floor)continue;const d=Math.hypot(r.x-p.x,r.y-p.y);if(d<22&&(!best||d<best.d))best={d,r};}
  if(!best)return;
  if(tapMode==='start'){tapMode=null;setStart({type:'room',key:best.r.key});return;}
  selectTarget(best.r);
}

/* ---------- route ---------- */
/* Show a fresh route from its first step: the map opens on the floor where you start (step 1). */
function showRoute(){
  if(route&&!route.same&&route.segs.length){const s0=route.segs[0];floor=s0.fk;bld=s0.fk[0];curStep=0;renderMap();renderSheet();fitRoute();}
  else{renderMap();renderSheet();if(target)focusTarget();}
}
function setStart(s){start=s;store.set('mdu.start2',s);store.set('mdu.startAt',Date.now());computeRoute();showRoute();}
function goRoom(r){if(!r)return;target=r;if(r.campus!==campus){campus=r.campus;store.set('mdu.campus',campus);}bld=r.b;floor=r.fk;sheetMin=false;computeRoute();if(route&&!route.same&&route.segs.length){floor=route.segs[0].fk;bld=floor[0];}setView('map');requestAnimationFrame(showRoute);}
function selectTarget(r){target=r;sheetMin=false;computeRoute();showRoute();}
function focusTarget(){const f=DATA[floor];const k=0.35;fitBox(target.x-f.w*k/2,target.y-f.h*k/2,target.x+f.w*k/2,target.y+f.h*k/2,0);}
var OPEN_TURNS=new Set();
function computeRoute(){
  route=null;curStep=-1;OPEN_TURNS.clear();
  if(!target||!canRoute(target))return;
  const s=effectiveStart();if(!s)return;
  const src=s.type==='node'?s.id:attach(BYKEY.get(s.key));
  const dst=attach(target);if(!src||!dst)return;
  if(src===dst){route={same:true,segs:[],marks:[],steps:[]};return;}
  const path=dijkstra(src,dst);if(!path)return;
  const segs=[],marks=[],steps=[];let flat=0,changes=0,outdoor=false;
  const fl=fk=>fk.slice(1);
  for(let i=0;i<path.length;i++){
    const p=POS.get(path[i]);
    if(!segs.length||segs[segs.length-1].fk!==p.fk){
      if(segs.length){
        const prev=POS.get(path[i-1]),pid=path[i-1].split(':')[1];
        if(prev.fk[0]!==p.fk[0]){ // building change: connecting corridor or a short walk outside
          const kind=TRANS.get(path[i-1]+'|'+path[i]);
          marks.push({fk:prev.fk,x:prev.x,y:prev.y,sym:'→'},{fk:p.fk,x:p.x,y:p.y,sym:'→'});
          if(kind==='out'){outdoor=true;steps.push({fk:prev.fk,html:t('outStep',{from:t(ENT_LABEL[path[i-1]]),to:t(ENT_LABEL[path[i]])})});}
          else steps.push({fk:prev.fk,html:t('linkStep',{b:bLabel(p.fk[0]),f:fl(p.fk)})});
        }else{
          const up=+fl(p.fk)>+fl(prev.fk);
          marks.push({fk:prev.fk,x:prev.x,y:prev.y,sym:up?'↑':'↓'},{fk:p.fk,x:p.x,y:p.y,sym:up?'↑':'↓'});
          const last=steps[steps.length-1];
          if(last&&last.stair===pid&&last.toFk===prev.fk&&last.up===up){last.toFk=p.fk;}
          else steps.push({fk:prev.fk,stair:pid,up,toFk:p.fk});
        }
        changes++;
      }
      segs.push({fk:p.fk,pts:[],ids:[]});
    }else flat+=dist(POS.get(path[i-1]),p)*mpp(p.fk);
    segs[segs.length-1].pts.push({x:p.x,y:p.y});segs[segs.length-1].ids.push(path[i]);
  }
  const meters=flat+changes*12+(outdoor?20:0);
  const first={fk:segs[0].fk,html:`${t('startAt')}: <b>${startLabel()}</b> · ${t('floor')} ${fl(segs[0].fk)}`};
  const last={fk:target.fk,html:`${t('walkTo')} <span class="${target.kind?'':'code'}">${esc(dn(target))}</span>, ${t('redMark')}`};
  for(const st of steps) if(st.stair) st.html=`${t('walkTo')} ${stairName(st.fk,st.stair)}, ${st.up?t('takeUp'):t('takeDown')} ${t('toFloor')} ${fl(st.toFk)}`;
  // turn-by-turn: left/right worked out from the shape of the route itself (relative to the walking direction),
  // with room numbers you pass as landmarks -- no compass or GPS needed indoors
  try{
    const sk=s.type==='room'?s.key:null;
    segs.forEach((g,gi)=>{
      const st=gi===segs.length-1?last:steps.filter(x=>x.fk===g.fk)[0];
      const tl=turnList(g,{first:gi===0,last:gi===segs.length-1,startKey:sk,targetKey:target.key});
      if(st&&tl){st.turns=tl;st.nturns=(tl.match(/class="tn"/g)||[]).length;}
    });
  }catch(e){}
  route={segs,marks,steps:[first,...steps,last],mins:Math.max(1,Math.round(meters/75)),outdoor};
}
// metres per map unit, measured from the door swings drawn on each building's plans (a door leaf is about 0.9-1 m):
// U ~3.7 units, R ~4.5, Eskilstuna ~5.5 per door
const MPP={U:0.26,R:0.21,E:0.17,X:0.17};
const mpp=fk=>MPP[fk[0]]||0.22;
function turnList(g,o){
  // cut away the bits inside the start/target rooms (the walk through the door)
  let a=0,b=g.ids.length-1;
  if(o.first&&o.startKey){const i=g.ids.indexOf('proj:'+o.startKey);if(i>=0)a=i;}
  let entry=null;
  if(o.last){const i=g.ids.lastIndexOf('proj:'+o.targetKey);if(i>=0){b=i;entry=g.pts[Math.min(i+1,g.pts.length-1)];}}
  let P=g.pts.slice(a,b+1);
  // drop points closer than 5pt, then merge almost-straight corners
  const Q=[P[0]];for(let i=1;i<P.length;i++){if(dist(P[i],Q[Q.length-1])>=5||i===P.length-1)Q.push(P[i]);}
  P=Q;
  const ang=(p,q,r)=>{const a1=Math.atan2(q.y-p.y,q.x-p.x),a2=Math.atan2(r.y-q.y,r.x-q.x);let d=(a2-a1)*180/Math.PI;while(d>180)d-=360;while(d<-180)d+=360;return d;};
  let changed=true;
  while(changed&&P.length>2){changed=false;for(let i=1;i<P.length-1;i++){if(Math.abs(ang(P[i-1],P[i],P[i+1]))<32){P.splice(i,1);changed=true;break;}}}
  if(P.length<2) return '';
  const fk=g.fk;
  const lm=(pt,skip)=>{let best=null,bd=22;for(const r of ROOMS){if(r.fk!==fk||r.key===o.targetKey||r.key===o.startKey||r.kind==='aed'||(skip&&skip.has(r.key)))continue;const d=dist(r,pt);if(d<bd){bd=d;best=r;}}return best;};
  const nm=r=>`<span class="${r.kind?'':'code'}">${esc(dn(r))}</span>`;
  const m=d=>{const v=d*mpp(fk);return v<12?Math.max(2,Math.round(v)):Math.round(v/5)*5;};
  const side=d=>d<0?t('left'):t('right'); // map y grows downwards, so a negative angle is a left turn
  const out=[];const used=new Set();
  // first leg: what to walk towards
  if(P.length>=2){const r=lm(P[1]);if(r){used.add(r.key);out.push(['↑',t(o.first?'dirFirst':'dirFromStairs',{lm:nm(r)})]);}
    else if(!o.first) out.push(['↑',t('dirFromStairsPlain')]);}
  let acc=0;
  for(let i=1;i<P.length;i++){
    acc+=dist(P[i-1],P[i]);
    if(i<P.length-1){
      const d=ang(P[i-1],P[i],P[i+1]);
      const r=lm(P[i],used);if(r)used.add(r.key);
      out.push([d<0?'↰':'↱',t(r?'dirTurnAt':'dirTurn',{m:m(acc),s:side(d),lm:r?nm(r):''})]);acc=0;
    }else if(o.last){
      // no left/right here: big halls often have their door round a corner, so we point to the pin instead
      out.push(['◎',t('dirEnd',{m:m(acc),r:nm(target)})]);
    }else out.push(['⇅',t('dirStair',{m:m(acc)})]);
  }
  return `<span class="turns">${out.map(([i,x])=>`<span class="tn"><span class="ti">${i}</span><span>${x}</span></span>`).join('')}</span>`;
}
function fitRoute(){
  const s=route&&route.segs.find(s=>s.fk===floor)||route&&route.segs[0];
  if(!s){if(target)focusTarget();return;}
  if(s.fk!==floor){floor=s.fk;bld=s.fk[0];renderMap();}
  const xs=s.pts.map(p=>p.x),ys=s.pts.map(p=>p.y);
  fitBox(Math.min(...xs),Math.min(...ys),Math.max(...xs),Math.max(...ys),40);
}
function renderSheet(){
  const sh=document.getElementById('sheet');
  if(tapMode==='start'){sh.innerHTML=`<div class="grab"></div><div class="row"><span class="dot" style="background:var(--start)"></span><b style="flex:1">${t('tapMapHint')}</b><button class="ghost" type="button" id="cx">${t('cancel')}</button></div>`;
    sh.querySelector('#cx').onclick=()=>{tapMode=null;renderSheet();};setSheetH();return;}
  if(!target){sh.innerHTML=`<div class="grab"></div><p class="muted small" style="margin:4px 0">${t('tapHint')}</p><p class="note" style="margin:0">${t('dataNote')}</p>`;setSheetH();return;}
  const kind=kindName(target);
  const canMin=canRoute(target)&&route&&!route.same;
  let h=`${canMin?`<button class="grab" type="button" id="grab" aria-label="${sheetMin?t('showStepsA'):t('hideStepsA')}"></button>`:'<div class="grab"></div>'}<div class="row wrap head"><span class="dot" style="background:var(--target)"></span><h2 class="${target.kind?'':'code'}" style="flex:1">${esc(dn(target))}</h2><span class="muted small">${kind&&target.kind!=='wc'?esc(kind)+' · ':''}${placeLabel(target)}</span></div>`;
  if(target.note) h+=`<p class="small muted" style="margin:6px 0 0">ℹ️ ${t(target.note)}</p>`;
  if(!canRoute(target)){h+=`<p class="small" style="margin:10px 0 0">${t('noRoute',{p:placeLabel(target)})}</p>`;}
  else{
    h+=`<button class="from" type="button" id="fromBtn"><span class="dot" style="background:var(--start)"></span><span style="flex:1"><span class="muted small">${t('from')}: </span>${startLabel()}${effectiveStart()&&effectiveStart().auto?` <span class="badge">${t('lastClass')}</span>`:''}</span><span class="small" style="color:var(--accent);font-weight:600">${t('change')}</span></button>`;
    if(route&&route.same) h+=`<p class="small">${t('sameSpot')}</p>`;
    else if(route){
      h+=`<button class="minbar" type="button" id="minbar">▲ ${t('showSteps',{n:route.steps.length})}</button>`;
      h+=`<ol class="steps">${route.steps.map((s,i)=>`<li class="${i===curStep?'cur':''} ${s.fk!==floor?'other':''} ${s.turns?'hasT':''}"><button type="button" data-step="${i}"><span class="n" style="--fc:${floorColor(s.fk)||'var(--ink)'}">${i+1}</span><span class="small">${s.html}</span></button>${s.turns?`<button type="button" class="tgl${OPEN_TURNS.has(i)?' open':''}" data-tg="${i}" aria-expanded="${OPEN_TURNS.has(i)}" aria-label="${t('dirShow',{n:s.nturns})}" title="${t('dirShow',{n:s.nturns})}"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg></button>${OPEN_TURNS.has(i)?`<div class="turnsw">${s.turns}</div>`:''}`:''}</li>`).join('')}</ol>
      <div class="row wrap" style="margin-top:8px"><span class="pill">${t('minsWalk',{n:route.mins})}</span>${target.campus==='vas'?`<label class="chk"><input type="checkbox" id="indoor" ${AVOID_OUT?'checked':''}> ${t('indoorOnly')}</label>`:''}</div>`;
    }
    h+=`<div class="starthint"><button class="ghost" type="button" id="setHere">📍 ${t('setStart')}</button><span class="small muted">${t('setStartHint')}</span></div>`;
  }
  h+=`<button class="ghost sharebtn" type="button" id="shareBtn">🔗 ${t('share')}</button>`;
  sh.innerHTML=h;sh.classList.toggle('min',!!(sheetMin&&canMin));setSheetH();wireSheet(sh,canMin);
  const fb=sh.querySelector('#fromBtn');fb&&(fb.onclick=openStartPicker);
  sh.querySelector('#shareBtn').onclick=()=>sharePlace(target);
  if(route&&!route.same&&sh._said!==target.key+route.mins){sh._said=target.key+route.mins;say(t('srRoute',{r:dn(target),n:route.steps.length,m:route.mins}));}
  const ind=sh.querySelector('#indoor');ind&&(ind.onchange=()=>{AVOID_OUT=ind.checked;store.set('mdu.indoor',AVOID_OUT);computeRoute();showRoute();});
  const sh2=sh.querySelector('#setHere');sh2&&(sh2.onclick=()=>{const r=target;target=null;route=null;setStart({type:'room',key:r.key});toast(t('startSet',{r:dn(r)}));});
  sh.querySelectorAll('[data-tg]').forEach(b=>b.onclick=e=>{e.stopPropagation();buzz();const i=+b.dataset.tg;OPEN_TURNS.has(i)?OPEN_TURNS.delete(i):OPEN_TURNS.add(i);renderSheet();});
  sh.querySelectorAll('[data-step]').forEach(b=>b.onclick=()=>{buzz();curStep=+b.dataset.step;const s=route.steps[curStep];floor=s.fk;bld=s.fk[0];renderMap();renderSheet();fitRoute();});
}
/* Bottom sheet: drag the handle down (or tap it) to shrink it to one line and see the whole map; drag up or tap "Show steps" to open it again. */
var sheetMin=false;
function setSheetMin(v){if(sheetMin===v)return;sheetMin=v;renderSheet();requestAnimationFrame(()=>{if(route&&!route.same)fitRoute();else if(target)focusTarget();});}
function wireSheet(sh,canMin){
  if(!canMin)return;
  const g=sh.querySelector('#grab'),mb=sh.querySelector('#minbar');
  g.onclick=()=>setSheetMin(!sheetMin);mb&&(mb.onclick=()=>setSheetMin(false));
  let y0=null,moved=false;
  const down=e=>{y0=e.clientY;moved=false;};
  const move=e=>{if(y0===null)return;const dy=e.clientY-y0;if(Math.abs(dy)>6)moved=true;if(moved&&!sheetMin&&dy>0)sh.style.transform=`translateY(${Math.min(dy,sh.offsetHeight-60)}px)`;};
  const up=e=>{if(y0===null)return;const dy=e.clientY-y0;y0=null;sh.style.transform='';
    if(!moved)return;if(dy>40)setSheetMin(true);else if(dy<-30)setSheetMin(false);};
  for(const el of [g,sh.querySelector('.head'),mb].filter(Boolean)){
    el.addEventListener('pointerdown',down);
  }
  if(!sh._wired){sh._wired=true;
    window.addEventListener('pointermove',e=>sh._mv&&sh._mv(e));window.addEventListener('pointerup',e=>sh._up&&sh._up(e));window.addEventListener('pointercancel',e=>sh._up&&sh._up(e));}
  sh._mv=move;sh._up=up;
  // a click right after a drag should not toggle again
  g.addEventListener('click',e=>{if(moved){e.stopImmediatePropagation();moved=false;}},true);
}
function setSheetH(){const sh=document.getElementById('sheet'),w=document.querySelector('.mapwrap');w.style.setProperty('--sheet-h',sh.offsetHeight+'px');w.style.setProperty('--bar-h',document.querySelector('.mapbar').offsetHeight+'px');}

/* start picker */
async function sharePlace(r){
  const url=PUBLIC_URL+'?p='+encodeURIComponent(r.key),txt=t('shareText',{r:dn(r)})+' 📍';
  try{if(navigator.share){await navigator.share({title:'MDU Navigator',text:txt,url});return;}}catch(e){if(e&&e.name==='AbortError')return;}
  try{await navigator.clipboard.writeText(txt+' '+url);toast(t('copied'));}catch(e){prompt('',url);}
}
function openStartPicker(){
  const ov=document.getElementById('ov'),d=document.getElementById('dlg');const c=target?target.campus:campus;
  d.innerHTML=`<div class="row"><h3 style="flex:1">${t('pickStart')}</h3><button class="ghost" type="button" id="dx">${t('close')}</button></div>
   <button class="btn sec" type="button" id="tapm">${t('tapMap')}</button>
   <label class="search" for="sq"><input id="sq" type="search" placeholder="${t('nearRoom')}" autocomplete="off"></label>
   <div class="list" id="sl"></div>`;
  const close=()=>ov.classList.remove('on');
  const fill=()=>{const s=norm(d.querySelector('#sq').value);
    let items='';
    if(!s){items+=`<div class="eyebrow" style="margin-top:4px">${t('entrances')}</div>`+ENTR[c].map(([id,l])=>`<button class="item" type="button" data-n="${id}" data-l="${l}"><span class="dot" style="background:var(--start)"></span><span class="t">${t(l)}</span><span></span></button>`).join('');}
    else items+=ROOMS.filter(r=>r.campus===c&&canRoute(r)&&!r.kind&&norm(r.id).includes(s)).slice(0,30).map(r=>`<button class="item" type="button" data-k="${esc(r.key)}"><span class="code" style="min-width:70px">${esc(r.id)}</span><span class="s">${placeLabel(r)}</span><span></span></button>`).join('');
    d.querySelector('#sl').innerHTML=items;
    d.querySelectorAll('[data-n]').forEach(b=>b.onclick=()=>{close();setStart({type:'node',id:b.dataset.n,label:b.dataset.l});});
    d.querySelectorAll('[data-k]').forEach(b=>b.onclick=()=>{close();setStart({type:'room',key:b.dataset.k});});};
  d.querySelector('#sq').oninput=fill;d.querySelector('#dx').onclick=close;
  d.querySelector('#tapm').onclick=()=>{close();tapMode='start';renderSheet();};
  ov.onclick=e=>{if(e.target===ov)close();};
  fill();ov.classList.add('on');
}

/* ---------- misc ---------- */
let toastT;function toast(m){const e=document.getElementById('toast');e.textContent=m;e.classList.add('on');clearTimeout(toastT);toastT=setTimeout(()=>e.classList.remove('on'),3200);}
function applyLang(){
  document.documentElement.lang=lang;
  document.querySelectorAll('[data-t]').forEach(e=>e.textContent=t(e.dataset.t));
  document.getElementById('langBtn').textContent=t('otherLang');if(typeof paintThemeBtn==='function')paintThemeBtn();
  if(target)computeRoute();
  renderNext();renderPlaces();renderSearch();renderBus();renderInfo();if(typeof renderA2HS==='function')renderA2HS();if(view==='map'){renderMap();renderSheet();}
}
/* Light / dark mode: follows the phone by default; the moon/sun button switches and remembers it */
function effTheme(){const d=document.documentElement.dataset.theme;return d||(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');}
function paintThemeBtn(){const b=document.getElementById('themeBtn');if(!b)return;const dark=effTheme()==='dark';b.textContent=dark?'☀':'☾';b.setAttribute('aria-label',dark?t('lightMode'):t('darkMode'));b.title=b.getAttribute('aria-label');}
document.getElementById('themeBtn').onclick=()=>{const next=effTheme()==='dark'?'light':'dark';document.documentElement.dataset.theme=next;store.set('mdu.theme',next);paintThemeBtn();};
try{matchMedia('(prefers-color-scheme: dark)').addEventListener('change',paintThemeBtn);}catch(e){}
document.getElementById('langBtn').onclick=()=>{lang=lang==='en'?'sv':'en';store.set('mdu.lang',lang);applyLang();};
/* optional university logo: shown only if www/img/university-logo.png exists (add it only with MDU's permission) */
(()=>{const img=new Image();img.onload=()=>{const m=document.getElementById('mark');m.innerHTML='';m.classList.add('logo');img.alt='';m.appendChild(img);};img.src='img/university-logo.png';})();
lang=store.get('mdu.lang')||((navigator.language||'').toLowerCase().startsWith('sv')?'sv':'en');
applyLang();
setView(view);
setInterval(()=>{if(view==='next')renderNext();if(view==='bus')renderBus();if(view==='places')renderPlaces();},60000);
refreshAll(true);
document.addEventListener('visibilitychange',()=>{if(!document.hidden){const old=SCHEDS.some(s=>s.source==='link'&&Date.now()-(s.fetched||0)>30*60000);if(old)refreshAll(true);if(view==='next')renderNext();}});
/* Android app: the keyboard is drawn over the page, so size the app to the visible area */
if(IS_NATIVE&&window.Capacitor.getPlatform&&window.Capacitor.getPlatform()==='android'&&window.visualViewport){
  const vv=window.visualViewport;
  const fitVV=()=>{document.documentElement.style.setProperty('--vvh',vv.height+'px');document.body.classList.toggle('kb',vv.height<window.innerHeight*0.8);};
  vv.addEventListener('resize',fitVV);fitVV();
  document.addEventListener('focusin',e=>{if(e.target.matches('input'))setTimeout(()=>e.target.scrollIntoView({block:'nearest'}),300);});
}
/* Web only: tell people they can add the app to the Home Screen (iPhone: instructions, Android/Chrome: install button) */
var A2HS={ios:false,prompt:null,manual:false,isIOS:false,installed:false};
var SHARE_SVG='<svg class="shareic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-label="Share"><path d="M12 15V3M8 7l4-4 4 4"/><path d="M7 10H5v11h14V10h-2"/></svg>';
function a2hsAvailable(){return !IS_NATIVE&&A2HS&&!A2HS.installed&&(A2HS.isIOS||!!A2HS.prompt||/Android/i.test(navigator.userAgent));}
function showA2HS(){if(A2HS.isIOS)A2HS.ios=true;else if(!A2HS.prompt)A2HS.manual=true;renderA2HS();}
function renderA2HS(){
  const el=document.getElementById('a2hs');if(!el||!A2HS)return;
  if(!A2HS.ios&&!A2HS.prompt&&!A2HS.manual){el.hidden=true;return;}
  const msg=A2HS.ios?esc(t('a2hsIos')).replace('%SHARE%',SHARE_SVG):A2HS.prompt?esc(t('a2hsAndroid')):esc(t('a2hsMenu'));
  el.innerHTML=`<div class="a2hs-t"><img src="icons/icon-192.png" alt=""><b>${esc(t('a2hsTitle'))}</b></div><p>${msg}</p>${A2HS.ios?`<p class="a2hs-tip">${esc(t('a2hsTip'))}</p>`:''}
    <div class="a2hs-b">${A2HS.prompt?`<button class="btn" type="button" id="a2hsGo">${esc(t('a2hsInstall'))}</button>`:''}<button class="btn ghost" type="button" id="a2hsNo">${esc(t('a2hsClose'))}</button></div>`;
  el.hidden=false;
  el.querySelector('#a2hsNo').onclick=()=>{store.set('mdu.a2hs',Date.now());A2HS.ios=false;A2HS.manual=false;renderA2HS();};
  const go=el.querySelector('#a2hsGo');if(go)go.onclick=async()=>{const p=A2HS.prompt;A2HS.prompt=null;A2HS.manual=false;renderA2HS();p.prompt();try{await p.userChoice;}catch(e){}if(view==='info')renderInfo();};
}
(()=>{
  if(IS_NATIVE)return;
  const standalone=window.navigator.standalone===true||(window.matchMedia&&matchMedia('(display-mode: standalone)').matches);
  if(standalone){A2HS.installed=true;return;}
  A2HS.isIOS=/iPhone|iPad|iPod/.test(navigator.userAgent)||(navigator.platform==='MacIntel'&&navigator.maxTouchPoints>1);
  // "Not now" hides the card for 14 days; it can always be opened again from the Student tab
  const snoozed=Date.now()-(+store.get('mdu.a2hs')||0)<14*864e5;
  let auto=!snoozed;
  if(A2HS.isIOS&&auto){A2HS.ios=true;setTimeout(renderA2HS,1500);}
  window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();A2HS.prompt=e;if(auto)renderA2HS();if(view==='info')renderInfo();});
  window.addEventListener('appinstalled',()=>{A2HS.installed=true;A2HS.prompt=null;A2HS.manual=false;store.set('mdu.a2hs',Date.now());renderA2HS();if(view==='info')renderInfo();});
})();
renderInfo();
if('serviceWorker' in navigator&&!IS_NATIVE&&(location.protocol==='https:'||location.hostname==='localhost')){navigator.serviceWorker.register('sw.js').catch(()=>{});}
/* ---------- shared links: ?p=<place key> or ?room=R2-142 opens the route ---------- */
(()=>{try{const q=new URLSearchParams(location.search);const p=q.get('p'),rm=q.get('room');
  const r=p?BYKEY.get(p):rm?BYCODE.get(norm(rm)):null;
  if(r){store.set('mdu.onb',1);history.replaceState(null,'',location.pathname+'#map');setTimeout(()=>goRoom(r),50);}}catch(e){}})();
/* ---------- first start: 3 short welcome screens (campus, schedule, home screen) ---------- */
function showOnboarding(){
  const o=document.getElementById('onb');if(!o)return;
  const standalone=window.navigator.standalone===true||(window.matchMedia&&matchMedia('(display-mode: standalone)').matches);
  const steps=IS_NATIVE||standalone?2:3;let step=1,pick=store.get('mdu.campus')||'vas';
  const finish=()=>{store.set('mdu.onb',1);store.set('mdu.a2hs',Date.now());o.hidden=true;document.body.classList.remove('onb');renderNext();renderA2HS();};
  const dots=()=>`<div class="odots" aria-hidden="true">${Array.from({length:steps},(_,k)=>`<i class="${k+1===step?'on':''}"></i>`).join('')}</div>`;
  const draw=()=>{
    let h=`<div class="otop">${dots()}<button class="ghost oclose" type="button" id="oclose" aria-label="${t('close')}">✕</button></div>`;
    if(step===1){h+=`<h2>${t('onbHi')}</h2><p class="muted">${t('onbCampus')}</p><div class="opts" role="radiogroup">${[['vas',t('vas')],['esk',t('esk')],['both',t('both')]].map(([k,l])=>`<button type="button" role="radio" class="oopt ${pick===k?'on':''}" data-pick="${k}" aria-checked="${pick===k}">${tileHtml(k==='both'?'link':'mdu')}<span>${esc(l)}</span></button>`).join('')}</div>
      <p class="small muted">${t('onbLang')}: <button type="button" class="ghost" id="olang">${lang==='en'?'English → Svenska':'Svenska → English'}</button></p>
      <div class="obtns"><button class="btn" type="button" id="onext">${t('onbNext')}</button><button class="linkbtn" type="button" id="oskip">${t('skip')}</button></div>`;}
    else if(step===2){h+=`<h2>${t('onbSched')}</h2><ol class="ohow"><li>${t('how1')}</li><li>${t('how2')}</li><li>${t('how3')}</li></ol>
      <label class="search" for="oUrl"><input id="oUrl" type="url" inputmode="url" autocomplete="off" placeholder="${t('linkPh')}" aria-label="${t('linkPh')}"></label>
      <div class="obtns"><button class="btn" type="button" id="oadd">${t('addLink')}</button>
      <label class="btn sec file">${t('uploadB')}<input type="file" id="oFile" accept=".ics,text/calendar" multiple></label>
      <button class="linkbtn" type="button" id="olater">${t('onbLater')}</button></div>`;}
    else{const ios=A2HS.isIOS;h+=`<h2>${t('onbHome')}</h2><p class="muted">${t('onbHomeD')}</p><div class="ohome">${ios?esc(t('a2hsIos')).replace('%SHARE%',SHARE_SVG):A2HS.prompt?esc(t('a2hsAndroid')):esc(t('a2hsMenu'))}</div>
      <div class="obtns">${!ios&&A2HS.prompt?`<button class="btn" type="button" id="oinst">${t('a2hsInstall')}</button>`:`<button class="btn" type="button" id="odone">${t('gotIt')}</button>`}<button class="linkbtn" type="button" id="onot">${t('a2hsClose')}</button></div>
      <p class="small muted" style="text-align:center">${t('onbLaterHint')}</p>`;}
    o.querySelector('.ocard').innerHTML=h;
    const q=s=>o.querySelector(s);
    o.querySelectorAll('[data-pick]').forEach(b=>b.onclick=()=>{pick=b.dataset.pick;buzz();draw();});
    q('#olang')&&(q('#olang').onclick=()=>{lang=lang==='en'?'sv':'en';store.set('mdu.lang',lang);applyLang();draw();});
    q('#onext')&&(q('#onext').onclick=()=>{setCampus(pick==='esk'?'esk':'vas');store.set('mdu.bothCampus',pick==='both');step=2;draw();});
    q('#oskip')&&(q('#oskip').onclick=finish);
    q('#olater')&&(q('#olater').onclick=()=>{if(step<steps){step++;draw();}else finish();});
    q('#oadd')&&(q('#oadd').onclick=async()=>{const u=q('#oUrl').value.trim();if(u&&await addLink(u,false)){buzz();if(step<steps){step++;draw();}else finish();}});
    q('#oFile')&&(q('#oFile').onchange=async()=>{let n=0;for(const file of q('#oFile').files){const ev=parseICS(await file.text());if(ev){addSchedule(ev,'file');n+=ev.length;}}toast(n?t('loaded',{n}):t('badFile'));if(n){buzz();if(step<steps){step++;draw();}else finish();}});
    q('#oinst')&&(q('#oinst').onclick=async()=>{const p=A2HS.prompt;A2HS.prompt=null;p.prompt();try{await p.userChoice;}catch(e){}finish();});
    q('#odone')&&(q('#odone').onclick=finish);q('#onot')&&(q('#onot').onclick=finish);q('#oclose').onclick=finish;
    const h2=o.querySelector('h2');h2&&h2.focus&&(h2.tabIndex=-1,h2.focus());
  };
  o.hidden=false;document.body.classList.add('onb');draw();
}
if(!store.get('mdu.onb')&&!SCHEDS.length)showOnboarding();
