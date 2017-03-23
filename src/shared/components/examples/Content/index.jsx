/**
 * The DevGreeting component shows basic info about the Topcoder Community App
 * and gives links to various examples for newcomer developers. It also serves
 * as an example of simple presentational ReactJS component itself.
 */

import React from 'react';
import { Link } from 'react-router-dom';

import './style.scss';

export default function Content() {
  return (
    <div styleName="Content">
      <h1>Topcoder Community App</h1>
      <p>Isomorphic ReactJS App for new version of Topcoder community website.
        Technological stack includes:</p>
      <ul>
        <li>
          Babel with latest JS standard support both client- and server-side;
        </li>
        <li>ESlint (AirBnB style, run with <code>$ npm run lint:js</code>);</li>
        <li>ExpressJS server;</li>
        <li>
          Hot reload of JS code and SCSS styles in dev environment (start it
          with <code>$ npm run dev</code>);
        </li>
        <li>
          Loading of .svg assets as ReactJS components with
          <code>babel-plugin-inline-react-svg</code>;
        </li>
        <li>ReactJS;</li>
        <li>
          React CSS Modules (with
          <code>babel-plugin-react-css-modules</code>);
        </li>
        <li>
          Redux with Flex Standard Actions, redux-promise middleware,
          and a custom pattern of server-side data fetching;
        </li>
        <li>SCSS styles;</li>
        <li>
          Stylelint for SCSS (standard Stylelint style, run with
          <code>$ npm run lint:scss</code>;
        </li>
        <li>Webpack;</li>
      </ul>
      <h3>Examples</h3>
      <ul>
        <li>
          <Link to="/examples/data-fetch">Data Fetch</Link> - Demonstrates how data fetching should be implemented in
          isomorphic way, using Redux with Flux Standard Actions and
          promise;
        </li>
      </ul>
    </div>
  );
}
