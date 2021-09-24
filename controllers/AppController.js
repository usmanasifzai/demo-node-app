class AppController {
  async app(req, res) {
    res.status(200).json({ message: 'Hello World!' });
  }

  async data(req, res) {
    res.status(200).json({ response: 'Hello World!' });
  }
}

export default AppController;
