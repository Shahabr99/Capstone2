const express = require("express");
const router = new express.Router();
const axios = require("axios");
const key = require("../config");
const {ensureLoggedIn} = require("../middlewares/auth")



router.get("/",ensureLoggedIn, async function(req, res, next) {
  try{
    const albumRes = await axios.get(`https://api.jamendo.com/v3.0/albums/?client_id=${key}&format=jsonpretty&limit=10`);
    const tracksRes = await axios.get(`https://api.jamendo.com/v3.0/tracks/?client_id=${key}&format=jsonpretty&limit=20`);
    const artistRes = await axios.get(`https://api.jamendo.com/v3.0/artists/?client_id=${key}&format=jsonpretty&limit=10`);
    console.log(albumRes)
  }catch(err){
    next(err)
  }
})