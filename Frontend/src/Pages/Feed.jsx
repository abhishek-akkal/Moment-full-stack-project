import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../Components/Navbar";

const Feed = () => {
  const [posts, setPosts] = useState([
    // {
    //   _id: "1",
    //   image:
    //     "https://i.pinimg.com/736x/58/52/c9/5852c9e99401246f2455c4afaba7f75a.jpg",
    //   caption: "Sakura flower is beautiful",
    // },
    // {
    //   _id: "2",
    //   image:
    //     "https://i.pinimg.com/736x/bd/58/4e/bd584e6c4e41ddae402d15ff68d56abd.jpg",
    //   caption: "Re:Zero Emilia — Ice Bloom Vision",
    // },
    // {
    //   _id: "3",
    //   image:
    //     "https://i.pinimg.com/736x/4b/df/3a/4bdf3a06c71dbc576d2b32bb9a46d66d.jpg",
    //   caption: "Violet Evergarden",
    // },
  ]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/post")
      .then((res) => {
        setPosts(res.data.post);
      })
      .catch((err) => {
        console.error("Failed to fetch posts:", err);
      });
  }, []);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#09090b] px-4 py-10 text-white sm:px-6 lg:px-8 pt-20">
        <div className="mx-auto max-w-7xl">
          {/* Feed Heading */}
          <header className="mb-10 border-b border-white/10 pb-7 text-center">
            <div className="mb-3 flex items-center justify-center gap-2">
              <span className="h-2 w-2 rounded-full bg-purple-400 shadow-[0_0_12px_rgba(192,132,252,0.8)]" />

              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-purple-300">
                Community
              </span>
            </div>

            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Your Feed<span className="text-fuchsia-400">.</span>
            </h1>

            <p className="mt-3 text-sm text-zinc-400 sm:text-base">
              Discover moments, one post at a time.
            </p>
          </header>

          {/* Responsive Post Grid */}
          {posts.length > 0 ? (
            <section className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
              {posts.map((post) => (
                <article
                  key={post._id}
                  className="group min-w-0 overflow-hidden rounded-3xl border border-white/10 bg-[#18181b] shadow-xl shadow-black/20 transition duration-300 hover:border-purple-500/40 hover:shadow-purple-950/10"
                >
                  {/* Post Header */}
                  <div className="flex items-center gap-3 px-5 py-5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 via-purple-500 to-fuchsia-500 text-base font-bold shadow-lg shadow-purple-950/40">
                      P
                    </div>

                    <div className="min-w-0 flex-1">
                      <h2 className="text-sm font-bold text-white">
                        Community Post
                      </h2>

                      <p className="mt-1 text-xs text-zinc-500">
                        Shared with the community
                      </p>
                    </div>

                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-400">
                      Post
                    </span>
                  </div>

                  {/* Post Image */}
                  <div className="flex h-80 w-full items-center justify-center overflow-hidden bg-zinc-950 sm:h-96">
                    <img
                      src={post.image}
                      alt={post.caption}
                      loading="lazy"
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>

                  {/* Post Caption */}
                  <div className="relative px-5 py-6 sm:px-6 sm:py-7">
                    <div className="absolute left-0 top-7 h-10 w-1 rounded-r-full bg-gradient-to-b from-violet-400 to-fuchsia-500" />

                    <div className="pl-3">
                      <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.25em] text-purple-300">
                        The moment
                      </p>

                      <p className="break-words text-lg font-semibold leading-8 tracking-wide text-zinc-100 sm:text-xl">
                        {post.caption}
                      </p>

                      <div className="mt-5 flex items-center gap-2">
                        <span className="h-px w-8 shrink-0 bg-gradient-to-r from-purple-500 to-fuchsia-500" />

                        <span className="text-xs font-medium text-zinc-500">
                          A moment worth sharing
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </section>
          ) : (
            /* Empty State */
            <div className="rounded-3xl border border-dashed border-zinc-700 bg-zinc-900/50 px-6 py-16 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-500/10 text-2xl">
                ✨
              </div>

              <h2 className="mt-5 text-xl font-bold text-zinc-100">
                No posts yet
              </h2>

              <p className="mt-2 text-sm leading-6 text-zinc-500">
                Your feed is waiting for its first moment.
              </p>
            </div>
          )}

          {/* Footer */}
          <footer className="py-10 text-center">
            <p className="text-xs tracking-wide text-zinc-600">
              Made for moments that matter.
            </p>
          </footer>
        </div>
      </main>
    </>
  );
};

export default Feed;
