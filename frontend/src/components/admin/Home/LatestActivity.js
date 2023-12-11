"use client";

import React from "react";
import SectionHeader from "./SectionHeader";
import convertDate from "@/utils/convertDate";

const LatestActivity = ({ allActivities }) => {
  let activities = allActivities?.slice(0, 4);

  return (
    <>
      <SectionHeader
        title="Activity"
        summary="All recent activities on the site"
      />
      <table className="min-w-full divide-y divide-gray-200 my-6 text-sm">
        <thead className="font-regular">
          <tr>
            <th className="text-left">#</th>
            <th className="text-left">Title</th>
            <th className="text-left">Published Date</th>
            <th className="text-left">Artist</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {activities?.map((item, i) => (
            <tr key={i}>
              <td className="py-2 whitespace-nowrap">{i + 1}</td>
              <td className="py-2 whitespace-nowrap">
                {item.title ? item.title : item.label}
              </td>
              <td className="p-4 whitespace-nowrap">
                {convertDate(item.created_at)}
              </td>
              <td className="py-2 whitespace-nowrap">{item.artist}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default LatestActivity;
