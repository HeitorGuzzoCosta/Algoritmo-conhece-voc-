/* Camada de redesign — roda ANTES do script principal do index.html. Não envia dados a servidores. */
(()=>{
const css=`
.ring{--s:150px;width:var(--s);height:var(--s);border-radius:50%;padding:5px;background:conic-gradient(from 200deg,#2d7bff,#35e0ff,#8b5cff,#2d7bff);box-shadow:0 0 28px rgba(53,224,255,.35);flex:none}
.ring .ph{width:100%;height:100%;border-radius:50%;overflow:hidden;border:4px solid #050b1c;background:#0a1530}.ring img{width:100%;height:100%;object-fit:cover;object-position:50% 10%;transform:scale(1.55);transform-origin:50% 14%;display:block}
.eq-school{display:grid;grid-template-columns:auto 1fr;gap:22px;align-items:center;margin:22px 0;padding:22px;border:1px solid var(--line);border-radius:20px;background:linear-gradient(120deg,rgba(45,123,255,.18),rgba(5,10,26,.9) 60%)}
.eq-school img{height:78px;width:auto;display:block}
.eq-school p{margin:0;color:var(--tx)}.eq-school small{color:var(--mut)}
.eq-prof{display:flex;gap:26px;align-items:center;padding:26px;border-radius:24px;border:1px solid var(--pu);background:radial-gradient(500px 220px at 0 0,rgba(139,92,255,.28),transparent 70%),rgba(7,13,31,.9);box-shadow:0 0 40px rgba(139,92,255,.2)}
.eq-prof .ring{--s:190px;background:conic-gradient(from 100deg,#8b5cff,#35e0ff,#8b5cff)}
.eq-prof h3{font-size:1.9rem;margin:0;color:#fff}.eq-prof b{color:var(--cy);letter-spacing:.5px}
.eq-prof p{margin:6px 0 0}
.eq-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(190px,1fr));gap:18px;margin-top:22px}
.eq-st{display:flex;flex-direction:column;align-items:center;text-align:center;gap:12px;padding:22px 12px 18px;border-radius:18px;border:1px solid var(--line);background:linear-gradient(170deg,rgba(13,26,60,.9),rgba(5,10,26,.95));transition:transform .25s,border-color .25s,box-shadow .25s}
.eq-st:hover{transform:translateY(-4px);border-color:var(--cy);box-shadow:0 12px 30px rgba(45,123,255,.28)}
.eq-st h3{margin:0;font-size:1.08rem;color:#fff}.eq-st span{font-size:.78rem;letter-spacing:2px;color:var(--cy);font-weight:700}
.eq-st::after{content:"";width:70%;height:3px;border-radius:3px;background:linear-gradient(90deg,#2d7bff,#35e0ff)}
@media(max-width:700px){.eq-prof{flex-direction:column;text-align:center}.eq-school{grid-template-columns:1fr;text-align:center}.eq-school img{margin:auto}}
.hero h1{font-size:clamp(2.6rem,7vw,4.8rem)}
.hero .btns .btn.pri{box-shadow:0 0 0 1px rgba(53,224,255,.5),0 6px 30px rgba(39,196,255,.55)}
#bolha{margin-top:16px}#bolha svg{width:100%;height:auto;max-height:360px;border-radius:14px;background:radial-gradient(circle at 50% 50%,rgba(45,123,255,.16),rgba(3,5,12,.6) 70%);border:1px solid var(--line)}
#bolha text{font:600 12px system-ui,sans-serif;fill:#eaf1ff;text-anchor:middle;pointer-events:none}
#bolha circle{transition:r .5s,cx .5s,cy .5s,opacity .5s}
`;
var css2=`@media(min-width:1001px){nav a{padding:12px 8px!important;font-size:11px!important;letter-spacing:.5px!important}}`;
const st=document.createElement('style');st.textContent=css+css2;document.head.appendChild(st);

/* ---- Tela inicial: texto e CTAs pedidos ---- */
const hero=document.querySelector('#inicio');
if(hero){
 const ps=hero.querySelectorAll('p');
 const intro=[...ps].find(p=>p.textContent.startsWith('Algoritmos estão'));
 if(intro)intro.textContent='Os algoritmos estão presentes em nossas pesquisas, recomendações e experiências digitais. Descubra como identificam padrões, influenciam o que vemos e quais são os limites desse conhecimento.';
 const b=hero.querySelector('.btns');
 if(b)b.innerHTML='<a class="btn pri big" href="#conceito">▶ EXPLORAR O PROJETO</a><a class="btn sec big" href="#quiz">✦ TESTAR O ALGORITMO</a>';
 const sl=hero.querySelector('.slogan');if(sl)sl.textContent='O futuro em cada algoritmo.';
}

/* ---- Aba "Equipe do projeto" (dados exatamente como no PDF) ---- */
const alunos=[['Lisa Denadai','lisa-denadai'],['Heitor Guzzo','heitor-guzzo'],['Cauã Las-Cazas','caua-las-cazas'],['Gabriel Geber','gabriel-geber'],['Júlia Andrade','julia-andrade'],['Ágatha Freitas','agatha-freitas'],['Lorenzo Gualberto','lorenzo-gualberto'],['Nikolas Beijamin','nikolas-beijamin'],['Valentina Manhanine','valentina-manhanine']];
const sec=document.createElement('section');sec.id='equipe';sec.dataset.tab='equipe';
sec.innerHTML=`<h2><span>Equipe</span>Quem está por trás do projeto?</h2>
<p>“O algoritmo conhece você?” foi desenvolvido por estudantes do Colégio Franciscano Imaculada Conceição, com orientação da professora responsável.</p>
<div class="eq-school"><img src="foto-logo-colegio.png" alt="Logotipo do Colégio Franciscano Imaculada Conceição"><div><p><b>Colégio Franciscano Imaculada Conceição</b></p><small>Instituição responsável pelo projeto</small></div></div>
<div class="eq-prof"><div class="ring"><div class="ph"><img src="foto-dulcineia-mara.jpg" alt="Retrato da professora Dulcineia Mara"></div></div><div><b>PROFESSORA RESPONSÁVEL</b><h3>Dulcineia Mara</h3><p>Professora do Colégio Franciscano Imaculada Conceição.</p></div></div>
<h3 style="margin-top:30px">Estudantes</h3>
<div class="eq-grid">${alunos.map(a=>`<article class="eq-st"><div class="ring"><div class="ph"><img src="foto-${a[1]}.jpg" alt="Retrato de ${a[0]}" loading="lazy"></div></div><h3>${a[0]}</h3><span>ESTUDANTE</span></article>`).join('')}</div>
<div class="cta"><button class="sec" data-go="inicio">↑ VOLTAR AO INÍCIO</button></div>`;
document.querySelector('main').appendChild(sec);
const ul=document.querySelector('#nav ul');
if(ul)ul.insertAdjacentHTML('beforeend','<li><a href="#equipe">Equipe</a></li>');
const fl=document.querySelector('.fl');if(fl)fl.insertAdjacentHTML('beforeend','<a href="#equipe">Equipe</a>');
const tl=document.querySelector('.tiles');if(tl)tl.insertAdjacentHTML('beforeend','<a href="#equipe"><i>👥</i>Equipe</a>');
const bg=document.createElement('style');bg.textContent='body[data-t=equipe]{--x:50%;--c2:139,92,255}';document.head.appendChild(bg);

/* ---- Experimento: representação visual da "bolha" ---- */
const sim=document.querySelector('#sim'),out=document.querySelector('#out');
if(sim&&out){
 const box=document.createElement('div');box.id='bolha';
 box.innerHTML=`<h3>Saia da bolha</h3><p>Cada círculo é um assunto. Quanto mais interações, maior e mais próximo do centro ele fica. Assuntos sem interação ficam pequenos e afastados.</p><svg viewBox="0 0 700 340" role="img" aria-label="Mapa de assuntos: os mais escolhidos ficam agrupados no centro"></svg><p><small>Representação simplificada: algoritmos reais usam muitos outros sinais e nem sempre formam bolhas para todas as pessoas.</small></p><div class="btns"><button class="pri" id="outros">EXPLORAR OUTROS PONTOS DE VISTA</button></div>`;
 out.after(box);
 const svg=box.querySelector('svg');
 const draw=()=>{
  const keys=Object.keys(T),sc={};
  keys.forEach(k=>sc[k]=(ints.has(k)?2:0)+acts.filter(a=>a[1]===k).reduce((s,a)=>s+W[a[0]],0));
  const act=keys.filter(k=>sc[k]>0).sort((a,b)=>sc[b]-sc[a]),rest=keys.filter(k=>sc[k]===0);
  let h='';
  act.forEach((k,i)=>{const a=i*2.4,d=i?55+i*14:0,r=Math.min(62,26+sc[k]*5);
   h+=`<circle cx="${350+Math.cos(a)*d}" cy="${170+Math.sin(a)*d*.6}" r="${r}" fill="rgba(45,123,255,.55)" stroke="#35e0ff" stroke-width="2"/><text x="${350+Math.cos(a)*d}" y="${174+Math.sin(a)*d*.6}">${T[k][0]}</text>`});
  rest.forEach((k,i)=>{const a=i/Math.max(rest.length,1)*6.283+.5;
   h+=`<circle cx="${350+Math.cos(a)*285}" cy="${170+Math.sin(a)*135}" r="20" fill="rgba(139,92,255,.25)" stroke="#8b5cff" stroke-dasharray="4 4"/><text x="${350+Math.cos(a)*285}" y="${174+Math.sin(a)*135}" style="font-size:10px;fill:#a9b8d6">${T[k][0]}</text>`});
  svg.innerHTML=h||'<text x="350" y="170">Escolha interesses e simule para ver o mapa.</text>';
 };
 sim.addEventListener('click',()=>setTimeout(draw,600));
 ['clr','rst'].forEach(i=>document.getElementById(i).addEventListener('click',()=>setTimeout(draw,0)));
 box.querySelector('#outros').onclick=()=>{
  const keys=Object.keys(T).filter(k=>!ints.has(k)&&!acts.some(a=>a[1]===k));
  if(!keys.length||(!ints.size&&!acts.length)){toast('Simule primeiro com alguns interesses.');return}
  const k=keys[Math.floor(Math.random()*keys.length)];acts.push(['assistir',k]);drawActs();sim.click();toast('Você explorou um assunto novo: '+T[k][0]);
 };
 addEventListener("load",draw);
}
})();
