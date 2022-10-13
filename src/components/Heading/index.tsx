import { ReactNode } from 'react';
import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';

interface CommonHeadingProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

interface HeadingPropsWithAsChild extends CommonHeadingProps {
  asChild: true;
  children: ReactNode;
}

interface HeadingPropsWithoutAsChild extends CommonHeadingProps {
  asChild?: never;
  children: string;
}

export type HeadingProps = HeadingPropsWithAsChild | HeadingPropsWithoutAsChild;

export function Heading({
  size = 'md',
  className,
  asChild,
  children,
}: HeadingProps) {
  const Comp = asChild ? Slot : 'h2';

  return (
    <Comp
      className={clsx(
        'text-gray-100 font-sans font-bold',
        {
          'text-lg': size === 'sm',
          'text-xl': size === 'md',
          'text-2xl': size === 'lg',
        },
        className,
      )}
    >
      {children}
    </Comp>
  );
}
