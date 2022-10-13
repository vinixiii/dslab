import { ButtonHTMLAttributes, ReactNode } from 'react';
import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';

interface CommonButtonProps {
  className?: string;
}

interface ButtonPropsWithAsChild extends CommonButtonProps {
  asChild: true;
  children: ReactNode;
}

interface ButtonPropsWithoutAsChild extends CommonButtonProps {
  asChild?: never;
  children: string;
}

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  (ButtonPropsWithAsChild | ButtonPropsWithoutAsChild);

export function Button({ className, asChild, children, ...rest }: ButtonProps) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      className={clsx(
        'py-3 px-4 bg-cyan-500 rounded font-semibold text-black text-sm w-full hover:bg-cyan-300 transition-colors focus:ring-2 ring-white outline-none',
        className,
      )}
      {...rest}
    >
      {children}
    </Comp>
  );
}
