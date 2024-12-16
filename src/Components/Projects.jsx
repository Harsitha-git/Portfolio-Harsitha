import React from 'react';
import { Container, Carousel } from 'react-bootstrap';


const PersonalProjectsSection = () => {
  const personalProjects = [
    {
      title: 'blinkScribe Mobile App',
      description: '',
      image: 'blinkscribe.jpg',
      
    },
    {
      title: 'blinkScribe Web App',
      description: '',
      image: 'blinkscribe2.jpg',
    },
    {
      title: 'BrainyMed RPM',
      description: 'Remote Patient Management',
      image: 'chim.jpg',
    },
    {
      title: 'Clinic Kiosk',
      description: 'Patient Check-in Kiosk Screens',
      image: 'kiosk.png',
    },
  ];

  return (
    <section id="projects" className="py-5 bg-black my-14">
      <Container className="mx-auto text-center" style={{ maxWidth: '600px' }}>
        <h2 className="text-white mb-12">Featured Projects</h2>
        <Carousel className="shadow-custom shadow-white rounded-lg overflow-hidden">
          {personalProjects.map((project, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100 opacity-75"
                src={project.image}
                alt={project.title}
                style={{ height: '400px', objectFit: 'cover' }}
              />
              <Carousel.Caption className="bg-black bg-opacity-50 rounded px-2 py-1">
                <h5 className="text-white">{project.title}</h5>
                <p className="text-white">{project.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </section>
  );
};

export default PersonalProjectsSection;


