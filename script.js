const menu=[
["Fresh Fish",20000,"🐟","Fresh fish prepared for a satisfying local meal."],
["Fried Fish",20000,"🍽️","Crispy fried fish, full of flavour."],
["Dry Fish",15000,"🐟","Tasty dry fish prepared in local style."],
["Beef",15000,"🥩","Tender beef prepared with local flavours."],
["Goat's Meat",15000,"🍖","Delicious goat's meat, cooked with care."],
["Chicken",15000,"🍗","A tasty chicken meal for any time of day."],
["Beans",10000,"🫘","Classic beans, a hearty local favourite."],
["Cowpeas",10000,"🫘","Nutritious cowpeas prepared in local style."],
["Katogo",10000,"🍲","Comes with rice, offals, beef, liver and fish."]
];
const cart=menu.map(()=>0),fmt=n=>"UGX "+n.toLocaleString("en-UG");
document.getElementById("grid").innerHTML=menu.map((x,i)=>`<article class="card"><div class="icon">${x[2]}</div><h3>${x[0]}</h3><div class="desc">${x[3]}</div><div class="price">${fmt(x[1])}</div><div class="controls"><button class="qtybtn" onclick="change(${i},-1)">−</button><span class="qty" id="q${i}">0</span><button class="qtybtn" onclick="change(${i},1)">+</button></div></article>`).join("");
function change(i,d){cart[i]=Math.max(0,cart[i]+d);document.getElementById("q"+i).textContent=cart[i];update()}
function update(){let c=0,t=0;cart.forEach((q,i)=>{c+=q;t+=q*menu[i][1]});document.getElementById("count").textContent=c;document.getElementById("total").textContent=fmt(t);document.getElementById("wa").disabled=!c}
document.getElementById("wa").onclick=()=>{let lines=["Hello Tatti's Restaurant Munyonyo! I'd like to place an order:"];let t=0,c=0;menu.forEach((x,i)=>{if(cart[i]){let v=cart[i]*x[1];lines.push(`• ${x[0]} x${cart[i]} — ${fmt(v)}`);t+=v;c+=cart[i]}});if(c){lines.push("",`Food total: ${fmt(t)}`,"Delivery/packing: extra UGX 2,000 per meal (Katogo excluded).","Please confirm availability and the final delivery total. Thank you!");window.open("https://wa.me/256741783136?text="+encodeURIComponent(lines.join("\n")),"_blank")}};
update();