import About from "./routes/About/About";
import Blog from "./routes/Blog/Blog";
import Home from "./routes/Home/Home";
import Profile from "./routes/Profile/Profile";

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
  ["/blog", <Blog />, "Blog"],
];