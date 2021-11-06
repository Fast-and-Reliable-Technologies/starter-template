import React from 'react';
import _ from 'lodash';
import classNames from 'classnames';

import { BiExpand, BiCollapse } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import AppHeader from './layout/AppHeader';
import AppRoutes from './layout/AppRoutes';

const getContainerClassnames = (expanded) => ({
  container: !expanded,
  'container-fluid': expanded,
});

const App = () => {
  const expanded = useSelector((state) =>
    _.get(state, 'layout.container.expanded', false),
  );
  const dispatch = useDispatch();
  const toggleContainer = () => dispatch.layout.toggleContainer();
  return (
    <div>
      <AppHeader />
      <div className="float-right mt-2 pe-5">
        <button className="btn btn-outline-primary" onClick={toggleContainer}>
          {expanded ? <BiCollapse /> : <BiExpand />}
        </button>
      </div>
      <div className={classNames('p-3 mt-5', getContainerClassnames(expanded))}>
        <AppRoutes />
      </div>
    </div>
  );
};

export default App;
