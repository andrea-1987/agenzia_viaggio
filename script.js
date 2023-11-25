const viaggi = [
  {
    img: "./assest/roatan.webp",
    destinazione: "Roatan,Honduras",
    descrizione:
      "You’ll head off-the-beaten-track to the east side of the island to the picturesque fishing villages of Punta Gorda and Oak Ridge. Punta Gorda is home to about 150 families of Garifuna people, the descendants of African slaves who arrived in Roatán from St. Vincent in 1797, after being exiled by the British following a quashed rebellion. Over on the southern coast, boarding a traditional cayuco, you’ll get an up-close view of Oak Ridge, known as the Venice of Roatán, as the village is only accessible by boat. Passing Oak Ridge’s brightly painted wooden houses on stilts, you’ll learn how this sleepy seaside village, once inhabited by pirates, is home to family-owned fishing companies that remain the second biggest industry on the island. Your guided cayuco journey will continue through majestic mangrove tunnels toward neighboring Jonesville before your cayuco docks at Hole in the Wall restaurant, a true local hangout and boater’s respite that brings out your inner pirate.",
    prezzo: 1500,
  },
  {
    img: "./assest/bali.jpg",
    destinazione: "Bali,Indonesia",
    descrizione:
      "Pour vos prochaines vacances en Asie, optez pour une île aux mille visages : Bali. Cette ravissante petite île indonésienne, située entre les îles de Java et Lombok, est la seule île hindouiste de l’archipel. Aussi surnommée « l’île des dieux », vous serez charmé comme bon nombre de touristes par les paysages de rêve allant des belles plages aux forêts luxuriantes, les danseuses aux costumes chatoyants, l’hospitalité des habitants ou encore par les traditions préservées et la culture unique de Bali. Voici 3 conseils pour réussir votre séjour sur l’île indonésienne.",
    prezzo: 1000,
  },
  {
    img: "./assest/capo_verde.jpeg",
    destinazione: "Capo verde",
    descrizione:
      "Un arcipelago da sogno al largo del Senegal, meta ancora selvaggia e incontaminata.",
    prezzo: 1300,
  },
  {
    img: "./assest/madeira.jpg",
    destinazione: "Madeira",
    descrizione:
      "There are plenty of excellent things to do this summer on Madeira Island. One of Portugal's 2 autonomous regions, it's best known for crisp sea views, clifftop hikes, and a year-round summer climate. It's easy to see why this island is one of Europe's most visited holiday spots.",
    prezzo: 900,
  },
];
const card = document.querySelector("#summer");
const offerta=document.querySelector("#offerta")
const lastMinutes=document.querySelector("#last_minutes")
for (let i = 0; i < viaggi.length; i++) {
    let found=viaggi[i]
    card.innerHTML += `<div class="card d-flex justify-content-center" style="width: 18rem;">
    <img src="${viaggi[i].img}" class="card-img-top h-100" alt="...">
    <div class="card-body">
    <h5 class="card-title">${viaggi[i].destinazione}</h5>
    <p class="card-text">${viaggi[i].descrizione}</p>
    <a href="#" class="btn btn-primary">$ ${viaggi[i].prezzo}</a>
    </div>`;

offerta.innerHTML=`<h2>offerta del giorno</h2>
<div class="card d-flex justify-content-center" style="width: 18rem;">
<img src="${found.img}" class="card-img-top h-100" alt="...">
<div class="card-body">
  <h5 class="card-title">${found.destinazione}</h5>
  <p class="card-text">${found.descrizione}</p>
   <a href="#" class="btn btn-primary">$ ${found.prezzo}</a>
</div>`;
lastMinutes.innerHTML=`<div id="carouselExampleIndicators" class="carousel slide">
<div class="carousel-indicators">
  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
</div>
<div class="carousel-inner">
  <div class="carousel-item active">
    <img src="${viaggi[i].img}" class="d-block h-50" alt="...">
  </div>
  <div class="carousel-item">
    <img src="${viaggi[i].img}" class="d-block h-50" alt="...">
  </div>
  <div class="carousel-item">
    <img src="${viaggi[i].img}" class="d-block h-50" alt="...">
  </div>
</div>
<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
  <span class="visually-hidden">Previous</span>
</button>
<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
  <span class="carousel-control-next-icon" aria-hidden="true"></span>
  <span class="visually-hidden">Next</span>
</button>
</div>`
}
