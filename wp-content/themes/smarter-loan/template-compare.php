

<?php

/* Template Name: Compare lenders */



if ( ! defined( 'ABSPATH' ) ) { exit; }

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
        	<div class="col-md-8 col-md-offset-1">
            	<h1><?php the_title(); ?></h1>
                <?php if(get_field('title_sub-heading')){ ?>
                <p class="sub_heading_title"><?php the_field('title_sub-heading'); ?></p>
                <?php } ?>
            </div>
        </div>
    </div>
</div>
<?php } ?>
<style type="text/css">

    .compare-selectors{

            margin-top: 30px;

    }

    .compare-selectors:after{

            content: "";

            clear: both;

            display: block;

    }

    .compare-selectors .select-row{

            float: left;

            width: 50%;

            text-align: center;

    }

    #table_1_wrapper, #table_2_wrapper{

            display: none !important;

    }

    #compare_table{

            margin-top: 30px;

    }

    #compare_table th{

            text-align: center;

    }

    .compare-table-wrapper{

            margin: 0 -22px;

    }

    #compare_table th{

            border: none;

    }

    #compare_table td{

            width: 40% !important;

            text-align: center;

    }

    #compare_table td > div{

            margin: 0 auto;

    }

    #compare_table td:first-child{

            width: 20% !important;

            text-align: left;

            font-weight: bold;

    }

    #compare_table .go_to_link_btn{

            width: 100%;

    }

</style>

<script type="text/javascript">

    window.allLoanTypes = <?php echo json_encode(sloan_getLoansType());?>;
    window.allLenders = <?php echo json_encode(sloan_getLenders());?>;
    <?php if(isset($_POST['lender_1']) && isset($_POST['lender_2'])): $autoCompareData = array('lender_1'=> absint($_POST['lender_1']),'lender_2'=> absint($_POST['lender_2'])); ?>
        window.autoCompareData = <?php echo json_encode( $autoCompareData );?>;
    <?php endif; ?>
	</script>
	<script type="text/javascript">
   // (function($){
        jQuery(document).ready(function(){
           jQuery("#text-block-parent").text($("#text-block").text());
        });
   // })(jQuery);

</script>
<section>
  <div class="container inner_wrapper loan_finder compare_filter">
      <div class="row">
        <div class="col-md-12 col-sm-12">
           <h3 class="text-center">Compare Lenders</h3>
            <p class="text-center sub_heading">Compare Canada's best lenders</p>

            <div id="filter-block">
                <div class="global-filters">
                </div>

                <div class="loan_filter_wrapper">
                    <div class="row">
                        <div class="col-sm-5 col-md-5 col-xs-12">
                            <label class="title">First Lender</label>
                            <label class="support-select-label">
                                <select id="company_1" data-id="table_1" class="company-select filter">
                                        <option val="0"></option>
                                </select>
                            </label>
                        </div>
                        <div class="col-sm-5 col-md-5 col-xs-12">
                            <label class="title">Second Lender</label>
                            <label class="support-select-label">
                                <select id="company_2" data-id="table_2" class="company-select filter">
                                        <option val="0"></option>
                                </select>
                            </label>
                        </div>
                        <div class="col-sm-2 col-md-2 col-xs-12">
                            <input type="button" value="Compare" id="compare-button" class="compare-button" disabled="disabled">
                        </div>
                    </div>
                </div>
                    
                    <div class="compare-loader" id="compare-loader"></div>
            </div>
        </div>
        <div class="clearfix"></div>
            
            
        <div class="col-xs-12" >
            <div class="compare_result_wrapper" id="compare_table" style="display:none;">

            </div>
        </div>
        <div class="clearfix"></div>
            
<!--            <div class="compare-table-wrapper">
                <div class="table-responsive">
                        <table id="compare_table" class="table table-hover"></table>
                </div>
            </div>-->

            <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
                        <?php the_content(); ?>
                        <?php //comments_template( '', true ); ?>
                    <?php endwhile; ?>
            <?php endif; ?>
        </div>
      </div>
    </div>
</section>
<?php get_footer();