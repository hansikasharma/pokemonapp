const express = require('express');
const TeamController = require('./../controllers/TeamController');
const router = express.Router();
// router.param('id',tourcontroller.checkID);



router.route('/:username').get(TeamController.getAllTeams);
router.route('/delete-member/:id/:memid').get(TeamController.deleteMember);
router.route('/newteam').post(TeamController.createTeam);
router.route('/addtoteam/:id').post(TeamController.addToTeam);
router.route('/update-team/:id').post(TeamController.updateTeam);
router.route('/delete-team/:id').get(TeamController.deleteTeam);
module.exports = router;