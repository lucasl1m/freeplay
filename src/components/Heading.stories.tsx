import { StoryObj, Meta } from '@storybook/react'
import { Heading, HeadingProps } from './Heading'

export default {
    title: 'Components/Heading',
    component: Heading,
    args: {
        children: 'Heading',
        size: 'lg'
    },
    argTypes: {
        size: {
            control: {
                type: 'select',
                options: ['lg', 'xl', '2xl', '3xl', '4xl']
            }
        }
    }

} as Meta<HeadingProps>

export const Default: StoryObj = {}

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
