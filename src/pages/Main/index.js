import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { ReducerActions } from '../../stores/reducers/reducer';

import styles from './styles';

const Main = () => {
	const reducer = useSelector((state) => state.reducer);
	const dispatch = useDispatch();

	function handleTranslate() {
		dispatch(ReducerActions.translateMsg());
	}

	return (
		<View style={styles.container}>
			<Text>{reducer.msg}</Text>
			<TouchableOpacity style={styles.btn} onPress={handleTranslate}>
				<Text style={styles.btnText}>Traduzir</Text>
			</TouchableOpacity>
		</View>
	);
};

export default Main;
