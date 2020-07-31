import React, { Component } from 'react'

export default class Footer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			year: new Date().getFullYear().toString()
		}
	}
	render() {
		return (
			<div className="colorlib-footer">
				<p>
					<small>&copy; Copyright &copy; {this.state.year},  All rights reserved</small>
				</p>
				<ul>
					<li><a href="#"><i className="icon-facebook2"></i></a></li>
					<li><a href="#"><i className="icon-twitter2"></i></a></li>
					<li><a href="#"><i className="icon-instagram"></i></a></li>
					<li><a href="#"><i className="icon-linkedin2"></i></a></li>
				</ul>
			</div>
		)
	}
}
