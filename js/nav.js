
const NAV_HTML = `
<nav class="navbar navbar-expand-lg navbar-dark custom-navbar sticky-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="index.html">
      <img src="images/logo.png" alt="NV Logo">Nueva Vizcaya
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav" aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="mainNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <a class="nav-link" href="index.html">Home</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="about.html" role="button" data-bs-toggle="dropdown">About</a>
          <ul class="dropdown-menu dropdown-menu-dark custom-navbar">
            <li><a class="dropdown-item" href="about.html">About Nueva Vizcaya</a></li>
            <li><a class="dropdown-item" href="location.html">Location</a></li>
            <li><a class="dropdown-item" href="history.html">History</a></li>
            <li><a class="dropdown-item" href="culture.html">Culture &amp; Traditions</a></li>
            <li><a class="dropdown-item" href="why-visit.html">Why Visit?</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="destinations.html" role="button" data-bs-toggle="dropdown">Destinations</a>
          <ul class="dropdown-menu dropdown-menu-dark custom-navbar">
            <li><a class="dropdown-item" href="destinations.html">All Destinations</a></li>
            <li><hr class="dropdown-divider" style="border-color:rgba(255,255,255,0.15)"></li>
            <li><a class="dropdown-item" href="mountains.html">Mountains</a></li>
            <li><a class="dropdown-item" href="falls.html">Waterfalls</a></li>
            <li><a class="dropdown-item" href="caves.html">Caves</a></li>
            <li><a class="dropdown-item" href="historical.html">Historical Sites</a></li>
            <li><a class="dropdown-item" href="farms.html">Farms &amp; Nature</a></li>
            <li><a class="dropdown-item" href="activities.html">Adventure &amp; Activities</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="festivals.html" role="button" data-bs-toggle="dropdown">Culture</a>
          <ul class="dropdown-menu dropdown-menu-dark custom-navbar">
            <li><a class="dropdown-item" href="festivals.html">Festivals &amp; Events</a></li>
            <li><a class="dropdown-item" href="food.html">Food &amp; Delicacies</a></li>
            <li><a class="dropdown-item" href="citrus.html">Citrus Industry</a></li>
            <li><a class="dropdown-item" href="culture.html">Indigenous Peoples</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="gallery.html">Gallery</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="travel-tips.html">Travel Tips</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="inquiry.html">Inquiry</a>
        </li>
      </ul>
    </div>
  </div>
</nav>`;

const FOOTER_HTML = `
<footer class="footer">
  <div class="footer-container">
    <div class="footer-section">
      <h3>Nueva Vizcaya Tourism</h3>
      <p>Discover the beauty, culture, and breathtaking destinations of Nueva Vizcaya — the Heart of the Cagayan Valley.</p>
    </div>
    <div class="footer-section">
      <h3>Quick Links</h3>
      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About the Province</a></li>
        <li><a href="destinations.html">Tourist Destinations</a></li>
        <li><a href="festivals.html">Festivals &amp; Culture</a></li>
        <li><a href="food.html"> Food &amp; Delicacies</a></li>
        <li><a href="gallery.html"> Gallery</a></li>
        <li><a href="citrus.html">Citrus Industry</a></li>
        <li><a href="travel-tips.html">Travel Tips</a></li>
        <li><a href="inquiry.html">Inquiry Form</a></li>
      </ul>
    </div>
    <div class="footer-section">
      <h3>Popular Sites</h3>
      <ul>
        <li><a href="caves.html">Capisaan Cave System</a></li>
        <li><a href="falls.html">Imugan Falls</a></li>
        <li><a href="mountains.html">Mount Ugo</a></li>
        <li><a href="farms.html">Paitan Flower Farm</a></li>
        <li><a href="historical.html">St. Dominic Cathedral</a></li>
      </ul>
    </div>
    <div class="footer-section">
      <h3>Contact</h3>
      <ul>
        <li><a href="#">Bayombong, Nueva Vizcaya</a></li>
        <li><a href="#">(078) 000-0000</a></li>
        <li><a href="#">tourism@nuevavizcaya.gov.ph</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <p>© 2026 Nueva Vizcaya Tourism | All rights reserved. | Made with ❤️ for the Province</p>
  </div>
</footer>
<button id="backToTop" title="Back to top">↑</button>`;

const DESTINATION_MODAL = `
<div class="modal fade" id="destinationModal" tabindex="-1" aria-hidden="true">
  <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="modalTitle">Destination Name</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <img id="modalImg" src="" alt="Destination" class="mb-3">
        <div class="d-flex gap-2 mb-3 flex-wrap">
          <span class="badge-cat" id="modalCategory"></span>
          <span class="badge-city" id="modalCity"></span>
        </div>
        <p id="modalDesc" class="text-muted" style="line-height:1.75"></p>
        <hr>
        <div class="modal-info-row"><span class="modal-info-label">🎫 Entrance Fee:</span><span id="modalFee"></span></div>
        <div class="modal-info-row"><span class="modal-info-label">🕐 Opening Hours:</span><span id="modalHours"></span></div>
        <div class="modal-info-row"><span class="modal-info-label">📅 Best Time:</span><span id="modalBestTime"></span></div>
        <div class="modal-info-row"><span class="modal-info-label">💡 Travel Tip:</span><span id="modalTip"></span></div>
        <div class="mt-3">
          <strong style="color:var(--green-dark)">🎯 Activities:</strong><br>
          <div id="modalActivities" class="mt-2"></div>
        </div>
      </div>
      <div class="modal-footer border-0">
        <button type="button" class="btn btn-nv-primary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>`;

const LIGHTBOX_HTML = `
<div class="lightbox-overlay" id="lightboxOverlay">
  <button class="lightbox-close" id="lightboxClose">✕</button>
  <button class="lightbox-nav lightbox-prev" id="lightboxPrev">‹</button>
  <img class="lightbox-img" id="lightboxImg" src="" alt="">
  <div class="lightbox-caption" id="lightboxCaption"></div>
  <button class="lightbox-nav lightbox-next" id="lightboxNext">›</button>
</div>`;

document.addEventListener('DOMContentLoaded', () => {

  const navPlaceholder = document.getElementById('navbar-placeholder');
  if (navPlaceholder) navPlaceholder.innerHTML = NAV_HTML;

  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (footerPlaceholder) footerPlaceholder.innerHTML = FOOTER_HTML;

  const modalPlaceholder = document.getElementById('modal-placeholder');
  if (modalPlaceholder) modalPlaceholder.innerHTML = DESTINATION_MODAL;

  const lightboxPlaceholder = document.getElementById('lightbox-placeholder');
  if (lightboxPlaceholder) lightboxPlaceholder.innerHTML = LIGHTBOX_HTML;

  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link, .dropdown-item').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage) {
      link.classList.add('active');
      const parentDropdown = link.closest('.dropdown');
      if (parentDropdown) {
        parentDropdown.querySelector('.nav-link')?.classList.add('active');
      }
    }
  });
});
