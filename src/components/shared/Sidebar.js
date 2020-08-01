import React, { Component } from 'react'
import Footer from './Footer'
import MainMenu from './MainMenu'

export default class Sidebar extends Component {
	render() {
		return (
			<section>
				<a href="#" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar"
					aria-expanded="false" aria-controls="navbar"><i></i></a>
				<aside id="colorlib-aside" role="complementary" className="border js-fullheight">
					<div className="text-center">
						<div className="author-img" style={{ "backgroundImage": "url(static/images/about.jpg)" }}></div>
						<h1 id="colorlib-logo">
							<a href="index.html">Jackson Ford</a>
						</h1>
						<span className="position">
							<a href="#">UI/UX/Designer</a> in Philippines
							</span>
					</div>
					<MainMenu />

					<Footer />

				</aside>
			</section >
		);
	}
}
