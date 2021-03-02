import { Link } from 'gatsby';
import React from 'react';

function Header() {
	return (
		<header className="bg-teal-700">
			<div className="flex flex-wrap items-center justify-between max-w-4xl p-4 mx-auto md:p-8">
				<Link to="/">
					<h1 className="flex items-center text-white no-underline transform hover:-translate-y-1 hover:scale-110">
						<span className="text-xl tracking-tight">Home</span>
					</h1>
				</Link>
				<Link to="/contact">
					<h1 className="flex items-center text-white no-underline transform hover:-translate-y-1 hover:scale-110">
						<span className="text-xl tracking-tight">Contact</span>
					</h1>
				</Link>
				<Link to="/projects">
					<h1 className="flex items-center text-white no-underline transform hover:-translate-y-1 hover:scale-110">
						<span className="text-xl tracking-tight">Projects</span>
					</h1>
				</Link>
				<Link to="/media">
					<h1 className="flex items-center text-white no-underline transform hover:-translate-y-1 hover:scale-110">
						<span className="text-xl tracking-tight">Media</span>
					</h1>
				</Link>
			</div>
		</header>
	);
}

export default Header;
