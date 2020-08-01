import React, { Component } from 'react'

export default class View extends Component {
	componentDidMount() {
		console.log('test');
	}
	render() {
		return (
			<section className="colorlib-about" data-section="about">
				<div className="colorlib-narrow-content">
					<div className="row">
						<div className="col-md-12">
							<div className="row row-bottom-padded-sm" data-animate-effect="fadeInLeft">
								<div className="col-md-12">
									<div className="about-desc">
										<span className="heading-meta">About Me</span>
										<h2 className="colorlib-heading">WHO AM I?</h2>
										<div className="colorlib-about-description">
											Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
										</div>
									</div>
								</div>
							</div>
							<div className="row">
								<div data-animate-effect="fadeInLeft" className="col-md-3 animate-box fadeInLeft animated">
									<div className="services color-1">
										<span className="icon2"><i className="icon-bulb"></i></span>
										<h3>Graphic Design</h3>
									</div>
								</div>
								<div data-animate-effect="fadeInLeft" className="col-md-3 animate-box fadeInLeft animated">
									<div className="services color-2">
										<span className="icon2"><i className="icon-globe-outline"></i></span>
										<h3>Web Design</h3>
									</div>
								</div>
								<div data-animate-effect="fadeInLeft" className="col-md-3 animate-box fadeInLeft animated">
									<div className="services color-3">
										<span className="icon2"><i className="icon-data"></i></span>
										<h3>Software</h3>
									</div>
								</div>
								<div data-animate-effect="fadeInLeft" className="col-md-3 animate-box fadeInLeft animated">
									<div className="services color-4">
										<span className="icon2"><i className="icon-phone3"></i></span>
										<h3>Application</h3>
									</div>
								</div>
							</div>
							<div className="row"><div data-animate-effect="fadeInLeft" className="col-md-12 animate-box fadeInLeft animated"><div className="hire"><h2>I am happy to know you <br />that 300+ projects done sucessfully!</h2><a href="#" className="btn-hire">Hire me</a></div></div></div>
						</div>
					</div>
				</div>
			</section>
		)
	}
}
