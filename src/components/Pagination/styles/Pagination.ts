// Libs
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.xs};
  margin-top: ${({ theme }) => theme.spacing.lg};
`;

export const PageButton = styled.button<{ $active?: boolean; $hidden?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  padding: 0;
  border: none;
  border-radius: ${({ theme }) => theme.rounded.full};
  background: ${({ theme, $active }) => ($active ? theme.colors.ink : 'transparent')};
  color: ${({ theme, $active }) => ($active ? theme.colors.onDark : theme.colors.ink)};
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: ${({ theme }) => theme.typography.bodySm.fontSize};
  font-weight: ${({ $active }) => ($active ? 600 : 500)};
  visibility: ${({ $hidden }) => ($hidden ? 'hidden' : 'visible')};
  cursor: pointer;
  transition: background 0.15s;

  &:hover {
    background: ${({ theme, $active }) => ($active ? theme.colors.ink : theme.colors.surfaceStrong)};
  }
`;

export const PageGap = styled.span`
  width: 36px;
  text-align: center;
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: ${({ theme }) => theme.typography.bodySm.fontSize};
  color: ${({ theme }) => theme.colors.muted};
`;
