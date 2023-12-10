"use client";

import React, { useState } from "react";
import Image from "next/image";

const UploadForm = ({ handleImageSubmit, image }) => {
  return (
    <div className="">
      <div className="flex flex-col mb-4 items-center">
        <div className="mb-3 w-96">
          <label
            htmlFor="formFile"
            className="mb-2 inline-block text-neutral-700 dark:text-neutral-200">
            Featured Image
          </label>
          <input
            type="file"
            multiple
            name="myImage"
            accept="image/png, image/gif, image/jpeg, image/webp"
            onChange={handleImageSubmit}
            placeholder="image upload"
            className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
          />
        </div>
        {image && (
          <div
            aria-label="image-preview"
            className=" w-auto h-auto bg-gray-200 rounded-lg flex item items-center justify-center">
            <Image src={image} width={300} height={200} alt="image" />
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadForm;
