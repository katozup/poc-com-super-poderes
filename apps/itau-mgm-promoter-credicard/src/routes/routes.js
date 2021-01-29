import React from 'react';
import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom';
import { useState, useEffect } from 'react';
import mdrEngine from '../mdrEngine/mdrEngine';
import payload02 from '../payload_02.json';

async function routesBuilder() {
  const pages = await pagesBuilder(payload02.whiteLabel.routes);
  const routes = pages.map(page =>
    {
      return <Route
        exact
        path={page.link}
        key={page.id}
        // it should also possible to use 'component' property in case of any hooks incompatibility in the future?
        render={ () => (
          page.page
        )}
      />
    }
  )
  return routes;
}

async function pagesBuilder(routesJson) {
  const validRoutes = routesJson.filter((route) => route.page != null);
  return Promise.all(validRoutes.map(async (page, index) =>(
    {
      id: index,
      link: page.routeUrl,
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
