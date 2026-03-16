import { motion } from "framer-motion";
import { Pill, Activity, AlertTriangle, HeartPulse, Dumbbell, UtensilsCrossed } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

const sections = [
  {
    to: "/drugs",
    icon: Pill,
    title: "Médicaments Cardio",
    description: "Guide complet des traitements prescrits en réhabilitation cardiaque.",
  },
  {
    to: "/arterial-pressure",
    icon: Activity,
    title: "Normes de Pression Artérielle",
    description: "Valeurs de référence et interprétation de vos mesures tensionnelles.",
  },
  {
    to: "/risk-factors",
    icon: AlertTriangle,
    title: "Facteurs de Risque",
    description: "Comprendre et maîtriser les facteurs de risque cardiovasculaire.",
  },
  {
    to: "/physical-activity",
    icon: Dumbbell,
    title: "Activité Physique",
    description: "Programme hebdomadaire adapté à votre réhabilitation cardiaque.",
  },
  {
    to: "/nutrition",
    icon: UtensilsCrossed,
    title: "Guide Alimentaire",
    description: "Régime méditerranéen, gestion du sel et des graisses pour votre cœur.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.4, ease: "easeOut" as const },
  }),
};

const Index = () => {
  return (
    <div className="space-y-10">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-3"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 rounded-2xl bg-primary/25">
            <HeartPulse className="w-7 h-7 text-secondary" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-secondary">Réhabilitation Cardiaque</h1>
            <p className="text-muted-foreground text-lg">Votre guide de santé cardiovasculaire</p>
          </div>
        </div>
        <p className="text-foreground/80 text-base leading-relaxed max-w-2xl">
          Bienvenue dans l'espace d'information patient de la clinique <strong>Oreliance</strong>. 
          Retrouvez ici toutes les ressources pour comprendre votre parcours de réhabilitation cardiaque, 
          vos traitements et les bonnes pratiques pour votre santé.
        </p>
      </motion.div>

      {/* Section Cards */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {sections.map((section, i) => (
          <motion.div key={section.to} custom={i} initial="hidden" animate="visible" variants={fadeUp}>
            <Link to={section.to} className="block group">
              <Card className="card-hover h-full border-border/60">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center group-hover:bg-primary/35 transition-colors duration-300">
                    <section.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground mb-1">{section.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{section.description}</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Quick Info */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.4 }}
      >
        <Card className="border-warning/90 bg-warning/20">
          <CardContent className="p-6 flex gap-4 items-start">
            <div className="w-10 h-10 rounded-lg bg-warning/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <HeartPulse className="w-5 h-5 text-warning" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">Rappel important</h3>
              <p className="text-sm text-foreground leading-relaxed">
                Ces informations sont fournies à titre éducatif et ne remplacent pas l'avis de votre médecin. 
                Consultez toujours votre cardiologue avant de modifier votre traitement.
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default Index;