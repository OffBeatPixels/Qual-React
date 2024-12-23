import React from "react";
import Usecase1 from "../assets/Usecase1.webp";
import Usecase2 from "../assets/Usecase2.webp";
import Usecase3 from "../assets/Usecase3.webp";
import Transition from "./Animations/Transition";

function Usecase() {
  return (
    <div>
      <h1 className="text-3xl sm:text-4xl text-center mt-8 font-bold text-gray-800">
        Use Case
      </h1>

      <div className="grid grid-rows-3 mr-40 gap-20">
        {/* Use Case 1 */}
        <div>
          <div className="flex flex-col sm:flex-row items-start p-6 rounded-lg mx-auto max-w-4xl ">
            {/* Image Section */}
            <div className="flex-shrink-0 relative">
              <img
                src={Usecase1}
                alt="Usecase 1"
                className="w-full sm:w-[40vw] h-[20rem] rounded-lg object-cover"
              />
            </div>

            {/* Content Section */}
            {/* <div className="flex-grow ">
              <div className=" absolute right-36  my-5 bg-white text-black  text-sm sm:text-base leading-relaxed overflow-y-scroll h-72 w-full sm:w-[40vw]  p-4 rounded-lg shadow-lg">
                <span className="font-bold text-medium block mb-2">
                  Sales Performance
                </span>
                Boost Your Sales with Quality as a Service (QaaS). At
                Qualiinsight, we offer a comprehensive Quality as a Service
                (QaaS) solution designed to enhance your sales process. Here’s
                how our service can transform your sales strategy:
                <ul className="list-disc ml-6 mt-2">
                  <li>
                    <span className="font-semibold">
                      Customer Experience Enhancement:
                    </span>{" "}
                    Foster trust and loyalty by addressing pain points
                    effectively.
                  </li>
                  <li>
                    <span className="font-semibold">
                      Quality Management Systems (QMS):
                    </span>{" "}
                    Streamline sales processes, reduce errors, and enhance
                    operational efficiency.
                  </li>
                  <li>
                    <span className="font-semibold">
                      Decode the Voice of Customers:
                    </span>{" "}
                    Create upselling and cross-selling opportunities by
                    understanding customer needs.
                  </li>
                </ul>
                <p className="mt-4">
                  <span className="font-semibold">Why Choose Our QaaS?</span>{" "}
                  Leverage our expertise, innovative framework, and data-driven
                  insights to drive sales growth.
                </p>
              </div>
            </div> */}

            <div className="flex-grow relative">
              <div className="absolute right-36 my-5 bg-white text-gray-800 text-sm sm:text-base leading-relaxed overflow-y-scroll h-72 w-full sm:w-[40vw] p-6 rounded-lg shadow-lg border border-gray-200">
                {/* Title */}
                <h2 className="text-lg font-medium mb-4 text-gray-900">
                  Sales Performance
                </h2>
                {/* Description */}
                {/* <p className="mb-4">
                  Boost Your Sales with Quality as a Service (QaaS). At
                  Qualiinsight, we offer a comprehensive Quality as a Service
                  (QaaS) solution designed to enhance your sales process. Here’s
                  how our service can transform your sales strategy:
                </p> */}
                {/* List Section */}
                <ul className="list-disc pl-6 space-y-3">
                  <li>
                    <h3 className="font-medium text-gray-900 mb-1">
                      Customer Experience Enhancement:
                    </h3>
                    <p className="text-gray-700">
                      Foster trust and loyalty by addressing pain points
                      effectively.
                    </p>
                  </li>
                  <li>
                    <h3 className="font-medium text-gray-900 mb-1">
                      Quality Management Systems (QMS):
                    </h3>
                    <p className="text-gray-700">
                      Streamline sales processes, reduce errors, and enhance
                      operational efficiency.
                    </p>
                  </li>
                  <li>
                    <h3 className="font-medium text-gray-900 mb-1">
                      Decode the Voice of Customers:
                    </h3>
                    <p className="text-gray-700">
                      Create upselling and cross-selling opportunities by
                      understanding customer needs.
                    </p>
                  </li>
                </ul>
                {/* Closing Section */}
                <p className="mt-6">
                  <span className="font-medium text-gray-900">
                    Why Choose Our QaaS?
                  </span>{" "}
                  Leverage our expertise, innovative framework, and data-driven
                  insights to drive sales growth.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Use Case 2 */}
        <div>
          <div className="flex flex-col sm:flex-row items-start p-6 rounded-lg mx-auto max-w-4xl ">
            {/* Image Section */}
            <div className="flex-shrink-0 left-[70%] relative">
              <img
                src={Usecase2}
                alt="Usecase 2"
                className="w-full sm:w-[40vw] h-80 rounded-lg object-cover"
              />
            </div>

            {/* Content Section */}
            <div className="flex-grow ">
              <div className=" absolute right-[40%]  my-5 bg-white text-black text-sm sm:text-base leading-relaxed overflow-y-scroll h-72 w-full sm:w-[40vw]  p-4 rounded-lg shadow-lg">
                <span className="font-bold text-medium block mb-2">
                  Sales Performance
                </span>
                Boost Your Sales with Quality as a Service (QaaS). At
                Qualiinsight, we offer a comprehensive Quality as a Service
                (QaaS) solution designed to enhance your sales process. Here’s
                how our service can transform your sales strategy:
                <ul className="list-disc ml-6 mt-2">
                  <li>
                    <span className="font-semibold">
                      Customer Experience Enhancement:
                    </span>{" "}
                    Foster trust and loyalty by addressing pain points
                    effectively.
                  </li>
                  <li>
                    <span className="font-semibold">
                      Quality Management Systems (QMS):
                    </span>{" "}
                    Streamline sales processes, reduce errors, and enhance
                    operational efficiency.
                  </li>
                  <li>
                    <span className="font-semibold">
                      Decode the Voice of Customers:
                    </span>{" "}
                    Create upselling and cross-selling opportunities by
                    understanding customer needs.
                  </li>
                </ul>
                <p className="mt-4">
                  <span className="font-semibold">Why Choose Our QaaS?</span>{" "}
                  Leverage our expertise, innovative framework, and data-driven
                  insights to drive sales growth.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Use Case 3 */}
        <div>
          <div className="flex flex-col sm:flex-row items-start p-6 rounded-lg mx-auto max-w-4xl ">
            {/* Image Section */}
            <div className="flex-shrink-0 relative">
              <img
                src={Usecase3}
                alt="Usecase 3"
                className="w-full sm:w-[40vw] h-80 rounded-lg object-cover"
              />
            </div>

            {/* Content Section */}
            <div className="flex-grow ">
              <div className=" absolute right-40  my-5 bg- text-black text-sm sm:text-base leading-relaxed overflow-y-scroll h-72 w-full sm:w-[40vw]  p-4 rounded-lg shadow-lg">
                <span className="font-bold text-medium block mb-2">
                  Sales Performance
                </span>
                Boost Your Sales with Quality as a Service (QaaS). At
                Qualiinsight, we offer a comprehensive Quality as a Service
                (QaaS) solution designed to enhance your sales process. Here’s
                how our service can transform your sales strategy:
                <ul className="list-disc ml-6 mt-2">
                  <li>
                    <span className="font-semibold">
                      Customer Experience Enhancement:
                    </span>{" "}
                    Foster trust and loyalty by addressing pain points
                    effectively.
                  </li>
                  <li>
                    <span className="font-semibold">
                      Quality Management Systems (QMS):
                    </span>{" "}
                    Streamline sales processes, reduce errors, and enhance
                    operational efficiency.
                  </li>
                  <li>
                    <span className="font-semibold">
                      Decode the Voice of Customers:
                    </span>{" "}
                    Create upselling and cross-selling opportunities by
                    understanding customer needs.
                  </li>
                </ul>
                <p className="mt-4">
                  <span className="font-semibold">Why Choose Our QaaS?</span>{" "}
                  Leverage our expertise, innovative framework, and data-driven
                  insights to drive sales growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



export default Transition(Usecase)