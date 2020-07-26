/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import { GitHub } from "@material-ui/icons"

export type OwnProps = {
  children?: never
  repositoryUrl: string
  tabIndex?: number
}

export const GitHubLink: React.FC<OwnProps> = ({ repositoryUrl, tabIndex }) => {
  return (
    <a
      aria-label="View source on GitHub"
      css={root}
      href={repositoryUrl}
      tabIndex={tabIndex}
    >
      <GitHub />
    </a>
  )
}

const root = css`
  color: white;
`
