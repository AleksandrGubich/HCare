import { createRootRoute, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: () => (
    <div className="flex-1 flex flex-col">
      <Outlet />
    </div>
  ),
});
