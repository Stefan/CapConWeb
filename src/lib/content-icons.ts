import {
  AlertTriangle,
  BarChart3,
  Building2,
  ClipboardCheck,
  ClipboardList,
  FileSpreadsheet,
  GitPullRequest,
  Layers,
  LineChart,
  Lock,
  Map,
  Shield,
  Sparkles,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

export const painPointIcons: Record<string, LucideIcon> = {
  "budget-overruns": AlertTriangle,
  "opaque-forecasts": LineChart,
  "excel-processes": FileSpreadsheet,
  "portfolio-blind-spots": Layers,
  "change-audit-trail": GitPullRequest,
};

export const featureIcons: Record<string, LucideIcon> = {
  costbook: ClipboardList,
  "change-orders": GitPullRequest,
  "master-plan": Map,
  "schedule-financials": LineChart,
  registers: Sparkles,
  explainability: LineChart,
  "portfolio-intelligence": BarChart3,
  portfolio: BarChart3,
  workflows: ClipboardCheck,
  "intelligence-registers": Sparkles,
  "health-alerts": TrendingUp,
  "sov-retainage": GitPullRequest,
  "stage-gates": ClipboardCheck,
  "gmp-cc": Shield,
  "co-bridge": GitPullRequest,
  iqoq: ClipboardCheck,
  equipment: Layers,
  deviation: AlertTriangle,
  "gmp-reports": FileSpreadsheet,
};

export const trustSignalIcons: Record<string, LucideIcon> = {
  security: Shield,
  signatures: ClipboardCheck,
  sap: Building2,
  gdpr: Lock,
};
