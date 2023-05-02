const createUrlImage = (file) => {
  return file.type.includes("image") ? URL.createObjectURL(file) : null;
};

export default createUrlImage;
