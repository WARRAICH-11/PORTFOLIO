
  import { createRoot } from "react-dom/client";
  import gsap from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import { Flip } from "gsap/Flip";
  import { useGSAP } from "@gsap/react";
  import App from "./App.tsx";
  import "./index.css";

  gsap.registerPlugin(ScrollTrigger, Flip, useGSAP);

  createRoot(document.getElementById("root")!).render(<App />);
  
