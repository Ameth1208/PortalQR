import { component$, useStylesScoped$ } from "@builder.io/qwik";

import styles from "./bot.css?inline";

import "./logo.png";

export const BotLogo = component$(() => {
  useStylesScoped$(styles);
  return (
    <div class={"logo"}>
      <img
        width={35}
        height={35}
        src="https://gamma-studio-web.web.app/assets/gs3d.svg"
      />
      <h1>WhatsApp Bot</h1>
    </div>
  );
});
