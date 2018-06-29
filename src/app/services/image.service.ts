import { Injectable } from '@angular/core';

@Injectable()
export class ImageService {

    constructor() { }

    randomImage(): string {
        const _index = Math.floor((Math.random() * 5) + 1);
        const _image = `assets/peoples/p${_index}.jpg`;
        return _image;
    }
}
