import React from "react";
import { Helmet } from "react-helmet";
import { App } from "../components/app";

export default function Index() {
  return (
    <div>
      <Helmet>
        <title>Game</title>
      </Helmet>
      <App></App>
    </div>
  );
}
