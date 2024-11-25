const express = require('express');
const router = express.Router();
const dataController = require('../controllers/datacontroller');
const fs = require('fs');
const path = require('path');

const tokenFilePath = path.join(__dirname, '../utils/data/tokens.json');

// Rutas protegidas para estadísticas
router.get('/teams', dataController.getTeams);
router.get('/matchs', dataController.getMatches);
router.get('/competition', dataController.getCompetition);
router.get('/upcomingMatchs', dataController.getUpcomingMatches);
router.get('/leaderboards', dataController.getLeaderboard);
router.get('/players', dataController.getPlayers);

module.exports = router;
