<!doctype html>

<html <?php language_attributes(); ?>>

<head>

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
<script src="<?php bloginfo('template_url'); ?>/js/jquery-1.11.1.min.js"></script>	


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
