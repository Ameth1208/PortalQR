import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { BotLogo } from "../icons/bot";
import styles from "./header.css?inline";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <header>
      <div class="logo">
        <a
          href="https://gamma-studio-web.web.app/"
          target="_blank"
          title="qwik"
        >
          <BotLogo />
        </a>
      </div>
      <ul>
        <li>
          <img
            src="https://www.freepnglogos.com/uploads/logo-ig-png/logo-ig-instagram-new-logo-vector-download-13.png"
            alt=""
            width={20}
            height={20}
          />
          <a
            href="https://instagram.com/ameth12_08?igshid=NGExMmI2YTkyZg=="
            target="_blank"
          >
            Instagram
          </a>
        </li>
        <li>
          <img
            src="https://www.freepnglogos.com/uploads/facebook-logo-icon/facebook-logo-icon-file-facebook-icon-svg-wikimedia-commons-4.png"
            alt=""
            width={20}
            height={20}
            
          />
          <a
            href="https://instagram.com/ameth12_08?igshid=NGExMmI2YTkyZg=="
            target="_blank"
          >
            Facebook
          </a>
        </li>
      </ul>
    </header>
  );
});
