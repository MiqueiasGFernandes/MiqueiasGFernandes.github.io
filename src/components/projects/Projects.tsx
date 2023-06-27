import React from 'react';

import "./styles.css";

export type ProjectsProps = {
  projects: {
    title: string,
    image: {
      src: any,
      fit: string
    },
    year: string
    link: string
  }[]
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {

  return <div className='mt-24 gap-12 grid grid-cols-1 md:grid-cols-2'>
    {projects.map((project) =>
    <a href={project.link} title={project.title} target='_blank'>
      <div className={`project_content relative h-full`}>
        <div className='project_label absolute top-8 left-8 z-40'>
          <span className='project_title text-2xl font-semibold'>{project.title}</span>
          <span className='project_year text-lg font-extrabold'>{project.year}</span>
        </div>
        <div className="img_content shrink-0 h-full">
          <img className={`w-full sm:h-full md:h-5/6 md:object-${project.image.fit}`} src={project.image.src} alt={`${project.title} - ${project.year}`} />
        </div>
      </div>
    </a>
    )}
  </div>
}

export { Projects }