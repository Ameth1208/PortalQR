import { component$, useStylesScoped$ } from "@builder.io/qwik";

import styles from "./bot.css?inline";


//Logo se puede reemplazar por lo que sea
import logo from "./../../assets/logo.png";

export const BotLogo = component$(() => {
  useStylesScoped$(styles);
  return (
    <div class={"logo"}>
      <img
        width={30}
        height={30}
        src={logo}
      />
      <h1>Chat Bot</h1>
    </div>
  );
});
