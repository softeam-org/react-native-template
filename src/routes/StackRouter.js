import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Main from '../pages/Main';

const { Navigator, Screen } = createStackNavigator();

const StackRouter = () => {
	return (
		<Navigator>
			<Screen name="Main" component={Main} />
		</Navigator>
	);
};

export default StackRouter;
