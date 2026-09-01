// Libs
import styled from 'styled-components';

export const Dropzone = styled.div<{ $dragOver?: boolean; $hasImages?: boolean }>`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: ${({ $hasImages }) => ($hasImages ? 'flex-start' : 'center')};
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme, $hasImages }) => ($hasImages ? theme.spacing.sm : theme.spacing.lg)};
  border: 1.5px dashed ${({ theme, $dragOver }) => ($dragOver ? theme.colors.primary : theme.colors.hairline)};
  border-radius: ${({ theme }) => theme.rounded.md};
  background: ${({ theme, $dragOver }) => ($dragOver ? theme.colors.surfaceSoft : theme.colors.canvas)};
  transition: border-color 0.15s, background 0.15s;
`;

export const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xxs};
  width: 100%;
  color: ${({ theme }) => theme.colors.muted};
  text-align: center;
  cursor: pointer;
`;

export const DropzoneText = styled.p`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: ${({ theme }) => theme.typography.bodySm.fontSize};
  color: ${({ theme }) => theme.colors.ink};
`;

export const DropzoneHint = styled.p`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: ${({ theme }) => theme.typography.captionSm.fontSize};
  color: ${({ theme }) => theme.colors.mutedSoft};
`;

export const HiddenInput = styled.input`
  display: none;
`;

export const Thumb = styled.div`
  position: relative;
  width: 72px;
  height: 72px;
  flex-shrink: 0;
`;

export const ThumbImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.rounded.sm};
  border: 1px solid ${({ theme }) => theme.colors.hairline};
`;

export const RemoveButton = styled.button`
  position: absolute;
  top: -6px;
  right: -6px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  padding: 0;
  border: none;
  border-radius: ${({ theme }) => theme.rounded.full};
  background: ${({ theme }) => theme.colors.ink};
  color: ${({ theme }) => theme.colors.onDark};
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.body};
  }
`;

export const AddTile = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 72px;
  height: 72px;
  flex-shrink: 0;
  border: 1.5px dashed ${({ theme }) => theme.colors.hairline};
  border-radius: ${({ theme }) => theme.rounded.sm};
  background: transparent;
  color: ${({ theme }) => theme.colors.muted};
  cursor: pointer;
  transition: border-color 0.15s, color 0.15s;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
  }
`;
