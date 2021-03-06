/* eslint-disable no-unused-vars */
import APIFunction from 'services';

export default {
  namespace: 'example',

  state: { text: 'Welcome example!!!' },

  subscriptions: {
    setup({ dispatch, history }) {
      // eslint-disable-line
    },
  },

  effects: {
    * fetch({ payload }, { call, put }) {
      const response = yield call(APIFunction.get);
      yield put({ type: 'save', payload: response });
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },
};
