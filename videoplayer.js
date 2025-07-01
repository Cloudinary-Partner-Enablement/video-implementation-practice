// Require Dotenv
require("dotenv").config();
// Require the cloudinary library
const cloudinary = require("cloudinary").v2;

// Return "https" URLs by setting secure: true
cloudinary.config({
  secure: true,
});

////////////////////////////////////////////
// Documentation:
// Basic upload: https://cloudinary.com/documentation/image_upload_api_reference#upload
// Chunk upload: https://cloudinary.com/documentation/upload_images#chunked_asset_upload
// Eager transformations:https://cloudinary.com/documentation/eager_and_incoming_transformations#eager_transformations
// Video transformations: https://cloudinary.com/documentation/video_manipulation_and_delivery
////////////////////////////////////////////
