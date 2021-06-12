const index = (req, res) => {
  res.render('index', {
    title: 'ProjNotes',
    // lista: ['Facebook', 'Twitter', 'Instagram'],
  });
};

const greeting = (req, res) => {
  res.status(200).json({ message: 'Mensaje JSON para la ruta /greeting' });
};

export default {
  index,
  greeting,
};
