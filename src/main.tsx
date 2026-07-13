import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const MINUTE_IN_MS = 60 * 1000;
const QUERY_SCALE_TIME = MINUTE_IN_MS * 5;
const QUERY_GC_TIME = MINUTE_IN_MS * 30;
const QUERY_RETRY_COUNT = 1;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: QUERY_SCALE_TIME,
      gcTime: QUERY_GC_TIME,
      retry: QUERY_RETRY_COUNT,
      refetchOnWindowFocus: false,
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <StrictMode>
      <App />
    </StrictMode>
  </QueryClientProvider>,
);
