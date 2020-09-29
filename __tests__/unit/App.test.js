import 'react-native';
import React from 'react';
import { create, act } from 'react-test-renderer';

import App from '../../src';

describe('App test', () => {
	let appRendered;
	beforeAll(async () => {
		await act(async () => {
			appRendered = create(<App />);
		});
	});

	it('rendered correctly', () => {
		const appRenderedAsJSON = appRendered.toJSON();

		expect(appRenderedAsJSON).toMatchSnapshot();
	});
});
