import React from "react";
import { team } from "../db/teams";
import { FaTwitter, FaLinkedin } from "react-icons/fa";
import Title from "./Title";

const TeamSection = () => {
  return (
    <section className="py-16 px-4 md:px-16 bg-white" id="team">
      <Title text1={'OUR'} text2={'TEAM'} />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {team.map((member) => (
          <div key={member.id} className="text-center">
            <div className="h-52 overflow-hidden mb-4 shadow-md">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover hover:scale-110 transition-all duration-300"
            />
            </div>
            <h3 className="font-semibold text-lg text-gray-900">{member.name}</h3>
            <p className="text-sm text-gray-500 mb-2">{member.title}</p>
            <div className="flex justify-center space-x-4 text-gray-600 text-lg">
              <a href={member.socials.twitter} target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
              <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
            </div>
            <br />
            <hr className="text-gray-200" />
            <br />
            <hr className="text-gray-200" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
