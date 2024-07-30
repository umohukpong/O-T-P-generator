document.getElementById("generateBtn").addEventListener("click", generateOTPs);

function generateOTPs() {
  const otp = [];
  const evenNumbersOTP = [];
  const oddNumbersOTP = [];

  do {
    let evenRandomNumber = Math.floor(Math.random() * 10);
    if (evenRandomNumber !== 0) {
      if (evenRandomNumber % 2 === 0) {
        evenNumbersOTP.push(evenRandomNumber);
      }
    }
  } while (evenNumbersOTP.length < 5);

  do {
    let oddRandomNumber = Math.floor(Math.random() * 10);
    if (oddRandomNumber !== 0) {
      if (oddRandomNumber % 2 !== 0) {
        oddNumbersOTP.push(oddRandomNumber);
      }
    }
  } while (oddNumbersOTP.length < 5);

  let evenOtp = "";
  let oddOtp = "";

  for (let i = 0; i < 5; i++) {
    evenOtp += evenNumbersOTP[i];
    oddOtp += oddNumbersOTP[i];
  }

  document.getElementById("evenOtp").textContent = evenOtp;
  document.getElementById("oddOtp").textContent = oddOtp;
}
