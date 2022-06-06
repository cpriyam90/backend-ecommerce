// ## Credits/Citations
// * Tutor Abdullah explained how to use sequelize and establish my routes
// * Lesson 13 
// * Insomnia Documentation
// * Starter code provided with challenge assignment


const router = require('express').Router();
const categoryRoutes = require('./category-routes');
const productRoutes = require('./product-routes');
const tagRoutes = require('./tag-routes');

router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);
router.use('/tags', tagRoutes);

module.exports = router;