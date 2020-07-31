import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { Home } from '../components/Home';

const Router = () => (
	<Route path='/' component={Home} />
);

export default Router;
