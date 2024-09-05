$(document).on('click', '.product-image-links', function () {
    $(this).parent().children('.product-image-links').removeClass('active');
    $(this).addClass('active');
    var link = $(this).attr('src');
    $(this).parent().parent().siblings('.card').children('.product-active-image').attr('src', link)
});

$(document).on('click', '.color-family-box', function () {
    $(this).parent().children('.color-family-box').removeClass('active');
    $(this).addClass('active');
});

$(document).on('click', '.size-box', function () {
    $(this).parent().children('.size-box').removeClass('active');
    $(this).addClass('active');
});

$(document).ready(function() {
    $('.gallery-wrapper').each(function() {
        var $gallery = $(this);
        var $imageLinks = $gallery.find('.product-image-links');
        var $backBtn = $gallery.find('.back-btn');
        var $nextBtn = $gallery.find('.next-btn');
        var currentIndex = 0;
        var totalImages = $imageLinks.length;
        var imagesPerPage = 3;

        function updateGallery() {
            var remainingImages = totalImages - currentIndex;
            var start = currentIndex;
            var end = currentIndex + imagesPerPage;

            if (remainingImages < imagesPerPage && currentIndex > 0) {
                start = totalImages - imagesPerPage;
                end = totalImages;
            }

            $imageLinks.hide().slice(start, end).show();
            $backBtn.prop('disabled', currentIndex === 0);
            $nextBtn.prop('disabled', end >= totalImages);
        }

        $backBtn.click(function() {
            if (currentIndex > 0) {
                currentIndex -= imagesPerPage;
                if (currentIndex < 0) {
                    currentIndex = 0;
                }
                updateGallery();
            }
        });

        $nextBtn.click(function() {
            if (currentIndex + imagesPerPage < totalImages) {
                currentIndex += imagesPerPage;
                updateGallery();
            } else if (currentIndex + imagesPerPage >= totalImages) {
                currentIndex = totalImages - imagesPerPage;
                updateGallery();
            }
        });

        updateGallery(); // Initial call to set up the gallery
    });
});

