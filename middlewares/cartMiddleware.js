// verifica si un usuario NO ha iniciado sesión lo manda a loguear

let cartMiddleware = (req, res, next ) => { 
    if (req.session.usuarioLogueado == undefined) {
    res.redirect('./login');
    }
    next();
}

module.exports = cartMiddleware