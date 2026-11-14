// Libs
import styled from 'styled-components';
// Components
import { InputField } from '../../BaseInput/styles';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const DateField = styled(InputField)`
  && {
    padding-right: 48px;
  }
`;

export const TrailingIcon = styled.span`
  position: absolute;
  top: 50%;
  right: ${({ theme }) => theme.spacing.md};
  display: flex;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.colors.muted};
  pointer-events: none;
`;
