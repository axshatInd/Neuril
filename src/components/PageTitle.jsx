import { Helmet } from 'react-helmet';
import React from 'react';

const PageTitle = ({ title }) => {
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
};

export default PageTitle;
