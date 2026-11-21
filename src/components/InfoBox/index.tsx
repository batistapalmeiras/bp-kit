// React
import React from 'react';
// Libs
import { AlertTriangle, Info, LucideIcon, Smile } from 'lucide-react';
// Local
import { Body, Box, IconBadge, InfoBoxVariant, Title } from './styles';

const VARIANT_ICONS: Record<InfoBoxVariant, LucideIcon> = {
  info: Info,
  warning: AlertTriangle,
  success: Smile,
};

interface Props {
  variant?: InfoBoxVariant;
  icon?: LucideIcon;
  title?: React.ReactNode;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export function InfoBox({ variant = 'info', icon, title, children, style }: Props) {
  const Icon = icon ?? VARIANT_ICONS[variant];
  return (
    <Box $variant={variant} style={style} role="note">
      <IconBadge $variant={variant}>
        <Icon size={18} aria-hidden="true" />
      </IconBadge>
      <Body>
        {title && <Title $variant={variant}>{title}</Title>}
        {children}
      </Body>
    </Box>
  );
}
