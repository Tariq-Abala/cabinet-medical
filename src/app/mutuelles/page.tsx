"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ShieldCheck,
  FileCheck2,
  Receipt,
  HelpCircle,
  CheckCircle2,
  Calendar,
  AlertCircle,
  Building2,
  ExternalLink,
  ChevronRight,
  Info,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CLINIC_INFO, INSURANCE_PARTNERS } from "@/data/medical";

export default function MutuellesPage() {
  const [selectedTab, setSelectedTab] = useState<"cnss" | "cnops" | "privees">("cnss");

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] flex flex-col font-sans">
      <Navbar />

      <main className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 w-full space-y-16">
        {/* Header Hero */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-semibold">
            <ShieldCheck className="w-4 h-4 text-teal-600" />
            <span>Assurances, Prises en Charge &amp; Remboursements</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold text-[#0F172A] tracking-tight">
            Mutuelles &amp; Couverture Maladie
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Notre cabinet médical à Casablanca vous accompagne dans toutes vos démarches administratives
            pour vous garantir une prise en charge rapide et conforme auprès des organismes de santé marocains.
          </p>
          <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900 inline-block text-left max-w-2xl">
            <span className="font-semibold">Note informative &amp; démonstration :</span> Les informations ci-dessous
            représentent les procédures courantes du système de santé au Maroc (AMO / CNOPS / Assurances privées).
            Elles sont éditables et fournies à titre indicatif pour ce site vitrine.
          </div>
        </div>

        {/* 3 Steps to Reimbursement */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-sm space-y-8">
          <div className="max-w-2xl">
            <h2 className="text-xl sm:text-2xl font-bold text-[#0F172A]">
              Comment se déroule votre remboursement ?
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Un parcours fluide et sans tracas administratif pour nos patients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200/70 relative">
              <div className="w-9 h-9 rounded-xl bg-[#0284C7] text-white flex items-center justify-center font-bold text-sm mb-4">
                1
              </div>
              <h3 className="font-bold text-sm sm:text-base text-[#0F172A] mb-2">
                Consultation &amp; Feuilles de Soins
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Lors de votre consultation, le médecin traitant remplit et signe votre bordereau d&apos;assurance ou feuille de soins AMO avec le cachet professionnel et le numéro INPE.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200/70 relative">
              <div className="w-9 h-9 rounded-xl bg-teal-600 text-white flex items-center justify-center font-bold text-sm mb-4">
                2
              </div>
              <h3 className="font-bold text-sm sm:text-base text-[#0F172A] mb-2">
                Facture &amp; Quittance Réglementaire
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Le secrétariat vous remet une quittance de paiement numérotée mentionnant le détail des actes médicaux (consultation, ECG, échographie) selon la tarification nationale de référence.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200/70 relative">
              <div className="w-9 h-9 rounded-xl bg-slate-800 text-white flex items-center justify-center font-bold text-sm mb-4">
                3
              </div>
              <h3 className="font-bold text-sm sm:text-base text-[#0F172A] mb-2">
                Dépôt &amp; Virement de Remboursement
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Vous déposez votre dossier complet auprès de votre agence ou via l&apos;application mobile de votre mutuelle. Le virement bancaire intervient selon les délais de votre organisme.
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Tabs: CNSS / CNOPS / Assurances Privées */}
        <div className="space-y-6">
          <div className="flex flex-wrap items-center justify-center gap-2 border-b border-slate-200 pb-4">
            <button
              onClick={() => setSelectedTab("cnss")}
              className={`px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm transition-all ${
                selectedTab === "cnss"
                  ? "bg-[#0284C7] text-white shadow-sm"
                  : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              CNSS / AMO (Salariés &amp; Indépendants)
            </button>
            <button
              onClick={() => setSelectedTab("cnops")}
              className={`px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm transition-all ${
                selectedTab === "cnops"
                  ? "bg-[#0284C7] text-white shadow-sm"
                  : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              CNOPS (Secteur Public &amp; Collectivités)
            </button>
            <button
              onClick={() => setSelectedTab("privees")}
              className={`px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm transition-all ${
                selectedTab === "privees"
                  ? "bg-[#0284C7] text-white shadow-sm"
                  : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              Assurances Privées &amp; Complémentaires
            </button>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-sm">
            {selectedTab === "cnss" && (
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-sky-50 flex items-center justify-center text-[#0284C7] font-bold text-lg">
                    CNSS
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#0F172A]">
                      Caisse Nationale de Sécurité Sociale (AMO)
                    </h3>
                    <p className="text-xs text-slate-500">
                      Régime obligatoire de base pour le secteur privé, professions libérales et indépendants (AMO Tadamon).
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                  <div className="space-y-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      Documents à préparer pour votre visite :
                    </h4>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                        <span>Carte d&apos;immatriculation CNSS ou attestation de droits à jour.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                        <span>Formulaire de feuille de soins CNSS pré-rempli avec votre identité.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                        <span>Carte Nationale d&apos;Identité Électronique (CNIE).</span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      Taux de remboursement indicatifs :
                    </h4>
                    <div className="space-y-2 text-xs sm:text-sm text-slate-600">
                      <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/70 flex justify-between">
                        <span>Consultation Spécialisée :</span>
                        <span className="font-bold text-[#0F172A]">70% du Tarif National (TNR)</span>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/70 flex justify-between">
                        <span>Électrocardiogramme &amp; Échographie :</span>
                        <span className="font-bold text-[#0F172A]">70% selon nomenclature</span>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/70 flex justify-between">
                        <span>Affections Longue Durée (ALD) :</span>
                        <span className="font-bold text-teal-700">Jusqu&apos;à 100% avec protocole</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {selectedTab === "cnops" && (
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-teal-50 flex items-center justify-center text-teal-700 font-bold text-lg">
                    CNOPS
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#0F172A]">
                      Caisse Nationale des Organismes de Prévoyance Sociale
                    </h3>
                    <p className="text-xs text-slate-500">
                      Couverture des fonctionnaires, agents de l&apos;État, collectivités locales et établissements publics.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                  <div className="space-y-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      Procédure de prise en charge :
                    </h4>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                        <span>Feuille de maladie CNOPS signée par l&apos;adhérent.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                        <span>Mention obligatoire du numéro d&apos;affiliation et de la mutuelle d&apos;origine (MGEN, Mutuelle Générale, OMFAM, etc.).</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                        <span>Facture détaillée originale acquittée et ordonnance médicale conforme.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      Conseil pour les bilans cardiologiques :
                    </h4>
                    <div className="p-4 rounded-2xl bg-sky-50 border border-sky-100 text-xs sm:text-sm text-sky-900 leading-relaxed">
                      Pour les explorations cardiologiques complexes (Holter ECG, Échocardiographie Doppler), notre secrétariat vous fournit un compte-rendu médical dactylographié joint aux clichés d&apos;imagerie pour accélérer le traitement auprès des commissions médicales de la CNOPS.
                    </div>
                  </div>
                </div>
              </div>
            )}

            {selectedTab === "privees" && (
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-700 font-bold text-lg">
                    ASSUR
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#0F172A]">
                      Assurances Privées &amp; Mutuelles de Groupes
                    </h3>
                    <p className="text-xs text-slate-500">
                      Sanlam, Wafa Assurance, AXA, RMA, MAMDA-MCMA, AtlantaSanad, etc.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                  <div className="space-y-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      Bordereaux de Déclaration Maladie :
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Nos médecins remplissent tous les modèles de formulaires d&apos;assurance groupe d&apos;entreprises (multinationales, banques, offices) avec cotation des actes selon la nomenclature marocaine (NGAP).
                    </p>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                        <span>Remplissage immédiat en fin de consultation.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                        <span>Remise de la facture avec TVA réglementaire et identifiants fiscaux.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      Organismes fréquemment acceptés :
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {INSURANCE_PARTNERS.map((ins, idx) => (
                        <div key={idx} className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/70 text-xs font-medium text-slate-700">
                          {ins.name}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Partners Grid */}
        <div className="space-y-6">
          <div className="text-center max-w-xl mx-auto">
            <h2 className="text-2xl font-bold text-[#0F172A]">
              Principaux Organismes &amp; Partenaires Reconnus
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Dossiers de remboursement conformes aux exigences des caisses et compagnies suivantes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {INSURANCE_PARTNERS.map((partner, index) => (
              <div
                key={index}
                className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex items-start gap-3 hover:border-[#0284C7]/40 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0284C7] flex items-center justify-center shrink-0 font-bold text-xs">
                  {partner.name.slice(0, 3).toUpperCase()}
                </div>
                <div>
                  <h3 className="font-bold text-sm text-[#0F172A]">{partner.name}</h3>
                  <p className="text-xs text-slate-500 mt-0.5">{partner.type}</p>
                  <span className="inline-block mt-2 text-[11px] font-semibold text-teal-700 bg-teal-50 px-2 py-0.5 rounded-md">
                    {partner.coverage}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA to Book */}
        <div className="bg-gradient-to-r from-sky-500 to-[#0284C7] text-white rounded-3xl p-8 sm:p-12 text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold">
            Besoin d&apos;un conseil sur la prise en charge de votre acte ?
          </h2>
          <p className="text-sky-100 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            Notre secrétariat médical vous renseigne du lundi au vendredi sur la préparation de votre dossier et les devis préalables d&apos;explorations.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/rendez-vous"
              className="px-6 py-3 rounded-xl bg-white text-[#0284C7] font-bold text-xs sm:text-sm shadow-md hover:bg-sky-50 transition-colors"
            >
              Demander un Rendez-vous
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 rounded-xl bg-sky-600/50 hover:bg-sky-600 text-white font-semibold text-xs sm:text-sm border border-white/20 transition-colors"
            >
              Contacter le Secrétariat
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
