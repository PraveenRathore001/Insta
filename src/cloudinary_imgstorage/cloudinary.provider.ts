import { v2 } from "cloudinary";
import { CLOUDINARY } from "./cloudinary.constants";

export const CloudinaryProvider = {
    provide:CLOUDINARY,
    useFactory: () => {
      return v2.config({
        cloud_name: 'danvucb9g',
        api_key: '382963312555594',
        api_secret: 'JiS3hZX1O_FgpWl9oRMfUea6uH0'
      });
    },
  };