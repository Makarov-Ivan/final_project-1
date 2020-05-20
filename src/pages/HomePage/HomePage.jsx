import React from "react";
import { GreetingComponent } from "../../components/greetingComponent/greetingComponent";
import { AboutComponent } from "../../components/aboutComponent/aboutComponent";
export const HomePage = () => {
  return (
    <div className='homePage'>
      <h2>This is home page</h2>
      <GreetingComponent />
      <AboutComponent />
    </div>
  );
};
