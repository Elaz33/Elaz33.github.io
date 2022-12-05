/*jshint esversion: 6 */
/* global console */
/*jshint esversion:8*/
(function(){
 "use strict";
    const NUM_PARTS = 23;
    const PART_SPACING = 116;
    const partsContainer = $("#parts");
    let x = 20;
    let y = 20;
    //  let parts = [];
    let potato;
 let i = 1;
 let drag = false;
 let offset;
 let defaultLeft = 0;
 let parts = JSON.parse(localStorage.getItem('parts')) || [{}];
 let islocal = parts.length > 1;
 let zindexCounter = 0;
    let body = $("body");
    const background = $("#newBackround");
    const pic = $("#pic");
    const farm = $("#farm");
    const acrobats = $("#acrobats");
    const ac = $("#ac");
    const fa = $("#fa");
  //  function imageloop() {
    // let bodyPart =  $("<img class='bodyParts' id= '"+ i +"' />").attr('src', `MPH Parts/Picture${i}.png`)
    //         .appendTo(body);
    //     if(islocal ){
    //      let spots = parts [i];
    //         bodyPart.css({ top: spots.y,left: spots.x});
    //         bodyPart.css({zIndex:spots.zIndex});
    //         zindexCounter =  spots.zIndex > zindexCounter ? spots.zIndex+1:zindexCounter;
    //     }
    //     else{
    //         const y = 0;
    //          const  x =defaultLeft ;
            
    //         bodyPart.css({ top: y, left: defaultLeft });
            
    //         const offsets = {
    //             y: y,
    //             x: defaultLeft,
    //             zIndex:0
    //         };
    //         parts.push(offsets);
    //         defaultLeft = defaultLeft+100;
    //     }
     
    //     i++;
    //     if (i < 27) { 
    //         imageloop();
    //     }
     
    // }
//farm.hidden();
  farm.click(e=>{
    e.preventDefault();
    //   backgroundImage: url("giphy.gif");
    //   backgroundImage:  'image: url("background2.jpg")'; 
    ac.hide();
      document.body.style.backgroundImage = "url('background2.jpg')";
    //   document.body.style.background = size.cover;
      fa.show();

  });

    acrobats.click(e => {
        e.preventDefault();
        fa.hide();
        document.body.style.backgroundImage = "url('giphy.gif')";
        // document.body.css ("background-size","cover");
        ac.show();
    });
    function placeParts() {
        for (let i = 1; i < NUM_PARTS; i++) {
            parts.push($("<img class='bodyParts' id= '" + i + "' />").attr('src', `MPH Parts/Picture${i}.png`)
                .appendTo(partsContainer)
                .css({
                    left: `${x}px`,
                    top: `${y}px`
                }));

            x += PART_SPACING;

            if (x > (window.innerWidth / 4) - PART_SPACING) {
                x = 20;
                y += PART_SPACING;
            }
        }

        // place potato
    //     parts.push(
    //         potato = $('<img class="part potato" src="images/23.png">')
    //             .appendTo($('#main'))
    //             .css({
    //                 left: (window.innerWidth / 2) + 100,
    //                 top: '400px'
    //             }));
    }

    placeParts();
    
  
    $(document).on("mousedown",  e => {
        console.log("mouse down", e.target.id);
        drag = $(e.target);
        drag.css("zIndex",zindexCounter++);
        offset = { y: e.offsetY, x: e.offsetX, };
    }).mousemove(e => {
       
        if (drag) {
            e.preventDefault();
            console.log("mouse move", e);
            drag.css({ top: e.pageY - offset.y, left: e.pageX - offset.x });
        }
    }).mouseup(e => {
        console.log('mouse up', e);
        drag = false;
        let id  =  e.target.id;
        console.log(id);
        let spot = parts[id];
        console.log(parts);
        spot.y = e.pageY - offset.y;
        spot.x = e.pageX - offset.x;
        spot.zIndex = zindexCounter;
        localStorage.setItem('parts', JSON.stringify(parts));
        
    });

   
  
       imageloop();

 
})();