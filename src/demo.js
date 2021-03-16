import 'jquery-mapael';
import $ from 'jquery';
import 'jquery-mapael/js/maps/world_countries.js';
import './pt';


$(".container").mapael({
    map : {
        name : "portugal",
        width : 650,
    },
    legend : {

    },
    areas : {
        'leiria': {
            value: "leiria",
            href: "www.google.pt",
            tooltip: {content: "Leiria"}
        },
        'lisboa': {
            value: "leiria",
            href: "www.google.pt",
            tooltip: {content: "Leiria"}
        }
    }
    
});