import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import StackRouter from './StackRouter';

const Routes = () => {
	return (
		<NavigationContainer>
			<StackRouter />
		</NavigationContainer>
	);
};

export default Routes;
