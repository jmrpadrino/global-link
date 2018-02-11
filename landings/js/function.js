/*            
jQuery(document).ready(function() {
    jQuery("input[name='demo']").TouchSpin({
        initval: 1
    });
});
*/
function verifyForm() {
    jQuery("#add-to-cart-btn").click();
}	
$(document).ready(function()
                  {
    if (navigator.appName == "Opera")
    {
        $('#myModal').removeClass('fade');
    }
});

jQuery(function() {
    jQuery('#countryselector').change(function(){
        jQuery('.country').hide();
        jQuery('#' + $(this).val()).show("fast");
    });
});

jQuery(function() {
    jQuery('#stateselector').change(function(){
        jQuery('.state').hide();
        jQuery('#' + $(this).val()).show("fast");
    });
});

/* Verify valid phone number and add product to cart */
jQuery(document).ready(function() {
    jQuery("#phone-number").focusout(function(){
        //console.log('Focused out phone field, current value: ' + jQuery("#phone-number").val() );					
        if(jQuery("#phone-number").val() === "") { 
            jQuery("#phone-number").val( "COUNTRY + AREA + PHONE" );
        }
    });
    jQuery("#phone-number").focus(function(){
        //console.log('Focused in phone field');
        jQuery("#phone-number").val("");
    });
    jQuery("#add-to-cart-btn").click(function(){
        var phone = jQuery('#phone-number').val();
        var n = parseInt(phone);
        //console.log('Value number of phone: ' + n );
        //console.log('Phone: ' + phone );
        if( String(n) !== phone || n <= 0 ) {
            alert('Please enter a valid numeric phone number, without preceding zeros, '
                  + 'just country code + area code + phone number...');
            return false;						
        } else if( phone.length < 11 ) {
            alert('The phone number must be at least 11 digits long, without preceding zeros, '
                  + 'just country code + area code + phone number...');
            return false;						
        } else {
            jQuery('#loading_background').css('display','block');						
            window.location.href='https://www.global-link.us/checkout/cart/add?product=5&qty=1&options[6]=' + phone;										
            //alert('Adding product to cart...');				
        }
    });
});