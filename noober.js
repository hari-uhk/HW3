function pageLoad() {
  // 👇 YOUR CODE BEGINS HERE. DON'T CHANGE ANY OTHER CODE. 👇

  // 🔥🔥🔥 YOUR CODE GOES HERE 🔥🔥🔥
  // the 'ride' variable contains data about a random ride (i.e. when the page)
  // is refreshed or reloaded, the 'ride' variable will contain something different
  // to get started, try to write other parts of 'ride' to the JavaScript console in Chrome
  // e.g. ask 'ride' for its length or only grab the first member of the Array
  console.log(ride)
  console.log(ride.length)

  // these variables map to the elements on the finished page;
  // assign the proper value to each variable
let totalRidingPassengers
  if (ride.length == 1) {
    
    // accessing Passenger 1 details if ride array length = 1
    passenger1Name = ride[0].passengerDetails.first + " " + ride[0].passengerDetails.last
    passenger1Phone = ride[0].passengerDetails.phoneNumber
    passenger1NumberOfPassengers = ride[0].numberOfPassengers
    passenger1PickupAddressLine1 = ride[0].pickupLocation.address
    passenger1PickupAddressLine2 = ride[0].pickupLocation.city + ", " + ride[0].pickupLocation.state  + " " + ride[0].pickupLocation.zip 
    passenger1DropoffAddressLine1 = ride[0].dropoffLocation.address
    passenger1DropoffAddressLine2 = ride[0].dropoffLocation.city + ", " + ride[0].dropoffLocation.state  + " " + ride[0].dropoffLocation.zip 
  
    totalRidingPassengers = passenger1NumberOfPassengers
 
    // defining type of service based on criteria
    if (ride[0].purpleRequested == true ){
      levelOfService = 'Noober Purple'
    } else if (totalRidingPassengers > 3) {
      levelOfService = 'Noober-XL'
    } else {
      levelOfService = "Noober X"
    }
  
  
  
  } 
  // accessing Ride 1 and Ride 2 data when ride array length is = 2, and setting service as Pool
  else if (ride.length == 2 ){
    levelOfService = 'Noober Pool'
    passenger1Name = ride[0].passengerDetails.first + " " + ride[0].passengerDetails.last
    passenger1Phone = ride[0].passengerDetails.phoneNumber
    passenger1NumberOfPassengers = ride[0].numberOfPassengers
    passenger1PickupAddressLine1 = ride[0].pickupLocation.address
    passenger1PickupAddressLine2 = ride[0].pickupLocation.city + ", " + ride[0].pickupLocation.state  + " " + ride[0].pickupLocation.zip 
    passenger1DropoffAddressLine1 = ride[0].dropoffLocation.address
    passenger1DropoffAddressLine2 = ride[0].dropoffLocation.city + ", " + ride[0].dropoffLocation.state  + " " + ride[0].dropoffLocation.zip 
  
    passenger2Name = ride[1].passengerDetails.first + " " + ride[1].passengerDetails.last
    passenger2Phone = ride[1].passengerDetails.phoneNumber
    passenger2NumberOfPassengers = ride[1].numberOfPassengers
    passenger2PickupAddressLine1 = ride[1].pickupLocation.address
    passenger2PickupAddressLine2 = ride[1].pickupLocation.city + ", " + ride[1].pickupLocation.state  + " " + ride[1].pickupLocation.zip 
    passenger2DropoffAddressLine1 = ride[1].dropoffLocation.address
    passenger2DropoffAddressLine2 = ride[1].dropoffLocation.city + ", " + ride[1].dropoffLocation.state  + " " + ride[1].dropoffLocation.zip 
  
    totalRidingPassengers = passenger1NumberOfPassengers + passenger2NumberOfPassengers

    } 
    // accessing Ride 1, Ride 2 and Ride 3 data when ride array length is = 3, and setting service as Pool
    else if (ride.length == 3) {
    levelOfService = 'Noober Pool'
    passenger1Name = ride[0].passengerDetails.first + " " + ride[0].passengerDetails.last
    passenger1Phone = ride[0].passengerDetails.phoneNumber
    passenger1NumberOfPassengers = ride[0].numberOfPassengers
    passenger1PickupAddressLine1 = ride[0].pickupLocation.address
    passenger1PickupAddressLine2 = ride[0].pickupLocation.city + ", " + ride[0].pickupLocation.state  + " " + ride[0].pickupLocation.zip 
    passenger1DropoffAddressLine1 = ride[0].dropoffLocation.address
    passenger1DropoffAddressLine2 = ride[0].dropoffLocation.city + ", " + ride[0].dropoffLocation.state  + " " + ride[0].dropoffLocation.zip 
  
    passenger2Name = ride[1].passengerDetails.first + " " + ride[1].passengerDetails.last
    passenger2Phone = ride[1].passengerDetails.phoneNumber
    passenger2NumberOfPassengers = ride[1].numberOfPassengers
    passenger2PickupAddressLine1 = ride[1].pickupLocation.address
    passenger2PickupAddressLine2 = ride[1].pickupLocation.city + ", " + ride[1].pickupLocation.state  + " " + ride[1].pickupLocation.zip 
    passenger2DropoffAddressLine1 = ride[1].dropoffLocation.address
    passenger2DropoffAddressLine2 = ride[1].dropoffLocation.city + ", " + ride[1].dropoffLocation.state  + " " + ride[1].dropoffLocation.zip 
  
    passenger3Name = ride[2].passengerDetails.first + " " + ride[2].passengerDetails.last
    passenger3Phone = ride[2].passengerDetails.phoneNumber
    passenger3NumberOfPassengers = ride[2].numberOfPassengers
    passenger3PickupAddressLine1 = ride[2].pickupLocation.address
    passenger3PickupAddressLine2 = ride[2].pickupLocation.city + ", " + ride[2].pickupLocation.state  + " " + ride[2].pickupLocation.zip 
    passenger3DropoffAddressLine1 = ride[2].dropoffLocation.address
    passenger3DropoffAddressLine2 = ride[2].dropoffLocation.city + ", " + ride[2].dropoffLocation.state  + " " + ride[2].dropoffLocation.zip 
  
    totalRidingPassengers= passenger1NumberOfPassengers + passenger2NumberOfPassengers + passenger3NumberOfPassengers

  } 
    
  //console.log(levelOfService)
  // levelOfService = 'Tacos'
  // passenger1Name, passenger1Phone, passenger1NumberOfPassengers
  // passenger1PickupAddressLine1, passenger1PickupAddressLine2
  // passenger1DropoffAddressLine1, passenger1DropoffAddressLine2
  // passenger2Name, passenger2Phone, passenger2NumberOfPassengers
  // passenger2PickupAddressLine1, passenger2PickupAddressLine2
  // passenger2DropoffAddressLine1, passenger2DropoffAddressLine2
  // passenger3Name, passenger3Phone, passenger3NumberOfPassengers
  // passenger3PickupAddressLine1, passenger3PickupAddressLine2
  // passenger3DropoffAddressLine1, passenger3DropoffAddressLine2
  
//  if ride.length = 0, then 1 customer waiting, 2 then 2 waiting etc
//  number of passengeres = 1 then service = noober pool, else noober

  //  👆 YOUR CODE ENDS HERE. DON'T CHANGE ANY OTHER CODE 👆
}