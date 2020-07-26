import { difference } from "lodash-es"
import { StaticRoutePath } from "src/constants/path"

import { pageInfo } from "."

describe("pageInfo", () => {
  it("should define paths for SideMenu", () => {
    // ## Arrange ##
    const shouldDefinePaths = Object.values(StaticRoutePath).filter(
      // SideMenu に表示不要な path は除外する
      (p) => p !== StaticRoutePath.root
    )
    const definedPaths = pageInfo.map((p) => p.linkTo)

    // ## Act ##
    const result = difference(shouldDefinePaths, definedPaths)

    // ## Assert ##
    expect(result).toStrictEqual([])
  })
})
