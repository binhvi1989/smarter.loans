<?php 
/*Template Name: Blog Listing*/

get_header(); ?>


 <script>

    function fbShare(url, title, descr, image, winWidth, winHeight) {

        var winTop = (screen.height / 2) - (winHeight / 2);

        var winLeft = (screen.width / 2) - (winWidth / 2);

        window.open('http://www.facebook.com/sharer.php?s=100&p[title]=' + title + '&p[summary]=' + descr + '&p[url]=' + url + '&p[images][0]=' + image, 'sharer', 'top=' + winTop + ',left=' + winLeft + ',toolbar=0,status=0,width=' + winWidth + ',height=' + winHeight);

    }

</script>
    

<div class="breadcrumbs_wrapper">
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <?php if(function_exists('bcn_display')){ bcn_display();} ?>
      </div>
    </div>
  </div>
</div>
<?php if(get_field('show_page_title_and_banner') == 'yes'){ ?>
<div class="title_banner" <?php if(get_field('title_banner')) { ?>style="background-image:url(<?php the_field('title_banner'); ?>)" <?php }else{?>style="background-image:url(<?php bloginfo('template_url'); ?>/images/default.jpg)"<?php } ?>>
  <div class="container">
    <div class="row">
      <div class="col-md-9 col-md-offset-1">
        <h1>
          <?php the_title(); ?>
        </h1>
        <?php if(get_field('title_sub-heading')){ ?>
        <p class="sub_heading_title">
          <?php the_field('title_sub-heading'); ?>
        </p>
        <?php } ?>
      </div>
    </div>
  </div>
</div>
<?php } ?>
<section>
  <div class="container inner_wrapper blog_listing">
    <div class="row">
      <div class="col-md-8 col-sm-12">
      
      	
       <div class="masonry-grid">
       		<article>
            <?php 
			wp_reset_query();
			$paged = (get_query_var('paged')) ? get_query_var('paged') : 1;
                $query = array(
                    'post_type' => 'post',
                    'paged' => $paged,
					'order' =>'DESC', 					
                );
                query_posts($query);
                if (have_posts()) : while (have_posts()) : the_post(); 
				
				 /* grab the url for the full size featured image */
        		$featured_img_url = get_the_post_thumbnail_url(get_the_ID(),'full'); 
				?>

              <section>
                <a href="<?php the_permalink() ?>"><?php the_post_thumbnail('medium', array('class'=>'img-responsive')); ?></a>
                <div class="list_content">
                    <h3><a href="<?php the_permalink() ?>"><?php the_title(); ?></a></h3>
                    <?php the_excerpt(); ?>
                    <div class="blog_social">
                    <a href="javascript:fbShare('<?php the_permalink(); ?>', '<?php the_title(); ?>', '<?php get_the_excerpt(); ?>', '<?php echo esc_url($featured_img_url); ?>', 520, 350)"><i class="fa fa-facebook-f"></i></a>
                    <a href="http://twitter.com/share?text=<?php the_title(); ?>&url=<?php the_permalink(); ?>" target="_blank" onclick="window.open(this.href,'targetWindow',

                                   'toolbar=no,

                                    location=no,

                                    status=no,

                                    menubar=no,

                                    scrollbars=yes,

                                    resizable=yes,

                                    width=500,

                                    height=350');

 return false;"><i class="fa fa-twitter"></i></a>
                    <a class="share-gplus" href="https://plusone.google.com/_/+1/confirm?hl=en-US&url=<?php the_permalink(); ?>" target="_blank"><i class="fa fa-google-plus"></i></a>
                    <a class="share-linkedin" href="http://www.linkedin.com/shareArticle?mini=true&amp;url=<?php the_permalink(); ?>&amp;title=<?php the_title(); ?>&amp;source=<?php bloginfo( 'name' ); ?>" target="_blank"><i class="fa fa-linkedin"></i></a>
                </div>
            </div>
              </section>
              
               <?php $count++; endwhile; endif; ?>
 
  
</article>

		<div class="blog_pagenavi">
			<?php wp_pagenavi(); ?>
        </div>
		</div>
        
        
      </div>
      <?php get_sidebar(); ?>
    </div>
  </div>
</section>
<?php get_footer(); ?>