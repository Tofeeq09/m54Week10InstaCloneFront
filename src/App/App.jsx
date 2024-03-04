// Path: src/App/App.jsx

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProfilePage from "../pages/ProfilePage";
import PostPage from "../pages/PostPage";
import ConversationPage from "../pages/ConversationPage";

function App() {
  return (
    <Router>
      {/* Add your navigation bar component here */}

      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/profile/:id" component={ProfilePage} />
        <Route path="/post/:id" component={PostPage} />
        <Route path="/conversation/:id" component={ConversationPage} />
      </Switch>

      {/* Add your footer component here */}
    </Router>
  );
}

export default App;
