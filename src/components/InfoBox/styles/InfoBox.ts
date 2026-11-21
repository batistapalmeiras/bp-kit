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
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.base};
  border-radius: ${({ theme }) => theme.rounded.md};
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: ${({ theme }) => theme.typography.bodySm.fontSize};
  line-height: ${({ theme }) => theme.typography.bodyMd.lineHeight};
  color: ${({ theme }) => theme.colors.body};
  background: ${tone('surface')};
  border: 1px solid ${tone('border')};
`;

export const IconBadge = styled.span<{ $variant: InfoBoxVariant }>`
  display: flex;
  flex: none;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: ${({ theme }) => theme.rounded.sm};
  background: ${tone('border')};
  color: ${tone('icon')};
`;

export const Body = styled.div`
  flex: 1;
  min-width: 0;
  align-self: center;
`;

export const Title = styled.span<{ $variant: InfoBoxVariant }>`
  display: block;
  font-weight: 600;
  color: ${tone('icon')};
`;
