// React
import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface LinkButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Optional leading icon — pass a lucide-react icon element, e.g. <X size={16} />. */
  icon?: ReactNode;
}
