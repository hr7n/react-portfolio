import Header from './components/Header/Header';
import Project from './components/Project/Project';
import { Flex } from '@chakra-ui/react';
import './App.css';

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
        <div className="project-container"></div>
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            github={project.github}
          />
        ))}
        {/* <Project /> */}
      </Flex>
    </>
  );
}

export default App;
