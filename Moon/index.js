const singUp = () => {
  event.preventDefault();
  const input_name = document.getElementsByClassName("input_name")[0];
  const input_email = document.getElementsByClassName("input_email")[0];

  if (input_name.value === "" || input_email.value === "") {
    alert("Não foi possivel efetivar seu cadastro");
  }
};
