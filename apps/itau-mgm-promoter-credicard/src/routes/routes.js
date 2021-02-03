import React from 'react';
import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { mdrEngine } from '@zup-mgm/mdr-engine';
import payload from '../payload_03.json';

async function routesBuilder() {
  const pages = await pagesBuilder(payload.whiteLabel.routes);
  const routes = pages.map(page =>
    {
      return <Route
        exact
        path={page.routeUrl}
        key={page.id}
        render={ () => (
          page.page
        )}
      />
    }
  )
  return routes;
}

async function pagesBuilder(routesJson) {
  return Promise.all(routesJson.map(async (page, index) =>(
    {
      id: index,
      routeUrl: page.routeUrl,
      page: await mdrEngine(page.page)
    }
  )));
}

export default function Routes() {
  const [appRoutes, setAppRoutes] = useState();

  const savePageToState = async() => {
    const pages = await routesBuilder();
    setAppRoutes(pages);
  };

  useEffect(() => {
    savePageToState();
  }, []);

  return (
    <BrowserRouter>
    <ul>
      <li>
        <Link to="/">home</Link>
      </li>
      <li>
        <Link to="/2">rota2</Link>
      </li>
      <li>
        <Link to="/3">rota3</Link>
      </li>

    </ul>
      <Switch>
        {appRoutes}
        <Redirect from='*' to='/' />
      </Switch>
    </BrowserRouter>
  );
}
