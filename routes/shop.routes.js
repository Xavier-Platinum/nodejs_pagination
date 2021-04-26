// setting up dependencies
const router = require("express").Router();

// importing MVC files (Models-Views-Controllers design pattern)
const { Product } = require("../models/products");

// importing other JS files 
const escapeRegex = require("../helpers/regex-escape");

// GET - Shop Index Page | - Displaying shop index page - \\
router.get('/shop', async (req, res) => {
    try {
      // Rendering EJS Shop Index File
        res.render('shop-index.ejs');
    } catch (err) {
        throw new Error(err);
    } 
});

/**
 * @param {GET}
//  * @description - GET - Shop Product Page | - Displaying demanded product page with page numbers
 */
router.get("/shop/:page", async(req, res) => {
    // declaring vars
    const responsePerPage = 9; // response per page
    const page = req.params.page || 1; // page

    try {
        if(req.query.search) {
            // declaring query based / search var
            const searchQuery = req.query.search,
            regex = new ReqExp(escapeRegex(req.query.search), "gi");

            // finding demanded products - skipping page values, limit results per page
            const foundProducts = await Product.find({name: regex})
                .skip((responsePerPage * page) - responsePerPage)
                .limit(responsePerPage);
            
            // count how many pages where found
            const numOfProducts = await Product.count({name: regex});
            res.render("shop-products", {
                products: foundProducts,
                currentPage: page,
                pages: Math.ceil(numOfProducts / responsePerPage),
                searchVal: searchQuery,
                numberOfResults: numOfProducts
            });
        } else {

        }
    } catch(err) {
        throw new Error(err);
    }
})

module.exports = router;