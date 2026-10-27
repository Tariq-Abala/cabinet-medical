"use client";

import React from "react";
import Link from "next/link";
import { Lock, ShieldCheck, ArrowLeft, CheckCircle2, AlertCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CLINIC_INFO } from "@/data/medical";

export default function ConfidentialitePage() {
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
            Politique de Confidentialité &amp; Protection des Données
          </h1>
          <p className="text-xs sm:text-sm text-slate-500">
            Conformité à la Loi marocaine n° 09-08 et au Secret Médical Professionnel (CNDP).
          </p>
        </div>

        {/* Demo transparency banner */}
        <div className="p-5 rounded-2xl bg-sky-50 border border-sky-200 text-xs sm:text-sm text-sky-950 space-y-2">
          <div className="font-bold flex items-center gap-2 text-[#0284C7]">
            <ShieldCheck className="w-4 h-4 text-[#0284C7]" />
            Transparence Technique de cette Démonstration
          </div>
          <p className="leading-relaxed text-slate-700">
            Dans le cadre de ce portfolio réalisé par Tariq Abala, les formulaires de demande de rendez-vous et de contact sont des simulations d&apos;interface (frontend). <strong>Aucune donnée de santé, aucun nom et aucun numéro de téléphone n&apos;est enregistré dans une base de données distante ni persisté dans le stockage local (localStorage).</strong>
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-sm space-y-8 text-xs sm:text-sm text-slate-700 leading-relaxed">
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-[#0F172A] flex items-center gap-2">
              <Lock className="w-4 h-4 text-[#0284C7]" />
              1. Engagement Relatif au Secret Médical
            </h2>
            <p>
              Le secret médical est une obligation légale, morale et déontologique absolue, sanctionnée par l&apos;article 446 du Code pénal marocain. Aucune information relative à l&apos;état de santé d&apos;un patient, son motif de consultation, ses diagnostics ou ses antécédents n&apos;est divulguée à des tiers sans son consentement explicite ou réquisition judiciaire expresse.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3 border-t border-slate-100 pt-6">
            <h2 className="text-base sm:text-lg font-bold text-[#0F172A]">
              2. Traitement des Données Personnelles (Loi n° 09-08)
            </h2>
            <p>
              Conformément à la <strong>Loi n° 09-08 promulguée par le Dahir n° 1-09-15</strong> relative à la protection des personnes physiques à l&apos;égard du traitement des données à caractère personnel :
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
              <li>Les données administratives recueillies pour l&apos;ouverture d&apos;un dossier (Nom, CIN, numéro de téléphone, numéro d&apos;immatriculation CNOPS / CNSS) sont réservées exclusivement à la gestion des rendez-vous et à l&apos;établissement des bordereaux de soins.</li>
              <li>Aucune donnée à caractère personnel n&apos;est cédée, louée ou échangée avec des tiers commerciaux ou publicitaires.</li>
              <li>Tout traitement informatique fait l&apos;objet d&apos;une déclaration préalable auprès de la <strong>Commission Nationale de contrôle de la protection des Données à caractère Personnel (CNDP)</strong>.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-3 border-t border-slate-100 pt-6">
            <h2 className="text-base sm:text-lg font-bold text-[#0F172A]">
              3. Vos Droits d&apos;Accès, de Rectification et de Suppression
            </h2>
            <p>
              En application des articles 7, 8 et 9 de la Loi 09-08, chaque consultant dispose d&apos;un droit d&apos;accès, de rectification et d&apos;opposition pour des motifs légitimes au traitement de ses données à caractère personnel.
            </p>
            <p>
              Pour exercer ces droits, le patient peut s&apos;adresser directement au secrétariat médical :
            </p>
            <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200 text-xs text-slate-600 space-y-1">
              <p><strong>Délégué à la Protection des Données :</strong> Secrétariat {CLINIC_INFO.name}</p>
              <p><strong>Courriel dédié :</strong> {CLINIC_INFO.email}</p>
              <p><strong>Adresse postale :</strong> {CLINIC_INFO.address}, {CLINIC_INFO.city}</p>
            </div>
          </section>

          {/* Section 4 */}
          <section className="space-y-3 border-t border-slate-100 pt-6">
            <h2 className="text-base sm:text-lg font-bold text-[#0F172A]">
              4. Cookies et Traceurs
            </h2>
            <p>
              Ce site web n&apos;utilise aucun cookie publicitaire intrusif, ni traceur de profilage commercial. Seuls des cookies strictement techniques nécessaires à la navigation et à l&apos;ergonomie (sélection de langue, fluidité d&apos;affichage) peuvent être déposés temporairement.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3 border-t border-slate-100 pt-6">
            <h2 className="text-base sm:text-lg font-bold text-[#0F172A]">
              5. Sécurité des Systèmes d&apos;Information
            </h2>
            <p>
              Toutes les communications entre le navigateur du consultant et le site s&apos;effectuent via un protocole chiffré SSL/TLS (HTTPS), garantissant l&apos;intégrité et la confidentialité des échanges transitant sur les réseaux de télécommunication.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
