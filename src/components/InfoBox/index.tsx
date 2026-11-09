// React
import React from 'react';
// Libs
import { AlertTriangle, Info, LucideIcon, Smile } from 'lucide-react';
// Local
import { Box, InfoBoxVariant } from './styles';

const VARIANT_ICONS: Record<InfoBoxVariant, LucideIcon> = {
  info: Info,
  warning: AlertTriangle,
  success: Smile,
};

interface Props {
  variant?: InfoBoxVariant;
  icon?: LucideIcon;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export function InfoBox({ variant = 'info', icon, children, style }: Props) {
  const Icon = icon ?? VARIANT_ICONS[variant];
  return (
    <Box $variant={variant} style={style}>
      <Icon size={16} />
      <div>{children}</div>
    </Box>
  );
}
