"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  HeartPulse,
  Activity,
  Stethoscope,
  Baby,
  Sparkles,
  Scan,
  CheckCircle2,
  Calendar,
  Clock,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SPECIALTIES } from "@/data/medical";

export default function SpecialitesPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] flex flex-col font-sans">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 w-full space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0284C7]">
            Pôles &amp; Disciplines Cliniques
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold text-[#0F172A]">
            Nos Spécialités Médicales &amp; Plateau Technique
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 max-w-xl mx-auto leading-relaxed">
            Des consultations approfondies associées à des explorations ultrasonores et cardiologiques immédiates pour un diagnostic rigoureux.
          </p>
        </div>

        {/* Detailed Specialty Blocks */}
        <div className="space-y-8">
          {SPECIALTIES.map((spec, index) => (
            <div
              key={spec.id}
              id={spec.id}
              className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-sky-50 text-[#0284C7] flex items-center justify-center font-bold border border-sky-100">
                    {spec.iconName === "heart" && <HeartPulse className="w-5 h-5" />}
                    {spec.iconName === "activity" && <Activity className="w-5 h-5" />}
                    {spec.iconName === "baby" && <Baby className="w-5 h-5" />}
                    {spec.iconName === "stethoscope" && <Stethoscope className="w-5 h-5" />}
                    {spec.iconName === "sparkles" && <Sparkles className="w-5 h-5" />}
                    {spec.iconName === "scan" && <Scan className="w-5 h-5" />}
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-[#0284C7] font-bold block">
                      Spécialité N° {index + 1}
                    </span>
                    <h2 className="text-xl sm:text-2xl font-bold text-[#0F172A]">
                      {spec.title}
                    </h2>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {spec.fullDesc}
                </p>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
                  <span className="text-xs font-bold text-[#0F172A] block">
                    Actes médicaux et explorations réalisés :
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                    {spec.acts.map((act, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{act}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                  <div className="text-xs text-slate-500">
                    <span className="text-slate-400">Praticien référent :</span>{" "}
                    <strong className="text-slate-800">{spec.leadDoctor}</strong>
                    <span className="mx-2">•</span>
                    <span className="font-mono text-[#0284C7]">{spec.duration}</span>
                  </div>

                  <Link
                    href={`/rendez-vous?specialty=${spec.id}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0284C7] hover:bg-[#0369A1] text-white text-xs font-semibold shadow-sm transition-all"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Demander un RDV en {spec.title.split("&")[0]}</span>
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5 relative h-64 sm:h-80 w-full rounded-2xl overflow-hidden border border-slate-200">
                <Image
                  src={spec.image}
                  alt={spec.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
