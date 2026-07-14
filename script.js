/* ============================================================
   script.js — Construit le portfolio à partir de data.js
   et gère le changement de langue FR/EN + la navigation active.
   ============================================================ */

(function () {
  "use strict";

  const STORAGE_KEY = "sidi-portfolio-lang";
  let currentLang = localStorage.getItem(STORAGE_KEY) || "fr";

  function el(tag, opts) {
    const node = document.createElement(tag);
    if (!opts) return node;
    if (opts.class) node.className = opts.class;
    if (opts.text) node.textContent = opts.text;
    if (opts.html) node.innerHTML = opts.html;
    if (opts.attrs) {
      Object.keys(opts.attrs).forEach((k) => node.setAttribute(k, opts.attrs[k]));
    }
    return node;
  }

  function clear(node) {
    while (node.firstChild) node.removeChild(node.firstChild);
  }

  function render(lang) {
    const d = PORTFOLIO_DATA[lang];
    if (!d) return;

    document.documentElement.lang = lang;
    document.title = d.meta.title;

    // --- Sidebar identity ---
    document.getElementById("monogram").textContent = d.identity.monogram;
    document.getElementById("identity-name").textContent = d.identity.name;
    document.getElementById("identity-role").textContent = d.identity.role;
    document.getElementById("identity-location").textContent = d.identity.location;
    setProfilePhoto(d.identity.photo);
    const cvBtn = document.getElementById("cv-button");
    cvBtn.textContent = d.contact.cv.label;
    cvBtn.setAttribute("href", d.contact.cv.file);

    // --- Nav ---
    const navWrap = document.getElementById("sidebar-nav");
    clear(navWrap);
    d.nav.forEach((item) => {
      const a = el("a", { text: item.label, attrs: { href: "#" + item.id, "data-nav-target": item.id } });
      navWrap.appendChild(a);
    });

    // --- Contact block ---
    document.getElementById("contact-heading").textContent = d.contact.heading;
    const contactList = document.getElementById("contact-list");
    clear(contactList);
    contactList.appendChild(el("li", { text: d.contact.phone }));
    contactList.appendChild(
      el("li", { html: `<a href="mailto:${d.contact.email}">${d.contact.email}</a>` })
    );
    contactList.appendChild(
      el("li", {
        html: `<a href="${d.contact.linkedin.url}" target="_blank" rel="noopener">${d.contact.linkedin.label}</a>`
      })
    );
    contactList.appendChild(
      el("li", {
        html: `<a href="${d.contact.x.url}" target="_blank" rel="noopener">${d.contact.x.label}</a>`
      })
    );

    // --- Languages block ---
    document.getElementById("languages-heading").textContent = d.languages.heading;
    const langList = document.getElementById("lang-list");
    clear(langList);
    d.languages.items.forEach((item) => {
      const li = el("li");
      li.appendChild(el("span", { text: item.name }));
      li.appendChild(el("span", { class: "lang-level", text: item.level }));
      langList.appendChild(li);
    });

    // --- Lang toggle label ---
    document.getElementById("lang-toggle-label").textContent = d.meta.langLabel;
    document.getElementById("lang-toggle").setAttribute(
      "aria-label",
      lang === "fr" ? "Switch to English" : "Passer en français"
    );

    // --- Profil ---
    document.getElementById("profil-eyebrow").textContent = d.profil.eyebrow;
    document.getElementById("profil-heading").textContent = d.profil.heading;
    document.getElementById("profil-text").textContent = d.profil.text;
    document.getElementById("route-label").textContent = d.profil.routeLabel;
    const routeList = document.getElementById("route-list");
    clear(routeList);
    d.profil.route.forEach((stop) => {
      const li = el("li");
      const pin = el("span", { class: "pin" });
      pin.appendChild(document.createTextNode(stop.place + " "));
      pin.appendChild(el("span", { class: "year", text: stop.year }));
      li.appendChild(pin);
      routeList.appendChild(li);
    });

    // --- Réalisations ---
    document.getElementById("realisations-eyebrow").textContent = d.realisations.eyebrow;
    document.getElementById("realisations-heading").textContent = d.realisations.heading;
    const realisList = document.getElementById("realisations-list");
    clear(realisList);
    d.realisations.items.forEach((txt) => {
      realisList.appendChild(el("li", { text: txt }));
    });

    // --- Expériences (log) ---
    document.getElementById("experiences-eyebrow").textContent = d.experiences.eyebrow;
    document.getElementById("experiences-heading").textContent = d.experiences.heading;
    const expLog = document.getElementById("experiences-log");
    clear(expLog);
    d.experiences.items.forEach((item) => {
      expLog.appendChild(buildLogEntry(item));
    });

    // --- Formation (log) ---
    document.getElementById("formation-eyebrow").textContent = d.formation.eyebrow;
    document.getElementById("formation-heading").textContent = d.formation.heading;
    const formLog = document.getElementById("formation-log");
    clear(formLog);
    d.formation.items.forEach((item) => {
      const entry = el("div", { class: "log-entry" });
      entry.appendChild(el("div", { class: "log-code", text: item.period }));
      const body = el("div");
      body.appendChild(el("h3", { class: "log-title", text: item.degree }));
      const meta = el("p", { class: "log-meta" });
      meta.appendChild(el("span", { class: "org", text: item.org }));
      meta.appendChild(el("span", { text: "· " + item.place }));
      body.appendChild(meta);
      body.appendChild(el("p", { class: "panel-text", text: item.detail }));
      if (item.file) {
        body.appendChild(
          el("a", {
            class: "stamp-link",
            text: d.formation.viewLabel,
            attrs: { href: item.file, target: "_blank", rel: "noopener" }
          })
        );
      }
      entry.appendChild(body);
      formLog.appendChild(entry);
    });

    // --- Certifications (stamps) ---
    document.getElementById("certifications-eyebrow").textContent = d.certifications.eyebrow;
    document.getElementById("certifications-heading").textContent = d.certifications.heading;
    const certGrid = document.getElementById("certifications-grid");
    clear(certGrid);
    d.certifications.items.forEach((cert) => {
      const stamp = el("div", { class: "stamp" });
      stamp.appendChild(el("span", { class: "stamp-year", text: cert.year }));
      stamp.appendChild(el("p", { class: "stamp-name", text: cert.name }));
      stamp.appendChild(el("p", { class: "stamp-org", text: cert.org }));
      if (cert.file) {
        stamp.appendChild(
          el("a", {
            class: "stamp-link",
            text: d.certifications.viewLabel,
            attrs: { href: cert.file, target: "_blank", rel: "noopener" }
          })
        );
      }
      certGrid.appendChild(stamp);
    });

    // --- Compétences & outils ---
    document.getElementById("competences-eyebrow").textContent = d.competences.eyebrow;
    document.getElementById("competences-heading").textContent = d.competences.heading;
    document.getElementById("skills-label").textContent = d.competences.skillsLabel;
    document.getElementById("tools-label").textContent = d.competences.toolsLabel;
    const skillsList = document.getElementById("skills-list");
    clear(skillsList);
    d.competences.skills.forEach((s) => skillsList.appendChild(el("li", { text: s })));
    const toolsList = document.getElementById("tools-list");
    clear(toolsList);
    d.competences.tools.forEach((t) => toolsList.appendChild(el("li", { text: t })));

    // --- Contact section ---
    document.getElementById("contactSection-eyebrow").textContent = d.contactSection.eyebrow;
    document.getElementById("contactSection-heading").textContent = d.contactSection.heading;
    document.getElementById("contactSection-text").textContent = d.contactSection.text;
    const ctaBtn = document.getElementById("contactSection-cta");
    ctaBtn.textContent = d.contactSection.cta;
    ctaBtn.setAttribute("href", "mailto:" + d.contact.email);

    // --- Footer ---
    document.getElementById("footer-text").textContent = d.footer.text;

    setActiveNav();
  }

  function setProfilePhoto(src) {
    const img = document.getElementById("profile-photo");
    const wrap = document.getElementById("photo-wrap");
    if (!src) {
      wrap.classList.remove("has-photo");
      return;
    }
    // On tente de charger l'image ; si le fichier n'existe pas (404),
    // on revient silencieusement au monogramme au lieu d'afficher une icône cassée.
    img.onload = function () {
      wrap.classList.add("has-photo");
    };
    img.onerror = function () {
      wrap.classList.remove("has-photo");
      img.removeAttribute("src");
    };
    img.src = src;
  }

  function buildLogEntry(item) {
    const entry = el("div", { class: "log-entry" });
    entry.appendChild(el("div", { class: "log-code", text: item.code }));

    const body = el("div");
    body.appendChild(el("h3", { class: "log-title", text: item.title }));

    const meta = el("p", { class: "log-meta" });
    meta.appendChild(el("span", { class: "org", text: item.org }));
    meta.appendChild(el("span", { text: "· " + item.period }));
    meta.appendChild(el("span", { text: "· " + item.place }));
    body.appendChild(meta);

    const points = el("ul", { class: "log-points" });
    item.points.forEach((p) => points.appendChild(el("li", { text: p })));
    body.appendChild(points);

    entry.appendChild(body);
    return entry;
  }

  function setActiveNav() {
    const links = document.querySelectorAll(".sidebar-nav a");
    const sections = Array.from(links)
      .map((a) => document.getElementById(a.getAttribute("data-nav-target")))
      .filter(Boolean);

    function onScroll() {
      let currentId = sections[0] && sections[0].id;
      const scrollPos = window.scrollY + 140;
      sections.forEach((sec) => {
        if (sec.offsetTop <= scrollPos) currentId = sec.id;
      });
      links.forEach((a) => {
        a.classList.toggle("is-active", a.getAttribute("data-nav-target") === currentId);
      });
    }

    window.removeEventListener("scroll", window.__sidiScrollHandler || (() => {}));
    window.__sidiScrollHandler = onScroll;
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  function toggleLang() {
    currentLang = currentLang === "fr" ? "en" : "fr";
    localStorage.setItem(STORAGE_KEY, currentLang);
    render(currentLang);
  }

  document.addEventListener("DOMContentLoaded", function () {
    render(currentLang);
    document.getElementById("lang-toggle").addEventListener("click", toggleLang);
  });
})();
