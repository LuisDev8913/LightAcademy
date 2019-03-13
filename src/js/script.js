$( document ).ready(function() {
     var url = 'https://randomuser.me/api/?results=7';

    $( "a" ).click(function( event ) {
        event.preventDefault();
    });

    //Start Api Random User
    $.ajax({
        url: 'https://randomuser.me/api/?results=7',
        dataType: 'json',
        success: function(data) {
            for (var i = 0; i < data.results.length; i++) {
                var UserAvatar = data.results[i].picture.large;
                var UserLast = data.results[i].name.last;
                var UserFirst = data.results[i].name.first;
                var UserUsername = data.results[i].login.username;
                var UserPhone = data.results[i].phone;
                var UserLocation = data.results[i].location.city;
                var UserRegistr = data.results[i].registered.date;
                var UserEmail = data.results[i].email;
                var UserAddress = data.results[i].location.street;
                var UserZipCode = data.results[i].location.postcode;
                var UserBirthday = data.results[i].dob.date;
                var UserCell = data.results[i].cell;
                $('.users_content').append("<div class='users_line'>"+"<div class='users_list'>" +"<div class='users_avatar'>"
                    + "<div>" + "<img src='" + UserAvatar + "'>" + "</div>" + "</div>" + "<div class='users_last'>"
                    + UserLast + "</div>" + "<div class='users_first'>" + UserFirst + "</div>" + "<div class='users_username'>"
                    + UserUsername + "</div>" + "<div class='users_phone'>" + UserPhone + "</div>" + "<div class='users_location'>"
                    + UserLocation + "</div>" + "<div class='users_plus'>" + "<span>" + "➕" + "</span>" + "<span class='arrow'>" + "➖" + "</span>" + "</div>" +
                    "</div>"
                    +"<div class='main_info'>"+"<div class='users_info'>"+"<div>"+"<div class='users_info_name'>"
                    +"<strong>"+UserFirst+"</strong>"+"</div>"+"<p>"+"Username  "+ "<span>"+UserUsername+"</span>"+"</p>"+"<p>"+"Registered  "
                    + "<span>"+UserRegistr+"</span>"+"</p>"+"<p>"+"Email  "+ "<span>"+UserEmail+"</span>"+"</p>"+"</div>"+"<div class='users_info_mod'>"
                    +"<p>"+"Address  "+ "<span>"+UserAddress+"</span>"+"</p>"+"<p>"+"City  " +"<span>"+UserLocation+"</span>"+"</p>"
                    +"<p>"+"Zip"+"Code  "+ "<span>"+UserZipCode+"</span>"+"</p>"+"</div>"+"<div class='users_info_mod'>"+"<p>"
                    +"Birthday  "+ "<span>"+UserBirthday+"</span>"+"</p>"+"<p>"+"Cell  "+"<span>"+UserPhone+"</span>"+"</p>"+"<p>"
                    +"Cell  "+"<span>"+UserCell+"</span>"+"</p>" + "</div>" +"<div class='users_avatar'>"+"<img src='"+UserAvatar+"'>"+"</div>"+"</div>"
                    + "</div>"
                    +"</div>");

            }

            $('.users_line').click(function() {
                $(this).find(".main_info").toggle();
                $(this).find('.users_plus span').toggle();
            })
        }
    });
    //END Api Random User

    //Start Search
    $('#search').keydown(function () {
        $('#result').html('');
        var searchField = $('#search').val();
        var expression  = new RegExp(searchField, "i");
        $.getJSON(url, function (data){
            $.each(data, function (key, value){
                for(var d = 0 ; d < value.length; d++){
                    if(value[d].name.first.search(expression) != -1){
                        $('#result').html("<p>"+value[d].name.first+" "+value[d].name.last+"</p>")
                    }
                }
            })
        })
    });
    //END Search

    //Start new chart func
    function chartMale(){
        $.getJSON(url, function (data){
            $.each(data, function (key, value){
                for(var c = 0 ; c < value.length; c++){
                    if(value[c].gender == "male"){
                        var male = c++;
                    }else{
                        var female = c++;
                    }
                    new Chart(document.getElementById("pie-chart"), {
                        type: 'pie',
                        data: {
                            labels: ["Female", "Male"],
                            datasets: [{
                                label: "Gender of users",
                                backgroundColor: ["#7cb5ec","#434348"],
                                data: [female,male]
                            }]
                        },
                        options: {
                            title: {
                                display: true,
                                text: 'Gender of users.',
                                tooltips: {
                                    mode: 'nearest'
                                }
                            }

                        }
                    });
                }
            })
        });
    }
    chartMale();
    //END chart

    //Pop up
        //open click
        $('.js_button_campaign').click(function () {
            $('main').css('filter','blur(5px)');
            $('.js_overlay_campaign').fadeIn();
        });
        //close pop up
        $('.js_close_campaign').click(function () {
            $('.js_overlay_campaign').fadeOut();
            $('main').css('filter','none');
        });
        //close onclick
        $(document).mouseup(function (e) {
            var popup = $('.js_popup_campaign');
            if(e.target!=popup[0]&&popup.has(e.target).length === 0){
                $('.js_overlay_campaign').fadeOut();
                $('main').css('filter','none');
            }
        });
    //End pop up
});
























