import { lazy, LazyExoticComponent } from "react";
import { NoLazy } from "../01-lazyload/pages/NoLazy";
import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages/index";

type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}

const LazyLayout = lazy(
  () =>
    import(
      /* webpackChunkName: "LazyLayout" */ "../01-lazyload/layout/LazyLayout"
    )
);
const Lazy2 = lazy(
  () =>
    import(/* webpackChunkName: "LazyPage2" */ "../01-lazyload/pages/LazyPage2")
);
const Lazy3 = lazy(
  () =>
    import(/* webpackChunkName: "LazyPage3" */ "../01-lazyload/pages/LazyPage3")
);

export const routes: Route[] = [
  {
    path: "/lazyload/*",
    to: "/lazyload/",
    Component: LazyLayout,
    name: "Lazy Layout",
  },
  {
    path: "no-lazy",
    to: "/no-lazy",
    Component: NoLazy,
    name: "No Lazy",
  },
];

export const lazyRoutes: Route[] = [
  {
    path: "/lazy1",
    to: "lazy1",
    Component: LazyPage1,
    name: "Lazy 1",
  },
  {
    path: "/lazy2",
    to: "lazy2",
    Component: LazyPage2,
    name: "Lazy 2",
  },
  {
    path: "/lazy3",
    to: "lazy3",
    Component: LazyPage3,
    name: "Lazy 3",
  },
];
