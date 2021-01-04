import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import mdrEngine from '../mesozoicDecapodRevolutionEngine/mdrEngine';
import payload02 from '../payload_02.json';

async function pagesBuilder(routesJson) {
  return Promise.all(routesJson.map(async (page, index) =>(
    {
      id: index,
      link: page.rota,
      page: await mdrEngine(page.pagina)
    }
  )));
}

async function routesBuilder() {
  const pages = await pagesBuilder(payload02.rotas);
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
  console.log('routes',routes)
  return routes;
}

export default function Routes() {
  const [appRoutes, setAppRoutes] = useState(0);
  const builderNgineBoi = async() => {
    const pages = await routesBuilder();
    setAppRoutes(pages);
  };

  useEffect(() => {
    builderNgineBoi();
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        {appRoutes}
      </Switch>
    </BrowserRouter>
  );
}
