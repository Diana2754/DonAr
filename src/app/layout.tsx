import "./globals.css";
// app/layout.tsx o components/Layout.tsx
import Link from "next/link";
// app/layout.tsx
import "./globals.css"; // si usás estilos globales
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Mi App",
  description: "Descripción de la app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
      <div className="min-h-screen bg-blue-600 px-4 relative">
      {/* Barra de navegación */}
      <nav className="w-full flex justify-between items-center p-4 absolute top-0 left-0 z-10">
        {/* Inicio */}
        <Link href="/">
          <span className="text-white font-bold text-lg hover:underline">
            Inicio
          </span>
        </Link>
      </nav>
      {/* Contenido principal centrado */}
      <div className="flex items-center justify-center min-h-screen pt-16">
        {children}
      </div>
    </div>
        {children}
        </body>
    </html>
  );
}
