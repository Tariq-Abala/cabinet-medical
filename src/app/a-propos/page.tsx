"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  HeartHandshake,
  ShieldCheck,
  Award,
  Users2,
  Stethoscope,
  Microscope,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Clock,
  MapPin,
  Building,
  Info,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CLINIC_INFO } from "@/data/medical";

export default function AProposPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] flex flex-col font-sans">
      <Navbar />

      <main className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 w-full space-y-16">
        {/* Header Hero */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-800 text-xs font-semibold">
            <HeartHandshake className="w-4 h-4 text-[#0284C7]" />
            <span>À Propos du Cabinet Médical</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold text-[#0F172A] tracking-tight">
            Une Écoute Attentive, Une Médecine Rigoureuse
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Fondé avec la vocation d&apos;offrir une prise en charge globale, humaine et moderne au cœur de Casablanca,
            notre cabinet réunit des praticiens engagés pour la prévention, le diagnostic précoce et l&apos;excellence des soins.
          </p>
          <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900 inline-block text-left max-w-2xl">
            <span className="font-semibold">Notice de Démonstration :</span> Ce site vitrine est une réalisation
            de portfolio conçue par Tariq Abala. Les profils, services et descriptions de cabinet ci-présents illustrent
            une interface médicale haut de gamme conforme aux standards déontologiques et réglementaires marocains.
          </div>
        </div>

        {/* Visual Presentation: 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="relative rounded-3xl overflow-hidden shadow-sm border border-slate-200/80 aspect-[4/3]">
            <Image
              src="/images/clinic_reception.jpg"
              alt="Espace d'accueil et salle d'attente lumineuse du cabinet médical"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent flex items-end p-6">
              <div className="text-white">
                <p className="text-xs font-medium text-sky-200">Espace Accueil &amp; Consultation</p>
                <p className="text-sm font-semibold">Atmosphère sereine et lumineuse pensée pour l&apos;apaisement des patients</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0284C7]">
              Notre Démarche Thérapeutique
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A]">
              Remettre le dialogue soignant-patient au centre de chaque consultation
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Nous considérons que le temps accordé à l&apos;anamnèse, à l&apos;écoute des symptômes et à l&apos;explication pédagogique des pathologies est aussi fondamental que les examens techniques.
            </p>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Chaque patient bénéficie d&apos;une consultation personnalisée, sans précipitation, dans un cadre serein et confidentiel propice à la confiance mutuelle.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                <span className="text-2xl font-bold text-[#0284C7]">4</span>
                <p className="text-xs font-medium text-slate-700 mt-1">Pôles Médicaux Coordonnés</p>
                <p className="text-[11px] text-slate-500">Cardiologie, Médecine interne, Pédiatrie, Dermato</p>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                <span className="text-2xl font-bold text-teal-600">30+ min</span>
                <p className="text-xs font-medium text-slate-700 mt-1">Temps de Consultation Moyen</p>
                <p className="text-[11px] text-slate-500">Examen clinique approfondi &amp; écoute</p>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars of Excellence */}
        <div className="space-y-8">
          <div className="text-center max-w-xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A]">
              Nos 4 Engagements Déontologiques
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Des standards stricts de pratique médicale et d&apos;accueil.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0284C7] flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-sm sm:text-base text-[#0F172A]">
                Hygiène &amp; Asepsie
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Protocoles d&apos;asepsie stricts, stérilisation autoclave certifiée et consommables médicaux à usage unique.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center">
                <Microscope className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-sm sm:text-base text-[#0F172A]">
                Plateau Diagnostique
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Appareils récents d&apos;échocardiographie Doppler et d&apos;enregistrement continu (Holter / MAPA) pour un bilan immédiat.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                <Building className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-sm sm:text-base text-[#0F172A]">
                Accessibilité PMR
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Locaux de plain-pied avec ascenseur brancardable, rampes d&apos;accès et portes larges pour personnes à mobilité réduite.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-sm sm:text-base text-[#0F172A]">
                Confidentialité CNDP
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Secret médical absolu et conformité totale avec la Loi 09-08 sur la protection des données personnelles de santé.
              </p>
            </div>
          </div>
        </div>

        {/* Consultation space & Team Photo */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-sm grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700">
              Locaux &amp; Environnement
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-[#0F172A]">
              Un cadre conçu pour la tranquillité d&apos;esprit de nos consultants
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Situé au Quartier Palmier à Casablanca, le cabinet a été pensé pour offrir un environnement lumineux, insonorisé et épuré. La salle d&apos;attente confortable et aérée permet de réduire le stress d&apos;attente et de garantir le respect de l&apos;intimité de chacun.
            </p>
            <div className="space-y-2 pt-2">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-[#0284C7] shrink-0" />
                <span>Système de filtration d&apos;air et climatisation médicale réversible</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-[#0284C7] shrink-0" />
                <span>Gestion dématérialisée et sécurisée des dossiers patients</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-[#0284C7] shrink-0" />
                <span>Secrétariat disponible pour vous orienter et répondre à vos questions</span>
              </div>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-slate-200">
            <Image
              src="/images/consultation_room.jpg"
              alt="Bureau de consultation médicale et table d'examen"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Practical info recap */}
        <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200/80 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-[#0284C7] shrink-0 mt-1" />
            <div>
              <h4 className="font-bold text-sm text-[#0F172A]">Localisation</h4>
              <p className="text-xs text-slate-600 mt-1">{CLINIC_INFO.address}</p>
              <p className="text-xs text-slate-600">{CLINIC_INFO.city}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Clock className="w-5 h-5 text-teal-600 shrink-0 mt-1" />
            <div>
              <h4 className="font-bold text-sm text-[#0F172A]">Horaires de Consultation</h4>
              <p className="text-xs text-slate-600 mt-1">Lundi au Vendredi : 08h30 - 19h00</p>
              <p className="text-xs text-slate-600">Samedi : 09h00 - 13h30</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Stethoscope className="w-5 h-5 text-indigo-600 shrink-0 mt-1" />
            <div>
              <h4 className="font-bold text-sm text-[#0F172A]">Accompagnement</h4>
              <p className="text-xs text-slate-600 mt-1">Prise de rendez-vous en ligne ou par téléphone</p>
              <Link href="/rendez-vous" className="text-xs font-bold text-[#0284C7] hover:underline inline-flex items-center gap-1 mt-1">
                Prendre rendez-vous <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
