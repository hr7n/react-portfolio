import Header from './components/Header/Header';
import Project from './components/Project/Project';
import { Flex } from '@chakra-ui/react';
import './App.css';

import passwordGeneratorImage from './assets/images/projects/password-generator.png';

const projects = [
  {
    title: 'Weather Dashboard',
    description:
      'A simple dashboard to view the weather in any city. Uses the OpenWeather API to retrieve weather data for cities. Uses localStorage to store any persistent data.',
    image: 'https://via.placeholder.com/150',
    github: 'https://github.com/hr7n/weather-app',
  },
  {
    title: 'Work Day Scheduler',
    description:
      'A simple calendar application that allows the user to save events for each hour of the day. This app runs in the browser and features dynamically updated HTML and CSS powered by jQuery.',
    image: 'https://via.placeholder.com/150',
    github: 'https://github.com/hr7n/work-day-scheduler',
  },
  {
    title: 'Password Generator',
    description:
      'An application that generates a random password based on user-selected criteria. This app runs in the browser and features dynamically updated HTML and CSS powered by JavaScript.',
    image: passwordGeneratorImage,
    github: 'https://github.com/hr7n/password-generator',
  },
];

function App() {
  return (
    <>
      <div>
        <Header />
      </div>
      <Flex
        direction="column"
        align="center"
        justify="center"
        h="100vh"
        w="100vw"
      >
        <div className="project-container">
          {projects.map((project, index) => (
            <Project
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              github={project.github}
            />
          ))}
        </div>
        {/* <Project /> */}
      </Flex>
    </>
  );
}

export default App;
