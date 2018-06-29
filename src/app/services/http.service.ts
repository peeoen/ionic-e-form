import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ENV } from '@app/env';

@Injectable()
export class HttpService {
    private URL = ENV.API_URL;

    constructor(private http: HttpClient) { }

    addPost(htmlContent: string) {
        const _body = {
            ContentComment: htmlContent
        };
        return this.http.post(this.URL + 'api/feeds/AddPost', _body);
    }

    getPost() {
        return this.http.get(this.URL + 'api/feeds/GetFeed');
    }

    deletePost(postId: string) {
        return this.http.delete(this.URL + `api/feeds/DeletePost?id=${postId}`);
    }
}
