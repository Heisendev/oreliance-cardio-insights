import { motion } from "framer-motion";
import { UtensilsCrossed, ArrowLeft, Check, Leaf, AlertTriangle, Heart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
const mediterraneanFoods = [
  {
    category: "À privilégier quotidiennement",
    color: "bg-accent/15 text-accent",
    items: [
      "Fruits et légumes frais (au moins 5 portions/jour)",
      "Huile d'olive vierge extra (2 à 3 cuillères à soupe/jour)",
      "Céréales complètes (pain complet, riz complet, quinoa)",
      "Légumineuses (lentilles, pois chiches, haricots secs)",
      "Herbes aromatiques et épices (remplacent le sel !)",
      "Noix, amandes, noisettes (une poignée/jour)",
    ],
  },
  {
    category: "2 à 3 fois par semaine",
    color: "bg-secondary/15 text-secondary",
    items: [
      "Poissons gras riches en oméga-3 (saumon, sardines, maquereau)",
      "Volaille (poulet, dinde – sans la peau)",
      "Œufs (jusqu'à 4 par semaine)",
    ],
  },
  {
    category: "À limiter",
    color: "bg-warning/15 text-warning",
    items: [
      "Viande rouge (maximum 1 à 2 fois par semaine)",
      "Produits laitiers gras (préférer les yaourts nature)",
      "Sucreries et pâtisseries",
      "Boissons sucrées et alcool (max 1 verre de vin rouge/jour)",
    ],
  },
  {
    category: "À éviter",
    color: "bg-destructive/15 text-destructive",
    items: [
      "Charcuteries et viandes transformées",
      "Plats industriels ultra-transformés",
      "Graisses trans (margarines hydrogénées, fritures)",
      "Excès de sel (objectif < 5 g/jour)",
      "Sodas et jus de fruits industriels",
    ],
  },
];
const saltTips = [
  "Retirez la salière de la table — assaisonnez en cuisine uniquement.",
  "Utilisez des épices et herbes aromatiques : curcuma, cumin, basilic, thym, citron.",
  "Lisez les étiquettes : choisissez les produits < 0.3 g de sel par portion.",
  "Rincez les conserves (légumes, légumineuses) avant consommation.",
  "Préférez le pain fait maison ou à teneur réduite en sel.",
  "Méfiez-vous des sources cachées : fromages, soupes en boîte, biscuits apéritifs.",
];
const fatGuide = [
  {
    type: "Bonnes graisses (insaturées)",
    icon: "✅",
    description: "Protègent le cœur et réduisent le cholestérol LDL.",
    sources: "Huile d'olive, avocat, noix, poissons gras, graines de lin, colza",
  },
  {
    type: "Graisses à limiter (saturées)",
    icon: "⚠️",
    description: "En excès, augmentent le cholestérol LDL et le risque cardiovasculaire.",
    sources: "Beurre, crème, fromage gras, viande grasse, huile de palme",
  },
  {
    type: "Graisses à éviter (trans)",
    icon: "🚫",
    description: "Les plus nocives. Augmentent le LDL et diminuent le HDL.",
    sources: "Margarines hydrogénées, fritures, viennoiseries industrielles, biscuits",
  },
];
const dailyPlate = [
  { label: "Légumes", portion: "½ de l'assiette", color: "bg-accent" },
  { label: "Féculents complets", portion: "¼ de l'assiette", color: "bg-warning" },
  { label: "Protéines maigres", portion: "¼ de l'assiette", color: "bg-secondary" },
];
const Nutrition = () => (
  <div className="space-y-8">
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
      <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-secondary transition-colors mb-4">
        <ArrowLeft className="w-4 h-4" /> Retour
      </Link>
      <div className="flex items-center gap-3 mb-2">
        <div className="p-3 rounded-2xl bg-gradient-primary">
          <UtensilsCrossed className="w-7 h-7 text-secondary" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-secondary">Guide Alimentaire</h1>
          <p className="text-muted-foreground">Régime méditerranéen & santé cardiovasculaire</p>
        </div>
      </div>
    </motion.div>
    {/* Mediterranean intro */}
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.4 }}>
      <Card className="border-accent/30 bg-gradient-to-br from-accent/5 to-transparent overflow-hidden">
        <CardContent className="p-6 flex gap-4 items-start">
          <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0">
            <Leaf className="w-6 h-6 text-accent" />
          </div>
          <div>
            <h2 className="font-bold text-lg text-foreground mb-1">Le régime méditerranéen</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Reconnu par l'OMS et l'ESC, le régime méditerranéen réduit de <strong className="text-foreground">30%</strong> le risque 
              d'événement cardiovasculaire. Il est basé sur des aliments frais, peu transformés, riches en fibres, 
              antioxydants et acides gras insaturés.
            </p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
    {/* Food categories */}
    <div className="space-y-5">
      {mediterraneanFoods.map((group, i) => (
        <motion.div
          key={group.category}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 + i * 0.07, duration: 0.35 }}
        >
          <Card className="border-border/60">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-3">
                <span className={`text-xs px-3 py-1.5 rounded-full font-semibold ${group.color}`}>
                  {group.category}
                </span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="grid gap-2 sm:grid-cols-2">
                {group.items.map((item) => (
                  <li key={item} className="text-sm text-foreground/80 flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
    {/* Daily plate */}
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.4 }}>
      <Card className="border-border/60">
        <CardHeader>
          <CardTitle className="text-lg">L'assiette idéale</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-3">
            {dailyPlate.map((p) => (
              <div key={p.label} className="flex items-center gap-3 p-4 rounded-xl bg-muted/50">
                <span className={`w-4 h-4 rounded-full ${p.color} flex-shrink-0`} />
                <div>
                  <p className="font-semibold text-sm text-foreground">{p.label}</p>
                  <p className="text-xs text-muted-foreground">{p.portion}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
    {/* Fat guide */}
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45, duration: 0.4 }}>
      <Card className="border-border/60">
        <CardHeader>
          <CardTitle className="text-lg">Guide des graisses</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {fatGuide.map((fat) => (
            <div key={fat.type} className="flex items-start gap-3 p-4 rounded-xl bg-muted/30">
              <span className="text-xl mt-0.5">{fat.icon}</span>
              <div>
                <h4 className="font-semibold text-sm text-foreground">{fat.type}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{fat.description}</p>
                <p className="text-xs text-secondary mt-1 font-medium">Sources : {fat.sources}</p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </motion.div>
    {/* Salt tips */}
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.4 }}>
      <Card className="border-border/60">
        <CardHeader>
          <CardTitle className="text-lg">Réduire le sel : astuces pratiques</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {saltTips.map((tip, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-foreground/80 leading-relaxed">
                <span className="w-6 h-6 rounded-full bg-gradient-primary flex items-center justify-center text-xs font-bold text-secondary flex-shrink-0 mt-0.5">
                  {i + 1}
                </span>
                {tip}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
    {/* Warning */}
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.55, duration: 0.4 }}>
      <Card className="border-warning/30 bg-warning/5">
        <CardContent className="p-6 flex gap-4 items-start">
          <div className="w-10 h-10 rounded-lg bg-warning/20 flex items-center justify-center flex-shrink-0 mt-0.5">
            <AlertTriangle className="w-5 h-5 text-warning" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-1">Avertissement</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Ce guide est fourni à titre informatif. Consultez votre diététicien ou votre cardiologue pour un régime personnalisé, 
              notamment en cas de diabète, d'insuffisance rénale ou d'allergies alimentaires.
            </p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
    {/* External resource */}
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 0.4 }}>
      <Card className="border-secondary/20 bg-secondary/5">
        <CardContent className="p-6 flex gap-4 items-start">
          <div className="w-10 h-10 rounded-lg bg-secondary/15 flex items-center justify-center flex-shrink-0 mt-0.5">
            <Heart className="w-5 h-5 text-secondary" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-2">Ressources complémentaires</h3>
            <div className="space-y-2">
              <a href="https://www.mangerbouger.fr/" target="_blank" rel="noopener noreferrer" className="block text-sm font-medium text-secondary hover:underline">
                Manger Bouger – Recommandations PNNS →
              </a>
              <a href="https://www.fedecardio.org/je-m-informe/alimentation/" target="_blank" rel="noopener noreferrer" className="block text-sm font-medium text-secondary hover:underline">
                Fédération Française de Cardiologie – Alimentation →
              </a>
              <a href="https://www.has-sante.fr/" target="_blank" rel="noopener noreferrer" className="block text-sm font-medium text-secondary hover:underline">
                HAS – Recommandations nutritionnelles →
              </a>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  </div>
);
export default Nutrition;