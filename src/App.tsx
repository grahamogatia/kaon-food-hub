import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { CartProvider } from "@/lib/cart";
import { CartSheet } from "@/components/cart/cart-sheet";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

const HomePage = lazy(() => import("./pages/Home"));
const AboutPage = lazy(() => import("./pages/About"));
const MenuPage = lazy(() => import("./pages/Menu"));
const ContactPage = lazy(() => import("./pages/Contact"));
const OrderPage = lazy(() => import("./pages/Order"));

function Layout() {
  return (
    <div className="flex min-h-svh flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Suspense
          fallback={
            <div className="flex flex-1 items-center justify-center py-20">
              <p className="text-sm text-muted-foreground">Loading...</p>
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </main>
      <SiteFooter />
    </div>
  );
}

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <CartProvider>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/menu" element={<MenuPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/order" element={<OrderPage />} />
            </Route>
          </Routes>
          <Analytics />
          <SpeedInsights />
          <CartSheet />
        </CartProvider>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
