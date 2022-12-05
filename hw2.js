/*jshint esversion: 6 */
/* global console */
/*jshint esversion:8*/

(function () {
    "use strict";
    // async function fetchVideos() {
    //     try {
    //         const response = await fetch('video.json');
    //         if (!response.ok) {
    //             throw new Error(`${response.status} ${response.statusText}`);
    //         }
    //         const videos = await response.json();
    //         return videos;
    //     } catch (e) {
    //         console.error(e);
    //     }
    // }

    // async function displayVideoList() {
    //     const videos = await fetchVideos();
    //     const videoList = $("#sidebar ul");
    //     const videoPlayer = $('video');
    //     videos.forEach(videos => {
    //         const theLi = $(`<li>
    //        <span>${videos.tittle}</span>
         
    //      </li>
    //   `).appendTo(videoList)
    //             .click(function () {
    //                 videoPlayer.attr('src', videos.video);
    //                 //videoPlayer.attr('controls', true);
    //                 videoPlayer[0].play();
    //             });
    //     });
    //     $('#loading').hide();
    //     videoPlayer.show();
    //     $('#sidebar').show();
    // }

    // displayVideoList();

    async function fetchVideos(){
    try{
  const response = await fetch("video.json");
  if(!response.ok){
    throw new Error(`${response.status} ${response.statusText}`);
  }
  const videos = await response.json();
  return videos;
    } catch(e){
  console.error(e);
    }
    }

    async function displayVideoList(){
      const videos = await fetchVideos();
        const videoList = $("#sidebar ul");
        const videoPlayer =$("video");
        videos.forEach(videos => {
            const theLi = $(`<li>
       <span>${videos.tittle}</span>
       <li/>`).appendTo(videoList).click(function(){
           videoPlayer.attr('src', videos.video);
           videoPlayer.attr('controls', true);
           videoPlayer[0].play();

         $('.active').removeClass('active');
          theLi.addClass('active visited');
       });
        });
     $("#loading").hide();
        videoPlayer.show();
        $("#sidebar").show();
    }
    displayVideoList();

})();