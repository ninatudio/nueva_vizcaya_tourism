
const destinations = [
  {
    id: 1,
    name: "Capisaan Cave System",
    municipality: "Kasibu",
    category: "Adventure",
    image: "images/capisaan.jpg",
    shortDesc: "One of the longest cave systems in the Philippines, featuring stunning stalactites, stalagmites, and underground rivers.",
    fullDesc: "The Capisaan Cave System in Kasibu is considered one of the largest and most impressive cave systems in the Philippines. Stretching over several kilometers underground, the cave features breathtaking geological formations including stalactites, stalagmites, and underground rivers. Spelunking tours are available and the cave is home to thousands of bats.",
    activities: ["Spelunking", "Cave Tour", "Photography", "Nature Walk"],
    bestTime: "November to April (dry season)",
    entranceFee: "₱150 per person (guide fee extra)",
    openingHours: "8:00 AM – 4:00 PM daily",
    travelTip: "Wear sturdy closed-toe shoes and bring a flashlight. Guided tours are mandatory."
  },
  {
    id: 2,
    name: "Imugan Falls",
    municipality: "Santa Fe",
    category: "Waterfall",
    image: "images/imugan.JPG",
    shortDesc: "A majestic multi-tiered waterfall nestled in the lush mountains of Santa Fe, Nueva Vizcaya.",
    fullDesc: "Imugan Falls is one of the most beautiful waterfalls in Nueva Vizcaya, located in the cool mountainous town of Santa Fe. The falls cascade down multiple tiers through pristine rainforest. The surrounding area is cool and misty, perfect for nature lovers and photographers.",
    activities: ["Swimming", "Trekking", "Photography", "Picnic"],
    bestTime: "March to May",
    entranceFee: "₱30 per person",
    openingHours: "6:00 AM – 5:00 PM",
    travelTip: "The trail can be slippery. Wear non-slip shoes and hire a local guide."
  },
  {
    id: 3,
    name: "Mount Ugo",
    municipality: "Kayapa",
    category: "Mountain",
    image: "images/hiking.jpg",
    shortDesc: "A challenging yet rewarding mountain trek offering panoramic views and rare biodiversity.",
    fullDesc: "Mount Ugo straddles the border of Nueva Vizcaya and Benguet and is one of the most popular trekking destinations in Northern Luzon. The mountain is known for its rich biodiversity, mossy forests, and stunning sea of clouds. It's a challenge suitable for experienced hikers.",
    activities: ["Mountain Trekking", "Camping", "Bird Watching", "Photography"],
    bestTime: "October to April",
    entranceFee: "₱200 registration fee",
    openingHours: "Trek starts 5:00 AM",
    travelTip: "Register at the DENR office in Kayapa. Bring warm clothes as temperatures drop at night."
  },
  {
    id: 4,
    name: "Kayapa Quad Peak",
    municipality: "Kayapa",
    category: "Mountain",
    image: "images/kayapa.jpg",
    shortDesc: "A series of four stunning peaks offering breathtaking highland scenery and challenging trails.",
    fullDesc: "The Kayapa Quad Peak is a beloved trekking destination comprised of four summits in the municipality of Kayapa. Hikers are rewarded with spectacular panoramic views of the Cordillera ranges, pine-covered hillsides, and on clear mornings, a mesmerizing sea of clouds.",
    activities: ["Hiking", "Camping", "Scenic Viewing", "Photography"],
    bestTime: "November to April",
    entranceFee: "₱150 per person",
    openingHours: "Trek starts at 5:00 AM",
    travelTip: "Book a guide in advance. Prepare for cold nights and possible afternoon fog."
  },
  {
    id: 5,
    name: "St. Dominic Cathedral",
    municipality: "Bayombong",
    category: "Historical Site",
    image: "images/dominic.jpg",
    shortDesc: "The iconic cathedral of Bayombong, reflecting Spanish colonial architecture and deep faith.",
    fullDesc: "The St. Dominic Cathedral in Bayombong is the most prominent Catholic church in Nueva Vizcaya. Built during the Spanish colonial era, it stands as a testament to the province's rich religious heritage and architectural history. The cathedral remains a center of faith and community gatherings.",
    activities: ["Heritage Tour", "Religious Visit", "Photography", "Architecture Study"],
    bestTime: "Year-round",
    entranceFee: "Free",
    openingHours: "6:00 AM – 6:00 PM",
    travelTip: "Dress modestly when visiting. Early morning Mass is a beautiful experience."
  },
  {
    id: 6,
    name: "Paitan Flower Farm",
    municipality: "Santa Fe",
    category: "Adventure",
    image: "images/farms.jpg",
    shortDesc: "A scenic highland farm bursting with colorful flowers and fresh produce, perfect for agri-tourism.",
    fullDesc: "The Paitan Flower Farm in Santa Fe is a popular agri-tourism destination where visitors can stroll through fields of colorful blooms. The cool highland climate makes it ideal for growing a variety of flowers and vegetables. The farm offers a refreshing escape into nature.",
    activities: ["Farm Tour", "Photography", "Flower Picking", "Nature Walk"],
    bestTime: "October to February (peak bloom)",
    entranceFee: "₱50 per person",
    openingHours: "7:00 AM – 5:00 PM",
    travelTip: "Visit early morning for the best lighting and cooler temperatures."
  },
  {
    id: 7,
    name: "Mapalyao Falls",
    municipality: "Kayapa",
    category: "Waterfall",
    image: "images/falls.jpg",
    shortDesc: "A hidden gem waterfall surrounded by virgin forest and cold mountain streams.",
    fullDesc: "Mapalyao Falls is a breathtaking waterfall located in the remote highlands of Kayapa. Accessible via a scenic trek through lush forests, the falls reward visitors with cool, crystal-clear waters perfect for a refreshing swim. The surrounding virgin forest is home to diverse wildlife.",
    activities: ["Swimming", "Trekking", "Bird Watching", "Photography"],
    bestTime: "April to June",
    entranceFee: "₱20 per person",
    openingHours: "7:00 AM – 4:00 PM",
    travelTip: "Hire a local guide as the trail is unmarked. Bring water and snacks."
  },
  {
    id: 8,
    name: "Magat River",
    municipality: "Bagabag",
    category: "Adventure",
    image: "images/magat-river.jpg",
    shortDesc: "A major river offering scenic views, fishing, and white-water experiences along its banks.",
    fullDesc: "The Magat River is the longest and most significant river in Nueva Vizcaya, flowing through several municipalities before reaching the Magat Dam. The river is a source of livelihood for many communities and offers opportunities for fishing, kayaking, and scenic riverside walks.",
    activities: ["Fishing", "Kayaking", "Riverside Picnic", "Scenic Viewing"],
    bestTime: "Year-round (avoid typhoon season)",
    entranceFee: "Free",
    openingHours: "Open 24 hours",
    travelTip: "Be cautious during rainy season as water levels rise quickly."
  },
  {
    id: 9,
    name: "Ammungan Festival Grounds",
    municipality: "Bayombong",
    category: "Historical Site",
    image: "images/ammungan.jpg",
    shortDesc: "The main venue for Nueva Vizcaya's grand annual Ammungan Festival celebrating indigenous culture.",
    fullDesc: "The Ammungan Festival Grounds in Bayombong is where the province's grand cultural festival takes place every April. This historic venue hosts colorful street dances, indigenous cultural performances, and trade fairs that showcase the rich heritage of Nueva Vizcaya's diverse ethnic groups.",
    activities: ["Cultural Shows", "Trade Fair", "Street Dancing", "Photography"],
    bestTime: "April (during Ammungan Festival)",
    entranceFee: "Free",
    openingHours: "Varies by event",
    travelTip: "Book accommodations months in advance during the festival period."
  },
  {
    id: 10,
    name: "Lower Magat Eco-Tourism Park",
    municipality: "Alfonso Castañeda",
    category: "Adventure",
    image: "images/forest.jpg",
    shortDesc: "A scenic eco-park along the Magat Watershed offering trails, wildlife, and river views.",
    fullDesc: "The Lower Magat Eco-Tourism Park is a protected area offering visitors a chance to experience the biodiversity of the Magat Watershed. The park features nature trails, wildlife viewing areas, and scenic spots overlooking the reservoir. It's an excellent destination for eco-tourism enthusiasts.",
    activities: ["Nature Trekking", "Bird Watching", "Fishing", "Camping"],
    bestTime: "November to May",
    entranceFee: "₱50 per person",
    openingHours: "8:00 AM – 5:00 PM",
    travelTip: "Register with park rangers before entering. Respect wildlife and follow trail markers."
  },
  {
    id: 11,
    name: "Dupax del Norte Church",
    municipality: "Dupax del Norte",
    category: "Historical Site",
    image: "images/dupax.jpg",
    shortDesc: "A centuries-old Spanish colonial church that stands as a silent witness to Nueva Vizcaya's history.",
    fullDesc: "The Dupax del Norte Church is one of the oldest churches in Nueva Vizcaya, dating back to the Spanish colonial period. Its thick stone walls and bell tower have withstood centuries of history. The church remains an important pilgrimage site and a proud heritage landmark.",
    activities: ["Heritage Tour", "Photography", "Religious Visit"],
    bestTime: "Year-round",
    entranceFee: "Free",
    openingHours: "6:00 AM – 5:00 PM",
    travelTip: "Visit during weekday mornings to avoid crowds. Respect ongoing religious services."
  },
  {
    id: 12,
    name: "Kayapa Quad Peak",
    municipality: "Kayapa",
    category: "Mountain",
    image: "images/kayapa.jpg",
    shortDesc: "A challenging highland trek featuring four scenic peaks in the cool mountains of Kayapa.",
    fullDesc: "Kayapa Quad Peak is a popular hiking destination in Nueva Vizcaya known for its four distinct summit points that offer panoramic views of the Cordillera mountain ranges. The trail passes through pine forests, vegetable terraces, and indigenous communities, making it both a physical challenge and a cultural experience.",
    activities: ["Hiking", "Camping", "Photography", "Nature Trekking"],
    bestTime: "November to May",
    entranceFee: "₱150 guide fee",
    openingHours: "5:00 AM – 3:00 PM",
    travelTip: "Start early in the morning to avoid fog and bring warm clothing as temperatures can get very cold at the summit."
      }
];

function renderDestinationCards(list, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  if (list.length === 0) {
    container.innerHTML = `
      <div class="col-12 text-center py-5">
        <div style="font-size:3rem;">🔍</div>
        <h5 class="mt-3" style="color:var(--text-muted);">No destinations found.</h5>
        <p style="color:var(--text-muted);">Try a different search term or category.</p>
      </div>`;
    return;
  }

  container.innerHTML = list.map(d => `
    <div class="col-12 col-md-6 col-lg-4 destination-card-item" data-category="${d.category}" data-name="${d.name.toLowerCase()}" data-city="${d.municipality.toLowerCase()}">
      <div class="nv-card card">
        <img src="${d.image}" class="card-img-top fixed-img" alt="${d.name}" onerror="this.src='images/about.jpg'">
        <div class="card-body">
          <span class="badge-cat">${d.category}</span><br>
          <span class="badge-city">📍 ${d.municipality}</span>
          <h5 class="card-title mt-1">${d.name}</h5>
          <p class="card-text">${d.shortDesc}</p>
          <div class="card-meta">
            <span>⏰ ${d.openingHours.split('–')[0].trim()}</span>
            <span>🎫 ${d.entranceFee.startsWith('Free') ? 'Free' : d.entranceFee.split(' ')[0]}</span>
          </div>
          <button class="btn btn-nv-outline mt-3 w-100" onclick="openDestinationModal(${d.id})">View Details</button>
        </div>
      </div>
    </div>
  `).join('');
}

function openDestinationModal(id) {
  const d = destinations.find(x => x.id === id);
  if (!d) return;

  document.getElementById('modalTitle').textContent = d.name;
  document.getElementById('modalImg').src = d.image;
  document.getElementById('modalImg').onerror = () => { document.getElementById('modalImg').src = 'images/about.jpg'; };
  document.getElementById('modalCategory').textContent = d.category;
  document.getElementById('modalCity').textContent = d.municipality;
  document.getElementById('modalDesc').textContent = d.fullDesc;
  document.getElementById('modalFee').textContent = d.entranceFee;
  document.getElementById('modalHours').textContent = d.openingHours;
  document.getElementById('modalBestTime').textContent = d.bestTime;
  document.getElementById('modalTip').textContent = d.travelTip;

  const activitiesEl = document.getElementById('modalActivities');
  activitiesEl.innerHTML = d.activities.map(a => `<span class="modal-tag">${a}</span>`).join('');

  const modal = new bootstrap.Modal(document.getElementById('destinationModal'));
  modal.show();
}

function initSearchFilter() {
  const searchInput = document.getElementById('destinationSearch');
  const categorySelect = document.getElementById('categorySelect');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const container = document.getElementById('destinationsContainer');
  let activeCategory = 'All';

  function filterDestinations() {
    const searchTerm = searchInput ? searchInput.value.toLowerCase().trim() : '';
    const catFromSelect = categorySelect ? categorySelect.value : 'All';
    const cat = activeCategory !== 'All' ? activeCategory : catFromSelect;

    const filtered = destinations.filter(d => {
      const matchSearch = !searchTerm ||
        d.name.toLowerCase().includes(searchTerm) ||
        d.municipality.toLowerCase().includes(searchTerm) ||
        d.category.toLowerCase().includes(searchTerm);
      const matchCat = cat === 'All' || d.category === cat;
      return matchSearch && matchCat;
    });
    renderDestinationCards(filtered, 'destinationsContainer');
  }

  if (searchInput) searchInput.addEventListener('input', filterDestinations);
  if (categorySelect) categorySelect.addEventListener('change', filterDestinations);

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.dataset.cat;
      filterDestinations();
    });
  });

  if (container) renderDestinationCards(destinations, 'destinationsContainer');
}

function initGallery() {
  const items = document.querySelectorAll('.gallery-item');
  const overlay = document.getElementById('lightboxOverlay');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  if (!overlay) return;

  let currentIndex = 0;
  const galleryData = Array.from(items).map(item => ({
    src: item.querySelector('img').src,
    caption: item.dataset.caption || ''
  }));

  function openLightbox(index) {
    currentIndex = index;
    lightboxImg.src = galleryData[index].src;
    lightboxCaption.textContent = galleryData[index].caption;
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  items.forEach((item, idx) => {
    item.addEventListener('click', () => openLightbox(idx));
  });

  document.getElementById('lightboxClose')?.addEventListener('click', closeLightbox);
  overlay.addEventListener('click', (e) => { if (e.target === overlay) closeLightbox(); });

  document.getElementById('lightboxPrev')?.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + galleryData.length) % galleryData.length;
    openLightbox(currentIndex);
  });

  document.getElementById('lightboxNext')?.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % galleryData.length;
    openLightbox(currentIndex);
  });

  document.addEventListener('keydown', (e) => {
    if (!overlay.classList.contains('active')) return;
    if (e.key === 'ArrowLeft') { currentIndex = (currentIndex - 1 + galleryData.length) % galleryData.length; openLightbox(currentIndex); }
    if (e.key === 'ArrowRight') { currentIndex = (currentIndex + 1) % galleryData.length; openLightbox(currentIndex); }
    if (e.key === 'Escape') closeLightbox();
  });
}

function initInquiryForm() {
  const form = document.getElementById('inquiryForm');
  if (!form) return;

  const destSelect = document.getElementById('selectedDestination');
  if (destSelect) {
    destinations.forEach(d => {
      const opt = document.createElement('option');
      opt.value = d.name;
      opt.textContent = `${d.name} (${d.municipality})`;
      destSelect.appendChild(opt);
    });
  }

  const travelDate = document.getElementById('travelDate');
  if (travelDate) {
    const today = new Date().toISOString().split('T')[0];
    travelDate.setAttribute('min', today);
  }

  function showError(field, msg) {
    field.classList.add('is-invalid');
    let fb = field.nextElementSibling;
    if (!fb || !fb.classList.contains('invalid-feedback')) {
      fb = document.createElement('div');
      fb.classList.add('invalid-feedback');
      field.parentNode.insertBefore(fb, field.nextSibling);
    }
    fb.textContent = msg;
  }

  function clearError(field) {
    field.classList.remove('is-invalid');
    field.classList.add('is-valid');
  }

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;

    const fullName = document.getElementById('fullName');
    const email = document.getElementById('emailAddress');
    const contact = document.getElementById('contactNumber');
    const dest = document.getElementById('selectedDestination');
    const date = document.getElementById('travelDate');
    const visitors = document.getElementById('numVisitors');
    const message = document.getElementById('inquiryMessage');

    [fullName, email, contact, dest, date, visitors, message].forEach(f => {
      f.classList.remove('is-invalid', 'is-valid');
    });

    if (!fullName.value.trim()) { showError(fullName, 'Full name is required.'); valid = false; } else clearError(fullName);
    if (!validateEmail(email.value)) { showError(email, 'Please enter a valid email address.'); valid = false; } else clearError(email);
    if (!/^\d{7,15}$/.test(contact.value.replace(/\s/g, ''))) { showError(contact, 'Contact number must contain digits only (7–15 digits).'); valid = false; } else clearError(contact);
    if (!dest.value) { showError(dest, 'Please select a destination.'); valid = false; } else clearError(dest);
    if (!date.value) { showError(date, 'Travel date is required.'); valid = false; } else clearError(date);
    if (!visitors.value || parseInt(visitors.value) < 1) { showError(visitors, 'Number of visitors must be at least 1.'); valid = false; } else clearError(visitors);
    if (!message.value.trim()) { showError(message, 'Please enter your message.'); valid = false; } else clearError(message);

    if (valid) {
      form.style.display = 'none';
      document.getElementById('formSuccess').style.display = 'block';
      window.scrollTo({ top: document.getElementById('formSuccess').offsetTop - 100, behavior: 'smooth' });
    }
  });
}

function initBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('show', window.scrollY > 400);
  });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

document.addEventListener('DOMContentLoaded', () => {
  initSearchFilter();
  initGallery();
  initInquiryForm();
  initBackToTop();
});
