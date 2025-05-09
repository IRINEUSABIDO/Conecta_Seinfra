/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as LoginImport } from './routes/login'
import { Route as CadastroImport } from './routes/cadastro'
import { Route as IndexImport } from './routes/index'

// Create Virtual Routes

const RegistrarOrdemLazyImport = createFileRoute('/registrarOrdem')()

// Create/Update Routes

const RegistrarOrdemLazyRoute = RegistrarOrdemLazyImport.update({
  id: '/registrarOrdem',
  path: '/registrarOrdem',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/registrarOrdem.lazy').then((d) => d.Route),
)

const LoginRoute = LoginImport.update({
  id: '/login',
  path: '/login',
  getParentRoute: () => rootRoute,
} as any)

const CadastroRoute = CadastroImport.update({
  id: '/cadastro',
  path: '/cadastro',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/cadastro': {
      id: '/cadastro'
      path: '/cadastro'
      fullPath: '/cadastro'
      preLoaderRoute: typeof CadastroImport
      parentRoute: typeof rootRoute
    }
    '/login': {
      id: '/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof LoginImport
      parentRoute: typeof rootRoute
    }
    '/registrarOrdem': {
      id: '/registrarOrdem'
      path: '/registrarOrdem'
      fullPath: '/registrarOrdem'
      preLoaderRoute: typeof RegistrarOrdemLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/cadastro': typeof CadastroRoute
  '/login': typeof LoginRoute
  '/registrarOrdem': typeof RegistrarOrdemLazyRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/cadastro': typeof CadastroRoute
  '/login': typeof LoginRoute
  '/registrarOrdem': typeof RegistrarOrdemLazyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/cadastro': typeof CadastroRoute
  '/login': typeof LoginRoute
  '/registrarOrdem': typeof RegistrarOrdemLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/cadastro' | '/login' | '/registrarOrdem'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/cadastro' | '/login' | '/registrarOrdem'
  id: '__root__' | '/' | '/cadastro' | '/login' | '/registrarOrdem'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  CadastroRoute: typeof CadastroRoute
  LoginRoute: typeof LoginRoute
  RegistrarOrdemLazyRoute: typeof RegistrarOrdemLazyRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  CadastroRoute: CadastroRoute,
  LoginRoute: LoginRoute,
  RegistrarOrdemLazyRoute: RegistrarOrdemLazyRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/cadastro",
        "/login",
        "/registrarOrdem"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/cadastro": {
      "filePath": "cadastro.tsx"
    },
    "/login": {
      "filePath": "login.tsx"
    },
    "/registrarOrdem": {
      "filePath": "registrarOrdem.lazy.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
