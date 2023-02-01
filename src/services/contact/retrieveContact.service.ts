import prisma from "./_index";

const retrieveContactService = async () => {
  const contacts = await prisma.contact.findMany();

  return contacts;
};

export default retrieveContactService;
