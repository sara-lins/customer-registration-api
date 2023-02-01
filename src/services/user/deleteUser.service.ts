import prisma from "./_index";

const deleteUserService = async (id: string) => {
  const userDeleted = await prisma.user.delete({
    where: {
      id,
    },
  });

  return userDeleted;
};

export default deleteUserService;
