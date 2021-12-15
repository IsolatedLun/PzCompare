var A=Object.defineProperty,F=Object.defineProperties;var P=Object.getOwnPropertyDescriptors;var w=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable;var k=(a,t,i)=>t in a?A(a,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):a[t]=i,y=(a,t)=>{for(var i in t||(t={}))M.call(t,i)&&k(a,i,t[i]);if(w)for(var i of w(t))R.call(t,i)&&k(a,i,t[i]);return a},C=(a,t)=>F(a,P(t));import{u as L,a as D,j as n,b as e,c as b,d as H,e as j,r as x,L as g,F as I,B as T,R as O,f as S,g as K,h as E,i as z,P as q}from"./vendor.8db1abed.js";const G=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))o(l);new MutationObserver(l=>{for(const r of l)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function i(l){const r={};return l.integrity&&(r.integrity=l.integrity),l.referrerpolicy&&(r.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?r.credentials="include":l.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(l){if(l.ep)return;l.ep=!0;const r=i(l);fetch(l.href,r)}};G();const v=()=>L(),m=D,W="https://pzwiki.net/",U="https://pz-compare.herokuapp.com/",J=["MaxRange","MaxDamage","WeaponLength","DoorDamage","TreeDamage","Weight","MinRange","SwingTime","BaseSpeed","MinDamage","MaxHitCount","MinAngle","CriticalChange","ConditionMax","JamGunChance","StopPower","ReloadTime","AimingTime","MaxAmmo","SoundRadius","RecoilDelay","ProjectileCount","Calories"],V=({obj:a,diff:t,showAll:i=!1,isFilter:o})=>{let l=a.obj,r=a.images,c=m(s=>s.options.filters);const h=(s,d)=>n("tr",{className:"stat",children:[e("th",{children:s}),e("td",{children:l[s]}),e("td",{className:"pct",children:t[s]?`+${t[s]}%`:null})]},d),f=(s,d)=>{if(i&&!o)return h(s,d);if(o){if(c.includes(s))return h(s,d)}else if(J.includes(s))return h(s,d)};return n("div",{className:"object",children:[n("header",{className:"obj-header",children:[e("p",{className:"obj-title",children:l.DisplayName}),e("div",{className:"obj-icon",children:e("img",{"aria-label":l.DisplayName,src:r?W+r.icon:"",loading:"lazy"})})]}),e("table",{className:"stats",children:e("tbody",{children:Object.keys(l).map((s,d)=>f(s,d))})})]})},$=({data:a,showAll:t})=>{const i=m(o=>o.options.isFilter);return e("div",{className:"objects",id:"objects",children:a.status==="fulfilled"?a.items.map((o,l)=>e(V,{obj:o,diff:a.diffs[l],showAll:t,isFilter:i})):null})},N=(a=!1)=>{const t=document.getElementById("progress-bar");a?(t.style.width="0",t.style.display="none"):t.style.width="100%",t.style.display="block"},X=a=>{const t=document.getElementById("popup"),i=t.childNodes[0];i.textContent=a,t.classList.contains("active")||(t.classList.add("active"),setTimeout(()=>{t.classList.remove("active")},2500))},p=(a,t)=>{document.getElementById(a).classList.toggle(t)},B=a=>{const t=a.split(" ");return t.forEach((i,o,l)=>{l[o]=i.charAt(0).toUpperCase()+i.substring(1)}),t.join("_")},Z=(a,t,i)=>b.get(U+"pz/"+B(a)+"/with/"+B(t)+"?filter="+i),Q={items:[],diffs:[],status:"idle"},u=H("objs/fetchObjs",async(a,{rejectWithValue:t})=>{const{objs:i,showAll:o}=a;try{return(await Z(i[0],i[1],o)).data}catch(l){return t(l.response.data.detail)}}),Y=j({name:"objects",initialState:Q,reducers:{},extraReducers:a=>{a.addCase(u.pending,()=>{N()}),a.addCase(u.fulfilled,(t,i)=>{N(!0),t.items=[i.payload[0],i.payload[1]],t.diffs=i.payload.diffs,t.status="fulfilled"}),a.addCase(u.rejected,(t,i)=>{N(!0),X(i.payload),t.status="rejected"})}});var ee=["Hand Axe","Stone Axe","Axe","Wood Axe","Acoustic Guitar","Badminton Racket","Barbell","Baseball Bat","Broom","Canoe Paddle","Canoe Paddle","Chainsaw","Crowbar","Electric Bass","Electric Guitar","Fishing Rod","Garden Hoe","Golf Club","Hockey Stick","Ice Hockey Stick","Keytar","Lacrosse Stick","Leaf Rake","Nightstick","Pickaxe","Plank","Pool Cue","Rake","Saxophone","Shovel","Sledgehammer","Snow Shovel","Spiked Baseball Bat","Spiked Plank","Tennis Racket","Trumpet","Ball-peen Hammer","Banjo","Chair Leg","Club Hammer","Dumbbell","Drumstick","Flute","Frying Pan","Griddle Pan","Hammer","Lead Pipe","Metal Bar","Metal Pipe","Plunger","Pipe Wrench","Pickaxe Handle","Rolling Pin","Saucepan","Spiked Pickaxe Handle","Stone Hammer","Table Leg","Violin","Wooden Mallet","Wrench","Machete","Katana","Butter Knife","Bread Knife","Fork","Hand Fork","Hand Scythe","Hunting Knife","Ice Pick","Letter Opener","Kitchen Knife","Meat Cleaver","Scalpel","Scissors","Screwdriver","Smashed Bottle","Spoon","Stake","Stone Knife","Crafted Spear","Garden Fork","Spear_with_Bread_Knife","Spear_with_Butter_Knife","Spear_with_Fork","Spear_with_Hand_Fork","Spear_with_Hunting_Knife","Spear_with_Ice_Pick","Spear_with_Knife","Spear_with_Letter_Opener","Spear_with_Machete","Spear_with_Scalpel","Spear_with_Scissors","Spear_with_Screwdriver","Spear_with_Spoon","D-E Pistol","Double Barrel Shotgun","JS-2000 Shotgun","M14 Single Shot Assault Rifle","M16 Assault Rifle","M1911 Pistol","M36 Revolver","M625 Revolver","M9 Pistol","Magnum","MSR700 Rifle","MSR788 Rifle","Sawed-off Double Barrel Shotgun","Sawed-off JS-2000 Shotgun","Choke Tube Improved","Choke Tube Full","Fiberglass Stock","Iron Sight","Laser","Recoil Pad","Red Dot","Sling","x2 Scope","x4 Scope","x8 Scope","Aerosol Bomb","Fire Bomb","Molotov Cocktail","Noise Maker","Pipe Bomb","Smoke Bomb","Pen","Pencil","Unarmed_combat"];const te={showAll:!1,isFilter:!1,filters:[]},_=j({name:"options",initialState:te,reducers:{toggleFilter(a){a.isFilter=!a.isFilter},toggleShowAll(a){a.showAll=!a.showAll},addFilter(a,t){a.filters.push(t.payload)},removeFilter(a,t){a.filters.splice(t.payload,1)}},extraReducers:a=>{}}),{toggleFilter:ae,addFilter:ie,removeFilter:le,toggleShowAll:se}=_.actions,ne=()=>{const a=m(l=>l.options.filters),t=v(),i=l=>{if(l.target.value==="add-filter"){let c=document.getElementById("modal-inpt");c.value.length>0&&(t(ie(c.value)),c.textContent="")}},o=l=>{l.target.id==="filter"&&t(le(l.target.getAttribute("data-idx")))};return n("div",{className:"modal",id:"modal",children:[n("div",{className:"flex-05",children:[e("input",{type:"text",id:"modal-inpt",className:"main-inpt round",placeholder:"Enter filters..."}),e("button",{className:"fa btn round fs-sm",id:"modal-btn",value:"add-filter","aria-label":"Add Filter",onClick:l=>i(l),children:"\uF067"})]}),e("div",{className:"filters",id:"modal-filters",onClick:l=>o(l),children:a.map((l,r)=>e("p",{className:"filter round",id:"filter","data-idx":r,children:l}))}),e("button",{className:"btn exit-btn fs-sm round fw-n",id:"modal-btn",value:"exit","aria-label":"Close Modal",onClick:()=>p("modal","active"),children:"Close"})]})},oe=()=>{const[a,t]=x.exports.useState({objA:"",objB:""}),i=v(),o=m(s=>s.objs),l=m(s=>s.options.showAll),[r,c]=x.exports.useState(!1),h=s=>{t(C(y({},a),{[s.target.name]:s.target.value})),a.objA.length>0&&a.objB.length>0?c(!0):c(!1)},f=s=>{s.preventDefault(),s.target.getAttribute("data-action")==="compare"&&i(u({objs:[a.objA,a.objB],showAll:l}))};return n("main",{className:"main-container",children:[n("div",{className:"add-part",children:[e("input",{type:"text",id:"obj-inpt-1",name:"objA",list:"obj-list",onChange:s=>h(s)}),e("button",{className:"fa btn add-btn round","aria-label":"Add Object",disabled:!r,onClick:s=>f(s),"data-action":"compare",children:"\uF067"}),e("input",{type:"text",id:"obj-inpt-2",name:"objB",list:"obj-list",onChange:s=>h(s)}),e("datalist",{id:"obj-list",children:ee.map((s,d)=>e("option",{value:s},d))})]}),e($,{data:o,showAll:l}),e(ne,{})]})};var re=[{title:"Can I compare modded items?",ans:"As of now, the way the data is retrieved it is not possible to compare modded items... But in the future I will do something about it :)."},{title:"How many times can I compare per day?",ans:"256, if it's too low, I will increase it accordingly."},{title:"Why do some items not work/cause errors?",ans:"It most definetely is because of the item not being posted on the pz wiki, or the item's description is horrible or the item has a different name that it's actuall name (e.g. Military Bulletproof Vest -> Bulletproof Vest)"},{title:"Some items have valid descriptions but they still cause errors, why?",ans:"Because of some inconsistencies between how items are named, you should go to pz wiki search the item(s) your looking for and exactly write down it's name from the link (e.g Mac_and_Cheese instead of Mac and Cheese)"}];const ce=()=>n("main",{className:"main-container",children:[e("h1",{className:"faqs-title upper",children:"Faqs"}),e("div",{className:"list faqs",children:re.map((a,t)=>n("div",{className:"el faq",children:[n("h2",{className:"q-title",children:[t+1,") ",a.title]}),e("p",{className:"a",children:a.ans})]}))})]}),de=()=>n("footer",{children:[n("div",{className:"links",children:[n("ul",{className:"link-part",children:[e("p",{className:"links-title",children:"Main"}),e("li",{children:e(g,{to:"/",children:"Home"})}),e("li",{children:e("a",{href:"https://pzwiki.net/wiki/Main_Page",target:"_blank",children:"PzWiki"})}),e("li",{children:e("a",{href:"https://store.steampowered.com/app/108600/Project_Zomboid/",target:"_blank",children:"Get project zomboid"})})]}),n("ul",{className:"link-part",children:[e("p",{className:"links-title",children:"Coming soon"}),e("li",{children:e("a",{href:"#",target:"_blank",children:"PzApi"})})]}),n("ul",{className:"link-part",children:[e("p",{className:"links-title",children:"Misc"}),e("li",{children:e(g,{className:"upper",to:"/faqs",children:"Faq"})}),e("li",{children:e(g,{to:"/updates",children:"Updates"})})]})]}),e("address",{children:"PzCompare | Copyright \xA9 Isolated 2021 "})]}),he=()=>{const a=v(),t=i=>{const o=i.target.value;o==="show-all"?a(se()):o==="filter"&&a(ae())};return n(I,{children:[n("nav",{className:"primary-nav",children:[e("div",{className:"progress-bar",id:"progress-bar"}),e("h1",{className:"nav-title",children:"PzCompare"}),n("div",{className:"nav-btns",children:[e("button",{className:"fa btn cube nav-btn","aria-label":"Toggle Modal",onClick:()=>p("modal","active"),children:"\uF0B0"}),e("button",{className:"fa btn cube nav-btn","aria-label":"Toggle Side Navigation",onClick:()=>p("sidenav","active"),children:"\uF013"})]})]}),n("div",{className:"sidenav",id:"sidenav",children:[e("button",{className:"fa btn cube sidenav-close-btn","aria-label":"Toggle Side Navigation",onClick:()=>p("sidenav","active"),children:"\uF00D"}),n("div",{className:"options",children:[n("div",{className:"option flex-align-1",children:[e("label",{className:"opt-label",children:"Show all stats"}),n("div",{className:"switch round",children:[e("input",{type:"checkbox","aria-label":"Show All Stats",onClick:i=>t(i),value:"show-all",className:"inpt-switch"}),e("div",{className:"slider round"})]})]}),n("div",{className:"option flex-align-1",children:[e("label",{className:"opt-label",children:"Show filters"}),n("div",{className:"switch round",children:[e("input",{type:"checkbox","aria-label":"Show Filters",onClick:i=>t(i),value:"filter",className:"inpt-switch"}),e("div",{className:"slider round"})]})]})]})]})]})},me=()=>e("main",{className:"main-container",children:e("div",{className:"list updates",children:n("div",{className:"el update",children:[n("div",{className:"update-header flex-between align-end",children:[e("h2",{className:"update-title",children:"Bugfixes"}),e("p",{className:"date",children:"2021-12-11"})]}),e("ul",{className:"changelog",children:e("li",{children:"Fixed error handling."})})]})})});function pe(){return b.defaults.xsrfCookieName="csrftoken",b.defaults.xsrfHeaderName="X-CSRFToken",n("div",{className:"body",children:[e(he,{}),n(T,{children:[n(O,{children:[e(S,{path:"/",element:e(oe,{})}),e(S,{path:"/updates",element:e(me,{})}),e(S,{path:"/faqs",element:e(ce,{})})]}),e(de,{})]}),e("div",{className:"popup",id:"popup",children:e("p",{className:"popup-text"})})]})}const ue=K({reducer:{objs:Y.reducer,options:_.reducer}});E.render(e(z.StrictMode,{children:e(q,{store:ue,children:e(pe,{})})}),document.getElementById("root"));
