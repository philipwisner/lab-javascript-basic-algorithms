var hacker1= 'Jordi';
var nameInUpperCase=" ";
var hacker2= prompt("What is the hacker's name?");
var nameInUpperCaseReverse='';
console.log("The driver's name is: "+hacker1 );
console.log ("The navigator's name: "+hacker2);
if (hacker1.length>hacker2.length){
  console.log("The driver has the longest name, it has "+hacker1.length+" characters");
} else if (hacker1.length < hacker2.length){
 console.log ("Yo, navigator got the longest name, it has "+hacker2.length+" characters");
}else{
 console.log("Wow, you both got equally long names "+hacker1.length+" characters");
}
for (var i = 0; i < hacker1.length; i++) {
  nameInUpperCase+=hacker1[i].toUpperCase()+ " ";
}
console.log(nameInUpperCase); 

//var hacker3='Philip'; It's to test the next loop
for (var j= hacker2.length-1; j >=0 ; j--) {
  nameInUpperCaseReverse+=hacker2[j];
}
console.log(nameInUpperCaseReverse); */

if ( hacker1===hacker2){
  console.log("What? You both got the same name?");
}
else if (hacker1[0].localeCompare(hacker2[0]== -1)){
  console.log(hacker1+" The driver's name goes first ");
}
else{
  console.log(hacker2+"Yo, navigator goes first");
}
var str = prompt("Check to see if this is a palandrome?");
var removeChar = str.replace(/[^A-Z0-9]/ig, "").toLowerCase();
if (removeChar.toLowerCase() === removeChar.toLowerCase().split('').reverse().join('')) {
  console.log("true");
  } 
  else { 
    console.log("false"); 
  }
  var string=('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam suscipit erat ut risus hendrerit sollicitudin. Sed pellentesque varius turpis, ullamcorper finibus magna ultricies non. Ut lectus sem, vestibulum sed purus sit amet, volutpat semper nisi. Nam vitae nibh nec ligula aliquet dignissim aliquam nec turpis. Curabitur eu turpis volutpat, facilisis lorem et, dignissim nunc. Ut purus velit, pellentesque id molestie sit amet, venenatis vel felis. Nam maximus nulla in blandit porttitor. Nulla vitae velit hendrerit, faucibus leo id, porta tellus. In sed neque sed nibh ultricies imperdiet. Maecenas ipsum nulla, blandit eget feugiat id, feugiat vel tellus. Curabitur risus erat, posuere ac venenatis quis, porta non nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras hendrerit erat nulla, vitae ullamcorper mauris tincidunt quis. Phasellus hendrerit mauris ac aliquet dictum.Proin dapibus neque ac fermentum rhoncus. Proin eget risus accumsan, ultrices nibh eu, fermentum purus. Sed tincidunt purus nec mauris condimentum congue. Quisque cursus eros et urna dictum, sed dignissim ipsum vestibulum. Mauris scelerisque nisi sit amet massa laoreet, non pretium justo efficitur. Vivamus eu urna at justo tempus mattis. Mauris vel massa at sapien condimentum volutpat.Sed facilisis felis mollis sodales interdum. Maecenas convallis ante sed quam porttitor, sed placerat tellus ullamcorper. Pellentesque vulputate semper cursus. Nullam dapibus ipsum at diam fringilla, at rhoncus neque consequat. Nulla facilisi. Fusce porttitor sapien ac tempus luctus. Maecenas id orci vitae magna efficitur rutrum non vitae odio. Vivamus nec lectus ultricies, ultricies dolor non, egestas magna. Donec cursus vestibulum urna, non scelerisque quam porta eget. Curabitur tincidunt, justo eget varius gravida, lorem sapien tristique enim, at condimentum erat quam ac elit. In hac habitasse platea dictumst.');
 function wordCount(str){
   return str.split(" ").length;
    }
    console.log(wordCount(string));
    console.log(string.split(/\et\w/).length-1);
