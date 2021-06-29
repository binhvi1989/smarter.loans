<?php 
/*Template Name : Blog List*/
get_header(); ?>


    

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
  <div class="container inner_wrapper">
    <div class="row">
      <div class="col-md-8 col-sm-12">
      
      	
       <div class="masonry-grid">
		 

<article>

  <section>
    <p>Lorem ipsum dolor sit amet, consectetur.</p>
  </section>
  
  <section>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error aliquid reprehenderit expedita odio beatae est.</p>
  </section>
  
  <section>
    <p>Lorem ipsum dolor sit amet, consectetur.</p>
  </section>
  
  <section>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis quaerat suscipit ad.</p>
  </section>

  <section>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem nihil alias amet dolores fuga totam sequi a cupiditate ipsa voluptas id facilis nobis.</p>
  </section>


  <section>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem ut debitis dolorum earum expedita eveniet voluptatem quibusdam facere eos numquam commodi ad iusto laboriosam rerum aliquam.</p>
  </section>
  
  <section>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
  </section>
  
  <section>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat  architecto quis tenetur fugiat veniam iste molestiae fuga labore!</p>
  </section>
  
  <section>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit accusamus tempore at porro officia rerum est impedit ea ipsa tenetur. Labore libero hic error sunt laborum expedita.</p>
  </section>
  
  <section>
    <p>Lorem ipsum dolor sit.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis quaerat suscipit ad.</p>
  </section>
  
  <section>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima asperiores eveniet vero velit eligendi aliquid in.</p>
  </section>
  
  <section>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus dolorem maxime minima animi cum.</p>
  </section>
  
</article>
		</div>
        
        
      </div>
      <?php get_sidebar(); ?>
    </div>
  </div>
</section>
<?php get_footer(); ?>