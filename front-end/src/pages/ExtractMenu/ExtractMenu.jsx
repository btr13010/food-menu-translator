import React, { useState } from "react";

import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Uploader from "../../components/Upload/Upload";
import ShowMenu from "../../components/Upload/ShowMenu";
import { Menu } from "antd";

const ExtractMenu = () => {
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);


  return (
    <div className="AppGlass">
      <Sidebar heading={"Menu Extraction"} />
      <Header heading={"Menu Extraction"} />
      {isFilePicked ? (
        <ShowMenu menu={selectedFile} />
      ) : (
        <Uploader
          selectedFile={selectedFile}
          isFilePicked={isFilePicked}
          setSelectedFile={(e) => setSelectedFile(e)}
          setIsFilePicked={(e) => setIsFilePicked(e)}
        />
      )}
      <Footer />
    </div>
  );
};

export default ExtractMenu;
