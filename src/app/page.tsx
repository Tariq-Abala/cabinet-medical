"use client";

import React, { useState } from "react";
import {
  HeartPulse,
  Activity,
  Stethoscope,
  Calendar,
  Clock,
  MapPin,
  Phone,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  FileText,
  Users,
  Award,
  ChevronRight,
  MessageCircle,
  Baby,
  Sparkles,
  HelpCircle,
} from "lucide-react";

interface Specialty {
  id: string;
  title: string;
  doctor: string;
  iconName: "heart" | "stethoscope" | "baby" | "activity";
  description: string;
  acts: string[];
  duration: string;
}

const SPECIALTIES: Specialty[] = [
  {
    id: "cardio",
    title: "Cardiologie & Hypertension",
    doctor: "Dr. Yassine Alami",
    iconName: "heart",
    description: "Dépistage et prise en charge des maladies cardiovasculaires, suivi de l'hypertension artérielle et insuffisance cardiaque.",
    acts: ["Électrocardiogramme (ECG 12 pistes)", "Échocardiographie Doppler cardiaque", "Holter tensionnel MAPA 24h", "Bilan pré-opératoire"],
    duration: "40 min",
  },
  {
    id: "interne",
    title: "Médecine Interne & Diabétologie",
    doctor: "Dr. Meryem Bennani",
    iconName: "activity",
    description: "Équilibre du diabète de type 1 et 2, dyslipidémies, pathologies thyroïdiennes et bilans métaboliques complets.",
    acts: ["Suivi glycémique personnalisé", "Bilan lipidique et rénal", "Dépistage du diabète gestationnel", "Conseils nutritionnels médicaux"],
    duration: "30 min",
  },
  {
    id: "pediatrie",
    title: "Pédiatrie & Suivi Nourrisson",
    doctor: "Dr. Othmane Berrada",
    iconName: "baby",
    description: "Suivi de croissance et de développement psychomoteur de la naissance à l'adolescence, vaccinations et urgences pédiatriques courantes.",
    acts: ["Consultation du nouveau-né", "Calendrier vaccinal national", "Dépistage des allergies infantiles", "Troubles du sommeil & alimentation"],
    duration: "30 min",
  },
  {
    id: "generale",
    title: "Médecine Générale & Prévention",
    doctor: "Dr. Yassine Alami & Dr. Meryem Bennani",
    iconName: "stethoscope",
    description: "Soins de premier recours, bilans de santé annuels, certificats d'aptitude sportive et orientation spécialisée.",
    acts: ["Check-up de santé préventif", "Suivi des affections aiguës", "Certificat médical d'aptitude", "Vaccinations adultes & rappels"],
    duration: "25 min",
  },
];

export default function CabinetMedicalPage() {
  const [selectedSpecialty, setSelectedSpecialty] = useState("cardio");
  const [selectedDoctor, setSelectedDoctor] = useState("Dr. Yassine Alami (Cardiologue)");
  const [bookingReason, setBookingReason] = useState("Première Consultation");
  const [bookingDate, setBookingDate] = useState("2026-11-04");
  const [bookingTime, setBookingTime] = useState("10:00");
  const [patientName, setPatientName] = useState("");
  const [patientPhone, setPatientPhone] = useState("");
  const [patientCNE, setPatientCNE] = useState("");
  const [insuranceType, setInsuranceType] = useState("CNSS / AMO");
  const [isBooked, setIsBooked] = useState(false);
  const [appointmentId, setAppointmentId] = useState("");

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!patientName || !patientPhone) return;
    const ref = "MED-" + Math.floor(10000 + Math.random() * 90000);
    setAppointmentId(ref);
    setIsBooked(true);
  };

  return (
    <div className="min-h-screen bg-[#07101C] text-[#F8FAFC] selection:bg-[#0EA5E9]/30 selection:text-white">
      {/* Emergency & Mutuelle Header */}
      <div className="bg-[#0B1726] border-b border-[#0EA5E9]/20 py-2.5 px-4 text-xs">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-[#94A3B8]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span className="text-[#F8FAFC] font-semibold">Cabinet Ouvert</span>
            <span className="hidden sm:inline text-slate-600">|</span>
            <span className="hidden sm:inline text-sky-400 font-medium">
              Prise en charge directe : CNSS • CNOPS • SAHAM • AXA • RMA • Sanad
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:+212522334455" className="flex items-center gap-1.5 text-rose-400 font-semibold hover:underline">
              <Phone className="w-3.5 h-3.5 text-rose-400" />
              <span>Urgences : +212 522 33 44 55</span>
            </a>
            <span className="text-slate-700 hidden sm:inline">|</span>
            <span className="text-slate-400 hidden sm:inline">Casablanca — Palmier / Bd Roudani</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="sticky top-0 z-40 backdrop-blur-md bg-[#07101C]/95 border-b border-[#0EA5E9]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#0EA5E9] via-[#0284C7] to-[#0369A1] flex items-center justify-center text-white shadow-lg shadow-[#0EA5E9]/20">
              <HeartPulse className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-lg sm:text-xl font-bold tracking-tight text-[#F8FAFC]">
                  CABINET DR. ALAMI
                </span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-sky-950 text-sky-400 border border-sky-800">
                  SANTÉ
                </span>
              </div>
              <p className="text-[11px] text-[#94A3B8]">Centre Médical Pluridisciplinaire</p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm text-[#94A3B8]">
            <a href="#specialites" className="hover:text-sky-400 transition-colors">Spécialités</a>
            <a href="#equipe" className="hover:text-sky-400 transition-colors">Praticiens</a>
            <a href="#bilans" className="hover:text-sky-400 transition-colors">Plateau Technique</a>
            <a href="#tarifs" className="hover:text-sky-400 transition-colors">Mutuelles & Accès</a>
            <a href="#rdv" className="hover:text-sky-400 transition-colors">Prendre RDV</a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/212600000000?text=Bonjour%20Cabinet%20Dr.%20Alami,%20je%20souhaite%20prendre%20un%20rendez-vous"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-emerald-950/70 text-emerald-400 border border-emerald-800/40 text-xs font-semibold hover:bg-emerald-900/60 transition-all"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Secrétariat</span>
            </a>
            <a
              href="#rdv"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-[#0EA5E9] to-[#0284C7] text-white text-xs font-bold shadow-md shadow-[#0EA5E9]/25 hover:brightness-110 transition-all"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Prendre RDV</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-16 pb-24 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#0EA5E9]/10 rounded-full blur-[140px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0E1B2C] border border-sky-800/40 text-xs font-mono text-sky-400 mb-6">
              <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
              <span>Plateau Technique Haute Définition & Équipe Spécialisée</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#F8FAFC] leading-tight sm:leading-tight">
              L’Excellence Médicale au Service de{" "}
              <span className="bg-gradient-to-r from-sky-400 via-teal-300 to-sky-400 bg-clip-text text-transparent">
                Votre Santé & de Vos Proches.
              </span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-[#94A3B8] leading-relaxed">
              Consultations de cardiologie, diabétologie, pédiatrie et bilans de santé complets.
              Équipements d’échographie Doppler de dernière génération et prise en charge humaine dans le respect strict du secret médical.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#rdv"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#0EA5E9] to-[#0284C7] text-white font-bold text-sm shadow-xl shadow-[#0EA5E9]/25 hover:scale-[1.02] transition-transform"
              >
                <Calendar className="w-4 h-4" />
                <span>Prendre Rendez-vous en Ligne</span>
                <ChevronRight className="w-4 h-4" />
              </a>

              <a
                href="#specialites"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#0E1B2C] border border-sky-800/40 text-[#F8FAFC] font-semibold text-sm hover:bg-slate-800 transition-all"
              >
                <Stethoscope className="w-4 h-4 text-sky-400" />
                <span>Consulter les Spécialités</span>
              </a>
            </div>

            {/* Metrics */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 pt-10 border-t border-slate-800">
              <div className="p-4 rounded-xl bg-[#0E1B2C] border border-slate-800">
                <div className="text-2xl sm:text-3xl font-extrabold text-sky-400">20+ Ans</div>
                <div className="text-xs text-[#94A3B8] mt-1">D’expérience hospitalière</div>
              </div>
              <div className="p-4 rounded-xl bg-[#0E1B2C] border border-slate-800">
                <div className="text-2xl sm:text-3xl font-extrabold text-sky-400">25 000+</div>
                <div className="text-xs text-[#94A3B8] mt-1">Patients soignés à Casablanca</div>
              </div>
              <div className="p-4 rounded-xl bg-[#0E1B2C] border border-slate-800">
                <div className="text-2xl sm:text-3xl font-extrabold text-sky-400">100%</div>
                <div className="text-xs text-[#94A3B8] mt-1">Dossiers Médicaux Sécurisés</div>
              </div>
              <div className="p-4 rounded-xl bg-[#0E1B2C] border border-slate-800">
                <div className="text-2xl sm:text-3xl font-extrabold text-sky-400">0 Attente</div>
                <div className="text-xs text-[#94A3B8] mt-1">Gestion horaire ponctuelle</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section id="specialites" className="py-20 bg-[#091524] border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-sky-950 text-xs font-mono text-sky-400 mb-3 border border-sky-800/50">
              <Activity className="w-3.5 h-3.5" />
              <span>PÔLES DE SOINS SPÉCIALISÉS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFC]">
              Nos Domaines d’Expertise
            </h2>
            <p className="text-[#94A3B8] text-xs sm:text-sm mt-3">
              Un plateau technique moderne permettant la réalisation des examens diagnostiques le jour même de votre consultation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SPECIALTIES.map((spec) => (
              <div
                key={spec.id}
                className="p-7 rounded-2xl bg-[#0E1B2C] border border-slate-800 hover:border-sky-500/50 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-sky-950 border border-sky-800/60 flex items-center justify-center text-sky-400 group-hover:bg-sky-600 group-hover:text-white transition-colors">
                        {spec.iconName === "heart" && <HeartPulse className="w-6 h-6" />}
                        {spec.iconName === "activity" && <Activity className="w-6 h-6" />}
                        {spec.iconName === "baby" && <Baby className="w-6 h-6" />}
                        {spec.iconName === "stethoscope" && <Stethoscope className="w-6 h-6" />}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[#F8FAFC]">{spec.title}</h3>
                        <span className="text-xs text-sky-400 font-medium">{spec.doctor}</span>
                      </div>
                    </div>
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-slate-900 text-slate-400 border border-slate-800">
                      ~ {spec.duration}
                    </span>
                  </div>

                  <p className="text-xs text-[#94A3B8] leading-relaxed mt-3">{spec.description}</p>

                  <div className="mt-5 space-y-2">
                    <span className="text-[11px] font-semibold text-slate-300 block uppercase tracking-wider">
                      Actes & Explorations Réalisés :
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {spec.acts.map((act, idx) => (
                        <div key={idx} className="flex items-center gap-1.5 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                          <span className="truncate">{act}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-xs text-slate-500">Prise en charge mutuelles intégrale</span>
                  <a
                    href="#rdv"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-sky-950 text-sky-400 hover:bg-sky-600 hover:text-white text-xs font-semibold transition-all border border-sky-800/40"
                  >
                    <span>Prendre RDV</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctors Team Section */}
      <section id="equipe" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-[#F8FAFC]">L’Équipe Médicale</h2>
            <p className="text-[#94A3B8] text-xs sm:text-sm mt-2">
              Des praticiens formés dans les plus grands centres hospitaliers universitaires au Maroc et en France.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-[#0E1B2C] border border-slate-800">
              <div className="w-16 h-16 rounded-full bg-sky-950 border border-sky-800 flex items-center justify-center text-sky-400 font-bold text-xl mb-4">
                YA
              </div>
              <h3 className="text-lg font-bold text-[#F8FAFC]">Dr. Yassine Alami</h3>
              <p className="text-xs text-sky-400 font-medium">Spécialiste en Cardiologie & Maladies Vasculaires</p>
              <ul className="mt-4 space-y-1.5 text-xs text-[#94A3B8]">
                <li>• Lauréat de la Faculté de Médecine de Casablanca</li>
                <li>• Ancien Interne et Chef de Clinique CHU Ibn Rochd</li>
                <li>• D.I.U. Échocardiographie Doppler (Paris Sorbonne)</li>
                <li>• Membre de la Société Marocaine de Cardiologie</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-[#0E1B2C] border border-slate-800">
              <div className="w-16 h-16 rounded-full bg-teal-950 border border-teal-800 flex items-center justify-center text-teal-400 font-bold text-xl mb-4">
                MB
              </div>
              <h3 className="text-lg font-bold text-[#F8FAFC]">Dr. Meryem Bennani</h3>
              <p className="text-xs text-teal-400 font-medium">Spécialiste en Médecine Interne & Diabétologie</p>
              <ul className="mt-4 space-y-1.5 text-xs text-[#94A3B8]">
                <li>• Lauréate de la Faculté de Médecine de Rabat</li>
                <li>• Prise en charge globale des pathologies chroniques</li>
                <li>• Diplôme de Nutrition Clinique & Métabolisme</li>
                <li>• Membre de la Société Francophone du Diabète</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-[#0E1B2C] border border-slate-800">
              <div className="w-16 h-16 rounded-full bg-indigo-950 border border-indigo-800 flex items-center justify-center text-indigo-400 font-bold text-xl mb-4">
                OB
              </div>
              <h3 className="text-lg font-bold text-[#F8FAFC]">Dr. Othmane Berrada</h3>
              <p className="text-xs text-indigo-400 font-medium">Spécialiste en Pédiatrie & Néonatalogie</p>
              <ul className="mt-4 space-y-1.5 text-xs text-[#94A3B8]">
                <li>• Ancien Médecin de l’Hôpital d’Enfants Abderrahim Harouchi</li>
                <li>• Suivi du développement psychomoteur et vaccinal</li>
                <li>• Formation aux urgences vitales pédiatriques</li>
                <li>• Écoute et accompagnement des jeunes parents</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment Booking Section */}
      <section id="rdv" className="py-20 bg-[#091524] border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-sky-950 text-xs font-mono text-sky-400 mb-3 border border-sky-800/40">
              <Calendar className="w-3.5 h-3.5" />
              <span>PRISE DE RENDEZ-VOUS EN LIGNE 24/7</span>
            </div>
            <h2 className="text-3xl font-extrabold text-[#F8FAFC]">
              Réserver Votre Consultation Médicale
            </h2>
            <p className="text-[#94A3B8] text-xs sm:text-sm mt-2">
              Confirmation immédiate par SMS avec rappel la veille de la consultation.
            </p>
          </div>

          <div className="rounded-2xl bg-[#0E1B2C] border border-sky-500/30 p-6 sm:p-10 shadow-2xl">
            {isBooked ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-950/80 border border-emerald-600/50 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-[#F8FAFC]">Rendez-vous Confirmé avec Succès</h3>
                <div className="p-4 rounded-xl bg-[#07101C] max-w-md mx-auto text-xs text-left space-y-2 border border-slate-800">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Réf. Dossier :</span>
                    <span className="font-mono font-bold text-sky-400">{appointmentId}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Patient :</span>
                    <span className="font-medium text-slate-200">{patientName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Praticien :</span>
                    <span className="font-medium text-slate-200">{selectedDoctor}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Date & Heure :</span>
                    <span className="font-medium text-sky-400">{bookingDate} à {bookingTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Mutuelle :</span>
                    <span className="font-medium text-slate-200">{insuranceType}</span>
                  </div>
                </div>

                <div className="p-3 bg-amber-950/40 border border-amber-800/40 rounded-xl text-[11px] text-amber-300 max-w-md mx-auto flex items-start gap-2 text-left">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>
                    Pensez à vous munir de votre carte CNSS / CNOPS, de vos dernières analyses sanguines et de vos ordonnances en cours.
                  </span>
                </div>

                <div className="pt-4 flex justify-center gap-3">
                  <button
                    onClick={() => {
                      setIsBooked(false);
                      setPatientName("");
                      setPatientPhone("");
                    }}
                    className="px-5 py-2.5 rounded-lg bg-slate-800 text-[#F8FAFC] text-xs font-semibold hover:bg-slate-700"
                  >
                    Réserver un autre rendez-vous
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleBooking} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-xs font-medium text-[#94A3B8] mb-2">
                      Praticien & Spécialité *
                    </label>
                    <select
                      value={selectedDoctor}
                      onChange={(e) => setSelectedDoctor(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#07101C] border border-slate-800 text-xs text-[#F8FAFC] focus:outline-none focus:border-sky-400"
                    >
                      <option value="Dr. Yassine Alami (Cardiologue)">Dr. Yassine Alami (Cardiologue)</option>
                      <option value="Dr. Meryem Bennani (Médecine Interne)">Dr. Meryem Bennani (Médecine Interne)</option>
                      <option value="Dr. Othmane Berrada (Pédiatre)">Dr. Othmane Berrada (Pédiatre)</option>
                      <option value="Consultation Médecine Générale">Consultation Médecine Générale</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#94A3B8] mb-2">
                      Motif de Consultation *
                    </label>
                    <select
                      value={bookingReason}
                      onChange={(e) => setBookingReason(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#07101C] border border-slate-800 text-xs text-[#F8FAFC] focus:outline-none focus:border-sky-400"
                    >
                      <option value="Première Consultation">Première Consultation</option>
                      <option value="Consultation de Suivi">Consultation de Suivi</option>
                      <option value="Bilan Cardiaque / Échographie">Bilan Cardiaque / Échographie</option>
                      <option value="Bilan Diabète & Métabolisme">Bilan Diabète & Métabolisme</option>
                      <option value="Suivi Nourrisson / Vaccin">Suivi Nourrisson / Vaccin</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#94A3B8] mb-2">
                      Couverture Médicale *
                    </label>
                    <select
                      value={insuranceType}
                      onChange={(e) => setInsuranceType(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#07101C] border border-slate-800 text-xs text-[#F8FAFC] focus:outline-none focus:border-sky-400"
                    >
                      <option value="CNSS / AMO">CNSS / AMO</option>
                      <option value="CNOPS">CNOPS</option>
                      <option value="Assurance Privée (Saham, AXA, RMA)">Assurance Privée (Saham, AXA, RMA)</option>
                      <option value="Paiement Comptant (Feuille de soin remise)">Paiement Comptant (Feuille remise)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#94A3B8] mb-2">Date souhaitée</label>
                    <input
                      type="date"
                      value={bookingDate}
                      onChange={(e) => setBookingDate(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#07101C] border border-slate-800 text-xs text-[#F8FAFC] focus:outline-none focus:border-sky-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#94A3B8] mb-2">Heure du créneau</label>
                    <select
                      value={bookingTime}
                      onChange={(e) => setBookingTime(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#07101C] border border-slate-800 text-xs text-[#F8FAFC] focus:outline-none focus:border-sky-400"
                    >
                      <option value="09:00">09:00</option>
                      <option value="10:00">10:00</option>
                      <option value="11:30">11:30</option>
                      <option value="14:30">14:30</option>
                      <option value="16:00">16:00</option>
                      <option value="17:30">17:30</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#94A3B8] mb-2">Téléphone (SMS de confirmation) *</label>
                    <input
                      type="tel"
                      required
                      placeholder="06 61 00 00 00"
                      value={patientPhone}
                      onChange={(e) => setPatientPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#07101C] border border-slate-800 text-xs text-[#F8FAFC] focus:outline-none focus:border-sky-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-medium text-[#94A3B8] mb-2">Nom & Prénom du Patient *</label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: M. Rachid Tazi"
                      value={patientName}
                      onChange={(e) => setPatientName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#07101C] border border-slate-800 text-xs text-[#F8FAFC] focus:outline-none focus:border-sky-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#94A3B8] mb-2">CIN ou Numéro d’Immatriculation Mutuelle (Optionnel)</label>
                    <input
                      type="text"
                      placeholder="Ex: BK123456"
                      value={patientCNE}
                      onChange={(e) => setPatientCNE(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#07101C] border border-slate-800 text-xs text-[#F8FAFC] focus:outline-none focus:border-sky-400"
                    />
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-[11px] text-[#94A3B8] flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>Données confidentielles protégées par le secret médical (Loi 09-08).</span>
                  </p>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3 rounded-xl bg-gradient-to-r from-[#0EA5E9] to-[#0284C7] text-white font-bold text-xs shadow-lg shadow-[#0EA5E9]/25 hover:brightness-110 transition-all"
                  >
                    Valider le Rendez-vous
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-[#050C16] border-t border-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-900">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#0EA5E9] flex items-center justify-center text-white font-bold">
                <HeartPulse className="w-5 h-5" />
              </div>
              <div>
                <span className="text-lg font-bold text-[#F8FAFC]">CABINET MÉDICAL DR. ALAMI</span>
                <p className="text-[11px] text-[#94A3B8]">Casablanca Palmier / Roudani</p>
              </div>
            </div>

            <div className="text-xs text-[#94A3B8] text-center md:text-right">
              <p>Développé par Tariq Abala d&apos;une manière professionnelle</p>
              <p className="mt-1 text-slate-500 font-mono text-[10px]">
                Stack : Next.js 16 • React 19 • Tailwind CSS • TypeScript
              </p>
            </div>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
            <p>© 2026 Cabinet Médical Dr. Alami. Tous droits réservés.</p>
            <div className="flex gap-6">
              <a href="#specialites" className="hover:text-slate-400">Spécialités</a>
              <a href="#rdv" className="hover:text-slate-400">Prendre RDV</a>
              <a href="tel:+212522334455" className="hover:text-slate-400">+212 522 33 44 55</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
