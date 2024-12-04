import React from "react";
import { useForm } from "react-hook-form";

const AddAndUpdate = ({ activeCategory, onSubmit, initialData = {}, mode = "Add"},) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: initialData, // Pre-fill form if updating
  });

  const handleFormSubmit = (data) => {
    const formData = {
      ...data,
      categoryId: activeCategory.id, // Associate with the active category
    };
    onSubmit(formData); // Call the parent handler with the form data
    
  };

  const files = watch("projectPhotos");

  return (
    <div
      style={{
        width: "100%",
        height:"100%",
        backgroundColor: "transparent",
        padding: "1rem",
        borderRadius: "1rem",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
        
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "2rem", fontSize: "1.4rem", fontWeight: "600", fontFamily:"sans-serif"  }}>
        {mode === "Add" ? "Add New Project" : "Update Project"}
      </h2>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        {/* Project Name */}
        <div
        style={{
          display: "flex",
          justifyContent:"space-between",
          // width:'100%'
        }}
        >
        <div 
        style={{
          width:'60%',
          display:'flex',
          flexDirection:'column',
          flexWrap:'wrap',
          gap:'1rem'
        }}
        >
        <div style={{ marginBottom: "1rem", width: '100%', display: 'flex', flexDirection:"column",}}>
          <label htmlFor="projectName" style={{ display: "block", marginBottom: "0.2rem", textAlign: "left", fontSize: "1.1rem", fontWeight: "500", fontFamily:"sans-serif" }}>
            Project Name
          </label>
          <input
            type="text"
            id="projectName"
            {...register("projectName", { required: "Project Name is required", maxLength:{value:50, message:'limit reached'} })}
            placeholder="Enter project name"
            style={{
              width: "100%",
              padding: "1rem",
              border: "0.5px solid #ff0000",
              borderRadius: "0.5rem",
              alignItems:"",
              color:'black',
              outline:'none',
            }}
          />
          {errors.projectName && (
            <p style={{ color: "red", fontSize: "0.9rem" }}>{errors.projectName.message}</p>
          )}
        </div>

        {/* location */}
        <div>
          <label htmlFor="location" style={{ display: "block", marginBottom: "0.2"}}>Location</label>
          <input
          type="text"
          id="location"
          {...register("location", { required: "Location is required", maxLength:{value:50, message:'limit reached'}})}
          placeholder="Enter location"
          style={{
            width: "100%",
            padding: "1rem",
            border: "0.5px solid #ff0000",
            borderRadius: "0.5rem",
            color:'black'

          }}
          />
        </div>
        {/* owner/client */}
        <div>
          <label htmlFor="owner" style={{ display: "block", marginBottom: "0.2"}}>Owner/Client</label>
          <input
          type="text"
          id="owner"
          {...register("owner", { required: "Owner/Client is required", maxLength:{value:50, message:'limit reached'}})}
          placeholder="Enter owner/client"
          style={{
            width: "100%",
            padding: "1rem",
            border: "0.5px solid #ff0000",
            borderRadius: "0.5rem",
            color:'black'

            }}
            />
        </div>
        {/* Consultant */}
        <div>
          <label htmlFor="consultant" style={{ display: "block", marginBottom: "0.2"}}>Consultant</label>
          <input
          type="text"
          id="consultant"
          {...register("consultant", { required: "Consultant is required", maxLength:{value:50, message:'limit reached'}})}
          placeholder="Enter consultant"
          style={{
            width: "100%",
            padding: "1rem",
            border: "0.5px solid #ff0000",
            borderRadius: "0.5rem",
            color:'black'
            }}
            />
        </div>

        {/* Project Details */}
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="projectDetails" style={{ display: "block", marginBottom: "0.5rem" }}>
            Project Details
          </label>
          <textarea
            id="projectDetails"
            {...register("projectDetails", { required: "Project Details are required" , maxLength:{value:250, message:'limit reached'} })}
            placeholder="Enter project details"
            rows="15"
            style={{
              width: "100%",
              padding: "0.5rem",
              border: "1px solid #ccc",
              borderRadius: "0.5rem",
              color:'black'
            }}
          />
          {errors.projectDetails && (
            <p style={{ color: "red", fontSize: "0.9rem" }}>{errors.projectDetails.message}</p>
          )}
        </div>
          </div>
        {/* Project Photo */}
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="frontphoto" style={{ display: "block", marginBottom: "1rem" }}>
            Main Photo of Front of card
          </label>
          <input
            id="frontphoto"
            type="file"
            {...register("frontphoto", { required: "Project Photo is required" })}
            style={{
              width: "100%",
              padding: "0.5rem",
              border: "1px solid #ccc",
              borderRadius: "0.5rem",
            }}
            multiple
            accept="image/*"
          />
          {errors.frontphoto && (
            <p style={{ color: "red", fontSize: "0.9rem" }}>{errors.frontphoto.message}</p>
          )}
          <label htmlFor="image2" style={{ display: "block", marginBottom: "1rem" }}>
            second photo
          </label>
          <input
            id="image2"
            type="file"
            {...register("image2", { required: "Project Photo is required" })}
            style={{
              width: "100%",
              padding: "0.5rem",
              border: "1px solid #ccc",
              borderRadius: "0.5rem",
            }}
            multiple
            accept="image/*"
          />
          {errors.image2 && (
            <p style={{ color: "red", fontSize: "0.9rem" }}>{errors.image2.message}</p>
          )}
          <label htmlFor="image3" style={{ display: "block", marginBottom: "1rem" }}>
          image3
          </label>
          <input
            id="image3"
            type="file"
            {...register("image3", { required: "Project Photo is required" })}
            style={{
              width: "100%",
              padding: "0.5rem",
              border: "1px solid #ccc",
              borderRadius: "0.5rem",
            }}
            multiple
            accept="image/*"
          />
          {errors.image3 && (
            <p style={{ color: "red", fontSize: "0.9rem" }}>{errors.image3.message}</p>
          )}
          <label htmlFor="image4" style={{ display: "block", marginBottom: "1rem" }}>
          image4
          </label>
          <input
            id="image4"
            type="file"
            {...register("image4", { required: "Project Photo is required" })}
            style={{
              width: "100%",
              padding: "0.5rem",
              border: "1px solid #ccc",
              borderRadius: "0.5rem",
            }}
            multiple
            accept="image/*"
          />
          {errors.image4 && (
            <p style={{ color: "red", fontSize: "0.9rem" }}>{errors.image4.message}</p>
          )}
          <label htmlFor="image5" style={{ display: "block", marginBottom: "1rem" }}>
          image5
          </label>
          <input
            id="image5"
            type="file"
            {...register("image5", { required: "Project Photo is required" })}
            style={{
              width: "100%",
              padding: "0.5rem",
              border: "1px solid #ccc",
              borderRadius: "0.5rem",
            }}
            multiple
            accept="image/*"
          />
          {errors.image5 && (
            <p style={{ color: "red", fontSize: "0.9rem" }}>{errors.image5.message}</p>
          )}
          <label htmlFor="image6" style={{ display: "block", marginBottom: "1rem" }}>
          image6
          </label>
          <input
            id="image6"
            type="file"
            {...register("image6", { required: "Project Photo is required" })}
            style={{
              width: "100%",
              padding: "0.5rem",
              border: "1px solid #ccc",
              borderRadius: "0.5rem",
            }}
            multiple
            accept="image/*"
          />
          {errors.image6 && (
            <p style={{ color: "red", fontSize: "0.9rem" }}>{errors.image6.message}</p>
          )}
          {/* <div>
        <h4 style={{margin:'1rem 0'}}>Preview Selected Images:</h4>
        <div className="grid grid-cols-2">
        {files &&
          Array.from(files).map((file, index) => (
            <img
              key={index}
              src={URL.createObjectURL(file)}
              alt={`Preview ${index + 1}`}
              style={{ width: "120px", height: "120px", }}
            />
          ))}
        </div>  
      </div> */}

        </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          style={{
            width: "20%",
            padding: "0.75rem",
            backgroundColor: "blue",
            color: "white",
            border: "none",
            borderRadius: "0.5rem",
            cursor: "pointer",
            fontSize: "1rem",
          }}
        >
          {mode === "Add" ? "Add Project" : "Update Project"}
        </button>
      </form>
    </div>
  );
};

export default AddAndUpdate;
