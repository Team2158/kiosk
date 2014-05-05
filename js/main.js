var sections = [];

function Button(name,job,x,y) {
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
    if (typeof(x) != "undefined" && typeof(y) != "undefined") {
        button.html.css("position","fixed").css("right",x+"px").css("bottom",y+"px");
    }
    button.html.append("<div class=\"btnstyle\"></div>");
    button.btnstyle = this.html.find(".btnstyle");
    button.btnstyle.append("<div class=\"btntext\"></div>");
    button.btntext = this.html.find(".btntext");
    button.btntext.append(name);
    
    this.html.click(function() {
        job();
    });
}

function Section(name,idOfContent,specialJob,background,x,y) {
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
    
    if (background == true) {
        $(".sections").append("<section id=\""+this.name+"section\"></section>");
        this.html = $(".sections").find("#"+this.name+"section");
    }
    else {
        $(".sections").append("<div id=\""+this.name+"section\"></div>");
        this.html = $(".sections").find("#"+this.name+"section");
    }

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
    },x,y);
    for (var i = 0; i < sections.length; i++) {
        sections[i].html.hide();
    }
    this.html.show();
}

