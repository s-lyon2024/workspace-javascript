// for hotel registration

var test = {
    hotelname: "marriot", 
    room: 350, 
    booked: 120,
    display: function(){
        return this.hotelname;
    }
};

console.log(test.hotelname);
console.log(test.room);
console.log(test.display());

// event
$(function(){
    $('#submit').click(reservation);
    $('#lists').click(displayR);
});

var guestgroup = new Array();
function reservation(){
    var guest = {
        name: $('#name').val(),
        numberofGuest: $('#Gnum').val(),
        room: $('#room').val(),
        checkin: $('#checkin').val(),
        checkout: $('#checkout').val()
    };
$('p:first').html("Thank you for your reservation!");
guestgroup.push(guest);   // store information in array
console.log(guestgroup);

    console.log(guest.name);
    console.log(guest.checkin);
    console.log(guest.checkout); 
    console.log(guest.numberofGuest);
    console.log(guest.room);
 

};

function displayR(){
    $("form").append("<table>");
    for(var i in guestgroup){
        var theguest = guestgroup[i];
        var row = "<tr><td>" +theguest.name+"</td><td>" + theguest.checkin + "</td><td>"+theguest.checkout +
        "</td><td>"+theguest.numberofGuest + "</td><td>"+theguest.room +"</td></tr>";
        $("table").append(row)
    }
    $("form").append("</table>");
}