export interface FormField {
  name: string;
  label: string;
  type: string; // 'text', 'number', 'date', 'select', etc.
  value?: any;
  options?: string[]; // for select dropdowns
  required?: boolean;
  }