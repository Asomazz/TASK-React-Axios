import instance from ".";

const getAllPets = async () => {
  const res = await instance.get("/pets");
  return res.data;
};

const getOnePet = async (id) => {
  const res = await instance.get(`/pets/${id}`);
  return res.data;
};

const createPet = async (name, type, image, adopted) => {
  const res = await instance.post("/pets/", {
    name: name,
    type: type,
    image: image,
    adopted: adopted,
  });
  return res.data;
};

const deletePet = async (id) => {
  const res = await instance.delete(`/pets/${id}`);
  return res.data;
};

export { getAllPets, getOnePet, createPet, deletePet };
