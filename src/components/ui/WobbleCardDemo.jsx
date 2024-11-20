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

export function WobbleCardDemo() {
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
      {" "}
      <h1 className="text-3xl sm:text-4xl text-center my-2 font-bold text-gray-800">
        UseCase
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
        {/* Modal Component */}
        <Modal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          className="bg-white mt-40 w-1/2 h-[25rem] overflow-y-scroll"
        >
          <ModalContent>
            <ModalHeader className="flex flex-col gap-1 ">
              {modalContent.title} {/* Modal Title */}
            </ModalHeader>
            <ModalBody>
              <p className="">{modalContent.content}</p> {/* Modal Content */}
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onOpenChange}>
                Close
              </Button>
              <Button color="primary" onPress={onOpenChange}>
                Action
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

        {/* WobbleCard Section 1 */}
        <WobbleCard containerClassName="col-span-1 lg:col-span-2 h-full bg-[#B59F78] min-h-[500px] lg:min-h-[300px]">
          <div className="max-w-xs">
            <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Sales Performance
            </h2>
            <p className="mt-4 text-left text-base/6 text-neutral-200">
              At Qualiinsight, we offer a comprehensive Quality as a Service
              (QaaS) solution designed to enhance your sales process. Here’s how
              our service can transform your sales strategy.
            </p>
            <Button
              className="bg-gray-50 mt-5 rounded-lg"
              onPress={() =>
                openModal(
                  "Boost Your Sales with Quality as a Service (QaaS)",
                  `At Qualiinsight, we offer a comprehensive Quality as a Service (QaaS) solution designed to enhance your sales process. Here’s how our service can transform your sales strategy:
                
                Customer Experience Enhancement
                We ensure every customer interaction is positive, addressing pain points effectively to foster trust and loyalty, driving sales growth.
                
                Quality Management Systems (QMS)
                We implement QMS to streamline sales processes, reduce errors, and enhance operational efficiency, making your sales pitch more compelling.
                
                Decode the voice of customers
                Move towards customer-centric selling by comprehending the customer needs and their key pain points to create upselling and cross-selling opportunities.
                
                Case Study Utilization
                We conduct targeted studies that prioritize business needs, market trends, and product features. Our approach identifies value-added insights, empowering business leaders to develop strategies that enhance sales, brand value, product strength, and customer experience. This method goes beyond traditional quality approaches, maximizing the results generated from your QA systems.
                
                Data-Driven Insights
                Our QaaS solution analyzes customer interactions and sales processes to refine pitches, improve targeting, enhance platform and product features, and elevate user experience, ultimately driving overall sales effectiveness.
                
                Continuous Improvement
                Adopting a Total Quality Management (TQM) approach, we ensure continuous improvement through regular evaluations and feedback sessions.
                
                Best Practices for Sales improvement
                Drive Lead Generation Quality: Enhance the quality of leads by refining targeting criteria and optimizing lead sourcing strategies.
                
                Review End-to-End Customer Engagement Journey: Conduct a comprehensive analysis of the entire customer engagement process to identify opportunities for improvement.
                
                Reduce Customer Objections: Implement strategies to anticipate and address potential customer objections, leading to smoother sales conversations.
                
                Test & Learn Framework: Introduce a continuous improvement approach by testing new processes, systems, and tools to identify the most effective sales tactics
                
                Design Personalized Sales Strategies: Develop tailored sales strategies that align with customer needs and the current market landscape, ensuring a more targeted approach.
                
                Improve Customer Educational Resources and Self-Serve Content: Enhance the availability and quality of educational resources, empowering customers with self-service options to reduce friction and build trust
                
                Why Choose Our QaaS?
                Expertise: Leverage our extensive experience in quality management to drive superior outcomes.
                
                Innovative QaaS Framework: Our industry-leading QaaS framework delivers value beyond traditional transaction monitoring.
                
                Maturity-Driven Approach: Our methodology is supported by a process maturity model, aligning with your business’s maturity to maximize outcomes.
                
                360-Degree Collaboration: We foster seamless collaboration across multi-vendor environments and cross-functional teams, transforming insights into actionable results.
                
                Data-Driven: We provide actionable, data-driven insights to fuel continuous improvement.
                
                Customer-Centric: Our focus is on delivering exceptional customer experiences, ensuring your success.
                
                Proven Success: Backed by a track record of demonstrated results and success stories.
                
                Conclusion
                Integrate our QaaS into your outbound sales strategy to improve customer satisfaction, operational efficiency, and sales performance. Contact us today to learn more about transforming your sales strategy and driving business growth.`
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
          <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Content Services
          </h2>
          <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
            We specialize in empowering and training content moderation tools to
            effectively monitor and filter user-generated content across various
            digital platforms.
          </p>
          <Button
            className="bg-gray-50 mt-5 rounded-lg"
            onPress={() =>
              openModal(
                "Content Services",
                "We specialize in empowering and training content moderation tools to effectively monitor and filter user-generated content across various digital platforms. Our services enhance these tools` ability to detect and flag inappropriate, offensive, or harmful content, thereby improving their output quality. This approach offers several key benefits:\n\nMaintain Brand Reputation\nBy ensuring that the content associated with your brand aligns with your values and standards, our content moderation services help maintain a consistent and positive brand image. This is crucial for protecting your brand`s reputation in an environment where user-generated content can be unpredictable.\n\nEnsure Regulatory Compliance\nOur services help you adhere to legal and regulatory requirements by filtering out content that could lead to legal issues. This proactive approach minimizes the risk of non-compliance and potential legal repercussions.\n\nSafeguard User Experiences\nCreating a safe and welcoming environment for all users is essential. Our services prevent exposure to harmful or offensive material, ensuring a positive user experience. This not only enhances user satisfaction but also fosters a more engaged and loyal user base.\n\nEfficiency and Quality\nLeveraging our tried and tested Quality Framework, we provide accurate and efficient content moderation. This not only enhances the quality of user interactions but also reduces the burden on human moderators, allowing them to focus on more complex moderation tasks.\n\nImprove Trust & Safety Business Outcomes\nProactive Policy Management:\nWithout QaaS: Policies may not be updated promptly or may lack clarity, leading to incorrect content moderation. This creates significant business risks, impacts customer experience, and can result in compliance or legal issues due to inappropriate content on the platform.\n\nWith QaaS: Our clients benefit from regularly updated moderation policies, aligned with current laws and regional regulations. Independent Quality teams audit these policies frequently, ensuring clarity and up-to-date information, reducing risks, and enhancing compliance.\n\nMaintaining a Dynamic `Golden Dataset`:\nWithout QaaS: An outdated or poorly maintained `Golden Dataset` makes it challenging to gauge the accuracy of content moderation, leaving moderators without the necessary tools to stay updated on recent changes. This can lead to inconsistent moderation and gaps in knowledge.\n\nWith QaaS: A well-maintained `Golden Dataset` ensures that moderator calibrations are always relevant, contributing to sustained high-quality content moderation and the continuous education of moderators on recent changes.\n\nEnhancing AI Moderation Logic:\nWithout QaaS: The absence of a structured process for continuously enhancing AI moderation can lead to increased manual work, higher operational costs, and a greater likelihood of incorrect content slipping through moderation.\n\nWith QaaS: Our framework not only refines human moderation practices but also enhances AI moderation by providing continuous input based on recent trends. This dual approach reduces manual workload, cuts costs, and minimizes the risk of incorrect content being uploaded.\n\nEffective Knowledge Dissemination:\nWithout QaaS: Inconsistent knowledge dissemination can hinder the implementation of new updates and changes, resulting in incorrect content moderation and overall inefficiency.\n\nWith QaaS: Structured systems ensure that policy and process updates are effectively communicated to all moderators, reducing dependency on individual understanding and ensuring consistent implementation of new changes.\n\nFocused Studies and Strategic Insights:\nWithout QaaS: The lack of focused studies makes it difficult to identify and leverage test-and-learn opportunities in Trust & Safety, potentially leading to missed chances for improvement.\n\nWith QaaS: Focused studies provide strategic insights into market trends, facilitating a test-and-learn approach that enhances moderation quality and reduces costs.\n\nTargeted Sampling Approach:\nWithout QaaS: Without a targeted sampling approach, moderation efforts may be spread too thin, leading to inefficiencies and a less effective allocation of resources where they are most needed.\n\nWith QaaS: Targeted sampling ensures that moderation efforts are focused on the most critical areas, maximizing effectiveness and efficiency.\n\nBest Practices for content moderation (with QaaS)\nCentralized Quality Monitoring: Independent audits by a central team across regions, markets, and vendors ensure consistent application of best practices, boosting standardization and fostering continuous improvement.\n\nCost-Effectiveness: The reduced cost per acquisition enables businesses to allocate more resources towards core activities, freeing up capital for future investments and strategic initiatives.\n\nFocus on Core Business Activities: Outsourcing quality management allows internal teams to focus on their primary tasks and long-term strategy, leading to more effective operations and a sharper business focus.\n\nDrive Efficiency: Leveraging specialized outsourcing leads to a more efficient service, with higher productivity and improved content moderation quality, contributing to overall business success.\n\nObjective Evaluation: Independent quality audits ensure transparency and unbiased results, with separate teams handling moderation and quality management, thus enhancing trust and integrity.\n\nStandardization: Businesses benefit from better process control and a standardized approach across vendors and internal teams, ensuring consistent quality across the board.\n\nDrive Transformation/Improvements: The approach offers the opportunity to transition from traditional QA practices to advanced analytics and consulting, driving continuous improvements and business transformation.\n\nHolistic Support: Comprehensive support extends across all cross-functional teams, ensuring cohesive operations and aligned goals across the organization.\n\nWhy Choose Our QaaS?\nExpertise: Leverage our extensive experience in quality management to optimize your Trust & Safety operations, ensuring your business remains compliant and competitive.\n\nBest-in-Class QaaS Framework: Our industry-first QaaS framework delivers value beyond traditional transaction monitoring, offering a comprehensive approach that enhances both quality and efficiency in content moderation.\n\nProcess Maturity Model: Our approach is supported by a process maturity model that aligns with your business`s growth stages, boosting outcomes by integrating quality management with business maturity.\n\n360-Degree Collaboration: We facilitate a collaborative framework that seamlessly integrates with multi-vendor environments and cross-functional stakeholders, driving actionable insights that lead to tangible improvements.\n\nData-Driven Insights: Our QaaS is grounded in data-driven analysis, providing actionable insights for continuous improvement and informed decision-making.\n\nCustomer-Centric Focus: We prioritize exceptional customer experiences, ensuring that your Trust & Safety practices are aligned with your business`s commitment to its users.\n\nProven Success: Our track record speaks for itself, with demonstrated results across various industries through case studies that highlight the impact of our QaaS on business outcomes."
              )
            }
          >
            Know More
          </Button>
        </WobbleCard>

        {/* WobbleCard Section 3 */}
        <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-[#A6AEBF] min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
          <div className="max-w-sm">
            <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Contact Center
            </h2>
            <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
              At Qualiinsight, we offer a state-of-the-art Quality as a Service
              (QaaS) solution designed to revolutionize your contact center
              operations.
            </p>
            <Button
              className="bg-gray-50 mt-5 rounded-lg"
              onPress={() =>
                openModal(
                  "Transform Your Contact Center Operations with Our Comprehensive QaaS Solution",
                  "At Qualiinsight, we offer a state-of-the-art Quality as a Service (QaaS) solution designed to revolutionize your contact center operations. Our QaaS service combines advanced technology, expert insights, and best practices to enhance customer satisfaction, streamline processes, and boost overall performance.\n\nOur QaaS Offering Includes:\n\nRobust QA Framework Implementation\nWe establish a comprehensive QA framework tailored to your business needs, including:\nKey Performance Indicators (KPIs): We help you define and monitor essential KPIs such as Customer Satisfaction (CSAT), First Call Resolution (FCR), Net Promoter Score (NPS), and Average Handling Time (AHT).\n\nQuality Scores: Our system provides detailed quality scores to evaluate agent performance and identify improvement areas.\n\nAdvanced QA Tools and Technologies\nUtilize our cutting-edge QA tools to automate and enhance your QA processes:\nAutomated Call Monitoring: Our tools and Frameworks offer real-time analytics and scoring to ensure unbiased evaluations and efficient monitoring.\n\nAI and Analytics: Leverage AI-powered analytics to gain deep insights from customer interactions across various channels (calls, emails, chats, social media).\n\nContinuous Training and Coaching Programs\nWe provide regular training and coaching sessions to maintain high service standards:\nPersonalized Coaching: Using data from QA evaluations, we deliver targeted coaching and training to your agents.\n\nFeedback Mechanisms: Our system ensures continuous feedback to help agents improve their skills and performance.\n\nAgent Engagement and Empowerment\nWe believe in involving agents in the QA process for better outcomes:\nAgent Involvement: We include agents in the development and calibration of QA programs to foster a sense of ownership and collaboration.\n\nSupportive Work Culture: We help create a supportive environment where agents feel valued and motivated to perform their best.\n\nRegular Monitoring and Evaluation\nOur service includes consistent monitoring and evaluation for continuous improvement:\nReal-Time Monitoring: Implement real-time call monitoring to provide immediate feedback and address issues as they arise.\n\nRegular Reviews: Conduct regular reviews of QA data to identify trends and areas for improvement.\n\nStrategic Integration\nWe align QA efforts with your organization`s strategic goals:\nCross-Functional Insights: Use QA insights to inform other departments such as product development and sales, ensuring a cohesive approach to customer experience.\n\nEnterprise Quality Management: Extend QA beyond the contact center to align with broader business objectives, ensuring all departments contribute to the overall customer experience.\n\nCustomer-Centric Approach\nOur QaaS solution adopts a customer-centric mindset to enhance customer satisfaction:\nCustomer Journey Mapping: Analyze the customer journey to identify pain points and improve touchpoints.\n\nCustomer Feedback: Regularly collect and act on customer feedback to refine QA processes and improve service quality.\n\nBenefits of Our QaaS Solution\nImproved Customer Satisfaction: Our enhanced QA processes lead to better customer interactions, increasing satisfaction and loyalty.\n\nOperational Efficiency: Automation and advanced analytics streamline QA processes, reducing manual workload and improving efficiency.\n\nAgent Performance: Continuous training and feedback help agents perform better, reducing turnover and increasing job satisfaction.\n\nStrategic Alignment: Integrating QA with business goals ensures that all efforts are aligned towards improving the overall customer experience.\n\nWhy Choose Qualiinsight\nAt Qualiinsight, we are committed to delivering exceptional quality assurance services that drive business growth and enhance customer experiences. Partner with us to transform your contact center operations with our comprehensive QaaS solution.\n\nContact us today to learn more about how we can help you achieve excellence in your contact center operations."
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
