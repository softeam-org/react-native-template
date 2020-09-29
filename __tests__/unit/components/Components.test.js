import 'react-native';
import React from 'react';
import { create, act } from 'react-test-renderer';

import Component from '../../../src/components/Component';

describe('Main test', () => {
	let componentRendered;
	beforeAll(async () => {
		await act(async () => {
			componentRendered = create(<Component />);
		});
	});

	it('rendered correctly', () => {
		const componentRenderedAsJSON = componentRendered.toJSON();

		expect(componentRenderedAsJSON).toMatchSnapshot();
	});
});
