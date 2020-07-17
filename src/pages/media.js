import React from 'react';
import Layout from '../components/layout';
import ReactPlayer from 'react-player';

function Media() {
	return (
		<Layout>
			<div>
				<section className="flex flex-row items-center md:flex-row">
					<div className="text-lg">
						Demonstration and explanation of{' '}
						<a className="underline" href="https://video-app-8491-dev.twil.io/login">
							Gather
						</a>
					</div>
					<ReactPlayer
						className="m-4"
						url="https://www.youtube.com/watch?v=vl0p6XHA1vk&list=PLx0iOsdUOUmnf7I22qeTz8ms5tPM14dgg&index=18&t=0s"
					/>
				</section>
				<div>
					<section className="flex flex-row items-center md:flex-row">
						<div className="text-lg">
							{' '}
							Demonstration and explanation of{' '}
							<a
								className="underline"
								href="https://github.com/kevinfergus/hottakerep/tree/master/hottesttake"
							>
								Hot Take
							</a>
						</div>
						<ReactPlayer
							className="m-4"
							url="https://www.youtube.com/watch?v=ZDr53uP2phE&feature=youtu.be"
						/>{' '}
					</section>
				</div>
			</div>
		</Layout>
	);
}

export default Media;
