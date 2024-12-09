import React from "react";
import { useForm } from "react-hook-form";

const ImageUploadForm = () => {
  const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data.files); // Logs the FileList object or array of files
    const fileArray = Array.from(data.files); // Convert FileList to an array if needed
    console.log(fileArray); // Logs each file individually
  };

  // Watch for the selected files to display preview
  const files = watch("files");

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="images">Upload Images:</label>
        <input
          type="file"
          id="images"
          {...register("files", {
            required: "You must upload at least one image",
            validate: (files) =>
              files.length <= 6 || "You can upload up to 6 images only",
          })}
          multiple
          accept="image/*"
        />
        {errors.files && <p>{errors.files.message}</p>}
      </div>

      <div>
        <h4>Preview Selected Images:</h4>
        {files &&
          Array.from(files).map((file, index) => (
            <img
              key={index}
              src={URL.createObjectURL(file)}
              alt={`Preview ${index + 1}`}
              style={{ width: "100px", height: "100px", margin: "5px" }}
            />
          ))}
      </div>

      <button type="submit">Submit</button>
      
    </form>
  );
};

export default ImageUploadForm;
