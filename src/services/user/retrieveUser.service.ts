import prisma from "./_index";

const retrieveUserService = async () => {
  const users = await prisma.user.findMany();

  return users;
};

export default retrieveUserService;
