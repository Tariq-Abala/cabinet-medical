export interface Specialty {
  id: string;
  title: string;
  leadDoctor: string;
  iconName: "heart" | "stethoscope" | "baby" | "activity" | "sparkles" | "scan";
  shortDesc: string;
  fullDesc: string;
  acts: string[];
  duration: string;
  image: string;
}

export interface Practitioner {
  id: string;
  name: string;
  title: string;
  specialtyId: string;
  specialtyName: string;
  bio: string;
  education: string[];
  daysPresent: string;
  image: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: "rdv" | "mutuelle" | "specialites" | "pratique";
}

export const CLINIC_INFO = {
  name: "Cabinet Médical Dr. Alami & Associés",
  tagline: "Centre de Consultations Spécialisées & Médecine Préventive",
  address: "45, Boulevard Abdelmoumen (Angle Rue d'Ifrane), Quartier Palmier",
  city: "20100 Casablanca, Maroc",
  phone: "+212 5 22 33 44 55",
  phoneRaw: "+212522334455",
  whatsapp: "+212 6 23 59 28 87",
  whatsappRaw: "212623592887",
  email: "secretariat@cabinet-alami.ma",
  hours: [
    { days: "Lundi au Vendredi", hours: "08h30 - 19h00 (Sur Rendez-vous)" },
    { days: "Samedi", hours: "09h00 - 13h30 (Consultations & Bilans programmés)" },
    { days: "Dimanche", hours: "Fermé (Orientation vers urgences hospitalières de garde)" },
  ],
  insuranceNote: "Prise en charge AMO (CNSS, CNOPS) et bordereaux de remboursement pour l'ensemble des assurances privées marocaines (Saham, Wafa, AXA, RMA, Sanad).",
  valetParking: "Parking réservé aux patients & accès personnes à mobilité réduite (PMR) avec ascenseur médical.",
};

export const SPECIALTIES: Specialty[] = [
  {
    id: "cardio",
    title: "Cardiologie & Maladies Vasculaires",
    leadDoctor: "Dr. Yassine Alami",
    iconName: "heart",
    shortDesc: "Dépistage, exploration cardiaque non invasive et prise en charge de l'hypertension artérielle.",
    fullDesc: "Bilan cardiovasculaire complet pour la prévention et le traitement des pathologies cardiaques, insuffisances coronariennes, arythmies et suivi de l'hypertension artérielle sévère ou résistante.",
    acts: [
      "Électrocardiogramme de repos (ECG 12 dérivations)",
      "Échocardiographie-Doppler cardiaque transthoracique couleur",
      "Enregistrement tensionnel continu ambulatoire (MAPA 24h)",
      "Holter ECG de rythme des 24/48 heures",
      "Bilan cardiologique pré-opératoire et aptitude sportive",
    ],
    duration: "40 min",
    image: "/images/cardio_exam.jpg",
  },
  {
    id: "interne",
    title: "Médecine Interne & Diabétologie",
    leadDoctor: "Dr. Meryem Bennani",
    iconName: "activity",
    shortDesc: "Prise en charge globale des pathologies complexes, diabète, thyroïde et bilans métaboliques.",
    fullDesc: "Diagnostic approfondi des maladies systémiques, équilibre glycémique personnalisé pour diabète de type 1 et 2, dyslipidémies, anomalies thyroïdiennes et bilans de santé approfondis.",
    acts: [
      "Bilan métabolique et dépistage précoce du diabète",
      "Échographie thyroïdienne et bilan d'hypo/hyperthyroïdie",
      "Prise en charge de l'hypertension métabolique",
      "Éducation thérapeutique et protocole nutritionnel",
    ],
    duration: "35 min",
    image: "/images/consultation_room.jpg",
  },
  {
    id: "pediatrie",
    title: "Pédiatrie & Suivi du Nourrisson",
    leadDoctor: "Dr. Othmane Berrada",
    iconName: "baby",
    shortDesc: "Accompagnement bienveillant de l'enfant de la naissance à la fin de l'adolescence.",
    fullDesc: "Suivi régulier du développement staturo-pondéral et psychomoteur, vaccinations obligatoires et recommandées du calendrier marocain, dépistage des intolérances et gestion des pathologies infantiles aiguës.",
    acts: [
      "Bilan de santé systématique du nouveau-né et du nourrisson",
      "Calendrier vaccinal national du Ministère de la Santé",
      "Dépistage des allergies et asthme de l'enfant",
      "Conseils en diversification alimentaire et sommeil",
    ],
    duration: "30 min",
    image: "/images/clinic_reception.jpg",
  },
  {
    id: "generale",
    title: "Médecine Générale & Soins Préventifs",
    leadDoctor: "Dr. Yassine Alami & Collaborateurs",
    iconName: "stethoscope",
    shortDesc: "Soins médicaux de premier recours, check-ups annuels et certificats médicaux.",
    fullDesc: "Consultations médicales de routine pour adultes et adolescents. Diagnostic initial, orientation ciblée vers les sur-spécialités, bilans préventifs réguliers et délivrance d'actes médico-légaux réglementaires.",
    acts: [
      "Consultation de médecine générale aiguë et chronique",
      "Check-up médical annuel de santé préventive",
      "Certificats médicaux d'aptitude sportive et d'embauche",
      "Vaccinations adultes, rappels et conseils aux voyageurs",
    ],
    duration: "25 min",
    image: "/images/consultation_room.jpg",
  },
  {
    id: "dermatologie",
    title: "Dermatologie Médicale & Vénéréologie",
    leadDoctor: "Dr. Salma Tazi",
    iconName: "sparkles",
    shortDesc: "Santé cutanée, dermoscopie numérique, traitement de l'acné, eczéma et naevus.",
    fullDesc: "Dépistage des lésions cutanées précancéreuses et mélanomes par dermoscopie haute résolution. Traitement dermatologique ciblé du psoriasis, des dermatites atopiques et des affections du cuir chevelu.",
    acts: [
      "Dépistage et cartographie numérique des grains de beauté",
      "Traitement médical de l'acné sévère et rosacée",
      "Biopsie cutanée diagnostique superficielle",
      "Soins des pathologies du cuir chevelu et alopécies",
    ],
    duration: "30 min",
    image: "/images/diagnostic_equip.jpg",
  },
  {
    id: "imagerie",
    title: "Échographie & Explorations Diagnostiques",
    leadDoctor: "Dr. Meryem Bennani & Dr. Yassine Alami",
    iconName: "scan",
    shortDesc: "Plateau d'échographie générale, abdominale, pelvienne et doppler vasculaire.",
    fullDesc: "Explorations ultrasonores réalisées avec un échographe numérique de dernière génération, garantissant une imagerie haute définition pour un diagnostic immédiat lors de la consultation.",
    acts: [
      "Échographie abdominale complète (foie, vésicule, reins, rate)",
      "Échographie pelvienne et prostatique",
      "Écho-Doppler veineux et artériel des membres inférieurs",
      "Échographie des tissus mous et glandes salivaires",
    ],
    duration: "30 min",
    image: "/images/diagnostic_equip.jpg",
  },
];

export const PRACTITIONERS: Practitioner[] = [
  {
    id: "dr-alami",
    name: "Dr. Yassine Alami",
    title: "Cardiologue & Praticien Coordinateur (Profil Démonstration)",
    specialtyId: "cardio",
    specialtyName: "Cardiologie & Hypertension",
    bio: "Spécialiste en explorations cardiovasculaires non invasives et hypertension artérielle. Praticien au service de la prévention et du dépistage précoce des facteurs de risque chez l'adulte.",
    education: [
      "Doctorat en Médecine — Faculté de Médecine et de Pharmacie de Casablanca",
      "Diplôme de Spécialité Médicale en Cardiologie et Pathologie Vasculaire",
      "Diplôme Inter-Universitaire d'Échocardiographie Doppler Clinique",
    ],
    daysPresent: "Lundi, Mardi, Mercredi, Vendredi",
    image: "/images/doctor_male.jpg",
  },
  {
    id: "dr-bennani",
    name: "Dr. Meryem Bennani",
    title: "Médecin Interniste & Diabétologue (Profil Démonstration)",
    specialtyId: "interne",
    specialtyName: "Médecine Interne & Diabétologie",
    bio: "Experte dans le suivi multidisciplinaire des maladies métaboliques, de l'équilibre du diabète et des bilans de santé approfondis chez l'adulte et le senior.",
    education: [
      "Doctorat en Médecine — Faculté de Médecine de Rabat",
      "Spécialité en Médecine Interne et Explorations Fonctionnelles",
      "Formation Approfondie en Diabétologie et Maladies de la Nutrition",
    ],
    daysPresent: "Mardi, Mercredi, Jeudi, Samedi matin",
    image: "/images/doctor_female.jpg",
  },
  {
    id: "dr-berrada",
    name: "Dr. Othmane Berrada",
    title: "Pédiatre & Suivi Nourrisson (Profil Démonstration)",
    specialtyId: "pediatrie",
    specialtyName: "Pédiatrie & Néonatologie",
    bio: "Dédié au développement harmonieux de l'enfant de la naissance à l'adolescence, avec une attention particulière portée à l'écoute des parents et à la prévention pédiatrique.",
    education: [
      "Doctorat en Médecine — FMP Casablanca",
      "Diplôme d'Études Spécialisées en Pédiatrie Générale",
      "Certificat Universitaire en Allaitement et Nutrition Infantile",
    ],
    daysPresent: "Lundi, Mercredi, Jeudi, Vendredi",
    image: "/images/doctor_pediatric.jpg",
  },
  {
    id: "dr-tazi",
    name: "Dr. Salma Tazi",
    title: "Dermatologue & Vénéréologue (Profil Démonstration)",
    specialtyId: "dermatologie",
    specialtyName: "Dermatologie Médicale",
    bio: "Prise en charge complète des pathologies inflammatoires et infectieuses de la peau, surveillance dermoscopique des naevus et soins dermatologiques de précision.",
    education: [
      "Doctorat en Médecine — Faculté de Médecine de Casablanca",
      "Diplôme de Spécialité en Dermatologie-Vénéréologie",
      "Formation en Dermoscopie Numérique et Dépistage Oncologique",
    ],
    daysPresent: "Lundi matin, Mardi, Jeudi, Vendredi",
    image: "/images/doctor_female.jpg",
  },
];

export const INSURANCE_PARTNERS = [
  { name: "CNOPS", type: "Régime Public (AMO Salariés de l'État)", coverage: "Prise en charge & Remboursement" },
  { name: "CNSS / AMO", type: "Régime Général Secteur Privé", coverage: "Bordereaux de soins réglementaires" },
  { name: "Sanlam / Saham", type: "Compagnie Privée Conventionnée", coverage: "Tiers-payant & Dossiers maladie" },
  { name: "Wafa Assurance", type: "Assurance Santé Entreprise & Individuelle", coverage: "Feuille de soins conforme" },
  { name: "AXA Assurance Maroc", type: "Assurance Santé Privée", coverage: "Remboursement sous 48h" },
  { name: "RMA Royale Marocaine", type: "Assurance Santé & Prévoyance", coverage: "Prise en charge bilans" },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    category: "rdv",
    question: "Comment effectuer une demande de rendez-vous en ligne ?",
    answer: "Sur ce site vitrine de démonstration, vous pouvez tester notre formulaire interactif en sélectionnant la spécialité souhaitée, la date et l'horaire. La validation affiche un récapitulatif complet de votre demande. Conformément à la transparence de cette démo, aucune donnée n'est envoyée à un cabinet réel et aucun créneau n'est définitivement bloqué.",
  },
  {
    category: "rdv",
    question: "Dois-je me présenter en avance pour ma consultation ?",
    answer: "Pour une première consultation ou un bilan cardiologique/échographique nécessitant l'ouverture d'un dossier administratif, nous conseillons d'arriver 10 à 15 minutes avant l'heure de votre convocation muni de votre carte d'identité (CIN) et de vos ordonnances antérieures.",
  },
  {
    category: "mutuelle",
    question: "Le cabinet accepte-t-il les prises en charge CNSS, CNOPS et assurances privées ?",
    answer: "Oui. Nos praticiens délivrent systématiquement les feuilles de soins et factures acquittées conformes à la nomenclature marocaine pour vos demandes de remboursement auprès de la CNOPS, de la CNSS (AMO) et de toutes les mutuelles privées (Sanlam, AXA, Wafa Assurance, RMA).",
  },
  {
    category: "specialites",
    question: "Quels examens cardiologiques et échographiques sont réalisés sur place ?",
    answer: "Notre plateau technique intègre un électrocardiographe 12 dérivations, un échographe Doppler couleur transthoracique haute définition, ainsi que des dispositifs de pose d'enregistreurs tensionnels MAPA (24h) et Holter rythmique.",
  },
  {
    category: "pratique",
    question: "Le cabinet est-il accessible aux personnes à mobilité réduite (PMR) ?",
    answer: "Absolument. Notre immeuble médical dispose d'une rampe d'accès aux normes au rez-de-chaussée, d'un ascenseur adapté aux fauteuils roulants et de places de stationnement réservées à proximité de l'entrée Boulevard Abdelmoumen.",
  },
  {
    category: "pratique",
    question: "Que faire en cas d'urgence médicale vitale ?",
    answer: "Notre cabinet dispense des consultations programmées et ne constitue pas un service d'urgences hospitalières 24h/24. En cas d'urgence médicale vitale (douleur thoracique aiguë, détresse respiratoire ou perte de conscience), contactez immédiatement le SAMU (141) ou présentez-vous au service d'urgences hospitalières le plus proche.",
  },
];
