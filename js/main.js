var sections = [];

function Button(name,job) {
    var button = this;
    var space = true;
    this.name = name;
    while (space == true) {
        this.name = this.name.replace(" ","");
        if (this.name.indexOf(" ") == -1) {
            space = false;
        }
    }
    console.log(this.name);
    
    $(".buttons").append("<div class=\"button\" id=\""+this.name+"button\"></div>");
    button.html = $(".buttons").find("#"+this.name+"button");
    button.html.append("<div class=\"btnstyle\"></div>");
    button.btnstyle = this.html.find(".btnstyle");
    button.btnstyle.append("<div class=\"btntext\"></div>");
    button.btntext = this.html.find(".btntext");
    button.btntext.append(name);
    
    this.html.click(function() {
        job();
    });
}

function Section(name,idOfContent,specialJob) {
    sections.push(this);
    var section = this;
    var space = true;
    this.name = name;
    while (space == true) {
        this.name = this.name.replace(" ","");
        if (this.name.indexOf(" ") == -1) {
            space = false;
        }
    }
    
    $(".sections").append("<section id=\""+this.name+"section\"></section>");
    this.html = $(".sections").find("#"+this.name+"section");

    this.html.append($("#"+idOfContent));
    
    this.button = new Button(name,function() {
        for (var i = 0; i < sections.length; i++) {
            sections[i].html.fadeOut(150);
        }
        section.html.delay(200).fadeIn(150);
        $(".home").fadeIn(150);
        if (typeof(specialJob) != "undefined") {
            specialJob();
        }
    });
    this.html.hide();
}

function Home() {
    sections.push(this);
    this.name = "home";
    var section = this;
    
    $(".sections").append("<section id=\"homesection\"></section>");
    this.html = $(".sections").find("#homesection");
    this.html.append($("#home"));
    
    $(".home").click(function() {
        section.html.delay(200).fadeIn(150);
    });
}

$(document).ready(function() {
    new Home();
    $(".home").find(".button").click(function() {
        for (var i = 0; i < sections.length; i++) {
            sections[i].html.fadeOut(150);
        }
        $(".home").fadeOut(150);
    });
});
