import About from "./routes/About/About";
import Blog from "./routes/Blog/Blog";
import Form from "./routes/Form/Form";
import Home from "./routes/Home/Home";
import Profile from "./routes/Profile/Profile";
import Timer from "./routes/Timer/Timer";

// Consumed in App and Navbar components
// Used for list rendering of nav links and
// react router routing of element/component rendering

// Advantages
// 1. Less imports in App.js, Navbar, handling client-side routing and nav links
// 2. Ability to separate custom routing logic (render different routes depending on some conditions, auth)
//        - (isAuthenticated) ? <Profile /> : <Redirect />
// 3. Cleaner markup
export default [
  ["/", <Home />, "Home"],
  ["/about", <About />, "About"],
  ["/profile", <Profile />, "Profile"],
  ["/blog", <Blog />, "Blog"],
  ["/timer", <Timer />, "Timer"],
  ["/form", <Form />, "Form"],
];
