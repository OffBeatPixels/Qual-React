"use client";
import Usecase1 from "../../assets/Usecase1.webp";
import Usecase2 from "../../assets/Usecase2.webp";
// import Usecase3 from "../../assets/Usecase3.webp";
import React, { useState } from "react";
import { WobbleCard } from "./WobbleCard";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

export default function WobbleCardDemo() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [modalContent, setModalContent] = useState({
    title: "",
    content: "",
  });

  // Function to Know More with dynamic content
  const openModal = (title, content) => {
    setModalContent({ title, content });
    onOpen(); // Opens the modal
  };

  return (
    <div>
      <h1 className="text-3xl sm:text-4xl text-center my-2   ">UseCases</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-[75rem] mx-auto w-full">
        {/* Modal Component */}
        <Modal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          className="bg-white mt-20 w-[90%]  overflow-y-scroll"
        >
          <ModalContent>
            <ModalHeader className="flex flex-col gap-1 ">
              {modalContent.title} {/* Modal Title */}
            </ModalHeader>
            <ModalBody>
              <p className="">{modalContent.content}</p> {/* Modal Content */}
            </ModalBody>
            {/* <ModalFooter>
              <Button color="danger" variant="light" onPress={onOpenChange}>
                Close
              </Button>
              <Button color="primary" onPress={onOpenChange}>
                Action
              </Button>
            </ModalFooter> */}
          </ModalContent>
        </Modal>

        {/* WobbleCard Section 1 */}
        <WobbleCard containerClassName="col-span-1 lg:col-span-2 h-full bg-[#8FABC3] min-h-[500px] lg:min-h-[300px]">
          <div className="max-w-xs">
            <p className="text-left text-balance text-base md:text-xl lg:text-3xl   tracking-[-0.015em] text-black">
              Sales Performance
            </p>
            <p className=" text-left text-base/6 text-black">
              At Qualiinsight, we offer a comprehensive Quality as a Service
              (QaaS) solution designed to enhance your sales process. Here’s how
              our service can transform your sales strategy.
            </p>
            <Button
              className="bg-gray-50 mt-5 rounded-lg"
              onPress={() =>
                openModal(
                  <section className="p-10 ">
                    <div className="max-w-6xl mx-auto space-y-4">
                      {/* Introduction */}
                      <div className="space-y-4 w-full">
                        {/* <div className="bg-gradient-to-b from-[#BF3352] via-[#b6d5f0]   to-[#ffffff]"> */}
                        <span className="text-2xl mt-10  font-semibold  bg-gradient-to-b from-[#ffffff] via-[#daeeff]   to-[#ffffff]   border-b-2 p-2">
                          Boost Your Sales with Quality as a Service (QaaS)
                        </span>
                        <p className="text-sm leading-relaxed">
                          At Qualiinsight, we offer a comprehensive Quality as a
                          Service (QaaS) solution designed to enhance your sales
                          process. Here’s how our service can transform your
                          sales strategy:
                        </p>

                        {/* Customer Experience Enhancement */}
                        <div className="">
                          <p className="text-xl font-medium   border-gray-200 ">
                            Customer Experience Enhancement
                          </p>
                          <p className=" text-sm text-justify leading-relaxed">
                            We ensure every customer interaction is positive,
                            addressing pain points effectively to foster trust
                            and loyalty, driving sales growth.
                          </p>
                        </div>

                        {/* Quality Management Systems (QMS) */}
                        <div className="">
                          <p className="text-xl font-medium   border-gray-200 ">
                            Quality Management Systems (QMS)
                          </p>
                          <p className=" text-sm text-justify leading-relaxed">
                            We implement QMS to streamline sales processes,
                            reduce errors, and enhance operational efficiency,
                            making your sales pitch more compelling.
                          </p>
                        </div>

                        {/* Decode the Voice of Customers */}
                        <div className="">
                          <p className="text-xl font-medium   border-gray-200 ">
                            Decode the Voice of Customers
                          </p>
                          <p className=" text-sm text-justify leading-relaxed">
                            Move towards customer-centric selling by
                            comprehending the customer needs and their key pain
                            points to create upselling and cross-selling
                            opportunities.
                          </p>
                        </div>

                        {/* Case Study Utilization */}
                        <div className="">
                          <p className="text-xl font-medium   border-gray-200 ">
                            Case Study Utilization
                          </p>
                          <p className=" text-sm text-justify leading-relaxed">
                            We conduct targeted studies that prioritize business
                            needs, market trends, and product features. Our
                            approach identifies value-added insights, empowering
                            business leaders to develop strategies that enhance
                            sales, brand value, product strength, and customer
                            experience. This method goes beyond traditional
                            quality approaches, maximizing the results generated
                            from your QA systems.
                          </p>
                        </div>

                        {/* Data-Driven Insights */}
                        <div className="">
                          <p className="text-xl font-medium   border-gray-200 ">
                            Data-Driven Insights
                          </p>
                          <p className=" text-sm text-justify leading-relaxed">
                            Our QaaS solution analyzes customer interactions and
                            sales processes to refine pitches, improve
                            targeting, enhance platform and product features,
                            and elevate user experience, ultimately driving
                            overall sales effectiveness.
                          </p>
                        </div>

                        {/* Continuous Improvement */}
                        <div className="">
                          <p className="text-xl font-medium   border-gray-200 ">
                            Continuous Improvement
                          </p>
                          <p className=" text-sm text-justify leading-relaxed">
                            Adopting a Total Quality Management (TQM) approach,
                            we ensure continuous improvement through regular
                            evaluations and feedback sessions.
                          </p>
                        </div>
                      </div>

                      {/* Best Practices for Sales Improvement */}
                      <div className="">
                        <p className="text-2xl mt-10  font-semibold  bg-gradient-to-b from-[#ffffff] via-[#daeeff]   to-[#ffffff]   border-b-2 p-2 w-fit ">
                          Best Practices for Sales Improvement
                        </p>
                        <ul className="pl-6 mt-2 text-sm text-justify space-y-3 list-disc ">
                          <li>
                            <span className=" ">
                              Drive Lead Generation Quality:
                            </span>{" "}
                            Enhance the quality of leads by refining targeting
                            criteria and optimizing lead sourcing strategies.
                          </li>
                          <li>
                            <span className=" ">
                              Review End-to-End Customer Engagement Journey:
                            </span>
                            Conduct a comprehensive analysis of the entire
                            customer engagement process to identify
                            opportunities for improvement.
                          </li>
                          <li>
                            <span className=" ">
                              {" "}
                              Reduce Customer Objections:
                            </span>{" "}
                            Implement strategies to anticipate and address
                            potential customer objections, leading to smoother
                            sales conversations.
                          </li>
                          <li>
                            <span className=" "> Test & Learn Framework: </span>{" "}
                            Introduce a continuous improvement approach by
                            testing new processes, systems, and tools to
                            identify the most effective sales tactics.
                          </li>
                          <li>
                            <span className=" "> </span> Design Personalized
                            Sales Strategies: Develop tailored sales strategies
                            that align with customer needs and the current
                            market landscape, ensuring a more targeted approach.
                          </li>
                          <li>
                            <span className=" "> </span> Improve Customer
                            Educational Resources and Self-Serve Content:
                            Enhance the availability and quality of educational
                            resources, empowering customers with self-service
                            options to reduce friction and build trust.
                          </li>
                        </ul>
                      </div>

                      {/* Why Choose Our QaaS */}
                      <div className="">
                        <p className="text-2xl mt-10  font-semibold  bg-gradient-to-b from-[#ffffff] via-[#daeeff]   to-[#ffffff]   border-b-2 p-2 w-fit ">
                          Why Choose Our QaaS?
                        </p>
                        <p className=" text-sm mt-2 text-justify leading-relaxed">
                          Leverage our expertise, innovative framework, and
                          data-driven insights to drive sales growth.
                        </p>
                        <ul className="mt-4 text-sm pl-6 space-y-3 list-disc  text-justify">
                          <li>
                            Expertise: Leverage our extensive experience in
                            quality management to drive superior outcomes.
                          </li>
                          <li>
                            Innovative QaaS Framework: Our industry-leading QaaS
                            framework delivers value beyond traditional
                            transaction monitoring.
                          </li>
                          <li>
                            Maturity-Driven Approach: Our methodology is
                            supported by a process maturity model, aligning with
                            your business’s maturity to maximize outcomes.
                          </li>
                          <li>
                            360-Degree Collaboration: We foster seamless
                            collaboration across multi-vendor environments and
                            cross-functional teams, transforming insights into
                            actionable results.
                          </li>
                          <li>
                            Data-Driven: We provide actionable, data-driven
                            insights to fuel continuous improvement.
                          </li>
                          <li>
                            Customer-Centric: Our focus is on delivering
                            exceptional customer experiences, ensuring your
                            success.
                          </li>
                          <li>
                            Proven Success: Backed by a track record of
                            demonstrated results and success stories.
                          </li>
                        </ul>
                      </div>

                      {/* Conclusion */}
                      <div className="">
                        <p className="text-2xl mt-10  font-semibold  bg-gradient-to-b from-[#ffffff] via-[#daeeff]   to-[#ffffff]   border-b-2 p-2 w-fit ">
                          Conclusion
                        </p>
                        <p className=" text-sm mt-2 text-justify leading-relaxed">
                          Integrate our QaaS into your outbound sales strategy
                          to improve customer satisfaction, operational
                          efficiency, and sales performance. Contact us today to
                          learn more about transforming your sales strategy and
                          driving business growth.
                        </p>
                      </div>
                    </div>
                  </section>
                )
              }
            >
              Know More
            </Button>
          </div>
          <img
            src={Usecase1}
            width={500}
            height={500}
            alt="Sales Performance"
            className="absolute -right-4 lg:-right-[20%] grayscale filter -bottom-10 object-contain rounded-2xl"
          />
        </WobbleCard>

        {/* WobbleCard Section 2 */}
        <WobbleCard containerClassName="col-span-1 min-h-[300px]">
          <p className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl   tracking-[-0.015em] text-black">
            Content Services
          </p>
          <p className=" max-w-[26rem] text-left text-base/6 text-black">
            We specialize in empowering and training content moderation tools to
            effectively monitor and filter user-generated content across various
            digital platforms.
          </p>
          <Button
            className="bg-gray-50 mt-5 rounded-lg"
            onPress={() =>
              openModal(
                <section className="p-10 bg-gray-50 ">
                  <div className="max-w-6xl mx-auto space-y-4">
                    {/* Introduction */}
                    <div className="">
                      <p className="text-2xl mt-10  font-semibold  bg-gradient-to-b from-[#ffffff] via-[#f8e3d4]   to-[#ffffff]   border-b-2 p-2 w-fit">
                        Content Services
                      </p>
                      <p className="text-sm leading-relaxed text-justify">
                        We specialize in empowering and training content
                        moderation tools to effectively monitor and filter
                        user-generated content across various digital platforms.
                        Our services enhance these tools' ability to detect and
                        flag inappropriate, offensive, or harmful content,
                        thereby improving their output quality. This approach
                        offers several key benefits:
                      </p>
                    </div>

                    {/* Maintain Brand Reputation */}
                    <div className="">
                      <p className="text-xl font-medium   border-gray-200 ">
                        Maintain Brand Reputation
                      </p>
                      <p className=" text-sm text-justify leading-relaxed">
                        By ensuring that the content associated with your brand
                        aligns with your values and standards, our content
                        moderation services help maintain a consistent and
                        positive brand image. This is crucial for protecting
                        your brand's reputation in an environment where
                        user-generated content can be unpredictable.
                      </p>
                    </div>

                    {/* Ensure Regulatory Compliance */}
                    <div className="">
                      <p className="text-xl font-medium   border-gray-200 ">
                        Ensure Regulatory Compliance
                      </p>
                      <p className=" text-sm text-justify leading-relaxed">
                        Our services help you adhere to legal and regulatory
                        requirements by filtering out content that could lead to
                        legal issues. This proactive approach minimizes the risk
                        of non-compliance and potential legal repercussions.
                      </p>
                    </div>

                    {/* Safeguard User Experiences */}
                    <div className="">
                      <p className="text-xl font-medium   border-gray-200 ">
                        Safeguard User Experiences
                      </p>
                      <p className=" text-sm text-justify leading-relaxed">
                        Creating a safe and welcoming environment for all users
                        is essential. Our services prevent exposure to harmful
                        or offensive material, ensuring a positive user
                        experience. This not only enhances user satisfaction but
                        also fosters a more engaged and loyal user base.
                      </p>
                    </div>

                    {/* Efficiency and Quality */}
                    <div className="">
                      <p className="text-xl font-medium   border-gray-200 ">
                        Efficiency and Quality
                      </p>
                      <p className=" text-sm text-justify leading-relaxed">
                        Leveraging our tried and tested Quality Framework, we
                        provide accurate and efficient content moderation. This
                        not only enhances the quality of user interactions but
                        also reduces the burden on human moderators, allowing
                        them to focus on more complex moderation tasks.
                      </p>
                    </div>

                    {/* Proactive Policy Management */}
                    <div className="">
                      <p className="text-xl font-medium   border-gray-200 ">
                        Proactive Policy Management
                      </p>
                      <p className=" text-sm text-justify leading-relaxed">
                        <strong>Without QaaS:</strong> Policies may not be
                        updated promptly or may lack clarity, leading to
                        incorrect content moderation. This creates significant
                        business risks, impacts customer experience, and can
                        result in compliance or legal issues due to
                        inappropriate content on the platform.
                      </p>
                      <p className=" text-sm text-justify leading-relaxed">
                        <strong>With QaaS:</strong> Our clients benefit from
                        regularly updated moderation policies, aligned with
                        current laws and regional regulations. Independent
                        Quality teams audit these policies frequently, ensuring
                        clarity and up-to-date information, reducing risks, and
                        enhancing compliance.
                      </p>
                    </div>

                    {/* Maintaining a Dynamic Golden Dataset */}
                    <div className="">
                      <p className="text-xl font-medium   border-gray-200 ">
                        Maintaining a Dynamic 'Golden Dataset'
                      </p>
                      <p className=" text-sm text-justify leading-relaxed">
                        <strong>Without QaaS:</strong> An outdated or poorly
                        maintained 'Golden Dataset' makes it challenging to
                        gauge the accuracy of content moderation, leaving
                        moderators without the necessary tools to stay updated
                        on recent changes. This can lead to inconsistent
                        moderation and gaps in knowledge.
                      </p>
                      <p className=" text-sm text-justify leading-relaxed">
                        <strong>With QaaS:</strong> A well-maintained 'Golden
                        Dataset' ensures that moderator calibrations are always
                        relevant, contributing to sustained high-quality content
                        moderation and the continuous education of moderators on
                        recent changes.
                      </p>
                    </div>

                    {/* Enhancing AI Moderation Logic */}
                    <div className="">
                      <p className="text-xl font-medium   border-gray-200 ">
                        Enhancing AI Moderation Logic
                      </p>
                      <p className=" text-sm text-justify leading-relaxed">
                        <strong>Without QaaS:</strong> The absence of a
                        structured process for continuously enhancing AI
                        moderation can lead to increased manual work, higher
                        operational costs, and a greater likelihood of incorrect
                        content slipping through moderation.
                      </p>
                      <p className=" text-sm text-justify leading-relaxed">
                        <strong>With QaaS:</strong> Our framework not only
                        refines human moderation practices but also enhances AI
                        moderation by providing continuous input based on recent
                        trends. This dual approach reduces manual workload, cuts
                        costs, and minimizes the risk of incorrect content being
                        uploaded.
                      </p>
                    </div>

                    {/* Effective Knowledge Dissemination */}
                    <div className="">
                      <p className="text-xl font-medium   border-gray-200 ">
                        Effective Knowledge Dissemination
                      </p>
                      <p className=" text-sm text-justify leading-relaxed">
                        <strong>Without QaaS:</strong> Inconsistent knowledge
                        dissemination can hinder the implementation of new
                        updates and changes, resulting in incorrect content
                        moderation and overall inefficiency.
                      </p>
                      <p className=" text-sm text-justify leading-relaxed">
                        <strong>With QaaS:</strong> Structured systems ensure
                        that policy and process updates are effectively
                        communicated to all moderators, reducing dependency on
                        individual understanding and ensuring consistent
                        implementation of new changes.
                      </p>
                    </div>

                    {/* Focused Studies and Strategic Insights */}
                    <div className="">
                      <p className="text-xl font-medium   border-gray-200 ">
                        Focused Studies and Strategic Insights
                      </p>
                      <p className=" text-sm text-justify leading-relaxed">
                        <strong>Without QaaS:</strong> The lack of focused
                        studies makes it difficult to identify and leverage
                        test-and-learn opportunities in Trust & Safety,
                        potentially leading to missed chances for improvement.
                      </p>
                      <p className=" text-sm text-justify leading-relaxed">
                        <strong>With QaaS:</strong> Focused studies provide
                        strategic insights into market trends, facilitating a
                        test-and-learn approach that enhances moderation quality
                        and reduces costs.
                      </p>
                    </div>

                    {/* Targeted Sampling Approach */}
                    <div className="">
                      <p className="text-xl font-medium   border-gray-200 ">
                        Targeted Sampling Approach
                      </p>
                      <p className=" text-sm text-justify leading-relaxed">
                        <strong>Without QaaS:</strong> Without a targeted
                        sampling approach, moderation efforts may be spread too
                        thin, leading to inefficiencies and a less effective
                        allocation of resources where they are most needed.
                      </p>
                      <p className=" text-sm text-justify leading-relaxed">
                        <strong>With QaaS:</strong> Targeted sampling ensures
                        that moderation efforts are focused on the most critical
                        areas, maximizing effectiveness and efficiency.
                      </p>
                    </div>

                    {/* Best Practices for Content Moderation */}
                    <div className="">
                      <p className="text-2xl mt-10  font-semibold  bg-gradient-to-b from-[#ffffff] via-[#f8e3d4]   to-[#ffffff]   border-b-2 p-2 w-fit">
                        Best Practices for Content Moderation (with QaaS)
                      </p>
                      <ul className="mt-4 pl-6 space-y-3 list-disc text-sm  text-justify">
                        <li>
                          Centralized Quality Monitoring: Independent audits by
                          a central team across regions, markets, and vendors
                          ensure consistent application of best practices,
                          boosting standardization and fostering continuous
                          improvement.
                        </li>
                        <li>
                          Cost-Effectiveness: The reduced cost per acquisition
                          enables businesses to allocate more resources towards
                          core activities, freeing up capital for future
                          investments and strategic initiatives.
                        </li>
                        <li>
                          Focus on Core Business Activities: Outsourcing quality
                          management allows internal teams to focus on their
                          primary tasks and long-term strategy, leading to more
                          effective operations and a sharper business focus.
                        </li>
                        <li>
                          Drive Efficiency: Leveraging specialized outsourcing
                          leads to a more efficient service, with higher
                          productivity and improved content moderation quality,
                          contributing to overall business success.
                        </li>
                        <li>
                          Objective Evaluation: Independent quality audits
                          ensure transparency and unbiased results, with
                          separate teams handling moderation and quality
                          management, thus enhancing trust and integrity.
                        </li>
                        <li>
                          Standardization: Businesses benefit from better
                          process control and a standardized approach across
                          vendors and internal teams, ensuring consistent
                          quality across the board.
                        </li>
                        <li>
                          Drive Transformation/Improvements: The approach offers
                          the opportunity to transition from traditional QA
                          practices to advanced analytics and consulting,
                          driving continuous improvements and business
                          transformation.
                        </li>
                        <li>
                          Holistic Support: Comprehensive support extends across
                          all cross-functional teams, ensuring cohesive
                          operations and aligned goals across the organization.
                        </li>
                      </ul>
                    </div>

                    {/* Why Choose Our QaaS? */}
                    <div className="">
                      <p className="text-2xl mt-10  font-semibold  bg-gradient-to-b from-[#ffffff] via-[#f8e3d4]   to-[#ffffff]   border-b-2 p-2 w-fit">
                        Why Choose Our QaaS?
                      </p>
                      <ul className="mt-4 pl-6 space-y-3 list-disc text-sm  text-justify">
                        <li>
                          Expertise: Leverage our extensive experience in
                          quality management to optimize your Trust & Safety
                          operations, ensuring your business remains compliant
                          and competitive.
                        </li>
                        <li>
                          Best-in-Class QaaS Framework: Our industry-first QaaS
                          framework delivers value beyond traditional
                          transaction monitoring, offering a comprehensive
                          approach that enhances both quality and efficiency in
                          content moderation.
                        </li>
                        <li>
                          Process Maturity Model: Our approach is supported by a
                          process maturity model that aligns with your
                          business's growth stages, boosting outcomes by
                          integrating quality management with business maturity.
                        </li>
                        <li>
                          360-Degree Collaboration: We facilitate a
                          collaborative framework that seamlessly integrates
                          with multi-vendor environments and cross-functional
                          stakeholders, driving actionable insights that lead to
                          tangible improvements.
                        </li>
                        <li>
                          Data-Driven Insights: Our QaaS is grounded in
                          data-driven analysis, providing actionable insights
                          for continuous improvement and informed
                          decision-making.
                        </li>
                        <li>
                          Customer-Centric Focus: We prioritize exceptional
                          customer experiences, ensuring that your Trust &
                          Safety practices are aligned with your business's
                          commitment to its users.
                        </li>
                        <li>
                          Proven Success: Our track record speaks for itself,
                          with demonstrated results across various industries
                          through case studies that highlight the impact of our
                          QaaS on business outcomes.
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>
              )
            }
          >
            Know More
          </Button>
        </WobbleCard>

        {/* WobbleCard Section 3 */}
        <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-[#EDC05F]  min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
          <div className="max-w-sm">
            <p className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl   tracking-[-0.015em] text-black">
              Contact Center
            </p>
            <p className=" max-w-[26rem] text-left text-base/6 text-black">
              At Qualiinsight, we offer a state-of-the-art Quality as a Service
              (QaaS) solution designed to revolutionize your contact center
              operations.
            </p>
            <Button
              className="bg-gray-50 mt-5 rounded-lg"
              onPress={() =>
                openModal(
                  <section className="p-10 text-justify bg-gray-50 ">
                    <div className="max-w-6xl mx-auto space-y-4">
                      {/* Introduction */}
                      <div className="space-y-6">
                        <p className="text-2xl mt-10  font-semibold  bg-gradient-to-b from-[#ffffff] via-[#ffeabc]   to-[#ffffff]   border-b-2 p-2 w-fit">
                          Transform Your Contact Center Operations with Our
                          Comprehensive QaaS Solution
                        </p>
                        <p className="text-sm leading-relaxed text-justify">
                          At Qualiinsight, we offer a state-of-the-art Quality
                          as a Service (QaaS) solution designed to revolutionize
                          your contact center operations. Our QaaS service
                          combines advanced technology, expert insights, and
                          best practices to enhance customer satisfaction,
                          streamline processes, and boost overall performance.
                        </p>
                      </div>

                      {/* Our QaaS Offering Includes */}
                      <div className="space-y-6">
                        <p className="text-2xl mt-10  font-semibold  bg-gradient-to-b from-[#ffffff] via-[#ffeabc]   to-[#ffffff]   border-b-2 p-2 w-fit">
                          Our QaaS Offering Includes:
                        </p>

                        {/* Robust QA Framework Implementation */}
                        <div className="">
                          <p className="text-xl font-medium   border-gray-200 ">
                            Robust QA Framework Implementation
                          </p>
                          <p className=" text-sm text-justify leading-relaxed">
                            We establish a comprehensive QA framework tailored
                            to your business needs, including:
                          </p>
                          <ul className="mt-4 pl-6 list-disc space-y-2 text-sm  text-justify">
                            <li>
                              <strong>
                                Key Performance Indicators (KPIs):
                              </strong>{" "}
                              We help you define and monitor essential KPIs such
                              as Customer Satisfaction (CSAT), First Call
                              Resolution (FCR), Net Promoter Score (NPS), and
                              Average Handling Time (AHT).
                            </li>
                            <li>
                              <strong>Quality Scores:</strong> Our system
                              provides detailed quality scores to evaluate agent
                              performance and identify improvement areas.
                            </li>
                          </ul>
                        </div>

                        {/* Advanced QA Tools and Technologies */}
                        <div className="">
                          <p className="text-xl font-medium   border-gray-200 ">
                            Advanced QA Tools and Technologies
                          </p>
                          <p className=" text-sm text-justify leading-relaxed">
                            Utilize our cutting-edge QA tools to automate and
                            enhance your QA processes:
                          </p>
                          <ul className="mt-4 pl-6 list-disc space-y-2 text-sm  text-justify">
                            <li>
                              <strong>Automated Call Monitoring:</strong> Our
                              tools and Frameworks offer real-time analytics and
                              scoring to ensure unbiased evaluations and
                              efficient monitoring.
                            </li>
                            <li>
                              <strong>AI and Analytics:</strong> Leverage
                              AI-powered analytics to gain deep insights from
                              customer interactions across various channels
                              (calls, emails, chats, social media).
                            </li>
                          </ul>
                        </div>

                        {/* Continuous Training and Coaching Programs */}
                        <div className="">
                          <p className="text-xl font-medium   border-gray-200 ">
                            Continuous Training and Coaching Programs
                          </p>
                          <p className=" text-sm text-justify leading-relaxed">
                            We provide regular training and coaching sessions to
                            maintain high service standards:
                          </p>
                          <ul className="mt-4 pl-6 list-disc space-y-2 text-sm  text-justify">
                            <li>
                              <strong>Personalized Coaching:</strong> Using data
                              from QA evaluations, we deliver targeted coaching
                              and training to your agents.
                            </li>
                            <li>
                              <strong>Feedback Mechanisms:</strong> Our system
                              ensures continuous feedback to help agents improve
                              their skills and performance.
                            </li>
                          </ul>
                        </div>

                        {/* Agent Engagement and Empowerment */}
                        <div className="">
                          <p className="text-xl font-medium   border-gray-200 ">
                            Agent Engagement and Empowerment
                          </p>
                          <p className=" text-sm text-justify leading-relaxed">
                            We believe in involving agents in the QA process for
                            better outcomes:
                          </p>
                          <ul className="mt-4 pl-6 list-disc space-y-2 text-sm  text-justify">
                            <li>
                              <strong>Agent Involvement:</strong> We include
                              agents in the development and calibration of QA
                              programs to foster a sense of ownership and
                              collaboration.
                            </li>
                            <li>
                              <strong>Supportive Work Culture:</strong> We help
                              create a supportive environment where agents feel
                              valued and motivated to perform their best.
                            </li>
                          </ul>
                        </div>

                        {/* Regular Monitoring and Evaluation */}
                        <div className="">
                          <p className="text-xl font-medium   border-gray-200 ">
                            Regular Monitoring and Evaluation
                          </p>
                          <p className=" text-sm text-justify leading-relaxed">
                            Our service includes consistent monitoring and
                            evaluation for continuous improvement:
                          </p>
                          <ul className="mt-4 pl-6 list-disc space-y-2 text-sm  text-justify">
                            <li>
                              <strong>Real-Time Monitoring:</strong> Implement
                              real-time call monitoring to provide immediate
                              feedback and address issues as they arise.
                            </li>
                            <li>
                              <strong>Regular Reviews:</strong> Conduct regular
                              reviews of QA data to identify trends and areas
                              for improvement.
                            </li>
                          </ul>
                        </div>

                        {/* Strategic Integration */}
                        <div className="">
                          <p className="text-xl font-medium  border-gray-200 ">
                            Strategic Integration
                          </p>
                          <p className=" text-sm text-justify leading-relaxed">
                            We align QA efforts with your organization's
                            strategic goals:
                          </p>
                          <ul className="mt-4 pl-6 list-disc space-y-2 text-sm  text-justify">
                            <li>
                              <strong>Cross-Functional Insights:</strong> Use QA
                              insights to inform other departments such as
                              product development and sales, ensuring a cohesive
                              approach to customer experience.
                            </li>
                            <li>
                              <strong>Enterprise Quality Management:</strong>{" "}
                              Extend QA beyond the contact center to align with
                              broader business objectives, ensuring all
                              departments contribute to the overall customer
                              experience.
                            </li>
                          </ul>
                        </div>

                        {/* Customer-Centric Approach */}
                        <div className="">
                          <p className="text-xl font-medium   border-gray-200 ">
                            Customer-Centric Approach
                          </p>
                          <p className=" text-sm text-justify leading-relaxed">
                            Our QaaS solution adopts a customer-centric mindset
                            to enhance customer satisfaction:
                          </p>
                          <ul className="mt-4 pl-6 list-disc space-y-2 text-sm  text-justify">
                            <li>
                              <strong>Customer Journey Mapping:</strong> Analyze
                              the customer journey to identify pain points and
                              improve touchpoints.
                            </li>
                            <li>
                              <strong>Customer Feedback:</strong> Regularly
                              collect and act on customer feedback to refine QA
                              processes and improve service quality.
                            </li>
                          </ul>
                        </div>

                        {/* Benefits of Our QaaS Solution */}
                        <div className="">
                          <p className="text-2xl mt-10  font-semibold  bg-gradient-to-b from-[#ffffff] via-[#ffeabc]   to-[#ffffff]   border-b-2 p-2 w-fit ">
                            Benefits of Our QaaS Solution
                          </p>
                          <ul className="mt-4 pl-6 list-disc space-y-2 text-sm  text-justify">
                            <li>
                              <strong>Improved Customer Satisfaction:</strong>{" "}
                              Our enhanced QA processes lead to better customer
                              interactions, increasing satisfaction and loyalty.
                            </li>
                            <li>
                              <strong>Operational Efficiency:</strong>{" "}
                              Automation and advanced analytics streamline QA
                              processes, reducing manual workload and improving
                              efficiency.
                            </li>
                            <li>
                              <strong>Agent Performance:</strong> Continuous
                              training and feedback help agents perform better,
                              reducing turnover and increasing job satisfaction.
                            </li>
                            <li>
                              <strong>Strategic Alignment:</strong> Integrating
                              QA with business goals ensures that all efforts
                              are aligned towards improving the overall customer
                              experience.
                            </li>
                          </ul>
                        </div>

                        {/* Why Choose Qualiinsight */}
                        <div className="">
                          <p className="text-2xl mt-10  font-semibold  bg-gradient-to-b from-[#ffffff] via-[#ffeabc]   to-[#ffffff]   border-b-2 p-2 w-fit ">
                            Why Choose Qualiinsight
                          </p>
                          <p className=" text-sm text-justify leading-relaxed">
                            At Qualiinsight, we are committed to delivering
                            exceptional quality assurance services that drive
                            business growth and enhance customer experiences.
                            Partner with us to transform your contact center
                            operations with our comprehensive QaaS solution.
                          </p>
                          <p className=" text-sm text-justify leading-relaxed">
                            Contact us today to learn more about how we can help
                            you achieve excellence in your contact center
                            operations.
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>
                )
              }
            >
              Know More
            </Button>
          </div>
          <img
            src={Usecase2}
            width={500}
            height={500}
            alt="Contact Center"
            className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
          />
        </WobbleCard>
      </div>
    </div>
  );
}








// import React from "react";



// const useCases = [
//   {
//     title: "Use Case 1",
//     description: "Transform how you handle tasks with automation.",
//     buttonText: "Learn More",
//   },
//   {
//     title: "Use Case 2",
//     description: "Streamline your operations with cutting-edge tools.",
//     buttonText: "Discover More",
//   },
//   {
//     title: "Use Case 3",
//     description: "Enhance productivity with advanced analytics.",
//     buttonText: "Explore",
//   },
//   {
//     title: "Use Case 4",
//     description: "Revolutionize your communication strategies.",
//     buttonText: "Read More",
//   },
//   // Add more use cases as needed
// ];

// export default function WobbleCardDemo() {
//   return (
//     <section className="relative bg-gradient-to-b from-gray-50 to-gray-100 py-12">
//       <div className="max-w-7xl mx-auto px-6 lg:px-8">
//         <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
//           Explore Our Use Cases
//         </h2>
//         <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {useCases.map((useCase, index) => (
//             <div
//               key={index}
//               className={`group relative transform hover:scale-105 transition-transform ${
//                 index % 2 === 0 ? "lg:translate-y-4" : "lg:-translate-y-4"
//               }`}
//             >
//               <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity"></div>
//               <div className="relative bg-white border border-gray-200 rounded-xl p-6 shadow-lg">
//                 <h3 className="text-2xl font-semibold text-gray-800 mb-4">
//                   {useCase.title}
//                 </h3>
//                 <p className="text-gray-600 mb-6">{useCase.description}</p>
//                 <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors shadow-md">
//                   {useCase.buttonText}
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// import React from "react";

// export default function WobbleCardDemo() {
//   return (
//     <div className="min-h-screen bg-[#0a0a1a] p-8 space-y-8">
//       {/* First Row */}
//       <div className="flex items-center justify-between gap-4">
//         <div className="flex items-center flex-1">
//           <div className="w-12 h-12 absolute bg-[#5d5299] z-0 clip-arrow-left transform origin-center" />
//           <div className="flex-1 h-16  bg-white" />
//         </div>
//         <div className="w-16 h-16 bg-[#5d5299]" />
//       </div>

//       {/* Second Row */}
//       <div className="flex items-center justify-between gap-4">
//         <div className="w-16 h-16 bg-[#2a9d8f]" />
//         <div className="flex items-center flex-1">
//           <div className="flex-1 h-16 bg-white" />
//           <div className="w-12 h-12 bg-[#09090b]  clip-arrow-right transform origin-center" />
//         </div>
//       </div>

//       {/* Third Row */}
//       <div className="flex items-center justify-between gap-4">
//         <div className="flex items-center flex-1">
//           <div className="w-12 h-20 bg-[#5d5299] clip-arrow-left transform origin-center" />
//           <div className="flex-1 h-16 bg-white" />
//         </div>
//         <div className="w-16 h-16 bg-[#5d5299]" />
//       </div>

//       {/* Fourth Row */}
//       <div className="flex items-center justify-between gap-4">
//         <div className="w-16 h-16 bg-[#2a9d8f]" />
//         <div className="flex items-center flex-1">
//           <div className="flex-1 h-16 bg-white" />
//           <div className="w-12 h-12 bg-[#5d5299] -rotate-45 transform origin-center" />
//         </div>
//       </div>
//     </div>
//   );
// };



