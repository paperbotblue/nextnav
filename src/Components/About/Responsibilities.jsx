import React from "react";
import logo from "../../assets/logo.png";

const Responsibilities = () => {
  return (
    <div className="background-pattern relative lg:pl-[6em] xl:pl-[8em] md:pl-[5em] h-full p-8 flex items-center justify-center">
      <div className="max-w-[110em] mx-auto bg-white p-8 shadow-lg">
        <h1 className="text-2xl font-bold mb-4">
          Corporate Social Responsibility{" "}
          <span className="text-yellow-500">||</span>
        </h1>
        <p className="text-gray-700 mb-4">
          Corporate Social Responsibility refers to the principal that
          businesses should contribute positively to both society and the
          environment as they move toward their economic growth. This is
          something that Reeves and Colas USA is placing a large focus on as we
          continue on our path of success.
        </p>
        <p className="text-gray-700 mb-4">
          At Reeves, we hold that conducting business should be done in a
          socially responsible and ethical manner that seeks to protect the
          environment and our surrounding communities. Our goal is to be a
          leader in environmental practices by emphasizing innovative and
          creative solutions, while continuously improving our environmental
          performance. We also recognize the importance of being a good neighbor
          and the issues inherent in the operations at our production sites,
          therefore we are making major efforts to keep our facilities as
          environmentally-friendly as possible and to develop an ongoing
          dialogue with local residents.
        </p>
        <p className="text-gray-700 mb-4">
          Through the Colas ACT (Act and Commit Together) project, we have
          developed 8 ambitious and challenging commitments to maintain as we
          conduct business:
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8">
          <div className="text-gray-700 lg:pr-28 lg:text-left">
            <div className="ml-20">
              <strong>
                Shape an exemplary culture of ethics and compliance
              </strong>
            </div>
            <div className="ml-14 pt-5 ">
              <strong>
                Build a responsible supply chain rooted in sustainable
                performance
              </strong>
            </div>
            <div className="ml-10 pt-5">
              <strong>
                Foster a stronger health and safety culture to protect lives
              </strong>
            </div>
            <div className="ml-14 pt-5">
              <strong>
                Attract, develop and retain talent through managerial excellence
              </strong>
            </div>
          </div>
          <div className="text-gray-700 max-w-[40em] lg:pl-36 ">
            <div>
              <strong>
                Offer our customers and users solutions that meet the challenges
                of sustainable development in local communities
              </strong>
            </div>
            <div>
              <strong>
                Roll out a low carbon and biodiversity strategy to preserve the
                planet
              </strong>
            </div>
            <div>
              <strong>
                Promote circular economy solutions to preserve natural resources
              </strong>
            </div>
            <div>
              <strong>
                Reduce the impact of our activities to bolster acceptability
              </strong>
            </div>
          </div>
        </div>
        <div className="flex lg:absolute bottom-28 xl:bottom-16 left-10 w-full justify-center mt-8">
          <img
            src={logo}
            alt="ACT logo with text 'Act and Commit Together #ColasAct2030'"
            className="w-44 border-4 border-[#4d769e] p-6 rounded-full h-44"
          />
        </div>
      </div>
    </div>
  );
};

export default Responsibilities;
