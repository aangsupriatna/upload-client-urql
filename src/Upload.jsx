import React from "react";
import { useMutation } from "urql";
import gql from "graphql-tag";

const singleUploadMutation = gql`
  mutation($file: Upload!) {
    singleUpload(file: $file) {
      id
      filename
      path
      mimetype
      encoding
    }
  }
`;

const multiUploadMutation = gql`
  mutation($files: [Upload!]!) {
    multiUpload(files: $files) {
      id
      filename
      path
      mimetype
      encoding
    }
  }
`;

export const Uploadfile = () => {
  const [res, mutate] = useMutation(singleUploadMutation);
  const handleChange = React.useCallback(
    ({ target: { validity, files: [file], } }) => {
      validity.valid && mutate({ file });
    }, [mutate]);
  if (res.data) {
    console.log(res.data.singleUpload)
  }
  return <input type="file" required onChange={handleChange} />;
};

export const Uploadfiles = () => {
  const [res, mutate] = useMutation(multiUploadMutation);
  const handleChange = React.useCallback(
    ({ target: { validity, files } }) => {
      validity.valid && mutate({ files });
    }, [mutate]);
  if (res.data) {
    console.log(res.data.multiUpload)
  }
  return <input type="file" required onChange={handleChange} multiple />;
};
