/*
 * Copyright 2020 Hitachi Vantara Corporation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React, { useState } from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { withTheme } from "@material-ui/core/styles";
import HvHeader, {
  HvHeaderBrand,
  HvHeaderActions,
  HvHeaderNavigation
} from "@hv/uikit-react-core/dist/Header";
import HvButton from "@hv/uikit-react-core/dist/Button";
import HvBadge from "@hv/uikit-react-core/dist/Badge";
import Alert from "@hv/uikit-react-icons/dist/Generic/Alert";
import User from "@hv/uikit-react-icons/dist/Generic/User";
import Menu from "@hv/uikit-react-icons/dist/Generic/Menu";
import HitachiLogo from "./assets/HitachiLogo";

const boxStyles = {
  width: 32,
  height: 32
};

const navigationData = [
  {
    id: "1",
    label: "Overview",
    data: [
      {
        id: "1-1",
        label: "Model Effectiveness 1"
      },
      {
        id: "1-2",
        label: "Trend Analysis 1-2"
      }
    ]
  },
  {
    id: "2",
    label: "Events"
  },
  {
    id: "3",
    label: "Work Orders",
    data: [
      {
        id: "3-1",
        label: "Model Effectiveness 3-1"
      },
      {
        id: "3-2",
        label: "Trend Analysis 3-2"
      }
    ]
  },
  {
    id: "4",
    label: "Asset"
  },
  {
    id: "5",
    label: "Analytics",
    data: [
      {
        id: "5-1",
        label: "Model Effectiveness 5-1"
      },
      {
        id: "5-2",
        label: "Trend Analysis 5-2"
      }
    ]
  }
];

const HeaderSample = withTheme(({ theme }) => {
  const [selected, setSelected] = useState("3-2");
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  const handleChange = (e, selectedItem) => {
    setSelected(selectedItem.id);
  };

  return (
    <HvHeader position="relative">
      {!isMdUp && (
        <HvButton category="icon" onClick={() => console.log("menu")}>
          <Menu />
        </HvButton>
      )}
      <HvHeaderBrand logo={<HitachiLogo />} name="Lumada App" />
      {isMdUp && (
        <HvHeaderNavigation
          data={navigationData}
          selected={selected}
          onClick={handleChange}
        />
      )}
      <HvHeaderActions>
        <HvButton
          category="icon"
          onClick={() => console.log("alerts")}
          aria-label="Open Notifications panel"
        >
          <HvBadge count={1} icon={<Alert boxStyles={boxStyles} />} />
        </HvButton>
        {isMdUp && (
          <HvButton
            category="icon"
            onClick={() => console.log("user")}
            aria-label="Open User panel"
          >
            <User boxStyles={boxStyles} />
          </HvButton>
        )}
      </HvHeaderActions>
    </HvHeader>
  );
});

export default <div style={{ height: 100 }}>{<HeaderSample />}</div>;
