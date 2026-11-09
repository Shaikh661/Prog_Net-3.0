const sections = [
  { title: "The Chronicle", items: [
    ["The Beginning", "chronicle/beginning"], ["Prog-Net 1.0", "chronicle/prog-net-1"], ["Prog-Net 2.0", "chronicle/prog-net-2"], ["Prog-Net 3.0", "chronicle/prog-net-3"], ["Evolution & Milestones", "chronicle/milestones"]
  ] },
  { title: "The People", items: [
    ["The Founding Team", "people/founding-team"], ["Team Structure", "people/team-structure"], ["Members & Responsibilities", "people/members"], ["Alliances & Collaborations", "people/collaborations"], ["Acknowledgements", "people/acknowledgements"]
  ] },
  { title: "Our Products", items: [
    ["Product Overview", "products"], ["Handmade Marketplace", "products/handmade-marketplace"], ["MicroJobs", "products/microjobs"], ["Modern Ticketing System", "products/ticketing-system"]
  ] },
  { title: "Development", items: [
    ["Technology Stack", "development/technology-stack"], ["Development Methodology", "development/methodology"], ["Architecture Overview", "development/architecture"], ["Project Structure", "development/project-structure"], ["What's New in Prog-Net 3.0", "development/whats-new"]
  ] },
  { title: "The Road Ahead", items: [
    ["Future Vision", "road-ahead/future-vision"], ["Development Roadmap", "road-ahead/development-roadmap"], ["Planned Features", "road-ahead/planned-features"], ["Long-Term Goals", "road-ahead/long-term-goals"]
  ] },
  { title: "About", items: [["About Prog-Net", "about"]] }
];

const requiredProductSections = [
  ["Product overview", "Purpose and intended scope"],
  ["Problem statement", "The problem this product is meant to address"],
  ["Proposed solution", "The proposed approach and how it relates to the problem"],
  ["Target audience", "Who the product is intended to serve"],
  ["Core features", "Confirmed capabilities and their current status"],
  ["How it works", "The user and system flow"],
  ["User experience", "Interaction patterns, accessibility, and design decisions"],
  ["Technology stack", "Languages, frameworks, services, and tools"],
  ["Architecture overview", "Components, integrations, and data flow"],
  ["What's new", "Changes and additions confirmed for this product"],
  ["Future development", "Ideas under consideration, clearly separated from commitments"]
];

const pages = {
  home: { title: "Prog-Net 3.0 documentation", group: "Home", summary: "A guide to Prog-Net's evolution, people, products, development, and future direction.", landing: true },
  "chronicle/beginning": {
    title: "The Beginning", group: "The Chronicle", summary: "The origin story, original idea, initial objectives, and early challenges.",
    intro: "Every project starts with a question. This page records how Prog-Net began and what the first version set out to explore.",
    sections: [
      ["The original idea", "The initial concept and the circumstances that led to Prog-Net are not yet documented here.", "Add the origin story in the team's own words, including when and where the idea took shape."],
      ["Initial objectives", "The original goals should be recorded from project notes or first-hand accounts.", "List the objectives agreed by the founding contributors and identify the source for each."],
      ["Early challenges", "The first obstacles and decisions are part of the project's history, but have not yet been verified.", "Document challenges, trade-offs, and what the team learned without embellishing the account."]
    ]
  },
  "chronicle/prog-net-1": {
    title: "Prog-Net 1.0", group: "The Chronicle", summary: "The first generation: a C-based starting point and the lessons it left.",
    intro: "Prog-Net 1.0 was the first generation of the project. Its confirmed technical starting point was C; further details belong here once verified.",
    sections: [
      ["First generation", "The first release established the project's initial direction. Specific release details and dates are not available in the current project brief.", "Add the release context and verified scope."],
      ["C and the original features", "The first generation used the C programming language. The exact feature set has not been confirmed.", "List features only after checking source code, project records, or contributor recollections."],
      ["Team experience", "First-hand accounts from the people who worked on this generation are needed.", "Add attributable reflections and contributions when names and permission are confirmed."],
      ["Lessons learned", "Capture the lessons that informed later generations, supported by project history.", "Record what changed as a result rather than inferring motivations."]
    ]
  },
  "chronicle/prog-net-2": {
    title: "Prog-Net 2.0", group: "The Chronicle", summary: "The second generation introduced Java Swing, games, utilities, and a lobby system.",
    intro: "Prog-Net 2.0 expanded the project into a Java Swing generation. The project brief also identifies games, utilities, and a lobby system as part of this chapter.",
    sections: [
      ["A new generation", "The shift to Java Swing marks a change in the project's technical direction. Version dates and release context still need confirmation.", "Add verified chronology and links to preserved work."],
      ["Games, utilities, and lobby", "Games, utilities, and a lobby system are identified as part of Prog-Net 2.0. Their detailed behavior is not yet documented.", "Describe each component using confirmed implementation details."],
      ["Major improvements", "Specific improvements over Prog-Net 1.0 have not been independently recorded.", "Compare the generations using documented changes, not assumptions."],
      ["What this generation taught us", "Contributor reflections and project records are needed to explain the decisions that informed Prog-Net 3.0.", "Add attributed lessons when accounts are available."]
    ]
  },
  "chronicle/prog-net-3": {
    title: "Prog-Net 3.0", group: "The Chronicle", summary: "The current generation's product direction and development approach.",
    intro: "Prog-Net 3.0 marks a new direction organized around three independent product concepts. This documentation distinguishes that confirmed direction from details that are still to be supplied.",
    sections: [
      ["A new direction", "Prog-Net 3.0 shifts from the earlier generations toward three independent products. Their scope and implementation details remain to be confirmed."],
      ["Three product concepts", "The project brief names Handmade Marketplace, MicroJobs, and Modern Ticketing System.", "These names establish the product concepts; they do not confirm specific features or technical implementation."],
      ["New objectives", "The objectives for this generation should be documented from approved project materials.", "Add the team's confirmed goals and the criteria used to evaluate progress."],
      ["A different development approach", "The project brief describes a changed development approach but does not specify its process.", "Document actual workflow and decisions in Development Methodology."]
    ]
  },
  "chronicle/milestones": {
    title: "Evolution & Milestones", group: "The Chronicle", summary: "A verified timeline of important events, decisions, and changes across generations.",
    intro: "This timeline is intentionally evidence-led. No dates have been supplied, so milestones stay undated until the project history can be verified.",
    sections: [
      ["Project timeline", "Dates and milestone descriptions are placeholders until verified.", "Add dates, source links, and a concise description for each milestone.", "diagram"],
      ["Major achievements", "Achievements should reflect documented outcomes rather than estimates or unverified claims.", "Record the evidence and people involved for each entry."],
      ["Important decisions", "Significant technical and product decisions can be added here with their context and consequences.", "Link decisions to source discussions or project records."],
      ["Across the generations", "The known generation markers are C for Prog-Net 1.0; Java Swing, games, utilities, and a lobby system for Prog-Net 2.0; and three product concepts for Prog-Net 3.0."]
    ]
  },
  "people/founding-team": {
    title: "The Founding Team", group: "The People", summary: "Profiles of the people who started Prog-Net, using verified names and contributions.",
    intro: "Names and biographies have not been supplied. Add profiles only after confirming each person's preferred name, role, and contribution.",
    sections: [["Founding contributors", "No member identities are confirmed in the material currently available.", "Replace this placeholder with consented profiles: name, role at the time, skills, contribution, and an optional link."]]
  },
  "people/team-structure": {
    title: "Team Structure", group: "The People", summary: "How the Prog-Net team is organized and how responsibilities are assigned.",
    intro: "The team's structure and reporting or collaboration model have not been provided.",
    sections: [["Organization", "Add the confirmed team structure here. Avoid implying formal roles or hierarchy without approval.", "Include teams or workstreams, how responsibilities are assigned, and who maintains this information."]]
  },
  "people/members": {
    title: "Members & Responsibilities", group: "The People", summary: "Verified member profiles, skills, responsibilities, and contributions.",
    intro: "This directory is a template, not a roster. Confirm names, preferred descriptions, roles, and contributions before publishing.",
    sections: [["Member directory", "No names or roles have been supplied for publication.", "For each confirmed member, add their name, role or responsibility, relevant skills, and contribution. Clearly label former or current participation where known."]]
  },
  "people/collaborations": {
    title: "Alliances & Collaborations", group: "The People", summary: "A record of confirmed collaborators and collaboration history.",
    intro: "No partners or alliances have been confirmed in the available project information.",
    sections: [["Collaboration history", "Do not interpret the absence of published information as proof that no collaborations exist.", "Add only confirmed organizations or individuals, with the collaboration scope, dates if known, and approval to publish."]]
  },
  "people/acknowledgements": {
    title: "Acknowledgements", group: "The People", summary: "Recognition for contributors, reviewers, and supporters.",
    intro: "Acknowledgements should be accurate, specific, and published with permission where appropriate.",
    sections: [["Contributors and supporters", "No contributor list has been provided.", "Add names and the kind of contribution being recognized after confirming spelling and permission."]]
  },
  products: {
    title: "Our Products", group: "Our Products", summary: "An overview of the three product concepts in the Prog-Net 3.0 direction.",
    intro: "Prog-Net 3.0 is organized around three independent product concepts. Their names are confirmed; detailed capabilities and implementation are not.",
    cards: [
      ["Handmade Marketplace", "A product concept named in the Prog-Net 3.0 brief. Purpose, users, and functionality await confirmation.", "products/handmade-marketplace", "01"],
      ["MicroJobs", "A product concept named in the Prog-Net 3.0 brief. Scope and capabilities await confirmation.", "products/microjobs", "02"],
      ["Modern Ticketing System", "A product concept named in the Prog-Net 3.0 brief. Workflows and technical details await confirmation.", "products/ticketing-system", "03"]
    ],
    sections: [["Product documentation status", "The pages below provide a consistent structure for confirmed product information. Blank or unknown details are explicitly marked rather than filled with invented features.", "Each product page includes purpose, audience, proposed solution, user experience, technical overview, and future development sections."]]
  },
  "development/technology-stack": {
    title: "Technology Stack", group: "Development", summary: "Languages, frameworks, services, and tools used by Prog-Net 3.0.",
    intro: "The technology stack for Prog-Net 3.0 has not been supplied. Previous-generation technologies are documented separately in the Chronicle.",
    sections: [["Languages and frameworks", "No Prog-Net 3.0 language or framework has been confirmed.", "List confirmed technologies, versions where relevant, and the product or service where each is used."], ["Tools and services", "Build, design, hosting, storage, and collaboration tools are unknown.", "Add tools only after checking the project repositories and team-approved records."]]
  },
  "development/methodology": {
    title: "Development Methodology", group: "Development", summary: "The team's workflow, review practices, and release process.",
    intro: "The development process is not specified in the current project information.",
    sections: [["Workflow", "Document the actual process from planning through implementation and release.", "Include how work is proposed, reviewed, tested, and documented."], ["Technical decisions", "Record important decisions with context, alternatives considered, and consequences.", "Link to decision records when available rather than presenting assumptions as policy."]]
  },
  "development/architecture": {
    title: "Architecture Overview", group: "Development", summary: "System boundaries, components, and data flow for confirmed product architecture.",
    intro: "Architecture details are not yet available. This page reserves space for reviewed diagrams and explanations.",
    sections: [["System context", "No system boundaries or integrations have been confirmed.", "Add the systems, users, external services, and trust boundaries that have been verified.", "diagram"], ["Product architecture", "The three products are identified as independent concepts; their implementation and relationships are not specified.", "Add architecture diagrams after validating them with the technical team."]]
  },
  "development/project-structure": {
    title: "Project Structure", group: "Development", summary: "Repository layout, application boundaries, and ownership.",
    intro: "No Prog-Net 3.0 repository structure has been supplied.",
    sections: [["Repository layout", "Add a current and reviewed directory tree for each relevant repository.", "Explain the purpose and ownership of major directories without exposing secrets or private configuration."], ["Application boundaries", "Document confirmed service and package boundaries, if applicable.", "Link each boundary to the architecture overview."]]
  },
  "development/whats-new": {
    title: "What's New in Prog-Net 3.0", group: "Development", summary: "Verified changes in product direction and implementation compared with previous generations.",
    intro: "This page separates the confirmed change in product direction from technical improvements that still need evidence.",
    sections: [["Confirmed direction changes", "Prog-Net 3.0 introduces three independent product concepts: Handmade Marketplace, MicroJobs, and Modern Ticketing System.", "This describes the stated direction, not a claim that the products are complete or launched."], ["Technical improvements", "No specific implementation improvements have been confirmed.", "Add a version-to-version comparison only when supported by implementation or release evidence."]]
  },
  "road-ahead/future-vision": {
    title: "Future Vision", group: "The Road Ahead", summary: "The intended future direction, separated from committed delivery.",
    intro: "The project brief describes a future direction but does not provide an approved vision statement or delivery commitment.",
    sections: [["Direction", "Add the team's approved statement of what Prog-Net aims to become.", "Mark aspirations as vision, not as guaranteed outcomes."], ["Principles", "Document the principles guiding long-term product and technical decisions once confirmed.", "Include the source and review date for the approved principles."]]
  },
  "road-ahead/development-roadmap": {
    title: "Development Roadmap", group: "The Road Ahead", summary: "A roadmap that clearly distinguishes confirmed plans from ideas and completed work.",
    intro: "No dates or committed milestones have been provided. This roadmap is a structure for publishing reviewed priorities, not a schedule.",
    sections: [["Roadmap status", "No delivery dates, release commitments, or prioritized milestones are confirmed.", "Add only approved milestones with status, owner, and review date. Keep tentative ideas visibly separate.", "diagram"], ["Completed work", "Move work here only after its completion has been verified.", "Link each completed item to a release, change log, or other evidence."]]
  },
  "road-ahead/planned-features": {
    title: "Planned Features", group: "The Road Ahead", summary: "Proposed and approved product capabilities with explicit status labels.",
    intro: "No product features have been confirmed as planned. Product names alone do not establish feature scope.",
    sections: [["Proposed capabilities", "Feature proposals have not been supplied.", "For each proposal, record the product, status (idea, under review, approved, or in progress), and a link to the decision. Do not list proposals as completed."], ["Status definitions", "Completed: verified as delivered. In progress: work has started. Approved: accepted for future work. Under review: being evaluated. Idea: not yet committed."]]
  },
  "road-ahead/long-term-goals": {
    title: "Long-Term Goals", group: "The Road Ahead", summary: "Long-term ambitions and priorities when formally agreed by the team.",
    intro: "Long-term goals have not been supplied. Publish them only when their wording and status are agreed.",
    sections: [["Goals and priorities", "Add confirmed long-term goals with their intended outcomes and review cadence.", "Distinguish measurable goals from general ambitions and avoid unsupported dates or metrics."]]
  },
  about: {
    title: "About Prog-Net", group: "About", summary: "Project context, documentation ownership, credits, and useful links.",
    intro: "Prog-Net is documented here as a project evolving across three generations. This site is structured to explain its history and current direction without treating unknown details as fact.",
    sections: [["About this documentation", "This site is a documentation framework for the Prog-Net 3.0 project. Content marked as awaiting confirmation should be completed by project contributors before it is treated as official fact.", "Documentation owner, review process, and last-reviewed date: to be confirmed."], ["About The Foundry", "The Foundry has not been confirmed as Prog-Net's official identity.", "Add an organization description only if the team confirms this name and its relationship to Prog-Net."], ["Credits and contact", "Documentation contributors and official contact details have not been supplied.", "Add approved contributor credits, a monitored contact address, and official external links when available."]]
  }
};

for (const [slug, title] of [
  ["handmade-marketplace", "Handmade Marketplace"],
  ["microjobs", "MicroJobs"],
  ["ticketing-system", "Modern Ticketing System"]
]) {
  const sectionsForProduct = requiredProductSections.map(([heading, detail]) => [
    heading,
    `${detail} for ${title} has not been confirmed in the available project information.`,
    "Add reviewed, product-specific information here. Keep proposals separate from capabilities that are implemented or approved."
  ]);
  sectionsForProduct.splice(7, 0, ["Product preview", `No approved product screenshots or interface designs have been provided for ${title}.`, "Add reviewed screenshots or prototypes here, with descriptive alt text and any required attribution.", "screenshot"]);
  sectionsForProduct.splice(10, 0, ["Architecture diagram", `No architecture has been confirmed for ${title}.`, "Replace this placeholder with a reviewed diagram when system components and data flows are known.", "diagram"]);
  pages[`products/${slug}`] = {
    title, group: "Our Products",
    summary: `${title}: product purpose, proposed solution, audience, capabilities, technical direction, and future development.`,
    intro: `This page documents ${title}, one of the three product concepts named for Prog-Net 3.0. Product-specific details remain unconfirmed.`,
    sections: sectionsForProduct
  };
}

const pageOrder = ["home", ...sections.flatMap((group) => group.items.map((item) => item[1]))];
const pageContent = document.querySelector("#page-content");
const sideNav = document.querySelector("#side-nav");
const search = document.querySelector("#docs-search");
const results = document.querySelector("#search-results");
const sidebar = document.querySelector("#sidebar");
const menuButton = document.querySelector(".mobile-menu");
const backdrop = document.querySelector("#mobile-backdrop");

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[character]);
}

function pageUrl(slug) {
  return slug === "home" ? "index.html" : `?page=${encodeURIComponent(slug)}`;
}

function renderSidebar(currentSlug) {
  sideNav.innerHTML = `<a class="side-home ${currentSlug === "home" ? "active" : ""}" href="${pageUrl("home")}" ${currentSlug === "home" ? 'aria-current="page"' : ""}>Overview</a>` +
    sections.map((group) => `<div class="nav-group"><h2>${escapeHtml(group.title)}</h2>${group.items.map(([label, slug]) =>
      `<a class="side-link ${slug === currentSlug ? "active" : ""}" href="${pageUrl(slug)}" ${slug === currentSlug ? 'aria-current="page"' : ""}>${escapeHtml(label)}</a>`
    ).join("")}</div>`).join("");
}

function sectionMarkup(section, index) {
  const [heading, text, note, type] = section;
  const id = `section-${index + 1}`;
  let detail = `<p>${escapeHtml(text)}</p>`;
  if (type === "diagram") {
    detail += `<div class="diagram-placeholder"><div class="diagram-node">[ System / milestone ]</div><span aria-hidden="true">→</span><div class="diagram-node">[ Details to confirm ]</div><p>Diagram placeholder · replace with reviewed project information</p></div>`;
  }
  if (type === "screenshot") {
    detail += `<div class="screenshot-placeholder" role="img" aria-label="Screenshot placeholder; no approved product screenshot is available"><div class="screenshot-window"><span></span><span></span><span></span></div><div class="screenshot-copy"><span>PRODUCT SCREENSHOT</span><strong>Visual preview<br />to be added</strong><small>Waiting for approved product imagery</small></div></div>`;
  }
  if (note) detail += `<div class="callout"><span class="callout-icon" aria-hidden="true">i</span><p>${escapeHtml(note)}</p></div>`;
  return `<section class="doc-section" id="${id}"><h2><a href="#${id}" aria-label="Link to ${escapeHtml(heading)}">#</a>${escapeHtml(heading)}</h2>${detail}</section>`;
}

function renderCards(cards) {
  return `<div class="product-grid">${cards.map(([title, description, slug, number]) =>
    `<a class="product-card" href="${pageUrl(slug)}"><span class="card-number">${escapeHtml(number)} / PRODUCT</span><h2>${escapeHtml(title)}<span aria-hidden="true">↗</span></h2><p>${escapeHtml(description)}</p><span class="card-link">Explore documentation <b aria-hidden="true">→</b></span></a>`
  ).join("")}</div>`;
}

function renderLanding() {
  const jumpCards = [
    ["The Chronicle", "Follow the project's story from its beginnings through three generations.", "chronicle/beginning", "01"],
    ["The People", "Meet the contributors and understand how the team works.", "people/founding-team", "02"],
    ["Our Products", "Explore the three product concepts introduced in Prog-Net 3.0.", "products", "03"],
    ["Development", "Read the technical documentation as confirmed details become available.", "development/technology-stack", "04"],
    ["The Road Ahead", "See the distinction between long-term vision, proposals, and commitments.", "road-ahead/future-vision", "05"],
    ["About", "Learn about this documentation and its publication status.", "about", "06"]
  ];
  return `<div class="landing-hero">
      <div class="breadcrumbs"><span>Documentation</span><span aria-hidden="true">/</span><span>Overview</span></div>
      <div class="hero-label"><span class="status-dot"></span> PROJECT DOCUMENTATION <span class="mono">VERSION 3.0</span></div>
      <h1>One project.<br /><span>Three generations.</span></h1>
      <p class="hero-copy">The official guide to Prog-Net: where it began, what it is becoming, and the people and ideas shaping what comes next.</p>
      <div class="hero-actions"><a class="button button-primary" href="${pageUrl("chronicle/beginning")}">Read the Chronicle <span aria-hidden="true">→</span></a><a class="button button-secondary" href="${pageUrl("products")}">Explore the products</a></div>
      <div class="hero-index"><span>01 — 03</span><span>History / Products / Future</span></div>
    </div>
    <section class="landing-section">
      <div class="section-kicker">A project in progress</div><div class="landing-intro"><h2>Built across generations.<br /><span>Documented with care.</span></h2><div><p>Prog-Net has evolved from its early C-based beginning through a Java Swing generation to a new direction centered on three independent product concepts.</p><p>This site shares what is known and labels what still needs confirmation. It is designed to grow with the project—without confusing a placeholder with a promise.</p></div></div>
      <div class="generation-strip"><div><span>01 / FIRST GENERATION</span><strong>Prog-Net 1.0</strong><p>C language</p></div><div><span>02 / SECOND GENERATION</span><strong>Prog-Net 2.0</strong><p>Java Swing · games · utilities · lobby</p></div><div><span>03 / CURRENT DIRECTION</span><strong>Prog-Net 3.0</strong><p>Three independent product concepts</p></div></div>
      <div class="home-context-grid"><div><span class="section-kicker">MISSION & VISION</span><strong>To be confirmed</strong><p>The team's approved mission and vision statements have not yet been provided.</p></div><div><span class="section-kicker">LATEST DEVELOPMENT</span><strong>Three product concepts</strong><p>The Prog-Net 3.0 brief identifies three independent products. Further progress updates need confirmation.</p><a href="${pageUrl("chronicle/prog-net-3")}">Read about Prog-Net 3.0 <span aria-hidden="true">→</span></a></div><div><span class="section-kicker">THE PEOPLE</span><strong>Contributors to be introduced</strong><p>Member names, profiles, and responsibilities will be added when confirmed.</p><a href="${pageUrl("people/founding-team")}">Meet the team <span aria-hidden="true">→</span></a></div></div>
    </section>
    <section class="landing-section product-preview"><div class="section-heading"><div><div class="section-kicker">The current direction</div><h2>Three ideas.<br /><span>One evolving project.</span></h2></div><a class="inline-link" href="${pageUrl("products")}">All product docs <span aria-hidden="true">↗</span></a></div>${renderCards(pages.products.cards)}</section>
    <section class="landing-section"><div class="section-heading"><div><div class="section-kicker">Explore the documentation</div><h2>Find your<br /><span>starting point.</span></h2></div><p class="section-side-note">A structured guide to the project's history, people, products, technical direction, and future.</p></div><div class="quick-grid">${jumpCards.map(([title, description, slug, number]) => `<a href="${pageUrl(slug)}" class="quick-card"><span>${number} / SECTION</span><h3>${escapeHtml(title)} <span aria-hidden="true">↗</span></h3><p>${escapeHtml(description)}</p></a>`).join("")}</div></section>
    <section class="home-note"><span class="note-mark" aria-hidden="true">i</span><div><strong>Accuracy before completeness</strong><p>Names, feature details, technical specifications, dates, partnerships, and commitments are not guessed. Pages mark missing information clearly until it is verified.</p></div><a href="${pageUrl("about")}">About this documentation <span aria-hidden="true">→</span></a></section>`;
}

function renderArticle(slug, page) {
  const crumbs = `<div class="breadcrumbs"><a href="${pageUrl("home")}">Documentation</a><span aria-hidden="true">/</span><span>${escapeHtml(page.group)}</span><span aria-hidden="true">/</span><span>${escapeHtml(page.title)}</span></div>`;
  const toc = (page.sections || []).map((section, index) => `<a href="#section-${index + 1}">${escapeHtml(section[0])}</a>`).join("");
  const tocAside = toc ? `<aside class="toc" aria-label="On this page"><div class="toc-title">ON THIS PAGE</div>${toc}</aside>` : "";
  const body = page.landing ? renderLanding() : `<div class="article-header">${crumbs}<div class="article-kicker">${escapeHtml(page.group.toUpperCase())}<span>·</span> PROG-NET 3.0</div><h1>${escapeHtml(page.title)}</h1><p class="article-intro">${escapeHtml(page.intro)}</p><div class="article-meta"><span><span class="status-dot"></span> Documentation page</span><span>Details subject to confirmation</span></div></div>
      <div class="article-layout"><div class="article-body">${page.cards ? renderCards(page.cards) : ""}${(page.sections || []).map(sectionMarkup).join("")}</div>${tocAside}</div>`;

  const currentIndex = pageOrder.indexOf(slug);
  const previous = currentIndex > 0 ? pageOrder[currentIndex - 1] : null;
  const next = currentIndex >= 0 && currentIndex < pageOrder.length - 1 ? pageOrder[currentIndex + 1] : null;
  const pagination = page.landing ? "" : `<nav class="page-pagination" aria-label="Page navigation">
    ${previous ? `<a href="${pageUrl(previous)}" class="page-prev"><span>← PREVIOUS</span><strong>${escapeHtml(pages[previous].title)}</strong></a>` : "<span></span>"}
    ${next ? `<a href="${pageUrl(next)}" class="page-next"><span>NEXT →</span><strong>${escapeHtml(pages[next].title)}</strong></a>` : ""}
  </nav>`;
  pageContent.innerHTML = `${body}${pagination}`;
  document.title = `${page.title} · Prog-Net Documentation`;
  renderSidebar(slug);
  closeMobileNav();
  window.scrollTo({ top: 0, behavior: "auto" });
}

function closeMobileNav() {
  sidebar.classList.remove("is-open");
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.querySelector(".sr-only").textContent = "Open documentation navigation";
  backdrop.hidden = true;
}

function showSearchResults(query) {
  const normalized = query.trim().toLowerCase();
  if (!normalized) {
    results.hidden = true;
    results.innerHTML = "";
    search.setAttribute("aria-expanded", "false");
    return;
  }
  const matches = pageOrder.filter((slug) => {
    const page = pages[slug];
    const sectionText = (page.sections || []).flat().join(" ");
    const cardText = (page.cards || []).flat().join(" ");
    return `${page.title} ${page.group} ${page.summary} ${page.intro || ""} ${sectionText} ${cardText}`.toLowerCase().includes(normalized);
  }).slice(0, 8);
  results.innerHTML = matches.length
    ? matches.map((slug, index) => `<a role="option" aria-selected="false" href="${pageUrl(slug)}" ${index === 0 ? 'data-first-result="true"' : ""}><span>${escapeHtml(pages[slug].group)}</span><strong>${escapeHtml(pages[slug].title)}</strong><small>${escapeHtml(pages[slug].summary)}</small></a>`).join("")
    : `<p class="no-results">No pages found for “${escapeHtml(query.trim())}”.</p>`;
  results.hidden = false;
  search.setAttribute("aria-expanded", "true");
}

document.addEventListener("click", (event) => {
  const link = event.target.closest("a");
  if (!link || link.target || link.origin !== window.location.origin || !link.search.startsWith("?page=")) return;
  event.preventDefault();
  history.pushState({}, "", link.href);
  const slug = new URL(link.href).searchParams.get("page") || "home";
  renderArticle(pages[slug] ? slug : "home", pages[slug] || pages.home);
  results.hidden = true;
  search.setAttribute("aria-expanded", "false");
  search.value = "";
});

window.addEventListener("popstate", () => {
  const slug = new URLSearchParams(window.location.search).get("page") || "home";
  renderArticle(pages[slug] ? slug : "home", pages[slug] || pages.home);
});

search.addEventListener("input", () => showSearchResults(search.value));
search.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    results.hidden = true;
    search.setAttribute("aria-expanded", "false");
    search.blur();
  } else if (event.key === "Enter") {
    const first = results.querySelector("[data-first-result]");
    if (first) first.click();
  }
});
document.addEventListener("click", (event) => {
  if (!event.target.closest(".sidebar-tools")) {
    results.hidden = true;
    search.setAttribute("aria-expanded", "false");
  }
});
document.addEventListener("keydown", (event) => {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
    event.preventDefault();
    search.focus();
  }
});
menuButton.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isOpen));
  menuButton.querySelector(".sr-only").textContent = isOpen ? "Open documentation navigation" : "Close documentation navigation";
  sidebar.classList.toggle("is-open", !isOpen);
  backdrop.hidden = isOpen;
});
backdrop.addEventListener("click", closeMobileNav);
document.querySelector("#current-year").textContent = new Date().getFullYear();

const initialSlug = new URLSearchParams(window.location.search).get("page") || "home";
renderArticle(pages[initialSlug] ? initialSlug : "home", pages[initialSlug] || pages.home);
