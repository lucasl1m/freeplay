import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Header } from './Header';

export default {
	title: 'Components/Header',
	component: Header,
	parameters: {
		layout: 'fullscreen',
	},
} as Meta<typeof Header>;

export const Template: StoryObj = {};
