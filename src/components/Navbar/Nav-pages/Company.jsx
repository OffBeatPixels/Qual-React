import React from 'react'
import Mission from "../../../assets/Mission.jpg"

export default function Company () {
  return (
    <div
      className=" "
      style={{
        backgroundImage: `url(${Mission})`,
        backgroundSize: "cover",
        backgroundPosition: "right",
        backgroundRepeat: "no-repeat",
        minHeight: "400px",
        position: "relative",
        backgroundPositionX: "100%",
      }}
    >
      <div className="md:w-1/2 md:text-justify  md:ml-20 p-8 md:p-10">
        <h1 className="text-4xl font-bold text-left mb-4">Our Mission</h1>
        <p>
          At QualiInsight, we envision a future where quality, insights,
          innovation, and research are the cornerstones of every business
          decision Our mission is to redefine the perception of quality from a
          mere cost center to a powerful transformation engine that provides a
          competitive edge in today’s dynamic market. We are committed to
          equipping businesses with the right data and insights, empowering them
          to make informed, strategic choices that foster excellence and
          sustainable growth. Our focus extends beyond immediate challenges; we
          aim to cultivate a culture of continuous improvement that paves the
          way for long-term success and innovation.
        </p>
        <p>
          In our pursuit of excellence, we are dedicated to accelerating the
          responsible advancement and deployment of Artificial General
          Intelligence (AGI) through our Quality as a Service (QaaS) framework.
          By integrating expert human feedback, we ensure that AGI outputs meet
          the highest quality standards, promoting fairness, inclusivity, and
          alignment with human values. Together, we strive to revolutionize
          decision-making processes, ensuring that quality remains at the heart
          of every choice. At QualiInsight, we are committed to driving
          innovation, enriching lives, and empowering organizations to thrive in
          an ever-evolving landscape.
        </p>
      </div>
    </div>
  );
}
