<?php 



$themename = "Theme Options";



$shortname = "t";







/* Get Pages into a drop-down list */



$pages_list = get_pages();



$getpagnav = array();



foreach($pages_list as $apage) {



	$getpagnav[$apage->ID] = $apage->post_title;



}







$options = array (
    array( "name" => $themename." Options","type" => "title"),
    
    array( "name" => "General","type" => "section"),
    array( "type" => "open"),
    
   array( "name" => "Facebook", "desc" => "Please Enter Profile Link in this field. Leave empty if you dont have any.", "id" => "fb", "type" => "text"),
   array( "name" => "Twiiter", "desc" => "Please Enter Profile Link in this field. Leave empty if you dont have any.", "id" => "tw", "type" => "text"),
   array( "name" => "Youtube", "desc" => "Please Enter Profile Link in this field. Leave empty if you dont have any.", "id" => "yt", "type" => "text"),
   array( "name" => "Linked In", "desc" => "Please Enter Profile Link in this field. Leave empty if you dont have any.", "id" => "li", "type" => "text"),
   array( "name" => "Instagram", "desc" => "Please Enter Profile Link in this field. Leave empty if you dont have any.", "id" => "ig", "type" => "text"),
   array( "name" => "Advertiser Disclosure", "desc" => "Please Enter Advertiser Disclosure Text in this Field.", "id" => "adv_disc", "type" => "textarea"),
    array( "type" => "close", "spacer" => true),
    
//    array( "name" => "Home Page", "type" => "section"),
//    array( "type" => "open"),
//    array( "type" => "close", "spacer" => true),
    
    array( "name" => "ACF Custom Fields Settings", "type" => "section"),
    
    array( "type" => "open"),
        array( "name" => "Reviews Fields Group ID For Lenders", "desc" => "ACF Field group ID for Reviews Lender post type.", "id" => "field_group_reviews", "type" => "text", "std" => ""),
		array( "name" => "Reviews Fields Group ID For Compnay", "desc" => "ACF Field group ID for Reviews Company post type.", "id" => "field_group_reviews_comp", "type" => "text", "std" => ""),
        array( "name" => "Loans/Lenders Fields Group ID", "desc" => "ACF Field group ID for Lenders custom post type.", "id" => "field_group_lenders", "type" => "text", "std" => ""),
    array( "type" => "close", "spacer" => true),
    
    array( "name" => "Footer Settings", "type" => "section"),
    array( "type" => "open"),
        array( "name" => "Coypright", "desc" => "Footer copyright message.", "id" => "notice", "type" => "textarea", "std" => ""),
        array( "name" => "Phone", "desc" => "Footer Phone Number.", "id" => "p_number", "type" => "text", "std" => ""),
    array( "type" => "close", "spacer" => true)

);