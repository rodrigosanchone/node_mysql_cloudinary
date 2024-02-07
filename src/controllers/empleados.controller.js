import { json } from 'express'
import { conexion } from '../db.js'
import fs from 'fs-extra'
import { uploadImage, deleteImage } from '../cloudinary.js'
export const controller = {
  createEmpleado: async (req, res) => {
    try {
      const { nombre, apellido} = req.body
      const img = req.files.img.tempFilePath
      const result = uploadImage(img)
      const url = (await result).secure_url;
      const public_id = (await result).public_id;
      const [rows] = await conexion.query('INSERT INTO datos (nombre, apellido, img, public_id)VALUES(?,?,?,?)',[nombre, apellido, url, public_id])
      await fs.unlink(img)
      res.status(201).json({
        id: rows.insertId,
        nombre,
        apellido
      })
    } catch (error) {
      return res.status(500).json({
        message: error.message
      })
    }
   
  },
  deleteEmpleado: async(req,res)=>{
    try{
      const [public_id] = await conexion.query('SELECT public_id FROM datos WHERE id = ?', [req.params.id])
      console.log(public_id[0].public_id)
      await deleteImage(public_id[0].public_id)
      if(deleteImage){
        console.log('borrado')
      }
      
         const [result]= await conexion.query('DELETE FROM datos WHERE id = ? ', [req.params.id]) 
                
    
      if (result.affectedRows <= 0) return res.status(404).json({
        messages: 'No existe'
 }); 
         
         return res.json(result) 
    }catch(error){
      res.status(500).json({
        message: error.message
      })
    }
  }
}
