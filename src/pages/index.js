import React from 'react';
import { Link } from 'gatsby';

function IndexPage() {
	return (
		<div className="container mx-auto">
			<Link
				to="/about"
				className="object none object-center bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded"
			>
				Check out my site
			</Link>
		</div>
	);
}

export default IndexPage;
