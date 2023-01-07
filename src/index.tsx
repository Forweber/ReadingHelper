import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { Provider } from "react-redux";
import { store } from "./store";

// const imageUploader = new ImageUploader();
// const FileInput = memo((props) => (
//   <ImageFileInput {...props} imageUploader={imageUploader} />
// ));


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
