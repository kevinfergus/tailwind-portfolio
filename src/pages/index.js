import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import headshot from '../images/headshot.png';
import { Link } from 'gatsby';

function IndexPage() {
	return (
		<Layout>
			<SEO keywords={[ `gatsby`, `tailwind`, `react`, `tailwindcss` ]} title="About" />

			<section className="flex flex-col items-center md:flex-row">
				<div className="md:w-2/3 md:mr-8">
					<div className="pl-4 leading-loose text-justify border-l-4 border-gray-900">
						Hey there! My name is Kevin Fergus, I&apos;m a full stack software developer based in Chicago. I
						like to create great user experiences and solve interesting problems. I&apos;m open to all
						technologies but my tools of choice are Javascript, React, and Node.{' '}
						<Link className="underline" to="/contact">
							Let&apos;s make something cool.
						</Link>
					</div>
				</div>

				<figure className="w-2/3 md:w-1/3">
					<img className="rounded" alt="headshot" src={headshot} />
				</figure>
				<ul className="list-none text-lg">
					<li style={{ padding: 20 }}>HTML5</li>
					<li style={{ padding: 20 }}>CSS3</li>
					<li style={{ padding: 20 }}>Javascript</li>
					<li style={{ padding: 20 }}>Node</li>
					<li style={{ padding: 20 }}>React</li>
					<li style={{ padding: 20 }}>Redux</li>
					<li style={{ padding: 20 }}>PostgreSQL</li>
				</ul>
			</section>
		</Layout>
	);
}

export default IndexPage;
