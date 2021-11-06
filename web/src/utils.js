import { curry } from 'ramda';
import _ from 'lodash';

export const copyToClipBoard = (copyText) =>
  navigator.clipboard.writeText(copyText);

export const togglePathFuncGen = curry((path, state) => {
  const newState = _.cloneDeep(state);
  _.set(newState, path, !_.get(newState, path, false));
  return newState;
});
