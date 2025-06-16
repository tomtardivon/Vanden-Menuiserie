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
import { AnimatedLink } from "@/components/ui/animated-link";
import { motion } from "framer-motion";
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
          <div className="flex items-center gap-3">
            <NavbarButton variant="gradient" href="/contact" className="text-xs px-3 py-2">
              Devis
            </NavbarButton>
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </div>
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          <div className="flex flex-col space-y-3 w-full">
            <h3 className="text-xs font-bold text-bleu-marine/40 uppercase tracking-widest px-2">
              Menu Principal
            </h3>
            {navItems.map((item, idx) => (
              <AnimatedLink
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-bleu-marine hover:text-brun-bois transition-colors font-semibold text-lg py-2 px-2"
              >
                {item.name}
              </AnimatedLink>
            ))}
          </div>

          <div className="flex flex-col space-y-3 w-full pt-4 border-t border-gris-perle/30">
            <h3 className="text-xs font-bold text-bleu-marine/40 uppercase tracking-widest px-2">
              Zones d&apos;intervention
            </h3>
            {localPages.map((item, idx) => (
              <AnimatedLink
                key={`mobile-local-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-bleu-marine/70 hover:text-brun-bois transition-colors font-medium text-base py-1.5 px-2"
              >
                {item.name}
              </AnimatedLink>
            ))}
          </div>

          <div className="flex w-full flex-col gap-3 pt-6 border-t border-gris-perle/30">
            <NavbarButton
              onClick={() => setIsMobileMenuOpen(false)}
              variant="secondary"
              className="w-full py-3 text-base font-semibold"
              href="tel:0762144340"
            >
              📞 Appeler maintenant
            </NavbarButton>
            <NavbarButton
              onClick={() => setIsMobileMenuOpen(false)}
              variant="gradient"
              className="w-full py-3 text-base font-semibold"
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
