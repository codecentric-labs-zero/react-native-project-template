import * as AppReducers from './AppReducers';

describe('AppReducers', () => {
  it('contain all reducers', () => {
    expect(Object.keys(AppReducers)).toContain('appNavigation');
    expect(Object.keys(AppReducers)).toContain('registration');
  });
});
