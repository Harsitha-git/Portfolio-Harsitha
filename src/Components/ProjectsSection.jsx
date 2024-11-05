import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const ProjectsSection = () => {
  const projects = [
    { title: 'blinkScribe Mobile App', description: 'Application designed to streamline medical documentation for physicians.', url: 'https://apps.apple.com/us/app/blinkscribe/id6476747710' },
    { title: 'blinkScribe Website', description: 'Designed and developed a website for a web and mobile application.', url: 'https://blinkscribe.com/v1/' },
    { title: 'enCloud', description: 'Designed and developed a website for a Saas start-up.', url: 'https://encloud.app/' },
  ];

  return (
    <section id="projects" className="py-5">
      <Container>
        <h2 className="text-center mb-4 text-white pb-10">Featured Projects</h2>
        <Row>
          {projects.map((project, index) => (
            <Col md={4} className="mb-4" key={index}>
              <Card className="h-100 border-2 border-white border-opacity-75 text-white bg-black">
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <Card.Link href={project.url} target="_blank" className="btn shadow-md border-white border-opacity-50 text-white mt-3">
                    View Project
                  </Card.Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ProjectsSection;

