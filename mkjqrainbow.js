(function ($) {

    $.fn.rainbow = function (m) {

        var o = $(this);
        var speed_property;
        var iteration_property;
        var type_property;

        return this.each(function () {


            // Let's define if it's a block or text element
            if (o.is("div")) {
                type_property = "block";
            } else {
                type_property = "text";
            };


            // If m is undefined, we will put 
            if (m == undefined) {
                o.css("-webkit-animation", "rainbow_" + type_property + " 6s linear 0s infinite alternate");
                o.css("-moz-animation", "rainbow_" + type_property + " 6s linear 0s infinite alternate");
                o.css("-o-animation", "rainbow_" + type_property + " 6s linear 0s infinite alternate");
                o.css("-animation", "rainbow_" + type_property + " 6s linear 0s infinite alternate");

            }

            // If we have arguments, then we treat everything as is.    
            if (typeof (m) == "object")

            // Let's go throught all the arguments,            
                for (var k in m) {

                    // Speed Property
                    if (m.hasOwnProperty("speed")) {

                        var speed = {
                            fast: "3s",
                            medium: "6s",
                            slow: "12s"
                        }

                        for (var property in speed) {

                            if (property == m[k]) {
                                speed_property = speed[property];
                            } else {
                                speed_property = m[k];
                            }

                        }

                    }

                    // Iteration Property
                    if (m.hasOwnProperty("iteration")) {
                        iteration_property = m[k];
                    }

            }

            // Default iteration is infinite
            if (iteration_property == undefined) {
                iteration_property = "infinite";
            }

            // Default speed is 6s
            if (speed_property == undefined) {
                speed_property = "6s";
            }

            // Let's add the CSS3 animation properties        
            o.css("-webkit-animation", "rainbow_" + type_property + " " + speed_property + " linear 0s " + iteration_property + " alternate");
            o.css("-moz-animation", "rainbow_" + type_property + " " + speed_property + " linear 0s " + iteration_property + " alternate");
            o.css("-o-animation", "rainbow_" + type_property + " " + speed_property + " linear 0s " + iteration_property + " alternate");
            o.css("-animation", "rainbow_" + type_property + " " + speed_property + " linear 0s " + iteration_property + " alternate");

        });


    }

}(jQuery));
