// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next"

// eslint-disable-next-line import/no-default-export
export default (req: NextApiRequest, res: NextApiResponse): void => {
  res.statusCode = 200
  res.json({ name: "John Doe" })
}
