import './Project.css';

const Project = ({ title, description, image, github }) => {
  return (
    <div className="project">
      <h2 className="project-title">{title}</h2>
      <p>{description}</p>
      <img src={image} alt={title} />
      <a href={github}>View Project</a>
    </div>
  );
};

export default Project;
