import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Layout from "./features/component/Layout.jsx";
import PostsList from './features/post/PostsList.jsx'
import UserList from './features/user/UserList.jsx'
import SinglePostPage from "./features/post/SinglePostPage.jsx";
import AddPostForm from './features/post/AddPostForm.jsx'
import AddUserForm from './features/user/AddUserForm.jsx'
import Header from "./features/component/Header.jsx";
import EditFormPost from "./features/post/EditPostForm.jsx";

function App() {
  return (
    <>
    {/* <main className="App">
    <AddPostForm />
        <PostsList />
      <AddUserForm />
      <UserList />
      </main> */}
    <Header/>

      <Routes>
        <Route path="/" element={<Layout/>}/>
        <Route index element={<PostsList/>}/>
        <Route index element={<UserList/>}/>

        <Route path="/post">
          <Route index element={<AddPostForm/>}/>
          <Route path="edit" element={<EditFormPost/>} />
          <Route path=":postId" element={<SinglePostPage/>}/>
        </Route>

        <Route path="user">
          <Route index element={<AddUserForm/>}/>
          {/* <Route path=":postId" element={<SinglePostPage/>}/> */}
        </Route>

      </Routes>
    </>
  );
}

export default App;

// import PostsList from "./features/post/PostsList";
// import AddPostForm from "./features/post/AddPostForm";
// //import EditFormPost from "./features/post/EditPostForm";

// // import Layout from "./features/component/Layout";
// //import SinglePostPage from "./features/post/SinglePostPage";
// import Nav from "./features/component/Nav";
// //import About from "./features/component/About";
// const LazyAbout = React.lazy(() => import ('./features/component/About'))
// import Landing from "./features/component/Landing";
// import UserList from "./features/user/UserList";
// import AddUserForm from "./features/user/AddUserForm";
// import SaveData from "./features/component/SaveData";
// import DataSummary from "./features/component/DataSummary";
// import NoMatch from "./features/component/NoMatch";
// import Products from "./features/component/Products";
// import Featured from "./features/component/Featured";
// import New from "./features/component/New";
// import Users from "./features/component/Users";
// import UserDetails from "./features/component/UserDetails";
// import Admin from "./features/component/Admin";
// import Profile from "./features/component/Profile";

// function App() {
//   const Home = () => {
//     return (
//       <main className="App">
//         <AddPostForm />
//         <PostsList />
//       </main>
//     );
//   };
//   return (
//     // <Routes>
//     //   <Route path="/" element={<Layout />}>
//     //     <Route index element={<PostsList/>}/>

//     //     <Route path="post">
//     //       <Route index element={<AddPostForm/>}/>
//     //       <Route path=":postId" element={<SinglePostPage/>}/>

//     //     </Route>
//     //   </Route>
//     // </Routes>
//     // <main className="App">
//     //   <AddPostForm/>
//     //   <PostsList/>
//     //   </main>

//     <>
//       <Home />
//       <AddUserForm />
//       <UserList />

//       <Nav />
//       <Routes>
//         <Route path="landing" element={<Landing />} />
//         <Route path="about" element={<React.Suspense fallback='loadinggg....'>
//         <LazyAbout />
//         </React.Suspense>} />
//         <Route path="save" element={<SaveData />} />
//         <Route path="data-summary" element={<DataSummary />} />
//         <Route path="*" element={<NoMatch />} />
//         <Route path="products" element={<Products />}>
//           <Route index element={<Featured />} />
//           <Route path="featured" element={<Featured />} />
//           <Route path="new" element={<New />} />
//         </Route>
//         <Route path="users" element={<Users />}>
//           <Route path=":userId" element={<UserDetails />} />
//           <Route path="admin" element={<Admin />} />
//         </Route>
//         <Route path="profile" element={<Profile />} />

//       </Routes>
//     </>
//   );
// }

// export default App;
