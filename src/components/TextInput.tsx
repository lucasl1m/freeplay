import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { InputHTMLAttributes, ReactNode } from 'react';


export interface TextInputRootProps {
    children: ReactNode;
    full_width?: boolean;
    size?: 'sm' | 'md' | 'lg';
}


function TextInputRoot({children, full_width, size}: TextInputRootProps) {
    return (
        <div className={
            clsx(`
                flex items-center h-12 gap-3 bg-gray-800 border-whiterounded ring-white focus-within:ring-2 rounded duration-300 ease-out px-6 py-3
            
                ${full_width ? 'w-full' : 'w-max'} 
                ${size === 'sm' ? 'h-10 px-4 py-2' : ''}
                ${size === 'lg' ? 'h-14 text-md px-8 py-4 leading-snug' : ''}
            `)
        }>
            {children}
        </div>
    )
}

export interface TextInputFieldProps extends InputHTMLAttributes<HTMLInputElement> {}

export function TextInputField(props: TextInputFieldProps) {
    return (
        <input
            className='bg-transparent flex-1 text-gray-100 outline-none font-sans font-normal text-xs placeholder:text-gray-400 leading-tight '
            {...props}
        />
    )
}

export interface TextInputIconProps {
    children: ReactNode;
}

function TextInputIcon( props : TextInputIconProps) {
    return(
        <Slot className='w-6 h-6 text-gray-400'>
            {props.children}
        </Slot>
    )
}

export const TextInput = {
    Root: TextInputRoot,
    Input: TextInputField,
    Icon: TextInputIcon,
}