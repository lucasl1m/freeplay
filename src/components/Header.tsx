import React from 'react';
import { Logo } from './Logo';
import { Text } from './Text';

interface HeaderProps {}

export const Header = (props: HeaderProps) => (
	<header className="w-full flex flex-row items-center justify-between relative">
		<Logo />

		<div className='flex flex-row gap-8'>
            <Text>
			    <a>Home</a>
            </Text>
            <Text>
			    <a>Sobre</a>
            </Text>
            <Text>
			    <a>Jogos</a>
            </Text>
            <Text>
			    <a>Contato</a>
            </Text>
		</div>
	</header>
);
