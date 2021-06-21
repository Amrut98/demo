const express = require('express');
const { Router } = require('express');
const Controller = require('../controllers/controller');



const router = Router();

/**
 * @swagger
 * /login:
 *   get:
 *     description: User required
 *     responses:
 *       200:
 *         description: Returns the requested admin
 */
// var fs = require('fs');
// if (req.url === "/create") {
//     fs.readFile("../views/login.ejs", function(error, pgResp) {
//         if (error) {
//             resp.writeHead(404);
//             resp.write('Contents you are looking are Not Found');
//         } else {
//             resp.writeHead(200, { 'Content-Type': 'text/html' });
//             resp.write(pgResp);
//         }

//         resp.end();
//     });
// } else {
//     resp.writeHead(200, { 'Content-Type': 'text/html' });
//     resp.write('<h1>Product Manaager</h1><br /><br />To create product please enter: ' + req.url);
//     resp.end();
// }
router.get('/hello', (req, res) => {
    res.send('Hello');
})
router.get('/signup', Controller.signup_get);
router.post('/signup', Controller.signup_post);
router.get('/login', Controller.login_get);
router.post('/login', Controller.login_post);
router.get('/logout', Controller.logout_get);

module.exports = router;