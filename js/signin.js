AWS.config.region= "us-west-2";
  // endpoint: 'dynamodb.us-west-2.amazonaws.com',
  // accessKeyId default can be used while using the downloadable version of DynamoDB. 
  // For security reasons, do not store AWS Credentials in your files. Use Amazon Cognito instead.
AWS.config.accessKeyId= "acces_key";
  // secretAccessKey default can be used while using the downloadable version of DynamoDB. 
  // For security reasons, do not store AWS Credentials in your files. Use Amazon Cognito instead.
AWS.config.secretAccessKey= "secret_key";
// });

var docClient = new AWS.DynamoDB.DocumentClient();

function authentication(){
	var email=document.getElementById("email_address").value;
	var password=document.getElementById("pw").value;
}

function query_data(yearInSchool){
    var params = {
    TableName : "Student",
    FilterExpression: "yearInSchool = :keyValue",

    ExpressionAttributeValues: {
        ":keyValue":email
    }
	};


	docClient.scan(params, function(err, data) {
	    if (err) {
	        console.error("Unable to query. Error:", err);
	    } else {
	        console.log("Query succeeded:", data);
	        data.Items.forEach(function(item) {
	            console.log(item.student_email);
	        });
	    }
	});
}