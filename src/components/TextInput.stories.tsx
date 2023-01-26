import { StoryObj, Meta } from '@storybook/react'
import { Envelope } from 'phosphor-react'
import { TextInput, TextInputRootProps } from './TextInput'

export default {
    title: 'Components/TextInput.Input',
    component: TextInput.Root,
    args: {
        children: [
            <TextInput.Icon>
                <Envelope />
            </TextInput.Icon>,
            <TextInput.Input placeholder='Enter your email' />,
        ],
        full_width: false,
        size: 'md'
    },
    argTypes: {
        children: {
            table: {
                disable: true
            }
        },
        full_width: {
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
    }

} as Meta<TextInputRootProps>

export const Default: StoryObj = {}

export const WithoutIcon: StoryObj = {
    args: {
        children: [
            <TextInput.Input placeholder='Enter your email' />,
        ]
    }
}