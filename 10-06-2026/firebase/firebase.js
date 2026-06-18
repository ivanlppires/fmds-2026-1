import { initializeApp, cert } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import serviceAccount from './key.json' assert { type: 'json' };

const admin = initializeApp({
    credential: cert(serviceAccount)
});

export const verifyToken = async (req, res, next) => {
    
    if(!req.headers.authorization || !req.headers.authorization.startsWith('Bearer ')) {
        return res.status(401).json({ error: 'Unauthorized' });
    }
    
    const token = req.headers.authorization.split(' ')[1];
    let user = null;
    getAuth().verifyIdToken(token)
        .then((decodedToken) => {
            user = decodedToken;
            console.log(user);
            next();
        })
        .catch((error) => {
            res.status(401).json({ error: 'Unauthorized' });
        });
}

export default admin;
