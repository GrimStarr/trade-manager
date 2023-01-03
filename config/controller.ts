import {collection, getFirestore} from 'firebase/firestore'
import {app} from './firebase'

export const db = getFirestore(app);

//Server collectino

export const serverCollection = collection(db,'servers')