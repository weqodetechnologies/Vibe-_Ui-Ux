// src/components/Blogs/Blogsec.jsx
import React from "react";
import ImagBlog1 from "../../assets/ImagBlog1.svg";
import ImagBlog3 from "../../assets/ImagBlog3.svg";
import ImagBlog2 from "../../assets/ImagBlog2.svg";
import BlueBtn from "../ui/BlueBtn";

const blogs = [
  {
    id: 1,
    image: ImagBlog1,
    tags: ["User-Centered", "UI/UX Design"],
    meta: "Oct 17, 2025 – 10 min read",
    title: "Understanding User-Centered Design",
    breakAfter: "-", 
    desc: "Discover how putting users first can transform your design projects.",
  },
  {
    id: 2,
    image: ImagBlog2,
    tags: ["Trends 2025", "Design"],
    meta: "Oct 17, 2025 – 10 min read",
    title: "Top UI/UX Trends in 2025",
    breakAfter: "in", 
    desc: "Stay updated with the latest design trends shaping digital experiences.",
  },
  {
    id: 3,
    image: ImagBlog3,
    tags: ["Wireframes", "Digital"],
    meta: "Oct 17, 2025 – 10 min read",
    title: "Wireframing Like a Pro",
    breakAfter: "a ", 
    desc: "Step-by-step guide to creating wireframes that actually work.",
  },
];

function breakTitle(title, word) {
  if (!word || !title.includes(word)) return title;
  return title.replace(word, `${word}<br/>`);
}

export default function Blogsec() {
  return (
    <section className="w-full flex flex-col items-center mt-14 mb-20 px-4 font-outfit">
      
      <h2 className="text-[30px] md:text-[40px] font-semibold text-[#FCC174] text-center">
        Blogs
      </h2>

      <p className="mt-3 text-center text-white max-w-4xl text-[14px] md:text-[18px] leading-relaxed">
        Explore expert tips, latest trends, and practical guides to sharpen <br/> your
        UI/UX skills and stay ahead in the design industry.
      </p>

      <div className="mt-20 grid gap-8 w-full max-w-[1460px] md:grid-cols-3">
        {blogs.map((blog) => (
          <article
            key={blog.id}
            className="bg-[#5835D2] rounded-[36px] overflow-hidden shadow-[0_18px_40px_rgba(0,0,0,0.35)] flex flex-col"
          >
            <div className="w-full h-[300px] md:h-[200px]">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="px-6 pt-5 pb-7 flex flex-col flex-1 text-white text-left">

              {/* TAGS */}
              <div className="flex flex-wrap gap-3">
                {blog.tags.map((tag) => (
                  <span
                    key={tag}
                    className="
                      relative px-4 py-2 text-[13px]
                      rounded-full font-normal text-white
                      border border-[#E8E7E7] bg-[#6742E0]
                    "
                  >
                    <span
                      className="absolute inset-0 rounded-full pointer-events-none"
                      style={{ boxShadow: "inset 1px 1px 2px rgba(255,255,255,0.25)" }}
                    />
                    <span
                      className="absolute inset-0 rounded-full pointer-events-none"
                      style={{ boxShadow: "inset -1px -1px 2px rgba(4,4,4,0.25)" }}
                    />
                    {tag}
                  </span>
                ))}
              </div>

              {/* META */}
              <p className="mt-4 text-[11px] md:text-[15px] text-white/85">
                {blog.meta}
              </p>

              {/* TITLE WITH CUSTOM BREAK */}
              <h3
                className="mt-2 text-[18px] md:text-[28px] font-semibold leading-snug"
                dangerouslySetInnerHTML={{
                  __html: breakTitle(blog.title, blog.breakAfter),
                }}
              />

              {/* DESCRIPTION */}
              <p className="mt-3 text-[13px] md:text-[16px] text-white/90 leading-relaxed">
                {blog.desc}
              </p>

              {/* READ MORE BUTTON */}
              <div className="w-full flex justify-center mt-5">
                <BlueBtn text="Read More  →" />
              </div>

            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
