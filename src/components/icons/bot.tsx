import { component$, useStylesScoped$ } from "@builder.io/qwik";

import styles from "./bot.css?inline";

import logo from "./logo.svg"; 

export const BotLogo = component$(() => {
  useStylesScoped$(styles);
  return (
    <div class={"logo"}>
      <div class={"icon"}>
        <img width={30} height={30} src={logo} />
      </div>

      <h1>Carmen</h1>
    </div>
  );
});
