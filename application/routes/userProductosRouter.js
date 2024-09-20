// Define las rutas de la aplicación y mapea las URLs a los controladores.
const path = require('path');
const fs = require('fs');
const express = require('express');
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');
const { auth, authCookie } = require('../middlewares/authenticateToken');
const sessionAuth = require('../middlewares/sessionLogin');
const sessionGoogleOAuth = require('../../infrastructure/middlewares/sessionOAuth');
const { versionMiddleware } = require('../middlewares/version');

const router = express.Router();

router.get("/v1.1.0", sessionAuth,  auth, (req, res)=>{
    res.sendFile(path.join(process.env.EXPRESS_STATIC, 'views/home.html'));
})
router.get("/v1.0.0", cookieParser(), authCookie, (req, res)=>{
    res.sendFile(path.join(process.env.EXPRESS_STATIC, 'views/home.html'));
})
router.get("/v2.0.0", sessionGoogleOAuth, (req, res)=>{
    console.log(req.session);
    res.sendFile(path.join(process.env.EXPRESS_STATIC, 'views/home.html'));
})

router.post("/", versionMiddleware("1.0.0"), fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 }
  }), (req, res)=>{
    
    // Obtener el archivo de la lista que se envio en el html
    let file = req.files.product_image;
    // Leer el archivo como buffer (binario)
    let fileBuffer = file.data;  // 'file.data' contiene el archivo en binario
    // Definir ruta donde se guardará el archivo
    const filePath = path.join(process.env.EXPRESS_STATIC, '/storage/img', file.name);

    // Guardar el archivo en el sistema de archivos
    fs.writeFile(filePath, fileBuffer, (err) => {
        if (err) return res.status(500).send('Error al guardar el archivo.');
        // Respuesta en caso de éxito
        res.status(200).json("Archivo Guardado");
    });
    
})


module.exports = router;