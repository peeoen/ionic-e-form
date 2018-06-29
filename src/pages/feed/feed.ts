import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
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
    public toastCtrl: ToastController,
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

  post() {
    this.httpService.addPost(this.editorContent).subscribe(res => {
      this.presentToast('Add success.');
      this.getPost();
    });
  }

  delete(post: any) {
    console.log(post);
    
    const _id = post.postID;
    this.httpService.deletePost(_id).subscribe(res => {
      this.presentToast('Delete success.');
      this.getPost();
    });
  }

  presentToast(message: string) {
    const toast = this.toastCtrl.create({
      message: message,
      position: 'bottom',
      duration: 2000
    });
    toast.present();
  }

}
