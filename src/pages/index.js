import React from 'react';
import { Link } from 'gatsby';

function IndexPage() {
	return (
		<div>
			<Link to="/about" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
				Check out my site
			</Link>
		</div>
	);
}

export default IndexPage;
