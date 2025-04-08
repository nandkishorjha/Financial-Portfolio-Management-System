import { FormField } from './form-field.model';

export const investmentFormJson: FormField[] = [
  {
    name: 'investmentType',
    label: 'Investment Type',
    type: 'select',
    options: ['Stocks', 'Bonds', 'Real Estate', 'Mutual Funds'],
    required: true,
  },
  {
    name: 'amount',
    label: 'Amount',
    type: 'number',
    required: true,
  },
  {
    name: 'quantity',
    label: 'Quantity',
    type: 'number',
    required: true,
  },
  {
    name: 'investmentDate',
    label: 'Date of Investment',
    type: 'date',
    required: true,
  },
  {
    name: 'notes',
    label: 'Notes',
    type: 'text',
  },
];
