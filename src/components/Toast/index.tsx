// React
import { createPortal } from 'react-dom';
// Local
import { ToastAction, ToastEl } from './styles';

export { useToast } from './hooks';
export type { ToastActionConfig } from './hooks';

interface ToastProps {
  message: string;
  leaving: boolean;
  action?: { label: string; onClick: () => void };
}

export function Toast({ message, leaving, action }: ToastProps) {
  return createPortal(
    <ToastEl $leaving={leaving} $interactive={!!action} role="status">
      {message}
      {action && (
        <ToastAction type="button" onClick={action.onClick}>
          {action.label}
        </ToastAction>
      )}
    </ToastEl>,
    document.body,
  );
}
