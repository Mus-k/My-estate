import React from "react";
import { Intro } from "../intro/Intro";
import { Modern } from "../modern/Modern";
import { Slider } from "../slider/Slider";

import { NewLetter } from "../newsletter/NewLetter";
import { Footer } from "../footer/Footer";

import { Dream } from "../dream/Dream";
import { View } from "../overview/View";

export const Main = () => {
  return (
    <div>
      <Intro />
      <Modern />
      <Slider />

      <Dream />
      <View />
      <NewLetter />
      <Footer />
    </div>
  );
};
