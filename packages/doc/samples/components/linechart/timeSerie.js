import React from "react";
import Linechart from "@hv/uikit-react-core/dist/Linechart";

const date = [
  "2015-02-17",
  "2015-02-18",
  "2015-02-19",
  "2015-02-20",
  "2015-02-23",
  "2015-02-24",
  "2015-02-25",
  "2015-02-26",
  "2015-02-27",
  "2015-03-02",
  "2015-03-03",
  "2015-03-04",
  "2015-03-05",
  "2015-03-06",
  "2015-03-09",
  "2015-03-10",
  "2015-03-11",
  "2015-03-12",
  "2015-03-13",
  "2015-03-16",
  "2015-03-17",
  "2015-03-18",
  "2015-03-19",
  "2015-03-20",
  "2015-03-23",
  "2015-03-24",
  "2015-03-25",
  "2015-03-26",
  "2015-03-27",
  "2015-03-30",
  "2015-03-31",
  "2015-04-01",
  "2015-04-02",
  "2015-04-06",
  "2015-04-07",
  "2015-04-08",
  "2015-04-09",
  "2015-04-10",
  "2015-04-13",
  "2015-04-14",
  "2015-04-15",
  "2015-04-16",
  "2015-04-17",
  "2015-04-20",
  "2015-04-21",
  "2015-04-22",
  "2015-04-23",
  "2015-04-24",
  "2015-04-27",
  "2015-04-28",
  "2015-04-29",
  "2015-04-30",
  "2015-05-01",
  "2015-05-04",
  "2015-05-05",
  "2015-05-06",
  "2015-05-07",
  "2015-05-08",
  "2015-05-11",
  "2015-05-12",
  "2015-05-13",
  "2015-05-14",
  "2015-05-15",
  "2015-05-18",
  "2015-05-19",
  "2015-05-20",
  "2015-05-21",
  "2015-05-22",
  "2015-05-26",
  "2015-05-27",
  "2015-05-28",
  "2015-05-29",
  "2015-06-01",
  "2015-06-02",
  "2015-06-03",
  "2015-06-04",
  "2015-06-05",
  "2015-06-08",
  "2015-06-09",
  "2015-06-10",
  "2015-06-11",
  "2015-06-12",
  "2015-06-15",
  "2015-06-16",
  "2015-06-17",
  "2015-06-18",
  "2015-06-19",
  "2015-06-22",
  "2015-06-23",
  "2015-06-24",
  "2015-06-25",
  "2015-06-26",
  "2015-06-29",
  "2015-06-30",
  "2015-07-01",
  "2015-07-02",
  "2015-07-06",
  "2015-07-07",
  "2015-07-08",
  "2015-07-09",
  "2015-07-10",
  "2015-07-13",
  "2015-07-14",
  "2015-07-15",
  "2015-07-16",
  "2015-07-17",
  "2015-07-20",
  "2015-07-21",
  "2015-07-22",
  "2015-07-23",
  "2015-07-24",
  "2015-07-27",
  "2015-07-28",
  "2015-07-29",
  "2015-07-30",
  "2015-07-31",
  "2015-08-03",
  "2015-08-04",
  "2015-08-05",
  "2015-08-06",
  "2015-08-07",
  "2015-08-10",
  "2015-08-11",
  "2015-08-12",
  "2015-08-13",
  "2015-08-14",
  "2015-08-17",
  "2015-08-18",
  "2015-08-19",
  "2015-08-20",
  "2015-08-21",
  "2015-08-24",
  "2015-08-25",
  "2015-08-26",
  "2015-08-27",
  "2015-08-28",
  "2015-08-31",
  "2015-09-01",
  "2015-09-02",
  "2015-09-03",
  "2015-09-04",
  "2015-09-08",
  "2015-09-09",
  "2015-09-10",
  "2015-09-11",
  "2015-09-14",
  "2015-09-15",
  "2015-09-16",
  "2015-09-17",
  "2015-09-18",
  "2015-09-21",
  "2015-09-22",
  "2015-09-23",
  "2015-09-24",
  "2015-09-25",
  "2015-09-28",
  "2015-09-29",
  "2015-09-30",
  "2015-10-01",
  "2015-10-02",
  "2015-10-05",
  "2015-10-06",
  "2015-10-07",
  "2015-10-08",
  "2015-10-09",
  "2015-10-12",
  "2015-10-13",
  "2015-10-14",
  "2015-10-15",
  "2015-10-16",
  "2015-10-19",
  "2015-10-20",
  "2015-10-21",
  "2015-10-22",
  "2015-10-23",
  "2015-10-26",
  "2015-10-27",
  "2015-10-28",
  "2015-10-29",
  "2015-10-30",
  "2015-11-02",
  "2015-11-03",
  "2015-11-04",
  "2015-11-05",
  "2015-11-06",
  "2015-11-09",
  "2015-11-10",
  "2015-11-11",
  "2015-11-12",
  "2015-11-13",
  "2015-11-16",
  "2015-11-17",
  "2015-11-18",
  "2015-11-19",
  "2015-11-20",
  "2015-11-23",
  "2015-11-24",
  "2015-11-25",
  "2015-11-27",
  "2015-11-30",
  "2015-12-01",
  "2015-12-02",
  "2015-12-03",
  "2015-12-04",
  "2015-12-07",
  "2015-12-08",
  "2015-12-09",
  "2015-12-10",
  "2015-12-11",
  "2015-12-14",
  "2015-12-15",
  "2015-12-16",
  "2015-12-17",
  "2015-12-18",
  "2015-12-21",
  "2015-12-22",
  "2015-12-23",
  "2015-12-24",
  "2015-12-28",
  "2015-12-29",
  "2015-12-30",
  "2015-12-31",
  "2016-01-04",
  "2016-01-05",
  "2016-01-06",
  "2016-01-07",
  "2016-01-08",
  "2016-01-11",
  "2016-01-12",
  "2016-01-13",
  "2016-01-14",
  "2016-01-15",
  "2016-01-19",
  "2016-01-20",
  "2016-01-21",
  "2016-01-22",
  "2016-01-25",
  "2016-01-26",
  "2016-01-27",
  "2016-01-28",
  "2016-01-29",
  "2016-02-01",
  "2016-02-02",
  "2016-02-03",
  "2016-02-04",
  "2016-02-05",
  "2016-02-08",
  "2016-02-09",
  "2016-02-10",
  "2016-02-11",
  "2016-02-12",
  "2016-02-16",
  "2016-02-17",
  "2016-02-18",
  "2016-02-19",
  "2016-02-22",
  "2016-02-23",
  "2016-02-24",
  "2016-02-25",
  "2016-02-26",
  "2016-02-29",
  "2016-03-01",
  "2016-03-02",
  "2016-03-03",
  "2016-03-04",
  "2016-03-07",
  "2016-03-08",
  "2016-03-09",
  "2016-03-10",
  "2016-03-11",
  "2016-03-14",
  "2016-03-15",
  "2016-03-16",
  "2016-03-17",
  "2016-03-18",
  "2016-03-21",
  "2016-03-22",
  "2016-03-23",
  "2016-03-24",
  "2016-03-28",
  "2016-03-29",
  "2016-03-30",
  "2016-03-31",
  "2016-04-01",
  "2016-04-04",
  "2016-04-05",
  "2016-04-06",
  "2016-04-07",
  "2016-04-08",
  "2016-04-11",
  "2016-04-12",
  "2016-04-13",
  "2016-04-14",
  "2016-04-15",
  "2016-04-18",
  "2016-04-19",
  "2016-04-20",
  "2016-04-21",
  "2016-04-22",
  "2016-04-25",
  "2016-04-26",
  "2016-04-27",
  "2016-04-28",
  "2016-04-29",
  "2016-05-02",
  "2016-05-03",
  "2016-05-04",
  "2016-05-05",
  "2016-05-06",
  "2016-05-09",
  "2016-05-10",
  "2016-05-11",
  "2016-05-12",
  "2016-05-13",
  "2016-05-16",
  "2016-05-17",
  "2016-05-18",
  "2016-05-19",
  "2016-05-20",
  "2016-05-23",
  "2016-05-24",
  "2016-05-25",
  "2016-05-26",
  "2016-05-27",
  "2016-05-31",
  "2016-06-01",
  "2016-06-02",
  "2016-06-03",
  "2016-06-06",
  "2016-06-07",
  "2016-06-08",
  "2016-06-09",
  "2016-06-10",
  "2016-06-13",
  "2016-06-14",
  "2016-06-15",
  "2016-06-16",
  "2016-06-17",
  "2016-06-20",
  "2016-06-21",
  "2016-06-22",
  "2016-06-23",
  "2016-06-24",
  "2016-06-27",
  "2016-06-28",
  "2016-06-29",
  "2016-06-30",
  "2016-07-01",
  "2016-07-05",
  "2016-07-06",
  "2016-07-07",
  "2016-07-08",
  "2016-07-11",
  "2016-07-12",
  "2016-07-13",
  "2016-07-14",
  "2016-07-15",
  "2016-07-18",
  "2016-07-19",
  "2016-07-20",
  "2016-07-21",
  "2016-07-22",
  "2016-07-25",
  "2016-07-26",
  "2016-07-27",
  "2016-07-28",
  "2016-07-29",
  "2016-08-01",
  "2016-08-02",
  "2016-08-03",
  "2016-08-04",
  "2016-08-05",
  "2016-08-08",
  "2016-08-09",
  "2016-08-10",
  "2016-08-11",
  "2016-08-12",
  "2016-08-15",
  "2016-08-16",
  "2016-08-17",
  "2016-08-18",
  "2016-08-19",
  "2016-08-22",
  "2016-08-23",
  "2016-08-24",
  "2016-08-25",
  "2016-08-26",
  "2016-08-29",
  "2016-08-30",
  "2016-08-31",
  "2016-09-01",
  "2016-09-02",
  "2016-09-06",
  "2016-09-07",
  "2016-09-08",
  "2016-09-09",
  "2016-09-12",
  "2016-09-13",
  "2016-09-14",
  "2016-09-15",
  "2016-09-16",
  "2016-09-19",
  "2016-09-20",
  "2016-09-21",
  "2016-09-22",
  "2016-09-23",
  "2016-09-26",
  "2016-09-27",
  "2016-09-28",
  "2016-09-29",
  "2016-09-30",
  "2016-10-03",
  "2016-10-04",
  "2016-10-05",
  "2016-10-06",
  "2016-10-07",
  "2016-10-10",
  "2016-10-11",
  "2016-10-12",
  "2016-10-13",
  "2016-10-14",
  "2016-10-17",
  "2016-10-18",
  "2016-10-19",
  "2016-10-20",
  "2016-10-21",
  "2016-10-24",
  "2016-10-25",
  "2016-10-26",
  "2016-10-27",
  "2016-10-28",
  "2016-10-31",
  "2016-11-01",
  "2016-11-02",
  "2016-11-03",
  "2016-11-04",
  "2016-11-07",
  "2016-11-08",
  "2016-11-09",
  "2016-11-10",
  "2016-11-11",
  "2016-11-14",
  "2016-11-15",
  "2016-11-16",
  "2016-11-17",
  "2016-11-18",
  "2016-11-21",
  "2016-11-22",
  "2016-11-23",
  "2016-11-25",
  "2016-11-28",
  "2016-11-29",
  "2016-11-30",
  "2016-12-01",
  "2016-12-02",
  "2016-12-05",
  "2016-12-06",
  "2016-12-07",
  "2016-12-08",
  "2016-12-09",
  "2016-12-12",
  "2016-12-13",
  "2016-12-14",
  "2016-12-15",
  "2016-12-16",
  "2016-12-19",
  "2016-12-20",
  "2016-12-21",
  "2016-12-22",
  "2016-12-23",
  "2016-12-27",
  "2016-12-28",
  "2016-12-29",
  "2016-12-30",
  "2017-01-03",
  "2017-01-04",
  "2017-01-05",
  "2017-01-06",
  "2017-01-09",
  "2017-01-10",
  "2017-01-11",
  "2017-01-12",
  "2017-01-13",
  "2017-01-17",
  "2017-01-18",
  "2017-01-19",
  "2017-01-20",
  "2017-01-23",
  "2017-01-24",
  "2017-01-25",
  "2017-01-26",
  "2017-01-27",
  "2017-01-30",
  "2017-01-31",
  "2017-02-01",
  "2017-02-02",
  "2017-02-03",
  "2017-02-06",
  "2017-02-07",
  "2017-02-08",
  "2017-02-09",
  "2017-02-10",
  "2017-02-13",
  "2017-02-14",
  "2017-02-15",
  "2017-02-16"
];

const trace1 = {
  x: date,
  y: [
    "127.489998",
    "127.629997",
    "128.479996",
    "128.619995",
    "130.020004",
    "132.940002",
    "131.559998",
    "128.789993",
    "130",
    "129.25",
    "128.960007",
    "129.100006",
    "128.580002",
    "128.399994",
    "127.959999",
    "126.410004",
    "124.75",
    "122.309998",
    "124.400002",
    "123.879997",
    "125.900002",
    "127",
    "128.75",
    "128.25",
    "127.120003",
    "127.230003",
    "126.540001",
    "122.760002",
    "124.57",
    "124.050003",
    "126.089996",
    "124.82",
    "125.029999",
    "124.470001",
    "127.639999",
    "125.849998",
    "125.849998",
    "125.949997",
    "128.369995",
    "127",
    "126.410004",
    "126.279999",
    "125.550003",
    "125.57",
    "128.100006",
    "126.989998",
    "128.300003",
    "130.490005",
    "132.309998",
    "134.460007",
    "130.160004",
    "128.639999",
    "126.099998",
    "129.5",
    "128.149994",
    "126.559998",
    "124.769997",
    "126.68",
    "127.389999",
    "125.599998",
    "126.150002",
    "127.410004",
    "129.070007",
    "128.380005",
    "130.690002",
    "130",
    "130.070007",
    "131.600006",
    "132.600006",
    "130.339996",
    "131.860001",
    "131.229996",
    "130.279999",
    "129.860001",
    "130.660004",
    "129.580002",
    "129.5",
    "128.899994",
    "126.699997",
    "127.919998",
    "129.179993",
    "128.190002",
    "126.099998",
    "127.029999",
    "127.720001",
    "127.230003",
    "127.709999",
    "127.489998",
    "127.480003",
    "127.209999",
    "128.860001",
    "127.669998",
    "125.459999",
    "125.57",
    "126.900002",
    "126.43",
    "124.940002",
    "125.889999",
    "124.480003",
    "123.849998",
    "121.940002",
    "125.029999",
    "126.040001",
    "125.720001",
    "127.739998",
    "129.080002",
    "130.970001",
    "132.850006",
    "121.989998",
    "126.199997",
    "125.32",
    "123.089996",
    "123.379997",
    "123.150002",
    "122.32",
    "122.599998",
    "121.5",
    "117.419998",
    "112.949997",
    "115.970001",
    "114.580002",
    "116.529999",
    "117.809998",
    "112.529999",
    "116.040001",
    "114.32",
    "116.040001",
    "116.43",
    "116.099998",
    "114.080002",
    "110.43",
    "94.870003",
    "111.110001",
    "107.089996",
    "112.230003",
    "112.169998",
    "112.029999",
    "110.150002",
    "110.230003",
    "112.489998",
    "108.970001",
    "111.75",
    "113.760002",
    "110.269997",
    "111.790001",
    "116.580002",
    "115.93",
    "116.25",
    "115.660004",
    "112.209999",
    "113.669998",
    "113.379997",
    "113.629997",
    "113.25",
    "116.440002",
    "113.849998",
    "112.830002",
    "110.169998",
    "109.07",
    "108.010002",
    "109.879997",
    "110.629997",
    "111.739998",
    "110.190002",
    "110",
    "112.730003",
    "110.82",
    "111.290001",
    "110.93",
    "111.779999",
    "110.800003",
    "111.339996",
    "114",
    "114.330002",
    "116.699997",
    "118.080002",
    "115.400002",
    "116.93",
    "118.699997",
    "120.989998",
    "120.800003",
    "120.790001",
    "123.129997",
    "121.849998",
    "121.110001",
    "120.959999",
    "116.900002",
    "116.370003",
    "116.260002",
    "115.199997",
    "111.379997",
    "114.919998",
    "115.760002",
    "117.639999",
    "119.199997",
    "119.269997",
    "117.330002",
    "119.209999",
    "118.290001",
    "117.989998",
    "118.75",
    "117.339996",
    "116.550003",
    "115.290001",
    "118.980003",
    "117.519997",
    "117.639999",
    "116.040001",
    "115.190002",
    "112.18",
    "111.940002",
    "111.07",
    "112.019997",
    "108.910004",
    "107.279999",
    "107.400002",
    "107.269997",
    "109",
    "107.589996",
    "106.959999",
    "108.580002",
    "107.010002",
    "102.610001",
    "105.75",
    "100.559998",
    "98.68",
    "98.550003",
    "98.970001",
    "100.550003",
    "100.32",
    "97.959999",
    "96.199997",
    "98.410004",
    "95.099998",
    "97.059998",
    "98.629997",
    "101.519997",
    "99.93",
    "96.040001",
    "93.790001",
    "94.790001",
    "96.470001",
    "95.419998",
    "95",
    "95.860001",
    "96.519997",
    "93.129997",
    "94.290001",
    "95.919998",
    "93.790001",
    "94.190002",
    "95.019997",
    "96.669998",
    "98.839996",
    "96",
    "96.309998",
    "96.400002",
    "93.980003",
    "96.050003",
    "97.199997",
    "96.860001",
    "97.650002",
    "100.510002",
    "100.580002",
    "102.370003",
    "102.389999",
    "100.779999",
    "101.309998",
    "101.410004",
    "102.239998",
    "101.910004",
    "103.959999",
    "104.610001",
    "105.519997",
    "106.339996",
    "105.93",
    "105.25",
    "106.480003",
    "105.470001",
    "106",
    "104.889999",
    "108.650002",
    "109.720001",
    "108.779999",
    "110.419998",
    "109.510002",
    "110.230003",
    "109.949997",
    "108.910004",
    "108.970001",
    "109.339996",
    "110.800003",
    "111.620003",
    "112.110001",
    "108.889999",
    "107.879997",
    "106.639999",
    "106.93",
    "105.010002",
    "105",
    "103.910004",
    "96",
    "97.610001",
    "93.989998",
    "93.970001",
    "94.199997",
    "95.199997",
    "94",
    "93.370003",
    "93",
    "93.330002",
    "93.480003",
    "92.720001",
    "90",
    "92.389999",
    "94.550003",
    "94.160004",
    "94.639999",
    "94.639999",
    "95.870003",
    "97.220001",
    "98.669998",
    "99.68",
    "99.440002",
    "99.599998",
    "99.019997",
    "97.599998",
    "97.790001",
    "97.989998",
    "99.25",
    "99.019997",
    "98.5",
    "98.529999",
    "98.690002",
    "97.32",
    "97.82",
    "96.449997",
    "96.620003",
    "96",
    "94.940002",
    "96.25",
    "95.940002",
    "92.910004",
    "93",
    "92.900002",
    "93.970001",
    "94.440002",
    "95.489998",
    "95.389999",
    "94.599998",
    "95.699997",
    "96.489998",
    "96.75",
    "97.169998",
    "97.410004",
    "97.389999",
    "98.919998",
    "98.699997",
    "99.559998",
    "100",
    "99.830002",
    "99.260002",
    "98.25",
    "96.82",
    "104.269997",
    "102.830002",
    "104.190002",
    "104.410004",
    "106.050003",
    "104.809998",
    "105.580002",
    "106.269997",
    "107.519997",
    "108.230003",
    "108.709999",
    "108.519997",
    "107.779999",
    "108.139999",
    "109.629997",
    "109.099998",
    "109.230003",
    "108.769997",
    "108.860001",
    "108.589996",
    "108.57",
    "107.389999",
    "107.410004",
    "106.620003",
    "105.800003",
    "105.660004",
    "106.139999",
    "107.699997",
    "107.900002",
    "107.830002",
    "107.25",
    "104.639999",
    "102.650002",
    "107.510002",
    "108.730003",
    "113.860001",
    "115.120003",
    "115.190002",
    "113.050003",
    "113.849998",
    "114.349998",
    "114.419998",
    "111.639999",
    "113",
    "113.690002",
    "113.160004",
    "112.459999",
    "112.709999",
    "113.059998",
    "113.400002",
    "113.699997",
    "114.309998",
    "115.019997",
    "117.699997",
    "117.349998",
    "116.790001",
    "117.879997",
    "117.330002",
    "118.18",
    "117.25",
    "116.860001",
    "116.809998",
    "117.099998",
    "117.949997",
    "114.309998",
    "115.389999",
    "113.870003",
    "113.650002",
    "113.459999",
    "111.400002",
    "110.980003",
    "108.529999",
    "110.080002",
    "110.309998",
    "109.879997",
    "111.089996",
    "107.120003",
    "107.709999",
    "106.57",
    "106.699997",
    "109.809998",
    "109.720001",
    "110.120003",
    "111.949997",
    "111.360001",
    "111.129997",
    "111.43",
    "110.779999",
    "111.599998",
    "110.370003",
    "109.169998",
    "110",
    "109.5",
    "109.260002",
    "110.860001",
    "112.309998",
    "113.290001",
    "113.839996",
    "115.040001",
    "115.379997",
    "116.470001",
    "115.800003",
    "116.739998",
    "116.800003",
    "116.349998",
    "115.589996",
    "116.519997",
    "117.519997",
    "116.449997",
    "116.650002",
    "115.800003",
    "115.849998",
    "115.919998",
    "116.779999",
    "117.949997",
    "118.769997",
    "118.739998",
    "118.900002",
    "119.110001",
    "118.339996",
    "120",
    "119.400002",
    "120.449997",
    "120",
    "119.550003",
    "120.419998",
    "121.669998",
    "122.139999",
    "120.93",
    "121.150002",
    "127.029999",
    "127.980003",
    "128.309998",
    "129.130005",
    "130.539993",
    "131.350006",
    "131.649994",
    "132.460007",
    "133.080002",
    "133.470001",
    "135.520004",
    "135.669998"
  ],
  name: "Sales Target"
};

const trace2 = {
  x: date,
  y: [
    "126.919998",
    "127.449997",
    "128.330002",
    "128.050003",
    "129.660004",
    "131.169998",
    "128.149994",
    "126.610001",
    "128.240005",
    "128.300003",
    "128.089996",
    "128.320007",
    "125.760002",
    "126.260002",
    "125.059998",
    "123.800003",
    "122.110001",
    "121.629997",
    "122.580002",
    "122.870003",
    "125.650002",
    "126.370003",
    "127.400002",
    "125.160004",
    "126.519997",
    "126.559998",
    "123.379997",
    "122.599998",
    "122.910004",
    "124",
    "124.360001",
    "123.099998",
    "124.190002",
    "124.330002",
    "125.980003",
    "124.970001",
    "124.660004",
    "125.260002",
    "126.610001",
    "125.910004",
    "126.010002",
    "126.110001",
    "124.459999",
    "125.169998",
    "126.669998",
    "126.32",
    "128.139999",
    "129.229996",
    "131.149994",
    "129.570007",
    "128.300003",
    "124.580002",
    "125.300003",
    "128.259995",
    "125.779999",
    "123.360001",
    "124.019997",
    "126.110001",
    "125.629997",
    "124.82",
    "125.870003",
    "127.160004",
    "128.210007",
    "128.360001",
    "129.639999",
    "129.339996",
    "129.830002",
    "131.399994",
    "129.119995",
    "130.050003",
    "131.100006",
    "129.899994",
    "130.050003",
    "129.320007",
    "129.899994",
    "128.910004",
    "128.360001",
    "126.830002",
    "125.620003",
    "127.849998",
    "128.479996",
    "127.110001",
    "125.709999",
    "126.370003",
    "126.739998",
    "127.220001",
    "126.400002",
    "127.080002",
    "126.879997",
    "127.120003",
    "127.5",
    "126.510002",
    "124.480003",
    "124.860001",
    "125.989998",
    "125.769997",
    "124.849998",
    "123.769997",
    "122.540001",
    "119.220001",
    "121.209999",
    "124.32",
    "125.040001",
    "125.580002",
    "127.349998",
    "128.309998",
    "130.699997",
    "130.320007",
    "121.989998",
    "125.059998",
    "123.900002",
    "122.120003",
    "122.550003",
    "122.269997",
    "121.709999",
    "120.910004",
    "117.519997",
    "113.25",
    "112.099998",
    "114.120003",
    "114.5",
    "116.529999",
    "113.330002",
    "109.629997",
    "114.540001",
    "114.010002",
    "115.5",
    "116.010002",
    "114.68",
    "111.629997",
    "105.650002",
    "92",
    "103.5",
    "105.050003",
    "110.019997",
    "111.540001",
    "112",
    "107.360001",
    "109.129997",
    "110.040001",
    "108.510002",
    "110.32",
    "109.769997",
    "109.900002",
    "111.760002",
    "114.860001",
    "114.419998",
    "115.440002",
    "113.720001",
    "111.870003",
    "113.660004",
    "112.519997",
    "113.300003",
    "112.370003",
    "114.019997",
    "112.440002",
    "107.860001",
    "108.730003",
    "107.309998",
    "107.550003",
    "109.07",
    "109.769997",
    "109.410004",
    "108.209999",
    "109.489998",
    "111.440002",
    "110.68",
    "109.559998",
    "110.489998",
    "110.529999",
    "110.110001",
    "110.82",
    "113.699997",
    "114.099998",
    "116.330002",
    "114.919998",
    "113.989998",
    "116.059998",
    "118.269997",
    "119.449997",
    "119.610001",
    "120.699997",
    "121.620003",
    "120.18",
    "120.620003",
    "120.050003",
    "116.059998",
    "115.209999",
    "115.650002",
    "112.269997",
    "111",
    "113.32",
    "115.5",
    "116.760002",
    "118.849998",
    "117.339996",
    "117.120003",
    "117.919998",
    "117.599998",
    "117.75",
    "116.860001",
    "116.080002",
    "114.220001",
    "115.110001",
    "117.809998",
    "116.860001",
    "115.080002",
    "115.510002",
    "112.849998",
    "109.790001",
    "110.349998",
    "108.800003",
    "108.980003",
    "105.809998",
    "105.57",
    "106.449997",
    "107.199997",
    "107.949997",
    "106.18",
    "106.860001",
    "107.18",
    "104.82",
    "102",
    "102.410004",
    "99.870003",
    "96.43",
    "96.760002",
    "97.339996",
    "98.839996",
    "97.300003",
    "95.739998",
    "95.360001",
    "95.5",
    "93.419998",
    "94.940002",
    "98.370003",
    "99.209999",
    "98.07",
    "93.339996",
    "92.389999",
    "94.349998",
    "95.400002",
    "94.279999",
    "94.080002",
    "95.190002",
    "93.690002",
    "93.040001",
    "93.93",
    "94.099998",
    "92.589996",
    "93.010002",
    "94.610001",
    "96.150002",
    "96.089996",
    "95.800003",
    "95.919998",
    "94.550003",
    "93.32",
    "95.25",
    "96.580002",
    "96.650002",
    "97.419998",
    "99.639999",
    "100.449997",
    "101.370003",
    "100.959999",
    "100.400002",
    "100.269997",
    "100.150002",
    "101.5",
    "101.779999",
    "103.849998",
    "104.589996",
    "104.959999",
    "105.190002",
    "105.139999",
    "105.209999",
    "105.900002",
    "104.889999",
    "105.059998",
    "104.879997",
    "108.599998",
    "108.879997",
    "108.199997",
    "110.269997",
    "109.419998",
    "109.199997",
    "108.120003",
    "108.169998",
    "108.830002",
    "108.660004",
    "110.800003",
    "111.330002",
    "109.730003",
    "106.940002",
    "106.230003",
    "106.059998",
    "105.519997",
    "104.620003",
    "104.510002",
    "103.910004",
    "95.68",
    "94.25",
    "92.510002",
    "92.400002",
    "93.68",
    "93.82",
    "92.68",
    "91.849998",
    "92.589996",
    "92.110001",
    "92.459999",
    "89.470001",
    "90",
    "91.650002",
    "93.010002",
    "93.889999",
    "93.57",
    "94.519997",
    "95.669998",
    "96.839996",
    "98.110001",
    "98.639999",
    "99.25",
    "98.82",
    "98.330002",
    "96.629997",
    "97.449997",
    "97.550003",
    "98.959999",
    "98.68",
    "98.459999",
    "98.480003",
    "97.099998",
    "96.75",
    "97.029999",
    "96.07",
    "95.300003",
    "95.029999",
    "94.68",
    "95.349998",
    "95.25",
    "92.650002",
    "91.5",
    "92.139999",
    "93.629997",
    "94.300003",
    "95.330002",
    "94.459999",
    "94.370003",
    "95.620003",
    "96.050003",
    "96.730003",
    "97.120003",
    "96.839996",
    "97.32",
    "98.5",
    "98.599998",
    "99.339996",
    "99.739998",
    "99.129997",
    "98.309998",
    "96.919998",
    "96.419998",
    "102.75",
    "102.82",
    "103.68",
    "104.410004",
    "104",
    "104.769997",
    "105.279999",
    "106.18",
    "107.160004",
    "108.010002",
    "107.760002",
    "107.849998",
    "107.779999",
    "108.080002",
    "109.209999",
    "108.339996",
    "109.019997",
    "108.360001",
    "107.849998",
    "108.529999",
    "107.68",
    "106.68",
    "106.309998",
    "106.290001",
    "105.5",
    "105.639999",
    "105.620003",
    "106.82",
    "107.510002",
    "107.07",
    "105.239998",
    "103.129997",
    "102.529999",
    "107.239998",
    "108.599998",
    "113.489998",
    "114.040001",
    "113.25",
    "112.510002",
    "112.440002",
    "114",
    "111.550003",
    "111.550003",
    "112.339996",
    "113.43",
    "111.800003",
    "111.800003",
    "112.279999",
    "112.629997",
    "112.690002",
    "113.129997",
    "113.510002",
    "114.720001",
    "116.199997",
    "116.75",
    "115.720001",
    "117.129997",
    "116.779999",
    "117.449997",
    "113.800003",
    "116.330002",
    "116.279999",
    "117",
    "117.309998",
    "113.309998",
    "114.099998",
    "113.449997",
    "113.199997",
    "110.529999",
    "111.230003",
    "109.550003",
    "108.110001",
    "109.459999",
    "109.699997",
    "108.050003",
    "105.830002",
    "106.550003",
    "104.080002",
    "106.160004",
    "106.599998",
    "108.830002",
    "109.660004",
    "110.010002",
    "111.400002",
    "110.330002",
    "110.949997",
    "111.389999",
    "110.07",
    "110.269997",
    "109.029999",
    "108.849998",
    "108.25",
    "109.190002",
    "109.160004",
    "110.599998",
    "112.309998",
    "112.489998",
    "113.75",
    "114.980003",
    "115.230003",
    "115.650002",
    "115.75",
    "116.68",
    "116.779999",
    "115.639999",
    "115.589996",
    "116.489998",
    "116.199997",
    "116.400002",
    "115.43",
    "114.760002",
    "115.75",
    "115.809998",
    "116.470001",
    "117.940002",
    "118.300003",
    "118.599998",
    "118.209999",
    "118.809998",
    "118.220001",
    "119.709999",
    "119.370003",
    "119.730003",
    "119.769997",
    "119.5",
    "120.279999",
    "121.599998",
    "121.599998",
    "120.660004",
    "120.620003",
    "127.010002",
    "127.779999",
    "128.160004",
    "128.899994",
    "130.449997",
    "131.220001",
    "131.119995",
    "132.050003",
    "132.75",
    "133.25",
    "134.619995",
    "134.839996"
  ],
  name: "Sales Volume"
};

const data = [trace1, trace2];

export default (
  <Linechart
    title="Time series with range slider"
    subtitle="Sales performance (YTD)"
    data={data}
    xAxisTitle="Date"
    yAxisTitle="Thousands of Dollars ($)"
    rangeSlider
  />
);