/* SJM Coffee. To add or change menu items, edit the P list below.
   Each item: [slug, name, category, description, price, badge, available(1/0)]
   The slug is also the image file name: images/products/<slug>.jpg */
const FALLBACK=[
["caramel-macchiato", "Caramel Macchiato", "Coffee", "Espresso, steamed milk, vanilla and a caramel drizzle.", 160, "Best seller", 1, "USA"],
["spanish-latte", "Spanish Latte", "Coffee", "Sweet condensed milk meets bold espresso. Hot or iced.", 165, "Best seller", 1, "Spain"],
["cappuccino", "Cappuccino", "Coffee", "Equal parts espresso, steamed milk and thick foam.", 130, "Popular", 1, "Italy"],
["cafe-latte", "Café Latte", "Coffee", "Smooth espresso with silky steamed milk.", 140, "", 1, "Italy"],
["americano", "Americano", "Coffee", "Double espresso topped with hot water. Clean and strong.", 110, "", 1, "USA"],
["espresso", "Espresso", "Coffee", "A concentrated double shot with golden crema.", 90, "", 1, "Italy"],
["iced-mocha", "Iced Mocha", "Coffee", "Espresso, chocolate, milk and ice. Dessert in a cup.", 170, "Popular", 1, "USA"],
["cold-brew", "Cold Brew", "Coffee", "Steeped 18 hours for a smooth, low-acid taste.", 150, "", 0, "USA"],
["ube-cheese-pandesal", "Ube Cheese Pandesal", "Bread", "Soft purple pandesal filled with melty cheese. Pack of 6.", 75, "Best seller", 1, "Philippines"],
["classic-pandesal", "Classic Pandesal", "Bread", "Warm, fluffy Filipino bread rolls. Pack of 6.", 45, "Popular", 1, "Philippines"],
["butter-croissant", "Butter Croissant", "Bread", "Flaky, golden and made with real butter.", 85, "Best seller", 1, "France"],
["ensaymada", "Ensaymada", "Bread", "Sweet brioche topped with butter, sugar and cheese.", 70, "", 1, "Philippines"],
["cinnamon-roll", "Cinnamon Roll", "Bread", "Gooey cinnamon swirl with cream cheese frosting.", 95, "", 1, "Sweden"],
["banana-bread", "Banana Bread", "Bread", "Moist loaf slice with ripe bananas and walnuts.", 80, "", 0, "USA"],
["kapeng-barako", "Kapeng Barako", "Coffee", "Bold, smoky Batangas coffee with a strong aroma. Best black.", 120, "Popular", 1, "Philippines"],
["turkish-coffee", "Turkish Coffee", "Coffee", "Finely ground coffee simmered in a cezve. Rich, thick and aromatic.", 135, "", 1, "Turkey"],
["vietnamese-egg-coffee", "Vietnamese Egg Coffee", "Coffee", "Strong coffee topped with sweet, creamy whipped egg yolk.", 175, "New", 1, "Vietnam"],
["cortado", "Cortado", "Coffee", "Espresso cut with a splash of warm milk. Balanced and smooth.", 125, "", 1, "Spain"],
["flat-white", "Flat White", "Coffee", "Double espresso with velvety microfoam milk.", 145, "", 1, "Australia"],
["cafe-cubano", "Café Cubano", "Coffee", "Sweet, strong espresso shot whipped with sugar.", 115, "", 1, "Cuba"],
["affogato", "Affogato", "Coffee", "A scoop of vanilla ice cream drowned in hot espresso.", 150, "Popular", 1, "Italy"],
["cafe-de-olla", "Café de Olla", "Coffee", "Mexican coffee spiced with cinnamon and brown sugar.", 140, "New", 1, "Mexico"],
["dalgona-coffee", "Dalgona Coffee", "Coffee", "Whipped coffee cloud over cold milk.", 155, "", 1, "South Korea"],
["yuenyeung", "Yuenyeung", "Coffee", "Hong Kong favorite that mixes coffee and milk tea.", 150, "", 1, "Hong Kong"],
["einspanner", "Einspänner", "Coffee", "Viennese coffee crowned with thick whipped cream.", 160, "", 0, "Austria"],
["ethiopian-buna", "Ethiopian Buna", "Coffee", "Fruity, floral pour-over from the birthplace of coffee.", 165, "", 1, "Ethiopia"],
["kopi-susu", "Kopi Susu", "Coffee", "Indonesian strong coffee with sweet condensed milk.", 130, "", 1, "Indonesia"],
["cafe-au-lait", "Café au Lait", "Coffee", "French-style brewed coffee with equal parts hot milk.", 125, "", 1, "France"],
["baguette", "Baguette", "Bread", "Crackly crust and a soft, airy crumb.", 95, "Popular", 1, "France"],
["brioche", "Brioche", "Bread", "Rich, buttery and slightly sweet.", 100, "", 1, "France"],
["focaccia", "Focaccia", "Bread", "Olive oil flatbread with rosemary and sea salt.", 110, "New", 1, "Italy"],
["pretzel", "Soft Pretzel", "Bread", "Chewy, golden and sprinkled with salt.", 85, "", 1, "Germany"],
["naan", "Garlic Naan", "Bread", "Soft, charred flatbread brushed with garlic butter.", 90, "", 1, "India"],
["pita", "Pita Bread", "Bread", "Pillowy pocket bread, great with dips. Pack of 4.", 80, "", 1, "Greece"],
["pao-de-queijo", "Pão de Queijo", "Bread", "Chewy cheese bread bites. Pack of 6.", 95, "Popular", 1, "Brazil"],
["melonpan", "Melonpan", "Bread", "Sweet bun with a crisp, cookie-like top.", 90, "", 1, "Japan"],
["shokupan", "Shokupan", "Bread", "Fluffy Japanese milk bread, thick-cut loaf.", 120, "New", 1, "Japan"],
["challah", "Challah", "Bread", "Braided, eggy loaf with a golden shine.", 130, "", 1, "Israel"],
["bagel", "Plain Bagel", "Bread", "Dense, chewy and boiled before baking. Great with cream cheese.", 75, "", 1, "USA"],
["concha", "Concha", "Bread", "Soft sweet bun with a shell-patterned sugar topping.", 70, "", 1, "Mexico"],
["roti-canai", "Roti Canai", "Bread", "Flaky, layered flatbread served with a curry dip.", 85, "", 1, "Malaysia"],
["cheese-danish", "Cheese Danish", "Bread", "Flaky pastry with a sweet cream cheese center.", 100, "", 1, "Denmark"],
["irish-soda-bread", "Irish Soda Bread", "Bread", "Rustic, no-yeast loaf with a tender crumb.", 105, "", 0, "Ireland"],
["sjm-home-brew-kit", "SJM Home Brew Kit", "Coffee", "Our one-button brewer with SJM pods and a mug. Make our signature coffee at home.", 2499, "New", 1, "Philippines"]];
let P=FALLBACK,src="built-in backup data";
const SZ={S:-15,M:0,L:25};
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const load=(k,d)=>{try{return JSON.parse(localStorage.getItem(k))||d}catch(e){return d}};
const store=(k,v)=>{try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}};
const peso=n=>"₱"+n.toLocaleString();
let cart=load("sjmcart2",{}),wish=load("sjmwish",[]),cat="All";
const ph=(i,x="")=>`<div class="ph">${x}<span class="phn">${P[i][1]}</span><img src="images/products/${P[i][0]}.jpg" alt="${P[i][1]}" loading="lazy" onerror="this.remove()"></div>`;
function card(i){const p=P[i];return `<article class="card pc"><div data-open="${i}">${ph(i,(p[5]?`<span class="tag">${p[5]}</span>`:"")+"")}</div>
<button class="hb" data-w="${i}" aria-label="Save ${p[1]}">${wish.includes(i)?"♥":"♡"}</button>
<div class="cb"><span class="cat">${p[2]} · ${p[7]}</span><h3>${p[1]}</h3><p>${p[3]}</p><div class="row"><span class="price">${peso(p[4])}</span>${p[6]?`<button class="btn bs" data-open="${i}">View details</button>`:`<span class="out">Sold out today</span>`}</div></div></article>`}
const feat=()=>$("#featured").innerHTML=P.map((p,i)=>p[5]=="Best seller"?card(i):"").join("");
$("#gal").innerHTML=[1,2,3,4,5,6].map(n=>`<div class="ph"><span class="phn">Photo ${n}<br><small>images/gallery/g${n}.jpg</small></span><img src="images/gallery/g${n}.jpg" alt="SJM Coffee photo ${n}" loading="lazy" onerror="this.remove()"></div>`).join("");
function list(){const q=$("#q").value.toLowerCase().trim(),so=$("#so").value,ct=$("#ctry").value||"All";
let r=P.map((p,i)=>i).filter(i=>(cat=="All"||(cat=="Saved"?wish.includes(i):P[i][2]==cat))&&(ct=="All"||P[i][7]==ct)&&(P[i][1]+P[i][3]+P[i][7]).toLowerCase().includes(q));
if(so=="1")r.sort((a,b)=>P[a][4]-P[b][4]);if(so=="2")r.sort((a,b)=>P[b][4]-P[a][4]);if(so=="3")r.sort((a,b)=>P[a][1].localeCompare(P[b][1]));
$("#plist").innerHTML=r.map(card).join("");$("#none").hidden=r.length>0}
$("#q").oninput=list;$("#so").onchange=list;$("#ctry").onchange=list;
$$(".chip[data-c]").forEach(b=>b.onclick=()=>{cat=b.dataset.c;$$(".chip[data-c]").forEach(x=>x.classList.toggle("on",x==b));list()});
/* product modal */
let cur=0,qty=1;
function open(i){cur=i;qty=1;const p=P[i],c=p[2]=="Coffee";
$("#pmc").innerHTML=`${ph(i)}<div><span class="cat">${p[2]} · ${p[7]}</span><h2 style="font-size:1.7rem">${p[1]}</h2><p>${p[3]}</p>
${c?`<b>Size</b><div class="sz">${["S","M","L"].map(s=>`<label><input type="radio" name="sz" value="${s}" ${s=="M"?"checked":""}><span>${s}<br><small>${peso(p[4]+SZ[s])}</small></span></label>`).join("")}</div>`:""}
<div class="row" style="margin:14px 0"><div class="qt"><button data-q="-1" aria-label="Less">−</button><b id="qv">1</b><button data-q="1" aria-label="More">+</button></div><span class="price" id="mp">${peso(p[4]+(c?SZ.M:0))}</span></div>
<button class="btn" style="width:100%" id="madd">Add to cart</button></div>`;
$("#pm").showModal();mp()}
function mp(){const p=P[cur],s=($("input[name=sz]:checked")||{}).value||"M";$("#qv").textContent=qty;$("#mp").textContent=peso((p[4]+(p[2]=="Coffee"?SZ[s]:0))*qty)}
$("#pm").addEventListener("change",mp);
$("#pm").addEventListener("click",e=>{const q=e.target.closest("[data-q]");if(q){qty=Math.max(1,qty+ +q.dataset.q);mp()}
if(e.target.id=="madd"){const s=P[cur][2]=="Coffee"?$("input[name=sz]:checked").value:"-",k=cur+"|"+s;cart[k]=(cart[k]||0)+qty;saveCart();$("#pm").close();$("#drawer").classList.add("on")}
if(e.target==$("#pm"))$("#pm").close()});
$("#pmx").onclick=()=>$("#pm").close();
document.addEventListener("click",e=>{const o=e.target.closest("[data-open]"),w=e.target.closest("[data-w]"),m=e.target.closest("[data-m]"),a=e.target.closest("[data-a]");
if(o&&P[o.dataset.open][6])open(+o.dataset.open);
if(w){const i=+w.dataset.w;wish=wish.includes(i)?wish.filter(x=>x!=i):[...wish,i];store("sjmwish",wish);$$(`[data-w="${i}"]`).forEach(b=>b.textContent=wish.includes(i)?"♥":"♡");if(cat=="Saved")list()}
if(m){const k=m.dataset.m;if(--cart[k]<=0)delete cart[k];saveCart()}
if(a){cart[a.dataset.a]++;saveCart()}});
/* cart */
const price=k=>{const [i,s]=k.split("|");return P[i][4]+(s=="-"?0:SZ[s])};
const sub=()=>Object.entries(cart).reduce((t,[k,n])=>t+price(k)*n,0);
function disc(){const c=$("#cp").value.trim().toUpperCase(),s=sub();
if(c=="WELCOME10")return Math.round(s*.1);
if(c=="SJM2"){let n=0;for(const[k,q]of Object.entries(cart))if(P[k.split("|")[0]][2]=="Coffee")n+=q;return n>=2?45:0}return 0}
function saveCart(){store("sjmcart2",cart);draw()}
function draw(){const e=Object.entries(cart);$("#cc").textContent=e.reduce((s,[,n])=>s+n,0);
$("#cartl").innerHTML=e.length?e.map(([k,n])=>{const [i,s]=k.split("|");return `<div class="ci">${ph(+i)}<div class="t"><b>${P[i][1]}</b>${s=="-"?"":" ("+s+")"}<br>${peso(price(k))}</div><div class="qt"><button data-m="${k}" aria-label="Remove one">−</button>${n}<button data-a="${k}" aria-label="Add one">+</button></div></div>`}).join(""):"<p class='sub'>Your cart is empty. Open an item on the menu to add it.</p>";
const s=sub(),d=disc(),f=$("#cm").value=="Delivery"&&s?50:0;
$("#st").textContent=peso(s);$("#ds").textContent="−"+peso(d);$("#dl").textContent=peso(f);$("#tot").textContent=peso(s-d+f)}
$("#cp").oninput=draw;$("#cm").onchange=draw;
$("#cartBtn").onclick=()=>$("#drawer").classList.add("on");$("#cx").onclick=()=>$("#drawer").classList.remove("on");
$("#co").onsubmit=ev=>{ev.preventDefault();const n=$("#cn").value.trim(),ph=$("#cph").value.trim(),er=$("#ce"),ok=$("#ook");ok.style.display="none";
if(!Object.keys(cart).length)return er.textContent="Add at least one item first.";
if(!n)return er.textContent="Enter your name.";
if(!/^[0-9+\s-]{7,}$/.test(ph))return er.textContent="Enter a valid phone number.";
er.textContent="";const t=$("#tot").textContent,no="SJM-"+Math.floor(1000+Math.random()*9000),mode=$("#cm").value;
const o=load("sjmorders",[]);o.push({no,n,ph,mode,pay:$("#cy").value,items:cart,t,at:new Date().toISOString()});store("sjmorders",o);
ok.textContent=`Thanks, ${n}! Order ${no} is confirmed (${mode}, ${$("#cy").value}). Total ${t}. We'll have it ready in about 15 minutes.`;ok.style.display="block";cart={};saveCart()};
/* theme, router, counters, countdown */
const th=load("sjmtheme","light");document.documentElement.dataset.theme=th;$("#theme").textContent=th=="dark"?"☀️":"🌙";
$("#theme").onclick=()=>{const t=document.documentElement.dataset.theme=="dark"?"light":"dark";document.documentElement.dataset.theme=t;store("sjmtheme",t);$("#theme").textContent=t=="dark"?"☀️":"🌙"};
const pages=["home","features","products","contact"];
function route(){let h=location.hash.slice(1);if(!pages.includes(h))h="home";
pages.forEach(p=>$("#"+p).classList.toggle("on",p==h));$$("nav a").forEach(a=>a.classList.toggle("on",a.dataset.p==h));
$("#drawer").classList.remove("on");scrollTo(0,0);if(h=="products")list();if(h=="home")count()}
addEventListener("hashchange",route);
function count(){$$("[data-n]").forEach(el=>{const to=+el.dataset.n,d=el.dataset.d?1:0;let t=0;const id=setInterval(()=>{t+=1/40;const v=to*Math.min(t,1);el.textContent=d?v.toFixed(1):Math.round(v).toLocaleString();if(t>=1)clearInterval(id)},25)})}
setInterval(()=>{const n=new Date(),e=new Date(n);e.setHours(24,0,0,0);const s=Math.floor((e-n)/1000),f=x=>String(x).padStart(2,"0");$("#cd").textContent=`${f(Math.floor(s/3600))}:${f(Math.floor(s%3600/60))}:${f(s%60)}`},1000);
/* forms */
$("#d").valueAsDate=new Date();
$("#cf").onsubmit=ev=>{ev.preventDefault();let bad=0;
const chk=(id,er,msg,f)=>{const v=$("#"+id).value.trim();$("#"+er).textContent=f(v)?"":msg;if(!f(v))bad=1};
chk("n","en","Enter your name.",v=>v);chk("e","ee","Enter a valid email like name@email.com.",v=>/^\S+@\S+\.\S+$/.test(v));chk("m","em","Write a message.",v=>v);
if(bad)return;const l=load("sjmmsgs",[]);l.push({n:$("#n").value,e:$("#e").value,s:$("#s").value,d:$("#d").value,m:$("#m").value});store("sjmmsgs",l);
const o=$("#cok");o.textContent=`Thank you, ${$("#n").value.trim()}! Your message was sent. We'll reply to ${$("#e").value.trim()} soon.`;o.style.display="block";ev.target.reset();$("#d").valueAsDate=new Date()};

/* ===== Email marketing campaign (welcome email mockup) ===== */
const SUBJ="Check out our new product: SJM Coffee Home Brew Kit ☕";
const FROM="SJM Coffee <sjmcoffee.business@gmail.com>";
const esc=t=>String(t).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const STEPS=["Fill the reservoir with water","Add your SJM pod","Press one button","Wait till ready","Enjoy your coffee"];
const TOP=[["caramel-macchiato","Caramel Macchiato"],["spanish-latte","Spanish Latte"],["kapeng-barako","Kapeng Barako"],["ube-cheese-pandesal","Ube Cheese Pandesal"],["butter-croissant","Butter Croissant"]];
function emailHTML(a,n){
const F="font-family:Poppins,Arial,sans-serif";
const steps=STEPS.map((t,i)=>`<td width="20%" valign="top" align="center" style="padding:0 4px"><img src="images/email/step${i+1}.jpg" width="100%" alt="${t}" style="display:block;border-radius:6px"><div style="${F};font-weight:600;font-size:9px;letter-spacing:1.5px;text-transform:uppercase;color:#5a4f45;margin-top:10px;line-height:1.6">${t}</div></td>`).join("");
const tiles=TOP.map(([s,t])=>`<td width="20%" style="padding:0 4px"><a href="index.html#products" style="display:block;position:relative;height:92px;background:linear-gradient(135deg,#d48f3e,#8f5a1d);border-radius:4px;overflow:hidden;text-decoration:none;color:#fff6d6;font:600 11px Poppins,Arial,sans-serif;text-align:center"><span style="position:absolute;left:0;right:0;top:50%;transform:translateY(-50%);line-height:1.3;padding:0 4px">${t}</span><img src="images/products/${s}.jpg" alt="${t}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover" onerror="this.remove()"></a></td>`).join("");
const mono="font-family:'Cutive Mono','Courier New',monospace";
return `<!DOCTYPE html><html><head><meta charset="utf-8"><link href="https://fonts.googleapis.com/css2?family=Cutive+Mono&family=Fredoka:wght@600&family=Kaushan+Script&family=Poppins:wght@400;500;600&family=Sue+Ellen+Francisco&display=swap" rel="stylesheet"></head>
<body style="margin:0;background:#d9d2c3;${F};color:#231f20"><table width="100%" cellpadding="0" cellspacing="0"><tr><td align="center" style="padding:16px 8px">
<table width="640" cellpadding="0" cellspacing="0" style="max-width:640px;width:100%;background:#fff7e6">
<tr><td style="background:#1b271e;padding:10px"><img src="images/email/hero.jpg" width="100%" alt="Check out our new product! SJM Coffee Home Brew Kit" style="display:block"></td></tr>
<tr><td style="padding:34px 40px 26px;font-size:15px;line-height:1.65"><div style="font:400 32px 'Kaushan Script',cursive;line-height:1.3;margin-bottom:14px">Hi ${esc(n||"coffee lover")},</div>
<p style="margin:0 0 18px">We're excited to introduce our new <b>SJM Coffee Home Brew Kit</b>, created for coffee lovers like you who want to enjoy our signature flavor, right from the comfort of home.</p>
<p style="margin:0">This kit includes everything you need to brew the same quality coffee our baristas prepare every morning. Whether you're starting your day, taking a break, or enjoying a quiet moment, the Home Brew Kit brings the SJM Coffee experience to your own kitchen.</p></td></tr>
<tr><td style="padding:0 20px 18px"><div style="background:#e7ddcf;border-radius:16px;padding:18px 14px 22px"><div style="font:600 20px Fredoka,Arial,sans-serif;letter-spacing:1px;text-transform:uppercase;text-align:center;margin-bottom:14px">How to make your SJM coffee</div><table width="100%" cellpadding="0" cellspacing="0"><tr>${steps}</tr></table></div></td></tr>
<tr><td style="padding:0 20px 26px"><div style="background:#684b33;border-radius:16px;padding:18px 14px 22px;text-align:center"><div style="font:400 30px 'Sue Ellen Francisco',cursive;color:#fff7e6;margin-bottom:12px">Browse Our Other Products</div><table width="100%" cellpadding="0" cellspacing="0"><tr>${tiles}</tr></table>
<p style="margin:18px 0 0"><a class="cta" href="index.html#products" style="display:inline-block;background:#e7ddcf;color:#3a2e24;text-decoration:none;padding:12px 24px;border-radius:12px;font-size:15px">Continue At Our Website →</a></p></div></td></tr>
<tr><td style="background:#1b271e;color:#e8e0cc;padding:22px 26px 14px"><table width="100%" cellpadding="0" cellspacing="0" style="border-top:1px solid #8a948a;border-bottom:1px solid #8a948a"><tr>
<td width="76" style="padding:14px 10px 14px 0;border-right:1px solid #8a948a"><img src="images/email/footer-logo.png" width="62" alt="SJM Coffee" style="display:block"></td>
<td valign="top" style="padding:14px 10px 14px 14px;${mono};font-size:10px;line-height:1.7"><div style="font-size:15px;font-variant:small-caps">Contact Us</div><span style="white-space:nowrap">• sjmcoffee.business@gmail.com</span><br>• (63+) 916 321 7890</td>
<td valign="top" style="padding:14px 8px;${mono};font-size:11px;line-height:1.7"><div style="font-size:15px;font-variant:small-caps">Visit Our Branch</div>• 5th Floor Bart Mall - Angeles City - Pampanga</td>
<td valign="middle" align="right" style="padding:14px 0 14px 8px;white-space:nowrap"><a href="https://facebook.com/sjmcoffee"><img src="images/email/fb.png" width="24" alt="Facebook"></a> <a href="https://instagram.com/sjmcoffee"><img src="images/email/ig.png" width="24" alt="Instagram"></a> <a href="https://tiktok.com/@sjmcoffee"><img src="images/email/tt.png" width="24" alt="TikTok"></a></td></tr></table>
<div style="text-align:center;font-weight:600;font-size:13px;padding:14px 0 6px">© 2026 Copyright - SJMcoffee.com</div>
<div style="text-align:center;font-size:10px;color:#9aa397">You're receiving this because ${esc(a)} subscribed on our website. <u>Unsubscribe</u></div></td></tr>
</table></td></tr></table></body></html>`}
function showEmail(a,n){$("#eh").innerHTML=`<b>From:</b> ${esc(FROM)}<br><b>To:</b> ${esc(n?n+" <"+a+">":a)}<br><b>Subject:</b> ${SUBJ}`;
const fr=$("#ef");fr.srcdoc=emailHTML(a,n);fr.dataset.a=a;fr.dataset.n=n||"";
fr.onload=()=>{try{fr.contentDocument.querySelectorAll('a[href*="index.html#"]').forEach(l=>l.onclick=e=>{e.preventDefault();$("#mailm").close();location.hash=l.getAttribute("href").split("#")[1]})}catch(e){}};$("#mailm").showModal()}
$("#emx").onclick=()=>$("#mailm").close();
$("#mailm").addEventListener("click",e=>{if(e.target==$("#mailm"))$("#mailm").close()});
$("#edl").onclick=async()=>{let h=emailHTML($("#ef").dataset.a||"you@email.com",$("#ef").dataset.n);
for(const s of new Set([...h.matchAll(/src="(images\/[^"]+)"/g)].map(m=>m[1]))){try{const r=await fetch(s);if(!r.ok)continue;const b=await r.blob();
const u=await new Promise(ok=>{const f=new FileReader();f.onload=()=>ok(f.result);f.readAsDataURL(b)});h=h.split(`src="${s}"`).join(`src="${u}"`)}catch(e){}}
const url=URL.createObjectURL(new Blob([h],{type:"text/html"})),l=document.createElement("a");l.href=url;l.download="sjm-welcome-email.html";l.click();URL.revokeObjectURL(url)};
$("#nf").onsubmit=ev=>{ev.preventDefault();const a=$("#ne").value.trim(),n=$("#nm").value.trim(),l=load("sjmnews",[]);
if(!l.some(x=>(x.email||x)==a))l.push({email:a,name:n,at:new Date().toISOString()});store("sjmnews",l);ev.target.reset();
$("#nok").textContent="Sending your welcome email...";
setTimeout(()=>{$("#nok").textContent="You're subscribed! Your welcome email is open now.";showEmail(a,n)},900)};

/* ===== Data integration: GET from REST API, then JSON file, then backup ===== */
async function getJSON(u){const r=await fetch(u);if(!r.ok)throw new Error(u);return r.json()}
const toRow=o=>[o.slug,o.name,o.category,o.description,o.price,o.badge||"",o.available?1:0,o.country||""];
async function init(){
for(const [u,label] of [["api/products","REST API (GET /api/products)"],["data/products.json","JSON file (data/products.json)"]]){
try{const d=await getJSON(u);if(Array.isArray(d)&&d.length){P=d.map(toRow);src=label;break}}catch(e){}}
const el=$("#src");if(el)el.textContent="Menu data source: "+src;
const cs=[...new Set(P.map(p=>p[7]))].filter(Boolean).sort();
$("#ctry").innerHTML='<option value="All">All countries</option>'+cs.map(c=>`<option>${c}</option>`).join("");
$("#world").innerHTML=cs.map(c=>`<button class="chip" data-country="${c}">${c}</button>`).join("");
const mi=document.querySelector('[data-n="14"]');if(mi)mi.dataset.n=P.length;
feat();draw();route()}
$("#world").onclick=e=>{const b=e.target.closest("[data-country]");if(!b)return;cat="All";$$(".chip[data-c]").forEach(x=>x.classList.toggle("on",x.dataset.c=="All"));$("#ctry").value=b.dataset.country;$("#q").value="";location.hash="products"};
init();
