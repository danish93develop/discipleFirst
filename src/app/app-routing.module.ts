import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: 'folder/:id', loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)  },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)  },
  { path: 'about/:id', loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)  },  
  { path: 'blog', loadChildren: () => import('./blog/blog.module').then( m => m.BlogPageModule)  },
  { path: 'contact', loadChildren: () => import('./contact/contact.module').then( m => m.ContactPageModule)  },
  { path: 'blog-detail', loadChildren: () => import('./blog-detail/blog-detail.module').then( m => m.BlogDetailPageModule)},
  { path: 'notifications', loadChildren: () => import('./notifications/notifications.module').then( m => m.NotificationsPageModule)},
  { path: 'resources',loadChildren: () => import('./resources/resources.module').then( m => m.ResourcesPageModule) },
  {
    path: 'resource-detail',
    loadChildren: () => import('./resource-detail/resource-detail.module').then( m => m.ResourceDetailPageModule)
  },
  {
    path: 'memory-verses',
    loadChildren: () => import('./memory-verses/memory-verses.module').then( m => m.MemoryVersesPageModule)
  },
  {
    path: 'leader-notes',
    loadChildren: () => import('./leader-notes/leader-notes.module').then( m => m.LeaderNotesPageModule)
  },
  {
    path: 'resource-single-content',
    loadChildren: () => import('./resource-single-content/resource-single-content.module').then( m => m.ResourceSingleContentPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'staff',
    loadChildren: () => import('./staff/staff.module').then( m => m.StaffPageModule)
  },
  {
    path: 'directors',
    loadChildren: () => import('./directors/directors.module').then( m => m.DirectorsPageModule)
  },
  {
    path: 'speaking',
    loadChildren: () => import('./speaking/speaking.module').then( m => m.SpeakingPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./auth/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'privacypolicy',
    loadChildren: () => import('./privacypolicy/privacypolicy.module').then( m => m.PrivacypolicyPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
