import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-green-600">Ma Pharmacie</h1>
          <div className="space-x-4">
            <Link href="/login" className="text-gray-600 hover:text-gray-900">
              Connexion
            </Link>
            <Link
              href="/register"
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              S&apos;inscrire
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h2 className="text-5xl font-bold text-gray-900 mb-6">
          Gestion Intelligente de Pharmacie
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Un système complet pour gérer votre inventaire, les ventes et les clients
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {/* Feature 1 */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
            <div className="text-4xl mb-4">📦</div>
            <h3 className="text-xl font-semibold mb-2">Gestion d&apos;Inventaire</h3>
            <p className="text-gray-600">
              Suivi en temps réel des stocks, alertes de réapprovisionnement
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
            <div className="text-4xl mb-4">💰</div>
            <h3 className="text-xl font-semibold mb-2">Gestion des Ventes</h3>
            <p className="text-gray-600">
              Traitement rapide des transactions et suivi des revenus
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-xl font-semibold mb-2">Rapports & Analytics</h3>
            <p className="text-gray-600">
              Analyses détaillées et tableaux de bord personnalisés
            </p>
          </div>
        </div>

        <div className="mt-12">
          <Link
            href="/login"
            className="bg-green-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-green-700 inline-block"
          >
            Commencer Maintenant
          </Link>
        </div>
      </section>
    </main>
  )
}
