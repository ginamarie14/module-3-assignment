// Assignment code here

// Get references to the #generate element
function generatePassword(){
    var length = 12;
    var characters = [Q,W,E,R,T,Y,U,I,O,P,A,S,D,F,G,H,J,K,L,Z,X,C,V,B,N,M,q,w,e,r,t,y,u,i,o,p,a,s,d,f,g,h,j,k,l,z,x,c,v,b,n,m,1,2,3,4,5,6,7,8,9,0,'~','!','@','#','$','%','^','&','*','(',')',',','.','/',';',':','<','>','?','`'];
    Math.random()*n;
    var generateBtn = document.querySelector("#generate");
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
