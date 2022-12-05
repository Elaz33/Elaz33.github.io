/*jshint esversion: 6 */
/* global console */
/*jshint esversion:8*/
( function () {
    "use strict";
    // const tittle = $("#tittle");
    const myVideo = $("#myVideo");
    const options = $("#selection");
  //  const options2 = $("#selection2");
    // const pic = $("#pic");
    // const playing = document.createElement("video");


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

    //   async function display() {
    //       const vcr = await fetchVideos();
    //       myVideo.hide();
    //       vcr.forEach(videos =>{

    //     $(`<div  id="result">${videos.tittle}<div/>`).appendTo(options).
    //           click(function(){
    //          myVideo.attr('src',videos.video);
    //          myVideo.attr('controls',true);
    //               myVideo.show();
    //           });
    //       });
         
    //   }
  
 async function fetchVideo(){
    try{
const response = await fetch("video.json");
if(!response.ok){
    throw new Error(`${response.status}${response.statusText}`);
}
const movies = await response.json();
        return movies;
    }catch(e){
   console.error(e);
    }
    
 }

 async function display(){
    const vcr = await fetchVideo();
     vcr.forEach(videos => {
         $(`<div>${videos.tittle}<div/>`).appendTo(options).
         click(function(){
         myVideo.attr('src',videos.video );
         myVideo.attr('controls',true);
         });
     });
 }
    
   


display();
})();