import React from 'react';
import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { mdrEngine } from '@zupmgm/mdr-engine';
import payload02 from '../payload_02.json';
import store from '../store';

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
  return routes;
}

async function pagesBuilder(routesJson) {
  return Promise.all(routesJson.map(async (page, index) =>(
    {
      id: index,
      link: page.rota,
      page: await mdrEngine(page.pagina, store)
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
