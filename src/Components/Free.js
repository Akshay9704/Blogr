import laptopImage from "../Images/illustration-laptop-desktop.svg";
// const Free = () => {
//   return (
//     <>
//       <section>
//         <div>
//           <h2>Free, open, simple</h2>
//           <p>
//             Blogr is a free and open source application backed by a large
//             community of helpful developers. It supports features such as code
//             syntax highlighting, RSS feeds, social media integration,
//             third-party commenting tools, and works seamlessly with Google
//             Analytics. The architecture is clean and is relatively easy to
//             learn.
//           </p>
//           <h2>Powerful tooling</h2>
//           <p>
//             Batteries included. We built a simple and straightforward CLI tool
//             that makes customization and deployment a breeze, but capable of
//             producing even the most complicated sites.
//           </p>
//         </div>
//         <div>
//         <picture>

//                 <img src={laptopImage} alt="" className="w-full block mx-auto mt-10"></img>
//             </picture>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Free;

import React from "react";

const Free = () => {
  return (
    <>
      <section className="pb-20 px-5">
        <div className="flex flex-col md:grid md:grid-cols-2 md:gap-5 md:items-center text-center md:text-left 2xl:max-w-7xl xl:mx-auto">
          <div>
            <picture>
              <img
                src={laptopImage}
                alt=""
                className="w-full block mx-auto mt-10"
              ></img>
            </picture>
          </div>
          <div className="mt-10">
            <h3 className="text-2xl mt-10 mb-5">Free, open, simple</h3>
            <p>
              Blogr is a free and open source application backed by a large
              community of helpful developers. It supports features such as code
              syntax highlighting, RSS feeds, social media integration,
              third-party commenting tools, and works seamlessly with Google
              Analytics. The architecture is clean and is relatively easy to
              learn.
            </p>
            <h3 className="text-2xl mt-10 mb-5"> Powerful tooling</h3>
            <p>
              Batteries included. We built a simple and straightforward CLI tool
              that makes customization and deployment a breeze, but capable of
              producing even the most complicated sites.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Free;
