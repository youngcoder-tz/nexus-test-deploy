// src/types/content-schema.ts

export type FieldType =
  | "TEXT_SHORT"
  | "TEXT_LONG"
  | "RICH_TEXT"
  | "COLOR"
  | "ASSET_SELECT"
  | "IMAGE"
  | "BOOLEAN"
  | "NUMBER"
  | "DATE"
  | "DATE_TIME"
  | "CONTENT_REFERENCE"
  | "TAG_SELECT";

export interface AssetOption {
  id: string;
  label: string;
  url: string;
  previewUrl?: string;
  isPremium: boolean;
}

export interface FieldSchema {
  id: string;
  label: string;
  type: FieldType;
  required?: boolean;
  defaultValue?: any;
  helpText?: string;
  options?: AssetOption[]; // For ASSET_SELECT
  validation?: {
    pattern?: string;
    message?: string;
  };
}

export interface SectionSchema {
  id: string;
  label: string;
  type: "STATIC_FORM" | "DYNAMIC_LIST" | "DYNAMIC_CONTENT";
  layout?: "LIST" | "GRID" | "CARDS" | "TABLE";
  itemLabel?: string;
  maxItems?: number;
  fields: FieldSchema[];
}

export interface PageSchema {
  id: string;
  name: string;
  isDynamicPage?: boolean;
  dynamicSlug?: string;
  sections: SectionSchema[];
}

export interface SiteSchema {
  schemaVersion: string;
  pages: PageSchema[];
  contentTypes: any[];
}
