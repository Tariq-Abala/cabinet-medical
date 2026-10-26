import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#07101C",
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
    <html lang="fr" className="scroll-smooth dark">
      <body className="min-h-screen bg-[#07101C] text-[#F8FAFC] antialiased">
        {children}
      </body>
    </html>
  );
}
