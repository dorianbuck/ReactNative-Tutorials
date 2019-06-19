import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { increaseCount, decreaseCount } from '../actions';
class Counter extends Component {
	render() {
		return (
			<View style={{ justifyContent: 'center', alignItems: 'center' }}>
				<Text style={{ fontSize: 32 }}> {this.props.count} </Text>
			</View>
		);
	}
}

// Nối các states vào props (values) của View Component
const mapStateToProps = (state) => ({
	// this.props.count
	count: state.counterReducer.count,
});
// Nối các functions vào props (functions) của View Component
const mapDispatchToProps = (dispatch) => ({
	// this.props.increaseCount(5);
	// increaseCount: (number) => dispatch(increaseCount(number)),
	// decreaseCount: (number) => dispatch(decreaseCount(number)),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Counter);
