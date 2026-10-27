"use client";

import React, { useState } from "react";
import {
  Calendar,
  Clock,
  User,
  Phone,
  Mail,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Stethoscope,
  HeartPulse,
  Sparkles,
  MessageCircle,
  ArrowRight,
  Info,
} from "lucide-react";
import { SPECIALTIES, PRACTITIONERS, CLINIC_INFO } from "@/data/medical";

interface AppointmentRequestFormProps {
  initialSpecialty?: string;
  initialDoctor?: string;
}

export default function AppointmentRequestForm({
  initialSpecialty = "cardio",
  initialDoctor = "dr-alami",
}: AppointmentRequestFormProps) {
  const [selectedSpecialty, setSelectedSpecialty] = useState(initialSpecialty);
  const [selectedDoctor, setSelectedDoctor] = useState(initialDoctor);
  const [date, setDate] = useState("2026-11-04");
  const [time, setTime] = useState("10:00");
  const [patientName, setPatientName] = useState("");
  const [patientPhone, setPatientPhone] = useState("");
  const [patientEmail, setPatientEmail] = useState("");
  const [contactMethod, setContactMethod] = useState<"phone" | "whatsapp" | "email">("whatsapp");
  const [visitReason, setVisitReason] = useState("Première Consultation / Bilan");
  const [patientNotes, setPatientNotes] = useState("");
  const [formError, setFormError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [demoReference, setDemoReference] = useState("");

  const timeSlots = [
    "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
    "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError("");

    if (!patientName.trim()) {
      setFormError("Veuillez renseigner le nom et prénom du patient.");
      return;
    }
    if (!patientPhone.trim() || patientPhone.trim().length < 8) {
      setFormError("Veuillez renseigner un numéro de téléphone valide pour confirmation.");
      return;
    }

    // Verify date is not in the past (minimum today)
    const selectedDateObj = new Date(date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (selectedDateObj < today) {
      setFormError("La date de consultation demandée ne peut pas être antérieure à aujourd'hui.");
      return;
    }

    const ref = "MED-" + Math.floor(10000 + Math.random() * 90000);
    setDemoReference(ref);
    setIsSubmitted(true);
  };

  const currentSpecialtyObj = SPECIALTIES.find((s) => s.id === selectedSpecialty) || SPECIALTIES[0];
  const currentDoctorObj = PRACTITIONERS.find((p) => p.id === selectedDoctor) || PRACTITIONERS[0];

  const whatsappMessage = encodeURIComponent(
    `Bonjour Cabinet Médical Dr. Alami, je souhaite vérifier la disponibilité pour une consultation :\n` +
      `• Référence démo : ${demoReference || "Nouvelle demande"}\n` +
      `• Spécialité : ${currentSpecialtyObj.title}\n` +
      `• Praticien : ${currentDoctorObj.name}\n` +
      `• Date souhaitée : ${date} vers ${time}\n` +
      `• Patient : ${patientName || "Client"}\n` +
      `• Motif : ${visitReason}\n` +
      `\nMerci de me contacter pour confirmer la disponibilité.`
  );

  return (
    <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-lg shadow-slate-100">
      {isSubmitted ? (
        /* Transparent Demo Confirmation Screen */
        <div className="space-y-6 text-center animate-in zoom-in-95 duration-200">
          <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200 shadow-sm">
            <CheckCircle2 className="w-9 h-9" />
          </div>

          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#0284C7]">
              Simulation de Demande de Rendez-vous
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#0F172A] mt-1">
              Demande Validée avec Succès
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Identifiant de simulation :{" "}
              <strong className="font-mono text-[#0284C7] text-sm">{demoReference}</strong>
            </p>
          </div>

          {/* Consultation Summary Card */}
          <div className="max-w-xl mx-auto rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50/80 p-5 text-left text-xs space-y-3">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <span className="font-bold text-sm text-[#0F172A]">
                CABINET MÉDICAL DR. ALAMI • CASABLANCA PALMIER
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-sky-100 text-sky-800 text-[10px] font-bold">
                Simulation Interactive
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div>
                <span className="text-slate-400 block text-[10px] uppercase">Nom du Patient</span>
                <span className="font-bold text-[#0F172A]">{patientName}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px] uppercase">Moyen de Contact</span>
                <span className="font-bold text-[#0F172A] capitalize">
                  {contactMethod} : {patientPhone}
                </span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px] uppercase">Spécialité Demandée</span>
                <span className="font-semibold text-[#0284C7]">{currentSpecialtyObj.title}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px] uppercase">Praticien Sélectionné</span>
                <span className="font-semibold text-[#0F172A]">{currentDoctorObj.name}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px] uppercase">Date Souhaitée</span>
                <span className="font-bold text-[#0F172A]">{date} à {time}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px] uppercase">Motif de la Visite</span>
                <span className="font-medium text-slate-700">{visitReason}</span>
              </div>
            </div>
          </div>

          {/* Important Transparent Demo Notice */}
          <div className="p-5 rounded-2xl bg-amber-50/80 border border-amber-200 text-left text-xs text-amber-900 space-y-2">
            <div className="flex items-center gap-2 font-bold text-amber-800">
              <AlertCircle className="w-4 h-4 text-amber-700 shrink-0" />
              <span>Avis Transparent de Démonstration Portfolio :</span>
            </div>
            <p className="leading-relaxed text-[11px] text-amber-800/90">
              Ce site web est une réalisation de démonstration conçue pour le portfolio professionnel de l&apos;ingénieur développeur <strong>Tariq Abala</strong>.
              Cette soumission est une <strong>simulation interactive</strong> : <strong>aucun rendez-vous réel n&apos;a été transmis ou enregistré</strong> dans une base de données de cabinet physique, et aucune donnée médicale sensible n&apos;a été conservée.
            </p>
            <p className="leading-relaxed text-[11px] text-amber-800/90">
              Pour tester l&apos;interaction avec le développeur ou visualiser le message préformaté, utilisez le bouton direct ci-dessous :
            </p>
          </div>

          {/* CTA Actions */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={`https://wa.me/${CLINIC_INFO.whatsappRaw}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-md shadow-emerald-700/20 transition-all hover:scale-[1.02]"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Tester la synchronisation WhatsApp</span>
            </a>

            <button
              onClick={() => setIsSubmitted(false)}
              className="w-full sm:w-auto px-6 py-3 rounded-2xl border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 font-semibold text-xs transition-colors"
            >
              Faire une nouvelle simulation
            </button>
          </div>
        </div>
      ) : (
        /* Active Form */
        <form onSubmit={handleSubmit} className="space-y-6">
          {formError && (
            <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-medium flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{formError}</span>
            </div>
          )}

          {/* 1. Spécialité & Praticien */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#0F172A] mb-2">
                1. Spécialité Médicale Demandée *
              </label>
              <select
                value={selectedSpecialty}
                onChange={(e) => {
                  setSelectedSpecialty(e.target.value);
                  const matchingDoc = PRACTITIONERS.find((p) => p.specialtyId === e.target.value);
                  if (matchingDoc) setSelectedDoctor(matchingDoc.id);
                }}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-[#0F172A] focus:outline-none focus:border-[#0284C7] focus:bg-white transition-all font-medium"
              >
                {SPECIALTIES.map((spec) => (
                  <option key={spec.id} value={spec.id}>
                    {spec.title} ({spec.duration})
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#0F172A] mb-2">
                2. Médecin Spécialiste Préféré *
              </label>
              <select
                value={selectedDoctor}
                onChange={(e) => setSelectedDoctor(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-[#0F172A] focus:outline-none focus:border-[#0284C7] focus:bg-white transition-all font-medium"
              >
                {PRACTITIONERS.map((doc) => (
                  <option key={doc.id} value={doc.id}>
                    {doc.name} — {doc.specialtyName}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* 2. Date & Créneau Horaire */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#0F172A] mb-2">
                3. Date Souhaitée de Consultation *
              </label>
              <input
                type="date"
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
                min="2026-10-27"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-[#0F172A] focus:outline-none focus:border-[#0284C7] focus:bg-white transition-all font-mono"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#0F172A] mb-2">
                4. Créneau Horaire Indicatif *
              </label>
              <select
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-[#0F172A] focus:outline-none focus:border-[#0284C7] focus:bg-white transition-all font-mono"
              >
                {timeSlots.map((slot) => (
                  <option key={slot} value={slot}>
                    {slot} ({Number(slot.split(":")[0]) < 12 ? "Matin" : "Après-midi"})
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* 3. Motif de la consultation */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#0F172A] mb-2">
              5. Motif de la Consultation
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {[
                "Première Consultation / Bilan",
                "Consultation de Suivi",
                "Examen / Échographie Spécifique",
              ].map((reason) => (
                <button
                  key={reason}
                  type="button"
                  onClick={() => setVisitReason(reason)}
                  className={`p-2.5 rounded-xl border text-xs font-medium transition-all ${
                    visitReason === reason
                      ? "bg-sky-50 border-[#0284C7] text-[#0284C7] font-semibold"
                      : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  {reason}
                </button>
              ))}
            </div>
          </div>

          {/* 4. Données Patient */}
          <div className="pt-3 border-t border-slate-100 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0F172A] block">
              6. Coordonnées du Patient
            </span>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                  Nom &amp; Prénom du Patient *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Mohamed Berrada"
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-[#0F172A] focus:outline-none focus:border-[#0284C7] focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                  Numéro de Téléphone Portable *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="Ex: 06 61 23 45 67"
                  value={patientPhone}
                  onChange={(e) => setPatientPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-[#0F172A] focus:outline-none focus:border-[#0284C7] focus:bg-white font-mono"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                  Adresse Email (Optionnelle pour rappel)
                </label>
                <input
                  type="email"
                  placeholder="patient@domaine.ma"
                  value={patientEmail}
                  onChange={(e) => setPatientEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-[#0F172A] focus:outline-none focus:border-[#0284C7] focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                  Canal de Confirmation Préféré
                </label>
                <div className="flex gap-2 pt-0.5">
                  {[
                    { id: "whatsapp", label: "WhatsApp" },
                    { id: "phone", label: "Appel Vocal" },
                    { id: "email", label: "Email" },
                  ].map((method) => (
                    <button
                      key={method.id}
                      type="button"
                      onClick={() => setContactMethod(method.id as any)}
                      className={`flex-1 py-2 px-2 rounded-xl text-xs font-medium border transition-all ${
                        contactMethod === method.id
                          ? "bg-[#0284C7] text-white border-[#0284C7] font-semibold"
                          : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100"
                      }`}
                    >
                      {method.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                Remarques ou symptômes particuliers (Optionnel - non urgent)
              </label>
              <textarea
                rows={2}
                placeholder="Ex: Porteur de pacemaker, bilan annuel, renouvellement d'ordonnance..."
                value={patientNotes}
                onChange={(e) => setPatientNotes(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-[#0F172A] focus:outline-none focus:border-[#0284C7] focus:bg-white"
              />
            </div>
          </div>

          {/* Protection & Disclaimers */}
          <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-[11px] text-slate-600 space-y-1">
            <div className="flex items-center gap-2 font-semibold text-[#0F172A]">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Confidentialité Médicale &amp; Prise en Charge</span>
            </div>
            <p className="leading-relaxed">
              Ce formulaire de démonstration ne stocke aucune donnée médicale sensible sur vos appareils.
              Dossiers de remboursement mutuelles (CNOPS, CNSS, assurances privées) délivrés sur place lors de votre consultation.
            </p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3.5 px-6 rounded-2xl bg-[#0284C7] hover:bg-[#0369A1] text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md shadow-sky-700/20 transition-all hover:scale-[1.01]"
          >
            <Calendar className="w-4 h-4" />
            <span>Valider la Demande de Consultation • {date} à {time}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>
      )}
    </div>
  );
}
