import { togglePathFuncGen } from '../../utils';

export const layout = {
  state: {
    container: {
      expanded: true,
    },
  },
  reducers: {
    toggleContainer: togglePathFuncGen('container.expanded'),
  },
};
