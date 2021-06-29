<?php 

/*Template Name: Loan Search Layout*/



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
  <div class="container inner_wrapper loan_finder">
    <div class="row">
      <div class="col-md-12 col-sm-12">
        <h3 class="text-center">Loan Search</h3>
        <p class="text-center sub_heading">Use the below criteria to search for a loan. Click any of the lenders to see the full profile and products.</p>
        <script type="text/javascript">

            window.allLoanTypes = <?php echo json_encode(sloan_getLoansType());?>;
			</script>
	<script type="text/javascript">
            jQuery(document).ready(function($) {
                var $loan_type = $('select[name="loan_typejjj"]');
                if(window.allLoanTypes){
                    for(var i=0;i<window.allLoanTypes.length;i++){
                        $loan_type.append("<option value=" + window.allLoanTypes[i].id + ">" + window.allLoanTypes[i].name + "</option>");
                        if($("option[data-loan-cat='"+window.allLoanTypes[i].name+"']").length){
                            $("option[data-loan-cat='"+window.allLoanTypes[i].name+"']").addClass('product_class'+window.allLoanTypes[i].id);
                        }
                    }
                }
                $(".pd_type").hide();
                $( ".product_class"+$loan_type.val() ).show();
                jQuery(".product_class186").show();
            });
        </script>
        <form method="post" id="loanfinder"  class="global-filters">
          <div class="row">
            <div class="col-sm-3">
              <label>Loan Type:</label>
              <label class="support-select-label alternate">
             
                <select name="loan_type" class="filter" onchange='jQuery(".pd_type").hide();jQuery(".product_class"+this.value).show();jQuery("#producttype").val("all");'>
                
                <option value="186">Personal Loans</option>                            
                <option value="181">Business Loans</option>
                <option value="182">Mortgages</option>
                <option value="183">Auto Loans</option>
                <option value="184">Equipment Loans</option>
                <option value="185">Healthcare Loans</option>
                <option value="187">Payday Loans</option>
                <option value="189">Credit Cards</option>
                <option value="190">Trucks</option>
                <option value="191">Buses</option>
                <option value="192">Farming</option>
                <option value="193">Boats</option>
                <option value="6564">Secured</option>
                <option value="6565">Car Title</option>
                <option value="6567">Credit Building</option>
                
              
                </select>
              </label>
            </div>
            <div class="col-sm-3">
              <label>Product Type:</label>
              <label class="support-select-label alternate">
                <select class="filter" name="producttype" id="producttype">
                  <option value="all">All</option>
                  <option class="pd_type product_class186" value="personal_loan" data-loan-cat="Personal Loans">Personal Loan</option>
                  <option class="pd_type product_class186" value="home_equity_loans" data-loan-cat="Personal Loans">Home Equity Loans</option>
                  <option class="pd_type product_class186" value="flex_loan" data-loan-cat="Personal Loans">Flex Loan</option>
                  <option class="pd_type product_class186" value="debt_consolidation" data-loan-cat="Personal Loans">Debt Consolidation</option>
                  <option class="pd_type product_class181" value="merchant_cash_advance" data-loan-cat="Business Loans">Merchant Cash Advance</option>
                  <option class="pd_type product_class181 product_class186" value="line_of_credit" data-loan-cat="Business Loans">Line of Credit</option>
                  <option class="pd_type product_class181" value="invoice_factoring" data-loan-cat="Business Loans">Invoice Factoring</option>
                  <option class="pd_type product_class181" value="business_loan" data-loan-cat="Business Loans">Business Loan</option>
                  <option class="pd_type product_class182" value="mortgage" data-loan-cat="Mortgages">Mortgage</option>
                  <option class="pd_type product_class183 product_class184" value="truck_loan" data-loan-cat="Auto Loans">Truck Loan</option>
                  <option class="pd_type product_class183" value="recreational_vehicle_loan" data-loan-cat="Auto Loans">Recreational Vehicle Loan</option>
                  <option class="pd_type product_class183" value="car_loan" data-loan-cat="Auto Loans">Car Loan</option>
                  <option class="pd_type product_class183" value="auto_loan" data-loan-cat="Auto Loans">Auto Loan</option>
                  <option class="pd_type product_class184" value="repair_loan" data-loan-cat="Equipment Loans">Repair Loan</option>
                  <option class="pd_type product_class184" value="operating_lease" data-loan-cat="Equipment Loans">Operating Lease</option>
                  <option class="pd_type product_class184" value="equipment_loan" data-loan-cat="Equipment Loans">Equipment Loan</option>
                  <option class="pd_type product_class184" value="capital_lease" data-loan-cat="Equipment Loans">Capital Lease</option>
                  <option class="pd_type product_class185" value="medical_loan" data-loan-cat="Healthcare Loans">Medical Loan</option>
                  <option class="pd_type product_class185" value="health_loan" data-loan-cat="Healthcare Loans">Health Loan</option>
                  <option class="pd_type product_class187" value="payday_loan" data-loan-cat="Payday Loans">Payday Loan</option>
                  <option class="pd_type product_class190" value="trucks_&amp;_trailers" data-loan-cat="Trucks">Trucks &amp; Trailers</option>
                  <option class="pd_type product_class191" value="buses_&amp;_coaches" data-loan-cat="Buses">Buses &amp; Coaches</option>
                </select>
              </label>
            </div>
            <div class="col-sm-3">
              <label>Province:</label>
              <label class="support-select-label alternate">
                <select name="provinces" id="provinces-select" class="filter">
                  <option value="all">Any</option>
                  <option value="on">Ontario</option>
                  <option value="qc">Quebec</option>
                  <option value="ns">Nova Scotia</option>
                  <option value="nb">New Brunswick</option>
                  <option value="mb">Manitoba</option>
                  <option value="bc">British Columbia</option>
                  <option value="pe">Prince Edward Island</option>
                  <option value="sk">Saskatchewan</option>
                  <option value="ab">Alberta</option>
                  <option value="nl">Newfoundland and Labrador</option>
                  <option value="nt">Northwest Territories</option>
                  <option value="yt">Yukon</option>
                  <option value="nu">Nunavut</option>
                </select>
              </label>
            </div>
            <div class="col-sm-3">
              <label>Amount:</label>
              <label class="support-select-label alternate">
                <select name="amount" class="filter">
                  <option value="">Any</option>
                  <option value="500">$500</option>
                  <option value="1000">$1,000</option>                  
                  <option value="5000">$5,000</option>
                  <option value="10000">$10,000</option>
                  <option value="20000">$20,000</option>
                  <option value="30000">$30,000</option>
                  <option value="40000">$40,000</option>
                  <option value="50000">$50,000</option>
                  <option value="100000">$100,000</option>
                  <option value="300000">$300,000</option>
                  <option value="500000">$500,000</option>
                  <option value="1000000">$1M +</option>
                </select>
              </label>
            </div>
            <div class="col-xs-12">
              <div class="text-center">
                <input type="submit" value="Search" name="search" />
              </div>
            </div>
          </div>
          <div class="compare-loader" id="compare-loader"></div>
        </form>
        <div class="loan_search_result">
          <div class="ind_result" style="display:none;" id="loanfinder-wrap">
            <div class="table_header">
              <div class="row">
                <div class="col-md-2">Company</div>
                <div class="col-md-2">Amount</div>
                <div class="col-md-2">Interest Rate</div>
                <div class="col-md-2">Reviews</div>
                <div class="col-md-2">Terms</div>
                <div class="col-md-2"></div>
              </div>
            </div>
            <div id="loanfinder-result"> </div>
          </div>
          <div class="text-center"> <a href="<?php echo get_option('home'); ?>/pre-apply" class="blue_big_btn">Pre-Apply and we'll find a lender for you</a> </div>
        </div>
      </div>
    </div>
  </div>
</section>
<?php get_footer(); ?>
