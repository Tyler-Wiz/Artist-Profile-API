"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const Table = ({
  headers,
  data,
  additionalHeaders,
  headerTitle,
  buttonLink,
  buttonText,
  SERVER_URL,
  editLink,
}) => {
  const router = useRouter();
  const deleteSong = async (id) => {
    try {
      const res = await axios.delete(`${SERVER_URL}${id}`, {
        withCredentials: true,
      });
      if (res.data) {
        router.refresh();
      }
      console.log(res.data);
    } catch (error) {
      toast(error.response.data.errorMessage);
    }
  };

  useEffect(() => {
    router.refresh();
  }, []);

  return (
    <>
      <h1 className="my-6 text-4xl text-secondary font-semibold m-0 p-0">
        {headerTitle}
      </h1>
      <div className="flex justify-end">
        <Link href={buttonLink}>
          <button className="border-2 p-2 border-primary bg-text-primary text-sm text-primary">
            {buttonText}
          </button>
        </Link>
      </div>
      <table className="min-w-full divide-y divide-gray-200 my-6 text-sm">
        <thead className="font-regular bg-gray-200 ">
          <tr>
            {headers.map((header) => (
              <th key={header} className="text-left p-4 capitalize">
                {header}
              </th>
            ))}
            {additionalHeaders.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200 capitalize">
          {Array.isArray(data) &&
            data.map((row, index) => (
              <tr key={index}>
                {headers.map((header) => (
                  <td className="p-4 whitespace-nowrap" key={header}>
                    {row[header]}
                  </td>
                ))}
                {additionalHeaders && (
                  <>
                    <td className=" text-primary font-bold p-4 whitespace-nowrap">
                      <Link href={`${editLink}${row.url}`}>
                        <button>Edit</button>
                      </Link>
                    </td>
                    <td className=" text-red-700 font-bold">
                      <button onClick={() => deleteSong(row.url)}>Trash</button>
                    </td>
                  </>
                )}
              </tr>
            ))}
          <tr></tr>
        </tbody>
      </table>
    </>
  );
};

export default Table;
