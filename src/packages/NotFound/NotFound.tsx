import React, { FC } from "react";

const NotFound: FC<{ type: string }> = ({ type }) => {
  return (
    <div className="min-h-[120px] text-white text-center flex items-center justify-center text-[28px] border border-red-400">
      Component &nbsp;<b>{type}</b> &nbsp; not found. Please create and
      customize the &nbsp;
      <b>{type}</b>&nbsp; component.
    </div>
  );
};

export default NotFound;
