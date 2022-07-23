import About from "./About/About";
import { Home } from "./Home/Home";
import Profile from "./Profile/Profile";

// Consumed in App and Navbar components
// Used for list rendering of nav links and
// react router routing of element/component rendering

// Advantages
// 1. Less imports in App.js, Navbar, handling client-side routing and nav links
// 2. Ability to separate custom routing logic (render different routes depending on some conditions, auth)
// 3. Cleaner markup
export default [
  ["/", <Home />, "Home"],
  ["/about", <About />, "About"],
  ["/profile", <Profile />, "Profile"],
];
