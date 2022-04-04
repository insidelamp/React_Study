import React from "react";
import { Button } from "../elements";
import { storage } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { uploadImageFB } from "../redux/modules/image";
import { actionCreators as imageActions } from "../redux/modules/image";

const Upload = (props) => {
  const fileInput = React.useRef();
  const is_uploading = useSelector((state) => state.image.uploading);
  const dispatch = useDispatch();
  const selectFile = (e) => {
    console.log(e);
    console.log(e.target);
    console.log(e.target.files[0]);

    console.log(fileInput.current.files[0]);

    const reader = new FileReader();
    const file = fileInput.current.files[0];

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      console.log(reader.result);
      dispatch(imageActions.setPreview(reader.result));
    };
  };

  const uploadFB = () => {
    let image = fileInput.current.files[0];
    dispatch(imageActions.uploadImageFB(image));
  };
  return (
    <React.Fragment>
      <input
        type="file"
        onChange={selectFile}
        ref={fileInput}
        disabled={is_uploading}
      />
      <Button _onClick={uploadFB}>업로드하기</Button>
    </React.Fragment>
  );
};

export default Upload;
