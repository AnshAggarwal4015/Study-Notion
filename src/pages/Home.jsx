import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import HighlightText from "../components/core/HomePage/HighlightText";
import CTAButton from "../components/core/HomePage/Button";
import CodeBlocks from "../components/core/HomePage/CodeBlocks";
import TimelineSection from "../components/core/HomePage/Timeline";
import LearningLanguageSection from "../components/core/HomePage/LearningLanguage";
import InstructorSection from "../components/core/HomePage/Instructor";
import Banner from "../assets/Images/banner.mp4";
import Footer from "../components/common/Footer";

function Home() {
  return (
    <div>
      <div
        className="relative mx-auto flex flex-col w-11/12 
       text-white justify-between items-center max-w-maxContent"
      >
        <Link to={"/signup"}>
          <div
            className="group mt-16 p-1 mx-auto rounded-full bg-richblack-800
           font-bold text-richblack-200 w-fit shadow-custom
            transition-all duration-200 hover:scale-95"
          >
            <div
              className="flex flex-row items-center gap-2 rounded-full 
            px-10 py-[5px] transition-all duration-200 group-hover:bg-richblack-900"
            >
              <p>Become an Instructor</p>
              <FaArrowRight />
            </div>
          </div>
        </Link>

        <div className="text-center text-4xl font-semibold mt-[2.375rem]">
          Empower Your Future with
          <HighlightText text={"Coding Skills"} />
        </div>

        <div
          className="text-center font-medium	text-base text-richblack-300
        w-[70%] mt-4"
        >
          With our online coding courses, you can learn at your own pace, from
          anywhere in the world, and get access to a wealth of resources,
          including hands-on projects, quizzes, and personalized feedback from
          instructors.
        </div>

        <div className="flex flex-row mt-[2.375rem] gap-6 font-bold">
          <CTAButton active={true} linkto={"/signup"}>
            Learn More
          </CTAButton>

          <CTAButton active={false} linkto={"/login"}>
            Book a Demo
          </CTAButton>
        </div>

        <div className="shadow-blue-200 mx-3 my-14">
          <video muted loop autoPlay>
            <source src={Banner} type="video/mp4" />
          </video>
        </div>

        {/* Section Type Animation */}

        <div>
          <CodeBlocks
            position={"flex-col sm:flex-row"}
            heading={
              <div className="text-4xl font-semibold">
                Unlock your <HighlightText text={"coding potential"} /> with our
                online courses.
              </div>
            }
            subheading={
              "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
            }
            ctabtn1={{
              btnText: "Try it Yourself",
              linkto: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "Learn More",
              linkto: "/signup",
              active: false,
            }}
            codeblock={`<!DOCTYPE html>
              <html>
              <head><title>Example</
              title><linkrel="stylesheet"href="styles.css">
              </head>
              <body>
              <h1><ahref="/">Header</a>
              </h1>
              <nav><ahref="one/">One</a><ahref="two/">Two</
              a><ahref="three/">Three</a>
              /nav>
            `}
            codeColor={"text-yellow-25"}
          />
        </div>

        <div>
          <CodeBlocks
            position={"flex-col sm:flex-row-reverse"}
            heading={
              <div className="text-4xl font-semibold">
                Start
                <HighlightText text={`coding in seconds`} />
              </div>
            }
            subheading={`Go ahead, give it a try. Our hands-on learning environment
            means you'll be writing real code from your very first lesson.`}
            ctabtn1={{
              btnText: "Continue Lesson",
              linkto: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "Learn More",
              linkto: "/signup",
              active: false,
            }}
            codeblock={`import React from "react";
            import CTAButton from "./Button";
            import TypeAnimation from "react-type-animation";
            import { FaArrowRight } from "react-icons/fa";\n
            const Home = () => {
            return (
            <div> Home </div>
            )
            }
            export default Home;
            `}
            codeColor={"text-yellow-25"}
          />
        </div>
      </div>

      <div className="bg-pure-greys-5 text-richblack-700">
        <div className="homepage_bg h-[310px]">
          <div className="w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-5 mx-auto">
            <div className="h-[142px]"></div>
            <div className="flex flex-row gap-7 text-white font-bold">
              <CTAButton active={true} linkto={"/signup"}>
                <div className="flex items-center gap-3 font-bold">
                  Explore Full Catalog
                  <FaArrowRight />
                </div>
              </CTAButton>
              <CTAButton active={false} linkto={"/signup"}>
                <div>Learn more</div>
              </CTAButton>
            </div>
          </div>
        </div>

        <div className="gap-7 w-11/12 max-w-maxContent mx-auto flex flex-col items-center justify-between">
          <div className="mt-[5.625rem] gap-5 mb-10 flex flex-col sm:flex-row ">
            <div className="font-semibold text-4xl sm:w-[45%]">
              Get the skills you need for a{" "}
              <HighlightText text={`job that is in demand.`} />
            </div>

            <div className="flex flex-col gap-10 items-start sm:w-[45%]">
              <div className="text-base	">
                The modern StudyNotion is the dictates its own terms. Today, to
                be a competitive specialist requires more than professional
                skills.
              </div>

              <CTAButton active={true} linkto={"/signup"} className="font-bold">
                Learn More
              </CTAButton>
            </div>
          </div>

          <TimelineSection />

          <LearningLanguageSection />
        </div>
      </div>

      <div className="w-11/12 mx-auto max-w-maxContent mt-[5.62rem] mb-[5.62rem] bg-richblack-900 flex flex-col items-center justify-between gap-8 first-letter text-white">
        <InstructorSection />

        <div className="text-center text-4xl font-semibold mt-10">
          Review from other learners
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
