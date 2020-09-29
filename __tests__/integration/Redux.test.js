import 'react-native';
import React from 'react';
import { create, act } from 'react-test-renderer';
import { TouchableOpacity } from 'react-native';

import App from '../../src';

describe('Redux test', () => {
	let appRendered;
	beforeAll(async () => {
		await act(async () => {
			appRendered = create(<App />);
		});
	});

	it('rendered correctly', () => {
		const appRenderedAsJSON = appRendered.toJSON();
		const appRenderedAsString = JSON.stringify(appRenderedAsJSON);

		expect(appRenderedAsString.includes('Hello World')).toBe(true);
	});

	it('button pressed', async () => {
		await act(async () => {
			appRendered.root.findByType(TouchableOpacity).props.onPress();
		});

		const appRenderedAsJSON = appRendered.toJSON();
		const appRenderedAsString = JSON.stringify(appRenderedAsJSON);

		expect(appRenderedAsString.includes('Olá Mundo')).toBe(true);
	});
});
