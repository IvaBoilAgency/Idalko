<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>
<script>
  jQuery('.services-slider').owlCarousel({
        loop: true,
        autoplay: false,
        nav: true,
        navText: ["", "<img src='/wp-content/uploads/2023/11/service-slider-arrow.svg' alt='Right Arrow'>"],
        responsive: {
            0: {
                items: 1.5
            },
            768: {
                items: 2.5,
                margin: 20,
            },
            1000: {
                items: 3.5,
                margin: 41,
            }
        },
        onInitialized: function(event) {
            // Hide the left arrow after initialization
            jQuery('.services-slider .owl-nav button.owl-prev').hide();
        },
        onChanged: function(event) {
            // Show/hide arrows based on the current position
            if (event.item.index === 0) {
                jQuery('.services-slider .owl-nav button.owl-prev').hide();
                jQuery('.services-slider .owl-nav button.owl-next').show();
            } else {
                jQuery('.services-slider .owl-nav button.owl-prev').show();
                jQuery('.services-slider .owl-nav button.owl-next').show();
            }
        }
    });
    
    jQuery(document).ready(function() {
    jQuery(".full-section-link").on("click", function(e) {
        window.location = $(this).attr("href");
    });

    // Optional: Hover effect
    jQuery(".full-section-link").hover(
        function() {
            jQuery(this).addClass("hovered");
        },
        function() {
            jQuery(this).removeClass("hovered");
        }
    );
});

    </script>
