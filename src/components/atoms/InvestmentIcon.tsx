/** @jsx jsx */
import { SerializedStyles, css, jsx } from "@emotion/core"
import { CastAny } from "src/types/utils"

import { ReactComponent as Svg } from "../../assets/investment.svg"

type OwnProps = {
  children?: never
  exCss?: SerializedStyles
} & React.SVGProps<CastAny>

export const InvestmentIcon: React.FC<OwnProps> = ({ exCss, ...rest }) => {
  return <Svg {...rest} css={[root, exCss]} />
}

const root = css`
  g {
    /* TODO 親 css から color で上書き可能にするため */
    /* fill: currentColor; */
  }
`
