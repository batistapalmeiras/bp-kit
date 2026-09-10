// React
import { forwardRef } from 'react';
// Local
import { StyledLinkButton } from './styles';
import { LinkButtonProps } from './types';

export const LinkButton = forwardRef<HTMLButtonElement, LinkButtonProps>(function LinkButton(
  { icon, type = 'button', children, ...rest },
  ref,
) {
  return (
    <StyledLinkButton ref={ref} type={type} {...rest}>
      {icon}
      {children}
    </StyledLinkButton>
  );
});
