// import { Toaster } from "@/components/ui/toaster";
// import { Toaster as Sonner } from "@/components/ui/sonner";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// // 👇 REMOVE BrowserRouter
// import { Routes, Route } from "react-router-dom"; 
// import Index from "./pages/Index";
// import NotFound from "./pages/NotFound";
// // 👇 KEEP THIS: HashRouter is imported as Router
// import { HashRouter as Router } from 'react-router-dom'; 

// const queryClient = new QueryClient();

// const App = () => (
//   <QueryClientProvider client={queryClient}>
//     <TooltipProvider>
//       <Toaster />
//       <Sonner />
      
//       {/* 👇 CHANGE: Replace <BrowserRouter> with <Router> (which is HashRouter) */}
//       <Router> 
//         <Routes>
//           {/* Path for HashRouter is usually just "/" and then its sub-routes */}
//           <Route path="/" element={<Index />} />
//           {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </Router>
      
//     </TooltipProvider>
//   </QueryClientProvider>
// );

// export default App;

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// 👇 1. IMPORT BrowserRouter and standard Routes/Route
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
// ❌ 2. REMOVE HashRouter import (import is no longer needed)

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      
      {/* 👇 3. CHANGE: Use BrowserRouter */}
      <BrowserRouter> 
        <Routes>
          {/* Path resolution is now standard */}
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
