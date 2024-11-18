function BoxColor({ color, inputValue, isActive }) {
  const texto = isActive ? `Soy el color ${color}` : "No soy el color";

  return (
   <div
      className={`box ${color} ${isActive ? "active" : ""}`}
      style={{ backgroundColor: isActive ? color : "transparent" }} >
      {texto}
    </div>
  );
}

export default BoxColor;