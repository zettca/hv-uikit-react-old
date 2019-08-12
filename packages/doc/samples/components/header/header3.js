import React, { useState } from "react";
import HvHeader from "@hv/uikit-react-core/dist/Header";
import SettingIcon from "@hv/uikit-react-icons/dist/Settings.S";
import TestLogo from "./resources/testlogo.svg";
import photo from "./resources/user.png";

const userData = {
  name: "Andrew Jennings",
  role: "maintenance manager"
};

const userClick = () => alert("clicked");

const SimpleHeaderController = ({
  position,
  navigationData,
  companyLogo,
  productLogo,
  label,
  itemActions,
  userData,
  userIcon,
  userClick
}) => {
  const [selected, setSelected] = useState(0);

  const handleChange = index => {
    setSelected(index);
  };

  return (
    <HvHeader
      position={position}
      // Brand
      companyLogo={companyLogo}
      productLogo={productLogo}
      label={label}
      // Navigation
      navigationData={navigationData}
      onNavigationClick={handleChange}
      selected={selected}
      useRouter
      // User
      userData={userData}
      userIcon={userIcon}
      userClick={userClick}
      // Actions
      itemActions={itemActions}
    />
  );
};

export default (
  <div style={{ overflowX: "auto", overflowY: "hidden" }}>
    <SimpleHeaderController
      position="static"
      // Brand
      productLogo={TestLogo}
      label="Hitachi Content Intelligence"
      // Navigation
      useRouter
      // User
      userIcon={photo}
      userData={userData}
      userClick={userClick}
      itemActions={[<SettingIcon />]}
    />
  </div>
);