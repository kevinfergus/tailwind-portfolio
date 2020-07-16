import { Link } from 'gatsby';
import React from 'react';

function Header() {
	return (
		<header className="bg-teal-700">
			<div className="flex flex-wrap items-center justify-between max-w-4xl p-4 mx-auto md:p-8">
				<Link to="/">
					<h1 className="flex items-center text-white no-underline">
						<span className="text-xl font-bold tracking-tight">Home</span>
					</h1>
				</Link>
				<Link to="/contact">
					<h1 className="flex items-center text-white no-underline">
						<span className="text-xl font-bold tracking-tight">Contact</span>
					</h1>
				</Link>
				<Link to="/work">
					<h1 className="flex items-center text-white no-underline">
						<span className="text-xl font-bold tracking-tight">Work</span>
					</h1>
				</Link>
			</div>
		</header>
	);
}

export default Header;
