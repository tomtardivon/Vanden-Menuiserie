"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";

export function Navigation() {
  const navItems = [
    {
      name: "Accueil",
      link: "/",
    },
    {
      name: "Services",
      link: "/services",
    },
    {
      name: "Réalisations",
      link: "/realisations",
    },
    {
      name: "À propos",
      link: "/a-propos",
    },
  ];

  const localPages = [
    {
      name: "Menuisier Toulon",
      link: "/menuisier-toulon",
    },
    {
      name: "Menuisier Hyères",
      link: "/menuisier-hyeres",
    },
    {
      name: "Menuisier Fréjus",
      link: "/menuisier-frejus",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <Navbar>
      {/* Desktop Navigation */}
      <NavBody>
        <div className="flex items-center">
          <NavbarLogo />
        </div>
        <NavItems items={navItems} />
        <div className="flex items-center gap-3">
          {/*           <NavbarButton variant="secondary" href="tel:0762144340">
            07 62 14 43 40
          </NavbarButton> */}
          <NavbarButton variant="gradient" href="/contact">
            Devis gratuit
          </NavbarButton>
        </div>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          <div className="flex flex-col space-y-4 w-full">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
              Menu Principal
            </h3>
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-700 hover:text-wood-dark transition-colors font-medium py-2"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="flex flex-col space-y-4 w-full pt-4 border-t border-gray-200">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
              Zones d&apos;intervention
            </h3>
            {localPages.map((item, idx) => (
              <a
                key={`mobile-local-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-600 hover:text-wood-dark transition-colors text-sm py-1"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="flex w-full flex-col gap-3 pt-6 border-t border-gray-200">
            <NavbarButton
              onClick={() => setIsMobileMenuOpen(false)}
              variant="secondary"
              className="w-full"
              href="tel:0762144340"
            >
              📞 Appeler maintenant
            </NavbarButton>
            <NavbarButton
              onClick={() => setIsMobileMenuOpen(false)}
              variant="gradient"
              className="w-full"
              href="/contact"
            >
              ✉️ Devis gratuit
            </NavbarButton>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
