# 💊 Ma Pharmacie - Pharmacy Management System

Un système de gestion complet et modern pour pharmacies avec inventory tracking, gestion des ventes, et analytics.

## 🎯 Caractéristiques Principales

- **🏥 Gestion d'Inventaire**: Suivi des stocks, alertes de réapprovisionnement
- **💰 Gestion des Ventes**: Traitement des transactions et rapports financiers
- **👥 Gestion des Utilisateurs**: Rôles et permissions (Admin, Pharmacist, Cashier, Manager)
- **📊 Analytics & Rapports**: Tableaux de bord et statistiques détaillées
- **🔐 Authentification Sécurisée**: JWT-based authentication avec bcrypt
- **📱 Interface Responsive**: Design mobile-friendly avec Tailwind CSS

## 🛠️ Stack Technologique

- **Frontend**: Next.js 14, React 18, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes, Node.js
- **Base de Données**: PostgreSQL avec Prisma ORM
- **Authentication**: JWT, bcrypt
- **State Management**: Zustand
- **HTTP Client**: Axios

## 📋 Prerequisites

- Node.js 18+ 
- npm ou yarn
- PostgreSQL 12+

## 🚀 Installation & Démarrage

### 1. Cloner et installer les dépendances

```bash
cd Ma_pharmacie
npm install
```

### 2. Configurer les variables d'environnement

```bash
cp .env.example .env.local
```

Mettez à jour `.env.local` avec vos paramètres PostgreSQL:
```env
DATABASE_URL="postgresql://user:password@localhost:5432/ma_pharmacie"
JWT_SECRET="your_secret_key_here"
NEXTAUTH_SECRET="your_nextauth_secret"
```

### 3. Initialiser la base de données

```bash
npm run db:migrate
```

### 4. Lancer le serveur de développement

```bash
npm run dev
```

Accédez à [http://localhost:3000](http://localhost:3000)

## 📁 Structure du Projet

```
Ma_pharmacie/
├── app/
│   ├── api/                 # API routes
│   │   ├── auth/           # Authentication endpoints
│   │   └── medicines/      # Medicine CRUD operations
│   ├── page.tsx            # Home page
│   ├── layout.tsx          # Root layout
│   └── globals.css         # Global styles
├── components/             # Reusable React components
├── lib/
│   ├── db.ts              # Database client
│   ├── auth.ts            # Authentication utilities
│   └── utils.ts           # Helper functions
├── prisma/
│   └── schema.prisma      # Database schema
├── public/                 # Static assets
├── .env.example           # Environment variables template
├── next.config.js         # Next.js configuration
├── tailwind.config.ts     # Tailwind CSS configuration
└── tsconfig.json          # TypeScript configuration
```

## 🗄️ Modèle de Base de Données

### Entités Principales

- **Users**: Administrateurs, pharmaciens, caissiers
- **Medicines**: Produits pharmaceutiques avec détails
- **MedicineTransactions**: Ventes, achats, ajustements de stock
- **AuditLogs**: Suivi des actions pour compliance

## 🔌 API Endpoints (À Implémenter)

### Authentication
- `POST /api/auth/login` - Connexion utilisateur
- `POST /api/auth/register` - Création de compte
- `POST /api/auth/logout` - Déconnexion

### Medicines
- `GET /api/medicines` - Lister tous les médicaments
- `POST /api/medicines` - Créer un médicament
- `GET /api/medicines/[id]` - Récupérer un médicament
- `PUT /api/medicines/[id]` - Mettre à jour un médicament
- `DELETE /api/medicines/[id]` - Supprimer un médicament

### Transactions
- `GET /api/transactions` - Lister les transactions
- `POST /api/transactions` - Créer une transaction

## 📝 Scripts Disponibles

```bash
npm run dev          # Mode développement
npm run build        # Build pour production
npm run start        # Démarrer en production
npm run lint         # Linting avec ESLint
npm run db:migrate   # Migrations Prisma
npm run db:studio    # Prisma Studio (GUI database)
```

## 🔒 Sécurité

- ✅ Passwords hashés avec bcrypt
- ✅ JWT tokens pour authentification
- ✅ CORS configuré
- ✅ Input validation
- ✅ Role-based access control (RBAC)

## 📌 TODO - Prochaines Étapes

- [ ] Implémenter authentification complète
- [ ] Créer interfaces de gestion d'inventaire
- [ ] Implémenter système de transactions de vente
- [ ] Ajouter dashboard avec statistiques
- [ ] Générer rapports PDF/Excel
- [ ] Système de notifications
- [ ] Tests unitaires et d'intégration
- [ ] Déploiement sur serveur production

## 🤝 Contribution

Les contributions sont les bienvenues! Veuillez:

1. Fork le projet
2. Créer une branche feature (`git checkout -b feature/AmazingFeature`)
3. Commit vos changements (`git commit -m 'Add AmazingFeature'`)
4. Push à la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence [Votre Licence]. Voir [LICENSE](LICENSE) pour plus de détails.

## 📞 Support

Pour du support ou des questions, veuillez:
- Ouvrir une issue sur GitHub
- Consulter la documentation
- Contacter l'équipe de développement

---

**Dernière mise à jour**: Mars 2026 | **Version**: 1.0.0 
