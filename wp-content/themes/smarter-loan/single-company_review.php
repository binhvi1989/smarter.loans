<?php 
get_header(); 
$postId = get_the_ID();
?>
<section>
  <div class="container">
    <div class="row">
    	<div class="col-md-8">
      		<?php echo the_content();?>
  		</div>
		<div class="col-md-4">
		  	<div class="sidebar">
			  	<p><strong>Other Company Reviews</strong></p>
			  	<hr>
				<?php
					$posts = get_posts([
					  'post_type' => 'company_review',
					  'post_status' => 'publish',
					  'numberposts' => -1
					]);
					foreach($posts as $key => $val)
					{
						if(get_the_ID() != $val->ID)
						{
							echo '<a href="'.get_permalink($val->ID).'">'.$val->post_title.'</a><br>';
						}
					}
				?>
		  	</div>
		</div>
   </div>
</div>
</section>
<?php
get_footer(); 
?>
  
