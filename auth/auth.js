const jwt = require("jsonwebtoken")

const auth = (req, res, next) => {
    let headers = req.headers.authorization
    let token = headers && headers.split(" ")[1]
    const SECRET_KEY = "secretcode"
    
    if(token == null){
        res.status(401).json({ message: "Unauthorized"})
    }else{
        jwt.verify(token, SECRET_KEY, (error,user,decoded) => {
            if (error) {
                res
                .status(401)
                .json({
                    message: "Invalid token"
                })
            } else {
                console.log(user);
                req.user = decoded
                next()
            }
        })
    }
}

// exports.isRole = (authRoles = []) => (req,res,next)=>{
//     let token = req.headers.authorization.split(" ")[1]
//     let decoded = jwt.verify(token, SECRET_KEY)
//     if (authRoles.includes(decoded.role)) {
//         next()
//     } else {
//         res.json({
//             message: "You are not authorized to access this resource"
//         })
//     }
// }

// const isRole = (requiredRole) => {
//     return (req, res, next) => {
//     // Mendapatkan role pengguna dari req.user yang telah disimpan saat verifikasi token
//     const userRole = req.decoded.role;

//     // Memeriksa apakah role pengguna sesuai dengan role yang diizinkan
//     if (userRole !== role) {
//       return res.status(403).json({ message: 'Forbidden' });
//     }
//   };
// }

module.exports = {auth}