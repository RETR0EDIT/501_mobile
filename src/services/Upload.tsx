import React, { useState } from "react";
import axios from "axios";

interface UploadProps {
  uploadUrl: string;
  onUploadSuccess: (imageUrl: string) => void;
  onUploadError?: (error: string) => void;
}

export const Upload: React.FC<UploadProps> = ({
  uploadUrl,
  onUploadSuccess,
  onUploadError,
}) => {
  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const userId = localStorage.getItem("userId");
      if (!userId) {
        console.error("Utilisateur non connecté.");
        return;
      }

      const formData = new FormData();
      formData.append("image", file);

      try {
        const response = await axios.post(`${uploadUrl}/${userId}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        const imageUrl = response.data; // Supposons que l'URL de l'image est renvoyée dans la réponse
        onUploadSuccess(imageUrl); // Appeler la fonction de rappel avec l'URL de l'image
      } catch (error) {
        const errorMessage = axios.isAxiosError(error)
          ? `Erreur lors du téléchargement de l'image: ${
              error.response?.data || error.message
            }`
          : "Erreur lors du téléchargement de l'image.";
        if (onUploadError) {
          onUploadError(errorMessage);
        }
        console.error("Erreur lors du téléchargement de l'image", error);
      }
    }
  };

  return (
    <div className="upload-container">
      <label htmlFor="file-upload" className="custom-file-upload">
        <img src="/pen.svg" alt="Upload" />
      </label>
      <input
        id="file-upload"
        type="file"
        onChange={handleImageChange}
        style={{ display: "none" }}
      />
    </div>
  );
};
