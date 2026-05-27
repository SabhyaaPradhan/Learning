"use client";

import StaggeredMenu, { MenuItem, SocialItem } from "./StaggeredMenu";

const menuItems: MenuItem[] = [
  { label: "Home", ariaLabel: "Go to home section", link: "#hero" },
  { label: "About", ariaLabel: "Learn about us", link: "#about" },
  { label: "Books", ariaLabel: "View our books", link: "#books" },
  { label: "Why Us", ariaLabel: "View our stats", link: "#stats" },
  { label: "Gallery", ariaLabel: "View our gallery", link: "#gallery" },
  { label: "Contact", ariaLabel: "Get in touch", link: "#contact" }
];

const socialItems: SocialItem[] = [
  { label: "Instagram", link: "#" },
  { label: "Facebook", link: "#" },
  { label: "Twitter", link: "#" },
  { label: "LinkedIn", link: "#" }
];

export default function Navbar() {
  return (
    <StaggeredMenu
      position="right"
      items={menuItems}
      socialItems={socialItems}
      displaySocials={true}
      displayItemNumbering={true}
      menuButtonColor="var(--text-primary)"
      openMenuButtonColor="var(--text-primary)"
      changeMenuColorOnOpen={true}
      colors={['#ede9fe', '#e0f2fe', '#fdf8f0']}
      logoUrl="/images/Learning1.png"
      accentColor="#4f46e5"
    />
  );
}
