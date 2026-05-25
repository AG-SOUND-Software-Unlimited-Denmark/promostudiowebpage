export type LegalSection = {
  id: string;
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  subsections?: { title: string; paragraphs?: string[]; bullets?: string[] }[];
};

export type LegalDocumentMeta = {
  title: string;
  productName: string;
  effectiveDate: string;
  lastUpdated: string;
  contactEmail: string;
  company: string;
  copyright: string;
};
