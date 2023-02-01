import prisma from "./_index";

const retrieveUserByIdService = async (id: string) => {
  const userById = await prisma.user.findUnique({
    where: {
      id,
    },
  });

  return userById;
};

export default retrieveUserByIdService;
