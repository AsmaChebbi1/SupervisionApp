 var express = require('express');
const { Register, Login, Agent,Superviseur} = require('../controllers/users.controllers');
var router = express.Router();
const { inRole, Roles } = require('../security/Rolemiddleware');
const passport = require('passport');
const { Remplir, getNodes, getNodesMediocre, getNodesCoupure } = require('../controllers/nodes.controllers');
/* users root */
router.post('/register', Register);
router.post('/remplir', Remplir);
/*neouds*/ 
router.get('/nodes', getNodes);
router.get('/nodesmediocre', getNodesMediocre);
router.get('/nodescoupure', getNodesCoupure);

router.post('/login', Login);
/*test route*/
router.get('/superviseur', passport.authenticate('jwt', { session: false }),
    inRole(Roles.superviseur), Superviseur);
router.get('/agent', passport.authenticate('jwt', { session: false }),
    inRole(Roles.agent), Agent);

module.exports = router;