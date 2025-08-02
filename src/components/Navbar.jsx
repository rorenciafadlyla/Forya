import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const location = useLocation();
    const underlineRef = useRef(null);
    const linkRefs = {
        "/": useRef(null),
        "/products": useRef(null),
        "/about": useRef(null),
    };

    const [underlineStyle, setUnderlineStyle] = useState({});
    const [isOpen, setIsOpen] = useState(false);

    const [lastScrollY, setLastScrollY] = useState(0);
    const [isHidden, setIsHidden] = useState(false);

    // Mengatur underline aktif
    useEffect(() => {
        const currentRef = linkRefs[location.pathname];
        if (currentRef && currentRef.current) {
            const el = currentRef.current;
            setUnderlineStyle({
                left: el.offsetLeft,
                width: el.offsetWidth,
            });
        }
    }, [location.pathname]);

    // Mengatur efek scroll hide/show
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsHidden(true); // scroll ke bawah
            } else {
                setIsHidden(false); // scroll ke atas
            }
            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    const linkClass =
        "relative px-2 py-1 transition-colors duration-200 hover:text-slate";

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-opacity duration-500 ${isHidden ? "opacity-0 pointer-events-none" : "opacity-100"
                } bg-drab/90 backdrop-blur-sm text-snow px-6 py-4 shadow`}
        >
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="font-bold text-lg">Forya</h1>

                {/* Desktop Nav */}
                <div className="hidden sm:block relative">
                    <ul className="flex space-x-6 font-medium">
                        <li>
                            <NavLink ref={linkRefs["/"]} to="/" className={linkClass}>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink ref={linkRefs["/products"]} to="/products" className={linkClass}>
                                Products
                            </NavLink>
                        </li>
                        <li>
                            <NavLink ref={linkRefs["/about"]} to="/about" className={linkClass}>
                                About
                            </NavLink>
                        </li>
                    </ul>
                    {/* Underline for Desktop */}
                    <div
                        ref={underlineRef}
                        className="absolute bottom-0 h-[2px] bg-snow transition-all duration-300"
                        style={underlineStyle}
                    />
                </div>

                {/* Mobile Menu Toggle */}
                <button className="sm:hidden" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Dropdown */}
            {isOpen && (
                <div className="sm:hidden bg-drab text-snow px-6 pt-4 pb-6 shadow-md">
                    <ul className="flex flex-col space-y-4 font-medium">
                        <li>
                            <NavLink to="/" onClick={() => setIsOpen(false)} className={linkClass}>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/products" onClick={() => setIsOpen(false)} className={linkClass}>
                                Products
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" onClick={() => setIsOpen(false)} className={linkClass}>
                                About
                            </NavLink>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
