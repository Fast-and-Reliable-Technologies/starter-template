import React from 'react';
import AppLayout, { toLink, toView } from '../components/AppLayout';
import { ComingSoon } from '../pages/Content';

const VIEWS = [
  toView(toLink('theme', 'Appearance'), <ComingSoon />),
  toView(toLink('security', 'Security'), <ComingSoon />),
];

const SettingsApp = () => {
  return (
    <div>
      <AppLayout title="Settings" path="/settings" views={VIEWS} />
    </div>
  );
};

export default SettingsApp;
