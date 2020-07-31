import React from 'react';
import { MainMenu, Footer } from './components/shared';


class App extends React.Component {
	render() {
		return (
			<div id="colorlib-page">
				<div className="container-wrap">
					<section>
						<a href="#" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar"
							aria-expanded="false" aria-controls="navbar"><i></i></a>
						<aside id="colorlib-aside" role="complementary" className="border js-fullheight">

							<div className="text-center">
								<div className="author-img"></div>
								<h1 id="colorlib-logo">
									<a href="index.html">Hello</a>
								</h1>
								<span className="position"><a href="#">SF</a> BD</span>
							</div>
							<MainMenu />

							<Footer />

						</aside>
					</section >
					<div id="colorlib-main">
						<router-view></router-view>
					</div>
				</div>
			</div>
		);
	}
}
export default App
