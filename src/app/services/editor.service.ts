import { Injectable } from '@angular/core';
import { ENV } from '@app/env';

@Injectable()
export class EditorService {

    URL_API = ENV.API_URL;

    constructor() { }

    options: any = {
        dragInline: false,
        tabSpaces: 4,
        theme: 'gray',
        fontFamilySelection: true,
        fontSizeSelection: true,
        paragraphFormatSelection: true,
        charCounterCount: false,
        toolbarButtons: [
            'fontFamily', '|', 'fontSize', '|',
            'color', '|',
            'bold', 'italic', 'underline', 'subscript', 'superscript', '|',
            'align', 'verticalAlign', '|',
            'formatOL', 'formatUL', 'indent', 'outdent', '|',
            'insertHR', 'specialCharacters', 'insertTable', 'insertImage', 'insertFile', '|',
            'undo', 'redo', 'help'
        ],
        imageUploadMethod: 'POST',
        imageAllowedTypes: ['jpeg', 'jpg', 'png'],
        imageUploadURL: this.URL_API + 'api/feeds/UploadImage',
        fileUploadURL: this.URL_API + 'api/feeds/UploadFile',
        enableScript: false,
        placeholderText: 'คุณกำลังคิดอะไรอยู่...',
        events: {
            'froalaEditor.initialized': (e, editor) => {
                editor.toolbar.hide();
            },
            'froalaEditor.focus': (e, editor) => {
                editor.toolbar.show();
            }
        },
    };
}
