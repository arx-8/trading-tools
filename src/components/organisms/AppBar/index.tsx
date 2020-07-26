/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import {
  IconButton,
  AppBar as MuiAppBar,
  Slide,
  Toolbar,
  Typography,
  useScrollTrigger,
} from "@material-ui/core"
import { Menu as MenuIcon } from "@material-ui/icons"
import Head from "next/head"
import { Fragment, useState } from "react"
import { GitHubLink } from "src/components/atoms/GitHubLink"
import { pageInfo } from "src/components/helpers/pageInfo"
import { SideMenu } from "src/components/organisms/SideMenu"
import { pl2 } from "src/components/styles/utils"

type OwnProps = {
  children?: never
}

export const AppBar: React.FC<OwnProps> = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const isScrolled = useScrollTrigger()

  // TODO SSR できなくなってダメな気がする
  const currentPage = process.browser
    ? pageInfo.find((p) => p.linkTo === window.location.pathname)
    : undefined

  return (
    <Fragment>
      <Head>
        <title>{currentPage?.title}</title>
      </Head>

      <Slide appear direction="down" in={!isScrolled}>
        <MuiAppBar>
          <Toolbar variant="dense">
            <IconButton
              aria-label="menu"
              color="inherit"
              edge="start"
              onClick={() => setIsOpenMenu((prev) => !prev)}
            >
              <MenuIcon />
            </IconButton>
            <Typography color="inherit" css={pl2} variant="h6">
              {currentPage?.title}
            </Typography>

            <div css={space}></div>
            <GitHubLink
              repositoryUrl="https://github.com/arx-8/trading-tools"
              tabIndex={-1}
            />
          </Toolbar>
        </MuiAppBar>
      </Slide>

      <SideMenu isOpen={isOpenMenu} setIsOpen={setIsOpenMenu} />
    </Fragment>
  )
}

const space = css`
  margin-left: auto;
`
