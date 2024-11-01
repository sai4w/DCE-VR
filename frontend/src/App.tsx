import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import LoginPage from "./pages/login";
import ProtectedRoute from "./protectedRoutes";
import RegisterPage from "./pages/register";
import PostsPage from "./pages/posts";
import PostPage from "./pages/post";
import PlaylistPage from "./pages/playlist";
import BlogPage from "./pages/blog";
import SignalsPage from "./pages/signals";
import PosterPage from "./pages/poster";
import PlaylistsPage from "./pages/playlists";
import NotFoundPage from "./pages/notFound";
import SignalerPage from "./pages/signaler";
import SignalPage from "./pages/signal";
import NettoyagePage from "./pages/nettoyage";
import MesEchangesPage from "./pages/mesEchanges";
import MesPostsPage from "./pages/mesPosts";
import MesParametresPage from "./pages/paramatre";
import PublicRoute from "./publicRoutes";
import EcoMapPage from "./pages/ecoMap";
import { Toaster } from "./components/ui/sonner";
import FeedbackPage from "./pages/feedback";
import MonProfilePage from "./pages/monProfile";
import AccueilPage from "./pages/accueil";
import AproposPage from "./pages/apropos";
import { ArrowUpIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";
import ContactPage from "./pages/contact";
import Rouevr from "./pages/rouevr";
import RankingPage from "./pages/ranking";

const App = () => {
  const [showScroll, setShowScroll] = useState(false);
  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY > 100) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute>
              <RegisterPage />
            </PublicRoute>
          }
        />
        <Route
          path="/poster"
          element={
            <ProtectedRoute>
              <PosterPage />
            </ProtectedRoute>
          }
        />
        <Route path="/" element={<AccueilPage />} />
        <Route path="/apropos" element={<AproposPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/posts" element={<PostsPage />} />
        <Route path="/post/:id" element={<PostPage />} />
        <Route path="/rouevr" element={<Rouevr />} />
        <Route path="/playlist/:id" element={<PlaylistPage />} />
        <Route path="/playlists" element={<PlaylistsPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/signals" element={<SignalsPage />} />
        <Route path="/signal/:id" element={<SignalPage />} />
        <Route path="/signal/nettoyage/:id" element={<NettoyagePage />} />
        <Route path="ranking" element={<RankingPage />} />
        <Route
          path="/signaler"
          element={
            <ProtectedRoute>
              <SignalerPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/ecomap"
          element={
            // <ProtectedRoute>
            <EcoMapPage />
            // </ProtectedRoute>
          }
        />
        <Route
          path="/monprofile"
          element={
            <ProtectedRoute>
              <MonProfilePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/mesparametres"
          element={
            <ProtectedRoute>
              <MesParametresPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/mesechanges"
          element={
            <ProtectedRoute>
              <MesEchangesPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/mesposts/:id?"
          element={
            <ProtectedRoute>
              <MesPostsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/feedback"
          element={
            <ProtectedRoute>
              <FeedbackPage />
            </ProtectedRoute>
          }
        />
      </Routes>
      <div
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className={`fixed bottom-10 right-6 z-50 cursor-pointer rounded-full border-2 border-primary bg-white p-4 shadow-lg ${showScroll ? "visible translate-y-4 opacity-100" : "invisible opacity-0"} transition-all duration-300`}
      >
        <ArrowUpIcon className="size-6  rounded-full text-primary" />
      </div>
      <Toaster position="top-right" richColors />
    </Router>
  );
};
export default App;
