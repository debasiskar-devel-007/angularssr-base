import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { LoginComponent } from './login/login.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ResetFromComponent } from './reset-from/reset-from.component';
import { AuthGuard } from './auth.guard';
import { NewstitleComponent } from './newstitle/newstitle.component';

const appRoutes: Routes = [
    {
        path: 'about2', component: AboutusComponent, data: {
            meta: {
                title: 'About US',
                description: 'Have you seen my rubber duckie?'
            }
        }
    },
    {
        path: 'about', component: AboutusComponent, data: {
            meta: {
                title: 'About US',
                description: 'Have you seen my rubber duckie?'
            }
        }
    },

    {
        path: 'contact', component: ContactusComponent,
        data: {
            meta: {
                title: 'Contact Us',
                description: 'Have you seen my rubber duckie?'
            }
        }
    },

    {
        path: 'home', component: HomeComponent,
        data: {
            meta: {
                title: 'Home',
                description: 'Have you seen my rubber duckie?'
            }
        }
        //   , canActivate:[AuthGuard]
    },

    {
        path: 'socialMedia', component: SocialMediaComponent,
        data: {
            meta: {
                title: 'Home',
                description: 'Have you seen my rubber duckie?'
            }
        }
    },

    {
        path: 'login', component: LoginComponent,
        data: {
            meta: {
                title: 'Home',
                description: 'Have you seen my rubber duckie?'
            }
        }
    },
    {
        path: 'login/:path', component: LoginComponent,
        data: {
            meta: {
                title: 'Home',
                description: 'Have you seen my rubber duckie?'
            }
        }
    },
    {
        path: 'login/:path/:id', component: LoginComponent,
        data: {
            meta: {
                title: 'Home',
                description: 'Have you seen my rubber duckie?'
            }
        }
    },
    {
        path: 'newstitle', component: NewstitleComponent,
        data: {
            meta: {
                title: 'Home',
                description: 'Have you seen my rubber duckie?'
            }
        }
    },

    {
        path: 'sign-up', component: SignUpComponent,
        data: {
            meta: {
                title: 'Home',
                description: 'Have you seen my rubber duckie?'
            }
        }
    },

    {
        path: 'forget-password', component: ForgetPasswordComponent,
        data: {
            meta: {
                title: 'Home',
                description: 'Have you seen my rubber duckie?'
            }
        }
    },

    {
        path: 'reset-password/:token', component: ResetFromComponent,
        data: {
            meta: {
                title: 'Home',
                description: 'Have you seen my rubber duckie?'
            }
        }
    }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
    // console.log('dddd');
}
