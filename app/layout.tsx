import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ma Pharmacie - Gestion de Pharmacie',
  description: 'Système de gestion complet pour pharmacies',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className="bg-gray-50">{children}</body>
    </html>
  )
}
