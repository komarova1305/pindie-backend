const gamesRouter = require('express').Router();

const {findAllGames, findGameById, checkEmptyFields, checkIsGameExists, createGame, updateGame, deleteGame, checkIfUsersAreSafe, checkIfCategoriesAvaliable, checkIsVoteRequest} = require('../middlewares/games');
const {sendAllGames, sendGameById, sendGameCreated, sendGameUpdated, sendGameDeleted} = require('../controllers/games');
const { checkAuth } = require("../middlewares/auth.js");

gamesRouter.get('/games', findAllGames, sendAllGames);
gamesRouter.post(
    "/games",
    findAllGames,
    checkIsGameExists,
    checkIfCategoriesAvaliable,
    checkEmptyFields,
    checkAuth,
    createGame,
    sendGameCreated
  );
  
gamesRouter.put(
    "/games/:id",
    findGameById,
    checkIsVoteRequest,
    checkIfUsersAreSafe,
    checkIfCategoriesAvaliable,
    checkEmptyFields,
    checkAuth,
    updateGame,
    sendGameUpdated
  );
gamesRouter.get("/games/:id", findGameById, sendGameById);
gamesRouter.delete("/games/:id", checkAuth, deleteGame, sendGameDeleted);

module.exports = gamesRouter;