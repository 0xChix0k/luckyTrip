$(document).ready(function () {
  $('.connect').click(function () {
    isConnect();
  });

  $('.mint_btn').click(function () {
    connected = document.querySelector('.connect').innerText;
    if (connected == 'CONNECT') {
      connect().then(() => mint());
    } else {
      mint();
    }
  });

  $('.show_btn').click(function () {
    $('.show_result').addClass('active');
  });

  $('.md-close,.md .md-overlay').click(function () {
    $('.md').removeClass('active', 'swiper-slide-active');
    $('.mint_result').attr('style', 'display:none;');
    $('.sw').remove();
    // $('.status').show();
    // $('.preloader').show();
    // $('.status-box').show();
    // $('.preloader-box').show();
  });
  $('.status').click(function () {
    $('.status').delay(1000).fadeOut(500);
    $('.preloader').delay(1000).fadeOut(500);
  });
  $('.menu_button,header .md-overlay,.menu_mob a').click(function () {
    $('header').toggleClass('active');
    $('.menu_mob').slideToggle();
  });

  // bag slide
  $(document).ready(function () {
    $('#slide').click(function () {
      $('.mint-bag').toggleClass('ldx ldx-bounceAlt active');
      $('.mint-bag-area').slideToggle('slow').parent().find('.mint-bag-arrow').toggleClass('active');
      return false;
    });
  });

  //SocialMedia
  var openseaURL = 'https://opensea.io/collection/luckytrip';
  var etherscanURL = 'https://etherscan.io/address/0xcedde3382ff839d8eef7357c16bdf111d77a72f2';
  var twitterURL = 'https://twitter.com/luckytripl';
  var discordURL = 'https://discord.gg/knhdweRUW4';
  var instagramURL = 'https://www.instagram.com/luckytrip.io';
  var socialMediaSB = new StringBuilder();
  var result = document.querySelector('.socialMedia');

  if (openseaURL.length > 0) {
    socialMediaSB.append('<a href="' + openseaURL + '" id="os" target="_blank">');
    socialMediaSB.append('<span><img src="/images/opensea.png" alt="" class="bx bxl-opensea"/></span>');
    socialMediaSB.append('<span>Opensea</span>');
    socialMediaSB.append('</a>');
  }
  if (etherscanURL.length > 0) {
    socialMediaSB.append('<a href="' + etherscanURL + '" id="eth" target="_blank">');
    socialMediaSB.append('<span><img src="/images/eth.png" alt="" class="bx bxl-etherscan"/></span>');
    socialMediaSB.append('<span>EtherScan</span>');
    socialMediaSB.append('</a>');
  }
  if (twitterURL.length > 0) {
    socialMediaSB.append('<a href="' + twitterURL + '" id="tweet" target="_blank">');
    socialMediaSB.append('<span><i class="bx bxl-twitter" style="color:#ffffff;font-size:36px"></i></span>');
    socialMediaSB.append('<span>Twitter</span>');
    socialMediaSB.append('</a>');
  }
  if (discordURL.length > 0) {
    socialMediaSB.append('<a href="' + discordURL + '" id="discord" target="_blank">');
    socialMediaSB.append('<span><i class="bx bxl-discord-alt" style="color:#ffffff;font-size:36px" ></i></span>');
    socialMediaSB.append('<span>Discord</span>');
    socialMediaSB.append('</a>');
  }
  if (instagramURL.length > 0) {
    socialMediaSB.append('<a href="' + instagramURL + '" id="ig" target="_blank">');
    socialMediaSB.append('<span><i class="bx bxl-instagram-alt" style="color:#ffffff;font-size:36px"></i></span>');
    socialMediaSB.append('<span>Instagram</span>');
    socialMediaSB.append('</a>');
  }

  result.innerHTML = socialMediaSB.toString();

  //Roadmap
  var roadmap_title = ['銷售50~5555張', '銷售1110張', '銷售2755張', '完售5555張'];
  var roadmap_content = [
    '週週抽[一般]住宿券2組(價值3000~5000)',
    '週週抽[豪華]住宿券1組(價值10000~15000)',
    '月抽[總統套房]住宿券1組(價值50000以上)',
    '加碼抽以太幣數顆!',
  ];

  var roadmapSB = new StringBuilder();
  var result = document.querySelector('.roadmapMenu');

  for (i = 0; i < roadmap_title.length; i++) {
    roadmapSB.append('<div class="cd-timeline-block">');
    roadmapSB.append('<div class="cd-timeline-img cd-picture">');
    roadmapSB.append('<img src="images/logo-icon.svg" alt="Picture">');
    roadmapSB.append('</div>');
    roadmapSB.append('<div class="cd-timeline-content">');
    roadmapSB.append('<h2>' + roadmap_title[i] + '</h2>');
    roadmapSB.append('<p>' + roadmap_content[i] + '</p>');
    roadmapSB.append('</div>');
    roadmapSB.append('</div>');
  }
  result.innerHTML = roadmapSB.toString();

  //FAQ
  // var faq_titles = '1.開始時間';
  // var faq_title = faq_titles.split('|');
  // var faq_contents = '一輩子';
  // var faq_content = faq_contents.split('|');

  // var faqSB = new StringBuilder();
  // var result = document.querySelector('.faqMenu');

  // for (i = 0; i < faq_title.length; i++) {
  //   faqSB.append('<div class="faq-question">');
  //   faqSB.append('<a href="#" class="slide-faq">');
  //   faqSB.append('<span>' + faq_title[i] + '</span>');
  //   faqSB.append('<span class="arrow"></span>');
  //   faqSB.append('</a>');
  //   faqSB.append('<div class="faq-answer">' + faq_content[i] + '</div>');
  //   faqSB.append('</div>');
  // }
  // result.innerHTML = faqSB.toString();

  // //Team
  // var team_names = 'AA|BB';
  // var team_name = team_names.split('|');
  // var team_jobs = '睡覺|掃廁所';
  // var team_job = team_jobs.split('|');

  // var teamSB = new StringBuilder();
  // var result = document.querySelector('.teamMenu');

  // for (i = 0; i < team_name.length; i++) {
  //   teamSB.append('<div class="col-md-4 col-6 t-align-center m_20">');
  //   teamSB.append('<img src="images/team_member_0' + (i + 1) + '.png" alt="" width="120">');
  //   teamSB.append('<p>' + team_name[i] + '</p>');
  //   teamSB.append('<p>' + team_job[i] + '</p>');
  //   teamSB.append('</div>');
  // }
  // result.innerHTML = teamSB.toString();

  // $(document).ready(function () {
  //   $('.slide-faq').click(function () {
  //     $(this).parent().find('.faq-answer').slideToggle('slow').parent().find('.arrow').toggleClass('active');
  //     return false;
  //   });
  // });

  jQuery(document).ready(function ($) {
    var $timeline_block = $('.cd-timeline-block');

    //hide timeline blocks which are outside the viewport
    $timeline_block.each(function () {
      if ($(this).offset().top > $(window).scrollTop() + $(window).height() * 0.75) {
        $(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
      }
    });

    //on scolling, show/animate timeline blocks when enter the viewport
    $(window).on('scroll', function () {
      $timeline_block.each(function () {
        if (
          $(this).offset().top <= $(window).scrollTop() + $(window).height() * 0.75 &&
          $(this).find('.cd-timeline-img').hasClass('is-hidden')
        ) {
          $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
        }
      });
    });
  });

  $(function () {
    // This will select everything with the class smoothScroll
    // This should prevent problems with carousel, scrollspy, etc...
    $('.header-scroll').click(function () {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html,body').animate(
            {
              scrollTop: target.offset().top - 100,
            },
            50
          ); // The number here represents the speed of the scroll in milliseconds
          return false;
        }
      }
    });
  });

  function changePrice() {
    const priceFix = parseFloat(web3In.utils.fromWei(contractPrice)).toFixed(2);

    var value = document.querySelector('.mint-value');
    var price = ($('#qty_input').val() * priceFix).toFixed(2);
    value.innerHTML = price + 'ETH';
  }

  $(document).ready(function () {
    $('#qty_input').prop('disabled', true);

    $('#plus-btn').click(function () {
      $('#qty_input').val(parseInt($('#qty_input').val()) + 1);
      if ($('#qty_input').val() >= parseInt(contractMaxMint)) {
        $('#qty_input').val(contractMaxMint);
      }
      changePrice();
    });

    $('#minus-btn').click(function () {
      $('#qty_input').val(parseInt($('#qty_input').val()) - 1);
      if ($('#qty_input').val() == 0) {
        $('#qty_input').val(1);
      }
      changePrice();
    });

    $('#os').hover(
      function () {
        $('.bxl-opensea').addClass('bx-tada');
        $('.bxl-opensea').attr('src', '/images/opensea2.png');
      },
      function () {
        $('.bxl-opensea').removeClass('bx-tada');
        $('.bxl-opensea').attr('src', '/images/opensea.png');
      }
    );
    $('#eth').hover(
      function () {
        $('.bxl-etherscan').addClass('bx-tada');
        $('.bxl-etherscan').attr('src', '/images/eth2.png');
      },
      function () {
        $('.bxl-etherscan').removeClass('bx-tada');
        $('.bxl-etherscan').attr('src', '/images/eth.png');
      }
    );
    $('#tweet').hover(
      function () {
        $('.bxl-twitter').addClass('bx-tada');
        $('.bxl-twitter').attr('style', 'color:blue;font-size:36px');
      },
      function () {
        $('.bxl-twitter').removeClass('bx-tada');
        $('.bxl-twitter').attr('style', 'color:#ffffff;font-size:36px');
      }
    );
    $('#discord').hover(
      function () {
        $('.bxl-discord-alt').addClass('bx-tada');
        $('.bxl-discord-alt').attr('style', 'color:blue;font-size:36px');
      },
      function () {
        $('.bxl-discord-alt').removeClass('bx-tada');
        $('.bxl-discord-alt').attr('style', 'color:#ffffff;font-size:36px');
      }
    );
    $('#ig').hover(
      function () {
        $('.bxl-instagram-alt').addClass('bx-tada');
        $('.bxl-instagram-alt').attr('style', 'color:red;font-size:36px');
      },
      function () {
        $('.bxl-instagram-alt').removeClass('bx-tada');
        $('.bxl-instagram-alt').attr('style', 'color:#ffffff;font-size:36px');
      }
    );
  });
});
