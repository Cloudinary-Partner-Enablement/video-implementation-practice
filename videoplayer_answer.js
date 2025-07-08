////////////////////////////////////////////
// Documentation:
// Video player guide: https://cloudinary.com/documentation/cloudinary_video_player
////////////////////////////////////////////

////////////////////////////////////////////
// Video Player Challenge #1
// Create a video player instance
//    Set the player colors
//    Display player controls
//    Display big play button
//    Display chapters button
//    Set fluid
//    Add playback rates
//    Show jump controls
////////////////////////////////////////////
const demoplayer = cloudinary.videoPlayer("video-player", {
  cloudName: "cloudname",
  controls: true,
  bigPlayButton: true,
  chaptersButton: true,
  fluid: true,
  playbackRates: [0.75, 1.0, 1.25, 1.5],
  showJumpControls: true,
  colors: {
    base: "FF715B",
    accent: "4C5454",
    text: "1EA896",
  },
});

////////////////////////////////////////////
// Video Player Challenge #2
// Use video player instance methods
//    Set the video source
//    Set chapters (use the ones created in the upload challenge)
//    Set the info
//    Set text tracks (use the ones created in the upload challenge)
//        Optional - set the font for the captions
////////////////////////////////////////////
demoplayer.source("publicID", {
  chapters: {
    url: "chaptersURL",
  },
  info: {
    title: "Practice",
    subtitle: "Practicing Video Players",
    description: "A video player to practice video players.",
  },
  textTracks: {
    options: {
      fontFace: "Bitcount Grid Double",
    },
    captions: {
      label: "English",
      default: true,
      url: "transcriptURL",
    },
  },
});
