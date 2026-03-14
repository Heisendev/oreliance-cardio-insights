import { motion } from "framer-motion";
import { Dumbbell, ArrowLeft, Clock, Flame, Heart, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const weeklyProgram = [
  {
    day: "Lundi",
    type: "Endurance",
    activity: "Marche active ou vélo d'appartement",
    duration: "30–40 min",
    intensity: "Modérée",
    details: "FC cible : 60–70% de la FC max. Vous devez pouvoir parler sans essoufflement excessif.",
  },
  {
    day: "Mardi",
    type: "Renforcement",
    activity: "Exercices avec élastiques ou poids légers",
    duration: "20–30 min",
    intensity: "Légère à modérée",
    details: "Haut et bas du corps. 2 séries de 10–15 répétitions. Pas de blocage respiratoire.",
  },
  {
    day: "Mercredi",
    type: "Repos actif",
    activity: "Marche douce, étirements ou yoga doux",
    duration: "20 min",
    intensity: "Légère",
    details: "Récupération active. Étirements des grands groupes musculaires.",
  },
  {
    day: "Jeudi",
    type: "Endurance",
    activity: "Marche nordique, natation ou vélo",
    duration: "30–45 min",
    intensity: "Modérée",
    details: "Varier les activités pour maintenir la motivation. Échauffement de 5 min obligatoire.",
  },
  {
    day: "Vendredi",
    type: "Renforcement",
    activity: "Gymnastique douce ou Pilates adapté",
    duration: "25–30 min",
    intensity: "Légère à modérée",
    details: "Travail du gainage, équilibre et posture. Respiration contrôlée.",
  },
  {
    day: "Samedi",
    type: "Endurance",
    activity: "Marche en plein air ou vélo",
    duration: "35–50 min",
    intensity: "Modérée",
    details: "Profitez de la nature. Terrain plat ou faible dénivelé. Hydratation régulière.",
  },
  {
    day: "Dimanche",
    type: "Repos",
    activity: "Repos complet ou marche légère",
    duration: "—",
    intensity: "Très légère",
    details: "Jour de récupération. Écoutez votre corps.",
  },
];

const typeColors: Record<string, string> = {
  Endurance: "bg-secondary/15 text-secondary",
  Renforcement: "bg-accent/15 text-accent",
  "Repos actif": "bg-primary/30 text-secondary",
  Repos: "bg-muted text-muted-foreground",
};

const keyPrinciples = [
  { icon: Heart, title: "Fréquence cardiaque cible", text: "Maintenez-vous entre 60% et 75% de votre fréquence cardiaque maximale (220 – âge). Utilisez un cardiofréquencemètre." },
  { icon: Clock, title: "Progressivité", text: "Commencez par 15–20 min et augmentez progressivement de 5 min par semaine. Ne brûlez pas les étapes." },
  { icon: Flame, title: "Régularité", text: "L'objectif est d'atteindre 150 min d'activité modérée par semaine, réparties sur au moins 3 à 5 séances." },
];

const warnings = [
  "Arrêtez l'effort immédiatement en cas de douleur thoracique, essoufflement anormal, vertiges ou palpitations.",
  "Ne pratiquez jamais à jeun ni en cas de fièvre ou d'infection.",
  "Attendez 2 heures après un repas copieux avant de faire de l'exercice.",
  "Adaptez l'intensité en cas de forte chaleur (> 30 °C) ou de grand froid.",
  "Respectez toujours les consignes de votre cardiologue et de votre équipe de réhabilitation.",
];

const PhysicalActivity = () => (
  <div className="space-y-8">
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
      <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-secondary transition-colors mb-4">
        <ArrowLeft className="w-4 h-4" /> Retour
      </Link>
      <div className="flex items-center gap-3 mb-2">
        <div className="p-3 rounded-2xl bg-primary/25">
          <Dumbbell className="w-7 h-7 text-secondary" />
        </div>
        <h1 className="text-3xl font-bold text-secondary">Activité Physique</h1>
      </div>
      <p className="text-muted-foreground max-w-2xl">
        Programme hebdomadaire adapté à la réhabilitation cardiaque. Ce programme est indicatif et doit être 
        validé par votre cardiologue en fonction de votre situation personnelle.
      </p>
    </motion.div>

    {/* Key Principles */}
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1, duration: 0.4 }}
      className="grid gap-4 sm:grid-cols-3"
    >
      {keyPrinciples.map((p) => (
        <Card key={p.title} className="border-border/60">
          <CardContent className="p-5 space-y-2">
            <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
              <p.icon className="w-5 h-5 text-secondary" />
            </div>
            <h3 className="font-semibold text-sm text-foreground">{p.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{p.text}</p>
          </CardContent>
        </Card>
      ))}
    </motion.div>

    {/* Weekly Schedule */}
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.4 }}>
      <Card className="border-border/60 overflow-hidden">
        <CardHeader>
          <CardTitle className="text-lg">Programme hebdomadaire type</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50">
                  <TableHead className="font-semibold text-foreground">Jour</TableHead>
                  <TableHead className="font-semibold text-foreground">Type</TableHead>
                  <TableHead className="font-semibold text-foreground">Activité</TableHead>
                  <TableHead className="font-semibold text-foreground text-center">Durée</TableHead>
                  <TableHead className="font-semibold text-foreground">Intensité</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {weeklyProgram.map((row) => (
                  <TableRow key={row.day}>
                    <TableCell className="font-medium">{row.day}</TableCell>
                    <TableCell>
                      <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${typeColors[row.type] ?? "bg-muted text-muted-foreground"}`}>
                        {row.type}
                      </span>
                    </TableCell>
                    <TableCell>
                      <div>
                        <p className="text-sm">{row.activity}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">{row.details}</p>
                      </div>
                    </TableCell>
                    <TableCell className="text-center text-sm">{row.duration}</TableCell>
                    <TableCell className="text-sm">{row.intensity}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </motion.div>

    {/* Safety Warnings */}
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35, duration: 0.4 }}>
      <Card className="border-warning/30 bg-warning/5">
        <CardContent className="p-6">
          <div className="flex gap-4 items-start">
            <div className="w-10 h-10 rounded-lg bg-warning/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <AlertTriangle className="w-5 h-5 text-warning" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-3">Précautions importantes</h3>
              <ul className="space-y-2">
                {warnings.map((w, i) => (
                  <li key={i} className="text-sm text-foreground/80 leading-relaxed flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-warning mt-2 flex-shrink-0" />
                    {w}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  </div>
);

export default PhysicalActivity;
