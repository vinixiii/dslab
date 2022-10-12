import { ReactNode } from 'react';
import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';

interface ButtonPropsWithAsChild {
  asChild: true;
  children: ReactNode;
}

interface ButtonPropsWithoutAsChild {
  asChild?: never;
  children: string;
}

export type ButtonProps = ButtonPropsWithAsChild | ButtonPropsWithoutAsChild;

export function Button({ asChild, children }: ButtonProps) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      className={clsx(
        'py-4 px-3 bg-cyan-500 rounded font-semibold text-black text-sm w-full hover:bg-cyan-300 transition-colors focus:ring-2 ring-white outline-none',
      )}
    >
      {children}
    </Comp>
  );
}
