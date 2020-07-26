/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core"
import matchSorter from "match-sorter"
import Router from "next/router"
import { useState } from "react"
import { pageInfo } from "src/components/helpers/pageInfo"
import { SearchBox } from "src/components/molecules/SearchBox"

type OwnProps = {
  children?: never
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

export const SideMenu: React.FC<OwnProps> = ({ isOpen, setIsOpen }) => {
  const [searchFuncName, setSearchFuncName] = useState("")

  const toggleOpen = (event: React.KeyboardEvent | React.MouseEvent): void => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      // メニュー選択に便利なキー入力で close しないようにするため
      return
    }

    setIsOpen(!isOpen)
  }

  return (
    <Drawer onClose={() => setIsOpen(false)} open={isOpen}>
      <SearchBox
        // eslint-disable-next-line jsx-a11y/no-autofocus
        autoFocus
        onChange={setSearchFuncName}
        value={searchFuncName}
      />

      <div
        css={menuBody}
        onClick={toggleOpen}
        onKeyDown={toggleOpen}
        role="presentation"
      >
        <List>
          {matchSorter(pageInfo, searchFuncName, {
            keys: ["linkTo", "title"],
          }).map(({ icon, linkTo, title }) => (
            <ListItem button key={title} onClick={() => Router.push(linkTo)}>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={title} />
            </ListItem>
          ))}
        </List>
      </div>
    </Drawer>
  )
}

const menuBody = css`
  width: 250px;
`
