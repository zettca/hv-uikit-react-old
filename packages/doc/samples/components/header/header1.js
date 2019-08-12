import React, { useState } from "react";
import HvHeader from "@hv/uikit-react-core/dist/Header";
import UserIcon from "@hv/uikit-react-icons/dist/User.S";
import SettingIcon from "@hv/uikit-react-icons/dist/Settings.S";
import HelpIcon from "@hv/uikit-react-icons/dist/Help.S";
import HitachiLogo from "./resources/hitachi";

const Hitachi = () => <HitachiLogo style={{ width: "72px" }} />;

const navigationData = [
  {
    label: "Overview",
    path: "/"
  },
  {
    label: "events",
    path: "/events"
  },
  {
    label: "work orders",
    path: "/work"
  },
  {
    label: "asset",
    path: "/asset"
  },
  {
    label: "Analytics",
    path: "/Analytics"
  },
  {
    label: "Resources",
    path: "/Resources"
  }
];

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
      id="test"
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
  <div style={{overflowX: "auto", overflowY: "hidden"}}>
    <SimpleHeaderController
      position="static"
      // Brand
      companyLogo={<Hitachi />}
      label="Maintenance Insights"
      // Navigation
      navigationData={navigationData}
      selected={0}
      useRouter
      // User
      userIcon={<UserIcon />}
      userClick={() => alert("clicked")}
      // Actions
      itemActions={[<SettingIcon />, <HelpIcon />]}
    />
  </div>
);