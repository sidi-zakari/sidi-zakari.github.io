/* ============================================================
   data.js — Contenu bilingue (FR/EN) du portfolio de SIDI ZAKARI
   Toutes les données affichées par script.js proviennent d'ici.
   ============================================================ */

const PORTFOLIO_DATA = {

  fr: {
    meta: {
      title: "SIDI ZAKARI — Développement Communautaire & Médiation Sociale",
      langLabel: "EN",
      langName: "Français"
    },

    identity: {
      name: "SIDI Zakari",
      monogram: "SZ",
      photo: "photo.jpg",
      role: "Spécialiste en Développement Communautaire | Médiation Sociale | Suivi-Évaluation (S&E)",
      location: "Parakou, Bénin"
    },

    nav: [
      { id: "profil",        label: "Profil" },
      { id: "realisations",  label: "Réalisations" },
      { id: "experiences",   label: "Expériences" },
      { id: "formation",     label: "Formation" },
      { id: "certifications",label: "Certifications" },
      { id: "competences",   label: "Compétences" },
      { id: "contact",       label: "Contact" }
    ],

    contact: {
      heading: "Coordonnées",
      phone: "+229 01 65 30 09 31",
      email: "zakarisidi458@gmail.com",
      linkedin: { label: "linkedin.com/in/zakari-sidi-460733326", url: "https://linkedin.com/in/zakari-sidi-460733326" },
      x: { label: "@SIDIZakaribccc", url: "https://x.com/SIDIZakaribccc" },
      cv: { label: "Télécharger mon CV", file: "cv-sidi-zakari.pdf" }
    },

    languages: {
      heading: "Langues",
      items: [
        { name: "Français", level: "Niveau professionnel" },
        { name: "Anglais",  level: "Niveau intermédiaire" },
        { name: "Dendi",    level: "Courant" }
      ]
    },

    profil: {
      heading: "Profil professionnel",
      eyebrow: "01 — Carnet de terrain",
      text: "Spécialiste en médiation sociale et facilitation du développement (Licence Professionnelle, mention Bien, Université de Parakou, 2023). Double compétence terrain et digitale : collecte de données (KoboToolbox, ODK), suivi-évaluation et communication pour le changement social (SBCC/C4D). Expérience de terrain dans les zones rurales du Borgou aux côtés de l'UNICEF, et plusieurs mandats de volontariat international (OMS, HCR, PNUD), au service de l'inclusion des populations vulnérables, notamment des personnes en situation de handicap.",
      routeLabel: "Itinéraires de terrain — Borgou",
      route: [
        { place: "Biro", year: "2022" },
        { place: "Sori", year: "2023" },
        { place: "Gogounou", year: "2022" },
        { place: "Nikki", year: "2023" }
      ]
    },

    realisations: {
      heading: "Réalisations clés",
      eyebrow: "02 — Points marquants",
      items: [
        "Sélectionné pour la Cohorte 2 du programme continental Agenda 2063 « Espaces de Pouvoir » du PNUD.",
        "Volontaire des Nations Unies auprès de trois agences distinctes en 2026 : OMS Bénin, HCR Mali et PNUD.",
        "Collecte de données terrain (KoboToolbox, ODK) dans des communautés rurales du Borgou aux côtés de l'UNICEF.",
        "Double compétence terrain et digitale : médiation sociale, S&E et création de contenus pour le changement social (SBCC/C4D)."
      ]
    },

    experiences: {
      heading: "Expériences professionnelles",
      eyebrow: "03 — Journal de mission",
      items: [
        {
          code: "2026·06",
          title: "Participant — Programme de Leadership, Académie Agenda 2063 « Espaces de Pouvoir », Cohorte 2",
          org: "PNUD (Programme des Nations Unies pour le Développement)",
          period: "Juin 2026 – en cours",
          place: "En ligne · Éthiopie",
          points: [
            "Suit une formation continentale de 7 semaines consacrée au leadership africain et à la gouvernance des espaces de pouvoir.",
            "Contribue activement aux travaux de la Cohorte 2 du programme Agenda 2063 de l'Union Africaine."
          ]
        },
        {
          code: "2026·05",
          title: "Volontaire en ligne — Campagne JMR 2026 (Journée Mondiale des Réfugiés)",
          org: "HCR Mali / Programme VNU",
          period: "Mai – Juin 2026",
          place: "En ligne",
          points: [
            "A conçu et diffusé des contenus numériques de sensibilisation aux droits des réfugiés à destination du grand public.",
            "A animé les réseaux sociaux de la campagne et mobilisé l'opinion en faveur de l'inclusion des populations déplacées."
          ]
        },
        {
          code: "2026·02",
          title: "Volontaire en ligne — Campagne #229SansTabac",
          org: "OMS Bénin / Programme VNU Bénin",
          period: "Fév. – Juin 2026",
          place: "En ligne",
          points: [
            "A piloté la mobilisation sociale et la communication digitale de la campagne nationale contre le tabagisme.",
            "A conçu et diffusé des contenus éducatifs sur les plateformes numériques nationales de la campagne."
          ]
        },
        {
          code: "2024",
          title: "Enseignant — Éducation de base & Développement de l'enfant",
          org: "École Primaire Privée SAGEF",
          period: "2024 – 2026",
          place: "Parakou, Bénin",
          points: [
            "A assuré l'encadrement pédagogique d'élèves du primaire conformément aux programmes nationaux.",
            "A conçu des supports didactiques adaptés aux profils et besoins spécifiques des apprenants."
          ]
        },
        {
          code: "2022",
          title: "Collecte de données terrain — Sortie pédagogique Borgou",
          org: "Université de Parakou",
          period: "2022 – 2023",
          place: "Borgou — Biro (2022) & Sori (2023)",
          points: [
            "A collecté et géré des données quantitatives et qualitatives via KoboToolbox et ODK.",
            "A sensibilisé les communautés et accompagné les familles vers de meilleures pratiques nutritionnelles.",
            "A mobilisé les acteurs locaux dans le cadre d'interventions de santé communautaire."
          ]
        }
      ]
    },

    formation: {
      heading: "Formation",
      eyebrow: "04 — Parcours académique",
      viewLabel: "Voir le diplôme",
      items: [
        {
          degree: "Licence Professionnelle en Sociologie et Anthropologie",
          detail: "Option : Médiation Sociale et Facilitation du Développement — Mention : Bien",
          org: "Université de Parakou",
          period: "2023",
          place: "Parakou, Bénin",
          file: "diplome-licence-sociologie-anthropologie-2023.pdf"
        }
      ]
    },

    certifications: {
      heading: "Certifications",
      eyebrow: "05 — Tampons de validation",
      viewLabel: "Voir le certificat",
      items: [
        { name: "Certificat d'appréciation — Appui à la Campagne Génération Sans Tabac", org: "VNU / OMS", year: "2026", file: "vnu-oms-generation-sans-tabac-2026.pdf" },
        { name: "Certificat d'appréciation — Soutien à la Journée mondiale des réfugiés", org: "VNU / HCR", year: "2026", file: "vnu-unhcr-journee-mondiale-refugies-2026.pdf" },
        { name: "Suivi & Évaluation — Programmes de retour et de réintégration", org: "OIM E-Campus", year: "2026", file: "se-oim-retour-reintegration-2026.pdf" },
        { name: "MEAL — Suivi, évaluation, redevabilité et apprentissage en situations d'urgence", org: "Save the Children / DisasterReady", year: "2026", file: "meal-savethechildren-disasterready-2026.pdf" },
        { name: "Fondamentaux de la gestion de projet", org: "DisasterReady / Cornerstone OnDemand", year: "2026", file: "gestion-de-projet-disasterready-2026.pdf" },
        { name: "Marketing Digital", org: "FORCE-N", year: "2026", file: "marketing-digital-force-n-2026.pdf" },
        { name: "Éducation Transformatrice de Genre", org: "UNICEF / UNGEI / Transform Education / Plan International", year: "2026", file: "education-transformatrice-genre-unicef-ungei-2026.pdf" },
        { name: "Manipulation, stockage et gestion des données", org: "UNICEF / Global Nutrition Cluster", year: "2024", file: "gestion-donnees-unicef-agora-2024.pdf" },
        { name: "Planification de la collecte, du traitement et de l'analyse des données", org: "UNICEF (Agora)", year: "2024", file: "collecte-traitement-analyse-donnees-unicef-agora-2024.pdf" },
        { name: "Collecte de données primaires", org: "UNICEF (Agora)", year: "2024", file: "collecte-donnees-primaires-unicef-agora-2024.pdf" },
        { name: "Programmation sensible aux conflits et à la consolidation de la paix", org: "UNICEF (Agora)", year: "2024", file: "conflit-paix-programmation-unicef-agora-2024.pdf" },
        { name: "Mobilisation RH pour la nutrition en contextes humanitaires", org: "UNICEF / Global Nutrition Cluster", year: "2024", file: "nutrition-humanitaire-rh-unicef-agora-2024.pdf" },
        { name: "Atténuation des risques de VBG dans la coordination humanitaire", org: "UNICEF (Agora)", year: "2024", file: "vbg-coordination-humanitaire-unicef-agora-2024.pdf" },
        { name: "Suivi & Évaluation (S&E)", org: "ABED Academy — en cours", year: "2026", file: "" },
        { name: "Nutrition communautaire", org: "UNICEF / AGORA", year: "2023", file: "" },
        { name: "Communication SBCC/C4D", org: "UNICEF / AGORA", year: "2023", file: "" }
      ]
    },

    competences: {
      heading: "Compétences & outils",
      eyebrow: "06 — Boîte à outils",
      skillsLabel: "Compétences clés",
      toolsLabel: "Outils numériques",
      skills: [
        "Médiation sociale",
        "Facilitation du développement",
        "Suivi & Évaluation (S&E)",
        "Collecte de données terrain",
        "Communication SBCC/C4D",
        "Mobilisation communautaire",
        "Création de contenus numériques"
      ],
      tools: [
        "KoboToolbox", "ODK", "Microsoft Office Suite",
        "Google Workspace", "Canva", "Facebook", "Instagram",
        "TikTok", "X (Twitter)"
      ]
    },

    contactSection: {
      heading: "Contact",
      eyebrow: "07 — Restons en lien",
      text: "Disponible pour de nouvelles missions de volontariat, de médiation sociale ou de suivi-évaluation.",
      cta: "Écrire un e-mail"
    },

    footer: {
      text: "SIDI Zakari — Parakou, Bénin"
    }
  },

  en: {
    meta: {
      title: "SIDI ZAKARI — Community Development & Social Mediation",
      langLabel: "FR",
      langName: "English"
    },

    identity: {
      name: "SIDI Zakari",
      monogram: "SZ",
      photo: "photo.jpg",
      role: "Community Development Specialist | Social Mediation | Monitoring & Evaluation (M&E)",
      location: "Parakou, Benin"
    },

    nav: [
      { id: "profil",        label: "Profile" },
      { id: "realisations",  label: "Highlights" },
      { id: "experiences",   label: "Experience" },
      { id: "formation",     label: "Education" },
      { id: "certifications",label: "Certifications" },
      { id: "competences",   label: "Skills" },
      { id: "contact",       label: "Contact" }
    ],

    contact: {
      heading: "Contact",
      phone: "+229 01 65 30 09 31",
      email: "zakarisidi458@gmail.com",
      linkedin: { label: "linkedin.com/in/zakari-sidi-460733326", url: "https://linkedin.com/in/zakari-sidi-460733326" },
      x: { label: "@SIDIZakaribccc", url: "https://x.com/SIDIZakaribccc" },
      cv: { label: "Download my CV", file: "cv-sidi-zakari.pdf" }
    },

    languages: {
      heading: "Languages",
      items: [
        { name: "French",  level: "Professional working proficiency" },
        { name: "English", level: "Intermediate" },
        { name: "Dendi",   level: "Fluent" }
      ]
    },

    profil: {
      heading: "Professional profile",
      eyebrow: "01 — Field notebook",
      text: "Specialist in social mediation and development facilitation (Professional Bachelor's Degree, with Distinction, University of Parakou, 2023). Dual field and digital expertise: data collection (KoboToolbox, ODK), monitoring & evaluation, and social and behaviour change communication (SBCC/C4D). Field experience in rural Borgou alongside UNICEF, plus several international volunteering mandates (WHO, UNHCR, UNDP), in service of the inclusion of vulnerable populations, including persons with disabilities.",
      routeLabel: "Field routes — Borgou",
      route: [
        { place: "Biro", year: "2022" },
        { place: "Sori", year: "2023" },
        { place: "Gogounou", year: "2022" },
        { place: "Nikki", year: "2023" }
      ]
    },

    realisations: {
      heading: "Key achievements",
      eyebrow: "02 — Highlights",
      items: [
        "Selected for Cohort 2 of UNDP's continental Agenda 2063 \u201cSpaces of Power\u201d programme.",
        "United Nations Volunteer with three separate agencies in 2026: WHO Benin, UNHCR Mali, and UNDP.",
        "Field data collection (KoboToolbox, ODK) in rural communities of Borgou alongside UNICEF.",
        "Dual field and digital expertise: social mediation, M&E, and content creation for social change (SBCC/C4D)."
      ]
    },

    experiences: {
      heading: "Professional experience",
      eyebrow: "03 — Mission log",
      items: [
        {
          code: "2026·06",
          title: "Participant — Leadership Programme, Agenda 2063 \u201cSpaces of Power\u201d Academy, Cohort 2",
          org: "UNDP (United Nations Development Programme)",
          period: "June 2026 – ongoing",
          place: "Online · Ethiopia",
          points: [
            "Following a 7-week continental training programme on African leadership and governance of spaces of power.",
            "Actively contributing to the work of Cohort 2 of the African Union's Agenda 2063 programme."
          ]
        },
        {
          code: "2026·05",
          title: "Online Volunteer — WRD 2026 Campaign (World Refugee Day)",
          org: "UNHCR Mali / UNV Programme",
          period: "May – June 2026",
          place: "Online",
          points: [
            "Designed and published digital content raising public awareness of refugee rights.",
            "Ran the campaign's social media channels and mobilised public support for the inclusion of displaced populations."
          ]
        },
        {
          code: "2026·02",
          title: "Online Volunteer — #229SansTabac Campaign",
          org: "WHO Benin / UNV Benin Programme",
          period: "Feb. – June 2026",
          place: "Online",
          points: [
            "Led social mobilisation and digital communication for the national anti-tobacco campaign.",
            "Designed and published educational content across the campaign's national digital platforms."
          ]
        },
        {
          code: "2024",
          title: "Teacher — Basic Education & Child Development",
          org: "École Primaire Privée SAGEF",
          period: "2024 – 2026",
          place: "Parakou, Benin",
          points: [
            "Provided pedagogical guidance to primary school pupils in line with national curricula.",
            "Designed teaching materials adapted to learners' individual profiles and needs."
          ]
        },
        {
          code: "2022",
          title: "Field Data Collection — Borgou Fieldwork",
          org: "University of Parakou",
          period: "2022 – 2023",
          place: "Borgou — Biro (2022) & Sori (2023)",
          points: [
            "Collected and managed quantitative and qualitative data using KoboToolbox and ODK.",
            "Raised community awareness and supported families toward better nutritional practices.",
            "Mobilised local stakeholders as part of community health interventions."
          ]
        }
      ]
    },

    formation: {
      heading: "Education",
      eyebrow: "04 — Academic path",
      viewLabel: "View diploma",
      items: [
        {
          degree: "Professional Bachelor's Degree in Sociology and Anthropology",
          detail: "Track: Social Mediation and Development Facilitation — Grade: With Distinction",
          org: "University of Parakou",
          period: "2023",
          place: "Parakou, Benin",
          file: "diplome-licence-sociologie-anthropologie-2023.pdf"
        }
      ]
    },

    certifications: {
      heading: "Certifications",
      eyebrow: "05 — Validation stamps",
      viewLabel: "View certificate",
      items: [
        { name: "Certificate of Appreciation — Supporting the Generation Smoke-Free Campaign", org: "UNV / WHO", year: "2026", file: "vnu-oms-generation-sans-tabac-2026.pdf" },
        { name: "Certificate of Appreciation — Supporting World Refugee Day", org: "UNV / UNHCR", year: "2026", file: "vnu-unhcr-journee-mondiale-refugies-2026.pdf" },
        { name: "Monitoring & Evaluation — Return and Reintegration Programmes", org: "IOM E-Campus", year: "2026", file: "se-oim-retour-reintegration-2026.pdf" },
        { name: "MEAL — Monitoring, Evaluation, Accountability and Learning in Emergencies", org: "Save the Children / DisasterReady", year: "2026", file: "meal-savethechildren-disasterready-2026.pdf" },
        { name: "Project Management Fundamentals", org: "DisasterReady / Cornerstone OnDemand", year: "2026", file: "gestion-de-projet-disasterready-2026.pdf" },
        { name: "Digital Marketing", org: "FORCE-N", year: "2026", file: "marketing-digital-force-n-2026.pdf" },
        { name: "Gender-Transformative Education", org: "UNICEF / UNGEI / Transform Education / Plan International", year: "2026", file: "education-transformatrice-genre-unicef-ungei-2026.pdf" },
        { name: "Data Handling, Storage and Management", org: "UNICEF / Global Nutrition Cluster", year: "2024", file: "gestion-donnees-unicef-agora-2024.pdf" },
        { name: "Planning Data Collection, Processing and Analysis", org: "UNICEF (Agora)", year: "2024", file: "collecte-traitement-analyse-donnees-unicef-agora-2024.pdf" },
        { name: "Primary Data Collection", org: "UNICEF (Agora)", year: "2024", file: "collecte-donnees-primaires-unicef-agora-2024.pdf" },
        { name: "Conflict-Sensitive and Peacebuilding Programming", org: "UNICEF (Agora)", year: "2024", file: "conflit-paix-programmation-unicef-agora-2024.pdf" },
        { name: "HR Mobilisation for Nutrition in Humanitarian Contexts", org: "UNICEF / Global Nutrition Cluster", year: "2024", file: "nutrition-humanitaire-rh-unicef-agora-2024.pdf" },
        { name: "GBV Risk Mitigation in Humanitarian Coordination", org: "UNICEF (Agora)", year: "2024", file: "vbg-coordination-humanitaire-unicef-agora-2024.pdf" },
        { name: "Monitoring & Evaluation (M&E)", org: "ABED Academy — in progress", year: "2026", file: "" },
        { name: "Community Nutrition", org: "UNICEF / AGORA", year: "2023", file: "" },
        { name: "SBCC/C4D Communication", org: "UNICEF / AGORA", year: "2023", file: "" }
      ]
    },

    competences: {
      heading: "Skills & tools",
      eyebrow: "06 — Toolkit",
      skillsLabel: "Core skills",
      toolsLabel: "Digital tools",
      skills: [
        "Social mediation",
        "Development facilitation",
        "Monitoring & Evaluation (M&E)",
        "Field data collection",
        "SBCC/C4D communication",
        "Community mobilisation",
        "Digital content creation"
      ],
      tools: [
        "KoboToolbox", "ODK", "Microsoft Office Suite",
        "Google Workspace", "Canva", "Facebook", "Instagram",
        "TikTok", "X (Twitter)"
      ]
    },

    contactSection: {
      heading: "Contact",
      eyebrow: "07 — Get in touch",
      text: "Available for new volunteering, social mediation, or monitoring & evaluation assignments.",
      cta: "Send an email"
    },

    footer: {
      text: "SIDI Zakari — Parakou, Benin"
    }
  }
};

/* Rend le module utilisable à la fois en navigateur (variable globale)
   et, si jamais nécessaire, via un environnement Node/CommonJS. */
if (typeof module !== "undefined" && module.exports) {
  module.exports = PORTFOLIO_DATA;
}
