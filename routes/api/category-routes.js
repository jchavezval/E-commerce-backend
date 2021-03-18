const router = require("express").Router();
const { Category, Product, Tag, ProductTag } = require("../../models");

// The `/api/categories` endpoint

router.get("/", (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({
    include: [Product],
    // include: {
    //   model: Product,
    //   //attributes: ['id','name', 'price', 'stock', 'category_id']
    // },
  })
  .then(dbProductData => {
    res.json(dbProductData);
    });
});

router.get("/:id", (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne({
    where: {
      id: req.params.id,
    },
    include: {
      model: Product,
      attributes: ["id", "name", "price", "stock", "category_id"],
    },
  }).then((data) => {
    res.json(data);
  });
});

router.post("/", (req, res) => {
  // create a new category
  Category.create({
    name: req.body.name,
  })
    .then((dbCategoryData) => res.json(dbCategoryData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put("/:id", (req, res) => {
  // update a category by its `id` value
  Category.update(
    req.body,
    {
      name: req.body.name,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  ).then((dbCategoryData) => {
    res.json(dbCategoryData);
  });
});

router.delete("/:id", (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id,
    },
  }).then((dbCategoryData) => {
    res.json(dbCategoryData);
  });
});

module.exports = router;
