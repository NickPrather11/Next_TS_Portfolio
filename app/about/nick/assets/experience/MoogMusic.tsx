import React from "react";

const MoogMusic = ({ ...props }: any) => {
  return (
    <div {...props}>
      <div className="flex flex-col md:flex-row md:justify-between 2xl:w-6/12">
        <h4 className="mb-0">Moog Music, Inc.</h4>
        <div className="flex flex-col md:flex-row">
          <h5 className="mb-0">June 2010 - May 2012&nbsp;</h5>
          <h5>& Sep 2014 - June 2015</h5>
        </div>
      </div>
      <p className="italic">
        Calibration Technician, Testing Technician, Repair Technician
      </p>
      <p className="pt-2 pl-4">JOB DESCRIPTION</p>
    </div>
  );
};

export default MoogMusic;
