import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";

const Home = () => {
  return (
    <main className="min-h-screen overflow-hidden bg-[#09090b] text-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <section className="relative mx-auto flex max-w-7xl flex-col items-center px-5 pb-20 pt-16 text-center sm:px-8 sm:pb-28 sm:pt-24">
        <div className="pointer-events-none absolute left-1/2 top-20 -z-0 h-72 w-72 -translate-x-1/2 rounded-full bg-purple-600/20 blur-[120px]" />

        <div className="relative mb-7 rounded-full border border-purple-400/20 bg-purple-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-purple-300 sm:text-sm">
          ✦ A space for your moments
        </div>

        <h1 className="relative max-w-4xl text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
          Every picture tells
          <br />a{" "}
          <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
            story.
          </span>
        </h1>

        <p className="relative mt-6 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">
          Capture your favorite moments, share images with meaningful captions,
          and discover beautiful posts from the community.
        </p>

        <div className="relative mt-9 flex w-full flex-col justify-center gap-4 sm:w-auto sm:flex-row">
          <Link
            to="/create-post"
            className="rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 px-7 py-4 font-bold shadow-lg shadow-purple-950/30 transition hover:-translate-y-1 hover:shadow-purple-500/20"
          >
            Create Your First Post <span className="ml-1">→</span>
          </Link>

          <Link
            to="/feed"
            className="rounded-xl border border-white/10 bg-white/5 px-7 py-4 font-semibold text-zinc-200 transition hover:border-purple-400/40 hover:bg-white/10"
          >
            Explore the Feed
          </Link>
        </div>

        <p className="relative mt-6 text-xs text-zinc-600">
          Your moments. Your stories. Your community.
        </p>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 sm:pb-28">
        <div className="mb-10 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-purple-300">
            What you can do
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Made for sharing moments<span className="text-fuchsia-400">.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-zinc-400 sm:text-base">
            Everything you need to turn a simple picture into a moment worth
            sharing.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          <article className="rounded-2xl border border-white/10 bg-[#18181b] p-6 transition hover:-translate-y-1 hover:border-purple-500/40 sm:p-7">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/15 text-2xl">
              📸
            </div>
            <h3 className="mt-5 text-xl font-bold">Share Images</h3>
            <p className="mt-3 text-sm leading-7 text-zinc-400">
              Upload your favorite images and give each one a place in your
              story.
            </p>
          </article>

          <article className="rounded-2xl border border-white/10 bg-[#18181b] p-6 transition hover:-translate-y-1 hover:border-purple-500/40 sm:p-7">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/15 text-2xl">
              ✍️
            </div>
            <h3 className="mt-5 text-xl font-bold">Add Captions</h3>
            <p className="mt-3 text-sm leading-7 text-zinc-400">
              Add a caption to express the thought, feeling, or story behind
              your image.
            </p>
          </article>

          <article className="rounded-2xl border border-white/10 bg-[#18181b] p-6 transition hover:-translate-y-1 hover:border-purple-500/40 sm:p-7">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/15 text-2xl">
              🌌
            </div>
            <h3 className="mt-5 text-xl font-bold">Explore the Feed</h3>
            <p className="mt-3 text-sm leading-7 text-zinc-400">
              Browse a responsive collection of posts and discover moments
              shared by others.
            </p>
          </article>
        </div>
      </section>

      {/* Bottom call to action */}
      <section className="mx-5 mb-12 rounded-3xl border border-purple-400/15 bg-gradient-to-br from-purple-950/50 via-[#18181b] to-fuchsia-950/30 px-6 py-12 text-center sm:mx-8 sm:px-10 sm:py-16">
        <h2 className="text-2xl font-extrabold sm:text-4xl">
          Have a moment to share?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-zinc-400 sm:text-base">
          Start creating your own posts and make your feed a reflection of the
          things you love.
        </p>
        <Link
          to="/create-post"
          className="mt-7 inline-flex rounded-xl bg-white px-6 py-3.5 font-bold text-zinc-950 transition hover:scale-105"
        >
          Start Creating →
        </Link>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-5 py-7 text-center">
        <p className="text-sm text-zinc-500">Made for moments that matter.</p>
        <p className="mt-2 text-xs text-zinc-700">
          © {new Date().getFullYear()} Moment. All rights reserved.
        </p>
      </footer>
    </main>
  );
};

export default Home;
