function celTofeh() {
    cel = document.getElementById("cel").value;
    cel = (cel * 9) / 5 + 32;
    document.getElementById("res").value = cel;
  }
  function fehTocel() {
    feh = document.getElementById("feh").value;
    feh = ((feh - 32) * 5) / 9;
    document.getElementById("res1").value = feh;
  }

