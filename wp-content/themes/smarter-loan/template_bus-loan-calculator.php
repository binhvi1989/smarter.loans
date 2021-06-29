<?php
/*
Template Name: busloan
*/
get_header();
// the_content();
if (have_posts()):while(have_posts()): the_post(); the_content(); endwhile; endif;
 //echo do_shortcode("[bus_loan_calculator]"); 
get_footer();
?>