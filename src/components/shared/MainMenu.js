import React, { Component } from 'react'

export default class MainMenu extends Component {
	render() {
		return (
			<nav id="colorlib-main-menu" role="navigation" className="navbar">
				<div id="navbar" className="collapse">
					<ul>
						<li>
							<a href="#">
								<span>Home</span>
							</a>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}
