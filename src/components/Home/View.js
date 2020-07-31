import React, { Component } from 'react'

export default class Home extends Component {

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
							<div class="row">
								<div data-animate-effect="fadeInLeft" class="col-md-3 animate-box fadeInLeft animated">
									<div class="services color-1">
										<span class="icon2"><i class="icon-bulb"></i></span> <h3>Graphic Design</h3></div></div><div data-animate-effect="fadeInLeft" class="col-md-3 animate-box fadeInLeft animated"><div class="services color-2"><span class="icon2"><i class="icon-globe-outline"></i></span> <h3>Web Design</h3></div></div><div data-animate-effect="fadeInLeft" class="col-md-3 animate-box fadeInLeft animated"><div class="services color-3"><span class="icon2"><i class="icon-data"></i></span> <h3>Software</h3></div></div><div data-animate-effect="fadeInLeft" class="col-md-3 animate-box fadeInLeft animated"><div class="services color-4"><span class="icon2"><i class="icon-phone3"></i></span> <h3>Application</h3></div></div>
							</div>
							<div class="row"><div data-animate-effect="fadeInLeft" class="col-md-12 animate-box fadeInLeft animated"><div class="hire"><h2>I am happy to know you <br />that 300+ projects done sucessfully!</h2><a href="#" class="btn-hire">Hire me</a></div></div></div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}
