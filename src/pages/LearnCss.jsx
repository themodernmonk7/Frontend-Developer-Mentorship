import { useState } from "react";
import VideoElement from "../components/VideoElement";
import { CSSVideos } from "./Videos";
import { CSSBasicNotes, CSSFlexboxNotes, CSSGridNotes } from "./Notes";
import NotesSnippet from "../components/NotesSnippet";
import { CSSAssignments } from "./Assignments";
import Assignment from "../components/Assignment";

const LearnCss = () => {
  const [currentTab, setCurrentTab] = useState("videos");
  return (
    <div className="mt-32 py-6 px-2 md:px-10 ">
      <div>
        <h1 className="text-left font-bold text-6xl mb-6  flex items-center justify-center space-x-5 text-[#687eff]   ">
          <p>CSS</p>
        </h1>{" "}
        <div className="py-4">
          <div className="flex justify-center">
            <button
              className={`mr-4 px-8 uppercase font-bold py-3 rounded ${
                currentTab === "videos"
                  ? "text-white  bg-[#687eff]"
                  : " bg-gray-200 text-[#161616]"
              }`}
              onClick={() => setCurrentTab("videos")}
            >
              Videos
            </button>
            <button
              className={`mr-4 px-8 uppercase font-bold py-3 rounded ${
                currentTab === "assignments"
                  ? "text-white  bg-[#687eff]"
                  : " bg-gray-200 text-[#161616]"
              }`}
              onClick={() => setCurrentTab("assignments")}
            >
              Assignments
            </button>
            <button
              className={`mr-4 px-8 uppercase font-bold py-3 rounded ${
                currentTab === "notes"
                  ? "text-white  bg-[#687eff]"
                  : " bg-gray-200 text-[#161616]"
              }`}
              onClick={() => setCurrentTab("notes")}
            >
              Notes
            </button>
          </div>
        </div>{" "}
        {currentTab === "videos" && (
          <div>
            {CSSVideos.map((video, index) => (
              <VideoElement
                key={index}
                videoUrl={video.videoUrl}
                heading={video.heading}
                mainPoints={video.mainPoints}
                notes={video.notes}
                assignment={video.assignment}
              />
            ))}
          </div>
        )}
        {currentTab === "assignments" && (
          <div>
            {CSSAssignments.map((assignment) => (
              <Assignment
                key={assignment.number}
                number={assignment.number}
                heading={assignment.heading}
                problem={assignment.problem}
                link={assignment.link}
              />
            ))}
          </div>
        )}
        {currentTab === "notes" && (
          <div>
            <ul className="flex flex-row items-center justify-start space-x-4 uppercase text-md font-bold text-white">
              <li>
                <a href="#css">Basic CSS</a>
              </li>
              <li>
                <a href="#flexbox">Flexbox</a>
              </li>
              <li>
                <a href="#grid">Grid</a>
              </li>
            </ul>
            <div
              className="flex flex-col items-start justify-between space-y-4 py-8"
              id="css"
            >
              <h1 className="text-left font-bold text-3xl mb-6  flex items-center justify-center space-x-5 text-[#6557fd]   ">
                <p>Basic CSS</p>
              </h1>
              {CSSBasicNotes.map((element) => (
                <NotesSnippet
                  heading={element.heading}
                  code={element.code}
                  language="css"
                />
              ))}
            </div>
            <div
              className="flex flex-col items-start justify-between space-y-4 mt-8 py-24"
              id="flexbox"
            >
              <h1 className="text-left font-bold text-3xl mb-6  flex items-center justify-center space-x-5 text-[#6557fd]   ">
                <p>Flexbox</p>
              </h1>
              {CSSFlexboxNotes.map((element) => (
                <NotesSnippet
                  heading={element.heading}
                  code={element.code}
                  language="css"
                />
              ))}
            </div>
            <div
              className="flex flex-col items-start justify-between space-y-4 mt-8 py-24"
              id="grid"
            >
              <h1 className="text-left font-bold text-3xl mb-6  flex items-center justify-center space-x-5 text-[#6557fd]   ">
                <p>Grid</p>
              </h1>
              <h1 className="text-left font-bold text-1xl mb-6  flex items-center justify-center space-x-5 text-[#6557fd]   ">
                <p>1. Grid container properties</p>
              </h1>
              {CSSGridNotes.map((element) => (
                <NotesSnippet
                  heading={element.heading}
                  code={element.code}
                  language="css"
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LearnCss;