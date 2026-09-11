export type ProductCategory =
  | 'Intelligence'
  | 'Audience'
  | 'Reputation'
  | 'Talent'
  | 'Production'
  | 'Distribution'
  | 'Marketing'
  | 'Content & Rights'
  | 'Capital'
  | 'Assets'
  | 'Operations'
  | 'Network';

export type BusinessModel =
  | 'SaaS'
  | 'Marketplace'
  | 'Enterprise'
  | 'Intelligence'
  | 'API';

export type TargetUser =
  | 'Producers'
  | 'Production Teams'
  | 'Talent & Crew'
  | 'Distributors'
  | 'Exhibitors'
  | 'Brands & Sponsors'
  | 'Creators'
  | 'Investors'
  | 'Audiences';

export interface ProductItem {
  id: string;
  name: string;
  tagline: string;
  category: ProductCategory;
  targetUsers: TargetUser[];
  businessModel: BusinessModel;
  description: string;
  problemSolved: string;
  capabilities: string[];
  workflowSteps: string[];
  networkConnections: string[];
}

export interface PlatformItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: ProductCategory;
  iconName: string;
  ctaText: string;
  products: string[];
  highlightMetric?: string;
  metricsLabel?: string;
}

export interface AudienceSegment {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  painPoint: string;
  digiSynqSolution: string;
  keyProducts: string[];
  businessModelNote: string;
}

export interface UseCaseItem {
  id: string;
  title: string;
  query: string;
  persona: string;
  stages: {
    stage: string;
    action: string;
    detail: string;
  }[];
  outcome: string;
  connectedNodes: string[];
}

export interface PrincipleItem {
  name: string;
  summary: string;
  detail: string;
}
