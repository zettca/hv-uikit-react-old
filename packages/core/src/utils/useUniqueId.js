import { useState } from "react";
import uniqueId from "lodash/uniqueId";

const pascalToKebab = (string = "") => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();

export default (id, idPrefix) => useState(id || uniqueId(pascalToKebab(idPrefix)))[0];
