import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

export interface HeadingProps {
    size?: 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
    children: React.ReactNode;
    asChild?: boolean;
    className?: string;
}

export function Heading({ size = 'lg', children, asChild, className }: HeadingProps) {
    const Comp = asChild ? Slot : 'h2';

    return (
        <Comp className={
            clsx(
                'text-gray-100 font-sans font-bold',
                {
                    'text-md': size === 'md',
                    'text-lg': size === 'lg',
                    'text-xl': size === 'xl',
                    'text-2xl': size === '2xl',
                    'text-3xl': size === '3xl',
                    'text-4xl': size === '4xl',
                },
                className
            )
        }>
            {children}
        </Comp>
    )
}
