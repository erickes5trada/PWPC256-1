const index = (req, res) => {
  res.render('home/index', {
    title: 'ProjNotes',
    // lista: ['Facebook', 'Twitter', 'Instagram'],
  });
};

const greeting = (req, res) => {
  res.status(200).json({ message: 'Mensaje JSON para la ruta /greeting' });
};

const about = (req, res) => {
  res.render('home/about');
};

export default {
  index,
  greeting,
  about,
};
