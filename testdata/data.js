module.exports={
	loginData: {
		uid:'administrator',
		pwd:'qa',
		tenant:'system'	
	},

	baseUrl: 'http://localhost:8000',

	homePageModules: ['Home','Users','Groups','Roles','ACLs','Tenants'],

	newUserData: {
		fullName:"TestN123456",
		shortName:"TestN123456",
		description:"new user",
		email:"test12new1@test.com",
		distinguishedName:"SuperMan",
		guid:"12300",
		password:"qa",
		confirmPassword:"qa"
	},

	lockUserData:{
		uid:'lockuser',
		pwd:'qa',
		tenant:'system'
	},

	deleteUserData:{
		uid:'deleteuser',
		pwd:'qa',
		tenant:'system'
	},

	newRoleDetails : {

		Name:'ProfNew5',
		Description:'DescrpProfNew5'
	},


   
}

