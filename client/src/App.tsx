import { CssBaseline } from "@mui/material";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./providers/ThemeProvider";
import WhatsAppButton from "./components/WhatsAppButton";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";
import NotFound from "@/pages/NotFound";

// Font CSS is loaded via index.html link tag

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/project/:projectId" component={ProjectDetail} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultMode="dark">
        <CssBaseline />
        <Router />
        <WhatsAppButton />
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
