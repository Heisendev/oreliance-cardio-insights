import { motion } from "framer-motion";
import { BookOpen, ArrowLeft, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const resourceCategories = [
  {
    title: "Institutions & Sociétés Savantes",
    resources: [
      {
        name: "Haute Autorité de Santé (HAS)",
        description: "Recommandations officielles sur la prise en charge des maladies cardiovasculaires en France.",
        url: "https://www.has-sante.fr/jcms/fc_2875171/fr/maladies-cardiovasculaires",
      },
      {
        name: "European Society of Cardiology (ESC)",
        description: "Guidelines européennes sur l'hypertension, l'insuffisance cardiaque et la prévention cardiovasculaire.",
        url: "https://www.escardio.org/Guidelines",
      },
      {
        name: "Fédération Française de Cardiologie",
        description: "Informations grand public, tests de risque et campagnes de prévention cardiaque.",
        url: "https://www.fedecardio.org/",
      },
      {
        name: "Inserm – Maladies cardiovasculaires",
        description: "Dossiers scientifiques vulgarisés sur les pathologies et la recherche cardiovasculaire.",
        url: "https://www.inserm.fr/dossier/atherosclerose/",
      },
    ],
  },
  {
    title: "Assurance Maladie & Vie Quotidienne",
    resources: [
      {
        name: "Ameli – Maladies cardiovasculaires",
        description: "Fiches pratiques sur les symptômes, traitements et démarches administratives (ALD, remboursements).",
        url: "https://www.ameli.fr/assure/sante/themes/maladie-coronarienne",
      },
      {
        name: "Ameli – Relevé d'automesure tensionnelle",
        description: "Document PDF officiel pour noter vos mesures de tension à domicile avant consultation.",
        url: "https://www.ameli.fr/sites/default/files/Documents/CNAM-Rel%C3%A9v%C3%A9%20Automesure-tensionnelle_VF.pdf",
      },
      {
        name: "Manger Bouger (PNNS)",
        description: "Recommandations nutritionnelles officielles et recettes adaptées à la santé cardiovasculaire.",
        url: "https://www.mangerbouger.fr/",
      },
      {
        name: "Tabac Info Service",
        description: "Aide gratuite au sevrage tabagique : coaching personnalisé, substituts nicotiniques remboursés.",
        url: "https://www.tabac-info-service.fr/",
      },
    ],
  },
  {
    title: "Outils d'évaluation & Auto-tests",
    resources: [
      {
        name: "Test « Comment va votre cœur ? »",
        description: "Questionnaire en ligne de la Fédération Française de Cardiologie pour évaluer votre risque.",
        url: "https://www.fedecardio.org/je-me-teste/comment-va-votre-coeur/",
      },
      {
        name: "Score SCORE2 – Risque cardiovasculaire",
        description: "Calculateur européen du risque cardiovasculaire à 10 ans selon l'ESC.",
        url: "https://www.heartscore.org/",
      },
      {
        name: "Vidal – Médicaments",
        description: "Base de données officielle des médicaments : notices, interactions et effets indésirables.",
        url: "https://www.vidal.fr/",
      },
    ],
  },
  {
    title: "Activité Physique & Réhabilitation",
    resources: [
      {
        name: "Club Cœur et Santé",
        description: "Réseau d'associations locales proposant des activités physiques adaptées aux patients cardiaques.",
        url: "https://www.fedecardio.org/je-suis-un-club-coeur-et-sante/",
      },
      {
        name: "HAS – Prescription d'activité physique",
        description: "Guide de la HAS pour la prescription d'activité physique en cas de maladie cardiovasculaire.",
        url: "https://www.has-sante.fr/jcms/c_2876862/fr/consultation-et-prescription-medicale-d-activite-physique-a-des-fins-de-sante",
      },
    ],
  },
];

const Resources = () => (
  <div className="space-y-8">
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
      <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-secondary transition-colors mb-4">
        <ArrowLeft className="w-4 h-4" /> Retour
      </Link>
      <div className="flex items-center gap-3 mb-2">
        <div className="p-3 rounded-2xl bg-primary/25">
          <BookOpen className="w-7 h-7 text-secondary" />
        </div>
        <h1 className="text-3xl font-bold text-secondary">Ressources Utiles</h1>
      </div>
      <p className="text-muted-foreground max-w-2xl">
        Liens officiels et outils recommandés pour accompagner votre réhabilitation cardiaque.
      </p>
    </motion.div>

    {resourceCategories.map((cat, ci) => (
      <motion.div
        key={cat.title}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: ci * 0.1, duration: 0.4 }}
        className="space-y-4"
      >
        <h2 className="text-lg font-semibold text-foreground">{cat.title}</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {cat.resources.map((r) => (
            <a
              key={r.url}
              href={r.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <Card className="h-full border-border/60 card-hover">
                <CardContent className="p-5 space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-semibold text-sm text-foreground group-hover:text-secondary transition-colors">
                      {r.name}
                    </h3>
                    <ExternalLink className="w-3.5 h-3.5 text-muted-foreground flex-shrink-0 mt-0.5 group-hover:text-secondary transition-colors" />
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{r.description}</p>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </motion.div>
    ))}
  </div>
);

export default Resources;