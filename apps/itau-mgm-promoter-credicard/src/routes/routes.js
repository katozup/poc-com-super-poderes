import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { mdrEngine } from '@zup-mgm/mdr-engine';


async function routesBuilder(payload) {
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
  const validRoutes = routesJson.filter((route) => route.page != null);
  return Promise.all(validRoutes.map(async (route, index) =>(
    {
      id: index,
      routeUrl: route.routeUrl,
      page: await mdrEngine(route.page)
    }
  )));
}

export default function Routes( { payload }) {
  const [appRoutes, setAppRoutes] = useState();

  const savePageToState = async() => {
    const pages = await routesBuilder(payload);
    setAppRoutes(pages);
  };

  useEffect(() => {
    savePageToState();
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        {appRoutes}
        <Redirect from='*' to='/' />
      </Switch>
    </BrowserRouter>
  );
}
