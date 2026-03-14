import { motion } from "framer-motion";
import { AlertTriangle, ArrowLeft, Check } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const riskFactors = [
  {
    title: "Hypertension Artérielle",
    modifiable: true,
    description: "Une pression artérielle élevée endommage progressivement les parois des artères et augmente le risque d'AVC et d'infarctus.",
    actions: ["Suivi régulier de la tension", "Régime pauvre en sel (< 5g/jour)", "Traitement médicamenteux si nécessaire"],
  },
  {
    title: "Tabagisme",
    modifiable: true,
    description: "Le tabac est le facteur de risque modifiable le plus puissant. Il accélère l'athérosclérose et favorise les spasmes artériels.",
    actions: ["Arrêt total du tabac", "Aide au sevrage disponible", "Bénéfices dès les premiers jours"],
  },
  {
    title: "Dyslipidémie",
    modifiable: true,
    description: "Un excès de cholestérol LDL favorise la formation de plaques d'athérome dans les artères coronaires.",
    actions: ["Objectif LDL < 0.55 g/L en prévention secondaire", "Alimentation équilibrée", "Traitement par statines"],
  },
  {
    title: "Diabète",
    modifiable: true,
    description: "Le diabète multiplie par 2 à 4 le risque cardiovasculaire. Il endommage les petits et grands vaisseaux.",
    actions: ["Contrôle glycémique régulier (HbA1c < 7%)", "Suivi diététique", "Activité physique régulière"],
  },
  {
    title: "Sédentarité",
    modifiable: true,
    description: "Le manque d'activité physique est un facteur de risque indépendant de maladie cardiovasculaire.",
    actions: ["Minimum 150 min/semaine d'activité modérée", "Programme adapté en réhabilitation", "Marche quotidienne recommandée"],
  },
  {
    title: "Âge et Antécédents Familiaux",
    modifiable: false,
    description: "Le risque augmente avec l'âge (> 50 ans chez l'homme, > 60 ans chez la femme) et en cas d'antécédents familiaux précoces.",
    actions: ["Dépistage régulier recommandé", "Vigilance accrue sur les autres facteurs", "Suivi cardiologique rapproché"],
  },
];

const RiskFactors = () => (
  <div className="space-y-8">
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
      <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-secondary transition-colors mb-4">
        <ArrowLeft className="w-4 h-4" /> Retour
      </Link>
      <div className="flex items-center gap-3 mb-2">
        <div className="p-3 rounded-2xl bg-primary/25">
          <AlertTriangle className="w-7 h-7 text-secondary" />
        </div>
        <h1 className="text-3xl font-bold text-secondary">Facteurs de Risque</h1>
      </div>
      <p className="text-muted-foreground max-w-2xl">
        Identifier et contrôler les facteurs de risque cardiovasculaire est essentiel pour votre réhabilitation.
      </p>
    </motion.div>

    <div className="grid gap-5 md:grid-cols-2">
      {riskFactors.map((rf, i) => (
        <motion.div
          key={rf.title}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.07, duration: 0.35 }}
        >
          <Card className="h-full border-border/60">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">{rf.title}</CardTitle>
                <span
                  className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                    rf.modifiable
                      ? "bg-accent/15 text-accent"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {rf.modifiable ? "Modifiable" : "Non modifiable"}
                </span>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-foreground/80 leading-relaxed">{rf.description}</p>
              <ul className="space-y-1.5">
                {rf.actions.map((a) => (
                  <li key={a} className="text-sm text-muted-foreground flex items-start gap-2">
                    <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    {a}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>

    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.4 }}>
      <Card className="border-secondary/20 bg-secondary/5">
        <CardContent className="p-6 flex gap-4 items-start">
          <div className="w-10 h-10 rounded-lg bg-secondary/15 flex items-center justify-center flex-shrink-0 mt-0.5">
            <AlertTriangle className="w-5 h-5 text-secondary" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-2">Évaluez votre risque</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              La Fédération Française de Cardiologie propose un test en ligne pour évaluer la santé de votre cœur.
            </p>
            <a
              href="https://www.fedecardio.org/je-me-teste/comment-va-votre-coeur/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-secondary hover:underline"
            >
              Faire le test →
            </a>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  </div>
);

export default RiskFactors;