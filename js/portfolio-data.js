/**
 * ============================================================================
 * PORTFOLIO CONFIGURATION & DATA — SEBASTIEN YE (js/portfolio-data.js)
 * ============================================================================
 * Contenu adapté intégralement à partir du CV officiel de Sebastien YE.
 * Modifiez ce fichier pour mettre à jour vos informations, expériences,
 * projets, compétences, certifications et coordonnées.
 * ============================================================================
 */

window.PORTFOLIO_DATA = {
  profile: {
    name: "Sebastien YE",
    handle: "seiiib",
    initials: "SY",
    photo: "assets/profile-sebastien-ye.jpg",
    role: "Ingénieur ML / IA · Consultant Data & Data Engineer",
    experienceBadge: "5 ans d'expérience",
    tagline:
      "Ingénieur ML polyvalent, passionné par les nouvelles technologies. Je m'appuie sur des approches orientées données pour résoudre des problèmes métier complexes et livrer des projets à fort impact.",
    bio: "Ingénieur Machine Learning & IA diplômé de l'ECE Paris (Master Systèmes d'Information, Big Data & Analytics) et certifié Google Cloud Professional Machine Learning Engineer. Fort de 5 ans d'expérience entre Tech Lead IA (Bouygues Telecom), conseil Senior Data/IA (CGI Business Consulting) et enseignement universitaire international en IA (EPITA), je conçois des modèles ML, des pipelines de données robustes et des solutions orientées valeur métier.",
    availability:
      "Disponible immédiatement — Recherche mission temps plein : Ingénieur ML/IA, Consultant Data ou Data Engineer",
    available: true,
    address: "101 bis rue Saint-Charles, 75015 Paris, France",
    location: "Paris 15e, France",
    timezone: "Europe/Paris",
    phone: "+33 6 99 72 44 88",
    phoneHref: "tel:+33699724488",
    email: "sebastien.ye@hotmail.com",
    drivingLicense: "Permis B",
    github: "https://github.com/seiiib",
    resumeUrl: "assets/CV-Sebastien-YE.pdf",
    resumeHtmlUrl: "assets/resume-sebastien-ye.html",
    stats: [
      { value: "5 ans", label: "D'expérience Data & IA", detail: "ML, Data Science & Engineering" },
      { value: "300+", label: "Étudiants formés", detail: "Cours IA en anglais (EPITA)" },
      { value: "GCP ML", label: "Certifié Google Cloud", detail: "Professional ML Engineer" },
      { value: "Top 7", label: "École d'Ingénieurs", detail: "ECE Paris — Big Data & Analytics" }
    ],
    softSkills: [
      "Leadership",
      "Travail en équipe",
      "Polyvalence",
      "Aisance à l'oral",
      "Organisation",
      "Prise de décision",
      "Pédagogie",
      "Écoute active"
    ],
    languages: [
      { name: "Français", level: "Natif", pct: 100 },
      { name: "Anglais", level: "TOEIC 865/990 (Enseignement en anglais)", pct: 88 },
      { name: "Chinois Mandarin", level: "Intermédiaire (Expatriation à Xi'An)", pct: 60 },
      { name: "Espagnol", level: "Intermédiaire (Semestre au Mexique)", pct: 60 }
    ],
    certifications: [
      {
        title: "GCP : Professional Machine Learning Engineer",
        issuer: "Google Cloud",
        badge: "Cloud & MLOps"
      },
      {
        title: "Écoconception de service numérique",
        issuer: "GreenIT.fr",
        badge: "Numérique Responsable"
      }
    ],
    volunteering: [
      {
        org: "La Fresque du Climat",
        role: "Animateur certifié",
        detail: "Animation d'ateliers et sensibilisation de 30 collaborateurs aux enjeux climatiques."
      },
      {
        org: "ChangeNOW",
        role: "Bénévole (Éditions 2022 & 2023)",
        detail: "Participation au sommet mondial des solutions pour la planète à Paris."
      }
    ],
    interests: [
      "Voyage",
      "Badminton",
      "Jeux vidéos",
      "Photo",
      "Cinéma",
      "Dessin",
      "Deeptech",
      "Œnologie"
    ]
  },

  projects: [
    {
      id: "bouygues-ia-datascience",
      title: "Projets IA & Data Science Multi-Métiers",
      subtitle: "Tech Lead IA & Data Scientist — Bouygues Telecom (3 ans)",
      category: "ML & Data Science",
      featured: true,
      year: "2021 — 2024",
      status: "Production & PoCs",
      metrics: ["3 ans d'impact", "Tech Lead Scrum/Kanban", "Multi-départements"],
      description:
        "Développement, cadrage et mise en production de plusieurs projets orientés données et Machine Learning pour les métiers Finance, Connaissance Client et Obligations légales.",
      problem:
        "Besoin d'industrialiser des cas d'usage Data Science complexes tout en alignant les priorités techniques avec des parties prenantes transverses (Finance, CRM/Connaissance Client, Juridique/Obligations légales).",
      architecture:
        "Pipeline complet d'exploration et traitement de données massives, benchmark rigoureux de modèles ML/Deep Learning et d'outils analytiques (Python, SQL, Dataiku DSS, GCP/AWS), piloté en méthodologie Agile Scrum et Kanban.",
      highlights: [
        "Rôle de Tech Lead : gestion de projets en méthodes Scrum et Kanban, priorisation du backlog, attribution des tâches et point de contact principal des parties prenantes.",
        "Rôle de Data Scientist : conception et réalisation de PoCs répondant à des problématiques métier ciblées à forte valeur ajoutée.",
        "Exploration, nettoyage et feature engineering sur de grands volumes de données, suivis de benchmarks comparatifs de modèles pour sélectionner les solutions optimales."
      ],
      tech: ["Python", "SQL", "PyTorch", "TensorFlow", "Dataiku DSS", "GCP Vertex AI", "Scrum / Kanban", "Jira"],
      githubUrl: "https://github.com/seiiib",
      accentColor: "#38bdf8",
      visualType: "neural"
    },
    {
      id: "cgi-data-pipelines-transport",
      title: "Pipelines de Données & Conseil IA",
      subtitle: "Consultant Senior en IA — CGI Business Consulting",
      category: "Data Engineering & Cloud",
      featured: true,
      year: "2024",
      status: "Mission Conseil & Avant-Vente",
      metrics: ["Secteur Transports Publics", "Écosystème Microsoft", "Avant-vente Data & IA"],
      description:
        "Accompagnement de missions clients stratégiques en Data & IA, incluant la mise en œuvre de pipelines de données pour un grand compte du transport public et le développement de PoCs IA.",
      problem:
        "Structurer et fiabiliser les flux de données opérationnelles d'un acteur majeur des transports publics tout en accélérant la démonstration de valeur de l'IA sur de nouveaux besoins sectoriels.",
      architecture:
        "Conception et déploiement de pipelines d'ingestion et de transformation de données basés sur les technologies Microsoft, couplés à des PoCs IA agiles développés en équipe restreinte.",
      highlights: [
        "Mise en œuvre de pipelines de données robustes avec les technologies Microsoft pour un client majeur dans le secteur des transports publics.",
        "Contribution active aux activités d'avant-vente pour l'offre Data & IA (cadrage technique, chiffrage, proposition de valeur).",
        "Développement rapide de PoCs IA en petite équipe pour valider la faisabilité métier sur différents secteurs d'activité."
      ],
      tech: ["Technologies Microsoft", "Data Pipelines", "Python", "SQL", "FastAPI", "Cloud IA", "GitLab"],
      githubUrl: "https://github.com/seiiib",
      accentColor: "#a855f7",
      visualType: "mesh"
    },
    {
      id: "epita-ai-curriculum",
      title: "Programme International Filière IA (EPITA × Chang'An)",
      subtitle: "Chargé de Cours en Intelligence Artificielle & Informatique (Xi'An, Chine)",
      category: "Enseignement & Open Source",
      featured: true,
      year: "2024 — Présent",
      status: "299 Étudiants Formés",
      metrics: ["3 cursus universitaires", "299 étudiants", "100% en Anglais"],
      description:
        "Enseignement supérieur en anglais à des promotions d'étudiants ingénieurs dans le cadre du programme conjoint « Filière Intelligence Artificielle » entre l'EPITA et l'Université Chang'An.",
      problem:
        "Transmettre des fondations solides en génie logiciel, algorithmique et bases de données en anglais à près de 300 étudiants internationaux de 1ère, 2ème et 3ème années.",
      architecture:
        "Conception de supports pédagogiques interactifs, travaux pratiques intensifs en Python et SQL, projets notés et accompagnement méthodologique sur site à Xi'An.",
      highlights: [
        "Python & Programmation Orientée Objet (2ème année — 96 étudiants) : conception modulaire, héritage, polymorphisme et bonnes pratiques Python.",
        "Algorithmes & Structures de Données (1ère année — 102 étudiants) : complexité algorithmique, graphes, arbres, tri et résolution de problèmes.",
        "Bases de Données (3ème année — 101 étudiants) : modélisation relationnelle, SQL avancé, indexation et optimisation de requêtes."
      ],
      tech: ["Python (POO)", "Algorithmique", "Structures de Données", "SQL & Bases de Données", "Pédagogie", "Anglais Technique"],
      githubUrl: "https://github.com/seiiib",
      accentColor: "#10b981",
      visualType: "sync"
    },
    {
      id: "engie-visual-management",
      title: "Outil de Management Visuel & Suivi Opérationnel",
      subtitle: "Ingénieur Logiciel Full-Stack — Engie Solutions",
      category: "Full-Stack & DevOps",
      featured: false,
      year: "2020",
      status: "Livré en Production",
      metrics: ["Spécifications → Livraison", "Stack MEVN", "Pilotage complet"],
      description:
        "Conception fonctionnelle, rédaction des spécifications et développement full-stack d'une application web de management visuel et de suivi de performance.",
      problem:
        "Remplacer des suivis manuels dispersés par un outil numérique centralisé, visuel et temps réel facilitant le pilotage opérationnel des équipes.",
      architecture:
        "Architecture web moderne reposant sur un frontend réactif en Vue.js, une API REST Node.js et une base de données orientée documents MongoDB.",
      highlights: [
        "Recueil du besoin métier et rédaction complète du cahier des charges et des spécifications fonctionnelles/techniques.",
        "Développement Full-Stack avec Vue.js, Node.js et MongoDB.",
        "Responsabilité intégrale de la livraison, des tests d'acceptation et de la mise en main auprès des utilisateurs."
      ],
      tech: ["Vue.js", "Node.js", "MongoDB", "JavaScript", "REST API", "Gestion de projet"],
      githubUrl: "https://github.com/seiiib",
      accentColor: "#f59e0b",
      visualType: "design"
    },
    {
      id: "cloud-mlops-vertex-sagemaker",
      title: "Architecture MLOps & Déploiement Cloud (GCP / AWS)",
      subtitle: "Industrialisation de Modèles ML & Écoconception Numérique",
      category: "Data Engineering & Cloud",
      featured: false,
      year: "2023 — 2026",
      status: "Certifié GCP ML Engineer",
      metrics: ["GCP Vertex AI & BigQuery", "AWS SageMaker", "GreenIT Écoconception"],
      description:
        "Mise en place de chaînes MLOps de bout en bout : entraînement distribué PyTorch/TensorFlow, exposition d'inférence via FastAPI et déploiement automatisé sur GCP et AWS.",
      problem:
        "Réduire le temps de passage entre les notebooks d'expérimentation Data Science et des APIs d'inférence fiables, scalables et sobres en ressources.",
      architecture:
        "Orchestration via GCP Vertex AI, BigQuery et AWS SageMaker, exposition de microservices FastAPI et automatisation de l'infrastructure avec GitLab CI et Ansible.",
      highlights: [
        "Certification officielle Google Cloud : Professional Machine Learning Engineer.",
        "Certification Écoconception de service numérique (GreenIT.fr) appliquée à l'optimisation de l'empreinte des modèles et services.",
        "Intégration continue et déploiement reproductible avec GitLab CI/CD et Ansible."
      ],
      tech: ["GCP Vertex AI", "GCP BigQuery", "AWS SageMaker", "FastAPI", "PyTorch", "TensorFlow", "Ansible", "GitLab"],
      githubUrl: "https://github.com/seiiib",
      accentColor: "#ec4899",
      visualType: "mesh"
    },
    {
      id: "seiiib-open-source-lab",
      title: "Laboratoire Open-Source : ML, Deep Learning & Web",
      subtitle: "Projets GitHub (@seiiib) & Leadership Junior-Entreprise (JEECE)",
      category: "Enseignement & Open Source",
      featured: false,
      year: "2019 — 2026",
      status: "30+ Dépôts GitHub",
      metrics: ["Équipe de 25 consultants", "20 recrutements", "30+ repos GitHub"],
      description:
        "Ensemble de travaux open-source sur GitHub (Deep Learning, AWS ML, Docker/Elasticsearch, Ansible, Vue.js, TypeScript) et encadrement technique au sein de la JEECE.",
      problem:
        "Partager des ressources d'ingénierie logicielle et IA tout en formant et structurant des équipes d'étudiants-consultants sur des missions concrètes.",
      architecture:
        "Dépôts modulaires couvrant le Machine Learning (Python), l'automatisation DevOps (`ansible_for_devops`, `elasdocker`) et le développement frontend (`Vue-fundamentals`, `Basic_Typescript`).",
      highlights: [
        "Responsable des Consultants chez JEECE (Top 30 des Junior-Entreprises de France) : management de 25 consultants, 20 recrutements et suivi de 6 missions.",
        "Contributions et dépôts dédiés au Machine Learning, Deep Learning, Docker, Ansible et architectures Web.",
        "Veille technologique active sur la Deeptech et les systèmes distribués."
      ],
      tech: ["Python", "Deep Learning", "Docker", "Ansible", "Vue.js", "React.js", "TypeScript", "C / C++ / Java"],
      githubUrl: "https://github.com/seiiib",
      accentColor: "#6366f1",
      visualType: "cache"
    }
  ],

  skills: [
    {
      category: "Machine Learning, IA & Data Science",
      icon: "cpu",
      description: "Conception de modèles prédictifs, Deep Learning, exploration de données et PoCs à fort impact.",
      items: [
        { name: "Python (Data Science, POO & Scripting)", level: 96 },
        { name: "PyTorch & TensorFlow (Deep Learning)", level: 90 },
        { name: "Dataiku DSS & Workflows Analytiques", level: 92 },
        { name: "Exploration de données & Benchmark ML", level: 95 },
        { name: "FastAPI ( Exposition de modèles & APIs )", level: 90 }
      ]
    },
    {
      category: "Cloud, Data Engineering & MLOps",
      icon: "cloud",
      description: "Architecture de pipelines de données et déploiement de modèles à l'échelle sur le Cloud.",
      items: [
        { name: "GCP Vertex AI (Certifié Pro ML Engineer)", level: 94 },
        { name: "GCP BigQuery & SQL Avancé", level: 93 },
        { name: "AWS SageMaker & Services Cloud IA", level: 88 },
        { name: "Pipelines de données (Stack Microsoft / Cloud)", level: 90 },
        { name: "GitLab CI/CD & Ansible (Automatisation)", level: 88 }
      ]
    },
    {
      category: "Développement Logiciel & Full-Stack",
      icon: "layout",
      description: "Développement d'applications web modernes et bases solides en programmation système.",
      items: [
        { name: "JavaScript / Vue.js / React.js", level: 89 },
        { name: "Node.js & MongoDB", level: 86 },
        { name: "C / C++ & Java", level: 84 },
        { name: "Algorithmes & Structures de Données", level: 94 },
        { name: "Écoconception Numérique (Certifié GreenIT)", level: 90 }
      ]
    },
    {
      category: "Tech Lead, Conseil & Soft Skills",
      icon: "server",
      description: "Pilotage Agile, avant-vente Data/IA, communication transverse et pédagogie.",
      items: [
        { name: "Gestion de projet Scrum & Kanban (Jira / Confluence)", level: 95 },
        { name: "Leadership, Pédagogie & Aisance à l'oral", level: 96 },
        { name: "Conseil Client, Avant-Vente & Cadrage Métier", level: 92 },
        { name: "Travail en équipe, Écoute active & Polyvalence", level: 96 },
        { name: "Organisation & Prise de décision", level: 94 }
      ]
    }
  ],

  experience: [
    {
      role: "Chargé de cours — Filière Intelligence Artificielle",
      company: "Epita Engineering School (× Université Chang'An)",
      location: "Xi'An, Chine",
      period: "Septembre 2024 — Présent (1 an et 3 mois)",
      type: "Enseignement Supérieur",
      summary:
        "Dans le cadre du programme commun « filière Intelligence Artificielle » entre l'EPITA et l'Université Chang'An. Basé à Xi'An, Chine, enseignement en anglais à des étudiants chinois.",
      achievements: [
        "Python Programmation Orientée Objet (2ème année — 96 étudiants).",
        "Algorithmes et Structures de Données (1ère année — 102 étudiants).",
        "Bases de Données (3ème année — 101 étudiants)."
      ],
      tech: ["Python POO", "Algorithmes & Structures de Données", "Bases de Données SQL", "Enseignement en Anglais", "Pédagogie"]
    },
    {
      role: "Consultant Senior en IA",
      company: "CGI Business Consulting",
      location: "Paris, France",
      period: "Mai 2024 — Août 2024 (4 mois)",
      type: "Conseil Data & IA",
      summary:
        "Conseil stratégique et opérationnel en Data & Intelligence Artificielle pour des grands comptes.",
      achievements: [
        "Participation active aux activités d'avant-vente pour l'offre Data & IA.",
        "Accompagnement de plusieurs missions clients — notamment pour un client dans les transports publics : mise en œuvre de pipelines de données avec les technologies Microsoft.",
        "Développement de PoCs IA en petite équipe pour différents secteurs métier."
      ],
      tech: ["Data & IA", "Pipelines de données Microsoft", "Python", "SQL", "PoCs IA", "Avant-vente"]
    },
    {
      role: "Ingénieur IA (Tech Lead & Data Scientist)",
      company: "Bouygues Telecom",
      location: "Paris, France",
      period: "Février 2021 — Avril 2024 (3 ans)",
      type: "CDI — 3 ans",
      summary:
        "Développement et contribution à plusieurs projets orientés données, avec une double casquette Tech Lead et Data Scientist.",
      achievements: [
        "Tech Lead : Gestion de projets en méthodes Scrum et Kanban, priorisation et attribution des tâches, point de contact principal des parties prenantes (Finance, Connaissance Client, Obligations légales).",
        "Data Scientist : Travail sur différents PoCs répondant à des problématiques métier spécifiques. Exploration et traitement des données, benchmark de modèles et de solutions pour apporter de la valeur."
      ],
      tech: ["Python", "SQL", "PyTorch", "TensorFlow", "Dataiku DSS", "GCP", "AWS", "Scrum / Kanban", "Jira", "Confluence"]
    },
    {
      role: "Ingénieur Logiciel",
      company: "Engie Solutions",
      location: "Paris, France",
      period: "Avril 2020 — Août 2020 (5 mois)",
      type: "Stage / Mission",
      summary:
        "En charge de la rédaction des spécifications d'un outil de management visuel et de suivi. Responsable de la livraison.",
      achievements: [
        "Rédaction des spécifications fonctionnelles et techniques d'un outil de management visuel et de suivi.",
        "Développement Full-Stack et responsabilité complète de la livraison du produit."
      ],
      tech: ["Vue.js", "Node.js", "MongoDB", "JavaScript", "Spécifications"]
    },
    {
      role: "Responsable des Consultants",
      company: "JEECE (Junior-Entreprise ECE Paris)",
      location: "Paris, France",
      period: "Septembre 2019 — Juin 2020 (10 mois)",
      type: "Leadership Associatif",
      summary:
        "Parmi les 30 meilleures Junior-Entreprises de France. Responsable du recrutement et de la formation des étudiants.",
      achievements: [
        "Management d'une équipe de 25 consultants.",
        "Pilotage de 20 recrutements et accompagnement de 6 missions clients."
      ],
      tech: ["Leadership", "Recrutement", "Formation", "Gestion de missions"]
    },
    {
      role: "Master en Systèmes d'Information, Big Data & Analytics",
      company: "ECE Paris, Engineering School",
      location: "Paris, France",
      period: "Diplômé en Septembre 2021",
      type: "Formation Ingénieur",
      summary:
        "Diplôme d'ingénieur spécialisé en Systèmes d'Information, Big Data & Analytics.",
      achievements: [
        "Classée dans le top 7 des écoles d'ingénieurs selon L'Usine Nouvelle 2024.",
        "Spécialisation en Machine Learning, Big Data, Architecture des Systèmes d'Information et Développement Logiciel."
      ],
      tech: ["Big Data", "Machine Learning", "Systèmes d'Information", "Analytics", "Python", "C / C++ / Java"]
    },
    {
      role: "Semestre d'Échange Académique International",
      company: "Tecnológico de Monterrey",
      location: "Querétaro, Mexique",
      period: "Août 2018 — Décembre 2018 (6 mois)",
      type: "International",
      summary:
        "Semestre d'études d'ingénierie à l'étranger de 6 mois au Mexique.",
      achievements: [
        "Cursus international en ingénierie et immersion linguistique (anglais et espagnol)."
      ],
      tech: ["Ingénierie", "International", "Espagnol", "Anglais"]
    }
  ]
};
