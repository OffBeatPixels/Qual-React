import React from 'react'
import { AiFillProduct } from "react-icons/ai";
import { FaChalkboardTeacher } from "react-icons/fa";
import { RiFolderSettingsFill } from "react-icons/ri";

export default function Products() {
  return (
    <div className='my-10'>
      <main >
        <h1 className="text-4xl font-bold mt-10 ml-20  text-left">
          Our Product Related Services
        </h1>
        <p className="text-lg px-10 ml-12  justify-center  ">
          We assist clients in identifying the most suitable quality management
          products, providing training for their <br /> teams to ensure optimal
          utilization, and tailoring solutions to optimize effectiveness and
          benefits.
        </p>
        <ul className="infoGraphic">
          <li>
            <div className="numberWrap">
              <div className="number fontColor1 ">1</div>
              <div className="coverWrap">
                <div className="numberCover"></div>
              </div>
            </div>
            <div className="content">
              <div className="icon ">
                <AiFillProduct />
              </div>
              <h2>Product Identification</h2>
              <p>
                We identify and implement quality management products tailored
                to your specific business needs. Our expert team conducts a
                comprehensive analysis of your processes and challenges,
                offering a comparative review of relevant products in the
                market. Partner with us to enhance your quality management
                practices and drive sustainable success.
              </p>
            </div>
          </li>
          <li>
            <div className="numberWrap">
              <div className="number fontColor2">2</div>
              <div className="coverWrap">
                <div className="numberCover"></div>
              </div>
            </div>
            <div className="content">
              <div className="icon ">
                <FaChalkboardTeacher />
              </div>
              <h2>Product Training</h2>
              <p>
                We provide comprehensive training on quality management
                products, empowering your team to use these resources
                efficiently and effectively.
              </p>
              <p>
                Our expertise ensures that team members not only understand the
                functionalities of these products but also apply best practices
                to enhance productivity and quality outcomes.
              </p>
            </div>
          </li>
          <li>
            <div className="numberWrap">
              <div className="number fontColor3">3</div>
              <div className="coverWrap">
                <div className="numberCover"></div>
              </div>
            </div>
            <div className="content relative mt-[8em] ml-[7em] mr-[3em] mb-[1em]">
              <div className="icon text-2xl absolute top-[-1.3em] left-1/2 transform -translate-x-1/2 ">
                <RiFolderSettingsFill />
              </div>
              <h2>Product Customizations</h2>
              <p>
                We leverage AI to create tailored customizations for your
                products, ensuring they align perfectly with your unique
                business requirements.
              </p>
              <p>
                Our expertise enables us to maximize the functionality and
                effectiveness of these high-quality products, empowering your
                organization to achieve its goals with enhanced efficiency and
                precision.
              </p>
              <p>
                Let us transform your products into powerful assets that drive
                success.
              </p>
            </div>
          </li>

          {/* <li>
            <div className="numberWrap">
              <div className="number fontColor6">6</div>
              <div className="coverWrap">
                <div className="numberCover"></div>
              </div>
            </div>
            <div className="content">
              <div className="icon iconPeace">
                <AiFillProduct />
              </div>
              <h2>Succeed</h2>
              <p>Sagittis, audantium sem eveniet lacus pede porttitor aenean.</p>
            </div>
          </li> */}
        </ul>
      </main>
    </div>
  );
}
