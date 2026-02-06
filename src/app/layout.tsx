import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CV - Elvis Dushime Emani | Développeur Full Stack",
  description: "CV professionnel d'Elvis Dushime Emani, Développeur Web Full Stack spécialisé en Laravel, Vue.js et Python.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
