import Layout from "./Layout";
import Home from "./Pages/Home";
import NewPost from "./Pages/Posts/NewPost";
import PostPage from "./Pages/Posts/PostPage";
import About from "./Pages/About";
import Missing from "./Pages/Missing";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import format from "date-fns/format";

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Made in Abyss Season 3",
      datetime: "January 15, 2024 08:30 AM",
      body: "Made in Abyss Season 3 continues the epic journey of Riko and her companions as they descend into the depths of the Abyss. Unraveling new mysteries and facing increasingly dangerous challenges, they strive to reach the bottom and discover the secrets that lie within the enigmatic chasm.",
    },
    {
      id: 2,
      title: "Hell's Paradise Season 2",
      datetime: "February 22, 2024 03:45 PM",
      body: "Hell's Paradise Season 2 follows the adventures of Gabimaru and his fellow prisoners as they navigate the treacherous island in search of the elusive elixir of immortality. The journey is fraught with peril, testing their skills, alliances, and the limits of their determination.",
    },
    {
      id: 3,
      title: "One-Punch Man Season 3",
      datetime: "March 10, 2024 11:00 AM",
      body: "One-Punch Man Season 3 continues the hilarious yet action-packed exploits of Saitama, the seemingly invincible hero. As he searches for a worthy opponent, new and formidable adversaries emerge, challenging Saitama's strength and adding a fresh layer of excitement to the series.",
    },
    {
      id: 4,
      title: "Oshi no Ko Season 2",
      datetime: "April 05, 2024 06:15 PM",
      body: "Oshi no Ko Season 2 follows the journey of Redo, who is reincarnated as the child of his idol, Ai Hoshino. Navigating the complexities of the entertainment industry, Redo strives to make a name for himself while grappling with the challenges of fame, talent, and the expectations placed upon him.",
    },
    {
      id: 5,
      title: "Blue Lock Season 2",
      datetime: "July 20, 2024 02:00 AM",
      body: "Blue Lock Season 2 intensifies the rigorous training program for young strikers aiming to become the best in the world. As the competition heats up, players are pushed to their limits physically and mentally, testing their skills and determination to emerge as the ultimate soccer talents.",
    },
    {
      id: 6,
      title: "Kaiju No. 8",
      datetime: "October 11, 2024 07:45 AM",
      body: "Kaiju No. 8 follows Kafka Hibino, an aspiring member of the Defense Force, as he joins the battle against Kaiju, monstrous creatures emerging from the depths of the Pacific Ocean. Filled with action, drama, and the struggle for survival, the series explores Kafka's journey to protect humanity from these colossal threats.",
    },
  ]);
  const [search, setSearch] = useState("");
  const [searchResutls, setSetResults] = useState([]);
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const filteredResults = posts.filter(
      (post) =>
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.body.toLowerCase().includes(search.toLowerCase())
    );
    setSetResults(filteredResults.reverse());
  }, [posts, search]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), "MMMM dd, yyyy");
    const newPost = { id, title: postTitle, datetime, body: postBody };
    const allPosts = [...posts, newPost];
    setPosts(allPosts);
    setPostTitle("");
    setPostBody("");
    navigate("/");
  };

  const handleDelete = (id) => {
    const postsList = posts.filter((post) => post.id !== id);
    setPosts(postsList);
    navigate("/");
  };

  return (
    <Routes>
      <Route
        path="/"
        element={<Layout search={search} setSearch={setSearch} />}
      >
        <Route index element={<Home posts={searchResutls} />} />
        <Route path="post">
          <Route
            index
            element={
              <NewPost
                postTitle={postTitle}
                setPostTitle={setPostTitle}
                postBody={postBody}
                setPostBody={setPostBody}
                handleSubmit={handleSubmit}
              />
            }
          />
          <Route
            path="/post/:id"
            element={<PostPage posts={posts} handleDelete={handleDelete} />}
          />
        </Route>
        <Route path="about" element={<About />} />
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
}

export default App;
