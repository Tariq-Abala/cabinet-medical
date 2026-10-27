"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  AlertTriangle,
  Send,
  CheckCircle2,
  Car,
  Train,
  Accessibility,
  Info,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CLINIC_INFO } from "@/data/medical";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "Renseignement général",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.message) {
      alert("Veuillez renseigner votre nom, téléphone et message.");
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] flex flex-col font-sans">
      <Navbar />

      <main className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 w-full space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-800 text-xs font-semibold">
            <MapPin className="w-4 h-4 text-[#0284C7]" />
            <span>Accès &amp; Coordonnées du Cabinet</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold text-[#0F172A] tracking-tight">
            Contactez Notre Secrétariat Médical
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Notre équipe d&apos;accueil vous renseigne par téléphone, WhatsApp ou via notre formulaire pour toute demande relative aux consultations, horaires et modalités de prise en charge.
          </p>
        </div>

        {/* Emergency Triage Banner */}
        <div className="p-4 sm:p-5 rounded-2xl bg-amber-50 border border-amber-200 text-amber-950 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm">
              <span className="font-bold">Urgences Médicales Vitales :</span> Pour les détresses cardiaques, respiratoires ou malaises graves, ne pas envoyer de message. Appelez sans délai le <span className="font-bold underline">SAMU au 141</span> ou SOS Médecins Casablanca au <span className="font-bold underline">05 22 98 98 98</span>.
            </div>
          </div>
          <a
            href="tel:141"
            className="px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs shrink-0 shadow-xs"
          >
            Appeler 141
          </a>
        </div>

        {/* Main 2-Column Grid: Coordinates & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Coordinates & Transport: 5 cols */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-6">
              <h2 className="text-xl font-bold text-[#0F172A]">
                Coordonnées Directes
              </h2>

              <div className="space-y-5 text-xs sm:text-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0284C7] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block">Adresse du Cabinet</span>
                    <p className="text-slate-600 mt-0.5">{CLINIC_INFO.address}</p>
                    <p className="text-slate-600">{CLINIC_INFO.city}</p>
                    <span className="text-[11px] text-teal-700 font-semibold block mt-1">Immeuble Médical Palmier — 3ème étage (Ascenseur)</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0284C7] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block">Téléphone Secrétariat</span>
                    <a
                      href={`tel:${CLINIC_INFO.phoneRaw}`}
                      className="text-[#0284C7] hover:underline font-semibold block mt-0.5"
                    >
                      {CLINIC_INFO.phone}
                    </a>
                    <span className="text-[11px] text-slate-500">Lundi au Vendredi de 08h30 à 19h00</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block">WhatsApp Professionnel</span>
                    <a
                      href={`https://wa.me/${CLINIC_INFO.whatsappRaw}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-700 hover:underline font-semibold block mt-0.5"
                    >
                      {CLINIC_INFO.whatsapp}
                    </a>
                    <span className="text-[11px] text-slate-500">Réponse sous 2 à 4h ouvrées</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 text-slate-700 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block">Courriel Administratif</span>
                    <a
                      href={`mailto:${CLINIC_INFO.email}`}
                      className="text-slate-600 hover:underline block mt-0.5"
                    >
                      {CLINIC_INFO.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Opening Hours & Access */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-4">
              <h3 className="font-bold text-base text-[#0F172A] flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#0284C7]" />
                Horaires d&apos;Ouverture
              </h3>
              <div className="space-y-2.5 text-xs sm:text-sm">
                {CLINIC_INFO.hours.map((h, i) => (
                  <div key={i} className="flex justify-between py-1.5 border-b border-slate-100 last:border-b-0">
                    <span className="font-medium text-slate-600">{h.days}</span>
                    <span className="font-bold text-[#0F172A]">{h.hours}</span>
                  </div>
                ))}
              </div>

              <div className="pt-3 border-t border-slate-100 space-y-2">
                <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider">Moyens d&apos;accès</h4>
                <div className="space-y-1.5 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <Train className="w-3.5 h-3.5 text-[#0284C7] shrink-0" />
                    <span><strong>Tramway T1 :</strong> Station Abdelmoumen (3 min à pied)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Car className="w-3.5 h-3.5 text-[#0284C7] shrink-0" />
                    <span><strong>Stationnement :</strong> Parking Palmier à 50 mètres</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Accessibility className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                    <span><strong>Accessibilité PMR :</strong> Rampe d&apos;accès et grand ascenseur</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form: 7 cols */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-sm">
            {submitted ? (
              <div className="py-10 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-teal-50 border border-teal-200 text-teal-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A]">
                  Message de Démonstration Enregistré !
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Merci <strong>{formData.name}</strong>. Dans le cadre de ce portfolio de démonstration,
                  aucun e-mail réel n&apos;a été transmis et aucune information personnelle n&apos;est conservée.
                </p>
                <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200 text-xs text-slate-600 max-w-md mx-auto text-left space-y-1">
                  <p><strong>Sujet :</strong> {formData.subject}</p>
                  <p><strong>Téléphone :</strong> {formData.phone}</p>
                  <p><strong>Message :</strong> {formData.message}</p>
                </div>
                <div className="pt-4 flex flex-wrap justify-center gap-3">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        phone: "",
                        email: "",
                        subject: "Renseignement général",
                        message: "",
                      });
                    }}
                    className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors"
                  >
                    Envoyer un autre message
                  </button>
                  <a
                    href={`https://wa.me/${CLINIC_INFO.whatsappRaw}?text=${encodeURIComponent(
                      `Bonjour, je teste la démonstration du cabinet médical.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs flex items-center gap-2 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Tester le contact WhatsApp
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#0F172A]">
                    Formulaire de Contact
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Pour toute question d&apos;ordre pratique ou administratif (démonstration interactive).
                  </p>
                </div>

                <div className="p-3 bg-sky-50 border border-sky-100 rounded-xl text-xs text-sky-900 flex items-start gap-2">
                  <Info className="w-4 h-4 text-[#0284C7] shrink-0 mt-0.5" />
                  <span>
                    <strong>Confidentialité médicale :</strong> Ne communiquez aucun résultat médical confidentiel ou donnée sensible de santé dans ce formulaire général.
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">
                      Nom et Prénom <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Mohamed Kabbaj"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0284C7]/20 focus:border-[#0284C7]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">
                      Numéro de Téléphone <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="06 XX XX XX XX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0284C7]/20 focus:border-[#0284C7]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">
                      Adresse Email (Optionnelle)
                    </label>
                    <input
                      type="email"
                      placeholder="patient@exemple.ma"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0284C7]/20 focus:border-[#0284C7]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">
                      Objet de votre message
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0284C7]/20 focus:border-[#0284C7]"
                    >
                      <option value="Renseignement général">Renseignement général</option>
                      <option value="Question sur les mutuelles / CNOPS">Question sur les mutuelles / CNOPS</option>
                      <option value="Explorations cardiologiques">Explorations cardiologiques</option>
                      <option value="Horaires & Accès PMR">Horaires &amp; Accès PMR</option>
                      <option value="Autre demande">Autre demande</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">
                    Votre Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Précisez votre demande d'information (ex: préparation avant échographie, pièces à fournir)..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0284C7]/20 focus:border-[#0284C7] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-[#0284C7] hover:bg-sky-600 text-white font-bold text-xs sm:text-sm shadow-md transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  Transmettre la Demande (Simulation Démo)
                </button>
              </form>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
