import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import orbitLogo from "@/assets/spacegrey-orbit.png";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/solutions", label: "Solutions" },
  { to: "/industries", label: "Industries" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-5"
        }`}
    >
      <div className="mx-auto max-w-7xl px-5">
        <div
          className={`flex items-center justify-between rounded-full px-5 py-2.5 transition-all duration-500 ${scrolled
            ? "glass-strong shadow-[0_10px_60px_-20px_rgba(0,0,0,0.8)]"
            : "border border-transparent"
            }`}
        >
          {/* Logo — orbit image only */}
          <Link to="/" className="flex items-center shrink-0">
            <img
              src={orbitLogo}
              alt="SpaceGrey"
              className="h-9 w-9 invert opacity-90"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="px-3.5 py-1.5 text-[13px] text-white/60 hover:text-white transition-colors rounded-full hover:bg-white/[0.04]"
                activeProps={{ className: "text-white bg-white/[0.06]" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              to="/book-a-call"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-white text-black px-4 py-2 text-[13px] font-medium hover:bg-white/90 transition-all hover:scale-[1.02]"
            >
              Book a Call
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
            <button
              className="lg:hidden grid h-9 w-9 place-items-center rounded-full border border-white/10 hover:bg-white/5"
              onClick={() => setOpen((v) => !v)}
              aria-label="Menu"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden mt-2 glass-strong rounded-3xl p-4 animate-reveal">
            <div className="grid grid-cols-2 gap-1">
              {NAV.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 text-sm text-white/70 hover:text-white rounded-2xl hover:bg-white/5"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/book-a-call"
                onClick={() => setOpen(false)}
                className="col-span-2 mt-1 px-4 py-3 text-sm text-black bg-white rounded-2xl text-center font-medium"
              >
                Book a Call
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
