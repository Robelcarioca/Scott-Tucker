// Shared Navigation & Footer injector
(function() {
  const page = document.body.dataset.page || '';

  // Inject nav
  document.getElementById('nav-placeholder').innerHTML = `
    <nav class="nav" id="mainNav">
      <a href="index.html" class="nav-logo">
        <span class="nav-logo-main">Scott Tucker</span>
        <span class="nav-logo-sub">Construction Co. &mdash; Fort Worth, TX</span>
      </a>
      <ul class="nav-links">
        <li><a href="index.html" ${page==='home'?'class="active"':''}>Home</a></li>
        <li><a href="experience.html" ${page==='experience'?'class="active"':''}>Experience</a></li>
        <li><a href="about.html" ${page==='about'?'class="active"':''}>About</a></li>
        <li><a href="services.html" ${page==='services'?'class="active"':''}>Services</a></li>
        <li><a href="careers.html" ${page==='careers'?'class="active"':''}>Careers</a></li>
        <li><a href="contact.html" class="nav-cta">Contact Us</a></li>
      </ul>
      <button class="hamburger" id="hamburgerBtn" aria-label="Menu">
        <span></span><span></span><span></span>
      </button>
    </nav>
    <div class="mobile-menu" id="mobileMenu">
      <a href="index.html">Home</a>
      <a href="experience.html">Experience</a>
      <a href="about.html">About</a>
      <a href="services.html">Services</a>
      <a href="careers.html">Careers</a>
      <a href="contact.html" style="color: var(--orange);">Contact Us</a>
    </div>
  `;

  // Inject footer
  document.getElementById('footer-placeholder').innerHTML = `
    <footer>
      <div class="container">
        <div class="footer-grid">
          <div>
            <div class="nav-logo-main" style="font-family:'Bebas Neue',sans-serif;font-size:2rem;letter-spacing:0.08em;">Scott Tucker</div>
            <div style="font-family:var(--mono);font-size:0.6rem;letter-spacing:0.2em;color:var(--orange);margin-bottom:24px;">Construction Co.</div>
            <p style="color:var(--gray-light);font-size:0.9rem;line-height:1.7;font-weight:300;max-width:300px;">Building Texas with precision, integrity, and an unwavering commitment to safety and quality.</p>
            <div style="margin-top:28px;display:flex;gap:12px;">
              <div style="width:10px;height:10px;background:var(--orange);"></div>
              <div style="width:10px;height:10px;background:var(--steel-mid);"></div>
              <div style="width:10px;height:10px;background:var(--steel-mid);"></div>
            </div>
          </div>
          <div>
            <div style="font-family:var(--mono);font-size:0.65rem;letter-spacing:0.18em;text-transform:uppercase;color:var(--gray-mid);margin-bottom:24px;">Navigation</div>
            <ul style="list-style:none;display:flex;flex-direction:column;gap:12px;">
              ${['Home|index.html','Experience|experience.html','About|about.html','Services|services.html','Careers|careers.html','Contact|contact.html'].map(i=>{const[l,u]=i.split('|');return`<li><a href="${u}" style="color:var(--gray-light);text-decoration:none;font-size:0.9rem;transition:color 0.2s;" onmouseover="this.style.color='var(--orange)'" onmouseout="this.style.color='var(--gray-light)'">${l}</a></li>`;}).join('')}
            </ul>
          </div>
          <div>
            <div style="font-family:var(--mono);font-size:0.65rem;letter-spacing:0.18em;text-transform:uppercase;color:var(--gray-mid);margin-bottom:24px;">Markets</div>
            <ul style="list-style:none;display:flex;flex-direction:column;gap:12px;">
              ${['Bridges','Electrical','Water','Coatings','Building','Civil'].map(m=>`<li style="color:var(--gray-light);font-size:0.9rem;">${m}</li>`).join('')}
            </ul>
          </div>
          <div>
            <div style="font-family:var(--mono);font-size:0.65rem;letter-spacing:0.18em;text-transform:uppercase;color:var(--gray-mid);margin-bottom:24px;">Contact</div>
            <div style="display:flex;flex-direction:column;gap:16px;">
              <div>
                <div style="font-family:var(--mono);font-size:0.6rem;color:var(--orange);margin-bottom:4px;">ADDRESS</div>
                <div style="color:var(--gray-light);font-size:0.85rem;line-height:1.6;">7639 Confederate Park Road<br>Fort Worth, Texas 76108</div>
              </div>
              <div>
                <div style="font-family:var(--mono);font-size:0.6rem;color:var(--orange);margin-bottom:4px;">PHONE</div>
                <a href="tel:8173329008" style="color:var(--gray-light);font-size:0.85rem;text-decoration:none;">(817) 332-9008</a>
              </div>
              <div>
                <div style="font-family:var(--mono);font-size:0.6rem;color:var(--orange);margin-bottom:4px;">EMAIL</div>
                <a href="mailto:Contact@STCCTX.com" style="color:var(--gray-light);font-size:0.85rem;text-decoration:none;">Contact@STCCTX.com</a>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <div class="footer-copyright">&copy; 2024 Scott Tucker Construction Co. &mdash; All Rights Reserved</div>
          <div style="font-family:var(--mono);font-size:0.6rem;color:var(--gray-mid);letter-spacing:0.12em;">Fort Worth, Texas &mdash; (817) 332-9008</div>
        </div>
      </div>
    </footer>
  `;

  // Nav scroll behavior
  window.addEventListener('scroll', () => {
    const nav = document.getElementById('mainNav');
    if (nav) { nav.classList.toggle('scrolled', window.scrollY > 40); }
  });

  // Hamburger
  const btn = document.getElementById('hamburgerBtn');
  const menu = document.getElementById('mobileMenu');
  if (btn && menu) {
    btn.addEventListener('click', () => {
      menu.classList.toggle('open');
      const spans = btn.querySelectorAll('span');
      if (menu.classList.contains('open')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px,5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(5px,-5px)';
      } else {
        spans[0].style.transform = '';
        spans[1].style.opacity = '';
        spans[2].style.transform = '';
      }
    });
  }
})();
