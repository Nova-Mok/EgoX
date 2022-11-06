import React from 'react';
import { partners_data } from '../../data/partners_data';
import HeadLine from '../../components/headLine';
import { works_data } from '../../data/partners_data';
import Feature_collections_carousel from '../../components/carousel/Feature_collection_carousel';
import Accordion from '../../components/accordion';
import { accordion_data } from '../../data/help_center_data';
import Link from 'next/link';
import PartnersComp from '../../components/partners/Partners';
import Meta from '../../components/Meta';
import Collection_category from '../../components/collectrions/collection_category';

const Partners = () => {
	return (
		<div>
			<Meta title=" EgoX | NFT Marketplace" />
			<div className="pt-[5.5rem] lg:pt-24">
				{/* <!-- Benefits --> */}
			{/*	<section className="relative pt-32 pb-24">
					<picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
						<img src="/images/gradient.jpg" alt="gradient" className="h-full w-full" />
					</picture>
					<picture className="pointer-events-none absolute inset-0 -z-10 hidden dark:block">
						<img src="/images/gradient_dark.jpg" alt="gradient dark" className="h-full w-full" />
					</picture>
					<div className="container">
						<div className="mx-auto max-w-xl text-center">
							<h1 className="font-display text-jacarta-700 mb-6 text-center text-4xl font-medium dark:text-white">
							 TOP COLLECTIONS TODAY
							</h1>
							<p className="dark:text-jacarta-200 mb-16 text-lg leading-normal">
							 Live statistics across the board
							</p>
						</div>

     			        <div className="grid gap-7 md:grid-cols-3">
							{partners_data.map(({ id, text, icon }) => {
								return (
									<div
										className="dark:bg-jacarta-800 rounded-2.5xl bg-white p-[3.75rem] text-center transition-shadow hover:shadow-xl"
										key={id}
									>
										<div className="mb-6 inline-flex rounded-full bg-[#CDBCFF] p-2.5">
											<div className="bg-accent inline-flex h-[4.25rem] w-[4.25rem] items-center justify-center rounded-full">
												<svg className="icon h-[2.25rem] w-[2.25rem] fill-white">
													<use xlinkHref={`/icons.svg#icon-${icon}`}></use>
												</svg>
											</div>
										</div>
										<h3 className="font-display text-jacarta-700 mx-auto mb-4 max-w-[9.625rem] text-lg dark:text-white">
											{text}
										</h3>
									</div>
								);
							})}
						</div> 
					</div>
						</section> */}
				{/* <!-- end benefits --> */}

				{/* <!-- Process --> */}
				<section className="relative py-24">
					<div className="container">
						<div className="mx-auto mb-20 max-w-xl text-center">
							<HeadLine
								classes="font-display text-jacarta-700 mb-6 text-center text-3xl font-medium dark:text-white"
								text="TOP COLLECTIONS TODAY"
								pera={true}
							/>
						</div>

						<div className="grid gap-7 md:grid-cols-3">
							{works_data.map(({ id, title, text, image }) => {
								return (
									<div
										key={id}
										className="dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 rounded-2xl mb-12 border bg-white p-8 pt-0 text-center transition-shadow hover:shadow-xl"
									>
										<div className="dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 mb-9 -mt-8 inline-flex h-[5.5rem] w-[5.5rem] items-center justify-center rounded-full border bg-white">
											{/* <svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											width="24"
											height="24"
											className="fill-accent h-12 w-12"
										>
											<path fill="none" d="M0 0h24v24H0z" />
											<path d="M17 16h2V4H9v2h8v10zm0 2v3c0 .552-.45 1-1.007 1H4.007A1.001 1.001 0 0 1 3 21l.003-14c0-.552.45-1 1.007-1H7V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-3zM7 16v2h2v1h2v-1h.5a2.5 2.5 0 1 0 0-5h-3a.5.5 0 1 1 0-1H13v-2h-2V9H9v1h-.5a2.5 2.5 0 1 0 0 5h3a.5.5 0 1 1 0 1H7z" />
										</svg> */}
											<svg className="icon fill-accent h-12 w-12">
												<use xlinkHref={`/icons.svg#icon-${image}`}></use>
											</svg>
										</div>

										<h3 className="font-display text-jacarta-700 mb-4 text-lg dark:text-white">
											{title}
										</h3>
										<p className="dark:text-jacarta-80">{text}</p>
									</div>
								);
							})}
						</div>
					</div>
				</section>
				{/* <!-- end process --> */}

				{/* <!-- Partner collections / FAQ / Testimonials --> */}
		
				{/* <!-- end partner collections / faq / testimonials --> */}
				{/* <!-- CTA --> */}
			
				{/* <!-- end cta --> */}
				<div className="mx-auto mb-5 max-w-xl text-center">
							<HeadLine
								classes="font-display text-jacarta-700 mb-6 text-center text-3xl font-medium dark:text-white"
								text="TRENDS ⚡"
							/>
						</div>
				
				<Collection_category bgWhite={true} />

				
			</div>
		</div>
	);
};

export default Partners;
