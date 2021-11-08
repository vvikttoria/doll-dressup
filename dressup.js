$(document).ready(function(){

    function ImageSwitcher(choices, i) {
        i = 0;
        
        this.Next = function() {
            hide_current_image();
            show_next_image();
        }
        
        var hide_current_image = function() {
            if(choices){
                choices[i].style.visibility = "hidden";
                i += 1;
            }
        }
        var show_next_image = function() {
            if(choices){
                if(i == (choices.length)) {
                    i = 0;
                }
                choices[i].style.visibility = "visible";
            }
        }
    }
      
        var eyes = $(".eyes");
        var mouth = $(".mouth");
        var hair = $(".hair");
        var pants = $(".pant");
        var shirts = $(".shirt");
        var shoes = $(".shoes");
        var accessories = $(".accessories");
        var background = $(".background");


        
        var backgrounds = $(".bg");

        var eyes_picker = new ImageSwitcher(eyes);
        document.getElementById("eyes_button").onclick = function() {eyes_picker.Next(); };

        var mouth_picker = new ImageSwitcher(mouth);
        document.getElementById("mouth_button").onclick = function() {mouth_picker.Next(); };
    
        var shirt_picker = new ImageSwitcher(shirts);
        document.getElementById("shirt_button").onclick = function() { shirt_picker.Next(); };
        
        var pants_picker = new ImageSwitcher(pants);
        document.getElementById("pant_button").onclick = function() {pants_picker.Next(); };
        
        var hair_picker = new ImageSwitcher(hair);
        document.getElementById("hair_button").onclick = function() {hair_picker.Next(); };

        var shoes_picker = new ImageSwitcher(shoes);
        document.getElementById("shoes_button").onclick = function() {shoes_picker.Next(); };

        var accessories_picker = new ImageSwitcher(accessories);
        document.getElementById("accessories_button").onclick = function() {accessories_picker.Next(); };

        var background_picker = new ImageSwitcher(background);
        document.getElementById("background_button").onclick = function() {background_picker.Next(); };

        var bg_picker = new ImageSwitcher(backgrounds);
        document.getElementById("bg_button").onclick = function() {bg_picker.Next(); };
    
    });
    
      $("#shirt_button").click(function(){
      $("#shirt-menu").css("visibility", "visible"); });