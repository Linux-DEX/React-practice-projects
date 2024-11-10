import React from "react";
import FetchUserM1 from "./Components/FetchUserM1";
import FetchUserM2 from "./Components/FetchUserM2";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
    <div>
      <h1>User Management</h1>
      <h2>using axios and setInterval method</h2>
      <FetchUserM1 />
      <h2> using TanStack query</h2>
      <FetchUserM2 />
    </div>
    </QueryClientProvider>
  );
};

export default App;
