import { motion } from "framer-motion";
import { Pill, ArrowLeft } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const drugs = [
  {
    name: "Bêtabloquants",
    examples: "Bisoprolol, Métoprolol, Aténolol",
    usage: "Réduisent la fréquence cardiaque et la pression artérielle. Diminuent la charge de travail du cœur.",
    precautions: ["Ne jamais arrêter brutalement", "Surveiller la fréquence cardiaque", "Peut causer de la fatigue"],
  },
  {
    name: "IEC (Inhibiteurs de l'Enzyme de Conversion)",
    examples: "Ramipril, Énalapril, Périndopril",
    usage: "Dilatent les vaisseaux sanguins et réduisent la pression artérielle. Protègent le cœur et les reins.",
    precautions: ["Toux sèche possible", "Contrôle régulier de la fonction rénale", "Éviter le potassium en excès"],
  },
  {
    name: "Statines",
    examples: "Atorvastatine, Rosuvastatine, Simvastatine",
    usage: "Réduisent le cholestérol LDL et stabilisent les plaques d'athérome dans les artères.",
    precautions: ["Prise le soir recommandée", "Signaler les douleurs musculaires", "Bilan hépatique régulier"],
  },
  {
    name: "Antiagrégants Plaquettaires",
    examples: "Aspirine, Clopidogrel, Ticagrélor",
    usage: "Empêchent la formation de caillots sanguins dans les artères coronaires.",
    precautions: ["Risque de saignement accru", "Signaler tout saignement anormal", "Prendre pendant les repas"],
  },
  {
    name: "Anticoagulants",
    examples: "Apixaban, Rivaroxaban, Warfarine",
    usage: "Préviennent la formation de caillots dans les cavités cardiaques et les veines profondes.",
    precautions: ["Suivi INR pour la Warfarine", "Interactions alimentaires", "Port d'une carte d'anticoagulant"],
  },
  {
    name: "Diurétiques",
    examples: "Furosémide, Hydrochlorothiazide, Spironolactone",
    usage: "Éliminent l'excès de liquide et réduisent la surcharge cardiaque et les œdèmes.",
    precautions: ["Hydratation suffisante", "Surveillance du potassium", "Prise le matin de préférence"],
  },
];

const Drugs = () => (
  <div className="space-y-8">
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
      <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-secondary transition-colors mb-4">
        <ArrowLeft className="w-4 h-4" /> Retour
      </Link>
      <div className="flex items-center gap-3 mb-2">
        <div className="p-3 rounded-2xl bg-primary/25">
          <Pill className="w-7 h-7 text-secondary" />
        </div>
        <h1 className="text-3xl font-bold text-secondary">Médicaments Cardio</h1>
      </div>
      <p className="text-muted-foreground max-w-2xl">
        Les principales classes de médicaments utilisés en réhabilitation cardiaque. 
        Chaque traitement est adapté à votre situation personnelle.
      </p>
    </motion.div>

    <div className="space-y-5">
      {drugs.map((drug, i) => (
        <motion.div
          key={drug.name}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.07, duration: 0.35 }}
        >
          <Card className="border-border/60">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">{drug.name}</CardTitle>
              <p className="text-sm text-secondary font-medium">{drug.examples}</p>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-foreground/80 leading-relaxed">{drug.usage}</p>
              <div>
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Précautions</p>
                <ul className="space-y-1">
                  {drug.precautions.map((p) => (
                    <li key={p} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-warning mt-2 flex-shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  </div>
);

export default Drugs;
