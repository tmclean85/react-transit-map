import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const Layout = ({ children }) => (
  <div className="appContentWrapper">
    <div className="appContent">
      {children}
    </div>
    <div className="app-footer">
      <p>dis map</p>
    </div>  
  </div>
);

Layout.defaultProps = {
  children: null,
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
