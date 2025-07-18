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

////////////////////////////////////////////
// Upload Challenge #1
// Video: https://cdn.pixabay.com/video/2025/04/23/273883_large.mp4
// Upload the video with the following parameters:
//    public_id
//    asset_folder (helpful to put all practice uploads into a single folder)
//    resource_type
//    tags
////////////////////////////////////////////
cloudinary.uploader
  .upload("https://cdn.pixabay.com/video/2025/04/23/273883_large.mp4", {
    public_id: "flower-video",
    asset_folder: "video-practice",
    //folder: "video-practice",
    resource_type: "video",
    tags: ["flower", "video", "practice"],
  })
  .then((result) => console.log(result));

////////////////////////////////////////////
// Upload Challenge #2
// Video: https://res.cloudinary.com/cloudinary-marketing/video/upload/f_auto:video/Cloudinary-Video_2025-Update
// Chunk Upload - Upload the video using the chunk upload option
// Include the following parameters:
//    resource_type
//    async
//    chunk_size
//    asset_folder (helpful to put all practice uploads into a single folder)
//    auto_chaptering
//    auto_transcription
////////////////////////////////////////////
cloudinary.uploader
  .upload_large(
    "https://res.cloudinary.com/cloudinary-marketing/video/upload/f_auto:video/Cloudinary-Video_2025-Update",
    {
      asset_folder: "video-practice",
      //folder: "video-practice",
      resource_type: "video",
      async: true,
      chunk_size: 6000000,
      auto_chaptering: true,
      auto_transcription: true,
    }
  )
  .then((result) => console.log(result));

////////////////////////////////////////////
// Upload Challenge #3
// Video: https://res.cloudinary.com/cloudinary-marketing/video/upload/f_auto:video/Cloudinary-Video_2025-Update
// Eager transformations - Upload the video
// Include the following parameters:
//    public_id
//    resource_type
//    asset_folder (helpful to put all practice uploads into a single folder)
//    eager
//    eager_async
// Include the following transformations:
//    crop pad w/ a blurred background
//    progressbar
////////////////////////////////////////////
cloudinary.uploader
  .upload(
    "https://res.cloudinary.com/cloudinary-marketing/video/upload/f_auto:video/Cloudinary-Video_2025-Update",
    {
      public_id: "video-transform-test",
      asset_folder: "video-practice",
      //folder: "video-practice",
      resource_type: "video",
      eager_async: true,
      eager: [
        {
          background: "blurred:400:15",
          width: 500,
          height: 200,
          crop: "pad",
          effect: "progressbar:bar:blue:8",
        },
      ],
    }
  )
  .then((result) => console.log(result));
