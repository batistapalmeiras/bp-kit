// Libs
import styled, { DefaultTheme } from 'styled-components';

export type InfoBoxVariant = 'info' | 'warning' | 'success';

type Colors = DefaultTheme['colors'];

const VARIANT_COLORS: Record<InfoBoxVariant, { surface: keyof Colors; border: keyof Colors; icon: keyof Colors }> = {
  info: { surface: 'infoSurface', border: 'infoBorder', icon: 'info' },
  warning: { surface: 'warningSurface', border: 'warningBorder', icon: 'warning' },
  success: { surface: 'successSurface', border: 'successBorder', icon: 'success' },
};

const tone =
  (part: 'surface' | 'border' | 'icon') =>
  ({ theme, $variant }: { theme: DefaultTheme; $variant: InfoBoxVariant }) =>
    theme.colors[VARIANT_COLORS[$variant][part]];

export const Box = styled.div<{ $variant: InfoBoxVariant }>`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.rounded.sm};
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: ${({ theme }) => theme.typography.bodySm.fontSize};
  line-height: ${({ theme }) => theme.typography.bodyMd.lineHeight};
  color: ${({ theme }) => theme.colors.ink};
  background: ${tone('surface')};
  border: 1px solid ${tone('border')};

  svg {
    flex-shrink: 0;
    margin-top: 1px;
    color: ${tone('icon')};
  }
`;
