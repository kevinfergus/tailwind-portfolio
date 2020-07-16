import React from 'react';
import Layout from '../components/layout';

function Work() {
	return (
		<Layout>
			<div className="w-full p-6 bg-white">
				<div className="w-48 mx-auto pt-6 border-b-2 border-teal-700 text-center text-2xl text-blue-700">
					My work{' '}
				</div>
				<div className="p-2 text-center text-lg text-gray-700">I design full stack projects</div>
				<div className="flex justify-center flex-wrap p-10">
					<a
						className="relative w-auto h-auto m-5 bg-white shadow-xl"
						href="https://video-app-8491-dev.twil.io/login"
					>
						<div className="flex items-center w-full h-3 bg-teal-900">
							<i className="fas fa-bezier-curve fa-3x mx-auto text-white" />
						</div>
						<p className="mx-2 py-2 border-b-2 text-center text-gray-700 font-semibold uppercase">Gather</p>
						<p className="p-2 text-sm text-gray-700">
							Video conferencing application that puts users in a shared space with a common background.
							Built with React, Typescript, Twilio, Firebase Realtime Database and Tensor-Flow.
						</p>
					</a>
					<a
						className="relative w-auto h-auto m-5 bg-white shadow-xl"
						href="https://github.com/Grace-Chopper/grace-chopper"
					>
						<div className="flex items-center w-full h-3 bg-teal-900">
							<i className="fas fa-bezier-curve fa-3x mx-auto text-white" />
						</div>
						<p className="mx-2 py-2 border-b-2 text-center text-gray-700 font-semibold uppercase">
							Grace Chopper
						</p>
						<p className="p-2 text-sm text-gray-700">
							Full stack e-commerce website. Built with React, Redux, Node, Bootstrap, PostGres and SQL.{' '}
						</p>
					</a>
					<a
						className="relative w-auto h-auto m-5 bg-white shadow-xl"
						href="https://video-app-8491-dev.twil.io/login"
					>
						<div className="flex items-center w-full h-3 bg-teal-900">
							<i className="fas fa-bezier-curve fa-3x mx-auto text-white" />
						</div>
						<p className="mx-2 py-2 border-b-2 text-center text-gray-700 font-semibold uppercase">
							Hot Take
						</p>
						<p className="p-2 text-sm text-gray-700">
							Real time collaborative game built in 4 days. Built with React and Firebase Realtime
							Database.
						</p>
					</a>
				</div>
			</div>{' '}
		</Layout>
	);
}

export default Work;
