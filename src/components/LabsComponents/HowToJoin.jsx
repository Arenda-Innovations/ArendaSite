import React from "react";
import { TabItem, Tabs } from "flowbite-react";
import StudentJoin from "./StudentJoin";
import SponsorJoin from "./SponsorJoin";
export function HowToJoin() {
  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <h2 className="text-white text-3xl md:text-4xl font-bold text-center mb-8 satoshi-bold">
        How to Join
      </h2>
      <Tabs 
        aria-label="Join Options" 
        variant="underline" 
        className="bg-black border-none"
      >
        <TabItem 
          active 
          title="Students" 
          className="text-white hover:text-blue focus:text-blue satoshi-medium"
        >
          <StudentJoin/>
        </TabItem>
        <TabItem 
          title="Sponsors" 
          className="text-white hover:text-blue focus:text-blue satoshi-medium"
        >
          <SponsorJoin/>
        </TabItem>
      </Tabs>
    </div>
  );
}










export default HowToJoin;