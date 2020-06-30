import React from 'react';
import Layout from '../components/layout';

function Portfolio() {
	return (
		<Layout>
			<div className="w-full p-6 bg-white">
				<div className="w-48 mx-auto pt-6 border-b-2 border-teal-700 text-center text-2xl text-blue-700">
					My work{' '}
				</div>
				<div className="p-2 text-center text-lg text-gray-700">I design full stack projects</div>
				<div className="flex justify-center flex-wrap p-10">
					<div className="relative w-48 h-64 m-5 bg-white shadow-lg border-width: 10px">
						<div>
							<i className="fas fa-bezier-curve fa-3x mx-auto text-white" />
						</div>
						<p className="mx-2 py-2 border-b-2 text-center text-gray-700 font-semibold uppercase">Gather</p>
						<p className="p-2 text-sm text-gray-700">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac est massa.
						</p>
						<div className="absolute right-0 bottom-0 w-8 h-8 bg-gray-300 hover:bg-teal-300 text-center cursor-pointer">
							<i className="fas fa-chevron-right mt-2 text-teal-700" />
						</div>
					</div>
					<div className="relative w-48 h-64 m-5 bg-white shadow-lg">
						<div className="flex items-center w-48 h-20 bg-teal-700">
							<i className="fas fa-bezier-curve fa-3x mx-auto text-white" />
						</div>
						<p className="mx-2 py-2 border-b-2 text-center text-gray-700 font-semibold uppercase">
							Grace Chopper
						</p>
						<p className="p-2 text-sm text-gray-700">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac est massa.
						</p>
						<div className="absolute right-0 bottom-0 w-8 h-8 bg-gray-300 hover:bg-teal-300 text-center cursor-pointer">
							<i className="fas fa-chevron-right mt-2 text-teal-700" />
						</div>
					</div>
					<div className="relative w-48 h-64 m-5 bg-white shadow-lg">
						<div className="flex items-center w-48 h-20 bg-teal-700">
							<i className="fas fa-bezier-curve fa-3x mx-auto text-white" />
						</div>
						<p className="mx-2 py-2 border-b-2 text-center text-gray-700 font-semibold uppercase">
							Hot Take
						</p>
						<p className="p-2 text-sm text-gray-700">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac est massa.
						</p>
						<div className="absolute right-0 bottom-0 w-8 h-8 bg-gray-300 hover:bg-teal-300 text-center cursor-pointer">
							<i className="fas fa-chevron-right mt-2 text-teal-700" />
						</div>
					</div>
					...
				</div>
			</div>{' '}
		</Layout>
	);
}

export default Portfolio;
