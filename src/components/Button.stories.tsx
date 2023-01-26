import { StoryObj, Meta } from '@storybook/react'
import { Button, ButtonProps } from './Button'

export default {
    title: 'Components/Button',
    component: Button,
    args: {
        children: 'Create account',
        block: false,
        size: 'md',
        variant: 'primary'
    },
    argTypes: {
        children: {
            table: {
                disable: true
            }
        },
        block: {
            control: {
                type: 'boolean'
            }
        },
        size: {
            control: {
                type: 'select',
                options: ['sm', 'md', 'lg']
            }
        },
        asChild: {
            table: {
                disable: true
            }
        }
    }

} as Meta<ButtonProps>

export const Primary: StoryObj = {}

export const Secondary: StoryObj = {
    args: {
        variant: 'secondary'
    }
}
