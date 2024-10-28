import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { Suspense } from "react";
import { lazy } from "react";

const Home = lazy(() => import("./Home.tsx"));
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Suspense
      fallback={
        <div className="flex h-screen w-full flex-col items-center justify-center">
          <svg className="c" viewBox="0 0 40 40" height="40" width="40">
            <circle
              className="track"
              cx="20"
              cy="20"
              r="17.5"
              pathLength="100"
              strokeWidth="5px"
              fill="none"
            />
            <circle
              className="car"
              cx="20"
              cy="20"
              r="17.5"
              pathLength="100"
              strokeWidth="5px"
              fill="none"
            />
          </svg>
          <div className="mt-4 text-slate-500">Downloading Content...</div>
        </div>
      }
    >
      <Home />
    </Suspense>
  </StrictMode>,
);
