/* ---------- */
function submitdata() {
    var v_oauth_token=$('#oauth_token').val();
    var v_gate_command=$('#gate_command').val();
    $('#success_para').html("<img class=\"small--height\" src=\"https://www.blogson.com.br/wp-content/uploads/2017/10/lg.colorful-progress-loader.gif\">");

    $.ajax( {
        type: 'post',
        url: '/trigger',
        data: {
            oauth_token:v_oauth_token,
            gate_command:v_gate_command
        },
        success: function (response) {
            $('#success_para').html(response);
            $('#success_para').delay(2500).fadeOut(1600, function () { $('#success_para').html(""); });
            $('#success_para').delay(10).fadeIn(10, function () { $('#success_para').html(""); });
        }
    });
return false;
}

function onSignIn(googleUser) {
    const form = document.createElement("form");
    form.method = "post";
    form.action = "/index.html";
    const oauth_token = document.createElement("input");
    oauth_token.type = "hidden";
    oauth_token.name = "oauth_token";
    oauth_token.value = googleUser.getAuthResponse().id_token;
    form.appendChild(oauth_token);
    document.body.appendChild(form);
    form.submit();
}

function showhide(id) {
    var e = document.getElementById(id);
    e.style.display = 'block';
}

    
if ('serviceWorker' in navigator) { 
    console.log('CLIENT: service worker registration in progress.'); 
    window.addEventListener('load', function() { 
        navigator.serviceWorker.register('/sw.js').then(function(registration) { 
            // Registration was successful 
            console.log('CLIENT: ServiceWorker registration successful with scope: ', registration.scope); 
        }, function(err) { 
            // registration failed :( 
            console.log('CLIENT: ServiceWorker registration failed: ', err); 
        }); 
    }); 
} 
