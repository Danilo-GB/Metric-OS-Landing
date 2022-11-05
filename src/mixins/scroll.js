export default {
    mounted(){
        $(window).on('scroll', function () {
            var scroll = $(window).scrollTop();
            if (scroll < 200) {
                $(".navbar").removeClass("fixed");
            } else {
                $(".navbar").addClass("fixed");
            }
        });
    }
}
