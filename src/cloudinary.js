import {v2 as cloudinary } from 'cloudinary'

 import {
    CLOUDNAME,
    APISECRET,
    APIKEY
   
} from './config.js' 

    cloudinary.config({ 
        cloud_name:CLOUDNAME,
        api_key:APIKEY,
        api_secret:APISECRET,
        secure:true
      }
    
      );
    
 
      export const uploadImage = async(filepath)=>{
        return await cloudinary.uploader.upload(filepath,{
                folder: 'empleados'
            }
        )
        console.log('entro')
    }

    export const deleteImage = async(public_id)=>{
        return await cloudinary.uploader.destroy(public_id)
    }