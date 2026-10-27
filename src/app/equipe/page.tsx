"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Users,
  Award,
  Calendar,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Info,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PRACTITIONERS } from "@/data/medical";

export default function EquipePage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] flex flex-col font-sans">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 w-full space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0284C7]">
            Corps Médical &amp; Équipe de Soins
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold text-[#0F172A]">
            Nos Praticiens Spécialistes
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 max-w-xl mx-auto leading-relaxed">
            Une équipe pluridisciplinaire unie par les mêmes exigences d&apos;écoute, de rigueur diagnostique et de respect du secret médical.
          </p>
        </div>

        {/* Demo Notice Banner */}
        <div className="p-4 rounded-2xl bg-sky-50 border border-sky-200 text-xs text-sky-900 flex items-start gap-3 max-w-3xl mx-auto">
          <Info className="w-4 h-4 text-[#0284C7] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Transparence de Démonstration Portfolio :</strong> Les fiches de praticiens présentées ci-dessous constituent des profils types élaborés dans le cadre de la démonstration professionnelle de Tariq Abala. Aucune donnée d&apos;exercice réel n&apos;est revendiquée sans accord préalable.
          </p>
        </div>

        {/* Practitioners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PRACTITIONERS.map((doc) => (
            <div
              key={doc.id}
              className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs flex flex-col justify-between space-y-6"
            >
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-2xl overflow-hidden shrink-0 border border-slate-200 bg-slate-100">
                  <Image
                    src={doc.image}
                    alt={doc.name}
                    fill
                    className="object-cover"
                    sizes="144px"
                  />
                </div>

                <div className="space-y-2 flex-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0284C7] block">
                    {doc.specialtyName}
                  </span>
                  <h2 className="text-xl font-bold text-[#0F172A]">
                    {doc.name}
                  </h2>
                  <p className="text-xs text-slate-500 font-medium">
                    {doc.title}
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed pt-1">
                    {doc.bio}
                  </p>
                </div>
              </div>

              {/* Education & Qualifications */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-[#0284C7]" />
                  <span>Cursus &amp; Titres Universitaires (Simulation) :</span>
                </span>
                <ul className="space-y-1">
                  {doc.education.map((edu, idx) => (
                    <li key={idx} className="text-xs text-slate-700 flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{edu}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Consultation Days & Booking CTA */}
              <div className="pt-2 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="text-xs text-slate-500">
                  <span className="text-slate-400 block text-[10px] uppercase">Présence au cabinet :</span>
                  <span className="font-semibold text-slate-800">{doc.daysPresent}</span>
                </div>

                <Link
                  href={`/rendez-vous?doctor=${doc.id}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0284C7] hover:bg-[#0369A1] text-white text-xs font-semibold shadow-sm transition-all"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Prendre RDV avec {doc.name.split(" ")[1]}</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
