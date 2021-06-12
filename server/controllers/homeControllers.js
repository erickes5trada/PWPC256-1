const index = (req, res) => {
  res.render('index', {
    title: 'ProjNotes',
    // lista: ['Facebook', 'Twitter', 'Instagram'],
  });
};

export default {
  index,
};
