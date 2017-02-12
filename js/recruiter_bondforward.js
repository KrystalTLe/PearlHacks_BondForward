
function sendValue(){
    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;
    var company=document.getElementById("company").value;
    var phone=document.getElementById("phone").value;
    var linkedin=document.getElementById("linkedin_username").value;
    console.log(name, email, password, company, phone, linkedin);
    var level='';
    var levels=document.getElementsByName("level_checkbox");

        for (var i=0; i<levels.length;i++)
        {
            if (levels[i].checked) 
            {
                level += levels[i].value+",";
            }
        }
    console.log(level);
    var internships='';
    var type_of_internship=document.getElementsByName("type_of_internship");
        for (var i=0; i<type_of_internship.length;i++)
        {
            if (type_of_internship[i].checked) 
            {
                internships+= type_of_internship[i].value+",";
            }
        }
    console.log(internships);
    createItem(email, name, password, company, phone, linkedin, level, internships);

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

function createItem(email, name, password, company, phone, linkedin, level, internships) {
    var params = {
        TableName :"Recruiters",
        Item:{
            "recruiter_email": email,
            "fullName": name,
            "password": password,
            "company":company,
            "phone":phone,
            "linkedin":linkedin,
            "level":level,
            "internships":internships
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