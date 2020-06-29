import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

function ContactPage() {
	return (
		<Layout>
			<SEO keywords={[ `gatsby`, `tailwind`, `react`, `tailwindcss` ]} title="Contact" />
			<section>
				<form
					method="post"
					className="mx-auto md:w-1/2"
					action="https://getform.io/f/450e7ab2-0c46-43e9-a20b-bb070b56c8f9"
				>
					<p className="mb-8 leading-loose">
						Have a project you need help with, a role I&aps;d be a great fit for, or do you just wanna chat?
						Fill out the form below and I&apos;ll get back to you shortly.
						<a
							className="font-bold text-gray-700 no-underline"
							href="https://github.com/tailwindcss/custom-forms"
							target="_blank"
							rel="noopener noreferrer"
						/>
					</p>

					<label className="block mb-2 text-xs font-bold uppercase" htmlFor="first-name">
						First Name
					</label>

					<input
						className="w-full mb-6 form-input"
						id="first-name"
						placeholder="Bill"
						type="text"
						name="first-name"
					/>

					<label className="block mb-2 text-xs font-bold uppercase" htmlFor="last-name">
						Last Name
					</label>

					<input
						className="w-full mb-6 form-input"
						id="last-name"
						placeholder="Murray"
						type="text"
						name="last-name"
					/>

					<label className="block mb-2 text-xs font-bold uppercase" htmlFor="last-name">
						Email
					</label>

					<input
						className="w-full mb-6 form-input"
						id="email"
						placeholder="bmurray@gmail.com"
						type="text"
						name="email"
					/>

					<label className="block mb-2 text-xs font-bold uppercase" htmlFor="message" name="message">
						Message
					</label>

					<textarea
						className="w-full mb-6 form-textarea"
						id="message"
						placeholder="Say something..."
						rows="8"
						name="message"
					/>

					<button className="px-4 py-2 text-sm font-bold text-white bg-gray-700 border-b-4 border-gray-800 rounded hover:border-gray-700 hover:bg-gray-600">
						Submit
					</button>
				</form>
			</section>
		</Layout>
	);
}

export default ContactPage;
