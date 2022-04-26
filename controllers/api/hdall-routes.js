const router = require('express').Router();
const { Hdall} = require('../../models');

//get all historical data
router.get('/', (req, res) => {
  Hdall.findAll()
    .then(dbQuestionData => res.json(dbQuestionData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});
// //get question by id
// router.get('/:id', (req, res) => {
//   Question.findOne({
//     where: {
//       id: req.params.id
//     },
//     iclude: [
//       {
//         model: User,
//         attributes: ['id', 'username', 'email']
//       }
//     ]
//   })
//     .then(dbQuestionData => {
//       if (!dbQuestionData) {
//         res.status(404).json({ message: 'No question found with this id' });
//         return;
//       }
//       res.json(dbQuestionData);
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });
// create new question
router.post('/', (req, res) => {

  Hdall.create({
    city: req.body.city,
    county: req.body.county,
    y2017: req.body.y2017,
    y2018: req.body.y2018,
    y2019: req.body.y2019,
    y2020: req.body.y2020,
    y2021: req.body.y2021,
    
  })

    .then(dbQuestionData => res.json(dbQuestionData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

//update question
// router.put('/:id',(req, res) => {
//   Question.update(
//     {
//       question_text: req.body.question_text
//     },
//     {
//       where: {
//         id: req.params.id
//       }
//     }
//   )
//   .then(dbQuestionData => {
//     if (!dbQuestionData) {
//       res.status(404).json({ message: 'No question found with this id' });
//       return;
//     }
//     res.json(dbQuestionData);
//   })
//   .catch(err => {
//     console.log(err);
//     res.status(500).json(err);
//   });
// });
// delete question
router.delete('/:id', (req, res) => {
  console.log('id', req.params.id);
  Question.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbQuestionData => {
      if (!dbQuestionData) {
        res.status(404).json({ message: 'No question found with this id' });
        return;
      }
      res.json(dbQuestionData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;