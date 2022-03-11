<!doctype html>

<html <?php language_attributes(); ?>>

<head>
<link rel="preload" href="https://smarter.loans/wp-content/themes/smarter-loan//webfonts/fa-solid-900.woff2" as="font" crossorigin="anonymous">
<link rel="preload" href="https://smarter.loans/wp-content/themes/smarter-loan/fonts/glyphicons-halflings-regular.woff2" as="font" crossorigin="anonymous">
<link rel="preload" href="https://smarter.loans/wp-content/themes/smarter-loan/fonts/fontawesome-webfont.woff2?v=4.7.0" as="font" crossorigin="anonymous">	
<?php the_field("header_code","option")?>
<meta charset="<?php bloginfo( 'charset' ); ?>" />

<meta http-equiv="X-UA-Compatible" content="IE=edge">

<meta name="viewport" content="width=device-width, initial-scale=1">

<title><?php

	/*

	 * Print the <title> tag based on what is being viewed.

	 */

	global $page, $paged;



	wp_title( '|', true, 'right' );



	// Add the blog name.

	//bloginfo( 'name' );



	



	?></title>

<link rel="icon" href="/wp-content/uploads/badge-2.png" type="image/png" sizes="16x16">
<!--<link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800|Roboto+Slab:100,300,400,700&display=swap" rel="stylesheet">-->

<link href="<?php bloginfo('template_url'); ?>/css/bootstrap.min.css" rel="stylesheet">
<link href="<?php bloginfo('template_url'); ?>/css/jquery-ui.min.css">
<link href="<?php bloginfo('template_url'); ?>/css/rangeslider.css" rel="stylesheet">

<link rel="stylesheet" type="text/css" media="all" href="<?php bloginfo( 'stylesheet_url' ); ?>" />

<link href="<?php bloginfo('template_url'); ?>/css/custom.css" rel="stylesheet">
<style>
@media screen and (min-width: 992px){
body li.mega-menu-item-has-children.mega-menu-megamenu.mega-toggle-on>a.mega-menu-link::before {
       content: "\f0dd"!important;
	font-family:FontAwesome!important;
	    bottom: -13px!important;
}
}
.mm-menu_position-bottom {top:75px!important}	
</style>


<?php wp_head(); ?>

<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->

<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->

<!--[if lt IE 9]>

      <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>

      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>

    <![endif]-->
    
	<?php if(!is_tax('company_category')){ ?>
     <?php if(get_field('add_faq_to_the_page') == 'yes'){ ?>
        <?php if( have_rows('faq_content', $faqs) ): ?>
	<?php $rowCount = count( get_field('faq_content', $faqs) ); //GET THE COUNT ?>
	<?php $i = 1; ?>
       <script type="application/ld+json">
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
	<?php while( have_rows('faq_content', $faqs) ): the_row(); ?>
		<?php $question = get_sub_field('question'); $answer = get_sub_field('answer'); ?>
		{
            "@type": "Question",
            "name": "<?php echo $question; ?>",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "<?php echo $answer; ?>"
            }
          } <?php if($i != $rowCount): ?>,<?php endif; ?> <?php $i++; ?><?php endwhile; ?>]}</script>
<?php endif; } ?>
	
	<?php } ?>
<style>
	
@media screen and (max-width: 767px){
	.table_content img {height:40px; margin:10px auto}
	.tab-pane .table_content {margin-bottom:0}
	.tab-pane .table_content .row { display:flex; align-items:center;flex-wrap:wrap}
	.table_content .col-md-2 {border:none;background:none;width:50%;padding:10px!important;    color: #6c757d;}
	.table_content .col-md-2+.col-md-2+.col-md-2 {font-size:16px;line-height:1.4}
	.table_content .col-md-2+.col-md-2+.col-md-2 {width:50%;padding:5px 10px!important;margin-top:0; margin-bottom:5px}
	.table_content .col-md-2+.col-md-2+.col-md-2+.col-md-2 {opacity:0}
	.table_content .col-md-2+.col-md-2+.col-md-2+.col-md-2+.col-md-2 {order:2;margin-top:-1.5em; opacity:1}
	.table_content .col-md-2+.col-md-2+.col-md-2+.col-md-2+.apply-now {padding-bottom:15px!important;order:5;margin-top: -2.5em;}
}	
	
</style>
		<style type="text/css" id="wp-custom-css">
			.apply-now-popup-body.has_splash.is_subscribed {
    display: block;
}
.apply-now-popup-body.has_splash .apply-now-popup-title {
    margin-bottom: 3rem;
}

.sl_videos_loadmore {
	float: left;
	width: 100%;
}

.sl_redirect_splash {
    text-align: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
}
.sl_redirect_splash > *:first-child {
    text-align: right;
}
.sl_redirect_splash img {
    max-width: 220px;
    max-height: 175px;
    width: auto;
    padding: 1em;
    display: inline-block !important;
}
.sl_redirect_splash .sl-loading-dots {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 140px;
    flex: 0 0 140px;
}
.sl-loading-dots .dot {
    display: inline-block;
    width: 1.5em;
    height: 0.5em;
    margin: 0 0.25em;
    background: #f1f1f1;
    position: relative;
    -webkit-animation: animateDot 0.7s ease-in-out 1 forwards;
    animation: animateDot 0.7s ease-in-out 1 forwards;
}
.sl_redirect_splash > *:last-child {
    text-align: left;
}
.sl_redirect_splash img {
    max-width: 220px;
    max-height: 175px;
    width: auto;
    padding: 1em;
    display: inline-block !important;
}


body {
	overflow-x: hidden !important;
}
.seo-auto-generated {
	font-size: 16px;
	line-height: 25px;
}
.seo-auto-generated .js-seo-auto-generated-disclaimer {
	font-size: 14px;
	line-height: 20px;
	margin: 30px 0;
}
.seo-auto-generated h3, .seo-auto-generated .seo-cta {
	color: #2C3F53 !important;
	font-size: 24px !important;
	font-family: 'Roboto Slab', serif;
	font-weight: 700 !important;
	margin: 30px 0 30px 0;
}
.seo-auto-generated .seo-generated-header-loan {
	margin-top: 30px;
}
#home-mobile-menu {
	display: none;
}
.mob_menu__container {
	margin-bottom: 30px;
	margin: 25px 0;
}
.mob_menu__container ul {
	padding: 0;
	list-style: none;
	border: 1px solid #dcdcdc;
	border-radius: 5px;
}
.mob_menu__container ul li {
	margin-bottom: 10px;
	border-bottom: 1px solid #dcdcdc;
	padding: 10px;
}
.mob_menu__container ul li:last-child {
	border: none;
	margin: 0;
}
.mob_menu__container ul li a {
	font-size: 18px;
	line-height: 25px;
	display: block;
	font-weight: bold;
	font-family: 'Roboto Slab', serif !important;
	color: #2C4054;
	position: relative;
}
.mob_menu__container ul li a:after {
	position: absolute;
	font-family: 'FontAwesome';
	right: 10px;
	content: "\f054";
	top: 10px;
	font-size: 25px;
}
.mob_menu__container ul li a:hover {
	color: #E93E51;
}
.mob_menu__container ul li .menu__icon {
	width: 50px;
	display: inline-block;
	margin-right: 15px;
}

}
.mob_menu__container ul li .menu__icon img {
	display: block;
	max-width: 100%;
	height: auto;
}
/*
 ul.new_blocks li img{
	display:block;
	max-width:100%;
	height:auto;
}




Anchor links fix*/
h2[id]:target:before, h3[id]:target:before, h4[id]:target:before {
	display: block;
	content: " ";
	margin-top: -30px;
	height: 60px;
	visibility: hidden;
	pointer-events: none;
}
tr:nth-child(even) {
	background-color: #f2f2f2;
}
.inner_wrapper div:has(table) {
	overflow-x: auto;
}
table {
	border: 1px solid #ccc;
	border-collapse: collapse;
	margin: 0;
	padding: 0;
	width: 100%;
	table-layout: fixed;
}
table caption {
	font-size: 1.5em;
	margin: .5em 0 .75em;
}
table tr {
	background-color: #f8f8f8;
	border: 1px solid #ddd;
	padding: .35em;
}
table th, table td {
	padding: .625em;
	text-align: center;
}
table th {
	font-size: .85em;
	letter-spacing: .1em;
	text-transform: uppercase;
}
/*Disclosure popover*/
.advert-disc__container {
	text-align: right;
	position: relative;
}
a.advertiser__disclosure {
	padding: 5px 7px;
	display: inline-block;
	font-size: 0.8em;
	color: #2C3F53;
	text-decoration: underline;
	outline: 0;
}
body.home a.advertiser__disclosure {
	color: #fff;
	text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.25);
}
a.advertiser__disclosure:focus, a.advertiser__disclosure:hover {
	text-decoration: none;
	opacity: 0.9;
}
.advert-disc__container .popover {
	max-width: 600px;
	width: 100%;
	border-color: #e8e8e8;
	box-shadow: 0 3px 6px -4px rgba(0, 0, 0, .1);
}
.advert-disc__container .popover.bottom > .arrow {
	border-bottom-color: #e8e8e8;
}
.advert-disc__container .popover.bottom > .arrow:after {
	top: 1.5px;
}
.advert-disc__container .popover-title {
	display: none;
}
.advert-disc__container .popover-content h4, .advert-disc__container .popover-content h3, .advert-disc__container .popover-content h2 {
	margin: 0;
	margin-bottom: 0.5em;
}
/*"Quick Links" list appearance fix*/
.offering ul {
	display: flex;
	flex-wrap: wrap;
	padding: 0 0.5em;
}
.offering ul li {
	width: 100%;
	float: left;
	line-height: 1.4;
	margin-bottom: 0.75em;
}
.new_blocks {
display: grid;
    grid-template-columns: 20fr 20fr 20fr 20fr 20fr;
    padding: 10px;
    list-style: none;
    grid-gap: 15px;
    column-gap: 20px;
    align-items: center;
    max-width: 100%;
    overflow: hidden;
}
.new_blocks li {
	grid-column-end: auto;
	text-align: center;
	border: 1px solid #dcdcdc;
	padding: 25px 15px;
	border-radius: 20px;
	transition: all ease 0.5s;
}
.new_blocks li:hover {
	border: 1px solid #E93E51;
}
.new_blocks li a {
	font-size: 18px;
    line-height: 25px;
    display: block;
    font-weight: bold;
    font-family: 'Roboto Slab',serif !important;
    color: #2C4054;
    position: relative;
}
.new_blocks li .custom_menu_icon{
		margin-bottom: 15px;
    display: block;
}
.new_blocks li a:hover {}
.new_blocks li a img {
	width: auto;
	display: block;
	height: 75px;
	margin: 0 auto;
}
.new_blocks li a h4 {}
.desktop_instance {
	float: left;
}
@media (min-width: 414px) {
	.advert-disc__container + .breadcrumbs_wrapper {
		padding-right: 9.5em;
	}
	a.advertiser__disclosure {
		padding: 0 15px;
		position: absolute;
		z-index: 9999;
		top: 16px;
		right: 0;
		transform: translateY(-50%);
	}
}
@media (min-width:768px) {
	.offering ul {
		padding: 0;
	}
}
@media (min-width:992px) {
	.offering ul li {
		width: 33%;
	}
}
/*"Quick Links" list appearance  modern browser fix*/
@supports (display: grid) {
	.offering ul {
		-webkit-columns: 1;
		-moz-columns: 1;
		columns: 1;
		display: block;
	}
	.offering ul li {
		width: auto;
		float: none;
	}
}
@media (min-width:601px) {
	.offering ul li {
		width: 50%;
		margin-bottom: 0.5em;
	}
	@supports (display: grid) {
		.offering ul {
			-webkit-columns: 2;
			-moz-columns: 2;
			columns: 2;
		}
	}
}
@media (min-width:992px) {
	@supports (display: grid) {
		.offering ul {
			-webkit-columns: 3;
			-moz-columns: 3;
			columns: 3;
		}
	}
}
@media screen and (max-width: 768px) {
	.single_video_padding {
		overflow-wrap: break-word;
	}
	.single_video_text_space {
		bottom: 0% !important;
	}
	.single_video_image {
		position: relative;
		display: block;
		justify-content: center;
		background-color: #000;
		margin-top: 25px;
		text-align: center;
	}
	.single_post p {
		font-size: 20px;
		line-height: 30px;
	}
	.single_post img {
		display: block;
		max-width: 100%;
		height: auto;
	}
	body iframe {
		max-width: 100%;
		height: auto;
	}
	.inner_wrapper ol {
		padding: 0 0 0 15px;
	}
	.inner_wrapper ol li {
		margin-bottom: 10px;
	}
	.inner_wrapper ol li a {
		font-size: 18px;
	}
	.inner_wrapper li {
		font-size: 18px;
		margin-bottom: 10px;
	}
	.offering ul {
		padding: 0 1.5em;
	}
	.offering ul li {
		margin-bottom: 20px;
	}
	.offering ul li a {
		font-size: 18px;
	}
	.review_post p {
		font-size: 18px;
		line-height: 30px;
	}
	.h5, h5 {
		font-size: 18px;
		line-height: 25px;
	}
	.loan_page .top_pos p {
		font-size: 18px;
		line-height: 30px;
	}
	.top-icon .aio-icon-header + .aio-icon-description {
		margin-top: 0;
		font-size: 18px;
		line-height: 25px;
	}
	.other_services_province ul li {
		display: inline-block;
		margin: 10px;
	}
	.ult_pricing_table .ult_price_features {
		padding: 15px 15px 0;
		margin: 0;
		font-size: 18px;
		line-height: 25px;
	}
	.smile_icon_list li .icon_description div.icon_description_text p span {
		font-size: 18px !important;
		line-height: 25px !important;
	}
	.footer-bottom p {
		color: #CCCCCC;
		font-size: 18px;
		line-height: 25px;
	}
	.table_content .col-xs-12 {
		padding-top: 20px;
		padding-bottom: 20px;
		font-size: 20px;
		line-height: 25px;
	}
	td {
		font-size: 18px;
		line-height: 30px;
	}
	.blog_sidebar ul li a {
		font-weight: 400;
		color: #333333;
		font-size: 18px;
		transition: all ease 0.5s;
		line-height: 30px;
	}
	.uavc-list-content span.uavc-list-desc {
		font-size: 18px !important;
		line-height: 25px !important;
	}
	.single_post ul li {
		font-weight: 400;
		color: #333333;
		font-size: 18px;
		line-height: 25px;
	}
	.page-template-default p {
		font-size: 18px;
		line-height: 25px;
	}
	.tab__home {
		display: none;
	}
	#home-mobile-menu {
		display: block;
	}
}
@media screen and (max-width: 767px) {
	#home-desktop-menu {
		display: none;
	}
	.res_table {
		overflow-x: auto;
	}
	table {
		table-layout: unset;
	}
	ul.new_blocks {
		padding: 0;
		list-style: none;
		border: 1px solid #dcdcdc;
		border-radius: 5px;
		display: block;
	}
	ul.new_blocks li {
		margin-bottom: 10px;
		border-bottom: 1px solid #dcdcdc;
		border-top: 0;
		border-right: 0;
		border-left: 0;
		border-radius: 0;
		padding: 10px;
		text-align: left;
	}
	ul.new_blocks li:last-child {
		border: none;
		margin: 0;
	}
	ul.new_blocks li a {
    font-size: 18px;
    line-height: 25px;
    display: grid;
    font-weight: bold;
    font-family: 'Roboto Slab', serif !important;
    color: #2C4054;
    position: relative;
    grid-template-columns: 75px 215px;
	}
	ul.new_blocks li a:after {
		position: absolute;
		font-family: 'FontAwesome';
		right: 10px;
		content: "\f054";
		top: 10px;
		font-size: 25px;
	}
	ul.new_blocks li a:hover {
		color: #E93E51;
	}
	ul.new_blocks li h4 {
		display: inline;
	}
	ul.new_blocks li span.custom_menu_icon {
    width: 50px;
    display: inline-block;
    margin-right: 15px;
    height: 40px;
	}
		ul.new_blocks li span.menu__title__new{
		margin-top: 10px;
	}
	
	
	ul.new_blocks li img {
		max-width: 100%;
		height: auto !important;
	}
	
	#cp_popup_id_206548 .cpro-form-container{
		background-image:url(https://smarter.loans/wp-content/uploads/SmarterLoans_ADs_FamilyDay_opt.jpg);
		background-blend-mode: overlay;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
		
	}
}/*767*/





.cp-module-slide_in .cp-popup-content {
    position: fixed;
    z-index: 999999 !important;
}



.salesforce_form{
	    padding: 25px 0 !important;
}
  .salesforce_form input[type="text"], .salesforce_form input[type="Email"], .salesforce_form input[type="number"], .salesforce_form input[type="Date"], .salesforce_form select, .salesforce_form textarea{

      border:none !important;

      border-bottom:2px solid #ccc !important;

      border-radius: 0px !important;

      box-shadow: none !important;

    }

   .salesforce_form input[type="Submit"]{

      background-color: #e93e51;

      color:white;

      padding-top: 20px;

      padding-bottom: 20px;

      padding-left:30px;

      padding-right:30px;

      font-size: 16px;

    }

    .salesforce_form .margin{

      margin-top: 20px !important;

    }

    .salesforce_form .star{

      color: red;

    }

.salesforce_form input[type="text"]:focus, .salesforce_form input[type="Email"]:focus, .salesforce_form input[type="number"]:focus, .salesforce_form input[type="Date"]:focus, .salesforce_form select:focus, .salesforce_form textarea:focus{

      box-shadow: none;

      outline: none;

      border-bottom:2px solid #e93e51 !important;

    }

    .salesforce_form .text{

      margin: auto;

      text-align: right;

      padding: 10px;

      bottom: 0;

      padding-bottom: 0px;

    }

    .salesforce_form form{
/*
      border: 1px solid #ccc;

      padding: 30px 30px 30px 30px;
*/
    }

    .salesforce_form .makeborder{

      border-top: 1px solid #ccc !important;

      border-right: 1px solid #ccc !important;

      border-left: 1px solid #ccc !important;

      border-radius: 5px !important;

      /*border-top-right-radius: 5px !important;*/

    }

    .salesforce_form label{

      font-weight: 500;

      font-size: 18px;

    }		</style>
</head>
<body <?php body_class(); ?>>


<?php 
  
  $menu_name = 'max_mega_menu_1'; 
  if (($locations = get_nav_menu_locations()) && isset($locations[$menu_name])) {
    $menu = wp_get_nav_menu_object($locations[$menu_name]);
    $menu_items = wp_get_nav_menu_items($menu->term_id);
    
    $menuTree = buildTree($menu_items);
    
    if(count($menuTree) > 0){
      $menuHtml = '<nav id="menu" class="hide">' ."\n";
      $menuHtml .= "\t\t\t\t". '<ul>' ."\n";
        foreach ($menuTree as $menu) {
          $title = $menu->title;
          $url = $menu->url;
          $menuHtml.= buildMenuHtml($menu);
          $menuHtml .= "</li>";
        }
      $menuHtml .= "\t\t\t\t". '</ul>' ."\n";
      $menuHtml .= "\t\t\t". '</nav>' ."\n";
    }
  } else {
    // $menu_list = '<!-- no list defined -->';
  }
?>


<!---Navigation-->

<header id="masthead" class="site-header navigation" role="banner">
    <div class="header-main">
      <nav id="primary-navigation" class="site-navigation primary-navigation hidden-xs hidden-sm" role="navigation">
      <a href="<?php echo get_option('home'); ?>" class="logo"><img src="<?php bloginfo('template_url'); ?>/images/logo.png" alt="Smarter.Loans" class="img-responsive" /></a>
      <a href="<?php echo get_option('home'); ?>/pre-apply" class="apply-button">Pre Apply</a>
        <?php wp_nav_menu( array( 'theme_location' => 'max_mega_menu_1' , 'menu_class' => 'nav-menu', 'menu'=>'Main Menu', 'menu_id' => 'primary-menu') ); ?>
      </nav>
    </div>
  </header>


  <div class="mobile_menu_cover">
  <div class="mh-head Sticky hidden-md hidden-lg">
    <span class="mh-btns-left">
      <a class="fa fa-bars" href="#menu"></a>
    </span>
    <a href="<?php echo get_option('home'); ?>" class="logo-1"><img src="<?php bloginfo('template_url'); ?>/images/logo.png" alt="Smarter.Loan" class="img-responsive" /></a>
    <a href="<?php echo get_option('home'); ?>/pre-apply" class="apply-button">Pre Apply</a>
  </div>
<?php echo $menuHtml; ?>
</div>
<!---Navigation-->

<div class="advert-disc__container">
	<a tabindex="0" class="advertiser__disclosure" role="button" data-toggle="popover" data-popover-content="#advertiser__disclosure" data-placement="bottom" data-trigger="click" title="Advertiser disclosure" href="Javascript:;">Advertiser disclosure</a>
	<div id="advertiser__disclosure" class="hidden">
		<?php echo wpautop(html_entity_decode(get_option('adv_disc'))); ?>
	</div>
</div>
