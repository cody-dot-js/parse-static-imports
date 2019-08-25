import React from "react";
import { render } from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "./really/long/import/ea/ut/exercitation/commodo/ad/ea/reprehenderit/nisi/deserunt/sint/ipsum/consectetur/occaecat/dolor/minim/dolor/consectetur/ad/reprehenderit/aute/nisi/duis/labore/eu/reprehenderit/deserunt/incididunt/quis/deserunt/ex/incididunt/occaecat/magna/veniam/sunt/anim/id/qui/non/consectetur/est/ad/laboris/velit/non/irure/cillum/sint/consectetur/cillum/deserunt/id/do/dolor/labore/pariatur/qui/est/qui/incididunt/dolore/eu/cupidatat/ea/pariatur/aliqua/laboris/excepteur/eiusmod/culpa/voluptate/ullamco/sint/dolor/do/incididunt/aliquip/irure/id/in/occaecat/duis/id/et/magna/id/enim/officia/aliquip/exercitation/cupidatat/quis/ipsum/non/incididunt/adipisicing/voluptate/quis/nostrud/veniam/magna/esse/excepteur/officia/lorem/ipsum/officia/fugiat/proident/amet/culpa/esse/amet/sit/esse/dolor/commodo/voluptate/excepteur/labore/cupidatat/ad/eu/ad/dolor/id/aliqua/in/veniam/laboris/excepteur/exercitation/officia/aliquip/elit/aliquip/dolore/sit/fugiat/fugiat/officia/fugiat/commodo/amet/laboris/nostrud";

render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
