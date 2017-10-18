import 'rxjs/add/operator/switchMap';
import { Component, OnInit, AfterContentInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
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
    prevSlug: string;
    nextSlug: string;

    constructor(
        private projectService: ProjectService,
        private route: ActivatedRoute,
        private location: Location
    ) { }

    ngOnInit(): void {
        this.route.paramMap
            .switchMap((params: ParamMap) => this.projectService.getProject(params.get('slug')))
            .subscribe(project => this.project = project);

        AOS.init();
    }
}
