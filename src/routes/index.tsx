import { component$, useStylesScoped$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { QR } from "~/components/qr/qr";

import logo from "./../components/icons/logo.svg";
import style from "./index.css?inline";
import { BotLogo } from "~/components/icons/bot";

export default component$(() => {
  useStylesScoped$(style);

  return (
    <div class={"page"}>
      <div class={"qr-section"}>
        <BotLogo />
        
        <QR />
        <div class={"content"}>
          <h1>Whatsapp QR</h1>
          <p>Escanee el código QR, para darle acceso al Bot</p>
        </div>
      </div>

      {/* <div class={"qr-section intructions"}>
         <h1>Whatsapp QR</h1>
        <p>
          Para comenzar a aprovechar estas ventajas, solo necesitas escanear el
          código QR que hemos generado. Al hacerlo, estarás otorgando los
          permisos necesarios a nuestro bot para que empiece a trabajar de
          manera eficaz y personalizada en tu ambiente empresarial.
        </p> 
        
      </div> */}
    </div>
  );
});

export const head: DocumentHead = {
  title: "📊 WhatBot QR",
  meta: [
    {
      name: "description",
      content: "📊 WhatBot QR",
    },
  ],
};
