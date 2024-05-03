const btn = document.getElementById("messageSend");
const userName = document.getElementById("message");
const pass = document.getElementById("password");

btn.addEventListener("click", () => {
  const name = userName.value;
  const password = pass.value;

  data = {
    name: name,
    password: password,
  };

  console.log(typeof data);
  axios
    .post("http://localhost:3000/register", { data }) // Specify the URL and data
    .then((response) => {
      console.log("Response:", response.data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});
