const router = require('express').Router();
const { Category, Product } = require('../../models');


// The `/api/categories` endpoint

router.get('/', async(req, res) => {
  // find all categories
  
// be sure to include its associated Products
  try {
   const categories = await Category.findAll ({
      include: [{
        model: Product
      }]
    })
    res.status(200).json(categories)
  } catch (error) {
    res.status(400).json(error)
  } 
});

router.get('/:id', async(req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const category = await Category.findByPk(req.params.id)
    res.status(200).json(category)
  } catch (error) {
    res.status(400).json(error)
  }
});

router.post('/', (req, res) => {
  // create a new category
  Category.create(req.body)
  .then(newcat =>{
    res.json("category has been added")
  })
});

router.put('/:id', async(req, res) => {
  // update a category by its `id` value
  try {
    const updatedCategory = await Category.update(req.body,{
      where: {
        id: req.params.id 
      }
    })
    res.json("category has been updated")
  } catch (error) {
    
  }
});

router.delete('/:id', async(req, res) => {
  // delete a category by its `id` value
  try {
    const deletedCategory = await Category.destroy({
      where: {
        id: req.params.id 
      }
    }) 
    res.json("category has been deleted")
  } catch (error) {
    
  }
});

module.exports = router;