import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import Layout from "../components/layout/Layout";
import Seo from "../components/Seo";
import { authOptions } from "./api/auth/[...nextauth]";
import { unstable_getServerSession as getServerSession } from "next-auth";
import React from "react";

const Home: NextPage = () => {
  return (
    <Layout>
      <Seo title="Home" />

    </Layout>
  );
};


export default Home;

type HomeProps = InferGetServerSidePropsType<typeof getServerSideProps>;

export const getServerSideProps = async ({
  req,
  res,
}: GetServerSidePropsContext) => {
  const session = await getServerSession(req, res, authOptions);

  return {
    props: {
      session,
    },
  };
};
