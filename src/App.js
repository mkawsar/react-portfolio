import React from 'react';
import { Sidebar } from './components/shared';
import RouterView from './routes';


class App extends React.Component {
	render() {
		return (
			<div id="colorlib-page">
				<div className="container-wrap">
					<Sidebar />
					<div id="colorlib-main">
						<RouterView />
					</div>
				</div>
			</div>
		);
	}
}
export default App
