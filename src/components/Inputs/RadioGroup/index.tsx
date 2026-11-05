// Local
import {
  Dot,
  Group,
  GroupError,
  GroupLabel,
  HiddenInput,
  OptionDescription,
  OptionText,
  OptionTitle,
  OptionWrapper,
} from './styles';
import { RadioGroupProps } from './types';

export function RadioGroup({ name, options, value, onChange, label, disabled, error }: RadioGroupProps) {
  return (
    <div>
      {label && <GroupLabel>{label}</GroupLabel>}
      <Group role="radiogroup" aria-label={label} aria-invalid={!!error}>
        {options.map((option) => (
          <OptionWrapper key={option.value} $described={!!option.description}>
            <HiddenInput
              type="radio"
              name={name}
              value={option.value}
              checked={value === option.value}
              disabled={disabled}
              aria-invalid={!!error}
              onChange={() => onChange?.(option.value)}
            />
            <Dot />
            {option.description ? (
              <OptionText>
                <OptionTitle>{option.label}</OptionTitle>
                <OptionDescription>{option.description}</OptionDescription>
              </OptionText>
            ) : (
              option.label
            )}
          </OptionWrapper>
        ))}
      </Group>
      {error && <GroupError>{error}</GroupError>}
    </div>
  );
}
