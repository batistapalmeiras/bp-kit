// React
import { useCallback, useRef, useState } from 'react';
// Libs
import { Toast } from '..';

export interface ToastActionConfig {
  label: string;
  onClick: () => void;
}

const ACTION_DURATION = 6000;

export function useToast(duration = 2500) {
  const [state, setState] = useState<{ message: string; leaving: boolean; action?: ToastActionConfig } | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const hide = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setState((s) => (s ? { ...s, leaving: true } : null));
    timerRef.current = setTimeout(() => setState(null), 300);
  }, []);

  const show = useCallback(
    (message: string, action?: ToastActionConfig) => {
      if (timerRef.current) clearTimeout(timerRef.current);
      setState({ message, leaving: false, action });
      timerRef.current = setTimeout(hide, action ? ACTION_DURATION : duration);
    },
    [duration, hide],
  );

  const toast = state ? (
    <Toast
      message={state.message}
      leaving={state.leaving}
      action={
        state.action && {
          label: state.action.label,
          onClick: () => {
            hide();
            state.action?.onClick();
          },
        }
      }
    />
  ) : null;

  return { show, hide, toast };
}
