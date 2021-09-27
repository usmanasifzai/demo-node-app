import reverseString from '../utils/reverseString.js';

class AppController {
  app(req, res) {
    res.sendFile('/app.html', { root: './public' });
  }

  data(req, res) {
    res.status(200).json({ data: reverseString(req.body.dataField) });
  }
}

export default AppController;
