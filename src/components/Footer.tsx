import React from "react";
import Link from "next/link";
import {
  HeartPulse,
  Phone,
  Clock,
  MapPin,
  Mail,
  ShieldCheck,
  AlertCircle,
  MessageCircle,
} from "lucide-react";
import { CLINIC_INFO } from "@/data/medical";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 pt-16 pb-12 text-sm text-slate-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-200">
          {/* Col 1: Identity & Deontologie */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#0284C7] to-[#0D9488] flex items-center justify-center text-white font-bold shadow-md shadow-sky-600/20">
                <HeartPulse className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-base font-bold text-[#0F172A] tracking-tight">
                  CABINET MÉDICAL DR. ALAMI
                </span>
                <p className="text-[10px] uppercase tracking-widest text-[#0284C7] font-semibold">
                  Cardiologie &amp; Soins Spécialisés
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-500 leading-relaxed">
              Centre de consultations médicales et explorations diagnostiques à Casablanca Palmier.
              Plateau technique moderne et prise en charge humaine et attentive de chaque patient.
            </p>

            <div className="pt-1 flex items-center gap-2 text-xs text-emerald-700 font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Conforme aux normes du Conseil National de l&apos;Ordre des Médecins</span>
            </div>
          </div>

          {/* Col 2: Horaires de Consultation */}
          <div className="space-y-3">
            <h3 className="font-bold text-sm text-[#0F172A] uppercase tracking-wider flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#0284C7]" />
              <span>Horaires de Consultation</span>
            </h3>
            <ul className="space-y-2 text-xs">
              <li className="flex justify-between pb-1.5 border-b border-slate-100">
                <span className="font-medium text-[#0F172A]">Lundi - Vendredi</span>
                <span className="text-slate-600 font-mono">08h30 - 19h00</span>
              </li>
              <li className="flex justify-between pb-1.5 border-b border-slate-100">
                <span className="font-medium text-[#0F172A]">Samedi</span>
                <span className="text-slate-600 font-mono">09h00 - 13h30</span>
              </li>
              <li className="flex justify-between pb-1.5 text-slate-400">
                <span>Dimanche</span>
                <span>Fermé (Gardes hospitalières)</span>
              </li>
            </ul>
            <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 text-[11px] flex items-start gap-2">
              <AlertCircle className="w-3.5 h-3.5 shrink-0 mt-0.5 text-amber-600" />
              <span>Urgences vitales : Contactez le SAMU au 141 ou la Protection Civile au 15.</span>
            </div>
          </div>

          {/* Col 3: Adresse & Contact */}
          <div className="space-y-3">
            <h3 className="font-bold text-sm text-[#0F172A] uppercase tracking-wider flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#0284C7]" />
              <span>Localisation &amp; Contact</span>
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              {CLINIC_INFO.address}
              <br />
              {CLINIC_INFO.city}
            </p>
            <div className="space-y-1.5 text-xs pt-1">
              <a
                href={`tel:${CLINIC_INFO.phoneRaw}`}
                className="flex items-center gap-2 hover:text-[#0284C7] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#0284C7]" />
                <span className="font-medium">{CLINIC_INFO.phone}</span>
              </a>
              <a
                href={`https://wa.me/${CLINIC_INFO.whatsappRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-emerald-700 hover:text-emerald-800 transition-colors font-medium"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                <span>WhatsApp : {CLINIC_INFO.whatsapp}</span>
              </a>
              <a
                href={`mailto:${CLINIC_INFO.email}`}
                className="flex items-center gap-2 hover:text-[#0284C7] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#0284C7]" />
                <span>{CLINIC_INFO.email}</span>
              </a>
            </div>
          </div>

          {/* Col 4: Liens Rapides & Mutuelles */}
          <div className="space-y-3">
            <h3 className="font-bold text-sm text-[#0F172A] uppercase tracking-wider">
              Accès Rapide &amp; Droits
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/specialites" className="hover:text-[#0284C7] transition-colors">
                  Spécialités &amp; Plateau Technique
                </Link>
              </li>
              <li>
                <Link href="/equipe" className="hover:text-[#0284C7] transition-colors">
                  Équipe des Médecins
                </Link>
              </li>
              <li>
                <Link href="/rendez-vous" className="hover:text-[#0284C7] transition-colors">
                  Demande de Rendez-vous en Ligne
                </Link>
              </li>
              <li>
                <Link href="/mutuelles" className="hover:text-[#0284C7] transition-colors">
                  Prise en Charge CNSS, CNOPS &amp; Mutuelles
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-[#0284C7] transition-colors">
                  Foire Aux Questions Médicale
                </Link>
              </li>
              <li>
                <Link href="/mentions-legales" className="hover:text-[#0284C7] transition-colors">
                  Mentions Légales &amp; Avis Démonstration
                </Link>
              </li>
              <li>
                <Link href="/confidentialite" className="hover:text-[#0284C7] transition-colors">
                  Politique de Confidentialité (Loi 09-08)
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar with Developer Signature Block */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-xs text-slate-500">
          <div className="space-y-1">
            <p className="font-semibold text-slate-900 flex items-center gap-1.5">
              <span>Développé par</span>
              <a
                href="https://tariqabala.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0284C7] hover:text-[#0369A1] font-bold underline decoration-[#0284C7]/40 hover:decoration-[#0369A1] transition-colors"
              >
                Tariq Abala
              </a>
            </p>
            <p className="text-[11px] font-medium text-slate-700">
              Web Development &amp; Digital Solutions
            </p>
            <p className="text-[10px] text-slate-400 font-mono">
              Professional Websites • Business Applications • Custom Admin Panels
            </p>
          </div>

          <div className="flex flex-col md:items-end gap-2 text-[11px]">
            <div className="flex flex-wrap items-center gap-2 text-slate-700">
              <span className="font-semibold">© 2026 TARIQ ABALA. Tous droits réservés.</span>
              <span className="text-slate-300">•</span>
              <span>Cabinet Médical Dr. Alami Casablanca</span>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-slate-500">
              <Link href="/mentions-legales" className="hover:text-slate-900 transition-colors">
                Mentions Légales
              </Link>
              <span>•</span>
              <Link href="/confidentialite" className="hover:text-slate-900 transition-colors">
                Confidentialité
              </Link>
              <span>•</span>
              <Link href="/contact" className="hover:text-slate-900 transition-colors">
                Plan d&apos;accès &amp; PMR
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
