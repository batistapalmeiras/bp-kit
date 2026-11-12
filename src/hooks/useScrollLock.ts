// React
import { useEffect } from 'react';

let locks = 0;
let previous = { overflow: '', paddingRight: '' };

function lock() {
  if (locks === 0) {
    const root = document.documentElement;
    const scrollbar = window.innerWidth - root.clientWidth;
    previous = { overflow: root.style.overflow, paddingRight: document.body.style.paddingRight };
    root.style.overflow = 'hidden';
    if (scrollbar > 0) document.body.style.paddingRight = `${scrollbar}px`;
  }
  locks += 1;
}

function unlock() {
  locks = Math.max(0, locks - 1);
  if (locks === 0) {
    document.documentElement.style.overflow = previous.overflow;
    document.body.style.paddingRight = previous.paddingRight;
  }
}

export function useScrollLock() {
  useEffect(() => {
    lock();
    return unlock;
  }, []);
}
