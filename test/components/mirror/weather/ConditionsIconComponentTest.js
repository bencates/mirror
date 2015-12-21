/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';

// Uncomment the following lines to use the react test utilities
// import TestUtils from 'react-addons-test-utils';
import createComponent from 'helpers/shallowRenderHelper';

import ConditionsIconComponent from 'components/mirror/weather/ConditionsIconComponent.js';

describe('ConditionsIconComponent', () => {
    let component;

    beforeEach(() => {
      component = createComponent(ConditionsIconComponent);
    });

    it('should have its component name as default className', () => {
      expect(component.props.className).to.equal('conditionsicon-component');
    });
});
