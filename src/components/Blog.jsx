
// import React, { useState, useEffect } from "react";
// import Popup from "./Popup"; // Ensure you have a Popup component

// const Blog = () => {
//   const [blogs, setBlogs] = useState([]);
//   const [popupData, setPopupData] = useState(null);
//   const [selectedCategory, setSelectedCategory] = useState("All");

//   // Fetch blogs from Strapi API
//   useEffect(() => {
//     const fetchBlogs = async () => {
//       try {
//         const response = await fetch("http://localhost:1337/api/blog-posts");
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         const data = await response.json();
//         // Extracting blog data from the response
//         const blogData = data.data.map((item) => ({
//           id: item.id,
//           name: item.attributes.Blog_Title,
//           description: item.attributes.Blog_Data[0]?.Blog_Data || "No description available",
//           category: item.attributes.Blog_Category,
//         }));
//         setBlogs(blogData);
//       } catch (error) {
//         console.error("Error fetching blogs:", error);
//       }
//     };

//     fetchBlogs();
//   }, []);

//   // Handle image click to show popup
//   const handleImageClick = (blog) => {
//     setPopupData(blog);
//   };

//   // Close the popup
//   const handleClosePopup = () => {
//     setPopupData(null);
//   };

//   // Get unique categories from blogs
//   const categories = ["All", ...new Set(blogs.map((blog) => blog.category))];

//   // Filter blogs based on selected category
//   const filteredBlogs =
//     selectedCategory === "All"
//       ? blogs
//       : blogs.filter((blog) => blog.category === selectedCategory);

//   return (
//     <div className="pb-20 bg-gradient-to-b from-[#ffffff] via-[#ffedf2] to-[#ffffff]">
//       <h3 className="text-5xl mt-10 ml-10 text-left md:text-center">
//         The Quality Chronicles
//       </h3>
//       <p className="text-left md:text-center py-5 ml-10">
//         ARTICLES AND STORIES ABOUT QUALITY AS A SERVICE
//       </p>
//       {/* Categories Menu */}
//       <div className="text-center mb-10">
//         {categories.map((category) => (
//           <button
//             key={category}
//             onClick={() => setSelectedCategory(category)}
//             style={{
//               margin: "5px",
//               padding: "5px",
//               backgroundColor:
//                 selectedCategory === category ? "#B8B9B8" : "#fff",
//               color: selectedCategory === category ? "#fff" : "#000",
//               border: "1px solid #ddd",
//               borderRadius: "10px",
//               height: "30px",
//               width: "100px",
//               cursor: "pointer",
//             }}
//             className="items-center"
//           >
//             {category}
//           </button>
//         ))}
//       </div>
//       {/* Display Blogs */}
//       <div className="grid grid-cols-1 mt-10 sm:grid-cols-2 md:grid-cols-3 mx-20 place-items-center gap-32">
//         {filteredBlogs.map((blog) => (
//           <div className="relative w-[26rem]" key={blog.id}>
//             {/* Colored Background Shape */}
//             <div className="absolute -inset-2 mt-28 rounded-2xl bg-gradient-to-r from-[#9D354B] via-[#be6e7f] to-[#7a5860]" />
//             {/* Blog Card */}
//             <div className="relative group w-[26rem] h-72 text-left bg-white rounded-xl border border-stone-950 flex flex-col justify-between shadow-lg">
//               <div>
//                 <p className="text-md pt-10 p-3 text-center font-semibold text-gray-800">
//                   {blog.name}
//                 </p>
//                 <p className="text-xs px-12 py-8 text-justify w-full border-stone-950 text-gray-600">
//                   {blog.description}
//                 </p>
//               </div>
//               <button
//                 className="border-stone-950 w-full rounded-b-xl hover:bg-black hover:text-white py-2 transition-all"
//                 onClick={() => handleImageClick(blog)}
//               >
//                 Read More
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//       {/* Popup */}
//       {popupData && (
//         <Popup
//           name={popupData.name}
//           text={popupData.description}
//           onClose={handleClosePopup}
//         />
//       )}
//     </div>
//   );
// };

// export default Blog;



import React, { useState, useRef, useEffect } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
// import { styles } from "../../../style.js";
// import { BlogImg, BlogImg2 } from "../../../assets";

const LatestBlogs = [
  {
    id: 1,
    title: "5 Principles to grow your business",
    description: `We specialize in providing practical advice and hands-on support to businesses like yours. Our team has years of experience in various industries and brings together skills in strategy, operations, finance, and more.

   What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

Why do we use it?
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).


Where does it come from?
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.

Where can I get some?
There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
Where can I get some?
There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
Where can I get some?
There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
Where can I get some?
There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
Where can I get some?
There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
Where can I get some?
There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
    
    We specialize in providing practical advice and hands-on support to businesses like yours. Our team has years of experience in various industries and brings together skills in strategy, operations, finance, and more.`,
    // image: BlogImg,
  },
  {
    id: 2,
    title: "7 Effective Marketing Strategies",
    description: `
   What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

Why do we use it?
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).


There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
Where can I get some?
There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
Where can I get some?
There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
Where can I get some?
There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
    
    We specialize in providing practical advice and hands-on support to businesses like yours. Our team has years of experience in various industries and brings together skills in strategy, operations, finance, and more.`,
    // image: BlogImg2,
  },
  {
    id: 3,
    title: "Digital Transformation Guide",
    description:
      "We specialize in providing practical advice and hands-on support to businesses like yours...",
    // image: BlogImg,
  },
  {
    id: 4,
    title: "Financial Planning Tips",
    description:
      "We specialize in providing practical advice and hands-on support to businesses like yours...",
    // image: BlogImg2,
  },
];
const OldBlogs = [
  {
    id: 1,
    title: "5 Principles to grow your business",
    description: `We specialize in providing practical advice and hands-on support to businesses like yours. Our team has years of experience in various industries and brings together skills in strategy, operations, finance, and more.

   What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

Why do we use it?
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).


Where does it come from?
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.

Where can I get some?
There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
Where can I get some?
There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
Where can I get some?
There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
Where can I get some?
There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
Where can I get some?
There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
Where can I get some?
There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
    
    We specialize in providing practical advice and hands-on support to businesses like yours. Our team has years of experience in various industries and brings together skills in strategy, operations, finance, and more.`,
    // image: BlogImg,
  },
  {
    id: 2,
    title: "7 Effective Marketing Strategies",
    description: `
   What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

Why do we use it?
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).


There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
Where can I get some?
There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
Where can I get some?
There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
Where can I get some?
There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
    
    We specialize in providing practical advice and hands-on support to businesses like yours. Our team has years of experience in various industries and brings together skills in strategy, operations, finance, and more.`,
    // image: BlogImg,
  },
  {
    id: 3,
    title: "Digital Transformation Guide",
    description:
      "We specialize in providing practical advice and hands-on support to businesses like yours...",
    // image: BlogImg,
  },
  {
    id: 4,
    title: "Financial Planning Tips",
    description:
      "We specialize in providing practical advice and hands-on support to businesses like yours...",
    // image: BlogImg,
  },
];

function Blog() {
  const [selectedBlog, setSelectedBlog] = useState(LatestBlogs[0]);
  const [selectedOldBlog, setSelectedOldBlog] = useState(OldBlogs[0]);

  const contentRefLatest = useRef(null);
  const contentRefOld = useRef(null);

  const scrollStep = 100;
  const [scrollProgressLatest, setScrollProgressLatest] = useState(0);
  const [scrollProgressOld, setScrollProgressOld] = useState(0);

  // Scroll Content Function
  const scrollContent = (direction, section) => {
    const container =
      section === "latest" ? contentRefLatest.current : contentRefOld.current;

    if (container) {
      const newPosition =
        container.scrollTop + (direction === "up" ? -scrollStep : scrollStep);
      container.scrollTo({
        top: newPosition,
        behavior: "smooth",
      });
    }
  };

  // Handle Scroll Progress
  const handleScroll = (section) => {
    const container =
      section === "latest" ? contentRefLatest.current : contentRefOld.current;
    const setScrollProgress =
      section === "latest" ? setScrollProgressLatest : setScrollProgressOld;

    if (container) {
      const totalHeight = container.scrollHeight - container.clientHeight;
      const scrollTop = container.scrollTop;
      const progress = (scrollTop / totalHeight) * 100;
      setScrollProgress(progress);
    }
  };

  useEffect(() => {
    const containerLatest = contentRefLatest.current;
    const containerOld = contentRefOld.current;

    const scrollHandlerLatest = () => handleScroll("latest");
    const scrollHandlerOld = () => handleScroll("old");

    if (containerLatest) {
      containerLatest.addEventListener("scroll", scrollHandlerLatest);
    }
    if (containerOld) {
      containerOld.addEventListener("scroll", scrollHandlerOld);
    }

    return () => {
      if (containerLatest) {
        containerLatest.removeEventListener("scroll", scrollHandlerLatest);
      }
      if (containerOld) {
        containerOld.removeEventListener("scroll", scrollHandlerOld);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#d5e8f6] p-8 text-justify">
      <div className="lg:pl-14 lg:pr-28">
        <h3 className="text-center pt-5 text-4xl font-bold">Our Blogs</h3>

        {/* Latest Blogs Section */}
        <Section
          title="Latest Blogs"
          blogs={LatestBlogs}
          selectedBlog={selectedBlog}
          setSelectedBlog={setSelectedBlog}
          contentRef={contentRefLatest}
          scrollProgress={scrollProgressLatest}
          setScrollProgress={setScrollProgressLatest}
        />

        {/* Featured Blogs Section for Old Blogs */}
        <Section
          title="Featured Blogs"
          blogs={OldBlogs}
          selectedBlog={selectedOldBlog}
          setSelectedBlog={setSelectedOldBlog}
          contentRef={contentRefOld}
          scrollProgress={scrollProgressOld}
          setScrollProgress={setScrollProgressOld}
        />
      </div>
    </div>
  );
}

const Section = ({
  title,
  blogs,
  selectedBlog,
  setSelectedBlog,
  contentRef,
  scrollProgress,
  scrollContent,
  section,
}) => {
  return (
    <div className="mt-20">
      <p className="my-5 text-4xl font-bold">{title}</p>
      <div className="mb-12 overflow-hidden rounded-2xl h-[40rem] sm:h-[80rem] lg:h-[30rem] bg-white p-2 lg:p-10 shadow-sm">
        <div className="grid lg:grid-cols-2">
          <img
            // src={selectedBlog.image}
            alt="Featured blog post"
            className="lg:h-[80%] lg:w-[85%] rounded-2xl object-cover"
          />
          <div className="flex">
            <div className="flex flex-col justify-start">
              <h2 className="text-2xl font-bold text-[#538D4E]">
                {selectedBlog.title}
              </h2>
              <div
                ref={contentRef}
                className="max-h-[40rem] lg:max-h-[25rem]  overflow-y-scroll scrollbar-none  p-5"
                onScroll={() => handleScroll("latest")}
              >
                <p className="text-gray-600 whitespace-pre-line">
                  {selectedBlog.description}
                </p>
              </div>
            </div>
            {/* Custom Scroll Arrows */}
            <ScrollControls
              scrollContent={scrollContent}
              scrollProgress={scrollProgress}
              section={section}
            />
          </div>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="grid gap-6 h-full w-full sm:grid-cols-2">
        {blogs.map((post) => (
          <motion.button
            key={post.id}
            onClick={() => setSelectedBlog(post)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex gap-4 rounded-2xl bg-white p-4 text-left shadow-sm transition-all hover:shadow-md"
          >
            <img
              // src={post.image}
              alt={post.title}
              className="h-24 w-24 rounded-2xl object-cover"
            />
            <div>
              <h3 className="mb-2 font-extrabold text-black">{post.title}</h3>
              <p className="text-md text-gray-600 line-clamp-2">
                {post.description}
              </p>
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
};
const ScrollControls = ({ scrollContent, scrollProgress, section }) => (
  <div className="flex flex-col items-center absolute right-1 md:right-20 self-start">
    <button
      onClick={() => scrollContent("up", section)}
      className="rounded-t-md bg-gray-100 p-2 hover:bg-gray-200 active:bg-gray-300"
      aria-label="Scroll up"
    >
      <ChevronUp className="h-4 w-4" />
    </button>
    <div className="h-[20rem] w-2 bg-gray-200 relative">
      <div
        className="absolute w-full bg-[#686868]"
        style={{ height: `${scrollProgress}%` }}
      />
    </div>
    <button
      onClick={() => scrollContent("down", section)}
      className="rounded-b-md bg-gray-100 p-2 hover:bg-gray-200 active:bg-gray-300"
      aria-label="Scroll down"
    >
      <ChevronDown className="h-4 w-4" />
    </button>
  </div>
);

export default Blog
