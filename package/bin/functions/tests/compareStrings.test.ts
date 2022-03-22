/*
 * Copyright (c) 2022 Alexandr <re-knownout> knownout@hotmail.com
 * Licensed under the GNU Affero General Public License v3.0 License (AGPL-3.0)
 * https://github.com/re-knownout/lib
 */

import compareStrings from "../compareStrings";

it("compareStrings function test", () => {
    expect(compareStrings("Hello", "hello")).toBeTruthy();
    expect(compareStrings("Hello, world", "hello world", true)).toBeTruthy();
});
