import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './component/about/about.component';
import { BlogsComponent } from './component/blogs/blogs.component';
import { ContactComponent } from './component/contact/contact.component';
import { DetailComponent } from './component/detail/detail.component';
import { HomeComponent } from './component/home/home.component';
import { ProjectComponent } from './component/project/project.component';
import { ResumesComponent } from './component/resumes/resumes.component';

const routes: Routes = [
  {
    path: "", component: HomeComponent
  },
  {
    path: "about", component: AboutComponent
  },
  {
    path: "resumes", component: ResumesComponent
  },
  {
    path: 'projects', component: ProjectComponent
  },
  {
    path: 'contact', component: ContactComponent
  }
  // {
  //   path: "blogs", component: BlogsComponent
  // },
  // {
  //   path: "blogs/detail", component: DetailComponent
  // }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
