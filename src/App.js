import React, { useState } from "react";
import TextForm from "./components/TextForm";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#002d4d";
      showAlert("Dark mode has been Enabled", "success");
      document.title = "TextUtils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been Enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };
  return (
    <div>
      <Router>
        <NavBar mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Switch>
          <Route exact path="/about" component={About} />
          <Route exact path="/">
            <TextForm showAlert={showAlert} mode={mode} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
export default App;

//==================================================

// import { useState } from "react";
// import { BrowserRouter as Router } from "react-router-dom";
// // import "./App.css";
// import SearchBar from "./search";
// // import Announcer from "./announcer";

// const posts = [
//   {
//     id: "1",
//     desc: "This first post is about React",
//     name: "saud",
//     email: "saud@gmail.com",
//   },
//   {
//     id: "2",
//     desc: "This next post is about Preact",
//     name: "adil",
//     email: "adil@gmail.com",
//   },
//   {
//     id: "3",
//     desc: "We have yet another React post!",
//     name: "kazim",
//     email: "kazim@gmail.com",
//   },
//   {
//     id: "4",
//     desc: "This is the fourth and final post",
//     name: "ather",
//     email: "ather@gmail.com",
//   },
// ];

// const filterPosts = (posts, query) => {
//   if (!query) {
//     return posts;
//   }

//   return posts.filter((post) => {
//     const postName = post.name.toLowerCase() || post.email.toLoweCase();
//     return postName.includes(query);
//   });
// };

// const App = () => {
//   const { search } = window.location;
//   const query = new URLSearchParams(search).get("s");
//   const [searchQuery, setSearchQuery] = useState(query || "");
//   const filteredPosts = filterPosts(posts, searchQuery);

//   return (
//     <Router>
//       <div className="App">
//         {/* <Announcer message={`${filteredPosts.length} posts`} /> */}
//         <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
//         <ul>
//           {filteredPosts.map((post) => (
//             <>
//               <ol key={post.id}></ol>
//               <h6>Details..!!</h6>
//               Name : {post.name}
//               {<br />}
//               Email : {post.email}
//               {<br />}
//               Desc : {post.desc}{<br/>}
//             </>
//           ))}
//         </ul>
//       </div>
//     </Router>
//   );
// };

// export default App;
