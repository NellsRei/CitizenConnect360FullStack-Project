import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { TokenInterceptor } from './interceptor/token';
import { authReducers } from './State/Reducers/auth.reducers';
import { AuthEffects } from './State/Effects/auth.effects';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';
import { postReducers } from './State/Reducers/post.reducers';
import { PostsEffects } from './State/Effects/posts.effects';
import { pollReducers } from './State/Reducers/polls.reducers';
import { PollsEffects } from './State/Effects/polls.effects';
import { incidentReducers } from './State/Reducers/incident.reducers';
import { IncidentEffects } from './State/Effects/incident.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideHttpClient(withInterceptors([TokenInterceptor])),
    provideStore({ auth: authReducers , posts:postReducers, polls:pollReducers, incident:incidentReducers}),
    provideEffects([AuthEffects, PostsEffects, PollsEffects, IncidentEffects]),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    provideAnimations(), // required animations providers
    provideToastr(), // Toastr providers
]
};
