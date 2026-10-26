import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#F8FAFC",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Cabinet Médical Dr. Alami | Soins Spécialisés & Médecine Générale",
  description:
    "Cabinet Médical Dr. Yassine Alami & Associés — Cardiologie, Médecine Interne, Pédiatrie et Échographies à Casablanca. Rendez-vous en ligne rapide.",
  keywords: ["cabinet médical", "médecin", "cardiologue", "pédiatre", "Casablanca", "santé", "rendez-vous médecin", "CNSS", "CNOPS"],
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className="min-h-screen bg-[#F8FAFC] text-[#0F172A] antialiased">
        {children}
      </body>
    </html>
  );
}
