import PropTypes from 'prop-types';
import React from 'react';
import resume from '../images/resume.pdf'

import Header from './header';

function Layout({ children }) {
	return (
		<div className="flex flex-col min-h-screen font-sans text-gray-900">
			<Header />

			<main className="flex-1 w-full max-w-4xl px-4 py-8 mx-auto md:px-8 md:py-16">{children}</main>

			<footer className="bg-teal-700">
				<nav className="flex justify-center max-w-4xl p-4 mx-auto text-sm md:p-8">
				<a className="flex items-center text-white no-underline transform hover:-translate-y-1 hover:scale-110 m-5" href="https://www.linkedin.com/in/kevin-fergus/">
						<span className="text-2xl tracking-tight">LinkedIn</span>
				</a>
				<a className="flex items-center text-white no-underline transform hover:-translate-y-1 hover:scale-110 m-5" href="https://github.com/kevinfergus">
						<span className="text-2xl tracking-tight">GitHub</span>
				</a>

				<a className="flex items-center text-white no-underline transform hover:-translate-y-1 hover:scale-110 m-5" href={resume}>
						<span className="text-2xl tracking-tight">Resume</span>
				</a>

				<a className="flex items-center text-white no-underline m-5">
						<span className="tracking-tight">(847)322-8527</span>
				</a>
				<a className="flex items-center text-white no-underline transform m-5">
						<span className="tracking-tight"> kevinfergus89@gmail.com </span>
				</a>



				</nav>
			</footer>
		</div>
	);
}

Layout.propTypes = {
	children: PropTypes.node.isRequired
};

export default Layout;
