var sections=["homeWrapper","educationWrapper","skillWrapper","aboutWrapper","contactWrapper"];
var selectedSection="homeWrapper";
var languages=["en_Lang","es_Lang","it_Lang"];
var selectedLang="en_Lang";
$(function(){    
    
    $("body").css({ minHeight: ($(window).innerHeight()*0.95) + 'px' });
    $(window).resize(function() {
      $("body").css({ minHeight: ($(window).innerHeight()*0.95) + 'px' });
    });
    
    var lang_selectors= $(".in-front-total-cover a");
    lang_selectors.click(function () {
        selectedLang=$(this).data("lang");
        var notSelectedLang=jQuery.grep(languages, function(value) {
                                return value != selectedLang;
                            });
        $("#lang-covering-container")
                .animate({
                    right:"0px",
                    top:"0px",
                    width:"38px",
                    height:"38px", 
                    backgroundColor: 'rgba(255,255,255,0)'
                 },1000,function(){
                        $("#lang-row").addClass("hidden");
                        $("#lang-menu-toggle").removeClass("hidden");
                    });
        $("."+notSelectedLang[0]).addClass("hidden");
        $("."+notSelectedLang[1]).addClass("hidden");
        $("."+selectedLang).removeClass("hidden");
        $("#mainWrapper").removeClass("hidden");
    });
    
    sectionSwitch();
    $(".custom-nav a").click(function(){
       selectedSection=$(this).data("section")+"Wrapper";
       sectionSwitch();
    });
});
function sectionSwitch(){
    var notSelectedSection=jQuery.grep(sections, function(value) {
                                return value != selectedSection;
                            });
    for(i=0;i<notSelectedSection.length;i++){
        $("#"+notSelectedSection[i]).addClass("hidden");
    }
    $("#"+selectedSection).removeClass("hidden");
}