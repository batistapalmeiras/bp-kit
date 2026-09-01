// Libs
import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const Back = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border: none;
  border-radius: ${({ theme }) => theme.rounded.full};
  background: transparent;
  color: ${({ theme }) => theme.colors.ink};
  cursor: pointer;
  margin-left: -${({ theme }) => theme.spacing.xs};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  transition: background 0.15s;

  &:hover { background: ${({ theme }) => theme.colors.surfaceStrong}; }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.base};

  // A wide action button squeezes the title column when they share a row,
  // wrapping a longer subtitle across several lines. Below tablet there's
  // rarely room for both side by side, so stack the action under the
  // titles instead of forcing them to share the width.
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Titles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
`;

export const Title = styled.h2`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: ${({ theme }) => theme.typography.displaySm.fontSize};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.ink};
  line-height: 1.2;
`;

export const Subtitle = styled.p`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: ${({ theme }) => theme.typography.bodyMd.fontSize};
  color: ${({ theme }) => theme.colors.muted};
`;
