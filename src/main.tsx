import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Home } from "@/pages/Home"
import { ProjectDetail } from "@/pages/ProjectDetail"
import { ExperienceDetail } from "@/pages/ExperienceDetail"
import { Games } from "@/pages/Games"
import { NotFound } from "@/pages/NotFound"
import { AudioProvider } from "@/audio/AudioProvider"
import { MusicToggle } from "@/components/MusicToggle"
import { AssetPreloader } from "@/components/AssetPreloader"
import { inject } from "@vercel/analytics"
import "./index.css"

inject()

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/project/:slug", element: <ProjectDetail /> },
  { path: "/experience/:slug", element: <ExperienceDetail /> },
  { path: "/games", element: <Games /> },
  { path: "*", element: <NotFound /> },
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AudioProvider>
      <AssetPreloader />
      <RouterProvider router={router} />
      {/* Floating music control, present on every route. */}
      <MusicToggle />
    </AudioProvider>
  </React.StrictMode>,
)
