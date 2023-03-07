import { ALLOWED_IMG_FORMAT } from "../constants";

export function validateName(val: string) {
  let error;
  if (!val) {
    error = "Name is required!";
  } else if (val.length < 3) {
    error = "Name must be 3 characters at minimum!";
  } else if (val.length > 30) {
    error = "Name must be 30 characters at maximum!";
  }
  return error;
}

export function validateEmail(val: string) {
  let error;
  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!val) {
    error = "Email is required!";
  } else if (val.length < 12) {
    error = "Email must be 12 characters at minimum!";
  } else if (val.length > 60) {
    error = "Email must be 30 characters at maximum!";
  } else if (!val.toLowerCase().match(regex)) {
    error = "Email is invalid!";
  }
  return error;
}

export function validatePassword(val: string) {
  let error;
  if (!val) {
    error = "Password is required!";
  } else if (val.length < 8) {
    error = "Password must be 8 characters at minimum!";
  } else if (val.length > 60) {
    error = "Password must be 30 characters at maximum!";
  }
  return error;
}

export function validateFile(file_: any) {
  const fileName = file_.name,
    idxDot = fileName.lastIndexOf(".") + 1,
    extFile = fileName.substr(idxDot, fileName.length).toLowerCase(),
    fileSize = file_.size / 1024 / 1024;

  if (file_.length < 1) {
    return "File is required!";
  } else if (!ALLOWED_IMG_FORMAT.includes(extFile)) {
    return "Only jpg, jpeg & png files are accepted!";
  } else if (fileSize > 10) {
    return "Max file size is 10mb";
  } else {
    return true;
  }
}
