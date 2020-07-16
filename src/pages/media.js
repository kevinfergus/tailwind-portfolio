import React from 'react';
import Layout from '../components/layout';
import ReactPlayer from 'react-player';

function Media() {
	return (
		<Layout>
			<div>
				<div>
					<div>Code demo for gather</div>
					<ReactPlayer
						className="m-4"
						url="https://www.youtube.com/watch?v=vl0p6XHA1vk&list=PLx0iOsdUOUmnf7I22qeTz8ms5tPM14dgg&index=18&t=0s"
					/>
				</div>
				<div>
					<div>Code demo for Hot Take</div>
					<ReactPlayer
						className="m-4"
						url="https://www.youtube.com/watch?v=ZDr53uP2phE&feature=youtu.be"
					/>{' '}
				</div>
			</div>
		</Layout>
	);
}

export default Media;
