import { motion } from "framer-motion";
import { Activity, ArrowLeft } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const norms = [
  { category: "Optimale", systolic: "< 120", diastolic: "< 80", color: "bg-accent" },
  { category: "Normale", systolic: "120–129", diastolic: "80–84", color: "bg-accent/60" },
  { category: "Normale haute", systolic: "130–139", diastolic: "85–89", color: "bg-warning/70" },
  { category: "HTA Grade 1", systolic: "140–159", diastolic: "90–99", color: "bg-warning" },
  { category: "HTA Grade 2", systolic: "160–179", diastolic: "100–109", color: "bg-destructive/70" },
  { category: "HTA Grade 3", systolic: "≥ 180", diastolic: "≥ 110", color: "bg-destructive" },
];

const tips = [
  "Mesurez votre tension au repos, après 5 minutes en position assise.",
  "Prenez 3 mesures consécutives à 1 minute d'intervalle et notez la moyenne.",
  "Mesurez le matin et le soir pendant 3 à 7 jours avant la consultation.",
  "Utilisez un brassard adapté à la taille de votre bras.",
  "Évitez le café, le tabac et l'effort physique 30 minutes avant la mesure.",
];

const ArterialPressure = () => (
  <div className="space-y-8">
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
      <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-secondary transition-colors mb-4">
        <ArrowLeft className="w-4 h-4" /> Retour
      </Link>
      <div className="flex items-center gap-3 mb-2">
        <div className="p-3 rounded-2xl bg-primary/25">
          <Activity className="w-7 h-7 text-secondary" />
        </div>
        <h1 className="text-3xl font-bold text-secondary">Pression Artérielle</h1>
      </div>
      <p className="text-muted-foreground max-w-2xl">
        Valeurs de référence selon les recommandations de la Société Européenne de Cardiologie (ESC).
      </p>
    </motion.div>

    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.4 }}>
      <Card className="border-border/60 overflow-hidden">
        <CardHeader>
          <CardTitle className="text-lg">Classification de la pression artérielle (mmHg)</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50">
                <TableHead className="font-semibold text-foreground">Catégorie</TableHead>
                <TableHead className="font-semibold text-foreground text-center">Systolique</TableHead>
                <TableHead className="font-semibold text-foreground text-center">Diastolique</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {norms.map((n) => (
                <TableRow key={n.category}>
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-2.5">
                      <span className={`w-2.5 h-2.5 rounded-full ${n.color}`} />
                      {n.category}
                    </div>
                  </TableCell>
                  <TableCell className="text-center">{n.systolic}</TableCell>
                  <TableCell className="text-center">{n.diastolic}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </motion.div>

    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.4 }}>
      <Card className="border-border/60">
        <CardHeader>
          <CardTitle className="text-lg">Conseils de mesure</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {tips.map((tip, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-foreground/80 leading-relaxed">
                <span className="w-6 h-6 rounded-full bg-primary/25 flex items-center justify-center text-xs font-bold text-secondary flex-shrink-0 mt-0.5">
                  {i + 1}
                </span>
                {tip}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>

    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45, duration: 0.4 }}>
      <Card className="border-secondary/20 bg-secondary/5">
        <CardContent className="p-6 flex gap-4 items-start">
          <div className="w-10 h-10 rounded-lg bg-secondary/15 flex items-center justify-center flex-shrink-0 mt-0.5">
            <Activity className="w-5 h-5 text-secondary" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-2">Relevé d'automesure tensionnelle</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              Téléchargez le document officiel de l'Assurance Maladie pour noter vos mesures de tension à domicile.
            </p>
            <a
              href="https://www.ameli.fr/sites/default/files/Documents/CNAM-Rel%C3%A9v%C3%A9%20Automesure-tensionnelle_VF.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-secondary hover:underline"
            >
              Télécharger le PDF →
            </a>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  </div>
);

export default ArterialPressure;