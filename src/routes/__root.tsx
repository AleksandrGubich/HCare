import { createRootRoute, Outlet } from "@tanstack/react-router";
import { Header } from "../components/Header";

export const Route = createRootRoute({
  component: () => (
    <div className="flex min-h-dvh flex-col">
      <Header />

      <main className="flex flex-1 flex-col bg-[#FAFAFA] px-4 pt-2.5 sm:px-6 sm:pt-3.5 md:px-10 md:pt-4.5 lg:px-16 xl:px-24 2xl:px-40 2xl:pt-7.5">
        <Outlet />
      </main>
    </div>
  ),
});
