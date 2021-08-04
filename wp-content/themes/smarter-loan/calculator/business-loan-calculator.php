<style>
  .highcharts-credits{display:none;}
  .highcharts-xaxis-labels text{visibility: hidden;}
  .highcharts-axis.highcharts-xaxis{display:none;}
  .highcharts-contextbutton{display:none;}
  .highcharts-grid-line {
    fill: none;
}
.slider {
   
  -webkit-appearance: none;

  width: 100%;
  height: 15px;
  border-radius: 5px;
  background: linear-gradient(to right, #fd0012 0%, #fd0012 0%, #d3d3d3 0%, #d3d3d3 100%);
  outline: none;
  opacity: 1;
  -webkit-transition: .2s;
  transition: opacity .2s;
  transition: background 450ms ease-in;
  border: solid 1px #00b300;
}
 
.slider:hover {
  opacity: 1;
}

.slider::-webkit-slider-thumb {
   background-image: url('<?php echo get_template_directory_uri()."/images/arrow-red.png";?>'); 
  -webkit-appearance: none;
  appearance: none;
  width: 27px;
  height: 25px;
  cursor: pointer;
  background-color: transparent;
}

.slider::-moz-range-thumb {
   background-image: url('<?php echo get_template_directory_uri()."/images/arrow-red.png";?>'); 
   -webkit-appearance: none;
  appearance: none;
  width: 27px;
  height: 25px;
  border: 0;
  cursor: pointer;
  background-color: transparent;
}
.header.open .lt4-ChevronRight img{ transform: rotate(-90deg); }

/** FF*/
input[type="range"]::-moz-range-progress {
  background-color: #E93E51; 
}
input[type="range"]::-moz-range-track {  
  background-color: #d3d3d3;
}
/* IE*/
input[type="range"]::-ms-fill-lower {
  background-color: #E93E51; 
}
input[type="range"]::-ms-fill-upper {  
  background-color: #d3d3d3;
}
.invalid_value{
    max-width: 1140px;
    display: block;
    margin: 15px auto 0;
}
</style> 
<div class="master-chart main_section">
    <div class="container">
        <center><h1 class="section-title">Business Loan Calculator</h1></center>
    </div>
    <div class="container">
        <div class="row">
                
                <div class="main main_container">

                    <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                        <div class="loan_slider_main">
                            <div class="loan-pay-slider">
                                <label class="text-center slider_des">How much is your loan amount?</label>
                                <div class="slider_des_price">
                                    <span class="pull-left text_descrip chart_detailtxt">$5k</span><span class="text-center price slider_text_desc">$30,000</span><span class="pull-right text_info chart_detailtxt">$500K</span>
                                </div>
                                <input type="range" min="5000" max="500000" step="500" value="30000" data-orientation="vertical" class="slider" id="price-range"/>

                            </div>
                            <div class="loan-pay-slider hide">
                                <label class="text-center slider_des">Your downpayment</label>
                                <div class="slider_des_price">
                                    <span class="pull-left text_descrip">$0k</span><span class="text-center downpayment slider_text_desc">$5,000</span><span class="pull-right text_descrip">$250K</span>
                                </div>
                                <input type="range" min="0" max="0" step="0" value="0" data-orientation="vertical" class="slider" id="downpayment-range"/>
                            </div>
                            <div class="loan-pay-slider">
                                <label class="text-center slider_des">What is your estimated interest rate?</label>
                                <div class="slider_des_price">
                                    <span class="pull-left text_descrip">1%</span><span class="text-center interest-rate slider_text_desc">10%</span><span class="pull-right text_descrip">50%</span>
                                </div>
                                <input type="range" min="1" max="50" value="10" step="0.1" data-orientation="vertical" class="slider" id="interest-range"/>
                            </div>
                            <div class="loan-pay-slider">
                                <label class="text-center slider_des">What is your loan term?</label>
                                <div class="slider_des_price">
                                    <span class="pull-left text_descrip">1 year</span><span class="text-center year-term slider_text_desc">2 year term</span><span class="pull-right text_descrip">5 years</span>
                                </div>
                                <input type="range" min="1" max="5" value="2" data-orientation="vertical" class="slider" id="loan-term-range"/>
                            </div>
                            <div class="loan-pay-slider loan_monthly_detail">
                                <label class="slider_monthly_payment">Monthly Payment:</label>
                                <span class="payment_loan_detail">$</span></span><span class="payment_loan_detail payment"></span><br>
                                <label class="slider_totalinterest_loan">Total Cost Of Loan:</label>
                                <span class="payment_intrest_detail">$</span><span class="payment_intrest_detail totalinterestyear"></span>
                            </div>
                        </div>

                    </div>
                    <div class="col-lg-7 col-md-7 col-sm-12 col-xs-12">
                        <div class="slider_chart">
                            <div id="container" style="height: 500px; max-width: 100%; margin: 0px auto;"></div>
                        </div>
                    </div>

                </div>
        </div>
        <div class="border-img-loanchart"></div>
        <div class="row">
            <div class="loanchart-payment-descrip col-xs-12">
                <center><h2 class="section-title payment_desc_loan">Your Payment Details</h2></center>

                <div id="container-bar1"></div>
            </div>
        </div>
        <div class="border-img-loanchart"></div>
        <div class="row">
            <div class="loanchart-payment-descrip col-xs-12 hide">
                <center><h2 class="section-title">Your Payment Details</h2></center>
                <div class="chart-main-title"> "Below you will find a detailed breakdown of your payments in each month and each year. Find out how much interest, principal and total you'll be paying with the information you entered. Change your term length, interest rate and loan amount to see how it impacts your payment breakdown."</div>

                <div id="container-bar" style="min-width: 310px; height: 400px; margin: 0 auto"></div>
            </div>
        </div>
        <div id="Result" class="row"></div>
    </div>
</div>
<script src="<?php bloginfo("template_url")?>/calculator/js/highcharts.js"></script>
<script src="<?php bloginfo("template_url")?>/calculator/js/exporting.js"></script>
<script>
       (function($){
        function loadchart() {
            // With JQuery
            var chart = Highcharts.chart('container', {
                chart: {
                    type: 'area',
                    //inverted: true,
                    events: {
                        load: function (e) {
                            var chart = this;
                            // get all values
                            var pricevalue = $("#price-range").val();
                            var downpaymentvalue = $("#downpayment-range").val();
                            var interestvalue = $("#interest-range").val();
                            var loantermvalue = $("#loan-term-range").val();
                            var returndata = getaxisloaddata(pricevalue, downpaymentvalue, interestvalue, loantermvalue);
                            chart.update({
                                series: [{
                                        data: returndata
                                    }]
                            });
                            //Load event set default points
                        }
                    }

                },
                rangeSelector: {
                    selected: 10
                },
                title: {
                    text: ''
                },
                tooltip: {
                    //enabled: false,

                    split: true,
                    formatter: function () {
                        return '';
                    }

                },
                xAxis: {
                    gridLineWidth: 1,
                    gridLineColor: "rgba(211, 211, 211,0.5)",
                    zoneAxis: 'x',
                    gridZIndex: 99,
                    crosshair: {
                        color: '#e93e51',
                        dashStyle: 'solid',
                        width: 1,
                        zIndex: 100,
                        snap: false,
                        enabled: true,
                        labelFormatter: e => {
                            return "Hello"
                        }
                    },
                    labels: {
              rotation: 0,
              overflow: 'allow',
              step: 1,
              style: {
                fontSize: 9,
                fontWeight:600,
                fontFamily: "Open Sans, sans-serif"
            }
            },
                    categories: ["Month1", "Month2", "Month3", "Month4", "Month5", "Month6", "Month7", "Month8", "Month9", "Month10", "Month11", "Month12", "Month13", "Month14", "Month15", "Month16", "Month17", "Month18", "Month19", "Month20", "Month21", "Month22", "Month23", "Month24"],
                    tickmarkPlacement: 'on',
                    title: {
                        enabled: true
                    }
                },
                yAxis: {
                  min: 0,
                  max: 500000,
                  visible: false,
                    labels: {
                        formatter: function () {
                            return " ";
                        }
                    }
                },
                plotOptions: {
                    area: {
                        stacking: 'normal',
                        lineColor: "rgba(211, 211, 211,0.5)",
                        lineWidth: 1,
                        //marker styling
                        marker: {
                            enabled: false,
                            symbol: 'circle',
                            states: {
                                hover: {
                                    fillColor: '#e93e51',
                                    lineWidth: 0,
                                }
                            }
                        }
                    },
                    //get xaxis value in hover mouse
                    series: {
                        point: {
                            events: {
                                mouseOver: function () {
                                    var chart = this.series.chart;
                                    $(this.series.chart.xAxis[0].labelGroup.element.childNodes[this.x]).css("visibility", "visible");
                                    $(this.series.chart.xAxis[0].labelGroup.element.childNodes[this.x]).text(this.category);

                                    //Hover function call
                                     // get all values
                                        var pricevalue = $("#price-range").val();
                                        var downpaymentvalue = $("#downpayment-range").val();
                                        var interestvalue = $("#interest-range").val();
                                        var loantermvalue = $("#loan-term-range").val();
                                        var monthvalue = this.category;
                                     gethoverdata(pricevalue, downpaymentvalue, interestvalue, loantermvalue,monthvalue);
                                },
                                mouseOut: function () {
                                    $(this.series.chart.xAxis[0].labelGroup.element.childNodes[this.x]).css('visibility', 'hidden');
                                }
                            }
                        },
                    },

                },

                series: [{
                        showInLegend: false,
                        color: "rgba(0,0,0,0.8)",
                        negativeColor: '#eab562',
                        //data: [300,290,280,270,260,250,240,230,220,210,200,190,180,170,160,150,140,130,120,110,100,90,80,70,60,50,40,30,20,10]
                    }]
            });

            var columnChart = Highcharts.chart('container-bar', {
                chart: {
                    type: 'column',
                },
                title: {
                    text: ''
                },
                legend: {
              align: 'center'
              
          },
                /*subtitle: {
                    text: 'MONTHLY PAYMENT'
                },*/
                xAxis: {
                    gridLineWidth: 1,
                    gridLineColor: "rgba(0,0,0,0.1)",
                    zoneAxis: 'x',
                    gridZIndex: 99,
                    categories: ['2019', '2020', '2021'],
                    crosshair: true
                },
                yAxis: {
                    gridLineColor: "rgba(0,0,0,0.1)",
                    // min: 100,
                    title: {
                        text: ''
                    },
                    tickInterval: 5000,
                    labels : {
                        style:{
                      fontFamily: "Open Sans, sans-serif",
                      fontWeight: "600",
                      fontSize: "14px"
                },
                        formatter: function () {
                      return '$'+this.value.toLocaleString() 
                  }
                
                    }
                    
                },
                tooltip: { 
                  formatter: function() {return ' <div class="tooltip-graph">'+ 
                      '<span class="year-tooltip">' + this.x + '</span><br />' +
                      '<span class="blank-tooltip">' + this.x + '</span><br />' +
                        'Principal: <span class="principal-tooltip">$' + this.point.principal.toLocaleString() + '</span><br />' +
                        'Interest:  <span class="interest-tooltip">$' + this.point.interest.toLocaleString() + '</span><br />' +
                        'Balance:  <span class="balance-tooltip">$' + this.point.balance.toLocaleString() + '</span><br /><div>'
                    },
                    // headerFormat: '<span style="font-size:18px;font-weight:700">{point.key}</span><table>',
                    // pointFormat: '<tr style="color:#fff;background: rgba(0,0,0,.7)"><td style="padding:0;font-size:14px;font-weight:700">{series.name}: </td>' +
                    //     '<td style="padding:0;font-size:14px;font-weight:700"><b>${point.y:.2f}</b></td></tr>',
                    // footerFormat: '</table>',
                    // shared: true,
                    // useHTML: true,
                     backgroundColor: "rgba(222, 222, 222, 1)", //"rgba(19, 37, 84, 0.7)",
                     borderColor: 'rgba(0,0,0,0)',
                     borderRadius: 10,
                     borderWidth: 0,
                     className: "v-tooltip",
                     padding: 12,
                     shadow: false,
                     style: {"color": "#000", "cursor": "default", "fontSize": "13px", "pointerEvents": "none", "whiteSpace": "nowrap", "fontFamily": "Roboto Slab, serif", "fontWeight": "700"}

                },
                plotOptions: {
                    column: {
                        pointPadding: 0.2,
                        borderWidth: 0,
                    }
                },
                series: [
                    {
                    name: 'Principal',
                    data: [{
                        y: 12033.04,
                        principal: 12033.04,
                        interest: 2475,
                        balance: 1111,
                    }, {
                        y: 21460,
                        principal: 21460,
                        interest: 3410,
                        balance: 11111,
                    }, {
                        y: 22558,
                        principal: 22558,
                        interest: 2312,
                        balance: 9999,
                    }],
                    color: 'rgb(233, 62, 81)',
                },{
                    name: 'Interest',
                    data: [{
                        y: 2475,
                        principal: 12033.04,
                        interest: 2475,
                        balance: 1111,
                    }, {
                        y: 3410,
                        principal: 21460,
                        interest: 3410,
                        balance: 11111,
                    }, {
                        y: 2312,
                        principal: 22558,
                        interest: 2312,
                        balance: 9999,
                    }],
                    color: 'rgba(233, 62, 81, 0.4)',
                }],
            });

            //mouch hover event
            $('#container').bind('mousemove touchmove touchstart', function (e) {
                var chart,
                        point,
                        i,
                        event;

                for (i = 0; i < Highcharts.charts.length; i = i + 1) {
                    chart = Highcharts.charts[i];
                    event = chart.pointer.normalize(e.originalEvent); // Find coordinates within the chart
                    point = chart.series[0].searchPoint(event, true); // Get the hovered point

                    if (point) {
                        point.highlight(e);
                    }
                }
            });

            //Highchart point
            Highcharts.Point.prototype.highlight = function (event) {
                this.onMouseOver(); // Show the hover marker
                // this.series.chart.tooltip.refresh(this); // Show the tooltip
                // this.series.chart.xAxis[0].drawCrosshair(event, this); // Show the crosshair
            };

            //highchart reset
            Highcharts.Pointer.prototype.reset = function () {
                return undefined;
            };

            //get xaxis data
            function getaxisloaddata(pricevalue, downpaymentvalue, interestvalue, loantermvalue) {
                var balance = parseFloat(pricevalue - downpaymentvalue);
                var interestRate = parseFloat(interestvalue / 100.0);
                var terms = loantermvalue * 12;
                var chartdata = [];
                var monthlyRate = interestRate / 12;

                //Calculate the payment
                var payment = balance * (monthlyRate / (1 - Math.pow(1 + monthlyRate, -terms)));
                
                for (var count = 0; count < terms; ++count) {
                    var interest = 0;
                    var monthlyPrincipal = 0;
                    interest = balance * monthlyRate;
                    monthlyPrincipal = payment - interest;
                    totalBalance = balance - monthlyPrincipal;
                    monthlyPayment = monthlyPrincipal + interest;
                    if(totalBalance <= 0 ){
            totalBalance = 0.00;
                    }
                    chartdata.push(totalBalance);
                    // interest.toFixed(2);
                    balance = balance - monthlyPrincipal;
                }
                return chartdata;
            }

            function getbarchartdata(pricevalue, downpaymentvalue, interestvalue, loantermvalue) { 

                    var balance = parseFloat(pricevalue - downpaymentvalue);
                    var interestRate = parseFloat(interestvalue / 100.0);
                    var terms = loantermvalue * 12;
                    var monthlyRate = interestRate / 12;

                    //Calculate the payment
                    var payment = balance * (monthlyRate / (1 - Math.pow(
                            1 + monthlyRate, -terms)));
                    var curYear = new Date();
                    var yearcount = 0;
                    var yearArray = [];
                    var PrincipalArray = [];
                    var InterestArray = [];
                    var BalanceArray = [];
                    for (var count = 0; count < loantermvalue; ++count) {   
                        var interest = 0;  
                        monthlyPrincipal = payment - interest;
                        yearArray.push(curYear.getFullYear() + yearcount);
                        yearcount++;                        
                    }
                    // console.log(interest);

                    yearArray.push(curYear.getFullYear() + yearcount);

                    $.each(yearArray, function( index, year ) {
                      var totalPrinciplecount = 0;
                      var totalInterestcount = 0;
                      var totalBalancecount=0;
                        $('.table-responsive td').each(function(){
                            if($(this).data('monthlyprincipal') && $(this).data('year') == (year+1)){
                                totalPrinciplecount += parseFloat($(this).data('monthlyprincipal'));
                            }

                            if($(this).data('interest') && $(this).data('year') == (year+1)){
                                totalInterestcount += parseFloat($(this).data('interest'));
                            }

                            if($(this).data('totalbalance') && $(this).data('month') == 'December' && $(this).data('year') == (year+1)){
                                totalBalancecount += parseFloat($(this).data('totalbalance'));
                            }
                        });
                        BalanceArray.push(parseFloat(totalBalancecount.toFixed(2)));
                        PrincipalArray.push({
                            'y': parseFloat(totalPrinciplecount.toFixed(2)),
                            'principal': parseFloat(totalPrinciplecount.toFixed(2)),
                            'interest': parseFloat(totalInterestcount.toFixed(2)),
                            'balance': (totalBalancecount != 0) ? parseFloat(totalBalancecount.toFixed(2)) : totalBalancecount.toFixed(2),
                        });
                        InterestArray.push({
                            'y': parseFloat(totalInterestcount.toFixed(2)),
                            'principal': parseFloat(totalPrinciplecount.toFixed(2)),
                            'interest': parseFloat(totalInterestcount.toFixed(2)),
                            'balance': (totalBalancecount != 0) ? parseFloat(totalBalancecount.toFixed(2)) : totalBalancecount.toFixed(2),
                        });
                    });
                    // console.log(PrincipalArray);
                    columnChart.xAxis[0].setCategories(yearArray);
                    columnChart.update({
                        series: [{
                            name: 'Principal',
                            data: PrincipalArray,
                            color: 'rgb(233, 62, 81)'

                        }, {
                            name: 'Interest',
                            data: InterestArray,
                            color: 'rgba(233, 62, 81, 0.3)',
                        }]
                    });                  

                }

            //Hover Function
            function gethoverdata(pricevalue, downpaymentvalue, interestvalue, loantermvalue,monthvalue) {
                var monthnameint = monthvalue.match(/\d+/);
                var finalindex = parseInt(monthnameint[0]);
                    var balance = parseFloat(pricevalue - downpaymentvalue);
                    var interestRate = parseFloat(interestvalue / 100.0);
                    var terms = loantermvalue * 12;
                    var monthlyRate = interestRate / 12;
                    var totalPrincipalPaid= 0;
                    var totalInterest = 0;

                    hoverdata = [];

                    //Calculate the payment
                    var payment = balance * (monthlyRate / (1 - Math.pow(
                            1 + monthlyRate, -terms)));

                    for (var count = 0; count < terms; ++count) {
                       
                        var interest = 0;
                        var monthlyPrincipal = 0;
                        
                        interest = balance * monthlyRate;
                        totalInterest += interest;
                        monthlyPrincipal = payment - interest;
                        totalPrincipalPaid += monthlyPrincipal;
                        totalBalance = balance - monthlyPrincipal;
                        monthlyPayment = monthlyPrincipal + interest
                        if(totalBalance <= 0){
                          totalBalance = 0.00;
                        }
                        hoverdata.push({'payment':monthlyPayment.toLocaleString(undefined, { minimumFractionDigits: 2,maximumFractionDigits: 2 }),'principal':monthlyPrincipal.toLocaleString(undefined, { minimumFractionDigits: 2,maximumFractionDigits: 2 }),'interest':interest.toLocaleString(undefined, { minimumFractionDigits: 2,maximumFractionDigits: 2 }),'totalinterestpaid':totalInterest.toLocaleString(undefined, { minimumFractionDigits: 2,maximumFractionDigits: 2 }),'totalprincipal':totalPrincipalPaid.toLocaleString(undefined, { minimumFractionDigits: 2,maximumFractionDigits: 2 }),'totalbalance':totalBalance.toLocaleString(undefined, { minimumFractionDigits: 2,maximumFractionDigits: 2 })});
                        balance = balance - monthlyPrincipal;                       
                        
                    }    
                    var finalarray=hoverdata[finalindex-1];
                    $(".payment").text(finalarray["payment"]);    
                    $(".principal").text(finalarray["principal"]);
                    $(".interest").text(finalarray["interest"]);
                    $(".totalinterest").text(finalarray["totalinterestpaid"]);
                    $(".totalprincipal").text(finalarray["totalprincipal"]);
                    $(".totalbalance").text(finalarray["totalbalance"]);            
                }
            $(document).ready(function () { 

              // .firefox
        var isFF = true;
        var addRule = (function (style) {
          var sheet = document.head.appendChild(style).sheet;
          return function (selector, css) {
            if ( isFF ) {
              if ( sheet.cssRules.length > 0 ) {
                sheet.deleteRule( 0 );
              }
            
              try {
                sheet.insertRule(selector + "{" + css + "}", 0);
              } catch ( ex ) {
                isFF = false;
              }
            }    
          };
        })(document.createElement("style"));


        $('.slider').each(function(){
          sliderCSSDynamic($(this));
        });

        // .chrome styling
        $( '.slider' ).on( 'input', function( ) {
          //sliderCSSDynamic($(this));
        });


                tableElementClose();

                 //button append
                $("#Result").before("<div class='btn_close_tbl amorization pull-right hide'><button id='show-hidden-table' class='btn btn-blue amortization-table-btn'>Close Payment Schedule Table</button></div>");    

                // get all values
                var pricevalue = $("#price-range").val();
                var downpaymentvalue = $("#downpayment-range").val();
                var interestvalue = $("#interest-range").val();
                var loantermvalue = $("#loan-term-range").val();
                //var monthvalue = "month1";
                // call function
                getValues(pricevalue, downpaymentvalue, interestvalue, loantermvalue);

                // price range slider init and change method
                var pricerangeslider = document.getElementById("price-range");
                pricerangeslider.oninput = function () {
                  //get all value
                    downpaymentvalue = $("#downpayment-range").val();
                    interestvalue = $("#interest-range").val();
                    loantermvalue = $("#loan-term-range").val();

                  if(parseInt(this.value) < parseInt(downpaymentvalue)){
                      $('#price-range').val(downpaymentvalue);
                      $('#price-range').trigger(' ');
                    }
                    $(".price").text("$" + parseFloat(this.value).toLocaleString());
                    
                    // $("#downpayment-range").attr('max',this.value); 
                    
                    // call function
                    sliderCSSDynamic($(this));
                    getValues(this.value, downpaymentvalue, interestvalue, loantermvalue);
                    getbarchartdata(this.value, downpaymentvalue, interestvalue, loantermvalue);
                    //get xaxis data value change
                    getaxischangedata(this.value, downpaymentvalue, interestvalue, loantermvalue);

                }

                // downpayment slider init and change method
                var downpaymentslider = document.getElementById("downpayment-range");
                downpaymentslider.oninput = function () {
                  pricevalue = $("#price-range").val();
          interestvalue = $("#interest-range").val();
                    loantermvalue = $("#loan-term-range").val();
                  if(parseInt(this.value) > parseInt(pricevalue)){
                      $('#downpayment-range').val(pricevalue);
                      $('#downpayment-range').trigger('change');
                    }
                  $(".downpayment").text("$" + parseFloat(this.value).toLocaleString());
                    
                    // call function
                    sliderCSSDynamic($(this));
                    getValues(pricevalue, this.value, interestvalue, loantermvalue);
                    getbarchartdata(pricevalue, this.value, interestvalue, loantermvalue);
                    //get xaxis data value change
                    getaxischangedata(pricevalue, this.value, interestvalue, loantermvalue);
                }

                // interest rate slider init and change method
                var interestlider = document.getElementById("interest-range");
                interestlider.oninput = function () {
                    $(".interest-rate").text(this.value + "%");
                    //get all value
                    pricevalue = $("#price-range").val();
                    downpaymentvalue = $("#downpayment-range").val();
                    loantermvalue = $("#loan-term-range").val();
                    // call function
                    sliderCSSDynamic($(this));
                    getValues(pricevalue, downpaymentvalue, this.value, loantermvalue);
                    getbarchartdata(pricevalue, downpaymentvalue, this.value, loantermvalue);
                    //get xaxis data value change
                    getaxischangedata(pricevalue, downpaymentvalue, this.value, loantermvalue);
                }

                // loan term range slider init and change method
                var loantermslider = document.getElementById("loan-term-range");
                loantermslider.oninput = function () {
                    $(".year-term").text(this.value + " year term");
                    //get all value
                    pricevalue = $("#price-range").val();
                    downpaymentvalue = $("#downpayment-range").val();
                    interestvalue = $("#interest-range").val();
                    // call function
                    sliderCSSDynamic($(this));
                    getValues(pricevalue, downpaymentvalue, interestvalue, this.value);
                    getbarchartdata(pricevalue, downpaymentvalue, interestvalue, this.value);
                    //get xaxis data value change
                    getaxischangedata(pricevalue, downpaymentvalue, interestvalue, this.value);
                }

                // calculate Amortization Table
                function getValues(pricevalue, downpaymentvalue, interestvalue, loantermvalue) {
                    //button click gets values from inputs
                    var balance = parseFloat(pricevalue - downpaymentvalue);
                    var interestRate = parseFloat(interestvalue / 100.0);
                    var terms = loantermvalue * 12;

                    //set the div string
                    var div = document.getElementById("Result");
                    var div1 = document.getElementById("container-bar1");

                    //in case of a re-calc, clear out the div!
                    div.innerHTML = "";
                    div1.innerHTML = "";

                    //validate inputs - display error if invalid, otherwise, display table
                    var balVal = validateInputs(balance);
                    var intrVal = validateInputs(interestRate);

                    if (balVal && intrVal) {
                        //Returns div string if inputs are valid
                        div.innerHTML += amort(balance, interestRate, terms);
                        div1.innerHTML += amortTableData(balance, interestRate, terms);
                        tableElementClose();
                    } else {
                        //returns error if inputs are invalid
                        div.innerHTML += "<span class='invalid_value'>Please Check your inputs and retry - invalid values.</span>";
                        $(".payment").text('0.00');
                        $(".totalinterestyear").text('0.00');
                    }
                }

                /**
                 * Amort function:
                 * Calculates the necessary elements of the loan using the supplied user input
                 * and then displays each months updated amortization schedule on the page
                 */
                function amort(balance, interestRate, terms) {
                    //Calculate the per month interest rate
                    var monthlyRate = interestRate / 12;

                    //Calculate the payment
                    var payment = balance * (monthlyRate / (1 - Math.pow(1 + monthlyRate, -terms)));
                    
                    //begin building the return string for the display of the amort table
                    for (var count = 0; count < terms; ++count) {
                        //in-loop interest amount holder
                        var interest = 0;
                        var totalInterest = 0;
                        var totalPrincipalPaid= 0;

                        //in-loop monthly principal amount holder
                        var monthlyPrincipal = 0;
                        interest = balance * monthlyRate;
                        totalInterest += interest;
                        monthlyPrincipal = payment - interest;
                        totalBalance = balance - monthlyPrincipal;
                        monthlyPayment = monthlyPrincipal + interest;
                        totalPrincipalPaid += monthlyPrincipal;
                        // console.log(interest * terms);
                        
                        var finalMontholyPayment = $('.payment').text(monthlyPayment.toLocaleString(undefined, { minimumFractionDigits: 2,maximumFractionDigits: 2 }));                       
                        
                        var result =
                                "<div class='tbl_bg_graph'><div class='total_payment'> <lable>Payment: <span>$</span><span class='payment'>" + monthlyPayment.toLocaleString(undefined, { minimumFractionDigits: 2,maximumFractionDigits: 2 }) + "</span></lable><br>" +
                                "<lable>Principal: <span>$</span><span class='principal'>" + monthlyPrincipal.toLocaleString(undefined, { minimumFractionDigits: 2,maximumFractionDigits: 2 }) + "</span></lable><br>" +
                                "<lable>Interest: <span>$</span><span class='interest'>" + interest.toLocaleString(undefined, { minimumFractionDigits: 2,maximumFractionDigits: 2 }) + "</span></lable></div><br>" +
                                "<div class='total_payment_interest'><lable>Total Interest paid: <span class='loan_red'>$</span><span class='totalinterest'>" + totalInterest.toLocaleString(undefined, { minimumFractionDigits: 2,maximumFractionDigits: 2 }) + "</span></lable><br>" +
                                "<lable>Total Principal Paid: <span class='loan_red'>$</span><span class='totalprincipal'>" + totalPrincipalPaid.toLocaleString(undefined, { minimumFractionDigits: 2,maximumFractionDigits: 2 }) + "</span></lable><br>" +
                                "<lable>Total Balance: <span class='loan_red'>$</span><span class='totalbalance'>" + totalBalance.toLocaleString(undefined, { minimumFractionDigits: 2,maximumFractionDigits: 2 }) + "</span></lable><br></div></div>";
                        var curYear = new Date();
                    }


                    //add header row for table to return string
                    result += "<div class='container slider_main slider_loandescpay hidden-table hide'><div class='row'><div class='col-xs-12'><div class='table-responsive'><table border='1' class='table'><thead><tr class='header open'><th width='20%'><label class='table-trigger'><span class='lt4-ChevronRight'><img src='<?php echo get_template_directory_uri()."/images/arrow-down.png";?>' /></span>" + curYear.getFullYear() + "</label></th><th width='16%'><big>Payment</big></th>" +
                            "<th width='16%'><big>Principal</big></th><th width='16%'><big>Interest Paid</big></th><th width='16%'><big>Total Interest</big></th><th width='16%'><big>Balance</big></th></thead>";
                    /**
                     * Loop that calculates the monthly Loan amortization amounts then adds 
                     * them to the return string 
                     */
                    var totalInterest = 0;
                    var month;
                    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                    var today = new Date();
                    var dateObject;
                    var month;
                    var yearcount = 1;
                    var yearPrincipleTotal = 0;
                    for (var count = 0; count < terms; ++count) {
                        //in-loop interest amount holder
                        var interest = 0;

                        //in-loop monthly principal amount holder
                        var monthlyPrincipal = 0;
                        interest = balance * monthlyRate;
                        totalInterest += interest;
                        monthlyPrincipal = payment - interest;
                        totalBalance = balance - monthlyPrincipal;
                        monthlyPayment = monthlyPrincipal + interest;
                        
                        if(totalBalance <= 0){
                          totalBalance = 0.00;
                        }

                        yearPrincipleTotal += parseFloat(monthlyPrincipal.toFixed(2));
                        if (month == 'December') {
                            result += "</div>";
                            result += "</table></div></div>";
                            result += "<div class='col-xs-12'><div class='table-responsive'><table border='1' class='table'><thead><tr class='header open'><th width='20%'><label class='table-trigger'><span class='lt4-ChevronRight'><img src='<?php echo get_template_directory_uri()."/images/arrow-down.png";?>' /></span>" + (curYear.getFullYear() + yearcount) + "</label></th><th width='16%'><big>Payment</big></th>" +
                                    "<th width='16%'><big>Principal</big></th><th width='16%'><big>Interest Paid</big></th><th width='16%'><big>Total Interest</big></th><th width='16%'><big>Balance</big></th></thead>";
                            yearcount++;
                            yearPrincipleTotal = 0; 
                        }
                        

                        //start a new table row on each loop iteration
                        result += "<tr align=center>";

                        //display the month number in col 1 using the loop count variable month   
                        dateObject = new Date(today.getFullYear(), today.getMonth() + count + 1, 1);
                        month = monthNames[dateObject.getMonth()];
                        result += "<td>" + month + "</td>";

                        //code for displaying in loop balance payment
                        result += "<td> $" + monthlyPayment.toLocaleString(undefined, { minimumFractionDigits: 2,maximumFractionDigits: 2 }) + "</td>";

                        //calc the in-loop monthly principal and display Principal  
                        result += "<td data-monthlyPrincipal="+monthlyPrincipal.toFixed(2)+" data-year="+(curYear.getFullYear()+yearcount)+"> $" + monthlyPrincipal.toLocaleString(undefined, { minimumFractionDigits: 2,maximumFractionDigits: 2 }) + "</td>";

                        //calc the in-loop interest amount and display Interest   
                        result += "<td data-interest="+interest.toFixed(2)+" data-year="+(curYear.getFullYear()+yearcount)+"> $" + interest.toLocaleString(undefined, { minimumFractionDigits: 2,maximumFractionDigits: 2 }) + "</td>";

                        // Toatl Interest   
                        result += "<td> $" + totalInterest.toLocaleString(undefined, { minimumFractionDigits: 2,maximumFractionDigits: 2 }) + "</td>";

                        // Total balance
                        if(totalBalance != 0){
                          result += "<td data-totalBalance="+parseFloat(totalBalance.toFixed(2))+" data-month="+month+" data-year="+(curYear.getFullYear()+yearcount)+"> $" + totalBalance.toLocaleString(undefined, { minimumFractionDigits: 2,maximumFractionDigits: 2 }) + "</td>";  
                        }else{
                          result += "<td data-totalBalance="+totalBalance.toFixed(2)+" data-month="+month+" data-year="+(curYear.getFullYear()+yearcount)+"> $" + totalBalance.toLocaleString(undefined, { minimumFractionDigits: 2,maximumFractionDigits: 2 }) + "</td>";
                        }
                        

                        //end the table row on each iteration of the loop 
                        result += "</tr>";

                        //update the balance for each loop iteration
                        balance = balance - monthlyPrincipal;
                    }

                    //Final piece added to return string before returning it - closes the table
                    result += "</table></div></div></div></div>";

                    //returns the concatenated string to the page
                    return result;
                }

                function amortTableData(balance, interestRate, terms) {
                    //Calculate the per month interest rate
                   var monthlyRate = interestRate / 12;

                    //Calculate the payment
                    var payment = balance * (monthlyRate / (1 - Math.pow(1 + monthlyRate, -terms)));
                     // console.log(terms);
                    
                    //begin building the return string for the display of the amort table
                    // var result ;
                    var curYear = new Date();
                    result = "<div class='container slider_main slider_loandescpay hidden-table'><div class='row'><div class='col-xs-12'><div class='table-responsive' style='border: 1px solid #ddd'><table border='1' class='table'><thead><tr><th width='20%'><big class='loan_year_hide'>Years</big></th><th width='16%'><big>Principal</big></th>" +
                            "<th width='16%'><big>Interest</big></th><th width='16%'><big>Balance</big></th></thead>";
                    /**
                     * Loop that calculates the monthly Loan amortization amounts then adds 
                     * them to the return string 
                     */
                    var totalInterest = 0;
                    // var yearlyPrincipalData = 0;
                    var month;
                    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                    var today = new Date();
                    var dateObject;
                    var month;
                    var yearcount = 0;
                    var yearcount1 = 0;
                    var yearPrincipleTotal = 0;
                    var yearlyData = terms / 12;
                    var yearArray = [];
                    for (var count = 0; count < yearlyData; ++count) {   
                        yearArray.push(curYear.getFullYear() + yearcount);
                        //yearcount++;                        
                    }
                    yearArray.push(curYear.getFullYear() + yearcount);
                    // console.log(yearArray);
                    //var yearlyData = terms / 12;
                    // $.each(yearArray, function( index, year ) {
                    for (var count = 0; count < yearArray.length; ++count) {
                        //in-loop interest amount holder
                        var interest = 0;

                        //in-loop monthly principal amount holder
                        var monthlyPrincipal = 0;
                        interest = balance * monthlyRate;
                        totalInterest += interest;
                        monthlyPrincipal = payment - interest;
                        totalBalance = balance - monthlyPrincipal;
                        monthlyPayment = monthlyPrincipal + interest;  
                        var totalPrinciplecount = 0;
                        var totalInterestcount = 0;
                        var totalBalancecount=0;
                        var totalinterestyear=0;
                        var finaltotalinterestyear = 0;
                        //yearlyPrincipalData += monthlyPrincipal;
                        $('.table-responsive td').each(function(){
                          if($(this).data('monthlyprincipal') && $(this).data('year') == (curYear.getFullYear()+yearcount+1)){
                            totalPrinciplecount += parseFloat($(this).data('monthlyprincipal'));
                          }

                          if($(this).data('interest') && $(this).data('year') == (curYear.getFullYear()+yearcount+1)){
                                totalInterestcount += parseFloat($(this).data('interest'));
                            }

                            if($(this).data('totalbalance') && $(this).data('month') == 'December' && $(this).data('year') == (curYear.getFullYear()+yearcount+1)){
                                totalBalancecount += parseFloat($(this).data('totalbalance'));
                            }
                            if($(this).data('interest')){
                                totalinterestyear += parseFloat($(this).data('interest'));
                            }
                        });   

                        var pricevalueyear = $("#price-range").val();  
                        var finaltotalinterestyear = parseInt(pricevalueyear) + totalinterestyear;
                        // console.log(finaltotalinterestyear)
                        var finaltotalInterestPayment = $('.totalinterestyear').text(totalinterestyear.toLocaleString(undefined, { minimumFractionDigits: 2,maximumFractionDigits: 2 }));
                        // console.log(totalinterestyear);                 
                        
                        if(totalBalance <= 0){
                          totalBalance = 0.00;
                        }  
                        result += "<tr align=center>";
                        result += "<td width='20%'><label><big>" + (curYear.getFullYear() + yearcount) + "</big></label></td>";
                        // console.log(yearcount);
                        yearcount++;
                        //calc the in-loop monthly principal and display Principal  
                        result += "<td> $" + totalPrinciplecount.toLocaleString(undefined, { minimumFractionDigits: 2,maximumFractionDigits: 2 }) + "</td>";
                        //calc the in-loop interest amount and display Interest   
                        result += "<td> $" + totalInterestcount.toLocaleString(undefined, { minimumFractionDigits: 2,maximumFractionDigits: 2 }) + "</td>";  
                        if(totalBalance != 0){
                          result += "<td> $" + totalBalancecount.toLocaleString(undefined, { minimumFractionDigits: 2,maximumFractionDigits: 2 }) + "</td>";  
                        }else{
                          result += "<td> $" + totalBalancecount.toLocaleString(undefined, { minimumFractionDigits: 2,maximumFractionDigits: 2 }) + "</td>";
                        }               
                        
                        //end the table row on each iteration of the loop 
                        result += "</tr>";

                        //update the balance for each loop iteration
                        balance = balance - monthlyPrincipal;
                    };                  

                    //Final piece added to return string before returning it - closes the table
                    result += "</table></div></div></div></div>";

                    //returns the concatenated string to the page
                    return result;
                }

                function validateInputs(value) {
                    //some code here to validate inputs
                    if ((value == null) || (value == "")) {
                        return false;
                    } else {
                        return true;
                    }
                }
                ////get chart data on load time
                //getaxisloaddata(pricevalue,downpaymentvalue,interestvalue,loantermvalue);
                //get xaxis data
                function getaxischangedata(pricevalue, downpaymentvalue, interestvalue, loantermvalue) {

                    var balance = parseFloat(pricevalue - downpaymentvalue);
                    var interestRate = parseFloat(interestvalue / 100.0);
                    var terms = loantermvalue * 12;
                    var chartdata = [];
                    var categoriesdata = [];

                    var monthlyRate = interestRate / 12;

                    //Calculate the payment
                    var payment = balance * (monthlyRate / (1 - Math.pow(
                            1 + monthlyRate, -terms)));

                    for (var count = 0; count < terms; ++count) {
                        var interest = 0;

                        var monthlyPrincipal = 0;
                        interest = balance * monthlyRate;
                        monthlyPrincipal = payment - interest;
                        totalBalance = balance - monthlyPrincipal;
                        monthlyPayment = monthlyPrincipal + interest;
                        if(totalBalance <= 0 ){
              totalBalance = 0.00;
                        }
                        chartdata.push(totalBalance);
                        // interest.toFixed(2);
                        balance = balance - monthlyPrincipal;
                        //x categories data update

                        categoriesdata.push("Month" + (count + 1));
                    }                    

                    //change xaxis categories
                    chart.xAxis[0].setCategories(categoriesdata);
                    chart.update({
                        series: [{
                                data: chartdata
                            }]
                    });
                }

                function tableElementClose(){
                    $('.header').parent().next('tbody').slideToggle(100);
                    $('.header:first').parent().next('tbody').slideToggle(100);                
                    $('.header:first').toggleClass('open');
                }

                function sliderCSSDynamic(obj){
                  var min = obj.attr('min');
          var max = obj.attr('max');
          var current = obj.val();
          if(obj.attr('id') == 'loan-term-range'){
            diff = max-min;
            var per = (current*100)/diff;
            per = per - 25;
          }else{
            var per = (current*100)/max;  
          }
          
          obj.css( 'background', 'linear-gradient(to right, #fd0012 0%, #fd0012 '+per+'%, #d3d3d3 ' + per + '%, #d3d3d3 100%)' );
                }
                
                $("#show-hidden-table").on("click", function(e){
               //$('#show-hidden-table').click(function(e) {
                    e.preventDefault();

                    if($('.hidden-table').css('display') == 'none')
          {
            $("#show-hidden-table").html('Close Payment Schedule Table');
          }else{
            $("#show-hidden-table").html('View Payment Schedule Table');
            
          }
          $('.hidden-table').slideToggle("fast");
                    // Alternative animation for example
                    // slideToggle("fast");
                });

                $('#loan-term-range').trigger('oninput');

                $(document).on('click','.header', function(){
                    $(this).parent().next("tbody").slideToggle(100);
                    $(this).toggleClass('open');
                });
            });
        }

       loadchart();
        })(this.jQuery);

    </script>    
</head>

