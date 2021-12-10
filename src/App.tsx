//  *******************************************
//  * VofSwords' personal portfolio website   *
//  * Copyright (C) 2021-present VofSwords    *
//  *******************************************

import c from "./App.module.css";
import logo from './brending/blue-smooth-logo.svg';
import { FC } from "react";


const App: FC = () => {

  return <div className={c.App}>
      <header className={c.appHeader}>
        <img src={logo} className={c.appLogo} alt="logo" />
          <h1>VofSwords</h1>
      </header>
  </div>
};

export default App;