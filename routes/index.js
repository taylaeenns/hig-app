import express from 'express';

const router = express.Router();

const agents = {
  "Hilo": [
    { name: "Agent 1", address: "123 Main St", city: "Hilo", state: "HI", zip: "96720", phone: "123-456-7890" },
    { name: "Agent 2", address: "456 Another St", city: "Hilo", state: "HI", zip: "96720", phone: "987-654-3210" },
  ],
  "Kahului": [
    { name: "Agent 1", address: "789 Some Rd", city: "Kahului", state: "HI", zip: "96732", phone: "555-555-5555" },
  ],
};

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/about', (req, res) => {
  res.render('about');
});

router.get('/products', (req, res) => {
  res.render('products');
});

router.get('/home-insurance', (req, res) => {
  res.render('home-insurance');
});

router.get('/business-insurance', (req, res) => {
  res.render('business-insurance');
});

router.get('/privacy-policy', (req, res) => {
  res.render('privacy-policy');
});


router.get('/agent-portal', (req, res) => {
  res.render('agent-portal');
});

router.get('/find-agent', (req, res) => {
  res.render('find-agent');
});

router.get('/agents-hilo', (req, res) => {
  res.render('agents-hilo');
});

router.get('/agents-honolulu', (req, res) => {
  res.render('agents-honolulu');
});

router.get('/agents-kahului', (req, res) => {
  res.render('agents-kahului');
});

router.get('/agents-kailua-kona', (req, res) => {
  res.render('agents-kahului');
});

router.get('/agents-kapolei', (req, res) => {
  res.render('agents-kapolei');
});

router.get('/agents-kaunakakai', (req, res) => {
  res.render('agents-kaunakakai');
});

router.get('/agents-kihei', (req, res) => {
  res.render('agents-kihei');
});

router.get('/agents-lahaina', (req, res) => {
  res.render('agents-lahaina');
});

router.get('/agents-lihue', (req, res) => {
  res.render('agents-lihue');
});

router.get('/agents-wailuku', (req, res) => {
  res.render('agents-wailuku');
});

router.get('/agents-waipahu', (req, res) => {
  res.render('agents-waipahu');
});

router.get('/frequently-asked-questions', (req, res) => {
  res.render('frequently-asked-questions');
});

router.get('/contact-us', (req, res) => {
  res.render('contact-us');
});
export default router;



