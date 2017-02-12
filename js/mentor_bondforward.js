var isMentor=true;
function isMentorSelected(selectedValue)
{
    
    if(selectedValue){
        selectedNum= document.getElementById("needintern").value;
        if(selectedNum== selectedValue.value){
            document.getElementById("internship").style.display = "block";
            document.getElementById("mentorship").style.display = "none";
            isMentor=false;
        }else{
        document.getElementById("internship").style.display = "none";
        document.getElementById("mentorship").style.display = "block";
        }
    }
}
       
function sendValue(){
    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;
    var linkedin=document.getElementById("linkedin_username").value;
    var phone=document.getElementById("phone").value;
    var mentorship_type='';
    var mentorship=document.getElementsByName("mentorship_type");
    for (var i=0; i<mentorship.length; i++){
        if (mentorship[i].checked){
            mentorship_type+=mentorship[i].value+','
        }
    }
    var level=''
    var college_level=document.getElementsByName("college_level");
    for (var i=0; i<college_level.length; i++){
        if (college_level[i].checked){
            level+=college_level[i].value+','
        }
    }
    createItem(name, email, password, phone, linkedin,mentorship_type, level);

}

AWS.config.region= "us-west-2";
  // endpoint: 'dynamodb.us-west-2.amazonaws.com',
  // accessKeyId default can be used while using the downloadable version of DynamoDB. 
  // For security reasons, do not store AWS Credentials in your files. Use Amazon Cognito instead.
AWS.config.accessKeyId= "access_key";
  // secretAccessKey default can be used while using the downloadable version of DynamoDB. 
  // For security reasons, do not store AWS Credentials in your files. Use Amazon Cognito instead.
AWS.config.secretAccessKey= "secret_key";
// });

var docClient = new AWS.DynamoDB.DocumentClient();

function createItem(fullName, email, password,phone, linkedinUserName, mentorship_type, college_level) {
    var params = {
        TableName :"Mentors",
        Item:{
            "mentor_email": email,
            "fullName": fullName,
            "password": password,
            "linkedin":linkedinUserName,
            "phone":phone,
            "mentorship_type":mentorship_type,
            "college_level":college_level
        }
    };
    docClient.put(params, function(err, data) {
        if (err) {
            console.log("Unable to add item");
        } else {
            console.log("Successfully add item");
        }
    });
}