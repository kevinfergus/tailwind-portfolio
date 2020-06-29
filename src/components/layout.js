import PropTypes from 'prop-types';
import React from 'react';
import linkedIn from '../images/linkedIn.png';
import github from '../images/github.png';

import Header from './header';

function Layout({ children }) {
	return (
		<div className="flex flex-col min-h-screen font-sans text-gray-900">
			<Header />

			<main className="flex-1 w-full max-w-4xl px-4 py-8 mx-auto md:px-8 md:py-16">{children}</main>

			<footer className="bg-teal-700">
				<nav className="flex justify-center max-w-4xl p-4 mx-auto text-sm md:p-8">
					<p className="text-white h-20 w-20 m-5">
						<a
							className="font-bold no-underline"
							href="https://www.linkedin.com/in/kevin-fergus/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img src={linkedIn} />
						</a>
					</p>

					<p className="text-white h-20 w-20 m-5">
						<a
							className="font-bold text-white no-underline"
							href="https://github.com/kevinfergus"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img src={github} />
						</a>
					</p>
				</nav>
			</footer>
		</div>
	);
}

Layout.propTypes = {
	children: PropTypes.node.isRequired
};

export default Layout;
