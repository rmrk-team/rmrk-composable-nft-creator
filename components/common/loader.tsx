import { Loader2 } from 'lucide-react';
import type { LucideProps } from 'lucide-react';
import { css } from 'styled-system/css';

export const Loader = (props: LucideProps) => {
  return (
    <Loader2
      {...props}
      className={css({
        animation: 'spin',
        animationName: 'spin',
      })}
    />
  );
};
