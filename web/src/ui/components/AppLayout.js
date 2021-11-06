import React from 'react';

import { Outlet, Route, Routes } from 'react-router';
import { NavLink } from 'react-router-dom';
import { ComingSoon, NotFound } from '../pages/Content';

export const toApp = (title, path, views) => ({ title, path, views });

/**
 *
 * @param {string} path Link path to the view. This should NOT include the app prefix.
 * @param {*} content Link content. Can be a string or react component.
 * @returns
 */
export const toLink = (path, content) => ({ path, content });

/**
 *
 * @param {object} link Link object used for building navigation
 * @param {string} link.path Link path to the view. This should NOT include the app prefix.
 * @param {*} link.content Link content. Can be a string or react component.
 * @param {*} element Content to be displayed at link route
 * @returns
 */
export const toView = (link, element) => ({ link, element });

const AppLayout = ({ title, path, views = [] }) => {
  return (
    <div>
      {title && <h2>{title}</h2>}
      <div className="row">
        <div className="col-3 border-right pe-2" style={{ minHeight: '60vh' }}>
          <nav className="nav nav-pills flex-column">
            {views.map(({ link }) => (
              <NavLink className="nav-link" to={link.path} key={link.path}>
                {link.content}
              </NavLink>
            ))}
          </nav>
        </div>
        <div className="col-9">
          <Routes>
            {views.map((view) => (
              <Route
                exact
                path={view.link.path}
                element={view.element || <ComingSoon />}
                key={view.link.path}
              />
            ))}
            <Route index component={<Outlet />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
