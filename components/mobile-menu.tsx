import { React, useState, useEffect, useRef } from "react";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [isStudentMenuOpen, setIsStudentMenuOpen] = useState(false); // State for Student Corner submenu
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setIsSubMenuOpen(false); // Close Resources submenu
        setIsStudentMenuOpen(false); // Close Student Corner submenu
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative md:hidden" ref={menuRef}>
      <button className="md:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FiX /> : <FiMenu />}
      </button>

      {isOpen && (
        <div
          className="absolute top-full right-0 bg-white shadow-lg z-50 w-64"
          style={{ marginTop: "0.5rem" }}
        >
          <div className="flex flex-col items-start p-4">
            <a href="/" className="text-lg font-bold mb-2">
              Home
            </a>
            <div className="w-full">
              <button
                className="flex items-center justify-between w-full text-lg font-bold mb-2"
                onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}
              >
                Resources
                <FiChevronDown
                  className={`transform transition-transform ${
                    isSubMenuOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>
              {isSubMenuOpen && (
                <div className="pl-4">
                  <a
                    href="/resources/articles"
                    className="text-base mb-2 block"
                  >
                    Articles
                  </a>
                  <a
                    href="/resources/tutorials"
                    className="text-base mb-2 block"
                  >
                    Tutorials
                  </a>
                  <a href="/resources/tools" className="text-base block">
                    Tools
                  </a>
                </div>
              )}
            </div>
            <div className="w-full">
              <button
                className="flex items-center justify-between w-full text-lg font-bold mb-2"
                onClick={() => setIsStudentMenuOpen(!isStudentMenuOpen)}
              >
                Student Corner
                <FiChevronDown
                  className={`transform transition-transform ${
                    isStudentMenuOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>
              {isStudentMenuOpen && (
                <div className="pl-4">
                  <a
                    href="/student-corner/events"
                    className="text-base mb-2 block"
                  >
                    Events
                  </a>
                  <a
                    href="/student-corner/clubs"
                    className="text-base mb-2 block"
                  >
                    Clubs
                  </a>
                  <a
                    href="/student-corner/projects"
                    className="text-base block"
                  >
                    Projects
                  </a>
                </div>
              )}
            </div>
            <a href="/faculty" className="text-lg font-bold">
              Faculty
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
