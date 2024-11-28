function $(selector) {
  const elements = document.querySelectorAll(selector);
  function applyStyle(propertyName, value) {
    elements.forEach((element) => {
      element.style[propertyName] = value;
    });
    return this;
  }
  return {
    css: applyStyle,
  };
}

$("#button")
  .css("color", "#fff")
  .css("backgroundColor", "#000")
  .css("fontWeight", "bold");
