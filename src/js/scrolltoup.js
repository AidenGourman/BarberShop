     $(document).ready(function () {
          $(function () {
            $("#back-top").hide();

            $(window).scroll(function () {
              if ($(this).scrollTop() > 500) {
                $("#back-top").fadeIn();
              } else {
                $("#back-top").fadeOut();
              }
            });

            $("#back-top a").click(function () {
              $("body,html").animate({
                scrollTop: 0
              }, 800);
              return false;
            });
          });
     });
        
// FOR SASS 
    //  @media (min-width:150px) {
    // #back-top {
    //     position: fixed;
    //     width: 40px;
    //     height: 40px;
    //     bottom: 10;
    //     right: 10;
    //     padding: 0;
    //     margin: 0;
    //     fill: $secondary-text-color;
    // }


    // HTML CODE
//       <body>
//     <span id="top"></span>
//   ... SOME HTML CODE
//     <p id="back-top">
//       <a href="#top"><span>
//         <svg class="arrow-up" width="40px" height="40px">
//           <use href="/images/svg/svg-pack.svg#icon-arrow-up"></use>
//         </svg>
//       </span></a>
//     </p>
//   </body>
   // html script
{/* <script src="http://code.jquery.com/jquery-latest.js" */}