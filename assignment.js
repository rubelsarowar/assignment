// https://github.com/rubelsarowar/assignment

// kilometer to meter convert start here

function kilometerToMeter(meterConvert){
    var meter = meterConvert * 1000;
    return meter;
}
var resultInMeter = kilometerToMeter(40);
console.log(resultInMeter);

// kilometer to meter convert end here

//budget Calculator Start here

function budgetCalculator(watch, phone, laptop){
    var totalBudget = (50 * watch) + (100 * phone) + (500 * laptop);
    return (totalBudget);
}
console.log (budgetCalculator (10 , 20 , 25));

//budget Calculator end here

// hotelCost start here

function hotelCost(days){
    var totalCost = 0;
        if( days <= 10){
            totalCost = days * 100;
        }
        else if ( days <= 20){
            var remaining = days - 10;
            var days11To20 = remaining * 80;
            totalCost = days0To10 + secondTenDays;
        }
        else{
            var days0To10 = 10 * 100;
            var days11To20 = 10 * 80;
            var days20up = days - 20;
            var remainingAllDays = days20up * 50;
            totalCost = days0To10 + days11To20 + remainingAllDays;
        }
            return totalCost;
    
}
var allCost = hotelCost(10);
console.log(allCost);

// hotelCost end here

// megaFriend start here

function megaFriend(names) {
    var largeName = 0;
    var largestName = names[0];
    
    for (var i = 0; i < names.length; i++) {  
              
      if (names[i].length > largeName) {
        largeName = names[i].length;
        largestName = names[i];
      }
    }
    return largestName;
  }
  var names = ['mahmud', 'emon', 'sagorKumar', 'sumaiya', 'rituAkter'];
  var nameResult = megaFriend(names);
  console.log(nameResult);

// megaFriend end here



