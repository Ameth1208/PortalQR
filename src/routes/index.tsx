import { component$, useStylesScoped$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { QR } from "~/components/qr/qr";

import style from "./index.css?inline";

export default component$(() => {
  useStylesScoped$(style);

  return (
    <div class={"page"}>
      <div class={"qr-section"}>
        <QR />
      </div>
      <div class={"qr-section intructions"}>
        <h1>Whatsapp QR</h1>
        <p>
          Para comenzar a aprovechar estas ventajas, solo necesitas escanear el
          código QR que hemos generado. Al hacerlo, estarás otorgando los
          permisos necesarios a nuestro bot para que empiece a trabajar de
          manera eficaz y personalizada en tu ambiente empresarial.
        </p>
        {/* <div class={'qr-section links'}>
                    <a class={'btn-link '} target="_blank" href="https://bot-whatsapp.netlify.app/">
                        Ver documentación
                    </a>
                    <a
                        class={'btn-link '}
                        target="_blank"
                        href="https://www.youtube.com/playlist?list=PL_WGMLcL4jzWPhdhcUyhbFU6bC0oJd2BR"
                    >
                        Ver videos
                    </a>
                    <a class={'btn-link '} target="_blank" href="https://opencollective.com/bot-whatsapp">
                        Comprar café
                    </a>
                </div> */}
      </div>
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
