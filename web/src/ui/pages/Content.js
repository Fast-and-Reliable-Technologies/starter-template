import React from 'react';

export const NotFound = () => <Content title="404 :: Not Found" />;
export const ComingSoon = () => <Content title="Coming Soon" />;

const Content = ({ title, children }) => {
  return (
    <div>
      {!!title && (
        <div className="text-center text-muted display-1">{title}</div>
      )}
      {children}
    </div>
  );
};

export default Content;
