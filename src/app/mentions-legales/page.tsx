"use client";

import React from "react";
import Link from "next/link";
import { FileText, ShieldCheck, ExternalLink, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CLINIC_INFO } from "@/data/medical";

export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] flex flex-col font-sans">
      <Navbar />

      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 w-full space-y-10">
        <div className="space-y-3">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0284C7] hover:underline"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Retour à l&apos;accueil
          </Link>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#0F172A] tracking-tight">
            Mentions Légales &amp; Cadre Déontologique
          </h1>
          <p className="text-xs sm:text-sm text-slate-500">
            Dernière mise à jour réglementaire : Janvier 2026 — Document type pour validation avant mise en production.
          </p>
        </div>

        {/* Portfolio Notice Banner */}
        <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-amber-950 space-y-2">
          <div className="font-bold flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-amber-700" />
            Avis de Démonstration — Portfolio Tariq Abala
          </div>
          <p className="leading-relaxed text-amber-900">
            Ce site web est un projet de démonstration conçu et développé par <strong>Tariq Abala</strong> (
            <a
              href="https://tariqabala.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-semibold text-amber-950 hover:text-black"
            >
              https://tariqabala.com
            </a>
            ). Il a pour but d&apos;illustrer une interface de cabinet médical moderne, accessible, éthique et responsive. Les noms de praticiens, adresses spécifiques et éléments d&apos;agenda sont fournis à titre de simulation. Aucune transaction financière ni consultation médicale effective n&apos;est exécutée via cette interface.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-sm space-y-8 text-xs sm:text-sm text-slate-700 leading-relaxed">
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-[#0F172A]">
              1. Éditeur du Site (Modèle Type Démonstration)
            </h2>
            <p>
              Le présent site vitrine médical <strong>{CLINIC_INFO.name}</strong> est édité dans le cadre d&apos;une simulation professionnelle :
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-600">
              <li><strong>Raison sociale :</strong> Cabinet Médical Privé Dr. Alami &amp; Associés</li>
              <li><strong>Siège d&apos;exercice :</strong> {CLINIC_INFO.address}, {CLINIC_INFO.city}</li>
              <li><strong>Téléphone :</strong> {CLINIC_INFO.phone}</li>
              <li><strong>Courriel :</strong> {CLINIC_INFO.email}</li>
              <li><strong>Inscription Ordinale :</strong> Inscrit au Tableau de l&apos;Ordre National des Médecins du Maroc (Conseil Régional de Casablanca-Settat) — Identifiant National des Praticiens (INPE) indicatif.</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="space-y-3 border-t border-slate-100 pt-6">
            <h2 className="text-base sm:text-lg font-bold text-[#0F172A]">
              2. Conception, Développement Web &amp; Droits d&apos;Auteur
            </h2>
            <p>
              Ce site web a été conçu, architecturé et développé d&apos;une manière professionnelle par :
            </p>
            <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200 space-y-2">
              <p className="font-bold text-[#0F172A]">Tariq Abala</p>
              <p className="text-xs text-slate-600">Web Development &amp; Digital Solutions</p>
              <p className="text-xs text-slate-600">Professional Websites • Business Applications • Custom Admin Panels</p>
              <p className="text-xs">
                Site officiel :{" "}
                <a
                  href="https://tariqabala.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0284C7] font-semibold underline inline-flex items-center gap-1"
                >
                  tariqabala.com <ExternalLink className="w-3 h-3" />
                </a>
              </p>
            </div>
            <p className="text-slate-600 text-xs">
              L&apos;ensemble du code source, de la structure ergonomique et des éléments graphiques originaux relève de la propriété intellectuelle de son auteur. Toute reproduction sans accord préalable est prohibée.
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-3 border-t border-slate-100 pt-6">
            <h2 className="text-base sm:text-lg font-bold text-[#0F172A]">
              3. Cadre Déontologique &amp; Législation Médicale Marocaine
            </h2>
            <p>
              Conformément à la <strong>Loi n° 131-13 relative à l&apos;exercice de la médecine au Maroc</strong> et aux règles édictées par l&apos;Ordre National des Médecins :
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
              <li>Le site internet d&apos;un médecin ou d&apos;un cabinet a une vocation exclusivement informative et pratique pour les patients.</li>
              <li>Il ne comporte aucune forme de publicité commerciale, de promesse de guérison ou de comparaison valorisante avec d&apos;autres confrères.</li>
              <li>Les actes médicaux présentés sont dispensés selon la déontologie médicale, dans le strict respect du secret professionnel et du libre choix du praticien par le patient.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="space-y-3 border-t border-slate-100 pt-6">
            <h2 className="text-base sm:text-lg font-bold text-[#0F172A]">
              4. Avertissement Médical &amp; Absence de Télé-Diagnostic
            </h2>
            <p>
              Les descriptions médicales présentes sur ce site sont purement éducatives et ne peuvent en aucun cas se substituer à une consultation médicale présentielle, un examen clinique direct ou un diagnostic individualisé posé par un médecin qualifié.
            </p>
            <p className="text-red-700 font-semibold text-xs">
              En cas d&apos;urgence vitale, ne tentez pas de formuler une demande en ligne : contactez immédiatement le SAMU au 141 ou présentez-vous au service d&apos;urgences hospitalières le plus proche.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3 border-t border-slate-100 pt-6">
            <h2 className="text-base sm:text-lg font-bold text-[#0F172A]">
              5. Hébergement &amp; Technologies
            </h2>
            <p>
              Plateforme hébergée sur infrastructure cloud haute disponibilité Next.js conforme aux standards HTTPS, cryptage TLS 1.3 et protection contre les intrusions.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
