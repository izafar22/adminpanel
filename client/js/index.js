$('document').ready(function(){

function renderImage(file) {

  // generate a new FileReader object
  var reader = new FileReader();

  // inject an image with the src url
  reader.onload = function(event) {
    the_url = event.target.result
    $('#some_container_div').html("<img src='" + the_url + "' style='max-width:50%;max-height:50%;'/>")
  }
 
  // when the file is read it triggers the onload event above.
  reader.readAsDataURL(file);
}
 
// handle input changes
$("#ImgDetailtxtfile").change(function() {
    console.log(this.files)
    
    // grab the first image in the FileList object and pass it to the function
    renderImage(this.files[0])
});

$("#btnSubmit").click(function(e){
            e.preventDefault();
            console.log("polo");
        var  data={
        id :$("#txtEditClient").val(),
         txtSku : $("#txtSku").val(),
         txtTitle : $("#txtTitle").val(),
         txtBrand : $("#txtBrand").val(),
         txtSize : $("#txtSize").val(),
         txtQuantity : $("#txtQuantity").val(),
         txtWeight : $("#txtWeight").val(),
         txtType : $("#txtType").val(),
         txtPrice : $("#txtPrice").val(),
         txtDecription : $("#txtDecription").val(),
         txtkeywords : $("#txtkeywords").val(),
         ImgDetailtxtSku : $("#ImgDetailtxtSku").val(),
         ImgDetailtxtTitile : $("#ImgDetailtxtTitile").val(),
         ImgDetailtxtBrand : $("#ImgDetailtxtBrand").val(),
         ImgDetailtxtfile : $("#ImgDetailtxtfile").val()
        }
        $.ajax({
            type: "POST",
            url: "http://localhost:9000/api/addData",
            data: JSON.stringify(data),
            contentType: "application/json; charset=utf-8",
            dataType: "JSON",
            success: function (response) {
                if (response.d == "success") {
                    console.log("hdshg---___");
                    $('#alertupdateAgentsuccess').fadeTo(4000, 500).slideUp(500, function () { $('#alertupdateAgentsuccess').hide(); });
                    $('#alertupdateAgentsuccess').prop('disabled', false);
                }
                else {
                    console.log("hhjfj----")
                    error_box.style.display = "block";
                    error_message.innerHTML = response.d;
                }
            },
            failure: function (response) {
                alert(response.responseText);
            },
            error: function (response) {
                alert(response.responseText);
            }
        });
        })
    });