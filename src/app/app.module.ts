import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import "froala-editor/js/froala_editor.pkgd.min.js";
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HomePage } from '../pages/home/home';
import { FeedPage } from './../pages/feed/feed';
import { MyApp } from './app.component';
import { SanitizeHtmlPipe } from './pipes/sanitize-html.pipe';
import { EditorService } from './services/editor.service';
import { HttpService } from './services/http.service';
import { ImageService } from './services/image.service';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FeedPage,
    SanitizeHtmlPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FroalaEditorModule.forRoot(), 
    FroalaViewModule.forRoot(),
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FeedPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ImageService,
    HttpService,
    EditorService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
