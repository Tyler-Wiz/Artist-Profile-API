"use client";

import React from "react";

const SectionHeader = ({ title, summary }) => {
  return (
    <div>
      <h2 className="text-xl text-secondary font-medium mb-1">{title}</h2>
      <p className="text-sm text-text-secondary">{summary}</p>
    </div>
  );
};

export default SectionHeader;
