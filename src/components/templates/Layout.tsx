/** @jsx jsx */
import { SerializedStyles, css, jsx } from "@emotion/core"
import { Container } from "@material-ui/core"
import { Fragment } from "react"
import { AppBar } from "src/components/organisms/AppBar"

type OwnProps = {
  children: JSX.Element
  exCss?: SerializedStyles
}

export const Layout: React.FC<OwnProps> = ({ children, exCss }) => {
  return (
    <Fragment>
      <AppBar />
      <Container css={[body, exCss]} maxWidth="xl">
        {children}
      </Container>
    </Fragment>
  )
}

const body = css`
  height: 100%;

  /*
    vh 指定だと、画面高が小さい場合に body が AppBar にめり込む
    MuiAppBar を static (固定位置) にすると、Slide の  in scroll appear が効かない
    そのため、MuiAppBar absolute + 固定高にしている
  */
  padding-top: ${48 + 16}px;
  padding-bottom: 32px;
`
