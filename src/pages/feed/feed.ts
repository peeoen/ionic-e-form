import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EditorService } from './../../app/services/editor.service';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {
  options: any;
  editorContent: string;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
  private editorService: EditorService) {
    this.options = this.editorService.options;
  }

  ionViewDidLoad() {

  }

}
