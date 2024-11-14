const Dropdown = (props) => {
  return (
    <div>
      <h3>Custom Dropdown Menu</h3>
      <select>
        {props.options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
