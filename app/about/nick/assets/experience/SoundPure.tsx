import React from "react";

const SoundPure = ({ ...props }: any) => {
  return (
    <div {...props}>
      <div className="flex flex-col md:flex-row md:justify-between 2xl:w-6/12">
        <h4 className="mb-0">SoundPure, LLC</h4>
        <h5 className="align-center">Sep 2014 - Sep 2015</h5>
      </div>
      <p className="italic">Pro Audio Sales Expert</p>
      <p className="pt-2 pl-4">JOB DESCRIPTION</p>
    </div>
  );
};

export default SoundPure;
