import React from "react";
import AddArtist from "./AddArtist";
import QuickInfo from "./QuickInfo";
import LatestActivity from "./LatestActivity";
import AdminLayout from "../shared/AdminLayout";

const Homepage = ({ songs, artists }) => {
  return (
    <AdminLayout>
      <h1
        className="my-6 text-4xl text-secondary font-semibold"
        aria-label="heading">
        Dashboard
      </h1>
      <div className="flex w-full gap-10">
        <div className="w-2/3">
          <section className="rounded-2xl shadow-md p-8 bg-white mb-10">
            <QuickInfo artists={artists} songs={songs} />
          </section>
          <section className="rounded-2xl shadow-md p-8 bg-white mb-10">
            <LatestActivity songs={songs} />
          </section>
        </div>
        <div className="w-2/4">
          <section className="rounded-2xl shadow-md p-8 bg-white">
            <AddArtist />
          </section>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Homepage;
