import { useState } from "react";

// This lived in Header which was the heighest common denomenator until the SavedNews
// component was created and rendered in App so I created another Hook!
const useModal = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => {
    // When you call setIsMobileMenuOpen(false) and the current value is already false,
    // React recognizes that nothing has changed and skips the re-render. This is relevant
    // when I pass this function to the click handlers of links, like the NavLogo.
    setIsMobileMenuOpen(false);
  };

  return { isMobileMenuOpen, toggleMobileMenu, closeMobileMenu };
};

export default useModal;
