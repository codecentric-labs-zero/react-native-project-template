import AppNavigationActionTypes from './AppNavigationActionTypes';

expect.extend({
  toHaveNamespace(received, argument) {
    let pass = received.startsWith(argument);
    if (pass) {
      return {
        pass: true,
        message: () => `expected ${received} not to be namespaced to ${argument}.`
      };
    } else {
      return {
        pass: false,
        message: () => `expected ${received} to be namespaced to ${argument}.`
      };
    }
  }
});

describe('AppNavigationActionTypes', () => {
  it('are namespaced', () => {
    Object.keys(AppNavigationActionTypes).forEach(actionType => {
      expect(AppNavigationActionTypes[actionType]).toHaveNamespace('APP_NAVIGATION');
    });
  });
});
