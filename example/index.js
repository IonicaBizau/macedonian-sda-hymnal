"use strict";

import macedonianSdaHymnal from "../lib/index.js";

macedonianSdaHymnal(28).then(x => console.log(JSON.stringify(x, null, 4))).catch(console.error);