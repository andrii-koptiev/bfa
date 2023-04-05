import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBql3Qdxv_9LeHVlcbpz3AsmL0lO6oDZrE',
  authDomain: 'buyer-financial-accounting.firebaseapp.com',
  databaseURL:
    'https://buyer-financial-accounting-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'buyer-financial-accounting',
  storageBucket: 'buyer-financial-accounting.appspot.com',
  messagingSenderId: '260850141161',
  appId: '1:260850141161:web:d491dc68cdc15edc8aed78',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();
