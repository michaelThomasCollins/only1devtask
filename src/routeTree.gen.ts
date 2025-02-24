/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as UserImport } from './routes/user'
import { Route as IndexImport } from './routes/index'

// Create/Update Routes

const UserRoute = UserImport.update({
  path: '/user',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
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
    '/user': {
      id: '/user'
      path: '/user'
      fullPath: '/user'
      preLoaderRoute: typeof UserImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/user': typeof UserRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/user': typeof UserRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/user': typeof UserRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/user'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/user'
  id: '__root__' | '/' | '/user'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  UserRoute: typeof UserRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  UserRoute: UserRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/user"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/user": {
      "filePath": "user.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
