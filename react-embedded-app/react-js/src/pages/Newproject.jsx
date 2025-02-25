import React, { Suspense } from "react";

const OtherProject = React.lazy(() => import("../../../react-ts/src/App"));

const Newproject = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <OtherProject />
    </Suspense>
  );
};

export default Newproject;
