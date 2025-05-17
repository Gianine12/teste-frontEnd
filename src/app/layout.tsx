import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import 'leaflet/dist/leaflet.css';

export const metadata: Metadata = {
  title: "Interface para Listagem de Usuários",
  description: "Desenvolver uma aplicação utilizando Next.js que permita listar usuários a partir de uma API e exibir detalhes em um modal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`h-full antialiased`}
      >
        <Header/>
        {children}
      </body>
    </html>
  );
}
