import 'react-native';
import React from 'react';
import { create, act } from 'react-test-renderer';
import { Provider } from 'react-redux';

import Main from '../../../src/pages/Main';
import store from '../../../src/stores';

describe('Main test', () => {
	let mainRendered;
	beforeAll(async () => {
		await act(async () => {
			mainRendered = create(
				<Provider store={store}>
					<Main />
				</Provider>,
			);
		});
	});

	it('rendered correctly', () => {
		const mainRenderedAsJSON = mainRendered.toJSON();

		expect(mainRenderedAsJSON).toMatchSnapshot();
	});
});
