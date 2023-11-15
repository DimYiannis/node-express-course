const Review = require('../models/Review')
const {StatusCodes} = require('http-status-codes')
const CustomError = require('../errors')

const createReview = async (req,res) => {
    res.send('createReview')
}
const getAllReviews = async (req,res) => {
    res.send('getall reviews')
}
const getSingleReview = async (req,res) => {
    res.send('get single review')
}
const updateReview = async (req,res) => {
    res.send('update review')
}
const deleteReview = async (req,res) => {
    res.send('delete review')
}

module.exports = {
    createReview, getAllReviews, getSingleReview, updateReview, deleteReview
}