// React
import { forwardRef } from 'react';
// Local
import { HiddenInput, Track, Wrapper } from './styles/Switch';
import { SwitchProps } from './types';

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(function Switch({ label, ...rest }, ref) {
  return (
    <Wrapper>
      <HiddenInput ref={ref} type="checkbox" {...rest} />
      <Track />
      {label}
    </Wrapper>
  );
});
