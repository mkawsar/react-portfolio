import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class MainMenu extends Component {
	render() {
		return (
			<nav id="colorlib-main-menu" role="navigation" className="navbar">
				<div id="navbar" className="collapse">
					<ul>
						<li>
							<Link to="/">
								<span>Home</span>
							</Link>
						</li>
						<li>
							<Link to="/about">
								<span>About</span>
							</Link>
						</li>
						<li>
							<a href="#">
								<span>Education</span>
							</a>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}
