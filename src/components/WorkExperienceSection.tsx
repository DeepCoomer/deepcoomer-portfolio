// import React from 'react'
import developerimg from "./developer.png";
import backendimg from "./backend.jpg";
import fullstackimg from "./fullstack.jpg";
import { useViewportSize } from "@mantine/hooks";
import { Timeline, Text } from "@mantine/core";

const WorkExperienceSection = () => {
  const { width } = useViewportSize();
  return (
    <section className="secondSection" id="#experience">
      <span className="text-gray">What I have done so far</span>
      <h1>Work Experience</h1>
      {width > 610 ? (
        <div className="box">
          <div className="vertical">
            <img src={developerimg} className="image-top" alt="" srcSet="" />
            <div className="vertical-title">
              Web Developer Intern TechqKonnect Pvt Ltd (June 2021 - Aug 2021 )
            </div>
            <div className="vertical-desc">
              Developed a website for client for maintaining data about
              patients. Worked on an inhouse project for connecting and transfer
              of data between IOT devices.
            </div>
          </div>
          <div className="vertical">
            <img src={backendimg} className="image-top" alt="" srcSet="" />
            <div className="vertical-title">
              Backend Developer Intern Rigbetel Labs (Dec 2021 - Jan 2022 )
            </div>
            <div className="vertical-desc">
              Worked on a MERN Stack Project. Built the backend using node js
              for a website that handles orders and delivery of products.
            </div>
          </div>
          <div className="vertical">
            <img src={fullstackimg} className="image-top" alt="" srcSet="" />
            <div className="vertical-title">
              FullStack Developer Shipmantra (Feb 2023 - July 2023 )
            </div>
            <div className="vertical-desc">
              Fixed major bugs on the website{" "}
              <a
                href="https://www.shipmantra.com/"
                style={{ color: "blue" }}
                target="_blank"
              >
                https://www.shipmantra.com/
              </a>
              . Added new features, redesigned the admin portal and migrated it
              from CRA to Vite React Js Typescript. Integrated a new shipper api
              in the backend for creating and placing orders.
            </div>
          </div>
        </div>
      ) : (
        <div>
          <br />
          <Timeline active={0} color="violet" bulletSize={25} reverseActive>
            <Timeline.Item bulletSize={25}>
              <Text color="blueviolet" size={"lg"}>
                Web Developer Intern
              </Text>
              <Text color="white" size={"md"}>
                TechqKonnect Pvt Ltd
              </Text>
              <Text size={"sm"} color="gray">
                Developed a website for client for maintaining data about
                patients. Worked on an inhouse project for connecting and
                transfer of data between IOT devices.
              </Text>
              <Text size="sm" mt={4} color="white">
                Jun 2021 - Aug 2021
              </Text>
            </Timeline.Item>

            <Timeline.Item bulletSize={25}>
              <Text color="blueviolet" size={"lg"}>
                Backend Developer Intern
              </Text>
              <Text color="white" size={"md"}>
                Rigbetel Labs
              </Text>
              <Text size={"sm"} color="gray">
                Worked on a MERN Stack Project. Built the backend using node js
                for a website that handles orders and delivery of products.
              </Text>
              <Text size="sm" mt={4} color="white">
                Dec 2021 - Jan 2022
              </Text>
            </Timeline.Item>
            <Timeline.Item bulletSize={25}>
              <Text color="blueviolet" size={"lg"}>
                FullStack Developer
              </Text>
              <Text color="white" size={"md"}>
                Shipmantra
              </Text>
              <Text size={"sm"} color="gray">
                Fixed major bugs on the website{" "}
                <a
                  href="https://www.shipmantra.com/"
                  target="_blank"
                  style={{ color: "blue" }}
                >
                  https://www.shipmantra.com/
                </a>
                . Added new features, redesigned the admin portal and migrated
                it from CRA to Vite React Js Typescript.Integrated a new shipper
                api in the backend for creating and placing orders.
              </Text>
              <Text size="sm" mt={4} color="white">
                Feb 2023 - July 2023
              </Text>
            </Timeline.Item>
          </Timeline>
        </div>
      )}
    </section>
  );
};

export default WorkExperienceSection;
