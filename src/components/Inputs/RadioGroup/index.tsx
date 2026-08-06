// Local
import { Dot, Group, GroupLabel, HiddenInput, OptionWrapper } from './styles';
import { RadioGroupProps } from './types';

export function RadioGroup({ name, options, value, onChange, label, disabled }: RadioGroupProps) {
  return (
    <div>
      {label && <GroupLabel>{label}</GroupLabel>}
      <Group role="radiogroup" aria-label={label}>
        {options.map((option) => (
          <OptionWrapper key={option.value}>
            <HiddenInput
              type="radio"
              name={name}
              value={option.value}
              checked={value === option.value}
              disabled={disabled}
              onChange={() => onChange?.(option.value)}
            />
            <Dot />
            {option.label}
          </OptionWrapper>
        ))}
      </Group>
    </div>
  );
}
