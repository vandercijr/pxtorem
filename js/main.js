const convert = (a, b) => {
  return parseFloat(a / b);
};

document.addEventListener("DOMContentLoaded", (e) => {
  const px = document.getElementById("px");
  const rem = document.getElementById("rem");
  const root = document.getElementById("root");

  const value = convert(px.value, root.value);

  rem.value = value;

  px.addEventListener("keyup", (e) => {
    const rem = document.getElementById("rem");
    const root = document.getElementById("root");

    try {
      const n = parseFloat(e.target.value);
      const value = convert(n, root.value);
      rem.value = Number.isNaN(value) ? 0 : value;
    } catch (e) {}
  });

  rem.addEventListener("keyup", (e) => {
    const px = document.getElementById("px");
    const root = document.getElementById("root");

    try {
      const n = parseFloat(e.target.value);
      const value = convert(root.value, 1 / n);

      px.value = Number.isNaN(value) ? 0 : value;
    } catch (e) {}
  });

  root.addEventListener("keyup", (e) => {
    const px = document.getElementById("px");
    const rem = document.getElementById("rem");

    try {
      const n = parseFloat(e.target.value);
      const value = convert(px.value, n);
      rem.value = Number.isNaN(value) ? 0 : value;
    } catch (e) {}
  });
});
