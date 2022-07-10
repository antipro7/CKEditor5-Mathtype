import './App.css';
import { CKEditor } from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import ClassicEditor from './ckeditor.js'
console.log('ClassicEditor', ClassicEditor);
// ClassicEditor
//   .create( document.querySelector('#editor' ), {
//       cloudServices: {
//           // All predefined builds include the Easy Image feature.
//           // Provide correct configuration values to use it.
//           tokenUrl: 'https://example.com/cs-token-endpoint',
//           uploadUrl: 'https://your-organization-id.cke-cs.com/easyimage/upload/'
//           // Read more about Easy Image - https://ckeditor.com/docs/ckeditor5/latest/features/images/image-upload/easy-image.html.
//           // For other image upload methods see the guide - https://ckeditor.com/docs/ckeditor5/latest/features/images/image-upload/image-upload.html.
//       }
//   } )
//   .then( editor => {
//       window.editor = editor;
//   } )
//   .catch( err => {
//       console.error( err );
//   } );

function App() {
  return (
    <div className="App">
      <h2>Using CKEditor 5 build in React</h2>
      {/* <div id="editor">
        Editor content is inserted here.
      </div> */}
        <CKEditor
          id="editor"
          editor={ ClassicEditor }
          data="<p>Hello from CKEditor 5!</p>"
          onReady={ editor => {
            console.log( 'Editor is ready to use!', editor );
          }}
          onChange={ ( event, editor ) => {
            const data = editor.getData();
            console.log( { event, editor, data } );
          }}
          onBlur={ ( event, editor ) => {
            console.log( 'Blur.', editor );
          }}
          onFocus={ ( event, editor ) => {
            console.log( 'Focus.', editor );
          }}
        />
    </div>
  );
}

export default App;
