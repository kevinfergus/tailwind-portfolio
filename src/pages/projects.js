import React, { useState } from 'react';
import Layout from '../components/layout';
import gather from '../images/gather.png';
import hottake from '../images/hottake.png';
import gracechopper from '../images/gracechopper.png';

function Projects() {
	const [ image, setImage ] = useState(null);
	return (
		<Layout>
			<div className="w-full p-6 bg-white">
				<div className="w-48 mx-auto pt-6 border-b-2 border-teal-700 text-center text-2xl text-blue-700">
					<div className="p-2 text-center text-lg text-gray-700" />
				</div>

				<section className="flex flex-col items-center md:flex-row">
					<div className="flex justify-center flex-wrap p-10">
						<a
							className="relative w-100 h-auto m-5 bg-white shadow-xl transform hover:-translate-y-1 hover:scale-110"
							name="gather"
							href="https://video-app-8491-dev.twil.io?passcode=2436748491"
							onMouseEnter={function() {
								setImage(gather);
							}}
						>
							<div className="flex items-center w-full h-3 bg-teal-900" name="gather">
								<i className="fas fa-bezier-curve fa-3x mx-auto text-white" name="gather" />
							</div>
							<p
								className="mx-2 py-2 border-b-2 text-center text-gray-700 font-semibold uppercase"
								name="gather"
							>
								Gather
							</p>
							<p className="p-2 text-sm text-gray-700" name="gather">
								Video conferencing application that puts users in a shared space with a common
								background. Built with React, Typescript, Twilio, Firebase Realtime Database and
								Tensor-Flow.
							</p>
						</a>
						<a
							className="relative w-400 h-auto m-5 bg-white shadow-xl transform hover:-translate-y-1 hover:scale-110"
							href="https://github.com/Grace-Chopper/grace-chopper"
							onMouseEnter={function() {
								setImage(gracechopper);
							}}
						>
							<div className="flex items-center w-full h-3 bg-teal-900">
								<i className="fas fa-bezier-curve fa-3x mx-auto text-white" />
							</div>
							<p className="mx-2 py-2 border-b-2 text-center text-gray-700 font-semibold uppercase">
								Grace Chopper
							</p>
							<p className="p-2 text-sm text-gray-700">
								Full stack e-commerce website. Built with React, Redux, Node, Bootstrap, PostGres and
								SQL.{' '}
							</p>
						</a>
						<a
							className="relative w-400 h-auto m-5 bg-white shadow-xl transform hover:-translate-y-1 hover:scale-110"
							href="https://github.com/kevinfergus/hottakerep/tree/master/hottesttake"
							onMouseEnter={function() {
								setImage(hottake);
							}}
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
				</section>
				<div className="inset-y-0.left-0

">
					<div>{image ? <img alt="headshot" src={image} /> : <div />}</div>
				</div>
			</div>
		</Layout>
	);
}

export default Projects;
