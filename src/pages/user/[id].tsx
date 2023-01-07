import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import { unstable_getServerSession as getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import React from "react";

import Layout from "../../components/layout/Layout";
import Seo from "../../components/Seo";

import { authOptions } from "../../pages/api/auth/[...nextauth]";
import { prisma } from "../../utils/prisma";
import { formatAccountName } from "../../utils/text";

const UserProfile: NextPage<UserProfileProps> = ({ user }) => {
  const session = useSession();

    return (
      <>
        <Seo
          // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
          title={`${user?.name} (@${formatAccountName(user?.name!)}) | Just B3`}
          description={`${user?.name}`}
          // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
          image={user?.image!}
        />

        <Layout >

        </Layout>
      </>
    );
  };

  export default UserProfile;

  type UserProfileProps = InferGetServerSidePropsType<typeof getServerSideProps>;

  export const getServerSideProps = async ({
    params,
    req,
    res,
  }: GetServerSidePropsContext) => {
    try {
      const id = params?.id as string;

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const session = (await getServerSession(req, res, authOptions)) as any;

      const [user] = await Promise.all([
        prisma.user.findFirstOrThrow({
          where: { id },
          select: {
            id: true,
            name: true,
            image: true,
         
          },
        }),
        session?.user?.id
      ]);

      return {
        props: {
          session,
          user: {
            ...user,
       
          },
        },
      };
    } catch (error) {
      return { props: {}, notFound: true };
    }
  }