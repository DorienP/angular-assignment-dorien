import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TasksComponent } from './tasks/tasks.component';
import { NewsComponent } from './news/news.component';
import { ToolsComponent } from './tools/tools.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      { path: 'tasks', loadChildren: () => import('./tasks/tasks.module').then(m => m.TasksModule) },
      { path: 'news', loadChildren: () => import('./news/news.module').then(m => m.NewsModule) },
      { path: 'tools', loadChildren: () => import('./tools/tools.module').then(m => m.ToolsModule) },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
