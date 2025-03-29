const data = [
    {
      "image": "6-newair-high-velocity-fan-windpro18f-hero.webp",
      "title": "Bracket fans ",
      "description": "This is the 2025 bracket fan .",
      "price": "9,000",
      "details": "Best Experince forever."
    },
    {
      "image": "81HaQ59QzbL.jpg",
      "title": "Celling fans",
      "description": "This model look nice.",
      "price": "$15,000",
      "details": "The new additional fuinction is remote."
    },
    {
      "image": "gfc-56-inch-fanoos-ceiling-inverter-fan_87573076-4ec0-41ac-91dc-54f97e8aa32f.webp",
      "title": "Lamp model ",
      "description": "This is the 2025 Lamps.",
      "price": "14,000",
      "details": "This model is very nice ."
    },
    {
      "image": "images.jfif",
      "title": "Icon model ",
      "description": "This is the running item.",
      "price": "10,000",
      "details": "The air of this model is very better then all  ."
    },
    {
      "image": "images (1).jfif",
      "title": "King model ",
      "description": "This is better then icon.",
      "price": "11,000",
      "details": "The air of this model is very better then all  ."
    },
    {
      "image": "Artboard_5.webp",
      "title": " Indus washing Machine ",
      "description": "This is better then icon.",
      "price": "55,000",
      "details": "This model have ability of dryer ."
    }
  ];
  const container = document.getElementById('card-container');

  data.forEach(item => {
    const card = document.createElement('div');
    card.className = 'col-lg-4 col-md-6 col-sm-12 mb-4'; // Responsive classes
  
    card.innerHTML = `
      <div class="card h-100">
        <img src="${item.image}" class="card-img-top" alt="${item.title}">
        <div class="card-body">
          <h5 class="card-title">${item.title}</h5>
          <p class="card-text">${item.description}</p>
          <p class="text-primary fw-bold">${item.price}</p>
          <p>${item.details}</p>
        </div>
      </div>
    `;
  
    container.appendChild(card);
  });