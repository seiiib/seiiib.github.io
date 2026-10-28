/**
 * ============================================================================
 * SEBASTIEN YE — INTERACTIVE PORTFOLIO ENGINE (js/main.js)
 * Adapté au CV d'Ingénieur ML / IA, Consultant Data & Data Engineer
 * ============================================================================
 */

(function () {
  "use strict";

  const data = window.PORTFOLIO_DATA;
  if (!data) return;

  /* --------------------------------------------------------------------------
   * 1. THEME MANAGEMENT (Dark / Light Mode)
   * -------------------------------------------------------------------------- */
  const rootEl = document.documentElement;
  const themeToggleBtn = document.getElementById("theme-toggle");

  function getInitialTheme() {
    const saved = localStorage.getItem("sy_portfolio_theme");
    if (saved === "light" || saved === "dark") return saved;
    return "dark";
  }

  function applyTheme(theme) {
    rootEl.setAttribute("data-theme", theme);
    localStorage.setItem("sy_portfolio_theme", theme);
    if (themeToggleBtn) {
      themeToggleBtn.setAttribute(
        "aria-label",
        theme === "dark" ? "Passer en mode clair" : "Passer en mode sombre"
      );
      themeToggleBtn.innerHTML =
        theme === "dark"
          ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`
          : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
    }
  }

  function toggleTheme() {
    const current = rootEl.getAttribute("data-theme") || "dark";
    const next = current === "dark" ? "light" : "dark";
    applyTheme(next);
    showToast(`Thème ${next === "dark" ? "sombre" : "clair"} activé`);
  }

  applyTheme(getInitialTheme());
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", toggleTheme);
  }

  /* --------------------------------------------------------------------------
   * 2. CURSOR SPOTLIGHT & MOBILE MENU
   * -------------------------------------------------------------------------- */
  window.addEventListener(
    "pointermove",
    (e) => {
      rootEl.style.setProperty("--mouse-x", `${e.clientX}px`);
      rootEl.style.setProperty("--mouse-y", `${e.clientY}px`);
    },
    { passive: true }
  );

  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const navLinksContainer = document.getElementById("nav-links");
  if (mobileMenuBtn && navLinksContainer) {
    mobileMenuBtn.addEventListener("click", () => {
      navLinksContainer.classList.toggle("open");
    });
    navLinksContainer.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => navLinksContainer.classList.remove("open"));
    });
  }

  /* --------------------------------------------------------------------------
   * 3. TOAST NOTIFICATIONS & CLIPBOARD HELPER
   * -------------------------------------------------------------------------- */
  function showToast(message) {
    const container = document.getElementById("toast-container");
    if (!container) return;
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = `
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
      <span>${message}</span>
    `;
    container.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateY(8px)";
      toast.style.transition = "all 0.2s ease";
      setTimeout(() => toast.remove(), 220);
    }, 2800);
  }

  function copyTextToClipboard(text, label) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        showToast(`${label} copié : ${text}`);
      });
    } else {
      const temp = document.createElement("input");
      temp.value = text;
      document.body.appendChild(temp);
      temp.select();
      document.execCommand("copy");
      temp.remove();
      showToast(`${label} copié : ${text}`);
    }
  }

  document.querySelectorAll("[data-copy-email]").forEach((btn) => {
    btn.addEventListener("click", () => copyTextToClipboard(data.profile.email, "Email"));
  });

  document.querySelectorAll("[data-copy-phone]").forEach((btn) => {
    btn.addEventListener("click", () => copyTextToClipboard(data.profile.phone, "Téléphone"));
  });

  /* --------------------------------------------------------------------------
   * 4. HERO WORKBENCH (CODE TABS + INTERACTIVE TERMINAL)
   * -------------------------------------------------------------------------- */
  const workbenchBody = document.getElementById("workbench-body");
  const workbenchTabs = document.querySelectorAll("[data-workbench-tab]");

  function renderWorkbenchTab(tabName) {
    if (!workbenchBody) return;
    workbenchTabs.forEach((t) =>
      t.classList.toggle("active", t.getAttribute("data-workbench-tab") === tabName)
    );

    if (tabName === "profile") {
      workbenchBody.innerHTML = `
        <div class="code-line"><span class="line-num">01</span><span><span class="tok-comment"># profil_ml_engineer.py</span></span></div>
        <div class="code-line"><span class="line-num">02</span><span><span class="tok-kw">class</span> <span class="tok-fn">SebastienYE</span>:</span></div>
        <div class="code-line"><span class="line-num">03</span><span>    <span class="tok-prop">titre</span> = <span class="tok-str">"Ingénieur ML / IA (5 ans d'exp.)"</span></span></div>
        <div class="code-line"><span class="line-num">04</span><span>    <span class="tok-prop">cibles</span> = [<span class="tok-str">"Ingénieur ML/IA"</span>, <span class="tok-str">"Consultant Data"</span>, <span class="tok-str">"Data Engineer"</span>]</span></div>
        <div class="code-line"><span class="line-num">05</span><span>    <span class="tok-prop">disponibilite</span> = <span class="tok-str">"Immédiate (Temps plein)"</span></span></div>
        <div class="code-line"><span class="line-num">06</span><span>    <span class="tok-prop">diplome</span> = <span class="tok-str">"ECE Paris — Master Big Data &amp; Analytics"</span></span></div>
        <div class="code-line"><span class="line-num">07</span><span>    <span class="tok-prop">certifications</span> = [</span></div>
        <div class="code-line"><span class="line-num">08</span><span>        <span class="tok-str">"GCP Professional Machine Learning Engineer"</span>,</span></div>
        <div class="code-line"><span class="line-num">09</span><span>        <span class="tok-str">"GreenIT.fr — Écoconception numérique"</span></span></div>
        <div class="code-line"><span class="line-num">10</span><span>    ]</span></div>
        <div class="code-line"><span class="line-num">11</span><span>    <span class="tok-prop">localisation</span> = <span class="tok-str">"Paris 15e, France (Permis B)"</span></span></div>
        <div class="code-line"><span class="line-num">12</span><span>    <span class="tok-prop">contact</span> = <span class="tok-str">"${data.profile.email}"</span></span></div>
      `;
    } else if (tabName === "stack") {
      workbenchBody.innerHTML = `
        <div class="code-line"><span class="line-num">01</span><span>{</span></div>
        <div class="code-line"><span class="line-num">02</span><span>  <span class="tok-prop">"ml_ia"</span>: [<span class="tok-str">"Python"</span>, <span class="tok-str">"PyTorch"</span>, <span class="tok-str">"TensorFlow"</span>, <span class="tok-str">"Dataiku DSS"</span>],</span></div>
        <div class="code-line"><span class="line-num">03</span><span>  <span class="tok-prop">"cloud_data"</span>: [</span></div>
        <div class="code-line"><span class="line-num">04</span><span>    <span class="tok-str">"GCP Vertex AI"</span>, <span class="tok-str">"GCP BigQuery"</span>,</span></div>
        <div class="code-line"><span class="line-num">05</span><span>    <span class="tok-str">"AWS SageMaker"</span>, <span class="tok-str">"SQL"</span>, <span class="tok-str">"FastAPI"</span></span></div>
        <div class="code-line"><span class="line-num">06</span><span>  ],</span></div>
        <div class="code-line"><span class="line-num">07</span><span>  <span class="tok-prop">"software_web"</span>: [<span class="tok-str">"Vue.js"</span>, <span class="tok-str">"React.js"</span>, <span class="tok-str">"Node.js"</span>, <span class="tok-str">"C/C++"</span>, <span class="tok-str">"Java"</span>],</span></div>
        <div class="code-line"><span class="line-num">08</span><span>  <span class="tok-prop">"devops_agile"</span>: [<span class="tok-str">"GitLab"</span>, <span class="tok-str">"Ansible"</span>, <span class="tok-str">"Jira"</span>, <span class="tok-str">"Confluence"</span>],</span></div>
        <div class="code-line"><span class="line-num">09</span><span>  <span class="tok-prop">"langues"</span>: [<span class="tok-str">"Français (Natif)"</span>, <span class="tok-str">"Anglais (TOEIC 865)"</span>, <span class="tok-str">"Chinois"</span>, <span class="tok-str">"Espagnol"</span>]</span></div>
        <div class="code-line"><span class="line-num">10</span><span>}</span></div>
      `;
    } else if (tabName === "terminal") {
      workbenchBody.innerHTML = `
        <div id="term-log" class="terminal-output">
          <div class="term-entry">
            <span class="term-prompt">sebastien@ml-portfolio:~$</span> <span class="term-cmd">whoami</span>
            <div class="term-res">${data.profile.name} — ${data.profile.role}. Tapez <strong>help</strong> ou cliquez sur une commande ci-dessous.</div>
          </div>
        </div>
        <form id="term-form" class="terminal-input-row" autocomplete="off">
          <span class="term-prompt">sebastien@ml-portfolio:~$</span>
          <input id="term-input" class="terminal-input" type="text" placeholder="Tapez help, experiences, competences, certifications, contact..." aria-label="Terminal interactif" />
        </form>
      `;
      const termForm = document.getElementById("term-form");
      const termInput = document.getElementById("term-input");
      if (termForm && termInput) {
        termInput.focus();
        termForm.addEventListener("submit", (e) => {
          e.preventDefault();
          const raw = termInput.value.trim();
          if (!raw) return;
          executeTerminalCommand(raw);
          termInput.value = "";
        });
      }
    }
  }

  function executeTerminalCommand(rawCmd) {
    const cmd = rawCmd.toLowerCase();
    const termLog = document.getElementById("term-log");
    if (!termLog) {
      renderWorkbenchTab("terminal");
      setTimeout(() => executeTerminalCommand(rawCmd), 30);
      return;
    }

    if (cmd === "clear") {
      termLog.innerHTML = "";
      return;
    }

    let responseHtml = "";
    if (cmd === "help") {
      responseHtml = `Commandes disponibles : <strong>experiences</strong>, <strong>projets</strong>, <strong>competences</strong>, <strong>certifications</strong>, <strong>contact</strong>, <strong>theme</strong>, <strong>clear</strong>`;
    } else if (cmd === "whoami") {
      responseHtml = `${data.profile.name} — ${data.profile.tagline}`;
    } else if (cmd === "projets" || cmd === "projects") {
      responseHtml = data.projects
        .map((p) => `• <strong>${p.title}</strong> (${p.year}) — ${p.subtitle}`)
        .join("<br/>");
    } else if (cmd === "competences" || cmd === "skills") {
      responseHtml = data.skills
        .map((s) => `• <strong>${s.category} :</strong> ${s.items.map((i) => i.name).join(", ")}`)
        .join("<br/>");
    } else if (cmd === "experiences" || cmd === "experience") {
      responseHtml = data.experience
        .map((e) => `• <strong>${e.role}</strong> @ ${e.company} (${e.period})`)
        .join("<br/>");
    } else if (cmd === "certifications" || cmd === "certifs") {
      responseHtml = data.profile.certifications
        .map((c) => `• <strong>${c.title}</strong> — ${c.issuer} (${c.badge})`)
        .join("<br/>");
    } else if (cmd === "contact") {
      copyTextToClipboard(data.profile.email, "Email");
      responseHtml = `Email : <strong>${data.profile.email}</strong> (copié !) | Tél : <strong>${data.profile.phone}</strong> | Adresse : ${data.profile.address}`;
    } else if (cmd === "theme") {
      toggleTheme();
      responseHtml = `Thème basculé en mode <strong>${rootEl.getAttribute("data-theme")}</strong>.`;
    } else {
      responseHtml = `Commande inconnue : "${rawCmd}". Tapez <strong>help</strong> pour afficher les commandes.`;
    }

    const entry = document.createElement("div");
    entry.className = "term-entry";
    entry.innerHTML = `
      <span class="term-prompt">sebastien@ml-portfolio:~$</span> <span class="term-cmd">${rawCmd}</span>
      <div class="term-res">${responseHtml}</div>
    `;
    termLog.appendChild(entry);
    workbenchBody.scrollTop = workbenchBody.scrollHeight;
  }

  workbenchTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      renderWorkbenchTab(tab.getAttribute("data-workbench-tab"));
    });
  });

  document.querySelectorAll("[data-term-cmd]").forEach((chip) => {
    chip.addEventListener("click", () => {
      const cmd = chip.getAttribute("data-term-cmd");
      renderWorkbenchTab("terminal");
      setTimeout(() => executeTerminalCommand(cmd), 30);
    });
  });

  renderWorkbenchTab("profile");

  /* --------------------------------------------------------------------------
   * 5. BENTO GRID DYNAMIC WIDGETS (LIVE CLOCK)
   * -------------------------------------------------------------------------- */
  const clockEl = document.getElementById("live-clock");
  function updateClock() {
    if (!clockEl) return;
    try {
      const now = new Date();
      const formatter = new Intl.DateTimeFormat("fr-FR", {
        timeZone: data.profile.timezone || "Europe/Paris",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false
      });
      clockEl.textContent = `${formatter.format(now)} (Paris)`;
    } catch (_) {
      clockEl.textContent = new Date().toLocaleTimeString();
    }
  }
  updateClock();
  setInterval(updateClock, 1000);

  /* --------------------------------------------------------------------------
   * 6. BESPOKE SVG ARCHITECTURAL ART FOR PROJECT CARDS
   * -------------------------------------------------------------------------- */
  function getProjectVisualSvg(type, accent) {
    if (type === "mesh") {
      return `<svg viewBox="0 0 480 205" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="480" height="205" fill="#070b14"/>
        <circle cx="240" cy="102" r="78" stroke="${accent}" stroke-opacity="0.18" stroke-dasharray="4 4"/>
        <circle cx="240" cy="102" r="44" stroke="${accent}" stroke-opacity="0.35"/>
        <line x1="110" y1="52" x2="240" y2="102" stroke="${accent}" stroke-opacity="0.5" stroke-width="1.5"/>
        <line x1="370" y1="52" x2="240" y2="102" stroke="#818cf8" stroke-opacity="0.5" stroke-width="1.5"/>
        <line x1="125" y1="158" x2="240" y2="102" stroke="#10b981" stroke-opacity="0.5" stroke-width="1.5"/>
        <line x1="355" y1="158" x2="240" y2="102" stroke="${accent}" stroke-opacity="0.5" stroke-width="1.5"/>
        <circle cx="240" cy="102" r="16" fill="${accent}" fill-opacity="0.22" stroke="${accent}" stroke-width="2"/>
        <circle cx="110" cy="52" r="8" fill="#0f172a" stroke="${accent}" stroke-width="2"/>
        <circle cx="370" cy="52" r="8" fill="#0f172a" stroke="#818cf8" stroke-width="2"/>
        <circle cx="125" cy="158" r="8" fill="#0f172a" stroke="#10b981" stroke-width="2"/>
        <circle cx="355" cy="158" r="8" fill="#0f172a" stroke="${accent}" stroke-width="2"/>
        <text x="196" y="106" fill="#f8fafc" font-family="monospace" font-size="10">DATA PIPELINE</text>
      </svg>`;
    }
    if (type === "neural") {
      return `<svg viewBox="0 0 480 205" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="480" height="205" fill="#080716"/>
        <path d="M90 102 C160 40, 320 164, 390 102" stroke="${accent}" stroke-width="2" stroke-opacity="0.55"/>
        <path d="M90 102 C160 164, 320 40, 390 102" stroke="#38bdf8" stroke-width="2" stroke-opacity="0.45"/>
        <rect x="54" y="82" width="84" height="40" rx="8" fill="#131129" stroke="${accent}" stroke-width="1.5"/>
        <rect x="198" y="82" width="84" height="40" rx="8" fill="#131129" stroke="#38bdf8" stroke-width="1.5"/>
        <rect x="342" y="82" width="84" height="40" rx="8" fill="#131129" stroke="#10b981" stroke-width="1.5"/>
        <text x="69" y="106" fill="#e2e8f0" font-family="monospace" font-size="10">FEATURES</text>
        <text x="211" y="106" fill="#38bdf8" font-family="monospace" font-size="10">ML MODEL</text>
        <text x="356" y="106" fill="#10b981" font-family="monospace" font-size="10">IMPACT ✓</text>
      </svg>`;
    }
    if (type === "sync") {
      return `<svg viewBox="0 0 480 205" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="480" height="205" fill="#061214"/>
        <rect x="75" y="48" width="130" height="110" rx="10" fill="#0b1f24" stroke="${accent}" stroke-opacity="0.5"/>
        <rect x="275" y="48" width="130" height="110" rx="10" fill="#0b1f24" stroke="#38bdf8" stroke-opacity="0.5"/>
        <path d="M212 88 L268 88" stroke="${accent}" stroke-width="2" stroke-dasharray="4 4"/>
        <path d="M268 118 L212 118" stroke="#38bdf8" stroke-width="2" stroke-dasharray="4 4"/>
        <rect x="92" y="68" width="74" height="8" rx="4" fill="${accent}" fill-opacity="0.6"/>
        <rect x="92" y="86" width="94" height="6" rx="3" fill="#475569"/>
        <rect x="292" y="68" width="74" height="8" rx="4" fill="#38bdf8" fill-opacity="0.6"/>
        <rect x="292" y="86" width="94" height="6" rx="3" fill="#475569"/>
        <text x="210" y="107" fill="#10b981" font-family="monospace" font-size="10">EPITA × IA</text>
      </svg>`;
    }
    return `<svg viewBox="0 0 480 205" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="480" height="205" fill="#090d18"/>
      <g opacity="0.75">
        <rect x="70" y="120" width="36" height="48" rx="4" fill="${accent}" fill-opacity="0.3" stroke="${accent}"/>
        <rect x="130" y="96" width="36" height="72" rx="4" fill="${accent}" fill-opacity="0.45" stroke="${accent}"/>
        <rect x="190" y="72" width="36" height="96" rx="4" fill="${accent}" fill-opacity="0.6" stroke="${accent}"/>
        <rect x="250" y="54" width="36" height="114" rx="4" fill="${accent}" fill-opacity="0.8" stroke="${accent}"/>
        <rect x="310" y="40" width="36" height="128" rx="4" fill="#38bdf8" fill-opacity="0.9" stroke="#38bdf8"/>
      </g>
    </svg>`;
  }

  /* --------------------------------------------------------------------------
   * 7. PROJECTS RENDERING, FILTERING & CASE STUDY MODAL
   * -------------------------------------------------------------------------- */
  const projectsGrid = document.getElementById("projects-grid");
  const filterBtns = document.querySelectorAll("[data-filter]");

  function renderProjects(category = "all") {
    if (!projectsGrid) return;
    const filtered =
      category === "all"
        ? data.projects
        : data.projects.filter((p) => p.category.toLowerCase() === category.toLowerCase());

    projectsGrid.innerHTML = filtered
      .map(
        (p) => `
      <article class="glass-card project-card" data-project-id="${p.id}">
        <div class="project-visual">
          ${getProjectVisualSvg(p.visualType, p.accentColor)}
          <div class="project-badges-top">
            <span class="project-cat-badge">${p.category}</span>
            <span class="project-status-badge">${p.status} · ${p.year}</span>
          </div>
        </div>
        <div class="project-content">
          <h3 class="project-title">${p.title}</h3>
          <p class="project-subtitle">${p.subtitle}</p>
          <p class="project-desc">${p.description}</p>
          <div class="project-metrics">
            ${p.metrics.map((m) => `<span class="metric-chip">⚡ ${m}</span>`).join("")}
          </div>
          <div class="project-tech-list">
            ${p.tech.map((t) => `<span class="tech-pill">${t}</span>`).join("")}
          </div>
          <div class="project-footer">
            <button type="button" class="project-link-btn" data-open-modal="${p.id}">
              <span>Détails &amp; Réalisations</span>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </button>
            <a href="${p.githubUrl}" target="_blank" rel="noopener noreferrer" class="social-pill" aria-label="Voir sur GitHub">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </article>
    `
      )
      .join("");

    projectsGrid.querySelectorAll("[data-open-modal]").forEach((btn) => {
      btn.addEventListener("click", () => {
        openProjectModal(btn.getAttribute("data-open-modal"));
      });
    });
  }

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderProjects(btn.getAttribute("data-filter"));
    });
  });

  renderProjects("all");

  // Case Study Modal
  const projectModal = document.getElementById("project-modal");
  const projectModalContent = document.getElementById("project-modal-content");

  function openProjectModal(projectId) {
    const p = data.projects.find((item) => item.id === projectId);
    if (!p || !projectModal || !projectModalContent) return;

    projectModalContent.innerHTML = `
      <div class="modal-header">
        <div>
          <span class="section-eyebrow" style="margin-bottom:8px;">${p.category} · ${p.year}</span>
          <h3 class="section-title" style="font-size:1.75rem;margin-bottom:4px;">${p.title}</h3>
          <p class="project-subtitle" style="margin-bottom:0;">${p.subtitle}</p>
        </div>
        <button type="button" class="icon-btn" id="close-project-modal" aria-label="Fermer la fenêtre">✕</button>
      </div>
      <div class="project-metrics" style="margin-bottom:22px;">
        ${p.metrics.map((m) => `<span class="metric-chip">⚡ ${m}</span>`).join("")}
      </div>
      <div class="modal-section">
        <h4>Contexte &amp; Enjeux Métier</h4>
        <p class="bento-text">${p.problem}</p>
      </div>
      <div class="modal-section">
        <h4>Approche Technique &amp; Architecture</h4>
        <p class="bento-text">${p.architecture}</p>
      </div>
      <div class="modal-section">
        <h4>Réalisations Clés &amp; Impact</h4>
        <ul class="timeline-bullets">
          ${p.highlights.map((h) => `<li>${h}</li>`).join("")}
        </ul>
      </div>
      <div class="modal-section">
        <h4>Environnement Technique</h4>
        <div class="project-tech-list" style="margin-bottom:0;">
          ${p.tech.map((t) => `<span class="tech-pill">${t}</span>`).join("")}
        </div>
      </div>
      <div style="display:flex;gap:12px;margin-top:24px;padding-top:16px;border-top:1px solid var(--border-subtle);">
        <a href="${data.profile.resumeUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">Télécharger le CV (PDF)</a>
        <button type="button" class="btn btn-secondary btn-sm" id="close-project-modal-bottom">Fermer</button>
      </div>
    `;

    projectModal.classList.add("open");
    projectModal.setAttribute("aria-hidden", "false");

    document.getElementById("close-project-modal")?.addEventListener("click", closeProjectModal);
    document
      .getElementById("close-project-modal-bottom")
      ?.addEventListener("click", closeProjectModal);
  }

  function closeProjectModal() {
    if (!projectModal) return;
    projectModal.classList.remove("open");
    projectModal.setAttribute("aria-hidden", "true");
  }

  projectModal?.addEventListener("click", (e) => {
    if (e.target === projectModal) closeProjectModal();
  });

  /* --------------------------------------------------------------------------
   * 8. SKILLS & EXPERIENCE TIMELINE RENDERING
   * -------------------------------------------------------------------------- */
  const skillsGrid = document.getElementById("skills-grid");
  if (skillsGrid) {
    const iconSvgMap = {
      layout: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>`,
      server: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>`,
      cloud: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>`,
      cpu: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/></svg>`
    };

    skillsGrid.innerHTML = data.skills
      .map(
        (cat) => `
      <div class="glass-card skill-card">
        <div class="skill-card-header">
          <div class="skill-icon-box">${iconSvgMap[cat.icon] || iconSvgMap.cpu}</div>
          <div>
            <h3 class="skill-cat-title">${cat.category}</h3>
            <p class="skill-cat-desc">${cat.description}</p>
          </div>
        </div>
        <div class="skill-bars">
          ${cat.items
            .map(
              (item) => `
            <div>
              <div class="skill-bar-top">
                <span>${item.name}</span>
                <span class="skill-pct">${item.level}%</span>
              </div>
              <div class="skill-track">
                <div class="skill-fill" style="width:${item.level}%"></div>
              </div>
            </div>
          `
            )
            .join("")}
        </div>
      </div>
    `
      )
      .join("");
  }

  const timelineContainer = document.getElementById("timeline-container");
  if (timelineContainer) {
    timelineContainer.innerHTML = data.experience
      .map(
        (exp) => `
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="glass-card timeline-card">
          <div class="timeline-header">
            <div>
              <h3 class="timeline-role">${exp.role}</h3>
              <div class="timeline-company">${exp.company} · ${exp.location}</div>
            </div>
            <div class="timeline-meta">
              <span class="timeline-badge">${exp.type}</span>
              <span>${exp.period}</span>
            </div>
          </div>
          <p class="timeline-summary">${exp.summary}</p>
          <ul class="timeline-bullets">
            ${exp.achievements.map((a) => `<li>${a}</li>`).join("")}
          </ul>
          <div class="project-tech-list" style="margin-bottom:0;">
            ${exp.tech.map((t) => `<span class="tech-pill">${t}</span>`).join("")}
          </div>
        </div>
      </div>
    `
      )
      .join("");
  }

  /* --------------------------------------------------------------------------
   * 9. CONTACT FORM COMPOSER
   * -------------------------------------------------------------------------- */
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("sender-name")?.value.trim() || "Recruteur / Contact";
      const email = document.getElementById("sender-email")?.value.trim() || "";
      const subject =
        document.getElementById("sender-subject")?.value.trim() ||
        "Opportunité Ingénieur ML / IA / Data";
      const message = document.getElementById("sender-message")?.value.trim() || "";

      const body = encodeURIComponent(
        `Bonjour Sebastien,\n\n${message}\n\nCordialement,\n${name}${email ? ` (${email})` : ""}`
      );
      const mailtoUrl = `mailto:${data.profile.email}?subject=${encodeURIComponent(
        subject
      )}&body=${body}`;

      showToast("Ouverture de votre messagerie...");
      window.location.href = mailtoUrl;
    });
  }

  /* --------------------------------------------------------------------------
   * 10. COMMAND PALETTE (⌘K / Ctrl+K)
   * -------------------------------------------------------------------------- */
  const cmdModal = document.getElementById("cmd-modal");
  const cmdInput = document.getElementById("cmd-input");
  const cmdList = document.getElementById("cmd-list");
  const cmdTrigger = document.getElementById("cmd-trigger");

  const commands = [
    {
      label: "Télécharger le CV Officiel (PDF)",
      shortcut: "PDF",
      action: () => window.open(data.profile.resumeUrl, "_blank")
    },
    {
      label: "Voir le CV Interactif Imprimable",
      shortcut: "CV Web",
      action: () => window.open(data.profile.resumeHtmlUrl, "_blank")
    },
    {
      label: "Aller aux Expériences & Formation",
      shortcut: "#experience",
      action: () => (window.location.hash = "#experience")
    },
    {
      label: "Aller aux Projets & Missions",
      shortcut: "#projects",
      action: () => (window.location.hash = "#projects")
    },
    {
      label: "Aller aux Compétences (Hard & Soft Skills)",
      shortcut: "#skills",
      action: () => (window.location.hash = "#skills")
    },
    {
      label: "Aller aux Certifications, Langues & Profil",
      shortcut: "#about",
      action: () => (window.location.hash = "#about")
    },
    {
      label: `Copier l'email (${data.profile.email})`,
      shortcut: "Email",
      action: () => copyTextToClipboard(data.profile.email, "Email")
    },
    {
      label: `Copier le téléphone (${data.profile.phone})`,
      shortcut: "Tél",
      action: () => copyTextToClipboard(data.profile.phone, "Téléphone")
    },
    {
      label: "Basculer le thème Sombre / Clair",
      shortcut: "Thème",
      action: () => toggleTheme()
    },
    {
      label: `Ouvrir GitHub (@${data.profile.handle})`,
      shortcut: "GitHub",
      action: () => window.open(data.profile.github, "_blank")
    }
  ];

  function renderCmdList(query = "") {
    if (!cmdList) return;
    const q = query.toLowerCase().trim();
    const matched = commands.filter(
      (c) => c.label.toLowerCase().includes(q) || c.shortcut.toLowerCase().includes(q)
    );

    cmdList.innerHTML = matched
      .map(
        (c, idx) => `
      <button type="button" class="cmd-item ${idx === 0 ? "selected" : ""}" data-cmd-idx="${commands.indexOf(
          c
        )}">
        <span>${c.label}</span>
        <span class="cmd-item-shortcut">${c.shortcut}</span>
      </button>
    `
      )
      .join("");

    cmdList.querySelectorAll(".cmd-item").forEach((btn) => {
      btn.addEventListener("click", () => {
        const idx = Number(btn.getAttribute("data-cmd-idx"));
        closeCmdModal();
        commands[idx]?.action();
      });
    });
  }

  function openCmdModal() {
    if (!cmdModal) return;
    cmdModal.classList.add("open");
    cmdModal.setAttribute("aria-hidden", "false");
    renderCmdList("");
    if (cmdInput) {
      cmdInput.value = "";
      setTimeout(() => cmdInput.focus(), 40);
    }
  }

  function closeCmdModal() {
    if (!cmdModal) return;
    cmdModal.classList.remove("open");
    cmdModal.setAttribute("aria-hidden", "true");
  }

  cmdTrigger?.addEventListener("click", openCmdModal);
  cmdModal?.addEventListener("click", (e) => {
    if (e.target === cmdModal) closeCmdModal();
  });

  cmdInput?.addEventListener("input", (e) => {
    renderCmdList(e.target.value);
  });

  window.addEventListener("keydown", (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      if (cmdModal?.classList.contains("open")) {
        closeCmdModal();
      } else {
        openCmdModal();
      }
    } else if (e.key === "Escape") {
      closeCmdModal();
      closeProjectModal();
    }
  });
})();
