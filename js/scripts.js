// business logic
// Constructor for Contact
function Contact(first, last) {
  this.firstName = first;
  this.lastName = last;
  this.address = [];
}

// Prototype for fullName: concatonating firstName + lastName
Contact.prototype.fullName = function() {
  return this.firstName + ' ' + this.lastName;
}

// Constructor for Address
function Address(street, city, state, zip) {
  this.contactStreet = street;
  this.contactCity = city;
  this.contactState = state;
  this.contactZip = zip;
}

Address.prototype.fullAddress = function() {
  return this.contactStreet + ' ' + this.contactCity + ' ' + this.contactState + ' ' + this.contactZip;
}

function addAddress() {
  return '<span class="btn btn-primary btn-sm" id="add-address">Add Another Address</span>'
}

 // append new address field to the form
$('#add-address').click(function() {

});



// user interface logic
$(function() {
  $('form').submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $('.new-first-name').val();
    var inputtedLastName = $('.new-last-name').val();
    var newContact = new Contact(inputtedFirstName, inputtedLastName);

    $('#contacts').append('<li><span class="contact">' + newContact.fullName() + '</span> &nbsp;' + addAddress() + '</li>')

    $('.contact').last().click(function() {
      $('#show-contact').show();
      $('#show-contact h2').text(newContact.fullName());
      $('.first-name').text(newContact.firstName);
      $('.last-name').text(newContact.lastName);
    });

    $('#add-address').click(function() { // append new address field to the form
      $("#contacts").after('<div class="new-address col-md-offset-3">' +
                                   '<div class="form-group">' +
                                     '<label for="new-street">Street</label>' +
                                     '<input type="text" class="form-control new-street">' +
                                   '</div>' +
                                   '<div class="form-group">' +
                                     '<label for="new-city">City</label>' +
                                     '<input type="text" class="form-control new-city">' +
                                   '</div>' +
                                   '<div class="form-group">' +
                                     '<label for="new-state">State</label>' +
                                     '<input type="text" class="form-control new-state">' +
                                   '</div>' +
                                   '<div class="form-group">' +
                                     '<label for="new-state">Zip</label>' +
                                     '<input type="text" class="form-control new-zip">' +
                                   '</div>' +
                                 '</div>');
    });

  });




  // Jumbotron background image - goes inside UI Logic
  var jumboHeight = $('.jumbotron').outerHeight();
    function parallax(){
        var scrolled = $(window).scrollTop();
        $('.bg').css('height', (jumboHeight-scrolled) + 'px');
    }

    $(window).scroll(function(e){
        parallax();
    });

});
