import React from 'react';
import { Container, Tab, Tabs } from 'react-bootstrap';

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-5 my-16 text-white">
      <Container>
        <h2 className="text-white text-center mb-4">Experience</h2>
        <Tabs defaultActiveKey="position1" id="experience-tabs" className='text-white'>
          <Tab eventKey="position1" title="BrainyMed" className='text-white'>
            <h3 className='pt-4'>Product Designer</h3>
            <h5 className='pt-2 text-sm italic'>Jan 2023 - Present</h5>
            <ul className='text-white list-disc mt-4'>
              <li>Designed intuitive user interfaces and experiences for blinkScribe, a mobile and web application, enhancing usability for healthcare professionals during patient consultations</li>
              <li>Collaborated with cross-functional teams to create wireframes, prototypes, and high-fidelity mockups</li>
              <li>Ensured the application was fully responsive, providing a consistent experience across mobile and web platforms</li>
              <li>Developed features to streamline the creation of SOAP (Subjective, Objective, Assessment, Plan) notes, enabling users to document patient interactions efficiently and accurately</li>
              <li>Partnered closely with the development team to implement designs using React JS, ensuring seamless integration of user experience with technical functionality</li>
            </ul>
          </Tab>
          <Tab eventKey="position2" title="eBiz Solutions" className='text-white' >
          <h3 className='pt-4'>eBiz Solutions</h3>
          <h5 className='pt-2 text-sm italic'>Nov 2020 - Dec 2022</h5>
            <ul className='text-white list-disc mt-4'>
              <li>Conducted in-depth analysis of digital processes, identifying areas for improvement and efficiency gains</li>
              <li>Conducted user research and usability testing for new implementations to CRM system</li>
              <li>Provided end-user training and support, ensuring smooth transitions to updated digital platforms and created user journeys and site maps</li>
              <li>Helped build an Employee onboarding site on Microsoft 365 Intranet with the help of SharePoint onboarding templates</li>
            </ul>
          </Tab>
        </Tabs>
      </Container>
    </section>
  );
};

export default ExperienceSection;
