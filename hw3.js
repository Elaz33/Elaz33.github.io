/*jshint esversion: 6 */
/* global console */
/*jshint esversion:8*/
(function () {
    'use strict';
    const load = $("#load");
   
    const input = $("#input")
    const animal = $("#animal");
    const names = $("#names");

    async function fetchPics(url) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }
            const pics = await response.json();
            return pics;
        } catch (e) {
            console.error(e);
        }
    }
    load.click(async function (e) {
        e.preventDefault();
        const response = await fetchPics(input.val().toLowerCase() + ".json");
        response.forEach(pics => {

            $(`<ul>
           ${pics.name}<ul/>`).appendTo(names)
                .click(function () {

                    $(`<imag>${pics.picture}`).appendTo(animal);
                    names.text(pics.name);
                    animal.attr('src', pics.picture);

                });

        });


    });

})();
