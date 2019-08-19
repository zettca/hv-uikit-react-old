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
import SearchBox from "@hv/uikit-react-core/dist/SearchBox";

storiesOf("Components", module).add("SearchBox", () => <SearchBox />, {
  title: "SearchBox",
  description: "",
  usage: "import SearchBox from '@hv/uikit-react-core/dist/SearchBox'",
  examples: [
    {
      title: "Simple",
      description: "Basic usage of SearchBox",
      src: "components/searchBox/simpleSearchbox.js"
    },
    {
      title: "Disabled Searchbox",
      description: "Disabled searchBox disallows interactions",
      src: "components/searchBox/disabledSearchbox.js"
    },
    {
      title: "No Suggestions Searchbox",
      description: "searchbox without suggestion",
      src: "components/searchBox/noSuggestionSearchbox.js"
    }
  ]
});
