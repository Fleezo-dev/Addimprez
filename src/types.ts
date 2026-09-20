export interface PortfolioItem {
  id: string;
  title: string;
  category: 'packaging' | 'food' | 'branding' | 'labels' | 'web';
  categoryLabel: string;
  client: string;
  location: string;
  year: string;
  tags: string[];
  description: string;
  printSpecs?: string;
  imageUrl: string;
  accentColor: string;
  rating?: number;
}

export interface ServiceItem {
  id: string;
  iconName: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  popularBadge?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  role: string;
  projectType: string;
  content: string;
  avatar: string;
  rating: number;
}

export interface CostEstimateOption {
  id: string;
  name: string;
  category: 'packaging' | 'branding' | 'web' | 'marketing';
  basePrice: number;
  deliveryDays: number;
  includedItems: string[];
}
