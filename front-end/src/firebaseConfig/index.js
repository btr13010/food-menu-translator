import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
function StartFirebase(){
  const firebaseConfig = {
    apiKey: process.env.REDIRECT_API_KEY,
    authDomain: "foodmenutranslator.firebaseapp.com",
    databaseURL: "https://foodmenutranslator-default-rtdb.firebaseio.com",
    projectId: "foodmenutranslator",
    storageBucket: "foodmenutranslator.appspot.com",
    messagingSenderId: "794950430551",
    appId: "1:794950430551:web:68e67b03d217c47f765812"
  };

  const app = initializeApp(firebaseConfig);
  return getDatabase(app);

}


  
export default StartFirebase;