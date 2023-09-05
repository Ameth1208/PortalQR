import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { BotLogo } from "../icons/bot";
import styles from "./header.css?inline";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <header>
      <div class="logo">
        <a
          href="https://amethgalarcio.web.app/"
          target="_blank"
          title="gamastudio"
        >
          <BotLogo />
        </a>
      </div>
    </header>
  );
});
