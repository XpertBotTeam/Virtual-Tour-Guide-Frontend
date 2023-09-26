import React from "react";
import "./explore3D.css";
import Image from "next/image";

function Explore3D() {
  return (
    <div className="pFeaturedCard w-1/3 m-auto mt-4">
      <div className="pCardUpper style-3wP1j" id="style-3wP1j">
        <Image
        width={200}
        height={200}
        alt="any"
          className="pCardUpperImage "
          src="https://cyarkpublicdata.blob.core.windows.net/public/Images/projects/icons/ppc_3dexplorer.png"
        />
      </div>
      <div className="pCardLower">
        <div className="pFCardTitle border-none">3D Explorer</div>
        <div className="pFCardSubText">Explore in 3D space</div>
        <div className="pFCardButton style-IjDoG" id="style-IjDoG">
          Explore in 3D
        </div>
      </div>
    </div>
  );
}

export default Explore3D;
