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
    var school=document.getElementById("school").value;
    var phone=document.getElementById("phone").value;
    var year=document.getElementById("year").value;
    var linkedin=document.getElementById("linkedin_username").value;
    var github=document.getElementById("github_username").value;
    var lookingFor=document.getElementById("lookingFor").value
    var description='';
    if (isMentor==true){
        console.log(isMentor);
        var mentor_checkboxes = document.getElementsByName('mentor_checkbox');
        for (var i=0; i<mentor_checkboxes.length;i++)
        {
            if (mentor_checkboxes[i].checked) 
            {
                description += mentor_checkboxes[i].value+",";
            }
        }
    }

    window.location.href="student_profile.html?name="+name+"&email="+email+"&school="+school+"&phone="+phone+"&year="+year+"&linkedin="+linkedin+"&github="+github+"&lookingFor="+lookingFor+"&description="+description
    createItem(name, email, password, school, phone, year, linkedin,github,lookingFor, description);

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

function createItem(fullName, email, password, school, phone, yearInSchool, linkedinUserName, gitHubUserName, categories, description) {

    var params = {
        TableName :"Student",
        Item:{
            "student_email": email,
            "fullName": fullName,
            "password": password,
            "school":school,
            "phone":phone,
            "yearInSchool":yearInSchool,
            "linkedinUserName":linkedinUserName,
            "gitHubUserName":gitHubUserName,
            "categories":categories,
            "description":description
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