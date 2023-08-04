import { component$, Slot } from "@builder.io/qwik";

// import Header from '../components/header/header'
import img from "../components/icons/movil.png";
import "./index.css";

export default component$(() => {
  return (
    <>
      <main>
        {/* <Header /> */}
        <div class={"Home"}>
          <Slot />
          <div>
            <img src={img} alt="" class={"image"} />
          </div>
        </div>
      </main>
    </>
  );
});
