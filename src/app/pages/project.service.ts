import { Injectable } from '@angular/core';

import { Project } from './project';
import { PROJECTS } from './project-data';

@Injectable()
export class ProjectService {
  getProjects(): Promise<Project[]> {
    return Promise.resolve(PROJECTS);
  }

  getProject(slug: string): Promise<Project> {
    return this.getProjects()
               .then(projects => projects.find(project => project.slug === slug));
  }

  getProjectById(id: number): Promise<Project> {
    return this.getProjects()
               .then(projects => projects.find(project => project.id === id));
  }
}
