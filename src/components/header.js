import { Link } from 'gatsby';
import React, { useState } from 'react';

function Header() {
	const [ isExpanded, toggleExpansion ] = useState(false);

	return (
		<header className="bg-teal-700">
			<div className="flex flex-wrap items-center justify-between max-w-4xl p-4 mx-auto md:p-8">
				<Link to="/">
					<h1 className="flex items-center text-white no-underline">
						<span className="text-xl font-bold tracking-tight">Home</span>
					</h1>
				</Link>
				<Link to="/about">
					<h1 className="flex items-center text-white no-underline">
						<span className="text-xl font-bold tracking-tight">About</span>
					</h1>
				</Link>
				<Link to="/contact">
					<h1 className="flex items-center text-white no-underline">
						<span className="text-xl font-bold tracking-tight">Contact</span>
					</h1>
				</Link>

				<button
					className="flex items-center block px-3 py-2 text-white border border-white rounded md:hidden"
					onClick={() => toggleExpansion(!isExpanded)}
				>
					<svg className="w-3 h-3 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
						<title>Menu</title>
						<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
					</svg>
				</button>
			</div>
		</header>
	);
}

export default Header;
