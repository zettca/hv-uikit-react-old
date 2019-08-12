/*
 * Copyright 2019 Hitachi Vantara Corporation
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

import React from "react";
import { storiesOf } from "@storybook/react";
import HvModalTitle from "@hv/uikit-react-core/dist/Modal/ModalTitle";

storiesOf("Components/Modal", module).add("Title", () => <HvModalTitle />, {
  title: "Modal Title",
  usage: "import HvModalTitle from '@hv/uikit-react-core/dist/Modal/ModalTitle'",
  description: "The container for the tile of the modal component"
});