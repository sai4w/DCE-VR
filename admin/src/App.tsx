import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Dashboard from "./pages/dashboard";
import SignalPosts from "./pages/signalPosts";
import { Toaster } from "./components/ui/sonner";
import NettoyagePosts from "./pages/nettoyagePosts";
import CommentNettoyage from "./pages/commentNettoyage";
import ListNettoyage from "./pages/listNettoyage";
import Login from "./pages/login";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/signalPosts" element={<SignalPosts />} />
          <Route path="/nettoyagePosts" element={<NettoyagePosts />} />
          <Route path="/commentNettoyage" element={<CommentNettoyage />} />
          <Route path="/listNettoyage" element={<ListNettoyage />} />
        </Route>
        <Route path="/" element={<Login />} />
      </Routes>
      <Toaster position="top-right" richColors />
    </Router>
  );
};

export default App;
