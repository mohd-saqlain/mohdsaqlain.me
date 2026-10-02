import SocialLinks from "./social";
import { MdDateRange } from "react-icons/md";

// Bump this whenever the site content changes.
const LAST_UPDATED = "Oct 2, 2026";

export default function Footer() {
  return (
    <footer className="mb-16">
      <span className="flex items-center gap-2 p-2 rounded-lg bg-amber-200/20 w-max text-xs text-white mb-6">
        <MdDateRange />
        Last updated on {LAST_UPDATED}
      </span>
      <SocialLinks
        email="saqlainmohd639@gmail.com"
        whatsapp={6392888095}
        twitter="#"
        instagram="saqlain.aly"
        linkedIn="mohd-saqlain-webdev"
      />
      <p className="mt-2 text-sm">
        © {new Date().getFullYear()} Mohd Saqlain
      </p>
    </footer>
  );
}
