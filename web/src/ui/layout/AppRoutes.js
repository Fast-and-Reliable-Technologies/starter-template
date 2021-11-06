import React from 'react';

import { useNavigate } from 'react-router-dom';

import { Route, Routes } from 'react-router-dom';
import { ComingSoon, NotFound } from '../pages/Content';
import SettingsApp from '../settings/SettingsApp';

const Redirect = ({ to }) => {
  const navigate = useNavigate();
  React.useEffect(() => {
    navigate(to);
  }, [navigate, to]);
  return <></>;
};

const AppRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Redirect to="/home" />} />
      <Route path="/home" element={<ComingSoon />} />
      <Route path="/settings/*" element={<SettingsApp />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
