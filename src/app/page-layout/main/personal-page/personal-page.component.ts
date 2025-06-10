import { Component } from '@angular/core';
import { SoftSkillsComponent } from './soft-skills/soft-skills.component';
import { HardSkillsComponent } from './hard-skills/hard-skills.component';
import { HeroBannerComponent } from './hero-banner/hero-banner.component';
import { HobbiesComponent } from './hobbies/hobbies.component';


@Component({
  selector: 'app-personal-page',
  imports: [SoftSkillsComponent ,
            HardSkillsComponent ,
            HeroBannerComponent,
            HobbiesComponent
  ],
  templateUrl: './personal-page.component.html',
  styleUrl: './personal-page.component.scss'
})
export class PersonalPageComponent {

}
