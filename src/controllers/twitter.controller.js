// params

export const postTwitter1 = (req, res) => {
  const nombre = req.query.name;
  const mode = req.query.mode;
  const description = req.query.description;
  // console.log("llego");
  // console.log(nombre);
  res.send({
    name: nombre,
    mode: mode,
    description: description,
  });

  // return res.status(200).json({ name });
};

// export const postTwitter1 = (req, res) => {
//   const inf = { name: "sandoval", mode: "public", description: "prueba" };
//   return res.status(200).json(inf);
// };

export const postTwitter2 = (req, res) => {
  return res.status(200).json({
    list_id: 25081999,
    slug: {
      //campos inventados del slug
      nombre: "nose",
      calis: "que onda",
    },
    user_id: 4548877645,
    screen_name: "sandovaljr",
  });
};

export const postTwitter3 = (req, res) => {
  return res.status(200).json({
    list_id: 25081999,
    slug: {
      //campos inventados del slug
      nombre: "prueba memeber ",
      calis: "que onda2",
    },
  });
};
