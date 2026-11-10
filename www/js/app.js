/* ---------- i18n: English and Swedish ---------- */
const T = {
 en:{appTitle:'MDU Navigator',appSub:'Västerås · Eskilstuna · student prototype',tNext:'Schedule',tSearch:'Search',tMap:'Map',tPlaces:'Places',tBus:'Bus',
  vas:'Västerås',esk:'Eskilstuna',
  next:'Next session',now:'Happening now',later:'Coming up',goTo:'Take me to',online:'Online',deadline:'Deadline',nextDeadline:'Next deadline',
  notMapped:'This room isn’t on the map yet',example:'Example',yours:'Your schedule',
  myCourses:'My courses',addCourse:'Add a course',addHint:'Add each course you take. You can add as many as you like.',
  linkPh:'Paste a KronoX iCal link',addLink:'Add link',orFile:'or',uploadB:'Upload .ics files from KronoX',
  how1:'Open the course schedule in KronoX on the MDU website',how2:'Choose iCal and copy the link, or download the file',how3:'Add it here. Your schedules stay on this device only',
  remove:'Remove',sure:'Sure? Tap again',refreshAll:'Update all',fromLink:'Link',fromFile:'File',sessions:'{n} sessions',
  noMore:'No upcoming sessions in your schedules',exampleNote:'These are sample sessions so you can see how the app works. Add your own courses below.',
  today:'Today',tomorrow:'Tomorrow',inX:'in',min:'min',hr:'h',day:'d',endsIn:'ends in',
  qph:'Search: R2-142, A2-003, Omega, WC…',floor:'Floor',route:'Route',mapOnly:'Map only',
  bR:'R Block',bU:'T/U Block',bE:'Main building',bX:'Exam hall',bRs:'R',bUs:'T/U',bEs:'A·B·C',bXs:'Exam hall',
  from:'From',change:'Change',tapHint:'Tap any room on the map, or find it in Search.',
  startAt:'Start at',takeUp:'go up',takeDown:'go down',toFloor:'to floor',walkTo:'Walk to',redMark:'the orange ring on the map.',
  linkStep:'Take the connecting corridor to {b}, floor {f}',
  minsWalk:'About {n} min walk (estimate)',noRoute:'No route to this place yet. It is marked on the map: {p}.',otherCampus:'This room is in {c}. Check the Bus tab for the MDU bus.',
  pickStart:'Where are you now?',entrances:'Entrances',nearRoom:'I’m next to room…',tapMap:'Pick my spot on the map',tapMapHint:'Tap the room closest to you',
  setStart:'I’m here',cancel:'Cancel',close:'Close',sameSpot:'You’re already there.',
  wc:'Toilets',food:'Food & café',quiet:'Quiet spaces',help:'Help & service',aed:'Defibrillators',halls:'Named halls',lib:'Library',entr:'Entrances',
  stairsBy:'the stairs by {r}',stSpiral:'the spiral stairs in the middle',stUA:'the north-west stairs',stUB:'the west stairs (middle)',stUC:'the south-west stairs',stUE:'the east stairs',
  stEW:'the Västra länken stairwell',stEE:'the Östra länken stairwell',stEC:'the lifts by Studenttorget',stES:'the lift by the C building',
  ent_rw:'R Block main entrance (floor 1)',ent_rn:'R Block entrance by R1-121',ent_re:'R Block entrance by R1-452',ent_rs:'R Block entrance by R1-152',
  ent_uw:'U Block entrance (floor 1)',ent_un:'Entrance between T and U (north side)',ent_us:'Entrance between T and U (south side)',
  ent_em:'Main entrance, Hamngatan 15',ent_ew:'Entrance on Bruksgatan',ent_ee:'Entrance on Drottninggatan',
  loaded:'Added {n} sessions',updatedAll:'Schedules updated',badFile:'That file isn’t iCal. Download the schedule from KronoX as iCal (.ics) and try again.',
  dataNote:'Maps come from MDU’s public premises guides (Västerås Aug 2026, Eskilstuna Apr 2026). Routes are approximate, so follow the signs too.',
  none:'No results. Try a room code like R2-142 or A2-003.',exampleCourse:'Example course',
  linkFail:'Couldn’t load that link. Check the link and your internet connection.',
  linkWeb:'The web version can’t load KronoX links directly. Download the .ics file instead, or use the app.',
  updated:'Updated {t}',otherLang:'Svenska',
  /* opening hours */
  hoursT:'Opening hours',openNow:'Open for students now',closedNow:'Closed for students now',openUntil:'until {t}',opensAt:'opens {d} {t}',
  hStudents:'Students (MDU card + PIN)',hWeekdays:'Mon–Fri',hWeekend:'Weekends & holidays',hComputer:'Computer rooms',hEveryDay:'every day',hPublic:'Public',hMonThu:'Mon–Thu',hFri:'Fri',
  /* bus */
  busT:'MDU bus',busFrom:'From {c}',busNext:'Next bus',busArr:'arrives {t}',busNone:'No more buses today',busNoService:'No bus today',busNextDay:'Next: {d} {t}',
  busToday:'Today’s departures',busStop:'Bus stop',openMap:'Open in Maps',
  busStopVas:'Vasagatan, just after the Solbergagatan junction, level with Arosvallen',busStopEsk:'Rademachergatan 26',
  busRules:'Free for MDU students, Monday–Friday during the academic year. Show your MDU card with your photo to the driver. No buses on public holidays. Wi‑Fi on board. Folding bikes are fine, e-bikes and e-scooters are not allowed.',
  busFor:'Coming from {from}? The last MDU bus that gets you to {c} in time leaves at {dep}.',
  busForNone:'Coming from {from}? No MDU bus that day gets you to {c} in time.',
  termOff:'Outside the semester',holiday:'Public holiday',weekend:'Weekend'
 },
 sv:{appTitle:'MDU Navigator',appSub:'Västerås · Eskilstuna · studentprototyp',tNext:'Schema',tSearch:'Sök',tMap:'Karta',tPlaces:'Platser',tBus:'Buss',
  vas:'Västerås',esk:'Eskilstuna',
  next:'Nästa pass',now:'Pågår nu',later:'Kommande',goTo:'Visa vägen till',online:'Online',deadline:'Inlämning',nextDeadline:'Nästa inlämning',
  notMapped:'Salen finns inte på kartan än',example:'Exempel',yours:'Ditt schema',
  myCourses:'Mina kurser',addCourse:'Lägg till en kurs',addHint:'Lägg till varje kurs du läser. Du kan lägga till hur många du vill.',
  linkPh:'Klistra in en iCal-länk från KronoX',addLink:'Lägg till länk',orFile:'eller',uploadB:'Ladda upp .ics-filer från KronoX',
  how1:'Öppna kursens schema i KronoX på MDU:s webbplats',how2:'Välj iCal och kopiera länken, eller ladda ner filen',how3:'Lägg till den här. Dina scheman sparas bara på den här enheten',
  remove:'Ta bort',sure:'Säker? Tryck igen',refreshAll:'Uppdatera alla',fromLink:'Länk',fromFile:'Fil',sessions:'{n} pass',
  noMore:'Inga kommande pass i dina scheman',exampleNote:'Det här är exempelpass så att du ser hur appen fungerar. Lägg till dina egna kurser nedan.',
  today:'Idag',tomorrow:'Imorgon',inX:'om',min:'min',hr:'tim',day:'d',endsIn:'slutar om',
  qph:'Sök: R2-142, A2-003, Omega, WC…',floor:'Plan',route:'Väg',mapOnly:'Bara karta',
  bR:'Hus R',bU:'Hus T/U',bE:'Huvudbyggnaden',bX:'Tentamenslokal',bRs:'R',bUs:'T/U',bEs:'A·B·C',bXs:'Tenta',
  from:'Från',change:'Ändra',tapHint:'Tryck på en sal på kartan, eller sök efter den under Sök.',
  startAt:'Börja vid',takeUp:'gå upp',takeDown:'gå ner',toFloor:'till plan',walkTo:'Gå till',redMark:'den orange ringen på kartan.',
  linkStep:'Ta förbindelsegången till {b}, plan {f}',
  minsWalk:'Cirka {n} min promenad (uppskattning)',noRoute:'Ingen vägbeskrivning hit än. Platsen är markerad på kartan: {p}.',otherCampus:'Salen ligger i {c}. Se fliken Buss för MDU-bussen.',
  pickStart:'Var är du nu?',entrances:'Entréer',nearRoom:'Jag står vid sal…',tapMap:'Välj min plats på kartan',tapMapHint:'Tryck på salen närmast dig',
  setStart:'Jag är här',cancel:'Avbryt',close:'Stäng',sameSpot:'Du är redan där.',
  wc:'Toaletter',food:'Mat och café',quiet:'Lugna platser',help:'Hjälp och service',aed:'Hjärtstartare',halls:'Salar med namn',lib:'Bibliotek',entr:'Entréer',
  stairsBy:'trappan vid {r}',stSpiral:'spiraltrappan i mitten',stUA:'trappan i nordväst',stUB:'västra trappan (mitten)',stUC:'trappan i sydväst',stUE:'östra trappan',
  stEW:'trapphuset Västra länken',stEE:'trapphuset Östra länken',stEC:'hissarna vid Studenttorget',stES:'hissen vid C-huset',
  ent_rw:'Hus R huvudentré (plan 1)',ent_rn:'Hus R entré vid R1-121',ent_re:'Hus R entré vid R1-452',ent_rs:'Hus R entré vid R1-152',
  ent_uw:'Hus U entré (plan 1)',ent_un:'Entrén mellan T och U (norra sidan)',ent_us:'Entrén mellan T och U (södra sidan)',
  ent_em:'Huvudentrén, Hamngatan 15',ent_ew:'Entrén på Bruksgatan',ent_ee:'Entrén på Drottninggatan',
  loaded:'{n} pass lades till',updatedAll:'Scheman uppdaterade',badFile:'Filen är inte en iCal-fil. Ladda ner schemat från KronoX som iCal (.ics) och försök igen.',
  dataNote:'Kartorna kommer från MDU:s offentliga lokalguider (Västerås aug 2026, Eskilstuna apr 2026). Vägarna är ungefärliga, så följ skyltarna också.',
  none:'Inga träffar. Prova en salskod som R2-142 eller A2-003.',exampleCourse:'Exempelkurs',
  linkFail:'Kunde inte hämta länken. Kontrollera länken och din internetanslutning.',
  linkWeb:'Webbversionen kan inte hämta KronoX-länkar direkt. Ladda ner .ics-filen i stället, eller använd appen.',
  updated:'Uppdaterat {t}',otherLang:'English',
  hoursT:'Öppettider',openNow:'Öppet för studenter nu',closedNow:'Stängt för studenter nu',openUntil:'till {t}',opensAt:'öppnar {d} {t}',
  hStudents:'Studenter (MDU-kort + PIN)',hWeekdays:'Mån–fre',hWeekend:'Helger',hComputer:'Datorsalar',hEveryDay:'alla dagar',hPublic:'Allmänheten',hMonThu:'Mån–tor',hFri:'Fre',
  busT:'MDU-bussen',busFrom:'Från {c}',busNext:'Nästa buss',busArr:'framme {t}',busNone:'Inga fler bussar idag',busNoService:'Ingen buss idag',busNextDay:'Nästa: {d} {t}',
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
 'Mälartorget':['Mälartorget','Mälartorget'],'Idélab':['Idélab','Idélab']};
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
  if(r.b==='U') return /^T\d-/.test(r.id)?'T':'U';
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
vlink(['E1','E2','E3','E4'],['stW','stE','stC','stS']);
addEdge('U2:linkR','R3:ent_u',45); TRANS.set('U2:linkR|R3:ent_u','link');TRANS.set('R3:ent_u|U2:linkR','link');

function project(p,a,b){const dx=b.x-a.x,dy=b.y-a.y,L=dx*dx+dy*dy;let u=L?((p.x-a.x)*dx+(p.y-a.y)*dy)/L:0;u=Math.max(0,Math.min(1,u));return{x:a.x+u*dx,y:a.y+u*dy};}
const ATT=new Map();
function canRoute(r){return r&&!r.unknown&&!r.noroute&&!!EDGES[r.fk];}
function attach(r){
  if(!canRoute(r)) return null;
  if(ATT.has(r.key)) return ATT.get(r.key);
  const id='room:'+r.key; addNode(id,r.fk,r.x,r.y);
  if(r.door){addEdge(id,r.fk+':'+r.door);}
  else{
    let best=null;
    for(const [a,b] of EDGES[r.fk]){const q=project(r,POS.get(a),POS.get(b));const d=dist(q,r);if(!best||d<best.d)best={d,q,a,b};}
    const pid='proj:'+r.key; addNode(pid,r.fk,best.q.x,best.q.y);
    addEdge(pid,best.a);addEdge(pid,best.b);addEdge(id,pid);
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
    for(const [v,w] of ADJ.get(u)){const nd=du+w;if(nd<(D.get(v)??Infinity)){D.set(v,nd);P.set(v,u);}}
  }
  const path=[dst];while(path[0]!==src)path.unshift(P.get(path[0]));
  return path;
}
const STAIR_REF={R1:{stN:'R1-302',stS:'R1-502'},R2:{stN:'R2-302',stS:'R2-502'},R3:{stN:'R3-122',stS:'R3-143'},
  U1:{stA:'U1-046',stB:'Gamma',stC:'Alfa',stE:'U1-124'},U2:{stA:'U2-032',stB:'Ypsilon',stC:'U2-012',stE:'U2-074'},U3:{stA:'U3-083',stC:'U3-024'}};
function stairName(fk,id){
  const ref=(STAIR_REF[fk]||{})[id]; if(ref) return t('stairsBy',{r:`<span class="code">${esc(ref)}</span>`});
  if(fk[0]==='R'&&id==='stC') return t('stSpiral');
  if(fk[0]==='U') return t({stA:'stUA',stB:'stUB',stC:'stUC',stE:'stUE'}[id]||'stUB');
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
async function fetchICS(url){const r=await fetch(httpsify(url),{cache:'no-store'});const ev=r.ok?parseICS(await r.text()):null;if(!ev)throw new Error('bad');return ev;}
async function addLink(url,quiet){
  try{const ev=await fetchICS(url);addSchedule(ev,'link',url.trim());if(!quiet)toast(t('loaded',{n:ev.length}));renderNext();return true;}
  catch(e){if(!quiet)toast(IS_NATIVE?t('linkFail'):t('linkWeb'));return false;}
}
async function refreshAll(quiet){
  const links=SCHEDS.filter(s=>s.source==='link'&&s.url);if(!links.length)return;
  let ok=0;for(const s of links){try{s.events=await fetchICS(s.url);s.fetched=Date.now();ok++;}catch(e){}}
  saveScheds();renderNext();if(!quiet)toast(ok?t('updatedAll'):(IS_NATIVE?t('linkFail'):t('linkWeb')));
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

/* ---------- state ---------- */
let view=(location.hash||'').replace('#','')||'next';
if(!['next','search','map','places','bus'].includes(view))view='next';
let campus=store.get('mdu.campus')||'vas', bld=CAMPUS[campus].blds[0], floor=BUILD[bld].floors[0];
let target=null, start=store.get('mdu.start2')||null;
let route=null, tapMode=null, curStep=-1, busFrom=store.get('mdu.busfrom')||'vas';
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
}
document.querySelectorAll('nav button').forEach(b=>b.onclick=()=>setView(b.dataset.v));

/* ---------- Schedule ---------- */
function locBlock(e){
  const L=parseLoc(e.location);
  if(L.type==='online') return `<div class="roomchip"><span aria-hidden="true">💻</span><span>${t('online')} · ${esc(L.label)}</span></div>`;
  if(L.type==='none') return '';
  return L.rooms.map(r=>r.unknown?`<div class="roomchip">${roomCode(r)}<span class="muted small">${t('notMapped')}</span></div>`:
    `<div class="row wrap"><div class="roomchip">${roomCode(r)}<span class="muted small">${placeLabel(r)}</span></div><button class="btn" type="button" data-go="${esc(r.key)}" style="flex:1;min-width:150px">${t('goTo')} <span class="code">${esc(r.id)}</span></button></div>`).join('');
}
function renderNext(){
  const el=document.getElementById('v-next');
  const now=Date.now(), evs=allEvents().filter(e=>e.end>now);
  const sessions=evs.filter(e=>!e.deadline), nextDl=evs.find(e=>e.deadline);
  let h=`<div class="row"><span class="pill ${SCHEDS.length?'':'warn'}">${t(SCHEDS.length?'yours':'example')}</span><span style="flex:1"></span>${SCHEDS.some(s=>s.source==='link')?`<button class="ghost" id="refAll" type="button">${t('refreshAll')}</button>`:''}</div>`;
  if(!sessions.length){h+=`<div class="card muted">${t('noMore')}</div>`;}
  else{
    const e=sessions[0],live=e.start<=now,c=eventCampus(e);
    h+=`<article class="card next" style="border-top:4px solid ${COLORS[e.color%COLORS.length]}"><div class="row"><span class="eyebrow" style="flex:1">${live?t('now'):t('next')}</span>${live?`<span class="pill live">${t('endsIn')} ${fmtRel(e.end)}</span>`:`<span class="rel">${t('inX')} ${fmtRel(e.start)}</span>`}</div>
      <h2>${esc(e.moment||e.course)}</h2><div class="muted small">${esc(e.moment?e.course:'')}${c?` · ${t(c)}`:''}</div>
      <div class="when" style="margin-top:8px">${fmtDay(e.start)} · <span class="code" style="font-weight:500">${fmtTime(e.start)}–${fmtTime(e.end)}</span></div>
      <div style="margin-top:12px;display:flex;flex-direction:column;gap:10px">${locBlock(e)}</div>
      ${busHint(e)}</article>`;
  }
  if(nextDl) h+=`<div class="card deadline row">${dot(nextDl.color)}<span style="flex:1"><span class="eyebrow">${t('nextDeadline')}</span><br><b>${esc(nextDl.moment||nextDl.course)}</b><br><span class="muted small">${esc(nextDl.course)}</span></span><span class="small" style="text-align:end"><b>${fmtDay(nextDl.start)}</b><br><span class="code">${fmtTime(nextDl.start)}</span></span></div>`;
  const rest=evs.filter(e=>e!==sessions[0]&&e!==nextDl).slice(0,10);
  if(rest.length){
    h+=`<div class="eyebrow">${t('later')}</div><div class="card list" style="padding:2px 12px">`;
    rest.forEach((e,i)=>{
      const L=parseLoc(e.location),r=L.rooms[0];
      const tag=e.deadline?`<span class="tag dl">${t('deadline')}</span>`:L.type==='online'?`<span class="tag">${esc(L.label)}</span>`:r?(r.unknown?`<span class="tag">${roomCode(r)}</span>`:`<span class="tag go">${roomCode(r)}</span>`):'';
      h+=`<button class="item" type="button" data-ev="${i}"><span class="date"><b>${fmtTime(e.start)}</b>${fmtDay(e.start)}</span><span>${dot(e.color)}<span class="t">${esc(e.moment||e.course)}</span><br><span class="s">${esc(e.moment?e.course:'')}</span></span>${tag}</button>`;
    });
    h+=`</div>`;
  }
  // my courses
  h+=`<div class="card"><div class="eyebrow">${t('myCourses')}</div>`;
  if(!SCHEDS.length) h+=`<p class="small muted" style="margin:6px 0 0">${t('exampleNote')}</p>`;
  else h+=`<div class="list" style="margin-top:4px">${SCHEDS.map(s=>`<div class="item course">${dot(s.color)}<span><span class="t">${esc(s.name)}</span><br><span class="s">${s.source==='link'?t('fromLink'):t('fromFile')} · ${t('sessions',{n:s.events.length})} · ${esc(t('updated',{t:fmtDay(s.fetched)+' '+fmtTime(s.fetched)}))}</span></span><button class="ghost" type="button" data-rm="${s.id}">${t('remove')}</button></div>`).join('')}</div>`;
  h+=`</div>
   <div class="card"><div class="eyebrow">${t('addCourse')}</div><p class="small muted" style="margin:4px 0 0">${t('addHint')}</p>
    <label class="search" for="icsUrl" style="margin-top:10px"><input id="icsUrl" type="url" inputmode="url" autocomplete="off" placeholder="${t('linkPh')}" aria-label="${t('linkPh')}"></label>
    <button class="btn" type="button" id="icsAdd" style="width:100%;margin-top:8px">${t('addLink')}</button>
    <div class="muted small" style="text-align:center;margin:8px 0 2px">${t('orFile')}</div>
    <label class="btn sec file" style="width:100%">${t('uploadB')}<input type="file" id="icsFile" accept=".ics,text/calendar" multiple></label>
    <ol class="steps-how"><li>${t('how1')}</li><li>${t('how2')}</li><li>${t('how3')}</li></ol></div>
    <p class="note">${t('dataNote')}</p>`;
  el.innerHTML=h;
  el.querySelectorAll('[data-go]').forEach(b=>b.onclick=()=>goRoom(BYKEY.get(b.dataset.go)));
  el.querySelectorAll('[data-ev]').forEach(b=>b.onclick=()=>{const r=parseLoc(rest[+b.dataset.ev].location).rooms.find(x=>!x.unknown);if(r)goRoom(r);});
  el.querySelectorAll('[data-rm]').forEach(b=>b.onclick=()=>{if(!b.dataset.sure){b.dataset.sure=1;b.textContent=t('sure');return;}SCHEDS=SCHEDS.filter(s=>s.id!==b.dataset.rm);saveScheds();renderNext();});
  const f=el.querySelector('#icsFile');f.onchange=async()=>{let n=0,bad=0;for(const file of f.files){const ev=parseICS(await file.text());if(ev){addSchedule(ev,'file');n+=ev.length;}else bad++;}
    toast(bad&&!n?t('badFile'):t('loaded',{n}));renderNext();};
  el.querySelector('#icsAdd').onclick=()=>{const u=el.querySelector('#icsUrl').value.trim();if(u)addLink(u,false);};
  const ra=el.querySelector('#refAll');ra&&(ra.onclick=()=>refreshAll(false));
}
function busHint(e){
  const c=eventCampus(e); if(!c||e.start<=Date.now()) return '';
  const from=c==='vas'?'esk':'vas', deps=departures(from,e.start).filter(x=>x.arr<=e.start-10*60000);
  const v={s:esc(e.moment||e.course),t:fmtTime(e.start),c:t(c),from:t(from)};
  return `<p class="small muted" style="margin:12px 0 0">🚌 ${deps.length?t('busFor',{...v,dep:`<b>${fmtTime(deps[deps.length-1].dep)}</b>`}):t('busForNone',v)}</p>`;
}

/* ---------- Search ---------- */
const KINDS={wc:'wc',cafe:'food',food:'food',quiet:'quiet',help:'help',aed:'aed',lib:'lib',entr:'entr'};
const kindName=r=>r.kind?t(KINDS[r.kind]||r.kind):'';
function itemRow(r){
  return `<button class="item" type="button" data-k="${esc(r.key)}"><span class="${r.kind||!/\d/.test(r.id)?'':'code'}" style="min-width:70px">${esc(dn(r))}</span><span class="s">${placeLabel(r)}</span><span class="tag ${canRoute(r)?'go':''}">${canRoute(r)?t('route'):t('mapOnly')}</span></button>`;
}
function renderSearch(){
  const q=document.getElementById('q');q.placeholder=t('qph');
  const s=norm(q.value);
  let list=ROOMS.filter(r=>!s||norm(r.id).includes(s)||norm(r.id).replace('-','').includes(s)||(r.kind&&(norm(kindName(r)).includes(s)||norm(dn(r)).includes(s))));
  list.sort((a,b)=>(a.campus===campus?0:1)-(b.campus===campus?0:1)||a.b.localeCompare(b.b)||a.floor-b.floor||a.id.localeCompare(b.id));
  const res=document.getElementById('results');
  if(!list.length){res.innerHTML=`<p class="muted small" style="margin:6px">${t('none')}</p>`;return;}
  res.innerHTML=list.slice(0,100).map(itemRow).join('');
  res.querySelectorAll('[data-k]').forEach(b=>b.onclick=()=>goRoom(BYKEY.get(b.dataset.k)));
}
document.getElementById('q').addEventListener('input',renderSearch);

/* ---------- Places (+ opening hours) ---------- */
function renderPlaces(){
  const el=document.getElementById('v-places');
  const o=openState();
  let h=`<div class="seg big" role="group">${['vas','esk'].map(c=>`<button type="button" data-c="${c}" aria-pressed="${c===campus}">${t(c)}</button>`).join('')}</div>
   <div class="card"><div class="row"><span class="eyebrow" style="flex:1">${t('hoursT')}</span><span class="pill ${o.open?'ok':'off'}">${o.open?t('openNow'):t('closedNow')}</span></div>
   <p class="small" style="margin:8px 0 0">${o.open?t('openUntil',{t:o.until}):t('opensAt',{d:o.day,t:o.at})}</p>
   <table class="hours"><tr><th colspan="2">${t('hStudents')}</th></tr><tr><td>${t('hWeekdays')}</td><td class="code">05:30–22:00</td></tr><tr><td>${t('hWeekend')}</td><td class="code">06:30–22:00</td></tr>
   <tr><th colspan="2">${t('hComputer')}</th></tr><tr><td>${t('hEveryDay')}</td><td class="code">07:00–22:00</td></tr>
   <tr><th colspan="2">${t('hPublic')}</th></tr><tr><td>${t('hMonThu')}</td><td class="code">08:00–19:00</td></tr><tr><td>${t('hFri')}</td><td class="code">08:00–16:00</td></tr></table></div>`;
  const groups=[['entr',r=>r.kind==='entr'],['help',r=>r.kind==='help'],['food',r=>r.kind==='cafe'||r.kind==='food'],['lib',r=>r.kind==='lib'],['quiet',r=>r.kind==='quiet'],['wc',r=>r.kind==='wc'],['aed',r=>r.kind==='aed'],
    ['halls',r=>!r.kind&&/^[A-Z][a-zé]/.test(r.id)]];
  h+=groups.map(([k,f])=>{const L=ROOMS.filter(r=>r.campus===campus&&f(r));if(!L.length)return'';
    return `<div class="card cat"><h3>${t(k)}</h3><div class="list">${L.map(itemRow).join('')}</div></div>`}).join('')+`<p class="note">${t('dataNote')}</p>`;
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
  el.innerHTML=`<div class="seg big" role="group">${['vas','esk'].map(c=>`<button type="button" data-f="${c}" aria-pressed="${c===busFrom}">${t('busFrom',{c:t(c)})}</button>`).join('')}</div>
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
function renderMapBar(){
  const cs=document.getElementById('campSeg'),bs=document.getElementById('bldSeg'),fs=document.getElementById('floorSeg');
  cs.innerHTML=['vas','esk'].map(c=>`<button type="button" data-c="${c}" aria-pressed="${c===campus}">${t(c)}</button>`).join('');
  bs.innerHTML=CAMPUS[campus].blds.map(k=>`<button type="button" data-b="${k}" aria-pressed="${k===bld}">${bShort(k)}</button>`).join('');
  const rf=route?new Set(route.segs.map(s=>s.fk)):new Set();
  fs.innerHTML=BUILD[bld].floors.map(fk=>`<button type="button" data-f="${fk}" aria-pressed="${fk===floor}" class="${rf.has(fk)?'has-route':''}">${fk.slice(1)}</button>`).join('');
  cs.querySelectorAll('button').forEach(b=>b.onclick=()=>{setCampus(b.dataset.c);renderMap();renderSheet();fitAll();});
  bs.querySelectorAll('button').forEach(b=>b.onclick=()=>{bld=b.dataset.b;floor=BUILD[bld].floors[target&&target.b===bld?target.floor-1:0];renderMap();fitAll();});
  fs.querySelectorAll('button').forEach(b=>b.onclick=()=>{floor=b.dataset.f;renderMap();});
}
function renderMap(){
  renderMapBar();
  const f=DATA[floor];svg.innerHTML='';
  el('rect',{x:-3000,y:-3000,width:7000,height:7000,fill:'#ffffff'},svg);
  el('image',{href:f.img,x:0,y:0,width:f.w,height:f.h,preserveAspectRatio:'none'},svg);
  if(route){
    for(const s of route.segs.filter(s=>s.fk===floor)){
      const pts=s.pts.map(p=>p.x+','+p.y).join(' ');
      el('polyline',{points:pts,fill:'none',stroke:'#ffffff',"stroke-width":8,"stroke-linecap":"round","stroke-linejoin":"round",opacity:.9},svg);
      el('polyline',{points:pts,fill:'none',stroke:'var(--route)',"stroke-width":4.5,"stroke-linecap":"round","stroke-linejoin":"round"},svg);
      el('polyline',{points:pts,fill:'none',stroke:'#ffffff',"stroke-width":1.6,"stroke-dasharray":"4 8","stroke-linecap":"round",class:'routeline'},svg);
    }
    for(const s of route.marks.filter(s=>s.fk===floor)){
      el('circle',{cx:s.x,cy:s.y,r:8,fill:'var(--stair)',stroke:'#fff',"stroke-width":2},svg);
      const tx=el('text',{x:s.x,y:s.y+3.6,"text-anchor":"middle","font-size":10,"font-weight":700,fill:'#fff'},svg);tx.textContent=s.sym;
    }
  }
  const sp=startPoint();
  if(target&&sp&&sp.fk===floor){el('circle',{cx:sp.x,cy:sp.y,r:7,fill:'var(--start)',stroke:'#fff',"stroke-width":2.5},svg);}
  if(target&&target.fk===floor){
    el('circle',{cx:target.x,cy:target.y,r:16,fill:'var(--target)',opacity:.14},svg);
    el('circle',{cx:target.x,cy:target.y,r:16,fill:'none',stroke:'var(--target)',"stroke-width":3},svg);
    el('circle',{cx:target.x,cy:target.y,r:20,fill:'none',stroke:'var(--target)',"stroke-width":1.5,opacity:.5,class:'pulse2'},svg);
  }
  applyVB();
}
function effectiveStart(){
  if(!target) return start;
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
function setStart(s){start=s;store.set('mdu.start2',s);computeRoute();renderMap();renderSheet();if(route&&!route.same)fitRoute();}
function goRoom(r){if(!r)return;target=r;if(r.campus!==campus){campus=r.campus;store.set('mdu.campus',campus);}bld=r.b;floor=r.fk;computeRoute();setView('map');requestAnimationFrame(()=>{renderSheet();route&&!route.same?fitRoute():focusTarget();});}
function selectTarget(r){target=r;computeRoute();renderMap();renderSheet();if(route&&!route.same)fitRoute();}
function focusTarget(){const f=DATA[floor];const k=0.35;fitBox(target.x-f.w*k/2,target.y-f.h*k/2,target.x+f.w*k/2,target.y+f.h*k/2,0);}
function computeRoute(){
  route=null;curStep=-1;
  if(!target||!canRoute(target))return;
  const s=effectiveStart();if(!s)return;
  const src=s.type==='node'?s.id:attach(BYKEY.get(s.key));
  const dst=attach(target);if(!src||!dst)return;
  if(src===dst){route={same:true,segs:[],marks:[],steps:[]};return;}
  const path=dijkstra(src,dst);if(!path)return;
  const segs=[],marks=[],steps=[];let flat=0,changes=0;
  const fl=fk=>fk.slice(1);
  for(let i=0;i<path.length;i++){
    const p=POS.get(path[i]);
    if(!segs.length||segs[segs.length-1].fk!==p.fk){
      if(segs.length){
        const prev=POS.get(path[i-1]),pid=path[i-1].split(':')[1];
        if(prev.fk[0]!==p.fk[0]){ // building change via connecting corridor
          marks.push({fk:prev.fk,x:prev.x,y:prev.y,sym:'→'},{fk:p.fk,x:p.x,y:p.y,sym:'→'});
          steps.push({fk:prev.fk,html:t('linkStep',{b:bLabel(p.fk[0]),f:fl(p.fk)})});
        }else{
          const up=+fl(p.fk)>+fl(prev.fk);
          marks.push({fk:prev.fk,x:prev.x,y:prev.y,sym:up?'↑':'↓'},{fk:p.fk,x:p.x,y:p.y,sym:up?'↑':'↓'});
          const last=steps[steps.length-1];
          if(last&&last.stair===pid&&last.toFk===prev.fk&&last.up===up){last.toFk=p.fk;}
          else steps.push({fk:prev.fk,stair:pid,up,toFk:p.fk});
        }
        changes++;
      }
      segs.push({fk:p.fk,pts:[]});
    }else flat+=dist(POS.get(path[i-1]),p);
    segs[segs.length-1].pts.push({x:p.x,y:p.y});
  }
  const meters=flat*0.3+changes*12;
  const first={fk:segs[0].fk,html:`${t('startAt')}: <b>${startLabel()}</b> · ${t('floor')} ${fl(segs[0].fk)}`};
  const last={fk:target.fk,html:`${t('walkTo')} <span class="${target.kind?'':'code'}">${esc(dn(target))}</span>, ${t('redMark')}`};
  for(const st of steps) if(st.stair) st.html=`${t('walkTo')} ${stairName(st.fk,st.stair)}, ${st.up?t('takeUp'):t('takeDown')} ${t('toFloor')} ${fl(st.toFk)}`;
  route={segs,marks,steps:[first,...steps,last],mins:Math.max(1,Math.round(meters/75))};
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
  let h=`<div class="grab"></div><div class="row wrap"><span class="dot" style="background:var(--target)"></span><h2 class="${target.kind?'':'code'}" style="flex:1">${esc(dn(target))}</h2><span class="muted small">${kind&&target.kind!=='wc'?esc(kind)+' · ':''}${placeLabel(target)}</span></div>`;
  if(!canRoute(target)){h+=`<p class="small" style="margin:10px 0 0">${t('noRoute',{p:placeLabel(target)})}</p>`;}
  else{
    h+=`<button class="from" type="button" id="fromBtn"><span class="dot" style="background:var(--start)"></span><span style="flex:1"><span class="muted small">${t('from')}: </span>${startLabel()}</span><span class="small" style="color:var(--accent);font-weight:600">${t('change')}</span></button>`;
    if(route&&route.same) h+=`<p class="small">${t('sameSpot')}</p>`;
    else if(route){
      h+=`<ol class="steps">${route.steps.map((s,i)=>`<li class="${i===curStep?'cur':''}"><button type="button" data-step="${i}"><span class="n">${i+1}</span><span class="small">${s.html}</span></button></li>`).join('')}</ol>
      <div class="row" style="margin-top:8px"><span class="pill">${t('minsWalk',{n:route.mins})}</span></div>`;
    }
    h+=`<div class="row" style="margin-top:10px"><button class="btn sec" type="button" id="setHere" style="flex:1">${t('setStart')}</button></div>`;
  }
  sh.innerHTML=h;setSheetH();
  const fb=sh.querySelector('#fromBtn');fb&&(fb.onclick=openStartPicker);
  const sh2=sh.querySelector('#setHere');sh2&&(sh2.onclick=()=>{const r=target;target=null;route=null;setStart({type:'room',key:r.key});});
  sh.querySelectorAll('[data-step]').forEach(b=>b.onclick=()=>{curStep=+b.dataset.step;const s=route.steps[curStep];floor=s.fk;bld=s.fk[0];renderMap();renderSheet();fitRoute();});
}
function setSheetH(){const sh=document.getElementById('sheet');document.querySelector('.mapwrap').style.setProperty('--sheet-h',sh.offsetHeight+'px');}

/* start picker */
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
  document.getElementById('langBtn').textContent=t('otherLang');
  if(target)computeRoute();
  renderNext();renderPlaces();renderSearch();renderBus();if(view==='map'){renderMap();renderSheet();}
}
document.getElementById('langBtn').onclick=()=>{lang=lang==='en'?'sv':'en';store.set('mdu.lang',lang);applyLang();};
/* optional university logo: shown only if www/img/university-logo.png exists (add it only with MDU's permission) */
(()=>{const img=new Image();img.onload=()=>{const m=document.getElementById('mark');m.innerHTML='';m.classList.add('logo');img.alt='';m.appendChild(img);};img.src='img/university-logo.png';})();
lang=store.get('mdu.lang')||((navigator.language||'').toLowerCase().startsWith('sv')?'sv':'en');
applyLang();
setView(view);
setInterval(()=>{if(view==='next')renderNext();if(view==='bus')renderBus();if(view==='places')renderPlaces();},60000);
refreshAll(true);
document.addEventListener('visibilitychange',()=>{if(!document.hidden){const old=SCHEDS.some(s=>s.source==='link'&&Date.now()-(s.fetched||0)>30*60000);if(old)refreshAll(true);if(view==='next')renderNext();}});
if('serviceWorker' in navigator&&!IS_NATIVE&&(location.protocol==='https:'||location.hostname==='localhost')){navigator.serviceWorker.register('sw.js').catch(()=>{});}
