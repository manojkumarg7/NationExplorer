import React from "react";
import ContentLoader from "react-content-loader";

const Loading = () => {
  return (
    <div>
      <ContentLoader viewBox="0 0 400 160" height={160} width={400}>
        <rect x="10" y="10" rx="4" ry="4" width="380" height="30" />
        <rect x="10" y="50" rx="4" ry="4" width="380" height="30" />
      </ContentLoader>{" "}
    </div>
  );
};

export default Loading;
