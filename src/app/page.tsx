'use client';

import { useEffect, useState } from "react";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedPost, setSelectedPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const usersRes = await fetch("https://jsonplaceholder.typicode.com/users");
        const postsRes = await fetch("https://jsonplaceholder.typicode.com/posts");
        const commentsRes = await fetch("https://jsonplaceholder.typicode.com/comments");

        const usersData = await usersRes.json();
        const postsData = await postsRes.json();
        const commentsData = await commentsRes.json();

        const customUsers = usersData.map((user, index) => ({
          ...user,
          name: [
            "Muring Erica G.",
            "Demetrial Charizza Mae",
            "Lorejas Fabian",
            "Rioflorido Nash Aron",
            "Guatno James Phillip",
            "Sarah Lee",
            "Daniel Clark",
            "Amy Brown",
            "Matthew Lewis",
            "Olivia Wilson"
          ][index],
          username: [
            "erica", "charizza", "fabian", "nash", "john",
            "slee", "danielc", "amyb", "mattlew", "oliviaw"
          ][index],
          email: [
            "erica.com", "charizza.com", "fabian.com", "john.com", "slee.com",
            "guatno@example.com", "daniel@example.com", "amy@example.com",
            "matt@example.com", "olivia@example.com"
          ][index],
          phone: [
            "09123456789", "09078563432", "09784456921", "09785601656", "09735467289",
            "678-901-2345", "789-012-3456", "890-123-4567", "901-234-5678", "012-345-6789"
          ][index],
          address: {
            ...user.address,
            city: [
              "San Isidro Bulan Sor.", "Zone 2 Bulan Sor", "Chicago", "Houston", "Phoenix",
              "San Diego", "Dallas", "San Jose", "Austin", "Seattle"
            ][index]
          },
          company: {
            ...user.company,
            name: [
              "Google", "Microsoft", "Amazon", "Apple", "Meta",
              "Netflix", "Tesla", "Adobe", "NVIDIA", "Intel"
            ][index]
          }
        }));

        const englishTitles = [
          "A Journey Through Time", "Discovering Hidden Truths", "Unlocking the Power Within",
          "Finding Joy in Simplicity", "Moments That Change Everything", "Overcoming Everyday Obstacles",
          "The Future Is Bright", "Stories of Hope and Courage", "Dream Big, Achieve More",
          "What It Means to Be Human", "New Horizons Await", "Where Ideas Begin",
          "Behind Every Smile", "Rising After the Fall", "Echoes of the Past",
          "Lessons from Life", "When Silence Speaks", "Turning Pages",
          "The Heart Knows Best", "Embracing the Unknown"
        ];

        const englishBodies = [
          "Time flows like a river, always moving forward.",
          "Truth can be found in the most unexpected places.",
          "Strength and courage are already within you.",
          "The beauty of life lies in its simplicity.",
          "One small act can make a big difference.",
          "Every obstacle is an opportunity to grow.",
          "There’s always light at the end of the tunnel.",
          "Even the darkest nights lead to brighter mornings.",
          "Dreams push us toward greatness.",
          "Love, hope, and purpose guide us.",
          "Exploration begins with curiosity.",
          "Inspiration is born from stillness.",
          "Every laugh hides a story.",
          "Falling teaches us to stand taller.",
          "The past teaches, the future waits.",
          "Life’s tests shape who we are.",
          "Sometimes silence says it all.",
          "Every chapter tells a story.",
          "Follow your heart—it knows the way.",
          "Let go, and see what you find."
        ];

        const updatedPosts = postsData.map((post, index) => ({
          ...post,
          title: englishTitles[index % englishTitles.length],
          body: englishBodies[index % englishBodies.length]
        }));

        setUsers(customUsers);
        setPosts(updatedPosts);
        setComments(commentsData);
        const englishCommentBodies = [
          "This was really helpful!",
          "Thanks for sharing your thoughts.",
          "Interesting point of view.",
          "I never thought of it that way before.",
          "This post really made me think.",
          "Great explanation!",
          "I completely agree with you.",
          "Thanks for the insight!",
          "Very well written.",
          "Looking forward to more posts like this!"
        ];
        
        const updatedComments = commentsData.map((comment, index) => ({
          ...comment,
          name: `User ${comment.id}`, // optional, or keep original
          body: englishCommentBodies[index % englishCommentBodies.length]
        }));
        
        setComments(updatedComments);
        
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleUserClick = (user) => {
    setSelectedUser(user);
    setSelectedPost(null);
  };

  const handlePostClick = (post) => {
    setSelectedPost(post);
  };

  if (loading) return <div className="text-center mt-10">Loading...</div>;

  return (
    <main className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">Users</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        {users.map((user) => (
          <div
            key={user.id}
            onClick={() => handleUserClick(user)}
            className="bg-white shadow p-4 rounded cursor-pointer hover:bg-blue-50"
          >
            <h2 className="text-lg font-semibold">{user.name}</h2>
            <p className="text-gray-600">@{user.username}</p>
          </div>
        ))}
      </div>

      {selectedUser && (
        <div className="bg-white shadow p-6 rounded mb-8">
         <h2 className="text-2xl font-bold mb-2">{`${selectedUser.name}'s Profile`}</h2>
          <p>Email: {selectedUser.email}</p>
          <p>Phone: {selectedUser.phone}</p>
          <p>City: {selectedUser.address.city}</p>
          <p>Company: {selectedUser.company.name}</p>

          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">Location on Map</h3>
            <iframe
              width="100%"
              height="300"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps?q=${selectedUser.address.geo.lat},${selectedUser.address.geo.lng}&output=embed`}
            ></iframe>
          </div>

          <h3 className="text-xl font-semibold mt-6 mb-2">Posts</h3>
          <ul className="list-disc list-inside">
            {posts
              .filter((post) => post.userId === selectedUser.id)
              .map((post) => (
                <li
                  key={post.id}
                  onClick={() => handlePostClick(post)}
                  className="text-blue-600 cursor-pointer hover:underline"
                >
                  {post.title}
                </li>
              ))}
          </ul>
        </div>
      )}

      {selectedPost && (
        <div className="bg-white shadow p-6 rounded mb-8">
          <h2 className="text-xl font-bold">{selectedPost.title}</h2>
          <p className="mt-2 mb-4">{selectedPost.body}</p>

          <h3 className="font-semibold mb-2">Comments:</h3>
          <ul className="list-disc list-inside">
            {comments
              .filter((c) => c.postId === selectedPost.id)
              .map((c) => (
                <li key={c.id} className="mb-1">
                  <span className="font-semibold">{c.name}</span>: {c.body}
                </li>
              ))}
          </ul>
        </div>
      )}
    </main>
  );
};

export default Home;
