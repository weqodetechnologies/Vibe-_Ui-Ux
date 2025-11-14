import React from "react";
import Incubator from "./Incubator";
import PurpleBox from "../../components/ui/PurpleBox";

function IncubatorSection() {
  return (
    <section className="w-full mt-10">
      
      {/* HEADING FIRST */}
      <Incubator />

      {/* PURPLE BOX BELOW THE HEADING */}
      <div className="mt-6"> 
        <PurpleBox>
          {/* yaha tum baad me content add karoge */}
        </PurpleBox>
      </div>

    </section>
  );
}

export default IncubatorSection;
