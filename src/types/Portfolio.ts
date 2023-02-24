export interface Portfolio {
  title: string;
  imageUrl: string;
  info?: string;
  badges?: PortfolioBadge[];
  anchors?: PortfolioAnchor[];
}

interface PortfolioBadge {
  text: string;
  type: 'primary' | 'secondary'
}

interface PortfolioAnchor {
  text?: string,
  type: 'app' | 'code' | 'link',
  url: string,
}