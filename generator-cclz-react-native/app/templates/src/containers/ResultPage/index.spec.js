import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import React from 'React';
import renderer from 'react-test-renderer';

import ResultPage from './index';
import * as navigationActions from '../../reducers/navigation/actions';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('ResultPage', () => {

  it('has onBackButtonClick prop bound to function that dispatches BACK navigation action', () => {
    const store = mockStore({ app: {}, navigation: {}});
    const tree = renderer.create(<Provider store={store}><ResultPage /></Provider>);
    tree.toJSON().children[0].props.onPress();
    expect(store.getActions()[0]).toEqual(navigationActions.back());
  })

});
