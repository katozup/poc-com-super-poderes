import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { mdrEngine } from '@zup-mgm/mdr-engine';
import { useSelector } from 'react-redux';

async function routesBuilder(payload) {
  const pages = await pagesBuilder(payload.whiteLabel.routes);
  const routes = pages.map((page) => {
    return (
      <Route
        exact
        path={page.routeUrl}
        key={page.id}
        render={() => page.page}
      />
    );
  });
  return routes;
}

async function pagesBuilder(routesJson) {
  const validRoutes = routesJson.filter((route) => route.page != null);
  return Promise.all(
    validRoutes.map(async (route, index) => ({
      id: index,
      routeUrl: route.routeUrl,
      page: await mdrEngine(route.page),
    }))
  );
}

function importCssTheme(cssTheme) {
  if (cssTheme) {
    require(`../../../../libs/shared/assets/src/assets/themes/${cssTheme}.css`);
  }
}

export default function Routes() {
  const [appRoutes, setAppRoutes] = useState();
  const payload = useSelector((state) => state.app.sduiPayload);
  importCssTheme(payload.whiteLabel.cssTheme);

  const savePageToState = async () => {
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
        <Redirect
          from='*'
          to={{
            pathname: '',
            search: window.location.search,
          }}
        />
      </Switch>
    </BrowserRouter>
  );
}
