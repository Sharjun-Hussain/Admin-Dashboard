const { FetchAllSandha, AddSandha, DeleteSandha, UpdateSandha, FetchSpecicMonthSandhaDetails } = require('../Controllers/Sandha');


const express = require('express');
const app =express.Router();

app.route("/All").get(FetchAllSandha);
app.route("/Month/:Month").get(FetchSpecicMonthSandhaDetails);
app.route("/Add").post(AddSandha);
app.route("/Delete/:id").post(DeleteSandha);
app.route("/Update/:id").post(UpdateSandha);

module.exports = app