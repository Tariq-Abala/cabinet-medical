"use client";

import React from "react";
import Link from "next/link";
import {
  Calendar,
  Clock,
  Phone,
  ShieldCheck,
  AlertCircle,
  FileText,
  MapPin,
  CheckCircle2,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AppointmentRequestForm from "@/components/AppointmentRequestForm";
import { CLINIC_INFO } from "@/data/medical";

export default function RendezVousPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] flex flex-col font-sans">
      <Navbar />

      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 w-full space-y-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0284C7]">
            Secrétariat &amp; Planification
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold text-[#0F172A]">
            Prendre un Rendez-vous Médical
          </h1>
          <p className="text-xs sm:text-sm text-slate-500">
            Formulaire de consultation programmée pour nos pôles de cardiologie, médecine interne, pédiatrie et échographie.
          </p>
        </div>

        {/* Triage Warning for emergency */}
        <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start gap-3">
          <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Rappel important :</strong> Ce formulaire est destiné aux consultations courantes et programmées. En cas d&apos;urgence vitale immédiate (douleurs dans la poitrine, difficultés respiratoires sévères, traumatisme grave), contactez sans délai le SAMU au <strong>141</strong> ou rendez-vous aux urgences hospitalières les plus proches.
          </p>
        </div>

        {/* Form Container */}
        <AppointmentRequestForm />

        {/* What to Bring Card */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-4 shadow-xs">
          <h3 className="font-bold text-base text-[#0F172A] flex items-center gap-2">
            <FileText className="w-4 h-4 text-[#0284C7]" />
            <span>Documents à présenter lors de votre consultation :</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-600">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
              <span>Carte d&apos;Identité Nationale (CIN) ou livret de famille pour enfants</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
              <span>Attestation ou carte d&apos;affiliation CNSS (AMO) / CNOPS ou assurance privée</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
              <span>Derniers bilans sanguins, analyses ou ordonnances médicales en cours</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
              <span>Carnet de santé à jour pour les consultations de pédiatrie</span>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
