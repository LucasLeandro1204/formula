// Copyright 2015-2018 FormBucket LLC

import isempty from "./isempty";

// IFBLANK return the `value` if empty, otherwise it returns `value_if_empty`.
export default function ifempty(value, value_if_empty) {
  return isempty(value) ? value_if_empty : value;
}
