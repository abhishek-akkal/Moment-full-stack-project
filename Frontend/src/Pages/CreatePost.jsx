import React from "react";
import axios from "axios";
import Navbar from "../Components/Navbar";

const CreatePost = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    try {
      const res = await axios.post(
        "https://moment-backend-api.onrender.com/create-post",
        formData,
      );

      alert("Post created successfully! 🎉");
      form.reset();

      console.log(res.data);
    } catch (err) {
      console.error(err);
      alert("Error creating post. Please try again.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#09090b] text-white flex items-center justify-center px-4 py-12 pt-20">
        {/* Background glow */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-purple-600/20 blur-[120px]" />
          <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-pink-600/20 blur-[120px]" />
        </div>

        <section className="relative w-full max-w-xl">
          {/* Heading */}
          <div className="mb-8 text-center">
            <span className="inline-block rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1.5 text-sm font-medium text-purple-300">
              Share your moment ✨
            </span>

            <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
              Create a{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Post
              </span>
            </h1>

            <p className="mt-3 text-sm text-zinc-400 sm:text-base">
              Share something amazing with the world.
            </p>
          </div>

          {/* Form Card */}
          <div className="rounded-3xl border border-white/10 bg-zinc-900/80 p-6 shadow-2xl shadow-purple-950/20 backdrop-blur-xl sm:p-9">
            <form onSubmit={handleSubmit} className="space-y-7">
              {/* Image Upload */}
              <div>
                <label className="mb-3 block text-sm font-semibold text-zinc-200">
                  Upload your image
                </label>

                <label className="group flex min-h-52 cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-zinc-700 bg-zinc-950/60 px-6 py-8 text-center transition hover:border-purple-500 hover:bg-purple-500/5">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-500/15 text-purple-300 transition group-hover:scale-110">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-8 w-8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 7.5 12 3m0 0L7.5 7.5M12 3v13.5"
                      />
                    </svg>
                  </div>

                  <span className="text-sm font-semibold text-zinc-200">
                    Click to upload an image
                  </span>

                  <span className="mt-2 text-xs text-zinc-500">
                    PNG, JPG or JPEG
                  </span>

                  <input
                    type="file"
                    name="image"
                    accept="image/*"
                    required
                    className="sr-only"
                  />
                </label>
              </div>

              {/* Caption */}
              <div>
                <label
                  htmlFor="caption"
                  className="mb-3 block text-sm font-semibold text-zinc-200"
                >
                  Caption
                </label>

                <input
                  id="caption"
                  type="text"
                  name="caption"
                  placeholder="Write something about your image..."
                  required
                  className="w-full rounded-xl border border-zinc-700 bg-zinc-950/70 px-4 py-4 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 px-5 py-4 text-sm font-bold text-white shadow-lg shadow-purple-950/30 transition duration-300 hover:-translate-y-0.5 hover:from-purple-500 hover:to-pink-500 hover:shadow-purple-500/20 active:translate-y-0 cursor-pointer"
              >
                Create Post →
              </button>

              <p className="text-center text-xs text-zinc-500">
                Make it memorable. Make it yours.
              </p>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default CreatePost;
