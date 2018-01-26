function isScrolledIntoView(elm) {
    var rect = elm.getBoundingClientRect();
    var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}

function prettySideNavBarHandling() {
    console.log("prettySideNavBarHandling() STARTED");
    var anchors = $('.section');
    for (var i = 0; i < anchors.length; ++i) {
        if (isScrolledIntoView(anchors[i])) {
            var anchid = $(anchors[i]).attr('id');
            $(".top_menu a").each(function () {
                if (anchid === this.getAttribute("href").slice(1)) {
                    $(".top_menu a").not(this).each(function () {
                        this.classList.remove("active");
                    });
                    $(this).addClass("active");
                }
            });

            $(".side_menu a").each(function () {
                if (anchid === this.getAttribute("href").slice(1)) {
                    $(".side_menu a").not(this).each(function () {
                        this.classList.remove("active");
                    });
                    $(this).addClass("active");
                }
            });
            break;
        }
    }
    console.log("prettySideNavBarHandling() FINISHED");
}

function hidePhoto() {
    var x = document.getElementsByClassName("hideable_image").item(0);
    var y = document.getElementById("show_photo_button");
    x.style.display = "none";
    y.style.display = "block";
}


function showPhoto() {
    var x = document.getElementsByClassName("hideable_image").item(0);
    var y = document.getElementById("show_photo_button");
    x.style.display = "block";
    y.style.display = "none";
}


$(window).scroll(function () {
    console.log("Window.Scroll() STARTED");
    prettySideNavBarHandling();
    console.log("Window.Scroll() FINISHED");
});

window.onload = function () {
    console.log("Window.OnLoad() STARTED");
    prettySideNavBarHandling();
    console.log("Window.OnLoad() FINISHED");
};

$(window).on('hashchange', function () {
    console.log("Window.OnHashChange() STARTED");
    if (document.readyState === "complete") {
        prettySideNavBarHandling();
    }
    console.log("Window.OnHashChange() FINISHED");
});