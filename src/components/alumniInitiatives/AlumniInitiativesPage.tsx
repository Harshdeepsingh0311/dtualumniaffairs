import React from "react";
import AlumniInitiativesCard from "./AlumniInitiativesCard";
import AlumInitHead from "./AlumInitHead";

export default function AlumniInitiativesPage() {
  return (
    <div className="container m-auto mb-20">
      <AlumInitHead />
      <AlumniInitiativesCard
        imageSrc="./media/mentor.jpg"
        title="Mentorship Program"
        description="Students after coming to DTU are often overwhelmed by the countless opportunities present here and often end up confused or going with the herd. Through the mentorship program, we aspire to give the students access to our diverse global alumni network to gain new perspectives and responsibly plan their career trajectories."
        linkUrl="./media/mentorship-main.html"
      />
      <AlumniInitiativesCard
        imageSrc="./media/iif.png"
        title="Establishing Technology Incubation Centre"
        description="In order to promote entrepreneurship and start-ups, incubation centre may be established which will help in creating employment and value addition. The incubation centre will also focus on solving real life problems. The incubation centre will offer incubation infrastructure- space, computing resources, connectivity, common tools; and environment for co-working, collaboration and innovation.
Currently, DTU Innovation and Incubation Foundation (DTU-IIF) takes care of all the issues related with technology incubation and startups at DTU. DTU-IIF has been Established as per Companies Act of Govt of India. So far, 26 companies have been incubated under DTU-IIF. DTU-IIF supports the initiatives through seed funding, mentoring, consultancy and networking.
"
        linkUrl=""
      />
      <AlumniInitiativesCard
        imageSrc="./media/coe.JPG"
        title="Establishment of Centre of Excellence"
        description="Centre of Excellence at DTU will facilitate research in the following thrust areas:

Biofuels and Clean Energy technologies
Artificial Intelligence
Robotics and Machine Intelligence
Intelligent Power Systems
Electric Vehicles
Nanoscale devices and Biosensors
Smart materials and conducting Polymers
Information Security and Network Management
Software Quality and Testing
VLSI and Embedded Systems
Future Automobile Systems
There is opportunity for establishing the Centres of Excellence in various areas of technology. The support may be in the form of physical infrastructure, equipment's, computational resources, software tools and technologies."
        linkUrl=""
      />
      <AlumniInitiativesCard
        imageSrc="./media/training.JPG"
        title="Establishment of Training and Finishing School"
        description="Students after coming to DTU are often overwhelmed by the countless opportunities present here and often end up confused or going with the herd. Through the mentorship program, we aspire to give the students access to our diverse global alumni network to gain new perspectives and responsibly plan their career trajectories."
        linkUrl=""
      />
      <AlumniInitiativesCard
        imageSrc="./media/research.JPG"
        title="Establishment of Sponsored Research Laboratory in any of the Departments"
        description="There are 15 departments offering UG and PG programs.
All the departments offer multiple areas of research.
Sponsored Research Laboratories may be established in any of the departments:

Department of Applied Chemistry
Department of Applied Mathematics
Department of Applied Physics
Department of Biotechnology
Department of Civil Engineering
Department of Computer Science and Engineering
Department of Design
Department of Electonics and Communication Engineering
Department of Electrical Engineering
Department of Environmental Engineering
Department of Humanities
Department of Information Technology
Department of Mechanical Engineering
Delhi School of Management
University School of Management & Entrepreneurship (East Delhi Campus)"
        linkUrl=""
      />
    </div>
  );
}
