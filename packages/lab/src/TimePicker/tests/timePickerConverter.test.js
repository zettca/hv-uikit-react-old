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

import { TimeFormat, PeriodPickerOptions } from "../enums";
import * as converters from "../timePickerConverter";

describe("timePickerConverter", () => {
  it("getHoursForTimeFormat - should return the hours if in 24h format", () => {
    expect(converters.getHoursForTimeFormat(20, TimeFormat.H24)).toBe(20);
  });
  it("getHoursForTimeFormat - should return 12 if in 12h format and hours are set to 0", () => {
    expect(converters.getHoursForTimeFormat(0, TimeFormat.H12)).toBe(12);
  });
  it("getHoursForTimeFormat - should return the hours if in valid 12h range", () => {
    expect(converters.getHoursForTimeFormat(10, TimeFormat.H12)).toBe(10);
  });
  it("getHoursForTimeFormat - should return the hours - 12 if in valid 24h range only", () => {
    expect(converters.getHoursForTimeFormat(20, TimeFormat.H12)).toBe(8);
  });
  it("getTimeWithFormat24 - should return the time if in 24h format", () => {
    const time = { hours: 20, minutes: 30, seconds: 40 };
    expect(converters.getTimeWithFormat24(time, TimeFormat.H24)).toEqual(time);
  });
  it("getTimeWithFormat24 - should return the time if in 12h format and AM period", () => {
    const time = {
      hours: 8,
      minutes: 30,
      seconds: 40,
      period: PeriodPickerOptions.AM
    };
    expect(converters.getTimeWithFormat24(time, TimeFormat.H12)).toEqual(time);
  });
  it("getTimeWithFormat24 - should return the time with more 12 hours if in 12h format and PM period", () => {
    const time = {
      hours: 8,
      minutes: 30,
      seconds: 40,
      period: PeriodPickerOptions.PM
    };
    expect(converters.getTimeWithFormat24(time, TimeFormat.H12)).toEqual({
      ...time,
      hours: 20
    });
  });
  it("getTimeWithFormat24 - should return the time with more hours set to 0 if in 12h format with hours set to 12 and PM period", () => {
    const time = {
      hours: 12,
      minutes: 30,
      seconds: 40,
      period: PeriodPickerOptions.AM
    };
    expect(converters.getTimeWithFormat24(time, TimeFormat.H12)).toEqual({
      ...time,
      hours: 0
    });
  });
});