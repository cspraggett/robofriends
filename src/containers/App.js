import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';

import { setSearchField, requestRobots } from '../actions';

const mapStateToProps = (state) => {
	return {
		searchField: state.searchRobots.searchField,
		robots: state.requestRobots.robots,
		isPending: state.requestRobots.isPending,
		error: state.requestRobots.error,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
		onRequestRobots: () => dispatch(requestRobots),
	};
};

function App(props) {
	// const [robots, setRobots] = useState([]);
	// const [searchfield, setSearchfield] = useState('');
	const [count, setCount] = useState(0);

	const { searchField, onSearchChange, robots, isPending } = props;

	useEffect(() => {
		props.onRequestRobots();
		// fetch('https://jsonplaceholder.typicode.com/users')
		// 	.then((response) => response.json())
		// 	.then((users) => {
		// 		setRobots(users.map(({ id, name, email }) => ({ id, name, email })));
		// 	})
		// 	.catch((err) => console.error(err));
	}, []);

	// const onSearchChange = (event) => {
	// 	setSearchfield(event.target.value);
	// };

	const filteredRobots = robots.filter((robot) =>
		robot.name.toLowerCase().includes(searchField.toLowerCase())
	);

	return isPending ? (
		<h1>Loading</h1>
	) : (
		<div className="tc">
			<h1 className="f1">RoboFriends</h1>
			<button onClick={() => setCount(count + 1)}>Click Me!</button>
			<SearchBox searchChange={onSearchChange} />
			<Scroll>
				<ErrorBoundry>
					<CardList robots={filteredRobots} />;
				</ErrorBoundry>
			</Scroll>
		</div>
	);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
