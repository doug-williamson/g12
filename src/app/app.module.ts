import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { AppRouting } from './app.routing';
import { RhombusShellModule } from '@dougwilliamson/rhombus-shell';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { HomeModule } from './views/home/home.module';
import { PodcastModule } from './views/podcast/podcast.module';
import { StreamingModule } from './views/streaming/streaming.module';
import { UpcomingEventsModule } from './views/upcoming-events/upcoming-events.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    // CoreModule,
    FlexLayoutModule,

    HomeModule,
    PodcastModule,
    StreamingModule,
    UpcomingEventsModule,

    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),

    RhombusShellModule.forRoot({
      applicationInfo: {
        name: 'G-12 Network',
        version: '1.0.0-beta.0',
        logoUrl: './assets/g12_network.png',
        logoLetters: undefined,
        twitterUrl: 'https://twitter.com/g12football',
      },
    }),

    AppRouting,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
