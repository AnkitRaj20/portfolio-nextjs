import mongoose, { Document, Model } from 'mongoose';

export interface IPortfolio extends Document {
  navbar: any;
  hero: any;
  about: any;
  contact: any;
  skills: any[];
  timeline: any[];
  projects: any[];
}

const PortfolioSchema = new mongoose.Schema({
  navbar: { type: mongoose.Schema.Types.Mixed },
  hero: { type: mongoose.Schema.Types.Mixed },
  about: { type: mongoose.Schema.Types.Mixed },
  contact: { type: mongoose.Schema.Types.Mixed },
  skills: [{ type: mongoose.Schema.Types.Mixed }],
  timeline: [{ type: mongoose.Schema.Types.Mixed }],
  projects: [{ type: mongoose.Schema.Types.Mixed }]
}, { timestamps: true });

const Portfolio: Model<IPortfolio> = mongoose.models.Portfolio as Model<IPortfolio> || mongoose.model<IPortfolio>('Portfolio', PortfolioSchema);

export default Portfolio;
