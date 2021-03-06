(function() {
    var video = document.getElementById('video'),
        canvas = document.getElementById('canvas'),
        context = canvas.getContext('2d'),
        photo = document.getElementById('photo'),
        vendorURL = window.URL || window.webkitURL;

    navigator.getMedia =    navigator.getUserMedia ||
                                navigator.webkitGetUserMedia ||
                                navigator.mozGetUserMedia ||
                                navigator.msGetUserMedia;
    navigator.getMedia({
        video: true,
        audio: false
    }, function(stream) {
        video.srcObject=stream;
        video.play();
    }, function(error) {
        //An error occured
        // error.code
    });

    document.getElementById('capture').addEventListener('click', function() {
        context.drawImage(video, 0, 0, 400, 300);
        //context.drawImage(photo, 0, 0, 100, 100);
        var image = canvas.toDataURL('image/png'); //.replace('image/png', 'image/octet-stream'); //my image URL
            //window.location.href=image;
        var form = document.createElement("form");
        form.action="picform.php";
        form.method="post";
        var inputtextbox = document.createElement("input");
        inputtextbox.type = "hidden";
        inputtextbox.value= image;
        inputtextbox.name = 'base64';
        form.appendChild(inputtextbox);
        var sticker = photo.src;
        sticker = sticker.replace(/^.*[\\\/]/, '');
        var textbox = document.createElement("input");
        textbox.type = "hidden";
        textbox.value= sticker ;
        textbox.name = 'sticker';
        form.appendChild(textbox);
        document.body.appendChild(form);
        form.submit();
    });
    var putfile = document.getElementById('upfile');
    var uploadfile = document.getElementById('choosefile');
    var bupload = document.getElementById('bupload');
    
    uploadfile.addEventListener('change', (event)=>
    {
        var reader = new FileReader;
        reader.addEventListener('load', (event)=>
        {
        putfile.src = reader.result;
        });
        reader.readAsDataURL(uploadfile.files[0]);
    });

    bupload.addEventListener('click', (event)=>{
        context.drawImage(putfile, 0, 0, 400, 300);
        //context.drawImage(photo, 0, 0, 100, 100);
        var image = canvas.toDataURL('image/png'); //.replace('image/png', 'image/octet-stream'); //my image URL
            //window.location.href=image;
        var form = document.createElement("form");
        form.action="picform.php";
        form.method="post";
        var inputtextbox = document.createElement("input");
        inputtextbox.type = "hidden";
        inputtextbox.value= image;
        inputtextbox.name = 'base64';
        form.appendChild(inputtextbox);
        var sticker = photo.src;
        sticker = sticker.replace(/^.*[\\\/]/, '');
        var textbox = document.createElement("input");
        textbox.type = "hidden";
        textbox.value= sticker ;
        textbox.name = 'sticker';
        form.appendChild(textbox);
        document.body.appendChild(form);
        form.submit();
    });
    
    var thumb = document.getElementById('thumb1');
    thumb.addEventListener("click", (event)=>{
        photo.setAttribute("src", 'img/albion.png');
    });

    var thumb = document.getElementById('thumb2');
    thumb.addEventListener("click", (event)=>{
        photo.setAttribute("src", 'img/chelsea.png');
    });

    var thumb = document.getElementById('thumb3');
    thumb.addEventListener("click", (event)=>{
        photo.setAttribute("src", 'img/crystalpalace.png');
    });

    var thumb = document.getElementById('thumb4');
    thumb.addEventListener("click", (event)=>{
        photo.setAttribute("src", 'img/liverpool.png');
    });

    var thumb = document.getElementById('thumb5');
    thumb.addEventListener("click", (event)=>{
        photo.setAttribute("src", 'img/manu.png');
    });

    var thumb = document.getElementById('thumb6');
    thumb.addEventListener("click", (event)=>{
    photo.setAttribute("src", 'img/sunderland.png');
    });

})();

