import 'rxjs/add/operator/switchMap';
import { Component, OnInit, AfterContentInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router, NavigationStart } from '@angular/router';
import { Location } from '@angular/common';

import { Project } from './project';
import { ProjectService } from './project.service';

import * as AOS from 'aos/dist/aos';

@Component({
    selector: 'app-project-detail',
    templateUrl: './project-detail.component.html',
    styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {
    project: Project;
    prevSlug = '';
    nextSlug = '';

    constructor(
        private projectService: ProjectService,
        private route: ActivatedRoute,
        private location: Location,
        router: Router
    ) {
        router.events.forEach((event) => {
            if (event instanceof NavigationStart) {
                this.prevSlug = '';
                this.nextSlug = '';
            }
        });
    }

    ngOnInit(): void {
        this.route.paramMap
            .switchMap((params: ParamMap) => this.projectService.getProject(params.get('slug')))
            .subscribe(project => {
                this.project = project;
                if (project.id > 1) {
                    this.projectService.getProjectById(project.id - 1)
                        .then(projectPrev => {
                            this.prevSlug = projectPrev.slug;
                            console.log(this.prevSlug);
                        });
                }
                if (project.id < 3) {
                    this.projectService.getProjectById(project.id + 1)
                        .then(projectNext => {
                            this.nextSlug = projectNext.slug;
                            console.log(this.nextSlug);
                        });
                }
            });
        AOS.init();
    }
}
