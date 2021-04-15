var employeeDetails = {
    name : "Shayan Saha",
    salary : 56000,
    employeeID : 101,
    
    lastName : function() {
        var lname = this.name.split(" ")[1]; 
        // spliting the name with respect to space
        // "Shayan Saha".split(" ") === ["Shayan", "Saha"] means index 1 will be the lastname
        console.log(lname);
    },
};

employeeDetails.lastName(); // will return the lastname