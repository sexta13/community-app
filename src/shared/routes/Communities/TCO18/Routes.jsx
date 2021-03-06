/**
 * Routing of TCO18 Community.
 */

import ContentfulRoute from 'components/Contentful/Route';
import Error404 from 'components/Error404';
import Header from 'containers/tc-communities/Header';
import PT from 'prop-types';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import headerTheme from 'components/tc-communities/communities/tco/themes/header.scss';

export default function TCO18({ base }) {
  return (
    <Route
      component={({ match }) => (
        <div>
          <Header
            baseUrl={base}
            pageId={match.params.pageId || 'home'}
            theme={headerTheme}
          />
          <Switch>
            {/* Competition Rules */}
            <ContentfulRoute
              path={`${base}/competition-rules`}
              error404={<Error404 />}
              id="7ILa27AKAXfnXvxG10YuUb"
            />
            {/* Tracks */}
            <ContentfulRoute
              path={`${base}/tracks`}
              error404={<Error404 />}
              id="fPxQ2U23WkkAPTEIj4WVM"
            />
            {/* Regional events */}
            <ContentfulRoute
              path={`${base}/regional-events`}
              error404={<Error404 />}
              id="3g6g5UDJXDM1qMZGH2cKY1"
            />
            {/* Home route */}
            <ContentfulRoute
              path={base || '/'}
              error404={<Error404 />}
              id="5MK8iGUoAy7CTwGsJ7QtIE"
            />
            <Route
              component={Error404}
              path={`${base}/:any`}
            />
          </Switch>
        </div>
      )}
      path={`${base}/:pageId?`}
    />
  );
}

TCO18.defaultProps = {
  base: '',
};

TCO18.propTypes = {
  base: PT.string,
};
