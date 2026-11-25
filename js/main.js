const page = document.body.dataset.page;
const $ = (id) => document.getElementById(id);
const esc = (s) => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const PLACEHOLDER = "data:image/svg+xml;utf8," + encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400"><rect width="100%" height="100%" fill="#c9ccd1"/><text x="50%" y="50%" fill="#6b7078" font-family="sans-serif" font-size="24" text-anchor="middle">Gambar belum ada</text></svg>');

/* ---------- Navbar & footer ---------- */
const links = [["index.html","Dashboard","dashboard"],["about.html","About Me","about"],["project.html","Project","project"],["contact.html","Contact","contact"]];
$("navbar").innerHTML = `
<nav class="navbar navbar-expand-md navbar-dark site-nav sticky-top">
  <div class="container">
    <a class="navbar-brand" href="index.html">${esc(CONFIG.name)}</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu" aria-label="Menu"><span class="navbar-toggler-icon"></span></button>
    <div class="collapse navbar-collapse" id="menu">
      <ul class="navbar-nav ms-auto">
        ${links.map(l => `<li class="nav-item"><a class="nav-link ${l[2]===page?'active':''}" href="${l[0]}">${l[1]}</a></li>`).join("")}
      </ul>
    </div>
  </div>
</nav>`;
$("footer").innerHTML = `<footer class="site-footer text-center py-3">© ${new Date().getFullYear()} ${esc(CONFIG.name)}</footer>`;
document.title = `${CONFIG.title} | ${links.find(l=>l[2]===page)[1]}`;

/* ---------- Dashboard ---------- */
if (page === "dashboard") {
  $("judul").textContent = CONFIG.title;
  $("subjudul").textContent = CONFIG.subtitle;
  $("nama").textContent = CONFIG.name;
  const f = $("foto"); f.src = CONFIG.photo; f.onerror = () => { f.onerror = null; f.src = PLACEHOLDER; };
}

/* ---------- About ---------- */
if (page === "about") {
  const f = $("foto"); f.src = CONFIG.photo; f.onerror = () => { f.onerror = null; f.src = PLACEHOLDER; };
  $("teks").innerHTML = CONFIG.about.paragraphs.map(p => `<p>${esc(p)}</p>`).join("");
  $("biodata").innerHTML = CONFIG.about.biodata.map(b =>
    `<tr><th scope="row">${esc(b.label)}</th><td>${esc(b.value)}</td></tr>`).join("");
}

/* ---------- Project ---------- */
if (page === "project") {
  $("daftar").innerHTML = CONFIG.projects.map(p => `
    <div class="project-item">
      <div class="project-card">
        <img src="${esc(p.image)}" alt="${esc(p.title)}" onerror="this.onerror=null;this.src='${PLACEHOLDER}'">
        <div class="project-body">
          <h5>${esc(p.title)}</h5>
          <p>${esc(p.description)}</p>
          ${p.link ? `<a href="${esc(p.link)}" target="_blank" rel="noopener" class="btn btn-sm btn-dark">Lihat project</a>` : ""}
        </div>
      </div>
    </div>`).join("");
}

/* ---------- Contact ---------- */
if (page === "contact") {
  $("ig").href = CONFIG.contact.instagram;
  $("formKontak").addEventListener("submit", (e) => {
    e.preventDefault();
    const n = $("nama").value, em = $("email").value, m = $("pesan").value;
    const subject = encodeURIComponent(`Pesan dari ${n} (portofolio)`);
    const body = encodeURIComponent(`Nama: ${n}\nEmail: ${em}\n\n${m}`);
    window.location.href = `mailto:${CONFIG.contact.email}?subject=${subject}&body=${body}`;
  });
}
