type NavLink = {
  id: string;
  title: string;
  path: string;
};

export const navLink: NavLink[] = [
  { id: "features", title: "Features", path: "/features" },
  { id: "how-it-works", title: "How It Works", path: "/howitworks" },
  { id: "testimonials", title: "Testimonials", path: "/testimonials" },
  { id: "support", title: "Support", path: "/support" },
];
