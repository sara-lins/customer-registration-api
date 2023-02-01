import prisma from "./_index";

const createUserService = async (data) => {
  const user = await prisma.user.create({
    data,
  });

  return user;
};

export default createUserService;
