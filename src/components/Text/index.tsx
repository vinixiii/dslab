import { ReactNode } from 'react';
import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';

interface CommonTextProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

interface TextPropsWithAsChild extends CommonTextProps {
  asChild: true;
  children: ReactNode;
}

interface TextPropsWithoutAsChild extends CommonTextProps {
  asChild?: never;
  children: string;
}

export type TextProps = TextPropsWithAsChild | TextPropsWithoutAsChild;

export function Text({ size = 'md', className, asChild, children }: TextProps) {
  const Comp = asChild ? Slot : 'span';

  return (
    <Comp
      className={clsx(
        'text-gray-100 font-sans',
        {
          'text-xs': size === 'sm',
          'text-sm': size === 'md',
          'text-md': size === 'lg',
        },
        className,
      )}
    >
      {children}
    </Comp>
  );
}
