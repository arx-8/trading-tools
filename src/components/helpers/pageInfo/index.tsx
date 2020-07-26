/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import { InvestmentIcon } from "src/components/atoms/InvestmentIcon"
import { RoutePath, StaticRoutePath } from "src/constants/path"

const icon = css`
  height: 32px;
`

type PageInfo = {
  icon: JSX.Element
  linkTo: RoutePath
  title: string
}

export const pageInfo: PageInfo[] = [
  {
    icon: <InvestmentIcon exCss={icon} />,
    linkTo: StaticRoutePath.leverageCalculator,
    title: "Leverage Calculator",
  },
]
