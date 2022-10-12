import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { InputHTMLAttributes, ReactNode } from 'react';

export interface RootProps {
  children: ReactNode;
}

function Root({ children }: RootProps) {
  return (
    <div
      className={clsx(
        'flex items-center gap-3 h-12 py-4 px-3 rounded bg-gray-800 focus-within:ring-2 ring-cyan-300',
      )}
    >
      {children}
    </div>
  );
}

export interface IconProps {
  children: ReactNode;
}

function Icon({ children }: IconProps) {
  return <Slot className="w-6 h-6 text-gray-400">{children}</Slot>;
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

function Input(props: InputProps) {
  return (
    <input
      className="bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none"
      {...props}
    />
  );
}

Root.displayName = 'TextInput.Root';
Icon.displayName = 'TextInput.Icon';
Input.displayName = 'TextInput.Input';

export const TextInput = {
  Root,
  Icon,
  Input,
};
