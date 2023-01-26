import React from 'react';

import { Header } from '../../components/Header';
import { Heading } from '../../components/Heading';
import { Text } from '../../components/Text';

import Banner from '../../assets/banner.png';
import Jinx from '../../assets/jinx.png';
import Pubg from '../../assets/pubg.png';
import Fortnite from '../../assets/fortnite.png';

import { Sword } from 'phosphor-react';

import { CARDS } from './constants';
import { Button } from '../../components/Button';

export function Home() {
	return (
		<div className="bg-background flex flex-col md:grid-cols-2 px-24 py-12">
			<img src={Banner} alt="Banner" className="w-full h-full object-cover absolute top-0 left-0" />

			<Header />

			<div className="w-full h-screen relative flex flex-row items-center justify-center gap-14">
				<div className="flex flex-col w-full gap-8">
					<Heading size="2xl" className="w-full">
						Nós somos Free<span className="text-blue-500">Play</span>. <br />
						Ajudamos você a encontrar jogos gratuitos.
					</Heading>
					<Text size="sm" className="text-gray-500 font-medium">
						Somos um hub de jogos gratuitos para que você não perca tempo escolhendo o que vai jogar. Fomos
						projetado para aqueles jogadores que querem se divertir.
					</Text>
				</div>
				<img src={Jinx} alt="Jinx" className="hidden max-w-full lg:block" />
			</div>

			<div className="flex flex-col lg:grid-cols-3 lg:grid w-full gap-8">
				{CARDS.map((card) => (
					<div key={card.title} className="flex flex-row items-center gap-4 p-6 bg-gray-800 rounded-lg">
						<Sword size={56} weight="fill" className="text-blue-500" />
						<div className="flex flex-col gap-1">
							<Heading className="uppercase font-bold text-sm">{card.title}</Heading>
							<Text size="sm" className="font-normal text-gray-500">
								{card.description}
							</Text>
						</div>
					</div>
				))}
			</div>

			<div className="w-full flex flex-col lg:flex-row items-center justify-center gap-14 mt-24">
				<img src={Pubg} alt="Pubg" className="w-1/2" />

				<div className="flex flex-col w-full gap-8">
					<Heading size="2xl" className="w-full">
						O melhor lugar para encontrar jogos <span className="text-blue-500">gratuitos!</span>
					</Heading>
					<Text size="sm" className="text-gray-500 font-medium">
						FreePlay é uma coleção de jogos gratuitos para que você não perca tempo escolhendo o que vai
						jogar. Esta coleção foi feita especialmente para você, assim você pode se divertir sem pagar um
						único centavo!
					</Text>
					<Button variant="primary" size="md">
						Explorar jogos
					</Button>
				</div>
			</div>

			<div className="w-full flex flex-row items-center justify-center gap-14 mt-24">
				<div className="bg-blue-500 flex flex-row items-center px-12 py-14 rounded-lg relative">
					<img src={Fortnite} alt="Fornite" className="w-2/6 absolute bottom-0 right-2" />

					<div className="flex flex-col gap-8 w-2/3">
						<Heading size="2xl" className="uppercase">
							Comunidade no discord
						</Heading>

						<Text size="sm" className="text-white font-medium">
							Conheça novas pessoas, encontre dicas e truques ou simplesmente converse sobre tudo
							relacionado a seus jogos favoritos
						</Text>

						<Button variant="secondary" size="md">
							Em breve...
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
