const index = (req, res) => {
  res.render('index', {
    title: 'Express',
    // lista: ['Facebook', 'Twitter', 'Instagram'],
  });
};

export default {
  index,
};
