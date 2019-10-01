// app/javascript/packs/index.js
import React from "react";
import { render } from "react-dom";
import Provider from "../components/Provider";
import Library from "../components/Library";
import UserInfo from "../components/UserInfo";

render(
  <div>
    <Provider>
      <UserInfo />
      <Library />
    </Provider>
  </div>,
  document.querySelector("#root")
);
