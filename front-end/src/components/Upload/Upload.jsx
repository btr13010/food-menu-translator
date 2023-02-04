import React from "react";
import "./Upload.css";
import { useState, useEffect } from "react";
import { storage } from "./firebase"
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";
import { v4 } from "uuid";
import Menu from "../Table/Menu";


function Uploader(){
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);
  const [searched1, setSearched1] = useState(false);

  const imagesListRef = ref(storage);
  const uploadFile = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls((prev) => [...prev, url]);
      });
    });
    setSearched1(true);
  };

  useEffect(() => {
    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrls((prev) => [...prev, url]);
        });
      });
    });
  }, []);
  const data1 = [{'food': 'Red bean soup', 'price': '35k'}, {'food': 'Copper crab soup', 'price': '40k'}, {'food': 'Hot cocoa', 'price': '20k'}, {'food': 'Mulberry yogurt', 'price': '50k'}, {'food': 'Green tea stone', 'price': '50k'}, {'food': 'Beef noodle soup', 'price': '70k'}, {'food': 'Pho is pale', 'price': '40k'}]

  return (
    <div>
      {searched1 && <Menu menu={data1} />}
      <div className="Upload">

      <span className="text">Choose Your Menu Image to be Extracted</span>
      <input
        type="file"
        onChange={(event) => {
          setImageUpload(event.target.files[0]);
        }}
      />
      <button onClick={uploadFile}>Extract Menu</button>
      </div >


    </div>
  );
}

export default Uploader;