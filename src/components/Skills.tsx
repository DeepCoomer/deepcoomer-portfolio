// import React from 'react'
// import { Progress } from "@mantine/core";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/scss";
import {
  CPP,
  CSS3,
  DJANGO,
  HTML5,
  JAVA,
  JS,
  MongoDB,
  NODEJS,
  PYTHON,
  ReactJs,
  SQL,
  TS,
  Vite,
} from "../assets/index";
import { useViewportSize } from "@mantine/hooks";
import { Text } from "@mantine/core";

const Skills = () => {
  const { width } = useViewportSize();
  const logos = [
    HTML5,
    CSS3,
    JS,
    TS,
    ReactJs,
    Vite,
    NODEJS,
    MongoDB,
    SQL,
    PYTHON,
    DJANGO,
    CPP,
    JAVA,
  ];


  return (
    <div className="fourthSection" id="skills">
      <span className="text-gray">What I have learned so far</span>
      <h1>My Skills</h1>

      <div>
        <Swiper
          speed={1600}
          allowTouchMove={false}
          autoplay={{ delay: 0 }}
          spaceBetween={0}
          slidesPerView={width < 991 ? 4 : 6}
          loop={true}
          modules={[Autoplay]}
        >
          {logos.map((logo: any, i) => {
            return (
              <SwiperSlide key={i}>
                <div
                  style={{
                    height: width < 991? "80px": "",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {logo.icon}
                  <Text size={width>991?"md": "sm"}>{logo.name}</Text>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

    </div>
  );
};

export default Skills;
