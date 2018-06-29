import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpService } from '../../app/services/http.service';
import { ImageService } from '../../app/services/image.service';
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
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeedPage {
  posts: any[];
  options: any;
  editorContent: string;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private editorService: EditorService,
    private imageService: ImageService,
    private httpService: HttpService,
    private cdRef: ChangeDetectorRef) {

    this.options = this.editorService.options;

    
  }

  ionViewDidLoad() {
    this.getPost();
  }

  getPost() {
    this.httpService.getPost().subscribe((res: any[]) => {
      console.log(res);
      this.posts = res;
      this.editorContent = null;
      this.cdRef.markForCheck();
    });
  }

}
