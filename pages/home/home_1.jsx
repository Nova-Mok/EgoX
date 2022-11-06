import React from 'react';
import Link from 'next/link';
import { upline_data } from '../../data/wallet_data';
import {
	Hero,
	Bids,
	Top_collection,
	Tranding_category,
	NewseLatter,
} from '../../components/component';
import Meta from '../../components/Meta';

const Home_1 = () => {
	return (
		<main>
			<Meta title=" EgoX | NFT Marketplace" />
			<Hero />
			<Bids />
			<Top_collection />
			<section className="dark:bg-jacarta-800 relative pb-20 pt-28">
					<picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
						<img src="images/gradient_light.jpg" alt="gradient" className="h-full w-full" />
					</picture>
					<div className="container">
						<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-[1.875rem]">
							{upline_data.map((item) => {
								const { id, image, title, text } = item;
								return (
									<Link href="#" key={id}>
										<a className="dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 rounded-2.5xl mb-8 border bg-white p-8 text-center transition-shadow hover:shadow-lg">
											<img
												src={image}
												className="dark:border-jacarta-600 dark:bg-jacarta-700 border-jacarta-100 mx-auto mb-7 -mt-[3.5rem] h-[5.5rem] w-[5.5rem] rounded-full border bg-white"
												alt="wallet"
											/>
											<h3 className="font-display text-jacarta-700 text-md mb-3 dark:text-white">
												{title}
											</h3>
											<p className="dark:text-jacarta-300">{text}</p>
										</a>
									</Link>
								);
							})}
						</div>
					</div>
				</section>
		</main>
	);
};

export default Home_1;
