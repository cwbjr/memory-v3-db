const express = require('express');
const router = express.Router();
const queries = require('../queries');

router.get('/', (req, res, next) => {
  queries.list()
    .then(games => {
      res.json({ games });
    })
    .catch(next);
});

router.get('/:id', (req, res, next) => {
  queries.read(req.params.id)
    .then(game => {
      game ? res.json({ game }) : res.status(404).json({ message: 'Not found' });
    })
    .catch(next);
});

router.post('/', (req, res, next) => {
  queries.create(req.body)
    .then(game => {
      res.status(201).json({ game });
    })
    .catch(next);
});

router.delete('/:id', (req, res, next) => {
  queries.delete(req.params.id)
    .then(() => {
      res.status(204).json({ deleted: true });
    })
    .catch(next);
});

router.put('/:id', (req, res, next) => {
  queries.update(req.params.id, req.body)
    .then(game => {
      rew.json({ game });
    })
    .catch(next);
});

module.exports = router;
