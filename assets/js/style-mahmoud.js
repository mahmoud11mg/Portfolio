const themeToggler = document.getElementById("chk")

  let theme = window.localStorage.getItem("qservTheme") || "light"
  if (theme === "dark") {
    document.body.classList.add("dark")
   
    themeToggler.setAttribute("checked", "true")
  }

  themeToggler?.addEventListener("click", () => {
    theme = window.localStorage.getItem("qservTheme") || "light"
    if (theme === "light") {
      window.localStorage.setItem("qservTheme", "dark")
    } else {
      window.localStorage.setItem("qservTheme", "light")
    }
    document.body.classList.toggle("dark")
  });