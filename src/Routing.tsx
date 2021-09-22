import React, { useState } from "react";
import { useEffect } from "react";
import {Route, Router} from 'react-router';
import {history} from 'utils/history';
import {WithSidebarLayout} from 'layouts/WithSidebarLayout';

const Routing = () => {
  return (
    <Router history={history}>
        <WithSidebarLayout>
          <Route path='*' component={() => <p>component</p>} />
        </WithSidebarLayout>
    </Router>
  );
};

export default Routing;
