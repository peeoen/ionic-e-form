import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import * as $ from 'jquery';
import { AppModule } from './app.module';


window["$"] = $; 
window["jQuery"] = $;

platformBrowserDynamic().bootstrapModule(AppModule);
