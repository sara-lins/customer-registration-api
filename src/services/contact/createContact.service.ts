import prisma from "./_index";

const createContactService = async (data) => {
  const contact = await prisma.contact.create({
    data,
  });

  return contact;
};

export default createContactService;
