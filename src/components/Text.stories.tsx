import { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from './Text'

export default {
    title: 'Components/Text',
    component: Text,
    args: {
        size: 'md',
        children: 'Lorem Ipsum',
    },
    argTypes: {
        size: {
            control: {
                type: 'select',
                options: ['sm', 'md', 'lg']
            }
        }
    }

} as Meta<TextProps>

export const Default: StoryObj = {}

export const Small: StoryObj = {
    args: {
        size: 'sm'
    }
}

export const Large: StoryObj = {
    args: {
        size: 'lg'
    }
}

export const CustomComponents: StoryObj = {
    args: {
        asChild: true,
        children: <p>Text</p>
    },
    argTypes: {
        children: {
            table: {
                disable: true
            }

        },
        asChild: {
            table: {
                disable: true
            }

        }
    }
}