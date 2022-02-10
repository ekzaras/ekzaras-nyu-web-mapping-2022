
$('#Al-Andaluse-Garden').on('click', function() {
  $(".right-half").html("<img src='https://www.egypttoday.com/siteimages/Larg/71578.jpg'/> Located on the island of Zamalek");
})

$('#Al-Horreya-Garden').on('click', function() {
  $(".right-half").html("<img src='https://english.ahram.org.eg/Media/News/2016/10/26/2016-636130875885868024-586.jpg'/>");
})

$('#Aquarium-Grotto-Garden').on('click', function() {
  $(".right-half").html("<img src='https://cairoscene.com/Content/Admin/Uploads/Articles/ArticlesMainPhoto/1131069/a03d8898-6776-4a65-bc46-64e0ebe371f0.jpg'/> Located on the island of Zamalek");
})

$('#Al-Azhar-Park').on('click', function() {
  $(".right-half").html("<img src='https://www.likealocalguide.com/media/cache/34/44/3444e7688732e87e9f3fc357a23b6264.jpg'/> Al Azhar Park is located on the eastern edge of Cairo and covers 30-hectares of land. <img src='https://d1zah1nkiby91r.cloudfront.net/s3fs-public/styles/featured_content/public/aktc-egypt-cairopark_after.jpg?c=5aaadb4c5811361d1484343ca7f7ebe9'/>");
});

$('#Manial-Garden').on('click', function() {
	$(".right-half").html("<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/GD-EG-Caire-AlManyal021.JPG/800px-GD-EG-Caire-AlManyal021.JPG'/>");
})

$('#Orman-Botanical-Garden').on('click', function() {
	$(".right-half").html("<img src='https://egyptopia.com/shared/images/Geographic/33/big/-el-orman-gardens-_33167_33167.jpg'/> Located in Giza to the west of the Nile River, the Orman Botanical Garden was established in 1875 by Khedive Isma'il Pasha.")
})

$('#Park-1').on('click', function() {
	$(".grid-container").html("<img src='https://www.egypttoday.com/siteimages/Larg/71578.jpg'/> Located on the island of Zamalek");
})

$('#Park-2').on('click', function() {
	$(".grid-container").html("<img src='https://www.egypttoday.com/siteimages/Larg/71578.jpg'/> Located on the island of Zamalek");
})

//for all -- should do what all code above does
$('.garden-container').on('click', function() {
  var gardenphoto = $(this).data('garden-photo')
  console.log('clicked garden-container!')
  $(".right-half").html(`<img src='${gardenphoto}'/>`)
})
//string
var firstName = 'Eleni'
var lastName = 'Zaras'
var fullName = firstName + ' ' + lastName
console.log('my name is', firstName, lastName)
console.log(fullName)

//numbers
var age = 29
var bfAge = 31

var combinedAge = age + bfAge

//arrays
var nameArray = ['Eleni','Miranda', 'Xavier', 'Elsa', 'Maelle']
nameArray.forEach(function (name, index) {
  $('html').append(`<p>${name} is stored in position ${index}</p>`)
})

//object
var eleniObject = {
  age: 29,
  almaMater: 'Michigan',
  borough: 'Brooklyn',
  tired: true,
  countriesLivedIn: [
    'USA'
    'France'
    'Greece'
  ]
}