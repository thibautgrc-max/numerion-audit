<!DOCTYPE html><html lang="fr"><head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Audit & Simulation IA — Numérion Éducation™</title>
<meta name="description" content="Rapport d’audit et simulation IA personnalisé.">
<link rel="preconnect" href="https://cdn.jsdelivr.net">
<script defer src="https://cdn.jsdelivr.net/npm/chart.js@4.4.1/dist/chart.umd.min.js"></script>
<script defer src="https://cdn.jsdelivr.net/npm/qrcodejs/qrcode.min.js"></script>
<style>
:root{--bg:#0a0a0a;--panel:#111;--soft:#171717;--line:#222;--text:#e6e6e6;--muted:#9ca3af;--accent:#c9f31d;--ok:#0ea5e9;--warn:#f59e0b;--radius:14px;--w:1100px}
*{box-sizing:border-box}html,body{margin:0;background:var(--bg);color:var(--text);font-family:Inter,system-ui,Arial,sans-serif}
.wrap{max-width:var(--w);margin:0 auto;padding:0 20px}
.small{font-size:.9rem}.muted{color:var(--muted)}
.site-header{position:sticky;top:0;z-index:20;background:rgba(10,10,10,.9);backdrop-filter:saturate(140%) blur(8px);border-bottom:1px solid var(--line)}
.site-header .wrap{display:flex;align-items:center;gap:18px;padding:10px 20px}
.logo{height:28px}
nav{display:flex;gap:12px;flex:1}nav a{padding:6px 10px;border-radius:8px;color:var(--text);text-decoration:none}
nav a:hover{background:var(--soft)}
.actions{display:flex;gap:10px}
.btn{background:var(--accent);color:#0a0a0a;border:0;border-radius:10px;padding:10px 14px;font-weight:600;cursor:pointer}
.btn.secondary{background:#2a2a2a;color:#fff;border:1px solid #3a3a3a}
.hero{padding:48px 0;border-bottom:1px solid var(--line);background:linear-gradient(180deg,#0a0a0a 0%, #0c0c0c 100%)}
.hero h1{font-size:2rem;margin:0 0 8px}.subtitle{color:var(--muted)}
.hero-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;margin-top:20px}
.badge,.qr{background:var(--soft);padding:14px;border-radius:var(--radius);border:1px solid var(--line)}
.card{padding:32px 0;border-bottom:1px solid var(--line)}
.grid-2{display:grid;grid-template-columns:1fr 1fr;gap:22px}
.grid-3{display:grid;grid-template-columns:1fr 1fr 1fr;gap:22px}
.kpis{display:grid;grid-template-columns:repeat(2,1fr);gap:14px;margin-top:14px}
.kpi{background:var(--soft);border:1px solid var(--line);padding:12px;border-radius:12px}
.table-wrap{margin-top:10px;overflow:auto;border:1px solid var(--line);border-radius:10px}
table{width:100%;border-collapse:collapse}th,td{padding:8px 10px;border-bottom:1px solid var(--line);text-align:left}
.note,.callout{margin-top:12px;padding:12px;border-radius:10px;border:1px solid var(--line);background:var(--soft)}
.callout.ok{border-left:6px solid var(--ok)}.callout.warn{border-left:6px solid var(--warn)}
.risk-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px}
.risk{background:var(--soft);border:1px solid var(--line);padding:14px;border-radius:12px;min-height:120px}
.plan90{background:var(--soft);border:1px solid var(--line);padding:14px;border-radius:12px}
.hashbox{background:var(--soft);border:1px solid var(--line);padding:12px;border-radius:12px;word-break:break-all}
@media (max-width:980px){.grid-2,.grid-3,.hero-grid,.risk-grid{grid-template-columns:1fr}nav{display:none}}
@media print{.no-print{display:none !important}.card{page-break-inside:avoid}.hero{padding:20px 0}.table-wrap{overflow:visible}}
</style>
</head><body>
<header class="site-header no-print">
  <div class="wrap">
    <img class="logo" alt="Numérion Éducation" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='28'%3E%3Ctext x='0' y='20' fill='%23c9f31d' font-size='20' font-family='Arial'%3ENumérion%3C/text%3E%3C/svg%3E">
    <nav>
      <a href="#executive">Synthèse</a><a href="#scenarios">Scénarios</a><a href="#liquidity">Liquidité</a><a href="#risks">Risques</a><a href="#compliance">Conformité</a><a href="#recommendations">Reco</a><a href="#annexes">Annexes</a>
    </nav>
    <div class="actions">
      <button id="btnDownload" class="btn">Télécharger le PDF</button>
      <button id="btnHash" class="btn secondary">Générer l’empreinte</button>
    </div>
  </div>
</header>

<section class="hero">
  <div class="wrap">
    <h1>Audit & Simulation IA — <span id="companyName">—</span></h1>
    <p class="subtitle">Période auditée : <span id="period">—</span> • Numéro d’audit : <span id="auditId">—</span> • Date : <span id="auditDate">—</span></p>
    <div class="hero-grid">
      <div class="badge"><div>Conformité</div><strong>MiCA • IFRS</strong></div>
      <div class="badge"><div>Allocation testée</div><strong>1% • 3% • 5%</strong></div>
      <div class="badge"><div>Livrable</div><strong>Rapport PDF signé</strong></div>
      <div class="qr"><div id="qrcode"></div><small>Lien sécurisé du rapport</small></div>
    </div>
  </div>
</section>

<section id="executive" class="card"><div class="wrap">
  <h2>Synthèse exécutive</h2>
  <div class="grid-2">
    <div>
      <ul id="executiveBullets"></ul>
      <div class="kpis">
        <div class="kpi"><span>Trésorerie actuelle</span><strong id="kpiCash">—</strong></div>
        <div class="kpi"><span>Impact Score Numérion™</span><strong id="kpiImpact">—</strong></div>
        <div class="kpi"><span>Drawdown max simulé</span><strong id="kpiDD">—</strong></div>
        <div class="kpi"><span>Fenêtre de sortie</span><strong id="kpiExit">—</strong></div>
      </div>
    </div>
    <div><canvas id="chartOverview" height="180"></canvas></div>
  </div>
</div></section>

<section id="scenarios" class="card"><div class="wrap">
  <h2>Simulation IA — Scénarios d’allocation</h2>
  <p class="muted">Comparaison “Trésorerie dormante vs optimisée” sur 12–24 mois.</p>
  <div class="grid-3">
    <div class="scenario"><h3>Scénario 1%</h3><canvas id="chartS1" height="160"></canvas><div class="table-wrap"><table id="tableS1"></table></div></div>
    <div class="scenario"><h3>Scénario 3%</h3><canvas id="chartS3" height="160"></canvas><div class="table-wrap"><table id="tableS3"></table></div></div>
    <div class="scenario"><h3>Scénario 5%</h3><canvas id="chartS5" height="160"></canvas><div class="table-wrap"><table id="tableS5"></table></div></div>
  </div>
</div></section>

<section id="liquidity" class="card"><div class="wrap">
  <h2>Analyse de liquidité</h2>
  <div class="grid-2">
    <div><canvas id="chartLiquidity" height="180"></canvas></div>
    <div>
      <ul id="liquidityBullets"></ul>
      <div class="note">Fenêtres de cession prévues. Zéro pénalité de sortie sur la part trésorerie hors PSAN.</div>
    </div>
  </div>
</div></section>

<section id="risks" class="card"><div class="wrap">
  <h2>Gestion des risques</h2>
  <div class="risk-grid">
    <div class="risk"><h4>Volatilité & Drawdown</h4><p id="riskVol">—</p></div>
    <div class="risk"><h4>Contrepartie & Garde</h4><p id="riskCustody">—</p></div>
    <div class="risk"><h4>Réglementaire</h4><p id="riskReg">—</p></div>
    <div class="risk"><h4>Opérationnel</h4><p id="riskOps">—</p></div>
  </div>
</div></section>

<section id="compliance" class="card"><div class="wrap">
  <h2>Conformité MiCA / IFRS</h2>
  <div class="grid-2">
    <div><ul id="complianceList"></ul></div>
    <div class="hashbox">
      <h4>Empreinte et version</h4>
      <p>Empreinte SHA-256 du document : <code id="pdfHash">—</code></p>
      <p>Commit : <code id="commitHash">—</code></p>
      <p>Lien audit : <span id="reportUrl">—</span></p>
    </div>
  </div>
</div></section>

<section id="recommendations" class="card"><div class="wrap">
  <h2>Recommandations</h2>
  <div class="grid-2">
    <div><ol id="recoList"></ol></div>
    <div class="plan90"><h4>Plan 90 jours</h4><ul id="plan90"></ul></div>
  </div>
</div></section>

<section id="annexes" class="card"><div class="wrap">
  <h2>Annexes & Opposabilité</h2>
  <div class="grid-2">
    <div><h4>Méthodologie de simulation</h4><ul id="methodo"></ul></div>
    <div class="small muted">Numérion Éducation™ — Rapport confidentiel. © <span id="year"></span>.</div>
  </div>
</div></section>

<script>
(function(){
  // Lire le payload depuis #payload=...
  const hash = new URLSearchParams(location.hash.slice(1));
  const b64 = hash.get('payload');
  if(!b64){ document.body.innerHTML = "<div class='wrap'><h1>Payload manquant</h1></div>"; return; }
  let data={}; try{ data = JSON.parse(atob(b64.replace(/-/g,'+').replace(/_/g,'/'))); }catch(e){
    document.body.innerHTML = "<div class='wrap'><h1>Payload invalide</h1></div>"; return;
  }

  const $ = s=>document.querySelector(s);
  const listTo=(sel,items=[])=>{ const el=$(sel); el.innerHTML=""; items.forEach(t=>{const li=document.createElement('li'); li.textContent=t; el.appendChild(li);});}
  const eur=v=>Number(v||0).toLocaleString('fr-FR',{style:'currency',currency:'EUR'});
  const labelsMonths=n=>Array.from({length:n},(_,i)=>`M${i+1}`);
  const ds=(label,data)=>({label,data:(data||[]),tension:.25,pointRadius:0});
  const line=(sel,cfg)=>{ const el=$(sel); if(!el) return; new Chart(el,{type:'line',data:{labels:cfg.labels,datasets:cfg.datasets},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{labels:{color:'#e6e6e6'}}},scales:{x:{ticks:{color:'#9ca3af'},grid:{color:'#222'}},y:{ticks:{color:'#9ca3af'},grid:{color:'#222'}}}}); }
  const bar=(sel,labels,dataArr)=>{ const el=$(sel); if(!el) return; new Chart(el,{type:'bar',data:{labels,datasets:[{label:'Montants',data:dataArr}]},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{labels:{color:'#e6e6e6'}}},scales:{x:{ticks:{color:'#9ca3af'},grid:{color:'#222'}},y:{ticks:{color:'#9ca3af'},grid:{color:'#222'}}}}); }

  // Bind
  $('#companyName').textContent = data.company?.name || '—';
  $('#period').textContent = data.company?.period || '—';
  $('#auditId').textContent = data.company?.auditId || '—';
  $('#auditDate').textContent = data.company?.date || '—';
  $('#commitHash').textContent = data.security?.commitHash || '';
  $('#reportUrl').textContent = data.reportUrl || '';
  $('#year').textContent = data.security?.year || new Date().getFullYear();
  document.getElementById('kpiCash').textContent   = eur(data.company?.cash);
  document.getElementById('kpiImpact').textContent = (data.executive?.impactScore||0)+"/100";
  document.getElementById('kpiDD').textContent     = (Number(data.executive?.drawdownMaxPct||0).toFixed(1))+" %";
  document.getElementById('kpiExit').textContent   = data.executive?.exitWindow||'—';

  listTo('#executiveBullets', data.executive?.bullets||[]);
  listTo('#liquidityBullets', data.liquidity?.bullets||[]);
  listTo('#complianceList', data.compliance?.items||[]);
  listTo('#recoList', data.recommendations?.steps||[]);
  listTo('#plan90', data.recommendations?.plan90||[]);
  listTo('#methodo', data.methodology||[]);

  // QR
  try { new QRCode(document.getElementById('qrcode'), { text: data.reportUrl || location.href, width: 92, height: 92 }); } catch(e){}

  // Graphiques
  const scen = data.scenarios||{};
  line('#chartOverview',{labels:labelsMonths(scen.horizonMonths||24),datasets:[
    ds('Baseline', scen.baseline),
    ds('Scénario 1 %', scen.series?.[0]?.monthly),
    ds('Scénario 3 %', scen.series?.[1]?.monthly),
    ds('Scénario 5 %', scen.series?.[2]?.monthly)
  ]});
  function buildScenario(key, serie, baseline, startCash){
    if(!serie) return;
    const el = document.getElementById('table'+key); if(!el) return;
    const sum=a=>(a||[]).reduce((x,y)=>x+y,0), bl=baseline||[];
    new Chart(document.getElementById('chart'+key),{type:'line',data:{labels:labelsMonths((serie.monthly||[]).length),datasets:[ds('Baseline',bl),ds(`Scénario ${serie.name}`,serie.monthly||[])]},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{labels:{color:'#e6e6e6'}}},scales:{x:{ticks:{color:'#9ca3af'},grid:{color:'#222'}},y:{ticks:{color:'#9ca3af'},grid:{color:'#222'}}}});
    el.innerHTML = `<thead><tr><th>Mois</th><th>Baseline</th><th>Scénario ${serie.name}</th><th>Écart</th></tr></thead>
      <tbody>${
        (serie.monthly||[]).map((v,i)=>{const b=bl[i]??bl.at(-1)??0;const g=v-b;
          return `<tr><td>M${i+1}</td><td>${eur(b)}</td><td>${eur(v)}</td><td>${g>=0?'+':''}${eur(g)}</td></tr>`}).join('')}
      </tbody>
      <tfoot><tr><th>Total</th><th>${eur(sum(bl)-(data.company?.cash||0))}</th><th>${eur(sum(serie.monthly||[])-(data.company?.cash||0))}</th><th>${eur(sum(serie.monthly||[])-sum(bl))}</th></tr></tfoot>`;
  }
  buildScenario('S1', scen.series?.[0], scen.baseline, data.company?.cash||0);
  buildScenario('S3', scen.series?.[1], scen.baseline, data.company?.cash||0);
  buildScenario('S5', scen.series?.[2], scen.baseline, data.company?.cash||0);

  // PDF + Hash
  document.getElementById('btnDownload').addEventListener('click', ()=>window.print());
  document.getElementById('btnHash').addEventListener('click', async ()=>{
    const blob = new Blob([document.documentElement.outerHTML], {type:'text/html'});
    const buf = await blob.arrayBuffer();
    const hash = await crypto.subtle.digest('SHA-256', buf);
    const hex = [...new Uint8Array(hash)].map(b=>b.toString(16).padStart(2,'0')).join('');
    document.getElementById('pdfHash').textContent = hex;
  });
})();
</script>
</body></html>
