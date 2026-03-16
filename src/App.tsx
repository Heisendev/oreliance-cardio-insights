import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import Drugs from "./pages/Drugs";
import ArterialPressure from "./pages/ArterialPressure";
import RiskFactors from "./pages/RiskFactors";
import Resources from "./pages/Resources";
import PhysicalActivity from "./pages/PhysicalActivity";
import NotFound from "./pages/NotFound";
import Nutrition from "./pages/Nutrition";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Index />} />
            <Route path="/drugs" element={<Drugs />} />
            <Route path="/arterial-pressure" element={<ArterialPressure />} />
            <Route path="/risk-factors" element={<RiskFactors />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/physical-activity" element={<PhysicalActivity />} />
            <Route path="/nutrition" element={<Nutrition />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
  </QueryClientProvider>
);

export default App;
