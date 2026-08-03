// React
import { forwardRef } from 'react';
// Libs
import { Check } from 'lucide-react';
// Local
import { Box, HiddenInput, Wrapper } from './styles';
import { CheckboxProps } from './types';

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox({ label, ...rest }, ref) {
  return (
    <Wrapper>
      <HiddenInput ref={ref} type="checkbox" {...rest} />
      <Box>
        <Check />
      </Box>
      {label}
    </Wrapper>
  );
});
