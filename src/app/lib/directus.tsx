import { createDirectus, rest, graphql, staticToken } from "@directus/sdk";
import { NextApiRequest, NextApiResponse } from 'next';

interface Bales {
  id: number;
  status: string;
  seedvariant: string;
  netweight: number;
  time: string;
  farmerid: number;
  grade: string;
  balestatus: string;
  date_created: string;
}

interface Farmers {
  id: number;
  name: string;
  surname: string;
  location: string;
}

interface BaleStatus {
  id: number;
  breadcrumb: string;
  title: string;
  filter: string;
  slug: string;
}

interface Schema {
  bales: Bales[];
  farmers: Farmers[];
  balestatus: BaleStatus[];
}

const api = process.env.NEXT_PUBLIC_API_URL as string;
const token = process.env.NEXT_PUBLIC_ACCESS_TOKEN as string;
console.log("Your API Is: ", api)
// Client with GraphQL support
const directus = createDirectus<Schema>(api)
.with(staticToken(token))
.with(
  rest()
);

export default directus;
