"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
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
  ArrowRight,
  Scan,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AppointmentRequestForm from "@/components/AppointmentRequestForm";
import {
  CLINIC_INFO,
  SPECIALTIES,
  PRACTITIONERS,
  INSURANCE_PARTNERS,
  Specialty,
} from "@/data/medical";

export default function HomePage() {
  const [selectedSpecialtyId, setSelectedSpecialtyId] = useState<string>("cardio");

  const currentSpecialty =
    SPECIALTIES.find((s) => s.id === selectedSpecialtyId) || SPECIALTIES[0];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] flex flex-col font-sans">
      <Navbar />

      <main className="flex-1">
        {/* HERO SECTION (Bright, calming, matching reference image) */}
        <section className="bg-white border-b border-slate-200/80 pt-10 pb-16 lg:pt-16 lg:pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Text Left Column */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200/70 text-sky-800 text-xs font-semibold">
                  <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
                  <span>Cabinet Médical Pluridisciplinaire • Casablanca Palmier</span>
                </div>

                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-[#0F172A] tracking-tight leading-[1.12]">
                  Votre Santé au Cœur de Notre Engagement Médical
                </h1>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl">
                  Le Cabinet Médical Dr. Alami &amp; Associés réunit cardiologie de pointe, médecine interne, pédiatrie et explorations ultrasonores dans un cadre serein, lumineux et rigoureusement équipé.
                </p>

                {/* CTAs */}
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <Link
                    href="/rendez-vous"
                    className="px-6 py-3.5 rounded-2xl bg-[#0284C7] hover:bg-[#0369A1] text-white text-xs sm:text-sm font-semibold shadow-md shadow-sky-700/20 transition-all hover:scale-[1.02] flex items-center gap-2"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Demander un Rendez-vous en Ligne</span>
                  </Link>

                  <a
                    href={`https://wa.me/${CLINIC_INFO.whatsappRaw}?text=${encodeURIComponent(
                      "Bonjour Cabinet Médical Dr. Alami, je souhaite me renseigner pour une consultation."
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3.5 rounded-2xl border border-slate-300 bg-white hover:bg-slate-50 text-[#0F172A] text-xs sm:text-sm font-semibold transition-colors flex items-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-600" />
                    <span>Échanger sur WhatsApp</span>
                  </a>
                </div>

                {/* Trust Highlights */}
                <div className="pt-6 border-t border-slate-100 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
                  <div>
                    <span className="font-bold text-lg text-[#0284C7] block">4 Spécialités</span>
                    <span className="text-slate-500 text-[11px]">Prise en charge globale</span>
                  </div>
                  <div>
                    <span className="font-bold text-lg text-[#0D9488] block">ECG &amp; Écho</span>
                    <span className="text-slate-500 text-[11px]">Plateau technique complet</span>
                  </div>
                  <div>
                    <span className="font-bold text-lg text-[#0284C7] block">AMO / CNOPS</span>
                    <span className="text-slate-500 text-[11px]">Remboursement garanti</span>
                  </div>
                  <div>
                    <span className="font-bold text-lg text-[#0D9488] block">Accès PMR</span>
                    <span className="text-slate-500 text-[11px]">Ascenseur &amp; parking</span>
                  </div>
                </div>
              </div>

              {/* Photo Right Column (Matching user's reference image aesthetic) */}
              <div className="lg:col-span-5 relative">
                <div className="relative h-80 sm:h-[420px] w-full rounded-3xl overflow-hidden shadow-xl border border-slate-200">
                  <Image
                    src="/images/clinic_reception.jpg"
                    alt="Espace d'accueil moderne et lumineux du cabinet médical"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                    <span className="text-[10px] uppercase font-mono tracking-widest text-sky-300 font-bold">
                      Espace d&apos;Accueil &amp; Salle d&apos;Attente
                    </span>
                    <p className="font-bold text-base sm:text-lg">
                      Atmosphère calme, apaisante et bienveillante
                    </p>
                    <p className="text-xs text-slate-200">
                      Conçu pour le confort de chaque patient
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MEDICAL SPECIALTIES SECTION */}
        <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#0284C7]">
                Pôles d&apos;Expertise Médicale
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-[#0F172A] mt-1">
                Consultations Spécialisées &amp; Bilans
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-xl">
                Une coordination étroite entre nos médecins spécialistes pour assurer une prise en charge complète et personnalisée.
              </p>
            </div>

            <Link
              href="/specialites"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0284C7] hover:underline"
            >
              <span>Voir le détail des explorations</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SPECIALTIES.map((spec) => (
              <div
                key={spec.id}
                className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-7 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-5 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-2xl bg-sky-50 text-[#0284C7] flex items-center justify-center font-bold border border-sky-100 group-hover:scale-105 transition-transform">
                      {spec.iconName === "heart" && <HeartPulse className="w-6 h-6" />}
                      {spec.iconName === "activity" && <Activity className="w-6 h-6" />}
                      {spec.iconName === "baby" && <Baby className="w-6 h-6" />}
                      {spec.iconName === "stethoscope" && <Stethoscope className="w-6 h-6" />}
                      {spec.iconName === "sparkles" && <Sparkles className="w-6 h-6" />}
                      {spec.iconName === "scan" && <Scan className="w-6 h-6" />}
                    </div>
                    <span className="text-[11px] font-mono text-slate-500 bg-slate-50 px-2.5 py-1 rounded-full border border-slate-200">
                      {spec.duration}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg text-[#0F172A] group-hover:text-[#0284C7] transition-colors">
                      {spec.title}
                    </h3>
                    <p className="text-xs text-sky-700 font-medium mt-0.5">
                      Réfèrent : {spec.leadDoctor}
                    </p>
                    <p className="text-xs text-slate-500 leading-relaxed mt-2">
                      {spec.shortDesc}
                    </p>
                  </div>

                  {/* Acts list */}
                  <div className="space-y-1.5 pt-2 border-t border-slate-100">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block">
                      Actes réalisés sur place :
                    </span>
                    <ul className="space-y-1">
                      {spec.acts.slice(0, 3).map((act, idx) => (
                        <li key={idx} className="text-xs text-slate-600 flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{act}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={`/rendez-vous?specialty=${spec.id}`}
                    className="text-xs font-semibold text-[#0284C7] hover:underline flex items-center gap-1"
                  >
                    <span>Prendre RDV</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>

                  <Link
                    href="/specialites"
                    className="text-[11px] text-slate-400 hover:text-slate-700"
                  >
                    En savoir plus
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PRACTITIONERS / DOCTOR PROFILES SECTION */}
        <section className="py-16 bg-white border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#0284C7]">
                Corps Médical &amp; Équipe
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-[#0F172A]">
                Médecins Spécialistes à Votre Écoute
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">
                Profils de démonstration pour le portfolio de l&apos;ingénieur développeur Tariq Abala.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {PRACTITIONERS.map((doc) => (
                <div
                  key={doc.id}
                  className="rounded-3xl border border-slate-200 bg-slate-50/50 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div className="relative h-64 w-full bg-slate-100">
                    <Image
                      src={doc.image}
                      alt={doc.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute top-3 left-3 px-2 py-0.5 rounded-full bg-white/95 backdrop-blur-sm text-[10px] font-bold text-[#0284C7] border border-slate-200">
                      Démo Médicale
                    </div>
                  </div>

                  <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                    <div className="space-y-1">
                      <span className="text-[10px] uppercase font-bold tracking-wider text-[#0284C7]">
                        {doc.specialtyName}
                      </span>
                      <h3 className="font-bold text-base text-[#0F172A]">
                        {doc.name}
                      </h3>
                      <p className="text-xs text-slate-500 leading-relaxed line-clamp-3">
                        {doc.bio}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-200/80 space-y-2">
                      <div className="text-[11px] text-slate-500">
                        <strong className="text-slate-700 block">Jours de consultation :</strong>
                        <span>{doc.daysPresent}</span>
                      </div>

                      <Link
                        href={`/rendez-vous?doctor=${doc.id}`}
                        className="w-full py-2 px-3 rounded-xl bg-white border border-slate-200 hover:border-[#0284C7] hover:text-[#0284C7] text-xs font-semibold text-center block transition-all"
                      >
                        Consulter ce Praticien
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DIAGNOSTIC FACILITIES & RECEPTION HIGHLIGHT */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 rounded-3xl border border-slate-200 p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-5">
              <span className="text-xs font-bold uppercase tracking-widest text-[#0284C7]">
                Plateau Technique &amp; Confort
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-[#0F172A]">
                Un Environnement Conçu pour la Précision du Diagnostic
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Notre structure a été pensée pour regrouper la consultation clinique et les explorations fonctionnelles indispensables au sein d&apos;une même unité de lieu, réduisant les délais et le stress des déplacements d&apos;un laboratoire à un autre.
              </p>

              <div className="space-y-3 text-xs text-slate-700">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#0284C7] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#0F172A] block">Échographe Doppler Couleur Haute Définition :</strong>
                    <span>Imagerie cardiovasculaire, abdominale et thyroïdienne instantanée.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#0284C7] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#0F172A] block">Enregistreurs Ambulatoires MAPA &amp; Holter ECG :</strong>
                    <span>Pose et analyse rapide des données tensionnelles et rythmiques sur 24 à 48 heures.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#0284C7] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#0F172A] block">Hygiène Hospitalière &amp; Traçabilité :</strong>
                    <span>Matériel stérile à usage unique et désinfection continue conforme aux recommandations sanitaires.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-48 rounded-2xl overflow-hidden border border-slate-200">
                <Image
                  src="/images/diagnostic_equip.jpg"
                  alt="Équipement d'imagerie et stéthoscope de diagnostic"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="relative h-48 rounded-2xl overflow-hidden border border-slate-200">
                <Image
                  src="/images/cardio_exam.jpg"
                  alt="Monitoring cardiologique en consultation"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="relative h-48 rounded-2xl overflow-hidden border border-slate-200 col-span-2">
                <Image
                  src="/images/medical_team.jpg"
                  alt="Équipe médicale et de soins coordonnée"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* APPOINTMENT REQUEST SECTION */}
        <section id="rendez-vous" className="py-16 bg-white border-y border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#0284C7]">
                Secrétariat Numérique
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-[#0F172A]">
                Demande de Rendez-vous en Ligne
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">
                Remplissez notre formulaire interactif pour tester la planification de votre consultation médicale.
              </p>
            </div>

            <AppointmentRequestForm />
          </div>
        </section>

        {/* MUTUELLES & PRISES EN CHARGE (Sample data clearly indicated) */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0D9488]">
              Couverture Sociale &amp; Assurances
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A]">
              Prise en Charge Mutuelles &amp; Remboursements
            </h2>
            <p className="text-xs text-slate-500">
              Données de démonstration éditables pour cabinet médical au Maroc.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {INSURANCE_PARTNERS.map((partner, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-2"
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-base text-[#0F172A]">{partner.name}</span>
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                </div>
                <p className="text-xs text-slate-500">{partner.type}</p>
                <span className="text-[11px] font-semibold text-[#0284C7] block pt-1 border-t border-slate-100">
                  {partner.coverage}
                </span>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
