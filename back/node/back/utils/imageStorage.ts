import multer from "multer"

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '/home/raphael/Projets/GoodBubble/good-bubble/back/node/back/public/images')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        const extension = file.originalname.split('.')

        cb(null, file.fieldname + '-' + uniqueSuffix + '.' + extension[1])
    }
})

export const upload = multer({ storage: storage })